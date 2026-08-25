import os
import unittest
import xml.etree.ElementTree as ET
from pathlib import Path

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
        self.assertEqual(self.window.response_tabs.count(), 2)
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
        settings.mode_choice.setCurrentIndex(settings.mode_choice.findData("advanced"))
        self.assertTrue(settings.settings_tabs.isTabVisible(1))
        wizard = client.SetupWizard(self.window)
        wizard.mode_choice.setCurrentIndex(wizard.mode_choice.findData("basic"))
        self.assertTrue(wizard.cloud_input.isHidden())
        wizard.mode_choice.setCurrentIndex(wizard.mode_choice.findData("advanced"))
        self.assertTrue(wizard.cloud_input.isHidden() is False)
        wizard.close()
        settings.close()

    def test_ai_assistant_suggests_catalog_backed_request(self):
        self.window.ai_question.setText("list ZPA application segments")
        self.window._run_ai_assistant()
        self.assertEqual(self.window.method_combo.currentText(), "● GET")
        self.assertIn("/zpa/", self.window.url_input.text())
        self.assertGreater(self.window.ai_table.rowCount(), 0)


if __name__ == "__main__":
    unittest.main()
