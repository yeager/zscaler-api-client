import json
import os
import unittest
from pathlib import Path
from tempfile import TemporaryDirectory
from unittest.mock import patch

os.environ.setdefault("QT_QPA_PLATFORM", "offscreen")

from PySide6.QtCore import QSettings
from PySide6.QtWidgets import QApplication

import zscaler_api_client as client


class EnvironmentProfileTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.app = QApplication.instance() or QApplication([])

    def setUp(self):
        self.directory = TemporaryDirectory()
        self.settings = QSettings(str(Path(self.directory.name) / "profiles.ini"), QSettings.Format.IniFormat)

    def tearDown(self):
        self.settings.clear()
        self.settings.sync()
        self.directory.cleanup()

    def test_profiles_isolate_non_secret_tenant_settings_and_workspace(self):
        self.settings.setValue("zia/enabled", "true")
        self.settings.setValue("zia/cloud", "tenant-a.example")
        self.settings.setValue("advanced/default_api", "ZIA")
        client.save_environment_profile_snapshot(self.settings, "default", "ZIA", "https://tenant-a.example/api/v1/users")

        profile = client.create_environment_profile(self.settings, "Tenant B")
        self.assertIsNotNone(profile)
        self.assertEqual("tenant-a.example", self.settings.value(client._profile_data_key(profile["id"], "settings/zia/cloud")))
        self.settings.setValue(client._profile_data_key(profile["id"], "settings/zia/cloud"), "tenant-b.example")
        self.settings.setValue(client._profile_data_key(profile["id"], "workspace/url"), "https://tenant-b.example/api/v1/users")

        target = client.activate_environment_profile_settings(self.settings, profile["id"])
        self.assertEqual("tenant-b.example", self.settings.value("zia/cloud"))
        self.assertEqual("https://tenant-b.example/api/v1/users", target["url"])
        original = client.activate_environment_profile_settings(self.settings, "default")
        self.assertEqual("tenant-a.example", self.settings.value("zia/cloud"))
        self.assertEqual("https://tenant-a.example/api/v1/users", original["url"])

    def test_legacy_profile_receives_non_secret_snapshot_on_first_activation(self):
        self.settings.setValue("profiles/names", json.dumps(["Legacy tenant"]))
        self.settings.setValue("profiles/Legacy tenant/api", "ZIA")
        self.settings.setValue("profiles/Legacy tenant/url", "https://legacy.example/api")
        self.settings.setValue("zia/enabled", "true")
        self.settings.setValue("zia/cloud", "legacy.example")
        profile = next(item for item in client.environment_profiles(self.settings) if item["name"] == "Legacy tenant")
        target = client.activate_environment_profile_settings(self.settings, profile["id"])
        self.assertEqual("legacy.example", self.settings.value("zia/cloud"))
        self.assertEqual("https://legacy.example/api", target["url"])
        self.assertEqual("true", self.settings.value(client._profile_data_key(profile["id"], "initialized")))

    def test_profile_names_and_secret_namespaces_are_safe(self):
        self.assertEqual("", client.valid_environment_profile_name("bad/name"))
        self.assertEqual("", client.valid_environment_profile_name("bad\\name"))
        self.assertIsNone(client.create_environment_profile(self.settings, "Default"))
        profile = client.create_environment_profile(self.settings, "Production")
        self.assertIsNotNone(profile)
        self.assertEqual("zia_api_key", client._tenant_credential_key("zia_api_key", "default"))
        self.assertEqual(f"profile:{profile['id']}:zia_api_key", client._tenant_credential_key("zia_api_key", profile["id"]))
        self.assertEqual("ai_api_key", client._tenant_credential_key("ai_api_key", profile["id"]))
        self.assertFalse(client.rename_environment_profile(self.settings, "../default", "Renamed"))
        self.assertIsNone(client.activate_environment_profile_settings(self.settings, "../default"))

    def test_invalid_persisted_profile_id_cannot_replace_default(self):
        self.settings.setValue("profiles/items", json.dumps([{"id": "../../default", "name": "Impostor"}]))
        profiles = client.environment_profiles(self.settings)
        self.assertEqual([{"id": "default", "name": "Default"}], profiles)

    def test_secure_store_and_get_use_the_active_profile_namespace(self):
        profile = client.create_environment_profile(self.settings, "Production")
        old_cache, old_loaded = dict(client._credential_cache), client._credentials_loaded
        try:
            client._credential_cache.clear()
            client._credentials_loaded = True
            with patch.object(client, "active_environment_profile", return_value=profile), patch.object(client, "_save_all_credentials", return_value=True):
                self.assertTrue(client.secure_store("zia_api_key", "profile-secret"))
                self.assertEqual("profile-secret", client.secure_get("zia_api_key"))
            self.assertEqual("profile-secret", client._credential_cache[f"profile:{profile['id']}:zia_api_key"])
            with patch.object(client, "active_environment_profile", return_value={"id": "default", "name": "Default"}):
                self.assertEqual("", client.secure_get("zia_api_key"))
        finally:
            client._credential_cache.clear()
            client._credential_cache.update(old_cache)
            client._credentials_loaded = old_loaded

    def test_keychain_load_failure_never_overwrites_cached_blob(self):
        old_cache, old_loaded = dict(client._credential_cache), client._credentials_loaded
        try:
            client._credential_cache.clear()
            client._credentials_loaded = False
            with patch.object(client, "_load_all_credentials", return_value=False), patch.object(client, "_save_all_credentials") as save:
                self.assertFalse(client.secure_store_many({"zia_api_key": "new-secret"}))
            save.assert_not_called()
            self.assertEqual({}, client._credential_cache)
        finally:
            client._credential_cache.clear()
            client._credential_cache.update(old_cache)
            client._credentials_loaded = old_loaded

    def test_delete_rejects_default_and_removes_profile_secrets(self):
        profile = client.create_environment_profile(self.settings, "Disposable")
        old_cache, old_loaded = dict(client._credential_cache), client._credentials_loaded
        try:
            client._credential_cache.clear()
            client._credential_cache[client._tenant_credential_key("zia_api_key", profile["id"])] = "secret"
            client._credentials_loaded = True
            self.assertFalse(client.delete_environment_profile(self.settings, "default"))
            with patch.object(client, "_save_all_credentials", return_value=True):
                self.assertTrue(client.delete_environment_profile(self.settings, profile["id"]))
            self.assertNotIn(profile["id"], json.dumps(client.environment_profiles(self.settings)))
            self.assertNotIn("secret", client._credential_cache.values())
        finally:
            client._credential_cache.clear()
            client._credential_cache.update(old_cache)
            client._credentials_loaded = old_loaded

    def test_history_defaults_to_active_environment_and_can_show_all(self):
        history = [
            {"timestamp": "1", "environment_id": "default", "environment": "Default", "method": "GET", "url": "https://a.example", "status": 200},
            {"timestamp": "2", "environment_id": "abc", "environment": "Tenant B", "method": "GET", "url": "https://b.example", "status": 200},
        ]
        dialog = client.HistoryDialog(history, active_profile={"id": "abc", "name": "Tenant B"})
        self.assertEqual(1, dialog.history_table.rowCount())
        self.assertEqual("Tenant B", dialog.history_table.item(0, 1).text())
        dialog.environment_filter.setCurrentIndex(1)
        self.assertEqual(2, dialog.history_table.rowCount())
        dialog.close()

    def test_window_switch_clears_sessions_request_and_response(self):
        self.settings.setValue("zia/enabled", "true")
        self.settings.setValue("advanced/default_api", "ZIA")
        client.save_environment_profile_snapshot(self.settings, "default", "ZIA", "https://a.example/api")
        profile = client.create_environment_profile(self.settings, "Tenant B")
        self.settings.setValue(client._profile_data_key(profile["id"], "workspace/url"), "https://b.example/api")
        window = client.MainWindow()
        try:
            window.zia_session = "in-memory-session"
            window.url_input.setText("https://a.example/private")
            window.response_body.setPlainText("private response")
            with patch.object(client, "QSettings", return_value=self.settings):
                self.assertTrue(window._activate_environment_profile(profile["id"]))
            self.assertIsNone(window.zia_session)
            self.assertEqual("https://b.example/api", window.url_input.text())
            self.assertEqual("", window.response_body.toPlainText())
            self.assertEqual(profile["id"], client.active_environment_profile(self.settings)["id"])
        finally:
            window.close()

    def test_history_from_another_environment_cannot_be_loaded(self):
        client.environment_profiles(self.settings)
        window = client.MainWindow()
        try:
            window.url_input.setText("https://unchanged.example")
            entry = {"environment_id": "0123456789abcdef", "method": "GET", "url": "https://other.example"}
            with patch.object(client, "QSettings", return_value=self.settings), patch.object(client.QMessageBox, "warning") as warning:
                window._load_from_history(entry)
            warning.assert_called_once()
            self.assertEqual("https://unchanged.example", window.url_input.text())
        finally:
            window.close()


if __name__ == "__main__":
    unittest.main()
