import importlib.util
import json
import tempfile
import unittest
from pathlib import Path

import zscaler_api_client as client


ROOT = Path(__file__).resolve().parents[1]
SPEC = importlib.util.spec_from_file_location(
    "update_api_catalog", ROOT / "scripts" / "update_api_catalog.py"
)
CATALOG_BUILDER = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(CATALOG_BUILDER)
SBOM_SPEC = importlib.util.spec_from_file_location(
    "generate_spdx_sbom", ROOT / "scripts" / "generate_spdx_sbom.py"
)
SBOM_BUILDER = importlib.util.module_from_spec(SBOM_SPEC)
SBOM_SPEC.loader.exec_module(SBOM_BUILDER)
TRANSLATION_SPEC = importlib.util.spec_from_file_location(
    "compile_translations", ROOT / "scripts" / "compile_translations.py"
)
TRANSLATION_BUILDER = importlib.util.module_from_spec(TRANSLATION_SPEC)
TRANSLATION_SPEC.loader.exec_module(TRANSLATION_BUILDER)


class ApiCatalogTests(unittest.TestCase):
    def test_sensitive_request_values_are_redacted(self):
        self.assertEqual(
            client.redact_sensitive({"client_secret": "hidden", "nested": {"password": "hidden"}}),
            {"client_secret": "***", "nested": {"password": "***"}},
        )
        self.assertNotIn(
            "hidden",
            client.redact_sensitive("client_id=public&client_secret=hidden"),
        )
        self.assertNotIn(
            "hidden",
            client.redact_url("https://example.test/token?access_token=hidden&page=1"),
        )
    def test_extracts_method_url_and_metadata(self):
        document = {
            "content": "List users GET https://api.zsapi.net/zia/api/v1/users Request",
            "product": "zia",
            "title": "List users",
            "description": "Returns users.",
            "file_path": "/docs/api-reference-and-guides/api-reference/zia/user-management/list-users",
            "url": "https://automate.zscaler.com/docs/list-users",
        }
        self.assertEqual(
            CATALOG_BUILDER.endpoint_from(document),
            {
                "product": "zia",
                "category": "User Management",
                "name": "List users",
                "method": "GET",
                "url": "https://api.zsapi.net/zia/api/v1/users",
                "description": "Returns users.",
                "doc_url": "https://automate.zscaler.com/docs/list-users",
            },
        )

    def test_extracts_documented_relative_oneapi_paths(self):
        cases = (
            ("zia", "/docs/api-reference-and-guides/api-reference/zia/rules/item", "GET /firewallRules", "https://api.zsapi.net/zia/api/v1/firewallRules"),
            ("zpa", "/docs/api-reference-and-guides/api-reference/zpa/apps/item", "PUT /mgmtconfig/v1/admin/customers/:customerId/application/:id", "https://api.zsapi.net/zpa/mgmtconfig/v1/admin/customers/:customerId/application/:id"),
            ("ai-security", "/docs/api-reference-and-guides/api-reference/ai-security/airedteaming/item", "POST /api/v2/model-benchmarks/request", "https://api.zsapi.net/aisecurity/airt/api/v2/model-benchmarks/request"),
        )
        for product, file_path, content, expected in cases:
            endpoint = CATALOG_BUILDER.endpoint_from({
                "product": product, "file_path": file_path, "content": content,
                "title": "Operation", "url": "https://automate.zscaler.com/docs/operation",
            })
            self.assertEqual(expected, endpoint["url"])

    def test_bundled_catalog_has_broad_product_coverage(self):
        catalog = json.loads(
            (ROOT / "data" / "zscaler_api_catalog.json").read_text(encoding="utf-8")
        )
        self.assertGreaterEqual(len(catalog), 1000)
        products = {entry["product"] for entry in catalog}
        self.assertTrue(
            {"zia", "zpa", "zdx", "zcc", "zid", "zcloudconnector", "easm"}
            <= products
        )
        self.assertTrue(all(entry["url"].startswith("https://") for entry in catalog))
        self.assertEqual(len(catalog), len({(entry["method"], entry["url"]) for entry in catalog}))

    def test_spdx_sbom_describes_artifact_with_hash_and_dependencies(self):
        document = SBOM_BUILDER.build_document(ROOT / "README.md")
        self.assertEqual(document["spdxVersion"], "SPDX-2.3")
        self.assertTrue(document["documentNamespace"].startswith("https://github.com/yeager/"))
        application = document["packages"][0]
        self.assertEqual(application["name"], "ZS API Client")
        self.assertEqual(application["checksums"][0]["algorithm"], "SHA256")
        self.assertGreater(len(document["packages"]), 1)

    def test_qm_compilation_requires_more_than_twenty_percent_real_translation(self):
        source = """<?xml version=\"1.0\"?><TS><context>
        <message><source>One</source><translation>Ett</translation></message>
        <message><source>Two</source><translation>Two</translation></message>
        <message><source>Three</source><translation></translation></message>
        <message><source>Four</source><translation></translation></message>
        <message><source>Five</source><translation></translation></message>
        </context></TS>"""
        with tempfile.TemporaryDirectory() as directory:
            catalog = Path(directory) / "test.ts"
            catalog.write_text(source, encoding="utf-8")
            self.assertEqual(TRANSLATION_BUILDER.translation_coverage(catalog), 0.2)
            self.assertEqual(TRANSLATION_BUILDER.eligible_catalogs([catalog], 0.2), [])
            self.assertEqual(TRANSLATION_BUILDER.eligible_catalogs([catalog], 0.19), [catalog])


if __name__ == "__main__":
    unittest.main()
