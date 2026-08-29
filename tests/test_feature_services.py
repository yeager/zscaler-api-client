import json
import os
import tempfile
import unittest

from feature_services import AuditTrail, policy_diff, response_drift, simulate_policy, simulate_policy_trace, policy_overview, policy_twin, validate_bulk_csv, support_bundle, mask, policy_as_code, compliance_findings, build_batch_plan, security_posture, operational_alerts, request_latency_trend, endpoint_anomalies, incident_evidence, soc_investigation_graph, change_control_plan, security_report_data, user_risk_report, compliance_assessment, executive_security_narrative, validate_request_chain, chain_lookup, resolve_chain_templates, environment_scope, environment_scope_metadata, obfuscate_identifiers, zdx_experience_journey, adaptive_anomalies, validate_detection_rule, evaluate_detection_rule, DETECTION_TEMPLATES, change_safety_assessment, rollback_package, verify_rollback_package, guided_playbook, smart_api_plan, security_event_export, read_only_mcp_manifest, terraform_review_handoff, exposure_access_analysis, investigation_note


class MemorySettings:
    def __init__(self): self.data = {}
    def value(self, key, default=None): return self.data.get(key, default)
    def setValue(self, key, value): self.data[key] = value


class FeatureServicesTests(unittest.TestCase):
    def test_zdx_journey_consumes_nested_graphql_output(self):
        response = {"data": {"devices": [{"name": "Workstation", "samples": [
            {"timestamp": "10:00", "zdxScore": 91, "deviceScore": 87, "latencyMs": 42, "packetLossPercent": 0.1, "cloudPathScore": 88, "applicationScore": 94},
            {"timestamp": "10:05", "zdxScore": 61, "latencyMs": 340, "packetLossPercent": 4.2},
        ]}]}}
        journey = zdx_experience_journey(response)
        self.assertEqual(5, journey["summary"]["observed_stages"])
        self.assertEqual(61, journey["summary"]["overall_score"])
        self.assertEqual(2, len(journey["series"]["latency_ms"]))
        self.assertTrue({"overall_score", "latency_ms", "packet_loss_percent"}.issubset({item["metric"] for item in journey["issues"]}))

    def test_zdx_journey_does_not_invent_missing_stages(self):
        journey = zdx_experience_journey({"data": {"latency": 80}})
        self.assertEqual(1, journey["summary"]["observed_stages"])
        self.assertEqual("observed", next(item for item in journey["stages"] if item["id"] == "network")["status"])
        self.assertEqual("no_data", next(item for item in journey["stages"] if item["id"] == "device")["status"])

    def test_adaptive_anomalies_explains_latency_and_status_regressions(self):
        history = [{"url": "https://tenant.example/api/users", "status": 200, "duration_ms": value} for value in (100, 105, 95, 110, 98)]
        history.append({"url": "https://tenant.example/api/users", "status": 503, "duration_ms": 1800})
        result = adaptive_anomalies(history, "balanced", 5)
        self.assertEqual(1, result["summary"]["endpoints_evaluated"])
        self.assertEqual({"adaptive_latency_regression", "adaptive_status_regression"}, {item["code"] for item in result["findings"]})
        self.assertIn("MAD", result["method"])

    def test_detection_lab_is_declarative_bounded_and_masked(self):
        invalid = validate_detection_rule({"conditions": [{"field": "__class__", "operator": "eval", "value": "danger"}]})
        self.assertFalse(invalid["valid"])
        result = evaluate_detection_rule(DETECTION_TEMPLATES["server_errors"], [
            {"status": 200, "url": "https://example.test/ok", "duration_ms": 10},
            {"status": 503, "url": "https://example.test/fail?api_key=hidden", "duration_ms": 20, "authorization": "hidden"},
        ])
        self.assertTrue(result["valid"]); self.assertEqual(1, result["summary"]["matched"])
        rendered = json.dumps(result)
        self.assertNotIn("hidden", rendered); self.assertNotIn("authorization", rendered)

    def test_detection_lab_supports_header_lookup_without_code_execution(self):
        rule = {"match": "all", "conditions": [{"field": "response_headers.Retry-After", "operator": "exists", "value": True}]}
        result = evaluate_detection_rule(rule, [{"status": 429, "response_headers": {"retry-after": "60"}}])
        self.assertEqual(1, result["summary"]["matched"])

    def test_change_safety_has_explicit_gates_and_tamper_evident_rollback(self):
        before = {"rules": [{"name": "Staff", "action": "allow", "conditions": {"group": "staff"}}]}
        after = {"rules": [{"name": "Open", "action": "allow", "conditions": {}}]}
        assessment = change_safety_assessment(before, after, {"reference": "CHG-1", "owner": "Operator", "rollback": True})
        self.assertGreaterEqual(assessment["risk_score"], 25); self.assertFalse(assessment["ready_for_external_review"])
        self.assertIn("reviewer", {item["id"] for item in assessment["blocking_gates"]})
        package = rollback_package(before, after, "CHG-1"); self.assertTrue(verify_rollback_package(package)["valid"])
        package["payload"]["rollback_policy"] = {}; self.assertFalse(verify_rollback_package(package)["valid"])

    def test_guided_playbook_tracks_only_explicit_completed_steps(self):
        playbook = guided_playbook("api_outage", [{"action": "playbook_step_completed", "details": {"step_id": "api_outage-1"}}])
        self.assertEqual(1, playbook["summary"]["complete"]); self.assertEqual(6, playbook["summary"]["total"])
        self.assertEqual("pending", playbook["steps"][1]["status"])

    def test_smart_api_plan_is_deterministic_read_first_and_never_ready_to_run(self):
        catalog = [
            {"product": "zia", "name": "List users", "description": "Get users", "method": "GET", "url": "https://api.zsapi.net/users"},
            {"product": "zia", "name": "Delete user", "description": "Delete users", "method": "DELETE", "url": "https://api.zsapi.net/users/{id}"},
        ]
        plan = smart_api_plan("users", catalog)
        self.assertEqual("GET", plan["candidates"][0]["method"]); self.assertFalse(plan["ready_to_run"])
        self.assertEqual(plan, smart_api_plan("users", catalog))

    def test_siem_formats_are_masked_and_line_oriented(self):
        events = [{"timestamp": "now", "method": "GET", "url": "https://example.test/users?api_key=hidden", "status": 503, "duration_ms": 42, "authorization": "hidden"}]
        for format_name, marker in (("jsonl", '"status":"503"'), ("cef", "CEF:0|"), ("leef", "LEEF:2.0|")):
            rendered = security_event_export(events, format_name); self.assertIn(marker, rendered); self.assertNotIn("hidden", rendered); self.assertTrue(rendered.endswith("\n"))

    def test_mcp_manifest_and_terraform_handoff_are_non_executable(self):
        manifest = read_only_mcp_manifest({"environment_id": "tenant", "environment": "Tenant"})
        self.assertFalse(manifest["writes_enabled"]); self.assertFalse(manifest["network_execution_enabled"])
        handoff = terraform_review_handoff({"client_secret": "hidden", "rules": []})
        self.assertEqual({"README.txt", "manifest.json", "source-policy.json"}, set(handoff)); self.assertNotIn("hidden", json.dumps(handoff)); self.assertFalse(json.loads(handoff["manifest.json"])["apply_enabled"])

    def test_exposure_and_access_analysis_uses_full_nested_response(self):
        response = {"data": {"applications": [{"name": "Payroll", "internetFacing": True, "severity": "high", "owners": [{"email": "owner@example.test", "roles": ["SuperAdmin", "Read"]}]}]}}
        result = exposure_access_analysis(response)
        self.assertGreaterEqual(result["summary"]["exposed_assets"], 1); self.assertEqual(1, result["summary"]["high_permissions"])
        self.assertTrue(result["deception_recommendations"]); self.assertIn("human approval", result["disclaimer"])

    def test_investigation_note_is_bounded_masked_and_tenant_scoped(self):
        note = investigation_note("Incident", "Authorization: Bearer hidden", ["soc", "priority"], {"environment_id": "tenant-a", "environment": "Tenant A"})
        self.assertNotIn("hidden", json.dumps(note)); self.assertEqual("tenant-a", note["scope"]["environment_id"]); self.assertEqual(24, len(note["note_id"]))
        with self.assertRaises(ValueError): investigation_note("", "", [])

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
        self.assertNotIn("hidden", mask("HTTP 401 client_secret=hidden"))
        self.assertEqual("Authorization: ***", mask("Authorization: Bearer hidden-value"))
        self.assertNotIn("hidden", mask('{"client_secret":"hidden","name":"safe"}'))
        self.assertEqual("https://example.test/callback#***", mask("https://example.test/callback#access_token=hidden"))

    def test_environment_scope_treats_legacy_records_as_default(self):
        records = [{"id": 1}, {"id": 2, "environment_id": "tenant-b"}]
        self.assertEqual([{"id": 1}], environment_scope(records, "default"))
        self.assertEqual([records[1]], environment_scope(records, "tenant-b"))
        self.assertEqual(records, environment_scope(records, "*"))
        self.assertEqual("*", environment_scope_metadata("*", "All")["environment_id"])

    def test_identifier_obfuscation_is_stable_selective_and_non_reversible(self):
        source = {"environment": "Production Europe", "email": "ada@example.com", "sourceIp": "10.1.2.3", "url": "https://tenant.example.com/users/42", "resourceId": 42, "name": "Finance policy", "rule": "Allow staff"}
        first = obfuscate_identifiers(source, "a" * 64)
        second = obfuscate_identifiers(source, "a" * 64)
        rotated = obfuscate_identifiers(source, "b" * 64)
        self.assertEqual(first, second)
        self.assertNotEqual(first["environment"], rotated["environment"])
        serialized = json.dumps(first)
        for original in ("Production Europe", "ada@example.com", "10.1.2.3", "tenant.example.com"):
            self.assertNotIn(original, serialized)
        self.assertNotIn("Finance policy", serialized)
        self.assertEqual("Allow staff", first["rule"])
        self.assertRegex(str(first["sourceIp"]), r"^198\.(18|19)\.")
        users_only = obfuscate_identifiers(source, "a" * 64, {"addresses": False, "hosts": False, "tenants": False, "ids": False, "labels": False})
        self.assertEqual("10.1.2.3", users_only["sourceIp"])
        self.assertEqual(42, users_only["resourceId"])

    def test_identifier_obfuscation_covers_structured_strings_and_url_ids(self):
        source = {
            "body": '{"userId":"ada-42","tenantId":"tenant-7"}',
            "url": "https://user:password@tenant.example.com/users/42?customerId=acme&email=ada%40example.com",
        }
        safe = obfuscate_identifiers(source, "c" * 64)
        rendered = json.dumps(safe)
        for original in ("ada-42", "tenant-7", "tenant.example.com", "/42", "acme", "ada@example.com", "password"):
            self.assertNotIn(original, rendered)
        self.assertIn("host-", safe["url"])

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

    def test_soc_graph_correlates_complete_graphql_tree_and_flags_paths(self):
        response = {"data": {"users": [{
            "email": "analyst@example.test", "client_secret": "never-show",
            "devices": [{"deviceName": "laptop-7", "applications": [{"name": "Payroll", "severity": "high"}]}],
        }], "threats": [{"name": "Suspicious destination", "severity": "critical"}]}}
        graph = soc_investigation_graph(
            [{"method": "GET", "url": "https://api.example.test/users?token=hidden", "status": 500}],
            [{"action": "policy_change_reviewed", "details": {"token": "hidden"}}],
            response,
            {"environment_id": "tenant-a", "environment": "Tenant A"},
        )
        rendered = json.dumps(graph)
        self.assertNotIn("never-show", rendered); self.assertNotIn("token=hidden", rendered)
        self.assertTrue({"identity", "device", "application", "indicator"}.issubset({node["type"] for node in graph["nodes"]}))
        self.assertGreater(graph["summary"]["relationships"], 0)
        self.assertGreater(graph["summary"]["attack_paths"], 0)
        self.assertTrue(any(item["code"] == "security_indicator_observed" for item in graph["anomalies"]))
        self.assertIn("not proof", graph["disclaimer"])
        external = obfuscate_identifiers(graph, "d" * 64)
        external_ids = {node["id"] for node in external["nodes"]}
        self.assertTrue(all(edge["source_id"] in external_ids and edge["target_id"] in external_ids for edge in external["edges"]))
        self.assertTrue(all(identifier in external_ids for path in external["paths"] for identifier in path["node_ids"]))

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

    def test_user_risk_report_uses_explicit_evidence_only(self):
        report = user_risk_report({"users": [
            {"email": "observed@example.test"},
            {"email": "risk@example.test", "riskLevel": "high", "riskScore": 80, "mfa": False, "token": "hidden"},
        ]})
        self.assertEqual(2, report["summary"]["observed_users"])
        self.assertEqual(1, report["summary"]["explicit_risk_signals"])
        self.assertEqual("high", report["users"][0]["risk_level"])
        self.assertNotIn("hidden", json.dumps(report))

    def test_continuous_compliance_is_explicit_scoped_and_comparable(self):
        history = [{"method": "POST", "status": 500, "url": "https://example.test?token=hidden"}]
        policy = {"rules": [{"name": "Open", "action": "allow", "conditions": {}}], "client_secret": "hidden"}
        first = compliance_assessment(history, [], True, policy, scope={"environment_id": "tenant-a", "environment": "Tenant A"})
        self.assertEqual(4, first["summary"]["failed"])
        self.assertTrue(any(item["code"] == "LOCAL-PR-01" and item["status"] == "fail" for item in first["controls"]))
        self.assertNotIn("hidden", json.dumps(first)); self.assertEqual(64, len(first["assessment_id"]))
        improved = compliance_assessment([{"method": "GET", "status": 200}], [{"action": "policy_snapshot_saved"}], True,
                                         {"rules": [{"name": "Scoped", "action": "allow", "conditions": {"group": "staff"}}]}, first)
        self.assertGreater(improved["summary"]["score"], first["summary"]["score"])
        self.assertGreater(improved["summary"]["delta"], 0)

    def test_executive_narrative_uses_only_assessment_facts(self):
        assessment = compliance_assessment([{"method": "GET", "status": 500}], [], False)
        narrative = executive_security_narrative(assessment, {"score": 62})
        self.assertIn("requires attention", narrative["headline"])
        self.assertTrue(narrative["business_risks"]); self.assertTrue(narrative["recommended_actions"])
        self.assertIn("62/100", narrative["observations"][1])

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
        settings = MemorySettings(); settings.setValue("profiles/active_id", "tenant-b"); settings.setValue("profiles/active", "Tenant B"); trail = AuditTrail(settings)
        trail.append("request", {"token": "do-not-store"})
        trail.append("export", {"format": "csv"})
        self.assertTrue(trail.verify())
        self.assertEqual("tenant-b", trail.events()[0]["environment_id"])
        self.assertEqual("Tenant B", trail.events()[0]["environment"])
        self.assertNotIn("do-not-store", settings.value("audit/events"))
        events = json.loads(settings.value("audit/events")); events[0]["action"] = "tampered"
        settings.setValue("audit/events", json.dumps(events))
        self.assertFalse(trail.verify())

    def test_audit_trail_retention_uses_anchor_and_preserves_corruption(self):
        settings = MemorySettings(); trail = AuditTrail(settings)
        for index in range(1005):
            trail.append("event", {"index": index})
        self.assertEqual(1000, len(trail.events()))
        self.assertTrue(settings.value("audit/anchor"))
        self.assertTrue(trail.verify())
        anchor = settings.value("audit/anchor"); settings.setValue("audit/anchor", "tampered")
        self.assertFalse(trail.verify()); settings.setValue("audit/anchor", anchor)
        settings.setValue("audit/events", "not-json")
        rejected = trail.append("must_not_replace_corruption", {})
        self.assertFalse(rejected["persisted"])
        self.assertEqual("not-json", settings.value("audit/events"))
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

    def test_policy_twin_finds_shadowing_conflicts_and_blast_radius(self):
        baseline = {"rules": [{"name": "Staff", "conditions": {"group": "staff"}, "action": "allow"}]}
        proposed = {"rules": [
            {"name": "Open", "conditions": {}, "action": "allow"},
            {"name": "Staff", "conditions": {"group": "staff"}, "action": "block"},
            {"name": "Guests", "conditions": {"group": "guest"}, "action": "block"},
        ]}
        twin = policy_twin(proposed, baseline)
        self.assertEqual(3, twin["summary"]["rules"])
        self.assertGreaterEqual(twin["summary"]["conflicts"], 2)
        self.assertGreaterEqual(twin["summary"]["shadowed"], 2)
        self.assertGreater(twin["summary"]["blast_radius"], 0)
        self.assertIn("group", twin["blast_radius"]["affected_dimensions"])
        self.assertTrue(any(edge["relation"] == "shadowed_conflict" for edge in twin["edges"]))

    def test_policy_twin_treats_disjoint_conditions_as_non_conflicting(self):
        twin = policy_twin({"rules": [
            {"name": "Staff", "conditions": {"group": "staff"}, "action": "allow"},
            {"name": "Guests", "conditions": {"group": "guest"}, "action": "block"},
        ]})
        self.assertEqual(0, twin["summary"]["conflicts"])
