import importlib.util
import json
import unittest
from pathlib import Path

import zscaler_api_client as client


ROOT = Path(__file__).resolve().parents[1]
SPEC = importlib.util.spec_from_file_location(
    "update_api_catalog", ROOT / "scripts" / "update_api_catalog.py"
)
CATALOG_BUILDER = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(CATALOG_BUILDER)


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

    def test_bundled_catalog_has_broad_product_coverage(self):
        catalog = json.loads(
            (ROOT / "data" / "zscaler_api_catalog.json").read_text(encoding="utf-8")
        )
        self.assertGreaterEqual(len(catalog), 900)
        products = {entry["product"] for entry in catalog}
        self.assertTrue(
            {"zia", "zpa", "zdx", "zcc", "zid", "zcloudconnector", "easm"}
            <= products
        )
        self.assertTrue(all(entry["url"].startswith("https://") for entry in catalog))


if __name__ == "__main__":
    unittest.main()
