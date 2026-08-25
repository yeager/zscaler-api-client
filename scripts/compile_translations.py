#!/usr/bin/env python3
"""Compile Qt application catalogs at build time, never in source control."""

from __future__ import annotations

import argparse
import shutil
import subprocess
import sys
import xml.etree.ElementTree as ET
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
CATALOGS = sorted((ROOT / "translations").glob("zscaler_api_client_*.ts"))
DEFAULT_MINIMUM_COVERAGE = 0.20


def translation_coverage(catalog: Path) -> float:
    """Measure real translations, excluding English source-text fallbacks."""
    translated = total = 0
    for message in ET.parse(catalog).findall(".//message"):
        if message.get("type") in {"obsolete", "vanished"}:
            continue
        source = "".join(message.find("source").itertext()).strip() if message.find("source") is not None else ""
        translation = message.find("translation")
        value = "".join(translation.itertext()).strip() if translation is not None else ""
        if not source:
            continue
        total += 1
        if value and value != source and translation.get("type") != "unfinished":
            translated += 1
    return translated / total if total else 0.0


def eligible_catalogs(catalogs: list[Path], minimum_coverage: float) -> list[Path]:
    """Return catalogs whose genuine translation coverage is strictly above the threshold."""
    return [catalog for catalog in catalogs if translation_coverage(catalog) > minimum_coverage]


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
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--minimum-coverage", type=float, default=DEFAULT_MINIMUM_COVERAGE)
    args = parser.parse_args()
    if not 0 <= args.minimum_coverage < 1:
        parser.error("--minimum-coverage must be between 0 (inclusive) and 1 (exclusive)")
    if not CATALOGS:
        raise RuntimeError("No application translation catalogs found")
    catalogs = eligible_catalogs(CATALOGS, args.minimum_coverage)
    for catalog in CATALOGS:
        print(f"{catalog.name}: {translation_coverage(catalog):.0%} translated")
    if not catalogs:
        print("No catalogs exceed the translation threshold; using source-language fallback.")
        return 0
    subprocess.run([find_lrelease(), *map(str, catalogs)], check=True)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
