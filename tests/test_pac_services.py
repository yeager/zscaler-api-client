import unittest

import pac_services as pac


class PacServicesTests(unittest.TestCase):
    def test_template_is_valid_and_has_gateway_fallback(self):
        findings = pac.lint_pac(pac.PAC_TEMPLATE)
        self.assertFalse(any(item.severity == "error" for item in findings))
        self.assertIn("GATEWAY", pac.pac_variables(pac.PAC_TEMPLATE))

    def test_substitution_reports_missing_values_without_evaluating_code(self):
        text, missing = pac.substitute_pac_variables('return "PROXY ${GATEWAY}:80";', {})
        self.assertIn("${GATEWAY}", text)
        self.assertEqual(missing, ["GATEWAY"])

    def test_lint_detects_required_function_and_unquoted_return(self):
        findings = pac.lint_pac("return DIRECT;")
        self.assertTrue(any(item.severity == "error" for item in findings))

    def test_preview_explains_host_bypass(self):
        source = 'function FindProxyForURL(url, host) { if (shExpMatch(host, "*.local")) return "DIRECT"; return "PROXY edge:80"; }'
        result = pac.preview_pac_decision(source, "https://printer.local")
        self.assertEqual(result["decision"], "DIRECT")

    def test_zcc_patch_preserves_profile_and_updates_pac(self):
        result = pac.zcc_pac_patch({"id": "1", "forwardingProfileActions": [{"networkType": "ANY"}]}, "PAC")
        self.assertEqual(result["id"], "1")
        self.assertEqual(result["forwardingProfileActions"][0]["customPac"], "PAC")
        self.assertEqual(result["forwardingProfileActions"][0]["systemProxyData"]["enablePAC"], 1)
