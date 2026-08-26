import json
import os
import tempfile
import unittest

from feature_services import AuditTrail, policy_diff, simulate_policy, simulate_policy_trace, policy_overview, validate_bulk_csv, support_bundle, mask, policy_as_code, compliance_findings, build_batch_plan, security_posture, operational_alerts, incident_evidence, change_control_plan, security_report_data, validate_request_chain


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

    def test_mask_handles_sensitive_http_header_variants(self):
        safe = mask({"Set-Cookie": "session=hidden", "X-API-Key": "hidden", "Proxy-Authorization": "hidden", "name": "Ada"})
        self.assertEqual("***", safe["Set-Cookie"])
        self.assertEqual("***", safe["X-API-Key"])
        self.assertEqual("***", safe["Proxy-Authorization"])
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

    def test_operational_alerts_use_local_history_and_configured_threshold(self):
        alerts = operational_alerts([
            {"status": 500, "url": "https://example.test/a?token=hidden"},
            {"status": 429, "url": "https://example.test/b?token=hidden"},
            {"status": 0, "url": "https://example.test/c?token=hidden", "duration_ms": 12_000},
        ], audit_valid=True, error_threshold=2)
        self.assertEqual(2, alerts["threshold"])
        self.assertTrue(any(alert["code"] == "error_threshold" for alert in alerts["alerts"]))
        self.assertNotIn("hidden", json.dumps(alerts))

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
