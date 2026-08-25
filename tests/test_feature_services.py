import json
import os
import tempfile
import unittest

from feature_services import AuditTrail, policy_diff, simulate_policy, validate_bulk_csv, support_bundle, policy_as_code, compliance_findings


class MemorySettings:
    def __init__(self): self.data = {}
    def value(self, key, default=None): return self.data.get(key, default)
    def setValue(self, key, value): self.data[key] = value


class FeatureServicesTests(unittest.TestCase):
    def test_policy_diff_masks_sensitive_values(self):
        changes = policy_diff({"token": "secret"}, {"token": "other"})
        self.assertEqual(1, len(changes))
        serialized = json.dumps(changes)
        self.assertIn("***", serialized)
        self.assertNotIn('"secret"', serialized)
        self.assertNotIn('"other"', serialized)

    def test_simulator_uses_first_matching_rule(self):
        result = simulate_policy([
            {"name": "Staff", "conditions": {"group": "staff"}, "action": "allow"},
            {"name": "Fallback", "conditions": {}, "action": "block"},
        ], {"group": "staff"})
        self.assertEqual("allow", result["action"])
        self.assertEqual(1, result["position"])

    def test_bulk_validator_reports_headers_and_rows(self):
        result = validate_bulk_csv("name,email\nAda,\n", ["name", "email"])
        self.assertFalse(result["valid"])
        self.assertEqual(2, result["errors"][0]["row"])

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
