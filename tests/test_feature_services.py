import json
import os
import tempfile
import unittest

from feature_services import AuditTrail, policy_diff, response_drift, simulate_policy, simulate_policy_trace, policy_overview, validate_bulk_csv, support_bundle, mask, policy_as_code, compliance_findings, build_batch_plan, security_posture, operational_alerts, request_latency_trend, endpoint_anomalies, incident_evidence, change_control_plan, security_report_data, validate_request_chain, chain_lookup, resolve_chain_templates


class MemorySettings:
    def __init__(self): self.data = {}
    def value(self, key, default=None): return self.data.get(key, default)
    def setValue(self, key, value): self.data[key] = value


class FeatureServicesTests(unittest.TestCase):
    def test_policy_diff_masks_sensitive_values(self):
        changes = policy_diff({"client_secret": "secret"}, {"client_secret": "other"})
        self.assertEqual(1, len(changes))
        serialized = json.dumps(changes)
        self.assertIn("***", serialized)
        self.assertNotIn('"secret"', serialized)
        self.assertNotIn('"other"', serialized)

    def test_response_drift_matches_records_by_identity_and_ignores_order(self):
        before = {"items": [{"id": "b", "enabled": True}, {"id": "a", "enabled": True}]}
        after = {"items": [{"id": "a", "enabled": False}, {"id": "b", "enabled": True}]}
        drift = response_drift(before, after)
        self.assertEqual(1, len(drift["changes"]))
        self.assertEqual("$/items[id=a]/enabled", drift["changes"][0]["path"])
        self.assertEqual("high", drift["changes"][0]["impact"])
        self.assertEqual({"added": 0, "removed": 0, "changed": 1}, drift["summary"])
        reordered = response_drift(before, {"items": list(reversed(before["items"]))})
        self.assertTrue(reordered["unchanged"])
        self.assertEqual(reordered["baseline_sha256"], reordered["current_sha256"])

    def test_response_drift_masks_secrets_and_supports_volatile_fields(self):
        before = {"timestamp": "old", "client_secret": "never-show", "value": 1}
        after = {"timestamp": "new", "client_secret": "still-never-show", "value": 2}
        drift = response_drift(before, after, ignored_fields=["timestamp"])
        serialized = json.dumps(drift)
        self.assertNotIn("never-show", serialized)
        self.assertEqual(["timestamp"], drift["ignored_fields"])
        self.assertEqual(["$/value"], [item["path"] for item in drift["changes"]])
        timestamp_only = response_drift({"timestamp": "old"}, {"timestamp": "new"}, ignored_fields=["timestamp"])
        self.assertTrue(timestamp_only["unchanged"])
        self.assertEqual(timestamp_only["baseline_sha256"], timestamp_only["current_sha256"])

    def test_response_drift_reports_add_remove_and_hard_limit(self):
        drift = response_drift({"items": [{"id": "a"}, {"id": "b"}]}, {"items": [{"id": "b"}, {"id": "c"}]})
        self.assertEqual(1, drift["summary"]["added"]); self.assertEqual(1, drift["summary"]["removed"])
        limited = response_drift({}, {str(index): index for index in range(10)}, maximum_changes=3)
        self.assertEqual(3, len(limited["changes"])); self.assertTrue(limited["truncated"])

    def test_mask_handles_sensitive_http_header_variants(self):
        safe = mask({"Set-Cookie": "session=hidden", "X-API-Key": "hidden", "Proxy-Authorization": "hidden",
                     "auth-token": "hidden", "jwtToken": "hidden", "JSESSIONID": "hidden", "name": "Ada"})
        self.assertEqual("***", safe["Set-Cookie"])
        self.assertEqual("***", safe["X-API-Key"])
        self.assertEqual("***", safe["Proxy-Authorization"])
        self.assertEqual("***", safe["auth-token"])
        self.assertEqual("***", safe["jwtToken"])
        self.assertEqual("***", safe["JSESSIONID"])
        self.assertEqual("Ada", safe["name"])

    def test_simulator_uses_first_matching_rule(self):
        result = simulate_policy([
            {"name": "Staff", "conditions": {"group": "staff"}, "action": "allow"},
            {"name": "Fallback", "conditions": {}, "action": "block"},
        ], {"group": "staff"})
        self.assertEqual("allow", result["action"])
        self.assertEqual(1, result["position"])

    def test_policy_overview_trace_and_best_practices_are_transparent(self):
        rules = [{"name": "Open", "action": "allow", "conditions": {}}, {"name": "Open", "enabled": False}]
        overview = policy_overview({"rules": rules})
        self.assertEqual(2, overview["total"])
        trace = simulate_policy_trace(rules, {"group": "staff"})
        self.assertEqual(1, len(trace["trace"]))
        messages = [item["message"] for item in compliance_findings({"rules": rules})]
        self.assertIn("Allow rule has no conditions", messages)
        self.assertIn("Rule name is duplicated", messages)
        self.assertIn("Rule action is unspecified", messages)

    def test_bulk_validator_reports_headers_and_rows(self):
        result = validate_bulk_csv("name,email\nAda,\n", ["name", "email"])
        self.assertFalse(result["valid"])
        self.assertEqual(2, result["errors"][0]["row"])

    def test_batch_plan_is_validated_and_keeps_sensitive_values_out_of_paths(self):
        invalid = build_batch_plan("zia_create_users", [{"name": "Ada"}])
        self.assertFalse(invalid["valid"])
        self.assertEqual(["email"], invalid["errors"][0]["missing"])
        plan = build_batch_plan("zia_delete_users", [{"id": "user/a"}])
        self.assertTrue(plan["valid"])
        self.assertEqual("DELETE", plan["requests"][0]["method"])
        self.assertEqual("/api/v1/users/user%2Fa", plan["requests"][0]["path"])
        update = build_batch_plan("zia_update_users", [{"id": "user/a", "department": "Engineering"}])
        self.assertTrue(update["valid"])
        self.assertEqual("PUT", update["requests"][0]["method"])
        self.assertEqual({"department": "Engineering"}, update["requests"][0]["body"])
        self.assertFalse(build_batch_plan("zia_update_users", [{"id": "user/a"}])["valid"])

    def test_security_posture_is_local_and_flags_executable_anomalies(self):
        posture = security_posture([
            {"method": "GET", "status": 500, "duration_ms": 11_000},
            {"method": "POST", "status": 401},
            {"method": "DELETE", "status": 0},
            {"method": "PATCH", "status": 200},
            {"method": "PUT", "status": 200},
            {"method": "POST", "status": 200},
        ], audit_valid=False)
        self.assertLess(posture["score"], 100)
        self.assertEqual(1, posture["severity_counts"]["critical"])
        self.assertTrue(any(item["code"] == "repeated_failures" for item in posture["findings"]))

    def test_incident_evidence_is_timeline_sorted_and_redacted(self):
        evidence = incident_evidence(
            [{"timestamp": "2026-01-02", "method": "GET", "url": "https://example.test/users?access_token=hidden", "status": 500, "headers": {"Authorization": "hidden"}}],
            [{"timestamp": 1, "action": "policy_exported", "details": {"client_secret": "hidden"}}],
        )
        serialized = json.dumps(evidence)
        self.assertNotIn("hidden", serialized)
        self.assertEqual("high", evidence["timeline"][0]["severity"])

    def test_change_control_plan_is_redacted_and_has_rollback(self):
        plan = change_control_plan({"rules": [], "client_secret": "old"}, {"rules": [{"name": "Open", "action": "allow", "conditions": {}}], "client_secret": "new"})
        self.assertEqual("high", plan["risk"])
        self.assertTrue(plan["rollback_policy"])
        self.assertNotIn("new", json.dumps(plan))

    def test_security_report_data_has_redacted_ciso_facts(self):
        report = security_report_data("ciso", [{"method": "GET", "status": 500, "url": "https://example.test?token=hidden"}], [], True)
        self.assertEqual("ciso", report["kind"])
        self.assertEqual(1, report["posture"]["metrics"]["failed"])
        self.assertNotIn("hidden", json.dumps(report))

    def test_request_chain_validation_preserves_execution_body_but_rejects_unsafe_urls(self):
        plan = validate_request_chain([{"method": "POST", "url": "/api/v1/users", "body": {"name": "Ada"}}])
        self.assertTrue(plan["valid"])
        self.assertEqual({"name": "Ada"}, plan["steps"][0]["body"])
        self.assertFalse(validate_request_chain([{"method": "GET", "url": "http://example.test"}])["valid"])
        self.assertFalse(validate_request_chain([])["valid"])

    def test_request_chain_supports_only_prior_declarative_references(self):
        plan = validate_request_chain([
            {"id": "users", "method": "GET", "url": "/api/v1/users"},
            {"id": "detail", "method": "POST", "url": "/api/v1/users/{{users.items.0.id}}", "body": {"groupId": "{{users.items.0.group.id}}"}},
        ])
        self.assertTrue(plan["valid"]); self.assertEqual("detail", plan["steps"][1]["id"])
        self.assertFalse(validate_request_chain([{"id": "first", "url": "/{{later.id}}"}, {"id": "later", "url": "/users"}])["valid"])
        self.assertFalse(validate_request_chain([{"id": "a", "url": "/users", "headers": {"Authorization": "secret"}}])["valid"])
        self.assertFalse(validate_request_chain([{"id": "a", "url": "/users/{{ python() }}"}])["valid"])

    def test_chain_resolution_preserves_body_types_and_encodes_url_values(self):
        context = {"users": {"items": [{"id": "user/a", "enabled": True, "groups": ["soc"]}]}}
        self.assertEqual("user/a", chain_lookup(context, "users.items.0.id"))
        self.assertEqual("/users/user%2Fa", resolve_chain_templates("/users/{{users.items.0.id}}", context, url_value=True))
        self.assertIs(True, resolve_chain_templates("{{users.items.0.enabled}}", context))
        self.assertEqual(["soc"], resolve_chain_templates("{{users.items.0.groups}}", context))

    def test_operational_alerts_use_local_history_and_configured_threshold(self):
        alerts = operational_alerts([
            {"status": 500, "url": "https://example.test/a?token=hidden"},
            {"status": 429, "url": "https://example.test/b?token=hidden"},
            {"status": 0, "url": "https://example.test/c?token=hidden", "duration_ms": 12_000},
        ], audit_valid=True, error_threshold=2)
        self.assertEqual(2, alerts["threshold"])
        self.assertTrue(any(alert["code"] == "error_threshold" for alert in alerts["alerts"]))
        self.assertNotIn("hidden", json.dumps(alerts))
        proactive = operational_alerts([{"status": 200, "url": "https://example.test", "response_headers": {"X-RateLimit-Remaining": "0"}}], True)
        self.assertTrue(any(alert["code"] == "rate_limit_exhausted" for alert in proactive["alerts"]))

    def test_request_latency_trend_uses_recent_local_samples(self):
        trend = request_latency_trend([{"timestamp": "2026-01-01 10:00:00", "duration_ms": 45}, {"timestamp": "2026-01-01 10:00:02", "duration_ms": "120"}], limit=1)
        self.assertEqual([("10:00:02", 120.0)], trend)

    def test_endpoint_anomalies_flag_failure_and_latency_regressions(self):
        events = [
            {"url": "https://example.test/users", "status": 200, "duration_ms": 100},
            {"url": "https://example.test/users", "status": 200, "duration_ms": 120},
            {"url": "https://example.test/users", "status": 500, "duration_ms": 3000},
        ]
        codes = {item["code"] for item in endpoint_anomalies(events)}
        self.assertEqual({"endpoint_failure_regression", "endpoint_latency_anomaly"}, codes)
        alerts = operational_alerts(events, True)
        self.assertTrue(any(alert["code"] == "endpoint_failure_regression" for alert in alerts["alerts"]))

    def test_audit_trail_is_hash_linked(self):
        settings = MemorySettings(); trail = AuditTrail(settings)
        trail.append("request", {"token": "do-not-store"})
        trail.append("export", {"format": "csv"})
        self.assertTrue(trail.verify())
        self.assertNotIn("do-not-store", settings.value("audit/events"))
        events = json.loads(settings.value("audit/events")); events[0]["action"] = "tampered"
        settings.setValue("audit/events", json.dumps(events))
        self.assertFalse(trail.verify())

    def test_support_bundle_is_redacted(self):
        fd, path = tempfile.mkstemp(suffix=".zip"); os.close(fd)
        try:
            support_bundle(path, {"api_key": "hidden", "status": "ok"}, [])
            import zipfile
            with zipfile.ZipFile(path) as archive:
                self.assertNotIn("hidden", archive.read("diagnostics.json").decode())
        finally:
            os.unlink(path)

    def test_policy_as_code_is_redacted_and_compliance_is_transparent(self):
        exported = policy_as_code({"api_key": "hidden", "rules": [{"name": "Open", "action": "allow", "conditions": {}}]})
        self.assertIn('"***"', exported)
        self.assertNotIn("hidden", exported)
        findings = compliance_findings({"rules": [{"name": "Open", "action": "allow", "conditions": {}}]})
        self.assertEqual("high", findings[0]["severity"])
