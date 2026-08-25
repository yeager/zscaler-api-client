import os
import unittest

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


if __name__ == "__main__":
    unittest.main()
