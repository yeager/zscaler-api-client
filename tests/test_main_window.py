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

    def test_documented_rest_contract_populates_guide_and_blocks_missing_required_value(self):
        details = {
            "method": "POST", "path": "/zia/api/v1/resources", "absolute_url": "https://api.zsapi.net/zia/api/v1/resources",
            "description": "Creates a resource", "doc_url": "https://automate.zscaler.com/docs/resource",
            "request_content_type": "application/json", "body": {"name": "string"}, "response_codes": ["201", "400"],
            "parameters": [
                {"name": "tenant", "in": "query", "type": "string", "required": True, "default": "", "description": "Tenant name"},
                {"name": "trace", "in": "query", "type": "boolean", "required": False, "default": "false", "description": "Trace request"},
            ],
        }
        item = client.QTreeWidgetItem(["POST Create resource"])
        item.setData(0, client.Qt.ItemDataRole.UserRole, details)
        self.window._on_endpoint_selected(item, 0)
        self.assertEqual("tenant", self.window.params_table.item(0, 0).text())
        self.assertFalse(self.window.params_table.item(0, 1).text())
        self.assertEqual(2, self.window.request_guide_table.rowCount())
        self.assertEqual("false", self.window.request_guide_table.item(1, 4).text())
        self.assertEqual({"name": "string"}, json.loads(self.window.body_input.toPlainText()))
        self.assertEqual("Content-Type", self.window.headers_table.item(0, 0).text())
        with patch.object(client, "ApiWorker") as worker, patch.object(client.QMessageBox, "warning") as warning:
            self.window._send_request()
        worker.assert_not_called(); warning.assert_called_once()
        self.window.params_table.setItem(0, 1, client.QTableWidgetItem("soc"))
        self.window.send_btn.setEnabled(True)
        with patch.object(client, "ApiWorker") as worker:
            self.window._send_request()
        worker.assert_called_once()
        self.window._detach_endpoint_contract()
        self.assertIsNone(self.window._selected_endpoint_details)
        self.assertIn("edited manually", self.window.request_guide_status.text())

    def test_double_click_prepares_documented_write_without_sending(self):
        details = {
            "method": "DELETE", "path": "/zia/api/v1/users/:id", "absolute_url": "https://api.zsapi.net/zia/api/v1/users/:id",
            "description": "Deletes a user", "doc_url": "", "parameters": [], "response_codes": ["204"],
        }
        item = client.QTreeWidgetItem(["DELETE User"]); item.setData(0, client.Qt.ItemDataRole.UserRole, details)
        with patch.object(self.window, "_send_request") as send, patch.object(client.QMessageBox, "information") as information:
            self.window._on_endpoint_double_clicked(item, 0)
        send.assert_not_called(); information.assert_called_once()
        self.assertEqual("DELETE", self.window.method_combo.currentText().replace("● ", ""))
        self.assertEqual(1, self.window.variables_table.rowCount())

    def test_documented_pagination_is_explicit_and_uses_bounded_worker(self):
        details = {
            "method": "GET", "path": "/zia/api/v1/users", "absolute_url": "https://api.zsapi.net/zia/api/v1/users",
            "description": "Lists users", "doc_url": "", "response_codes": ["200"],
            "parameters": [
                {"name": "page", "in": "query", "type": "int32", "required": False, "default": "1", "description": "Page"},
                {"name": "pageSize", "in": "query", "type": "int32", "required": False, "default": "50", "description": "Page size"},
            ],
            "pagination": {"mode": "page", "position_param": "page", "size_param": "pageSize", "start": 1},
        }
        item = client.QTreeWidgetItem(["GET Users"]); item.setData(0, client.Qt.ItemDataRole.UserRole, details)
        self.window._on_endpoint_selected(item, 0)
        self.assertTrue(self.window.pagination_controls_widget.isEnabled())
        self.assertFalse(self.window.paginate_request.isChecked())
        self.assertEqual("50", self.window.pagination_page_size.currentText())
        self.window.paginate_request.setChecked(True); self.window.pagination_max_pages.setCurrentText("5")
        with patch.object(client, "PaginatedApiWorker") as worker_type:
            self.window._send_request()
        request, pagination = worker_type.call_args.args
        self.assertEqual("GET", request["method"])
        self.assertEqual(50, pagination["page_size"]); self.assertEqual(5, pagination["max_pages"])

    def test_partial_pagination_is_visibly_not_complete(self):
        self.window._pending_request = {"method": "GET", "url": "https://example.test/users", "headers": {}, "body": None, "body_mode": "json", "start_time": 0}
        self.window._on_request_finished({"results": [{"success": True, "request": {}, "data": {
            "items": [{"id": 1}], "_page_responses": [{"items": [{"id": 1}]}],
            "_pagination": {"complete": False, "pages_fetched": 1, "records_fetched": 1, "limited_by_max_pages": True},
            "_status_code": 200, "_reason": "OK", "_size": 10, "_headers": {},
        }}]})
        self.assertIn("Partial pagination result", self.window.response_info.text())
        self.assertIn("stopped before completion", self.window.status_bar.currentMessage())

    def test_cancel_request_is_cooperative_and_empty_cancel_clears_pending_state(self):
        worker = MagicMock(); worker.isRunning.return_value = True; self.window.worker = worker
        self.window.cancel_request_btn.setEnabled(True); self.window._cancel_request()
        worker.requestInterruption.assert_called_once(); self.assertFalse(self.window.cancel_request_btn.isEnabled())
        self.window._pending_request = {"method": "GET", "url": "https://example.test", "headers": {}, "body": None, "body_mode": "json", "start_time": 0}
        self.window._on_request_finished({"results": [], "cancelled": True})
        self.assertIsNone(self.window._pending_request); self.assertIn("cancelled", self.window.status_bar.currentMessage())

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

    def test_paginated_worker_merges_numbered_pages_and_preserves_page_envelopes(self):
        worker = client.PaginatedApiWorker(
            {"url": "https://example.test/users?search=soc", "method": "GET"},
            {"mode": "page", "position_param": "page", "size_param": "pageSize", "start": 1, "page_size": 2, "max_pages": 5},
        )
        urls, emitted = [], []
        responses = [
            {"items": [{"id": 1}, {"id": 2}], "page": 1, "totalPages": 2, "_status_code": 200, "_size": 20, "_headers": {}},
            {"items": [{"id": 3}], "page": 2, "totalPages": 2, "_status_code": 200, "_size": 10, "_headers": {}},
        ]
        def request(req):
            urls.append(req["url"]); return responses[len(urls) - 1]
        worker.finished.connect(emitted.append)
        with patch.object(worker, "_make_request", side_effect=request): worker.run()
        data = emitted[0]["results"][0]["data"]
        self.assertEqual([{"id": 1}, {"id": 2}, {"id": 3}], data["items"])
        self.assertEqual(2, len(data["_page_responses"]))
        self.assertTrue(data["_pagination"]["complete"])
        self.assertIn("search=soc", urls[1]); self.assertIn("page=2", urls[1]); self.assertIn("pageSize=2", urls[1])

    def test_paginated_worker_follows_cursor_and_marks_hard_page_limit(self):
        worker = client.PaginatedApiWorker(
            {"url": "https://example.test/users", "method": "GET"},
            {"mode": "cursor", "position_param": "pageId", "next_field": "nextPage", "size_param": "pageSize", "page_size": 20, "max_pages": 2},
        )
        urls, emitted = [], []
        responses = [
            {"items": [{"id": 1}], "nextPage": "cursor-a", "_status_code": 200, "_size": 10, "_headers": {}},
            {"items": [{"id": 2}], "nextPage": "cursor-b", "_status_code": 200, "_size": 10, "_headers": {}},
        ]
        def request(req): urls.append(req["url"]); return responses[len(urls) - 1]
        worker.finished.connect(emitted.append)
        with patch.object(worker, "_make_request", side_effect=request): worker.run()
        summary = emitted[0]["results"][0]["data"]["_pagination"]
        self.assertFalse(summary["complete"]); self.assertTrue(summary["limited_by_max_pages"])
        self.assertNotIn("pageId=", urls[0]); self.assertIn("pageId=cursor-a", urls[1])

    def test_paginated_worker_cancellation_retains_completed_page_as_partial(self):
        worker = client.PaginatedApiWorker(
            {"url": "https://example.test/users", "method": "GET"},
            {"mode": "page", "position_param": "page", "size_param": "pageSize", "page_size": 1, "max_pages": 5},
        )
        emitted = []; worker.finished.connect(emitted.append)
        response = {"items": [{"id": 1}], "_status_code": 200, "_size": 10, "_headers": {}}
        with patch.object(worker, "_make_request", return_value=response), patch.object(worker, "isInterruptionRequested", side_effect=[False, True]): worker.run()
        data = emitted[0]["results"][0]["data"]
        self.assertEqual([{"id": 1}], data["items"])
        self.assertTrue(data["_pagination"]["cancelled"]); self.assertFalse(data["_pagination"]["complete"])

    def test_pagination_helpers_do_not_ambiguously_merge_multiple_lists(self):
        self.assertEqual(([1], "items"), client.paginated_records({"items": [1], "warnings": [2]}))
        self.assertEqual((None, ""), client.paginated_records({"users": [1], "groups": [2]}))
        self.assertEqual("next", client.nested_response_value({"pagination": {"nextPage": "next"}}, "nextPage"))

    def test_chain_worker_resolves_prior_response_into_encoded_url_and_typed_body(self):
        steps = [
            {"id": "users", "method": "GET", "url": "/users", "resolved_url": "https://example.test/users", "body": None, "headers": {}},
            {"id": "detail", "method": "POST", "url": "/users/{{users.items.0.id}}", "resolved_url": "https://example.test/users/{{users.items.0.id}}", "body": {"enabled": "{{users.items.0.enabled}}"}, "headers": {"X-Case": "{{users.items.0.case}}"}},
        ]
        worker = client.ApiChainWorker(steps, {"Authorization": "Bearer in-memory"})
        requests, emitted = [], []
        def make_request(request):
            requests.append(request)
            if len(requests) == 1:
                return {"items": [{"id": "user/a", "enabled": True, "case": "case-1"}], "_status_code": 200, "_headers": {}}
            return {"updated": True, "_status_code": 200, "_headers": {}}
        worker.finished.connect(emitted.append)
        with patch.object(worker, "_make_request", side_effect=make_request): worker.run()
        self.assertEqual("https://example.test/users/user%2Fa", requests[1]["url"])
        self.assertIs(True, requests[1]["body"]["enabled"])
        self.assertEqual("case-1", requests[1]["headers"]["X-Case"])
        self.assertEqual(2, len(emitted[0]["results"]))

    def test_api_worker_preserves_metadata_for_list_response(self):
        response = MagicMock(); response.read.return_value = b'[{"name":"Ada"}]'; response.status = 206; response.reason = "Partial Content"; response.headers.items.return_value = [("X-Request-ID", "abc")]
        with patch.object(client, "build_network_opener") as opener:
            opener.return_value.open.return_value.__enter__.return_value = response
            result = client.ApiWorker([])._make_request({"url": "https://example.test", "method": "GET"})
        self.assertEqual([{"name": "Ada"}], result["_payload"])
        self.assertEqual(206, result["_status_code"])
        self.assertEqual({"X-Request-ID": "abc"}, result["_headers"])

    def test_api_worker_preserves_binary_download_and_safe_filename(self):
        response = MagicMock()
        response.read.return_value = b"PK\x03\x04binary-data"
        response.status = 200; response.reason = "OK"
        response.headers.items.return_value = [
            ("Content-Type", "application/zip"),
            ("Content-Disposition", 'attachment; filename="../../audit.zip"'),
        ]
        with patch.object(client, "build_network_opener") as opener:
            opener.return_value.open.return_value.__enter__.return_value = response
            result = client.ApiWorker([])._make_request({"url": "https://example.test/download", "method": "GET"})
        self.assertEqual("audit.zip", result["_download_filename"])
        self.assertEqual("application/zip", result["_content_type"])
        self.assertEqual(b"PK\x03\x04binary-data", client.base64.b64decode(result["_binary_base64"]))

    def test_multipart_encoder_contains_file_and_not_local_path(self):
        with TemporaryDirectory() as directory:
            upload = Path(directory) / "evidence.txt"
            upload.write_bytes(b"evidence-bytes")
            data, content_type = client.encode_multipart_body({
                "file_path": str(upload), "file_field": "dataset", "fields": {"name": "SOC", "options": {"safe": True}},
            }, 1024 * 1024)
        self.assertIn("multipart/form-data; boundary=", content_type)
        self.assertIn(b'name="dataset"; filename="evidence.txt"', data)
        self.assertIn(b"evidence-bytes", data)
        self.assertIn(b'{"safe":true}', data)
        self.assertNotIn(str(upload.parent).encode(), data)
        self.assertTrue(client.is_textual_response("text/csv; charset=utf-8", b"name,value\nAda,1\n"))

    def test_transfer_limit_blocks_oversized_uploads_and_downloads(self):
        with TemporaryDirectory() as directory:
            upload = Path(directory) / "large.bin"; upload.write_bytes(b"123456")
            with self.assertRaisesRegex(ValueError, "transfer limit"):
                client.encode_multipart_body({"file_path": str(upload), "file_field": "file", "fields": {}}, 5)
        settings = client.QSettings("Zscaler", "APIClient")
        previous = settings.value("advanced/max_transfer_mb", None)
        response = MagicMock(); response.read.return_value = b"x" * (1024 * 1024 + 1)
        response.headers.items.return_value = [("Content-Type", "application/octet-stream")]
        response.status = 200; response.reason = "OK"
        try:
            settings.setValue("advanced/max_transfer_mb", "1")
            with patch.object(client, "build_network_opener") as opener:
                opener.return_value.open.return_value.__enter__.return_value = response
                with self.assertRaisesRegex(client.ApiRequestError, "transfer limit"):
                    client.ApiWorker([])._make_request({"url": "https://example.test/large", "method": "GET"})
        finally:
            settings.remove("advanced/max_transfer_mb") if previous is None else settings.setValue("advanced/max_transfer_mb", previous)

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
        self.assertEqual(self.window.request_tabs.count(), 6)
        self.assertFalse(self.window.request_tabs.isTabVisible(self.window.graphql_variables_tab_index))
        self.window.graphql_mode.setChecked(True)
        self.assertTrue(self.window.request_tabs.isTabVisible(self.window.graphql_variables_tab_index))
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
        self.window.graphql_mode.setChecked(True)
        self.window._refresh_graphql_variables()
        self.window.graphql_variables_table.setItem(0, 4, client.QTableWidgetItem('"user-1"'))
        self.window._populate_table(self.window.params_table, {"trace": "true"})
        with patch.object(client, "secure_store", lambda key, value: (saved.__setitem__(key, value), True)[1]), \
             patch.object(client, "secure_get", lambda key: saved.get(key, "")):
            self.window._save_graphql_query()
            self.window.url_input.clear()
            self.window.body_input.clear()
            self.window._populate_table(self.window.params_table, {})
            self.window._load_graphql_query()
        self.assertIn("graphql_preset_test-query", saved)
        self.assertIn("user(id", self.window.body_input.toPlainText())
        self.assertEqual(self.window._table_values(self.window.params_table), {"trace": "true"})
        self.assertEqual(self.window._graphql_variable_editor_texts(), {"id": '"user-1"'})
        legacy = json.loads(saved["graphql_preset_test-query"]); legacy.pop("graphql_variables"); legacy["params"] = {"id": "legacy-user", "trace": "true"}; saved["graphql_preset_test-query"] = json.dumps(legacy)
        with patch.object(client, "secure_get", lambda key: saved.get(key, "")):
            self.window._load_graphql_query()
        self.assertEqual(self.window._graphql_variable_editor_texts(), {"id": "legacy-user"})
        self.assertEqual(self.window._table_values(self.window.params_table), {"trace": "true"})
        settings.remove("graphql/presets")

    def test_catalog_ai_attaches_documented_contract_and_never_invents_parameters(self):
        endpoint = {
            "product": "zia", "category": "Users", "name": "List users", "description": "Lists users",
            "method": "GET", "url": "https://api.zsapi.net/zia/api/v1/users", "doc_url": "https://automate.zscaler.com/docs/users",
            "parameters": [{"name": "limit", "in": "query", "type": "int32", "required": False, "default": "", "description": "Maximum results"}],
            "response_codes": ["200"],
        }
        settings = client.QSettings("Zscaler", "APIClient")
        previous = settings.value("ai/provider", None)
        try:
            settings.setValue("ai/provider", "catalog")
            self.window.ai_question.setText("list all zia users with pagination")
            with patch.object(client, "AUTOMATION_HUB_CATALOG", [endpoint]), patch.object(client, "ApiWorker") as worker:
                self.window._run_ai_assistant()
            worker.assert_not_called()
            preview = json.loads(self.window.ai_preview.toPlainText())
            self.assertEqual({"limit": "100"}, preview["suggested_params"])
            self.assertNotIn("pageSize", preview["suggested_params"])
            self.assertEqual("limit", self.window.params_table.item(0, 0).text())
            self.assertEqual(1, self.window.request_guide_table.rowCount())
            self.assertIsNotNone(self.window._selected_endpoint_details)
        finally:
            settings.remove("ai/provider") if previous is None else settings.setValue("ai/provider", previous)

    def test_graphql_variables_are_typed_and_sent_in_body_not_url(self):
        query = "query Lookup($id: ID!, $limit: Int!, $active: Boolean, $tags: [String!]) { user(id: $id) { id } }"
        definitions = client.graphql_variable_definitions(query)
        self.assertEqual(["id", "limit", "active", "tags"], [item["name"] for item in definitions])
        self.assertTrue(definitions[0]["required"])
        self.window.graphql_mode.setChecked(True)
        self.window.url_input.setText("https://example.test/graphql")
        self.window.body_input.setPlainText(json.dumps({"query": query, "variables": {}}))
        self.window._refresh_graphql_variables()
        for row, value in enumerate(('"user-1"', "10", "true", '["soc","zia"]')):
            self.window.graphql_variables_table.setItem(row, 4, client.QTableWidgetItem(value))
        with patch.object(client, "ApiWorker") as worker_type:
            self.window._send_request()
        request = worker_type.call_args.args[0][0]
        self.assertEqual("https://example.test/graphql", request["url"])
        self.assertEqual({"id": "user-1", "limit": 10, "active": True, "tags": ["soc", "zia"]}, request["body"]["variables"])
        multi = "query First($skip: Int = 0) { a } query Second($ids: [ID!]!, $filter: Filter = {enabled: true}) { b }"
        selected = client.graphql_variable_definitions(multi, "Second")
        self.assertEqual(["ids", "filter"], [item["name"] for item in selected])
        self.assertTrue(selected[0]["required"]); self.assertFalse(selected[1]["required"])
        self.assertEqual("null_not_allowed", client.parse_graphql_variable_value("null", "ID!")[1])
        self.assertEqual("null_not_allowed", client.parse_graphql_variable_value('["one", null]', "[ID!]!")[1])

    def test_graphql_multiple_operations_require_a_matching_operation_name(self):
        body = {"query": "query First { a } query Second { b }", "variables": {}}
        _, errors = self.window._validated_graphql_body(body)
        self.assertTrue(errors)
        body["operationName"] = "Missing"
        _, errors = self.window._validated_graphql_body(body)
        self.assertTrue(errors)
        body["operationName"] = "Second"
        _, errors = self.window._validated_graphql_body(body)
        self.assertEqual([], errors)

    def test_graphql_preset_keychain_failures_do_not_change_settings(self):
        settings = client.QSettings("Zscaler", "APIClient")
        settings.setValue("graphql/presets", ["old-query"])
        self.window._refresh_graphql_presets()
        self.window.graphql_preset_choice.setCurrentText("old-query")
        self.window.graphql_preset_name.setText("new-query")
        with patch.object(client, "secure_get", return_value='{"body":"{}"}'), \
             patch.object(client, "secure_store_many", return_value=False), \
             patch.object(client.QMessageBox, "warning") as warning:
            self.window._rename_graphql_query()
        self.assertEqual(["old-query"], settings.value("graphql/presets", [], type=list))
        warning.assert_called_once()
        with patch.object(client, "secure_delete", return_value=False), \
             patch.object(client.QMessageBox, "warning") as warning:
            self.window._delete_graphql_query()
        self.assertEqual(["old-query"], settings.value("graphql/presets", [], type=list))
        warning.assert_called_once()
        settings.remove("graphql/presets")

    def test_graphql_required_variable_blocks_request(self):
        self.window.graphql_mode.setChecked(True)
        self.window.url_input.setText("https://example.test/graphql")
        self.window.body_input.setPlainText('{"query":"query Lookup($id: ID!) { user(id: $id) { id } }","variables":{}}')
        self.window._refresh_graphql_variables()
        with patch.object(client, "ApiWorker") as worker_type, patch.object(client.QMessageBox, "warning") as warning:
            self.window._send_request()
        worker_type.assert_not_called(); warning.assert_called_once()
        self.assertEqual(self.window.graphql_variables_tab_index, self.window.request_tabs.currentIndex())

    def test_body_modes_build_raw_form_and_private_multipart_requests(self):
        self.window.url_input.setText("https://example.test/upload")
        self.window.method_combo.setCurrentText("● POST")
        self.window._set_body_mode("raw")
        self.window.body_input.setPlainText("plain-body")
        with patch.object(client, "ApiWorker") as worker_type:
            self.window._send_request()
        request = worker_type.call_args.args[0][0]
        self.assertEqual("raw", request["body_mode"]); self.assertEqual("plain-body", request["body"])

        self.window.send_btn.setEnabled(True)
        self.window._set_body_mode("form")
        self.window.body_input.setPlainText('{"scope":["read","write"],"name":"SOC"}')
        with patch.object(client, "ApiWorker") as worker_type:
            self.window._send_request()
        request = worker_type.call_args.args[0][0]
        self.assertEqual("scope=read&scope=write&name=SOC", request["body"])
        self.assertEqual("application/x-www-form-urlencoded", request["headers"]["Content-Type"])

        self.window.send_btn.setEnabled(True)
        with TemporaryDirectory() as directory:
            upload = Path(directory) / "dataset.csv"; upload.write_text("name\nAda\n", encoding="utf-8")
            self.window._set_body_mode("multipart")
            self.window.multipart_file_path.setText(str(upload))
            self.window.multipart_file_field.setText("dataset")
            self.window.body_input.setPlainText('{"businessUnit":"soc"}')
            with patch.object(client, "ApiWorker") as worker_type:
                self.window._send_request()
            request = worker_type.call_args.args[0][0]
            self.assertEqual(str(upload), request["body"]["_multipart"]["file_path"])
            pending = self.window._pending_request["body"]
            self.assertEqual("dataset.csv", pending["multipart"]["file_name"])
            self.assertNotIn(str(upload.parent), json.dumps(pending))

    def test_binary_response_requires_confirmation_and_exports_exact_bytes(self):
        self.window._pending_request = {"method": "GET", "url": "https://example.test/audit.zip", "headers": {}, "body": None, "start_time": 0}
        payload = b"PK\x03\x04exact-download"
        self.window._on_request_finished({"results": [{"success": True, "data": {
            "_binary_base64": client.base64.b64encode(payload).decode(), "_download_filename": "audit.zip",
            "_content_type": "application/zip", "_status_code": 200, "_reason": "OK", "_size": len(payload), "_headers": {},
        }}]})
        self.assertEqual(payload, self.window._binary_response)
        self.assertIn("audit.zip", self.window.response_body.toPlainText())
        with TemporaryDirectory() as directory:
            target = str(Path(directory) / "saved.zip")
            with patch.object(client.QMessageBox, "question", return_value=client.QMessageBox.StandardButton.Yes), \
                 patch.object(client.QFileDialog, "getSaveFileName", return_value=(target, "")):
                self.window._export_full_response()
            self.assertEqual(payload, Path(target).read_bytes())

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

    def test_xlsx_keeps_columns_after_z_and_pdf_keeps_all_pages(self):
        headers = [f"column-{index}" for index in range(30)]
        workbook = zipfile.ZipFile(BytesIO(self.window._xlsx_bytes(headers, [headers])))
        sheet = workbook.read("xl/worksheets/sheet1.xml").decode()
        self.assertIn('r="AA1"', sheet)
        self.assertIn("column-29", sheet)
        report = self.window._pdf_bytes("Full report", [f"line {index}" for index in range(130)])
        self.assertTrue(report.startswith(b"%PDF-"))
        self.assertRegex(report, rb"/Count [3-9]")

    def test_response_exchange_serializers_and_har_are_masked(self):
        self.window._last_response_exchange = {
            "schema": client.RESPONSE_EXCHANGE_SCHEMA,
            "request": {"method": "POST", "url": "https://example.test/items?api_key=never-export", "headers": {"Authorization": "never-export"}, "body": {"client_secret": "never-export"}},
            "response": {"status": 200, "reason": "OK", "headers": {"Set-Cookie": "never-export"}, "body": {"items": [{"name": "A", "count": 3}]}},
        }
        payload = self.window._response_export_payload()
        rendered = json.dumps(payload)
        self.assertNotIn("never-export", rendered)
        self.assertTrue(self.window._yaml_text(payload).startswith("---"))
        ET.fromstring(self.window._xml_text(payload))
        har = self.window._response_har(payload)
        self.assertEqual("1.2", har["log"]["version"])
        self.assertNotIn("never-export", json.dumps(har))

    def test_response_table_export_uses_full_source_not_ui_limit(self):
        records = [{"id": index, **{f"field-{column}": column for column in range(28)}} for index in range(150)]
        self.window._last_response_exchange = {
            "schema": client.RESPONSE_EXCHANGE_SCHEMA,
            "request": {}, "response": {"status": 200, "headers": {}, "body": {"records": records}},
        }
        self.window._render_response_visualization({"records": records})
        headers, rows = self.window._response_export_table()
        self.assertEqual(150, len(rows))
        self.assertGreater(len(headers), 26)

    def test_response_exchange_reopens_locally_without_api_worker(self):
        document = {
            "schema": client.RESPONSE_EXCHANGE_SCHEMA,
            "request": {"method": "GET", "url": "https://example.test?token=never-open", "headers": {}},
            "response": {"status": 200, "reason": "OK", "size_bytes": 50, "headers": {"X-Test": "yes"}, "body": {"data": [{"name": "A", "password": "never-open"}]}},
        }
        with TemporaryDirectory() as directory:
            source = Path(directory) / "response.zsapi.json"
            source.write_text(json.dumps(document), encoding="utf-8")
            with patch.object(client.QFileDialog, "getOpenFileName", return_value=(str(source), "")), \
                 patch.object(client, "ApiWorker") as worker_type:
                self.window._import_response_exchange()
            worker_type.assert_not_called()
        visible = self.window.response_body.toPlainText() + json.dumps(self.window._last_response_exchange)
        self.assertNotIn("never-open", visible)
        self.assertIn("A", self.window.response_body.toPlainText())
        self.assertIn("no API request", self.window.status_bar.currentMessage())

    def test_response_exchange_rejects_untrusted_structure(self):
        document = {"schema": client.RESPONSE_EXCHANGE_SCHEMA, "request": {"headers": []}, "response": {"status": "not-a-number", "headers": {}, "body": {}}}
        with TemporaryDirectory() as directory:
            source = Path(directory) / "invalid.json"
            source.write_text(json.dumps(document), encoding="utf-8")
            with patch.object(client.QFileDialog, "getOpenFileName", return_value=(str(source), "")), \
                 patch.object(client.QMessageBox, "warning") as warning:
                self.window._import_response_exchange()
        warning.assert_called_once()
        self.assertIsNone(self.window._last_response_exchange)

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

    def test_request_exports_preserve_form_and_multipart_without_local_path(self):
        self.window.url_input.setText("https://example.test/upload")
        self.window.method_combo.setCurrentText("● POST")
        self.window._set_body_mode("form")
        self.window.body_input.setPlainText("scope=read&client_secret=do-not-export")
        curl = self.window._masked_curl_command()
        collection = self.window._postman_collection()
        self.assertIn("--data", curl)
        self.assertEqual("urlencoded", collection["item"][0]["request"]["body"]["mode"])
        self.assertNotIn("do-not-export", curl)
        self.assertNotIn("do-not-export", str(collection))

        self.window._set_body_mode("multipart")
        self.window.multipart_file_field.setText("evidence")
        self.window.multipart_file_path.setText("/private/soc/case-42/evidence.zip")
        self.window.body_input.setPlainText('{"case":"42","api_key":"do-not-export"}')
        curl = self.window._masked_curl_command()
        collection = self.window._postman_collection()
        postman_body = collection["item"][0]["request"]["body"]
        self.assertEqual("formdata", postman_body["mode"])
        self.assertIn("evidence=@<select-local-file>", curl)
        self.assertIn({"key": "evidence", "type": "file", "src": "<select-local-file>"}, postman_body["formdata"])
        for exported in (curl, str(collection)):
            self.assertNotIn("/private/soc", exported)
            self.assertNotIn("do-not-export", exported)

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
        keys = ("zcc/cloud", "zcc/client_id")
        previous = {key: settings.value(key, None) for key in keys}
        try:
            settings.setValue("zcc/cloud", "mobile.zscalertwo.net")
            settings.setValue("zcc/client_id", "key-id")
            if self.window.api_type.findText("ZCC") < 0:
                self.window.api_type.addItem("ZCC")
            self.window.api_type.setCurrentText("ZCC")
            with patch.object(client, "secure_get", return_value="secret-key"), \
                 patch.object(self.window, "_send_request") as send:
                self.window._authenticate_api()
            self.assertEqual("https://mobile.zscalertwo.net/papi/auth/v1/login", self.window.url_input.text())
            self.assertEqual("application/json", self.window.headers_table.item(0, 1).text())
            self.assertEqual({"apiKey": "key-id", "secretKey": "secret-key"}, json.loads(self.window.body_input.toPlainText()))
            send.assert_called_once()
        finally:
            for key, value in previous.items():
                settings.remove(key) if value is None else settings.setValue(key, value)

    def test_zcc_jwt_is_masked_and_used_as_auth_token_header(self):
        if self.window.api_type.findText("ZCC") < 0:
            self.window.api_type.addItem("ZCC")
        self.window.api_type.setCurrentText("ZCC")
        self.window._pending_request = {"method": "POST", "url": "https://mobile.example.test/papi/auth/v1/login", "headers": {}, "body": {}, "start_time": 0}
        self.window._on_request_finished({"results": [{"success": True, "data": {
            "jwtToken": "never-display", "_status_code": 200, "_reason": "OK", "_size": 1, "_headers": {},
        }}]})
        self.assertEqual("never-display", self.window.zcc_token)
        self.assertNotIn("never-display", self.window.response_body.toPlainText())
        self.window.url_input.setText("https://mobile.example.test/papi/public/v1/getCompanyInfo")
        self.window.method_combo.setCurrentText("● GET")
        with patch.object(client, "ApiWorker") as worker_type:
            self.window._send_request()
        request = worker_type.call_args.args[0][0]
        self.assertEqual("never-display", request["headers"]["auth-token"])
        self.assertNotIn("Authorization", request["headers"])
        self.assertEqual("***", client.redact_sensitive(request["headers"])["auth-token"])

    def test_zia_session_comes_from_cookie_and_auth_editor_is_cleared(self):
        if self.window.api_type.findText("ZIA") < 0:
            self.window.api_type.addItem("ZIA")
        self.window.api_type.setCurrentText("ZIA")
        self.window.url_input.setText("https://zia.example.test/api/v1/authenticatedSession")
        self.window.body_input.setPlainText('{"password":"never-display"}')
        self.window._pending_request = {"method": "POST", "url": self.window.url_input.text(), "headers": {}, "body": {}, "start_time": 0}
        self.window._on_request_finished({"results": [{"success": True, "data": {
            "authType": "ADMIN_LOGIN", "_status_code": 200, "_reason": "OK", "_size": 1,
            "_headers": {"Set-Cookie": "JSESSIONID=session-value; Path=/; Secure; HttpOnly"},
        }}]})
        self.assertEqual("session-value", self.window.zia_session)
        self.assertFalse(self.window.body_input.toPlainText())
        self.assertFalse(self.window.url_input.text())
        self.assertNotIn("session-value", self.window.response_headers.toPlainText())

    def test_non_authentication_token_response_does_not_replace_session(self):
        if self.window.api_type.findText("ZPA") < 0:
            self.window.api_type.addItem("ZPA")
        self.window.api_type.setCurrentText("ZPA")
        self.window.zpa_token = "existing-session"
        self.window.url_input.setText("https://zpa.example.test/mgmtconfig/v1/enrollment-token")
        self.window._pending_request = {"method": "POST", "url": self.window.url_input.text(), "headers": {}, "body": {}, "start_time": 0}
        self.window._on_request_finished({"results": [{"success": True, "data": {
            "token": "resource-token", "_status_code": 201, "_reason": "Created", "_size": 1, "_headers": {},
        }}]})
        self.assertEqual("existing-session", self.window.zpa_token)
        self.assertTrue(self.window.url_input.text())
        self.assertNotIn("resource-token", self.window.response_body.toPlainText())

    def test_zpa_form_credentials_are_url_encoded_without_extra_grant_fields(self):
        settings = client.QSettings("Zscaler", "APIClient")
        previous = {key: settings.value(key, None) for key in ("zpa/cloud", "zpa/client_id")}
        try:
            settings.setValue("zpa/cloud", "zpa.example.test")
            settings.setValue("zpa/client_id", "client+id")
            if self.window.api_type.findText("ZPA") < 0:
                self.window.api_type.addItem("ZPA")
            self.window.api_type.setCurrentText("ZPA")
            with patch.object(client, "secure_get", return_value="secret%#&+"), patch.object(self.window, "_send_request"):
                self.window._authenticate_api()
            parsed = client.urllib.parse.parse_qs(self.window.body_input.toPlainText(), keep_blank_values=True)
            self.assertEqual({"client_id": ["client+id"], "client_secret": ["secret%#&+"]}, parsed)
        finally:
            for key, value in previous.items():
                settings.remove(key) if value is None else settings.setValue(key, value)

    def test_zdx_authentication_honors_configured_api_version(self):
        settings = client.QSettings("Zscaler", "APIClient")
        keys = ("zdx/cloud", "zdx/key_id", "zdx/api_version")
        previous = {key: settings.value(key, None) for key in keys}
        try:
            settings.setValue("zdx/cloud", "api.zdxcloud.net")
            settings.setValue("zdx/key_id", "key-id")
            settings.setValue("zdx/api_version", "v2")
            if self.window.api_type.findText("ZDX") < 0:
                self.window.api_type.addItem("ZDX")
            self.window.api_type.setCurrentText("ZDX")
            with patch.object(client, "secure_get", return_value="key-secret"), patch.object(self.window, "_send_request"):
                self.window._authenticate_api()
            self.assertEqual("https://api.zdxcloud.net/v2/oauth/token", self.window.url_input.text())
            self.assertEqual({"key_id": "key-id", "key_secret": "key-secret"}, json.loads(self.window.body_input.toPlainText()))
        finally:
            for key, value in previous.items():
                settings.remove(key) if value is None else settings.setValue(key, value)

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

    def test_background_schedule_runs_only_through_its_headless_id(self):
        settings = client.QSettings("Zscaler", "APIClient")
        previous = settings.value("automation/schedules", None)
        try:
            with TemporaryDirectory() as output_dir:
                now = 1_800_000_000
                settings.setValue("automation/schedules", json.dumps([{
                    "id": "background_report", "name": "Background SOC", "kind": "soc", "cadence_seconds": 3600,
                    "output_dir": output_dir, "enabled": True, "background": True, "next_run": now - 1,
                }]))
                self.assertEqual([], self.window._run_due_report_schedules(now))
                generated = client.run_report_schedules(settings, [], now=now, selected_id="background_report")
                self.assertEqual(1, len(generated))
                self.assertTrue(Path(generated[0]).exists())
                dialog = client.OperationsDialog(self.window); dialog.report_schedules.setCurrentCell(0, 0)
                with patch.object(client, "unregister_background_schedule", side_effect=OSError("scheduler unavailable")), \
                     patch.object(client.QMessageBox, "warning") as warning:
                    dialog.toggle_selected_schedule()
                self.assertFalse(client.stored_report_schedules(settings)[0]["enabled"])
                warning.assert_called_once(); dialog.close()
                self.assertEqual([], client.run_report_schedules(settings, [], now=now, selected_id="background_report"))
        finally:
            if previous is None:
                settings.remove("automation/schedules")
            else:
                settings.setValue("automation/schedules", previous)

    def test_alert_center_uses_saved_error_threshold_and_is_available_in_basic_mode(self):
        settings = client.QSettings("Zscaler", "APIClient")
        old_mode, old_threshold, old_audit = settings.value("ui/mode", None), settings.value("monitoring/error_threshold", None), settings.value("audit/events", None)
        try:
            settings.setValue("ui/mode", "basic")
            settings.setValue("monitoring/error_threshold", "2")
            settings.remove("audit/events")
            self.window.request_history = [{"status": 500, "url": "https://example.test"}] * 2
            dialog = client.OperationsDialog(self.window)
            self.assertTrue(dialog.tabs.isTabVisible(dialog.alert_tab_index))
            self.assertIn("1 local alert", dialog.alert_summary.text())
            self.assertGreaterEqual(dialog.alert_table.rowCount(), 1)
            self.assertTrue(dialog.alert_chart.values)
            dialog.close()
        finally:
            for key, value in (("ui/mode", old_mode), ("monitoring/error_threshold", old_threshold), ("audit/events", old_audit)):
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

    def test_legacy_webhook_endpoint_migrates_out_of_plaintext_settings(self):
        settings = MagicMock()
        settings.value.return_value = "https://hooks.example.test/private-path"
        with patch.object(client, "secure_get", return_value=""), patch.object(client, "secure_store") as store:
            endpoint = client.secure_webhook_endpoint(settings)
        self.assertEqual("https://hooks.example.test/private-path", endpoint)
        store.assert_called_once_with(client.WEBHOOK_CREDENTIAL_KEY, endpoint)
        settings.remove.assert_called_once_with("automation/webhook_url")

        rejected = MagicMock(); rejected.value.return_value = "https://user:secret@hooks.example.test/"
        with patch.object(client, "secure_get", return_value=""), patch.object(client, "secure_store") as rejected_store:
            self.assertEqual("", client.secure_webhook_endpoint(rejected))
        rejected_store.assert_not_called()
        rejected.remove.assert_called_once_with("automation/webhook_url")

    def test_keychain_batch_update_rolls_back_after_storage_failure(self):
        previous_cache, previous_loaded = dict(client._credential_cache), client._credentials_loaded
        try:
            client._credential_cache.clear(); client._credential_cache.update({"existing": "preserved"}); client._credentials_loaded = True
            with patch.object(client, "_save_all_credentials", return_value=False):
                self.assertFalse(client.secure_store_many({"existing": "changed", "new": "secret"}))
            self.assertEqual({"existing": "preserved"}, client._credential_cache)
            with patch.object(client, "_save_all_credentials", return_value=True):
                self.assertTrue(client.secure_store_many({"existing": "changed", "new": "secret"}))
            self.assertEqual({"existing": "changed", "new": "secret"}, client._credential_cache)
        finally:
            client._credential_cache.clear(); client._credential_cache.update(previous_cache); client._credentials_loaded = previous_loaded

    def test_webhook_alert_delivery_is_approved_and_does_not_follow_redirects(self):
        with patch.object(client, "secure_webhook_endpoint", return_value="https://hooks.example.test/alerts"):
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
            self.assertGreaterEqual(dialog.webhook_history.rowCount(), 1)
            dialog.close()

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

    def test_api_chain_ui_runs_dataflow_worker_and_exports_masked_csv(self):
        self.window.api_type.setCurrentText("ZIA"); self.window.zia_session = "session"
        dialog = client.OperationsDialog(self.window)
        dialog.api_chain_input.setPlainText(json.dumps([
            {"id": "users", "method": "GET", "url": "/api/v1/users"},
            {"id": "detail", "method": "GET", "url": "/api/v1/users/{{users.items.0.id}}"},
        ]))
        with patch.object(client.QMessageBox, "question", return_value=client.QMessageBox.StandardButton.Yes), patch.object(client, "ApiChainWorker") as worker_type:
            dialog.run_api_chain()
        steps, headers = worker_type.call_args.args[:2]
        self.assertEqual("detail", steps[1]["id"]); self.assertIn("{{users.items.0.id}}", steps[1]["resolved_url"])
        self.assertIn("Cookie", headers)
        dialog._last_chain_results = [{"success": False, "error": "client_secret=hidden", "status_code": 400, "duration_ms": 5, "request": {"id": "detail", "method": "GET", "url": "https://example.test?token=hidden"}}]
        with TemporaryDirectory() as directory:
            target = str(Path(directory) / "chain.csv")
            with patch.object(client.QFileDialog, "getSaveFileName", return_value=(target, "CSV (*.csv)")):
                dialog.export_api_chain()
            exported = Path(target).read_text(encoding="utf-8")
        self.assertNotIn("hidden", exported); self.assertIn("detail", exported); self.assertIn("***", exported)
        dialog.close()

    def test_api_chain_results_render_status_table_chart_and_masked_raw_evidence(self):
        dialog = client.OperationsDialog(self.window)
        result = {"results": [
            {"success": True, "duration_ms": 12, "request": {"id": "users", "method": "GET", "url": "https://example.test/users"}, "data": {"items": [{"id": 1}], "_status_code": 200, "_headers": {}}},
            {"success": False, "duration_ms": 7, "status_code": 500, "error": "token=hidden", "request": {"id": "detail", "method": "GET", "url": "https://example.test/detail?token=hidden"}},
        ], "stopped_early": False}
        with patch.object(client.QMessageBox, "information"):
            dialog._on_api_chain_finished(result)
        self.assertEqual(2, dialog.api_chain_table.rowCount())
        self.assertEqual("1", dialog.api_chain_table.item(0, 3).text())
        self.assertEqual([("Succeeded", 1.0), ("Failed", 1.0)], dialog.api_chain_chart.values)
        self.assertNotIn("hidden", dialog.api_chain_result.toPlainText())
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
