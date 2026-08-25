import os
import unittest
import xml.etree.ElementTree as ET
import zipfile
from io import BytesIO
from pathlib import Path
from unittest.mock import patch

os.environ.setdefault("QT_QPA_PLATFORM", "offscreen")

from PySide6.QtWidgets import QApplication

import zscaler_api_client as client


class MainWindowTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.app = QApplication.instance() or QApplication([])

    def setUp(self):
        self.window = client.MainWindow()

    def tearDown(self):
        self.window.close()

    def test_complete_catalog_is_visible(self):
        self.window._update_endpoint_tree("OneAPI")
        visible = sum(
            self.window.endpoint_tree.topLevelItem(index).childCount()
            for index in range(self.window.endpoint_tree.topLevelItemCount())
        )
        self.assertEqual(visible, len(client.AUTOMATION_HUB_CATALOG))

    def test_path_variables_are_extracted(self):
        self.window._populate_path_variables(
            "https://api.zsapi.net/zpa/customers/:customerId/apps/{appId}"
        )
        self.assertEqual(self.window.variables_table.rowCount(), 2)
        self.assertEqual(
            [self.window.variables_table.item(row, 0).text() for row in range(2)],
            ["customerId", "appId"],
        )

    def test_workspace_has_explorer_editor_and_inspector(self):
        self.assertEqual(self.window.main_splitter.count(), 3)
        self.assertEqual(self.window.response_tabs.count(), 3)
        self.assertEqual(self.window.request_tabs.count(), 4)

    def test_wizard_loads_common_request_with_path_variables(self):
        self.window._load_wizard_request(
            "GET",
            "https://api.zsapi.net/zpa/customers/:customerId/application",
            "List ZPA application segments",
        )
        self.assertEqual(self.window.method_combo.currentText(), "● GET")
        self.assertEqual(self.window.variables_table.item(0, 0).text(), "customerId")

    def test_setup_wizard_has_guided_pages(self):
        wizard = client.SetupWizard(self.window)
        self.assertEqual(wizard.pages.count(), 4)
        self.assertIn("List ZIA users", wizard.COMMON_TASKS)
        wizard.close()

    def test_twenty_language_profiles_are_available(self):
        self.assertEqual(len(client.LANGUAGES), 20)
        self.assertIn("sv", client.LANGUAGE_CODES)
        self.assertIn("zh_CN", client.LANGUAGE_CODES)
        self.assertEqual(client.QT_LANGUAGE_CODES["pt_BR"], "pt_BR")

    def test_localized_catalogs_are_complete(self):
        root = Path(client.__file__).parent / "translations"
        for code in client.LANGUAGE_CODES - {"en"}:
            catalog_code = "zh" if code == "zh_CN" else code.split("_", 1)[0]
            catalog = root / f"zscaler_api_client_{catalog_code}.ts"
            self.assertTrue(catalog.exists(), catalog)
            unfinished = ET.parse(catalog).findall(".//translation[@type='unfinished']")
            self.assertEqual(unfinished, [], catalog)

    def test_system_language_is_resolved_with_supported_fallback(self):
        self.assertEqual(client.resolve_language("system", "sv_SE"), "sv")
        self.assertEqual(client.resolve_language("system", "pt_PT"), "pt_BR")
        self.assertEqual(client.resolve_language("system", "unrecognized_LOCALE"), "en")

    def test_settings_has_language_override(self):
        dialog = client.SettingsDialog(self.window)
        self.assertGreaterEqual(dialog.language_choice.findData("system"), 0)
        self.assertGreaterEqual(dialog.language_choice.findData("sv"), 0)
        dialog.close()

    def test_basic_and_advanced_modes_change_visible_controls(self):
        settings = client.SettingsDialog(self.window)
        settings.mode_choice.setCurrentIndex(settings.mode_choice.findData("basic"))
        self.assertFalse(settings.settings_tabs.isTabVisible(1))
        self.assertFalse(next(group for group in settings.findChildren(client.QGroupBox) if group.title() == "Language").isHidden())
        settings.mode_choice.setCurrentIndex(settings.mode_choice.findData("advanced"))
        self.assertTrue(settings.settings_tabs.isTabVisible(1))
        wizard = client.SetupWizard(self.window)
        wizard.mode_choice.setCurrentIndex(wizard.mode_choice.findData("basic"))
        self.assertTrue(wizard.cloud_input.isHidden())
        wizard.mode_choice.setCurrentIndex(wizard.mode_choice.findData("advanced"))
        self.assertTrue(wizard.cloud_input.isHidden() is False)
        wizard.close()
        settings.close()

    def test_ai_visualization_masks_sensitive_response_columns(self):
        self.window._show_ai_visualization([{"id": "1", "client_secret": "hidden"}])
        self.assertEqual(self.window.ai_table.item(0, 0).text(), "1")
        self.assertNotIn("hidden", " ".join(self.window.ai_table.item(0, col).text() for col in range(self.window.ai_table.columnCount())))

    def test_numeric_results_render_a_chart(self):
        self.window._show_ai_visualization([{"name": "A", "count": 3}, {"name": "B", "count": 7}])
        self.assertEqual(self.window.ai_chart.values, [("A", 3.0), ("B", 7.0)])
        self.window.ai_chart.set_style("pie")
        self.assertEqual(self.window.ai_chart.style, "pie")

    def test_graphql_output_includes_nested_data_and_errors(self):
        self.window._show_graphql_output({"data": {"users": [{"id": "1"}]}, "errors": [{"message": "partial"}], "extensions": {"trace": "x"}})
        self.assertEqual(self.window.ai_table.item(0, 0).text(), "1")
        self.assertIn("GraphQL errors", self.window.ai_summary.text())

    def test_graphql_schema_tree_uses_introspection_types(self):
        self.window._populate_graphql_schema_tree({"data": {"__schema": {"types": [{"name": "User", "kind": "OBJECT", "fields": [{"name": "id"}]}]}}})
        self.assertEqual(self.window.graphql_schema_tree.topLevelItem(0).text(0), "User (OBJECT)")

    def test_ai_preview_applies_only_concrete_parameters(self):
        self.window.ai_preview.setPlainText('{"suggested_params":{"pageSize":"100","search":"<review-required>"}}')
        self.window._apply_ai_suggestions()
        self.assertEqual(self.window.params_table.item(0, 0).text(), "pageSize")

    def test_graphql_introspection_prepares_a_safe_query(self):
        self.window._prepare_graphql_introspection()
        self.assertTrue(self.window.graphql_mode.isChecked())
        self.assertIn("__schema", self.window.body_input.toPlainText())

    def test_graphql_introspection_is_scoped_to_its_endpoint(self):
        self.assertNotEqual(
            self.window._graphql_schema_key("https://first.example.test/graphql"),
            self.window._graphql_schema_key("https://second.example.test/graphql"),
        )

    def test_graphql_preset_round_trip_preserves_query_and_variables(self):
        saved = {}
        settings = client.QSettings("Zscaler", "APIClient")
        settings.remove("graphql/presets")
        self.window.graphql_preset_name.setText("test-query")
        self.window.url_input.setText("https://example.test/graphql")
        self.window.body_input.setPlainText('{"query":"query($id: ID!) { user(id: $id) { id } }"}')
        self.window._populate_table(self.window.params_table, {"id": "user-1"})
        with patch.object(client, "secure_store", lambda key, value: saved.__setitem__(key, value)), \
             patch.object(client, "secure_get", lambda key: saved.get(key, "")):
            self.window._save_graphql_query()
            self.window.url_input.clear()
            self.window.body_input.clear()
            self.window._populate_table(self.window.params_table, {})
            self.window._load_graphql_query()
        self.assertIn("graphql_preset_test-query", saved)
        self.assertIn("user(id", self.window.body_input.toPlainText())
        self.assertEqual(self.window._table_values(self.window.params_table), {"id": "user-1"})
        settings.remove("graphql/presets")

    def test_clear_ai_key_removes_keychain_value_and_field(self):
        deleted = []
        settings = client.SettingsDialog(self.window)
        settings.ai_api_key.setText("not-persisted")
        with patch.object(client, "secure_delete", lambda key: deleted.append(key)):
            settings._clear_ai_key()
        self.assertEqual(deleted, ["ai_api_key"])
        self.assertFalse(settings.ai_api_key.text())
        settings.close()

    def test_ai_export_payload_preserves_table_shape(self):
        self.window._show_ai_visualization([{"name": "A", "count": 3}])
        headers, rows = self.window._ai_export_payload()
        self.assertEqual(headers, ["name", "count"])
        self.assertEqual(rows, [["A", "3"]])

    def test_tabular_exports_cover_portable_formats(self):
        headers, rows = ["name", "count"], [["A", "3"], ["B", "7"]]
        self.assertIn(b'"name": "A"', self.window._tabular_export_bytes(".jsonl", headers, rows))
        self.assertIn(b"| name | count |", self.window._tabular_export_bytes(".md", headers, rows))
        self.assertIn(b"<table>", self.window._tabular_export_bytes(".html", headers, rows))
        self.assertTrue(self.window._tabular_export_bytes(".pdf", headers, rows).startswith(b"%PDF-"))
        workbook = zipfile.ZipFile(BytesIO(self.window._tabular_export_bytes(".xlsx", headers, rows)))
        self.assertIn("xl/worksheets/sheet1.xml", workbook.namelist())
        self.assertIn("name", workbook.read("xl/worksheets/sheet1.xml").decode())

    def test_request_exports_are_sanitized(self):
        self.window.url_input.setText("https://example.test/users?access_token=do-not-export")
        self.window.headers_table.setItem(0, 0, client.QTableWidgetItem("Authorization"))
        self.window.headers_table.setItem(0, 1, client.QTableWidgetItem("Bearer do-not-export"))
        self.window.body_input.setPlainText('{"client_secret": "do-not-export"}')
        curl = self.window._masked_curl_command()
        collection = self.window._postman_collection()
        self.assertNotIn("do-not-export", curl)
        self.assertNotIn("do-not-export", str(collection))
        self.assertIn("***", curl)

    def test_svg_chart_export_uses_current_chart_data(self):
        self.window._show_ai_visualization([{"name": "A", "count": 3}])
        self.window.ai_chart.set_style("line")
        self.assertIn("<svg", self.window._svg_chart())
        self.assertIn("polyline", self.window._svg_chart())

    def test_external_llm_is_opt_in(self):
        settings = client.QSettings("Zscaler", "APIClient")
        settings.setValue("ai/endpoint", "https://example.test/v1")
        settings.setValue("ai/model", "test")
        settings.setValue("ai/allow_external", "false")
        with self.assertRaises(PermissionError):
            self.window._ask_configured_llm("list users", [])

    def test_llm_failure_masks_secret_like_text(self):
        self.window.ai_summary.setText("Asking configured LLM…")
        self.window._on_llm_failed("HTTP 401 client_secret=do-not-show")
        self.assertNotIn("do-not-show", self.window.ai_summary.text())
        self.assertIn("***", self.window.ai_summary.text())

    def test_ai_assistant_suggests_catalog_backed_request(self):
        self.window.ai_question.setText("list ZPA application segments")
        self.window._run_ai_assistant()
        self.assertEqual(self.window.method_combo.currentText(), "● GET")
        self.assertIn("/zpa/", self.window.url_input.text())
        self.assertGreater(self.window.ai_table.rowCount(), 0)


if __name__ == "__main__":
    unittest.main()
