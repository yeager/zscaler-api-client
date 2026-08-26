import plistlib
import subprocess
import unittest
from pathlib import Path
from tempfile import TemporaryDirectory

from schedule_services import (
    register_background_schedule,
    unregister_background_schedule,
)


class ScheduleServicesTests(unittest.TestCase):
    def setUp(self):
        self.schedule = {"id": "report_123", "cadence_seconds": 3600}
        self.invocation = ["/opt/ZS API Client", "/opt/client.py"]

    def test_linux_systemd_timer_is_user_scoped_and_shell_free(self):
        commands = []
        runner = lambda command, **kwargs: commands.append(command)
        with TemporaryDirectory() as directory:
            home = Path(directory)
            backend = register_background_schedule(self.schedule, self.invocation, platform_name="linux", home=home, runner=runner)
            service = home / ".config/systemd/user/zs-api-client-report-report_123.service"
            timer = home / ".config/systemd/user/zs-api-client-report-report_123.timer"
            self.assertEqual("systemd user timer", backend)
            self.assertIn('"/opt/ZS API Client"', service.read_text(encoding="utf-8"))
            self.assertIn("--run-scheduled-report", service.read_text(encoding="utf-8"))
            self.assertIn("OnUnitActiveSec=3600s", timer.read_text(encoding="utf-8"))
            self.assertEqual(["systemctl", "--user", "daemon-reload"], commands[0])
            unregister_background_schedule("report_123", platform_name="linux", home=home, runner=runner)
            self.assertFalse(service.exists()); self.assertFalse(timer.exists())

    def test_macos_launch_agent_uses_program_arguments(self):
        commands = []
        runner = lambda command, **kwargs: commands.append(command)
        with TemporaryDirectory() as directory:
            home = Path(directory)
            backend = register_background_schedule(self.schedule, self.invocation, platform_name="darwin", home=home, runner=runner)
            path = home / "Library/LaunchAgents/com.zscaler.zs-api-client.report.report_123.plist"
            payload = plistlib.loads(path.read_bytes())
            self.assertEqual("macOS LaunchAgent", backend)
            self.assertEqual(self.invocation + ["--run-scheduled-report", "report_123"], payload["ProgramArguments"])
            self.assertEqual(3600, payload["StartInterval"])
            self.assertTrue(any(command[:2] == ["launchctl", "bootstrap"] for command in commands))

    def test_windows_task_uses_argument_list_and_validated_id(self):
        commands = []
        runner = lambda command, **kwargs: commands.append(command)
        backend = register_background_schedule(self.schedule, self.invocation, platform_name="win32", runner=runner)
        self.assertEqual("Windows Task Scheduler", backend)
        self.assertEqual("schtasks", commands[0][0])
        self.assertIn("ZS API Client\\Report report_123", commands[0])
        self.assertIn("--run-scheduled-report", commands[0][commands[0].index("/TR") + 1])
        with self.assertRaises(ValueError):
            register_background_schedule({"id": "../../bad"}, self.invocation, platform_name="win32", runner=runner)

    def test_failed_linux_registration_removes_partial_units(self):
        def failing_runner(command, **kwargs):
            if "enable" in command:
                raise subprocess.CalledProcessError(1, command)
        with TemporaryDirectory() as directory:
            home = Path(directory)
            with self.assertRaises(subprocess.CalledProcessError):
                register_background_schedule(self.schedule, self.invocation, platform_name="linux", home=home, runner=failing_runner)
            unit_dir = home / ".config/systemd/user"
            self.assertEqual([], list(unit_dir.glob("zs-api-client-report-*")))


if __name__ == "__main__":
    unittest.main()
