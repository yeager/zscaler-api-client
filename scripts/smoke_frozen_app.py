#!/usr/bin/env python3
"""Start a frozen Qt application briefly and fail on startup/import errors."""

from __future__ import annotations

import argparse
import os
from pathlib import Path
import subprocess
import sys
import time


ERROR_MARKERS = (
    "traceback",
    "modulenotfounderror",
    "importerror",
    "failed to execute script",
)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--timeout", type=float, default=12.0)
    parser.add_argument("command", nargs=argparse.REMAINDER)
    args = parser.parse_args()
    command = args.command[1:] if args.command[:1] == ["--"] else args.command
    if args.timeout <= 0 or not command:
        parser.error("provide a positive --timeout and an application command after --")
    executable = Path(command[0])
    if not executable.is_file():
        raise FileNotFoundError(f"Frozen application is missing: {executable}")
    environment = os.environ.copy()
    environment.setdefault("QT_QPA_PLATFORM", "offscreen")
    process = subprocess.Popen(command, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, env=environment)
    deadline = time.monotonic() + args.timeout
    while process.poll() is None and time.monotonic() < deadline:
        time.sleep(0.2)
    running = process.poll() is None
    if running:
        process.terminate()
    try:
        output, _ = process.communicate(timeout=5)
    except subprocess.TimeoutExpired:
        process.kill()
        output, _ = process.communicate()
    print(output, end="")
    lowered = output.casefold()
    if any(marker in lowered for marker in ERROR_MARKERS):
        return 1
    # A healthy GUI application remains active until this test stops it. A
    # clean early exit is not a successful desktop-app startup either.
    return 0 if running else (process.returncode or 1)


if __name__ == "__main__":
    sys.exit(main())
