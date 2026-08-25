#!/usr/bin/env python3
"""Compile Qt application catalogs at build time, never in source control."""

from __future__ import annotations

import shutil
import subprocess
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
CATALOGS = sorted((ROOT / "translations").glob("zscaler_api_client_*.ts"))


def find_lrelease() -> str:
    for name in ("pyside6-lrelease", "lrelease"):
        if executable := shutil.which(name):
            return executable
    try:
        import PySide6
    except ImportError as error:
        raise RuntimeError("PySide6 is required to compile translations") from error
    root = Path(PySide6.__file__).resolve().parent
    for candidate in (
        root / "Qt" / "libexec" / "lrelease",
        root / "Qt" / "bin" / "lrelease",
        Path("/usr/lib/qt6/bin/lrelease"),
        Path("/usr/lib/qt6/libexec/lrelease"),
    ):
        if candidate.exists():
            return str(candidate)
    raise RuntimeError("Could not find Qt lrelease; install PySide6 tools")


def main() -> int:
    if not CATALOGS:
        raise RuntimeError("No application translation catalogs found")
    subprocess.run([find_lrelease(), *map(str, CATALOGS)], check=True)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
