import json
import os
import unittest
import xml.etree.ElementTree as ET
import zipfile
from io import BytesIO
from pathlib import Path
from tempfile import TemporaryDirectory
from unittest.mock import MagicMock, patch

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

    def test_all_supported_products_resolve_relative_api_origins(self):
        settings = client.QSettings("Zscaler", "APIClient")
        configuration = {
            "zia/cloud": "zia.example.test", "zpa/cloud": "zpa.example.test", "zdx/cloud": "zdx.example.test",
            "zcc/cloud": "zcc.example.test", "zidentity/domain": "id.example.test", "ztw/cloud": "ztw.example.test",
            "zwa/cloud": "zwa.example.test", "easm/cloud": "easm.example.test", "oneapi/cloud": "beta",
        }
        previous = {key: settings.value(key, None) for key in configuration}
        try:
            for key, value in configuration.items():
                settings.setValue(key, value)
            expected = {
                "ZIA": "https://zia.example.test", "ZPA": "https://zpa.example.test",
                "ZDX": "https://zdx.example.test", "ZCC": "https://zcc.example.test",
                "ZIdentity": "https://id.example.test", "ZTW": "https://ztw.example.test",
                "ZWA": "https://zwa.example.test", "EASM": "https://easm.example.test",
                "OneAPI": "https://api.beta.zsapi.net",
            }
            self.assertEqual(expected, {api: self.window._api_base_url(api) for api in expected})
        finally:
            for key, value in previous.items():
                if value is None:
                    settings.remove(key)
                else:
                    settings.setValue(key, value)

    def test_manual_relative_request_uses_selected_product_origin(self):
        settings = client.QSettings("Zscaler", "APIClient")
        old_cloud, old_role = settings.value("zwa/cloud", None), settings.value("access/role", None)
        try:
            settings.setValue("zwa/cloud", "workflow.example.test")
            settings.setValue("access/role", "admin")
            if self.window.api_type.findText("ZWA") < 0:
                self.window.api_type.addItem("ZWA")
            self.window.api_type.setCurrentText("ZWA")
            self.window.method_combo.setCurrentText("● GET")
            self.window.url_input.setText("/api/v1/workflows")
            with patch.object(client, "ApiWorker") as worker_type:
                self.window._send_request()
            request = worker_type.call_args.args[0][0]
            self.assertEqual("https://workflow.example.test/api/v1/workflows", request["url"])
        finally:
            for key, value in (("zwa/cloud", old_cloud), ("access/role", old_role)):
                if value is None:
                    settings.remove(key)
                else:
                    settings.setValue(key, value)

    def test_api_worker_retains_http_error_status_for_alerts(self):
        worker = client.ApiWorker([{"url": "https://example.test", "method": "GET"}])
        results = []
        worker.finished.connect(results.append)
        with patch.object(worker, "_make_request", side_effect=client.ApiRequestError(429, "HTTP 429: Too Many Requests")):
            worker.run()
        self.assertEqual(429, results[0]["results"][0]["status_code"])
        self.assertEqual({"Retry-After": "60"}, client.api_result_headers({"success": False, "response_headers": {"Retry-After": "60"}}))
        self.assertEqual(201, client.api_result_status({"success": True, "data": {"_status_code": 201}}))

    def test_api_worker_can_stop_a_chain_after_first_failure(self):
        worker = client.ApiWorker([{"url": "https://first.test"}, {"url": "https://second.test"}], stop_on_failure=True)
        result = []
        worker.finished.connect(result.append)
        with patch.object(worker, "_make_request", side_effect=client.ApiRequestError(500, "failed")):
            worker.run()
        self.assertTrue(result[0]["stopped_early"])
        self.assertEqual(1, len(result[0]["results"]))

    def test_api_worker_preserves_metadata_for_list_response(self):
        response = MagicMock(); response.read.return_value = b'[{"name":"Ada"}]'; response.status = 206; response.reason = "Partial Content"; response.headers.items.return_value = [("X-Request-ID", "abc")]
        with patch.object(client, "build_network_opener") as opener:
            opener.return_value.open.return_value.__enter__.return_value = response
            result = client.ApiWorker([])._make_request({"url": "https://example.test", "method": "GET"})
        self.assertEqual([{"name": "Ada"}], result["_payload"])
        self.assertEqual(206, result["_status_code"])
        self.assertEqual({"X-Request-ID": "abc"}, result["_headers"])

    def test_list_response_keeps_status_headers_and_visible_payload(self):
        self.window._pending_request = {"method": "GET", "url": "https://example.test", "headers": {}, "body": None, "start_time": 0}
        self.window._on_request_finished({"results": [{"success": True, "data": {
            "_payload": [{"name": "Ada"}], "_status_code": 206, "_reason": "Partial Content",
            "_size": 16, "_headers": {"X-Request-ID": "abc"},
        }}]})
        self.assertIn("206 Partial Content", self.window.response_info.text())
        self.assertIn("Ada", self.window.response_body.toPlainText())
        self.assertIn("X-Request-ID: abc", self.window.response_headers.toPlainText())
        self.assertEqual(206, self.window.request_history[-1]["status"])
        self.assertEqual({"X-Request-ID": "abc"}, self.window.request_history[-1]["response_headers"])

    def test_failed_request_history_retains_http_status(self):
        self.window._pending_request = {"method": "GET", "url": "https://example.test", "headers": {}, "body": None, "start_time": 0}
        self.window._on_request_finished({"results": [{"success": False, "status_code": 429, "error": "HTTP 429: throttled"}]})
        self.assertEqual(429, self.window.request_history[-1]["status"])

    def test_workspace_has_explorer_editor_and_inspector(self):
        self.assertEqual(self.window.main_splitter.count(), 3)
        self.assertEqual(self.window.response_tabs.count(), 8)
        self.assertEqual(self.window.request_tabs.count(), 4)
        self.assertIsNotNone(self.window.findChild(client.QFrame, "commandBar"))

    def test_operations_shortcuts_can_open_the_relevant_workspace(self):
        dialog = client.OperationsDialog(self.window, initial_tab=1)
        self.assertEqual(dialog.tabs.tabText(dialog.tabs.currentIndex()), "Policy diff")
        dialog.close()

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
        self.assertGreaterEqual(len(wizard.COMMON_TASKS), 14)
        self.assertIn("ZIA · List users", wizard.COMMON_TASKS)
        self.assertIn("ZIdentity · List groups", wizard.COMMON_TASKS)
        wizard.close()

    def test_guided_ai_example_loads_question_without_executing(self):
        self.assertGreaterEqual(self.window.ai_example_choice.count(), 13)
        self.window.ai_example_choice.setCurrentIndex(1)
        self.assertEqual(self.window.ai_question.text(), "List ZIA users with pagination")
        self.assertFalse(self.window.ai_preview.toPlainText())
        self.assertIn("Guided example loaded", self.window.ai_summary.text())

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

    def test_all_graphql_list_branches_are_selectable_visual_datasets(self):
        payload = {
            "data": {
                "WEB_TRAFFIC": {"entries": [{"name": "Web", "total": 7}]},
                "ZERO_TRUST_FIREWALL": {"entries": [{"action": "ALLOW", "total": 3}]},
            },
            "errors": [{"message": "partial"}],
            "extensions": {"warnings": ["sampled"]},
        }
        datasets = dict(client.collect_record_datasets(payload))
        self.assertIn("$.data.WEB_TRAFFIC.entries", datasets)
        self.assertIn("$.data.ZERO_TRUST_FIREWALL.entries", datasets)
        self.assertIn("$.errors", datasets)
        self.assertIn("$.extensions.warnings", datasets)
        self.window._render_response_visualization(payload)
        labels = [self.window.response_dataset_choice.itemText(index) for index in range(self.window.response_dataset_choice.count())]
        firewall_index = next(index for index, label in enumerate(labels) if "ZERO_TRUST_FIREWALL" in label)
        self.window.response_dataset_choice.setCurrentIndex(firewall_index)
        headers = [self.window.response_table.horizontalHeaderItem(column).text() for column in range(self.window.response_table.columnCount())]
        self.assertEqual(["action", "total"], headers)
        self.assertEqual("ALLOW", self.window.response_table.item(0, 0).text())
        self.assertEqual([("1", 3.0)], self.window.response_chart.values)

    def test_read_only_mode_distinguishes_graphql_queries_from_mutations(self):
        self.assertTrue(client.graphql_request_is_read_only('{"query":"query Status { status { id } }"}'))
        self.assertTrue(client.graphql_request_is_read_only('{"query":"{ status { id } }"}'))
        self.assertFalse(client.graphql_request_is_read_only('{"query":"mutation Update { update { id } }"}'))
        self.assertFalse(client.graphql_request_is_read_only('{"query":"query Read { status } mutation Write { update }"}'))
        settings = client.QSettings("Zscaler", "APIClient")
        previous = settings.value("access/role", None)
        try:
            settings.setValue("access/role", "readonly")
            self.window.graphql_mode.setChecked(True)
            self.window.url_input.setText("https://api.zsapi.net/zins/graphql")
            self.window.body_input.setPlainText('{"query":"query Status { status { id } }"}')
            with patch.object(client, "ApiWorker") as worker:
                self.window._send_request()
            worker.assert_called_once()
            self.window.body_input.setPlainText('{"query":"mutation Update { update { id } }"}')
            with patch.object(client, "ApiWorker") as worker, patch.object(client.QMessageBox, "warning"):
                self.window._send_request()
            worker.assert_not_called()
        finally:
            if previous is None:
                settings.remove("access/role")
            else:
                settings.setValue("access/role", previous)

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

    def test_documented_zinsights_schema_and_query_are_available_without_auto_run(self):
        queries = [entry for entry in client.ZINSIGHTS_GRAPHQL_CATALOG if entry.get("kind") == "query"]
        self.assertEqual(28, len(queries))
        documented = next(entry for entry in queries if entry.get("query"))
        with patch.object(client, "ApiWorker") as worker:
            self.window._load_documented_graphql_query(documented)
        worker.assert_not_called()
        self.assertTrue(self.window.graphql_mode.isChecked())
        self.assertTrue(self.window.url_input.text().endswith("/zins/graphql"))
        self.assertEqual(documented["query"], json.loads(self.window.body_input.toPlainText())["query"])
        self.window._browse_documented_graphql_schema()
        self.assertEqual(2, self.window.graphql_schema_tree.topLevelItemCount())
        self.assertIn("28", self.window.graphql_schema_tree.topLevelItem(0).text(0))
        self.assertIn("77", self.window.graphql_schema_tree.topLevelItem(1).text(0))

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

    def test_request_exports_mask_sensitive_http_header_variants(self):
        self.window.url_input.setText("https://example.test")
        self.window.headers_table.setItem(0, 0, client.QTableWidgetItem("Set-Cookie"))
        self.window.headers_table.setItem(0, 1, client.QTableWidgetItem("session=do-not-export"))
        self.assertNotIn("do-not-export", self.window._masked_curl_command())

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

    def test_manual_proxy_is_attached_to_api_requests(self):
        settings = client.QSettings("Zscaler", "APIClient")
        settings.setValue("advanced/proxy_mode", "2")
        settings.setValue("advanced/proxy_host", "proxy.example.test")
        settings.setValue("advanced/proxy_port", "8443")
        settings.setValue("advanced/proxy_username", "admin")
        with patch.object(client, "secure_get", return_value="password"), \
             patch.object(client.urllib.request, "build_opener") as build_opener:
            build_opener.return_value.open.side_effect = OSError("test stop")
            with self.assertRaises(OSError):
                client.ApiWorker([])._make_request({"url": "https://example.test", "method": "GET"})
        handlers = build_opener.call_args.args
        proxy_handler = next(handler for handler in handlers if isinstance(handler, client.urllib.request.ProxyHandler))
        self.assertEqual("http://admin:password@proxy.example.test:8443", proxy_handler.proxies["https"])
        settings.setValue("advanced/proxy_mode", "0")

    def test_update_check_never_retries_with_unverified_tls(self):
        with patch.object(client, "build_network_opener") as build_opener, \
             patch.object(client.QMessageBox, "warning"):
            build_opener.return_value.open.side_effect = client.urllib.error.URLError("tls")
            self.window._check_for_updates()
        self.assertEqual(1, build_opener.return_value.open.call_count)

    def test_configured_llm_uses_shared_network_transport(self):
        settings = client.QSettings("Zscaler", "APIClient")
        previous = {key: settings.value(key, None) for key in ("ai/endpoint", "ai/model")}
        response = MagicMock()
        response.read.return_value = b'{"choices":[{"message":{"content":"Use GET /users"}}]}'
        try:
            settings.setValue("ai/endpoint", "http://localhost:11434/v1")
            settings.setValue("ai/model", "local-test")
            with patch.object(client, "build_network_opener") as build_opener:
                build_opener.return_value.open.return_value.__enter__.return_value = response
                answer = self.window._ask_configured_llm("list users", [])
            self.assertEqual("Use GET /users", answer)
            build_opener.assert_called()
        finally:
            for key, value in previous.items():
                if value is None:
                    settings.remove(key)
                else:
                    settings.setValue(key, value)

    def test_logout_clears_every_in_memory_api_session(self):
        for attribute in ("zia_session", "zpa_token", "zdx_token", "zcc_token", "zidentity_token",
                          "ztw_token", "zwa_token", "easm_token", "oneapi_token"):
            setattr(self.window, attribute, "session-value")
        self.window._clear_sessions(record_audit=False)
        self.assertTrue(all(getattr(self.window, attribute) is None for attribute in (
            "zia_session", "zpa_token", "zdx_token", "zcc_token", "zidentity_token",
            "ztw_token", "zwa_token", "easm_token", "oneapi_token",
        )))

    def test_copy_response_masks_sensitive_values(self):
        self.window.response_body.setPlainText('{"client_secret":"do-not-copy", "name":"Ada"}')
        self.window._copy_response()
        copied = client.QApplication.clipboard().text()
        self.assertNotIn("do-not-copy", copied)
        self.assertIn("***", copied)

    def test_api_response_ui_masks_auth_data_headers_and_errors(self):
        self.window._pending_request = {"method": "POST", "url": "https://example.test/login", "headers": {}, "body": {}, "start_time": 0}
        self.window._on_request_finished({"results": [{"success": True, "data": {
            "access_token": "never-display", "client_secret": "never-display", "_status_code": 200,
            "_reason": "OK", "_size": 1, "_headers": {"Set-Cookie": "never-display"},
        }}]})
        self.assertNotIn("never-display", self.window.response_body.toPlainText())
        self.assertNotIn("never-display", self.window.response_headers.toPlainText())
        self.window._pending_request = {"method": "GET", "url": "https://example.test", "headers": {}, "body": None, "start_time": 0}
        self.window._on_request_finished({"results": [{"success": False, "error": "access_token=never-display"}]})
        self.assertNotIn("never-display", self.window.response_body.toPlainText())

    def test_json_error_text_is_masked_before_ui_or_chain_results(self):
        raw_error = '{"error":{"client_secret":"never-display","message":"Denied"}}'
        self.assertNotIn("never-display", client.redact_sensitive(raw_error))
        self.assertNotIn("never-display", client.redact_sensitive("X-API-Key: never-display"))
        self.window._pending_request = {"method": "GET", "url": "https://example.test", "headers": {}, "body": None, "start_time": 0}
        self.window._on_request_finished({"results": [{"success": False, "status_code": 400, "error": raw_error}]})
        self.assertNotIn("never-display", self.window.response_body.toPlainText())

    def test_zcc_authentication_uses_the_jwt_login_shape(self):
        settings = client.QSettings("Zscaler", "APIClient")
        settings.setValue("zcc/cloud", "api.zsapi.net")
        settings.setValue("zcc/client_id", "key-id")
        if self.window.api_type.findText("ZCC") < 0:
            self.window.api_type.addItem("ZCC")
        self.window.api_type.setCurrentText("ZCC")
        with patch.object(client, "secure_get", return_value="secret-key"), \
             patch.object(self.window, "_send_request") as send:
            self.window._authenticate_api()
        self.assertEqual("https://api.zsapi.net/zcc/papi/auth/v1/login", self.window.url_input.text())
        self.assertEqual("application/json", self.window.headers_table.item(0, 1).text())
        self.assertEqual({"apiKey": "key-id", "secretKey": "secret-key"}, json.loads(self.window.body_input.toPlainText()))
        send.assert_called_once()

    def test_startup_preferences_select_default_api_and_can_auto_authenticate(self):
        settings = client.QSettings("Zscaler", "APIClient")
        keys = ("zpa/enabled", "advanced/default_api", "advanced/auto_auth")
        previous = {key: settings.value(key, None) for key in keys}
        try:
            settings.setValue("zpa/enabled", "true")
            settings.setValue("advanced/default_api", "ZPA")
            settings.setValue("advanced/auto_auth", "true")
            self.window._update_api_list()
            self.window._update_endpoint_tree(self.window.api_type.currentText())
            self.assertEqual("ZPA", self.window._current_api_type())
            with patch.object(self.window, "_authenticate_api") as authenticate:
                self.window._apply_startup_authentication()
            authenticate.assert_called_once()
        finally:
            for key, value in previous.items():
                if value is None:
                    settings.remove(key)
                else:
                    settings.setValue(key, value)

    def test_clear_request_removes_all_derived_response_views(self):
        self.window.url_input.setText("https://example.test")
        self.window._populate_path_variables("https://example.test/users/{id}")
        self.window._render_response_visualization({"items": [{"name": "Ada", "count": 3}]})
        self.window._show_ai_visualization([{"name": "Ada", "count": 3}])
        self.window.graphql_schema_tree.addTopLevelItem(client.QTreeWidgetItem(["User"]))
        self.window._clear_request()
        self.assertFalse(self.window.url_input.text())
        self.assertEqual(0, self.window.variables_table.rowCount())
        self.assertEqual(0, self.window.response_table.rowCount())
        self.assertEqual([], self.window.response_chart.values)
        self.assertEqual(0, self.window.graphql_schema_tree.topLevelItemCount())
        self.assertEqual(0, self.window.ai_table.rowCount())

    def test_operations_security_posture_is_visualized_from_local_history(self):
        self.window.request_history = [{"method": "GET", "status": 500, "duration_ms": 11_000}] * 3
        dialog = client.OperationsDialog(self.window)
        self.assertIn("Posture score:", dialog.posture_score.text())
        self.assertLess(dialog.posture_gauge.score, 100)
        self.assertGreater(dialog.posture_findings.rowCount(), 0)
        dialog.close()

    def test_dashboard_renders_local_latency_trend(self):
        self.window.request_history = [{"timestamp": "2026-01-01 10:00:00", "status": 200, "duration_ms": 44}]
        dialog = client.OperationsDialog(self.window)
        self.assertEqual([("10:00:00", 44.0)], dialog.dashboard_trend.values)
        self.assertEqual("line", dialog.dashboard_trend.style)
        dialog.close()

    def test_local_monitor_refreshes_only_local_signal_views(self):
        settings = client.QSettings("Zscaler", "APIClient")
        old_enabled, old_seconds = settings.value("monitoring/auto_refresh", None), settings.value("monitoring/refresh_seconds", None)
        try:
            dialog = client.OperationsDialog(self.window)
            dialog.local_monitor_interval.setCurrentIndex(dialog.local_monitor_interval.findData(30))
            dialog.local_monitor_enabled.setChecked(True)
            self.assertTrue(dialog.local_monitor_timer.isActive())
            self.assertEqual(30_000, dialog.local_monitor_timer.interval())
            dialog.local_monitor_enabled.setChecked(False)
            self.assertFalse(dialog.local_monitor_timer.isActive())
            dialog.close()
        finally:
            for key, value in (("monitoring/auto_refresh", old_enabled), ("monitoring/refresh_seconds", old_seconds)):
                if value is None:
                    settings.remove(key)
                else:
                    settings.setValue(key, value)

    def test_alert_exports_are_masked_and_portable(self):
        self.window.request_history = [{"status": 500, "url": "https://example.test?token=hidden"}]
        dialog = client.OperationsDialog(self.window)
        json_export = dialog._alert_export_content("json")
        markdown_export = dialog._alert_export_content("markdown")
        self.assertNotIn("hidden", json_export)
        self.assertIn("# Local alert summary", markdown_export)
        dialog.close()

    def test_operations_incident_workspace_prepares_a_safe_chain(self):
        self.window.request_history = [{"timestamp": "now", "method": "GET", "url": "https://example.test", "status": 500, "response_headers": {"Retry-After": "60", "Set-Cookie": "hidden"}}]
        dialog = client.OperationsDialog(self.window)
        dialog.prepare_incident_chain()
        self.assertIn("Review failed requests", dialog.incident_chain.toPlainText())
        self.assertGreaterEqual(dialog.incident_timeline.rowCount(), 1)
        self.assertNotIn("hidden", json.dumps(dialog._incident_evidence()))
        self.assertIn("Retry-After", json.dumps(dialog._incident_evidence()))
        dialog.close()

    def test_operations_change_control_prepares_a_local_review(self):
        dialog = client.OperationsDialog(self.window)
        dialog.before_policy.setPlainText('{"rules": []}')
        dialog.after_policy.setPlainText('{"rules": [{"name": "Open", "action": "allow", "conditions": {}}]}')
        dialog.prepare_change_review()
        self.assertIn('"risk": "high"', dialog.change_review.toPlainText())
        dialog.close()

    def test_policy_workspace_visualizes_rules_best_practices_and_decision_path(self):
        dialog = client.OperationsDialog(self.window)
        policy = '{"rules": [{"name":"Open","action":"allow","conditions":{}}, {"name":"Staff","action":"block","conditions":{"group":"staff"}}]}'
        dialog.before_policy.setPlainText('{"rules": []}')
        dialog.after_policy.setPlainText(policy)
        dialog.compare_policies()
        self.assertEqual(2, dialog.policy_rules.rowCount())
        self.assertEqual([("Allow", 1.0), ("Block", 1.0)], dialog.policy_chart.values)
        dialog.run_compliance()
        self.assertGreaterEqual(dialog.best_practices.rowCount(), 1)
        dialog.rules_input.setPlainText('[{"name":"Guest","action":"allow","conditions":{"group":"guest"}}, {"name":"Staff","action":"block","conditions":{"group":"staff"}}]')
        dialog.context_input.setPlainText('{"group":"staff"}')
        dialog.run_simulation()
        self.assertGreaterEqual(dialog.simulation_path.rowCount(), 2)
        self.assertIn("Matched", dialog.simulation_path.item(1, 3).text())
        dialog.close()

    def test_reports_and_operations_mode_are_available(self):
        settings = client.QSettings("Zscaler", "APIClient")
        previous = settings.value("ui/mode", None)
        try:
            settings.setValue("ui/mode", "basic")
            self.window._apply_main_mode()
            self.assertTrue(self.window.change_shortcut.isHidden())
            dialog = client.OperationsDialog(self.window)
            self.assertFalse(dialog.tabs.isTabVisible(1))
            self.assertIn("# CISO", dialog.report_preview.toPlainText())
            dialog.close()
        finally:
            if previous is None:
                settings.remove("ui/mode")
            else:
                settings.setValue("ui/mode", previous)

    def test_due_scheduled_report_runs_locally_without_overwriting(self):
        settings = client.QSettings("Zscaler", "APIClient")
        previous = settings.value("automation/schedules", None)
        try:
            with TemporaryDirectory() as output_dir:
                now = 1_800_000_000
                settings.setValue("automation/schedules", json.dumps([{
                    "name": "SOC / daily", "kind": "soc", "cadence_seconds": 3600,
                    "output_dir": output_dir, "enabled": True, "next_run": now - 1,
                }]))
                first = self.window._run_due_report_schedules(now)
                self.assertEqual(1, len(first))
                self.assertEqual("soc", json.loads(Path(first[0]).read_text(encoding="utf-8"))["kind"])
                self.assertNotIn("/", Path(first[0]).name)
                schedules = self.window._report_schedules()
                self.assertEqual(now + 3600, schedules[0]["next_run"])
                schedules[0]["next_run"] = now
                settings.setValue("automation/schedules", json.dumps(schedules))
                second = self.window._run_due_report_schedules(now)
                self.assertNotEqual(first[0], second[0])
                self.assertTrue(Path(first[0]).exists())
                dialog = client.OperationsDialog(self.window)
                self.assertEqual(1, dialog.report_schedules.rowCount())
                dialog.report_schedules.setCurrentCell(0, 0)
                dialog.toggle_selected_schedule()
                self.assertFalse(self.window._report_schedules()[0]["enabled"])
                dialog.report_schedules.setCurrentCell(0, 0)
                with patch.object(self.window, "_run_due_report_schedules", return_value=[first[0]]) as run_due, \
                     patch.object(client.QMessageBox, "information"):
                    dialog.run_selected_schedule()
                self.assertEqual(0, run_due.call_args.kwargs["selected_index"])
                dialog.report_schedules.setCurrentCell(0, 0)
                with patch.object(client.QMessageBox, "question", return_value=client.QMessageBox.StandardButton.Yes):
                    dialog.remove_selected_schedule()
                self.assertEqual([], self.window._report_schedules())
                dialog.close()
        finally:
            if previous is None:
                settings.remove("automation/schedules")
            else:
                settings.setValue("automation/schedules", previous)

    def test_alert_center_uses_saved_error_threshold_and_is_available_in_basic_mode(self):
        settings = client.QSettings("Zscaler", "APIClient")
        old_mode, old_threshold = settings.value("ui/mode", None), settings.value("monitoring/error_threshold", None)
        try:
            settings.setValue("ui/mode", "basic")
            settings.setValue("monitoring/error_threshold", "2")
            self.window.request_history = [{"status": 500, "url": "https://example.test"}] * 2
            dialog = client.OperationsDialog(self.window)
            self.assertTrue(dialog.tabs.isTabVisible(dialog.alert_tab_index))
            self.assertIn("1 local alert", dialog.alert_summary.text())
            self.assertGreaterEqual(dialog.alert_table.rowCount(), 1)
            self.assertTrue(dialog.alert_chart.values)
            dialog.close()
        finally:
            for key, value in (("ui/mode", old_mode), ("monitoring/error_threshold", old_threshold)):
                if value is None:
                    settings.remove(key)
                else:
                    settings.setValue(key, value)

    def test_webhook_test_payload_is_local_and_masked(self):
        self.window.request_history = [{"method": "GET", "status": 500, "headers": {"Authorization": "hidden"}}]
        dialog = client.OperationsDialog(self.window)
        payload = dialog._webhook_payload()
        self.assertEqual("connectivity_test", payload["event"])
        self.assertNotIn("hidden", json.dumps(payload))
        alert_payload = dialog._webhook_alert_payload()
        self.assertEqual("local_alert_snapshot", alert_payload["event"])
        self.assertNotIn("hidden", json.dumps(alert_payload))
        self.assertEqual("https://hooks.example.test/events", client.validate_webhook_endpoint("https://hooks.example.test/events")[0])
        self.assertEqual("http://localhost:8080/events", client.validate_webhook_endpoint("http://localhost:8080/events")[0])
        self.assertIsNone(client.validate_webhook_endpoint("https://hooks.example.test/events?token=hidden")[0])
        dialog.close()

    def test_webhook_alert_delivery_is_approved_and_does_not_follow_redirects(self):
        settings = client.QSettings("Zscaler", "APIClient")
        previous = settings.value("automation/webhook_url", None)
        try:
            settings.setValue("automation/webhook_url", "https://hooks.example.test/alerts")
            dialog = client.OperationsDialog(self.window)
            with patch.object(client.QMessageBox, "question", return_value=client.QMessageBox.StandardButton.Yes), \
                 patch.object(client, "LlmWorker") as worker_type:
                dialog.send_webhook_alerts()
            send = worker_type.call_args.args[0]
            opener = MagicMock(); response = MagicMock(); response.status = 202
            opener.open.return_value.__enter__.return_value = response
            with patch.object(client, "build_network_opener", return_value=opener) as build_opener:
                self.assertEqual("202", send())
            self.assertFalse(build_opener.call_args.kwargs["allow_redirects"])
            request = opener.open.call_args.args[0]
            sent = json.loads(request.data.decode("utf-8"))
            self.assertEqual("local_alert_snapshot", sent["event"])
            self.assertNotIn("hidden", json.dumps(sent))
            worker_type.return_value.start.assert_called_once()
            dialog.close()
        finally:
            if previous is None:
                settings.remove("automation/webhook_url")
            else:
                settings.setValue("automation/webhook_url", previous)

    def test_local_automation_is_explicit_isolated_and_masked(self):
        settings = client.QSettings("Zscaler", "APIClient")
        old_role, old_path = settings.value("access/role", None), settings.value("automation/local_plugin", None)
        try:
            with TemporaryDirectory() as directory:
                script = Path(directory) / "reviewed.py"
                script.write_text("import sys\nprint(sys.stdin.read())\n", encoding="utf-8")
                self.assertEqual(script.resolve(), client.validate_local_automation_path(str(script))[0])
                self.assertIsNone(client.validate_local_automation_path("relative.py")[0])
                settings.setValue("access/role", "admin")
                settings.setValue("automation/local_plugin", str(script))
                self.window.request_history = [{"method": "GET", "status": 500, "headers": {"Authorization": "hidden"}}]
                dialog = client.OperationsDialog(self.window)
                with patch.object(client.QMessageBox, "question", return_value=client.QMessageBox.StandardButton.Yes), \
                     patch.object(client, "QProcess") as process_type, patch.object(client.QTimer, "singleShot"):
                    process = process_type.return_value
                    dialog.run_local_automation()
                process.setProgram.assert_called_once_with(client.sys.executable)
                process.setArguments.assert_called_once_with(["-I", str(script.resolve())])
                process.start.assert_called_once()
                environment = process.setProcessEnvironment.call_args.args[0]
                self.assertFalse(environment.contains("AWS_SECRET_ACCESS_KEY"))
                self.assertNotIn("hidden", dialog.integration_preview.toPlainText())
                dialog.close()
                actual = client.OperationsDialog(self.window)
                with patch.object(client.QMessageBox, "question", return_value=client.QMessageBox.StandardButton.Yes), \
                     patch.object(client.QMessageBox, "information"), patch.object(client.QMessageBox, "warning"):
                    actual.run_local_automation()
                    self.assertTrue(actual.local_automation_process.waitForFinished(5000))
                    self.app.processEvents()
                result = json.loads(actual.integration_preview.toPlainText())
                self.assertEqual(0, result["exit_code"])
                self.assertIn("local_security_snapshot", result["stdout"])
                self.assertNotIn("hidden", result["stdout"])
                actual.close()
        finally:
            for key, value in (("access/role", old_role), ("automation/local_plugin", old_path)):
                if value is None:
                    settings.remove(key)
                else:
                    settings.setValue(key, value)

    def test_api_chain_preview_is_masked_and_confined_to_active_host(self):
        self.window.api_type.setCurrentText("ZIA")
        self.window.zia_session = "session"
        dialog = client.OperationsDialog(self.window)
        dialog.api_chain_input.setPlainText('[{"method":"POST","url":"/api/v1/users?access_token=also-hidden","body":{"client_secret":"hidden"}}]')
        plan = dialog.validate_api_chain()
        self.assertTrue(plan["valid"])
        self.assertIn("***", dialog.api_chain_preview.toPlainText())
        self.assertNotIn("hidden", dialog.api_chain_preview.toPlainText())
        self.assertNotIn("also-hidden", dialog.api_chain_preview.toPlainText())
        dialog.api_chain_input.setPlainText('[{"method":"GET","url":"https://other.example.test/users"}]')
        self.assertFalse(dialog.validate_api_chain()["valid"])
        dialog.close()

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
