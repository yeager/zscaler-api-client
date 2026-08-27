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

    def test_guided_pac_creates_bounded_bypass_and_fallback(self):
        result = pac.build_guided_pac(["*.local", "intranet.example.com"])
        self.assertIn('shExpMatch(host, "*.local")', result)
        self.assertIn("${SECONDARY_GATEWAY}", result)
        self.assertFalse(any(item.severity == "error" for item in pac.lint_pac(result)))

    def test_guided_pac_rejects_javascript_in_host_input(self):
        with self.assertRaises(ValueError):
            pac.build_guided_pac(['example.com"); return "DIRECT"; //'])

    def test_improvement_advice_calls_out_dns_helpers(self):
        suggestions = pac.pac_improvements('function FindProxyForURL(url, host) { return dnsResolve(host); }')
        self.assertTrue(any("DNS/network" in item or "DNS" in item for item in suggestions))

    def test_profile_mapping_matches_hosted_url_and_reports_unresolved(self):
        pacs = [{"id": 7, "name": "Corporate", "pacUrl": "https://pac.example.com/corp.pac", "pacVersionStatus": "DEPLOYED"}]
        profiles = [
            {"id": "a", "name": "Remote", "forwardingProfileActions": [{"networkType": "ANY", "systemProxyData": {"pacURL": "https://pac.example.com/corp.pac"}}]},
            {"id": "b", "name": "Branch", "forwardingProfileActions": [{"networkType": "ANY", "systemProxyData": {"pacURL": "https://missing.example.com/pac"}}]},
        ]
        mappings = pac.pac_profile_mappings(pacs, profiles)
        self.assertEqual(mappings[0]["reference"], "Corporate")
        self.assertEqual(mappings[0]["relation"], "Hosted URL matched")
        self.assertIn("not found", mappings[1]["relation"])

    def test_profile_mapping_uses_inline_content_fingerprint(self):
        content = 'function FindProxyForURL(url, host) { return "DIRECT"; }'
        mappings = pac.pac_profile_mappings(
            [{"id": 7, "name": "Corporate", "pacContent": content}],
            [{"id": "a", "forwardingProfileActions": [{"customPac": content}]}],
        )
        self.assertEqual(mappings[0]["relation"], "Inline PAC matches ZIA content")
        self.assertEqual(mappings[0]["reference"], "Corporate")
