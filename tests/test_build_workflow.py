"""Regression checks for required modules in packaged application builds."""

from pathlib import Path
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


if __name__ == "__main__":
    unittest.main()
