"""Static contract checks for the native iPad client source tree."""

from pathlib import Path
import unittest


ROOT = Path(__file__).parent.parent / "ios" / "ZSAPIClient"


class IOSProjectTests(unittest.TestCase):
    def test_project_declares_a_native_ipad_application(self):
        project = (ROOT / "project.yml").read_text(encoding="utf-8")
        self.assertIn("platform: iOS", project)
        self.assertIn("TARGETED_DEVICE_FAMILY: \"1,2\"", project)
        self.assertIn("NSAllowsArbitraryLoads: NO", project)

    def test_secret_and_token_handling_use_keychain_and_https(self):
        keychain = (ROOT / "Sources/Services/KeychainStore.swift").read_text(encoding="utf-8")
        client = (ROOT / "Sources/Services/OneAPIClient.swift").read_text(encoding="utf-8")
        view_model = (ROOT / "Sources/Views/ContentView.swift").read_text(encoding="utf-8")
        self.assertIn("kSecAttrAccessibleWhenUnlockedThisDeviceOnly", keychain)
        self.assertIn('url.scheme?.lowercased() == "https"', client)
        self.assertIn('"audience": "https://api.zscaler.com"', client)
        self.assertIn('KeychainStore.save(self.secret', view_model)
        self.assertNotIn("UserDefaults", keychain + client + view_model)

    def test_readme_is_clear_that_xcode_on_macos_builds_the_ipa(self):
        readme = (ROOT.parent / "README.md").read_text(encoding="utf-8")
        self.assertIn("macOS", readme)
        self.assertIn("Xcode", readme)
        self.assertIn("IPA", readme)


if __name__ == "__main__":
    unittest.main()
