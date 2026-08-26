# SPDX-License-Identifier: GPL-3.0-or-later
"""User-scoped background scheduler integration for local report generation."""

from __future__ import annotations

import os
import plistlib
import re
import subprocess
import sys
from collections.abc import Callable, Sequence
from pathlib import Path

SCHEDULE_ID = re.compile(r"^[A-Za-z0-9_-]{1,64}$")


def _validated(schedule: dict, invocation: Sequence[str]) -> tuple[str, int, list[str]]:
    schedule_id = str(schedule.get("id", "")).strip()
    if not SCHEDULE_ID.fullmatch(schedule_id):
        raise ValueError("invalid schedule id")
    cadence = max(3600, int(schedule.get("cadence_seconds", 86400)))
    command = [str(part) for part in invocation]
    if not command or not all(command):
        raise ValueError("invalid application invocation")
    return schedule_id, cadence, command + ["--run-scheduled-report", schedule_id]


def _run(command: list[str], runner: Callable = subprocess.run) -> None:
    runner(command, check=True, capture_output=True, text=True, timeout=15)


def register_background_schedule(
    schedule: dict,
    invocation: Sequence[str],
    *,
    platform_name: str | None = None,
    home: Path | None = None,
    runner: Callable = subprocess.run,
) -> str:
    """Register a non-privileged OS job and return its scheduler backend."""
    schedule_id, cadence, command = _validated(schedule, invocation)
    platform_name = platform_name or sys.platform
    home = Path.home() if home is None else Path(home)

    if platform_name.startswith("win"):
        task_name = f"ZS API Client\\Report {schedule_id}"
        task_command = subprocess.list2cmdline(command)
        if cadence <= 3600:
            trigger = ["/SC", "HOURLY", "/MO", "1"]
        elif cadence <= 86400:
            trigger = ["/SC", "DAILY", "/ST", "09:00"]
        else:
            trigger = ["/SC", "WEEKLY", "/D", "MON", "/ST", "09:00"]
        _run(["schtasks", "/Create", "/F", "/TN", task_name, "/TR", task_command, *trigger], runner)
        return "Windows Task Scheduler"

    if platform_name == "darwin":
        directory = home / "Library" / "LaunchAgents"
        directory.mkdir(parents=True, exist_ok=True)
        path = directory / f"com.zscaler.zs-api-client.report.{schedule_id}.plist"
        label = f"com.zscaler.zs-api-client.report.{schedule_id}"
        payload = {
            "Label": label,
            "ProgramArguments": command,
            "StartInterval": cadence,
            "RunAtLoad": False,
            "ProcessType": "Background",
        }
        path.write_bytes(plistlib.dumps(payload, sort_keys=True))
        uid = str(os.getuid()) if hasattr(os, "getuid") else ""
        domain = f"gui/{uid}" if uid else "gui/$(id -u)"
        try:
            _run(["launchctl", "bootout", f"{domain}/{label}"], runner)
        except (OSError, subprocess.SubprocessError):
            # A first registration has nothing loaded yet.
            pass
        try:
            _run(["launchctl", "bootstrap", domain, str(path)], runner)
        except (OSError, subprocess.SubprocessError):
            path.unlink(missing_ok=True)
            raise
        return "macOS LaunchAgent"

    if platform_name.startswith("linux"):
        directory = home / ".config" / "systemd" / "user"
        directory.mkdir(parents=True, exist_ok=True)
        service = directory / f"zs-api-client-report-{schedule_id}.service"
        timer = directory / f"zs-api-client-report-{schedule_id}.timer"
        escaped = " ".join(_systemd_quote(part) for part in command)
        service.write_text(
            "[Unit]\nDescription=ZS API Client scheduled report\n\n"
            f"[Service]\nType=oneshot\nExecStart={escaped}\nNoNewPrivileges=yes\nPrivateTmp=yes\n",
            encoding="utf-8",
        )
        timer.write_text(
            "[Unit]\nDescription=Run a ZS API Client report on schedule\n\n"
            f"[Timer]\nOnBootSec=5min\nOnUnitActiveSec={cadence}s\nPersistent=true\n\n"
            "[Install]\nWantedBy=timers.target\n",
            encoding="utf-8",
        )
        try:
            _run(["systemctl", "--user", "daemon-reload"], runner)
            _run(["systemctl", "--user", "enable", "--now", timer.name], runner)
        except (OSError, subprocess.SubprocessError):
            service.unlink(missing_ok=True); timer.unlink(missing_ok=True)
            try:
                _run(["systemctl", "--user", "daemon-reload"], runner)
            except (OSError, subprocess.SubprocessError) as cleanup_error:
                _ = cleanup_error
            raise
        return "systemd user timer"

    raise RuntimeError("unsupported operating system")


def unregister_background_schedule(
    schedule_id: str,
    *,
    platform_name: str | None = None,
    home: Path | None = None,
    runner: Callable = subprocess.run,
) -> str:
    """Remove a previously registered user-scoped OS job."""
    if not SCHEDULE_ID.fullmatch(str(schedule_id)):
        raise ValueError("invalid schedule id")
    platform_name = platform_name or sys.platform
    home = Path.home() if home is None else Path(home)

    if platform_name.startswith("win"):
        _run(["schtasks", "/Delete", "/F", "/TN", f"ZS API Client\\Report {schedule_id}"], runner)
        return "Windows Task Scheduler"
    if platform_name == "darwin":
        path = home / "Library" / "LaunchAgents" / f"com.zscaler.zs-api-client.report.{schedule_id}.plist"
        label = f"com.zscaler.zs-api-client.report.{schedule_id}"
        uid = str(os.getuid()) if hasattr(os, "getuid") else ""
        domain = f"gui/{uid}" if uid else "gui/$(id -u)"
        try:
            _run(["launchctl", "bootout", f"{domain}/{label}"], runner)
        finally:
            path.unlink(missing_ok=True)
        return "macOS LaunchAgent"
    if platform_name.startswith("linux"):
        directory = home / ".config" / "systemd" / "user"
        service = directory / f"zs-api-client-report-{schedule_id}.service"
        timer = directory / f"zs-api-client-report-{schedule_id}.timer"
        try:
            _run(["systemctl", "--user", "disable", "--now", timer.name], runner)
        finally:
            service.unlink(missing_ok=True)
            timer.unlink(missing_ok=True)
            _run(["systemctl", "--user", "daemon-reload"], runner)
        return "systemd user timer"
    raise RuntimeError("unsupported operating system")


def _systemd_quote(value: str) -> str:
    """Quote one systemd ExecStart argument without invoking a shell."""
    return '"' + value.replace("\\", "\\\\").replace('"', '\\"').replace("%", "%%") + '"'
