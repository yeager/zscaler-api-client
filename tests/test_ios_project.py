"""Static contract checks for the native iPad client source tree."""

from pathlib import Path
import unittest


ROOT = Path(__file__).parent.parent / "ios" / "ZSAPIClient"


class IOSProjectTests(unittest.TestCase):
    def test_project_declares_a_native_ipad_application(self):
        project = (ROOT / "project.yml").read_text(encoding="utf-8")
        self.assertIn("platform: iOS", project)
        self.assertIn("TARGETED_DEVICE_FAMILY: \"1,2\"", project)
        self.assertIn("INFOPLIST_FILE: Sources/Info.plist", project)

    def test_secret_and_token_handling_use_keychain_and_https(self):
        keychain = (ROOT / "Sources/Services/KeychainStore.swift").read_text(encoding="utf-8")
        client = (ROOT / "Sources/Services/OneAPIClient.swift").read_text(encoding="utf-8")
        view_model = (ROOT / "Sources/Views/ContentView.swift").read_text(encoding="utf-8")
        self.assertIn("kSecAttrAccessibleWhenUnlockedThisDeviceOnly", keychain)
        self.assertIn('url.scheme?.lowercased() == "https"', client)
        self.assertIn('"audience": "https://api.zscaler.com"', client)
        self.assertIn('KeychainStore.save(self.secret', view_model)
        self.assertNotIn("UserDefaults", keychain + client + view_model)

    def test_info_plist_enforces_app_transport_security(self):
        info = (ROOT / "Sources/Info.plist").read_text(encoding="utf-8")
        self.assertIn("NSAppTransportSecurity", info)
        self.assertIn("NSAllowsArbitraryLoads", info)
        self.assertIn("<false/>", info)

    def test_readme_is_clear_that_xcode_on_macos_builds_the_ipa(self):
        readme = (ROOT.parent / "README.md").read_text(encoding="utf-8")
        self.assertIn("macOS", readme)
        self.assertIn("Xcode", readme)
        self.assertIn("IPA", readme)

    def test_ios_workflow_builds_without_signing_or_releasing(self):
        workflow = (Path(__file__).parent.parent / ".github/workflows/ios.yml").read_text(encoding="utf-8")
        self.assertIn("runs-on: macos-15", workflow)
        self.assertIn("xcodegen generate", workflow)
        self.assertIn("iphonesimulator", workflow)
        self.assertIn(" CODE_SIGNING_ALLOWED=NO test", workflow)
        self.assertIn("CODE_SIGNING_ALLOWED=NO", workflow)
        self.assertNotIn("action-gh-release", workflow)

    def test_native_project_has_oneapi_xctests(self):
        project = (ROOT / "project.yml").read_text(encoding="utf-8")
        tests = (ROOT / "Tests/OneAPIProfileTests.swift").read_text(encoding="utf-8")
        self.assertIn("type: bundle.unit-test", project)
        self.assertIn("@testable import ZS_API_Client", tests)
        self.assertIn("zslogin.net/oauth2/v1/token", tests)


if __name__ == "__main__":
    unittest.main()
