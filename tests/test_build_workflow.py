"""Regression checks for required modules in packaged application builds."""

from pathlib import Path
import re
import unittest


class BuildWorkflowTests(unittest.TestCase):
    def test_every_native_build_explicitly_includes_local_service_modules(self):
        workflow = (Path(__file__).parent.parent / ".github/workflows/build.yml").read_text(
            encoding="utf-8"
        )
        build_sections = (
            workflow.split("  build-windows:", 1)[0],
            workflow.split("  build-windows:", 1)[1].split("  build-macos:", 1)[0],
            workflow.split("  build-macos:", 1)[1].split("  release:", 1)[0],
        )
        for module in ("feature_services", "evidence_signing", "schedule_services", "pac_services", "zscaler_config_services"):
            marker = f"--hidden-import {module}"
            data_marker = f'--add-data "{module}.py'
            for section in build_sections:
                self.assertIn(marker, section)
                self.assertIn(data_marker, section)
        for section in build_sections:
            self.assertIn("--collect-all cryptography", section)

    def test_readme_release_link_matches_application_version(self):
        root = Path(__file__).parent.parent
        source = (root / "zscaler_api_client.py").read_text(encoding="utf-8")
        readme = (root / "README.md").read_text(encoding="utf-8")
        version = re.search(r'^__version__ = "([^"]+)"$', source, re.MULTILINE)
        self.assertIsNotNone(version)
        self.assertIn(f"releases/tag/v{version.group(1)}", readme)

    def test_macos_build_checks_bundled_runtime_resources(self):
        workflow = (Path(__file__).parent.parent / ".github/workflows/build.yml").read_text(
            encoding="utf-8"
        )
        macos = workflow.split("  build-macos:", 1)[1].split("  release:", 1)[0]
        self.assertIn('Contents/Resources', macos)
        for resource in (
            "feature_services.py", "evidence_signing.py", "schedule_services.py",
            "pac_services.py", "zscaler_config_services.py", "assets/branding/zs-api-client-logo.png",
        ):
            self.assertIn(resource, macos)

    def test_windows_build_checks_bundled_runtime_resources(self):
        workflow = (Path(__file__).parent.parent / ".github/workflows/build.yml").read_text(
            encoding="utf-8"
        )
        windows = workflow.split("  build-windows:", 1)[1].split("  build-macos:", 1)[0]
        self.assertIn("Verify Windows bundle runtime resources", windows)
        for resource in (
            "feature_services.py", "evidence_signing.py", "schedule_services.py",
            "pac_services.py", "zscaler_config_services.py", "zs-api-client-logo.png",
        ):
            self.assertIn(resource, windows)

    def test_security_workflow_runs_runtime_symbol_check(self):
        workflow = (Path(__file__).parent.parent / ".github/workflows/security.yml").read_text(
            encoding="utf-8"
        )
        self.assertIn("pip install -r requirements.txt ruff", workflow)
        self.assertIn("ruff check --select F", workflow)

    def test_spec_runtime_hook_targets_the_active_pyside6_runtime(self):
        root = Path(__file__).parent.parent
        hook = (root / "runtime_hook.py").read_text(encoding="utf-8")
        spec = (root / "zscaler_api_client.spec").read_text(encoding="utf-8")
        self.assertIn("PySide6", hook)
        self.assertNotIn("PyQt6", hook)
        self.assertIn("runtime_hooks=['runtime_hook.py']", spec)

    def test_translation_build_contract_is_enforced_on_every_platform(self):
        root = Path(__file__).parent.parent
        workflow = (root / ".github/workflows/build.yml").read_text(encoding="utf-8")
        gitignore = (root / ".gitignore").read_text(encoding="utf-8")
        sections = (
            workflow.split("  build-windows:", 1)[0],
            workflow.split("  build-windows:", 1)[1].split("  build-macos:", 1)[0],
            workflow.split("  build-macos:", 1)[1].split("  release:", 1)[0],
        )
        for section in sections:
            self.assertLess(section.index("python scripts/compile_translations.py"), section.index("pyinstaller"))
        self.assertIn("translations/*.qm", gitignore)
        self.assertEqual([], list((root / "translations").glob("*.qm")))

    def test_all_checked_in_specs_can_evaluate_platform_icon_selection(self):
        root = Path(__file__).parent.parent
        for spec_name in ("zscaler_api_client.spec", "ZS API Client.spec"):
            spec = (root / spec_name).read_text(encoding="utf-8")
            if "sys.platform" in spec:
                self.assertIn("import sys", spec)


if __name__ == "__main__":
    unittest.main()
