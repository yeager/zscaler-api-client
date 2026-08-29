#!/usr/bin/env python3
"""Derive platform launcher icons from the canonical ZS API Client logo."""

from __future__ import annotations

from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "assets" / "branding" / "zs-api-client-logo.png"
OUTPUT = ROOT / "assets" / "icons"
SIZES = (16, 20, 24, 29, 32, 40, 48, 57, 58, 60, 64, 72, 76, 80, 87, 96, 114, 120, 128, 144, 152, 167, 180, 192, 256, 512, 1024)


def main() -> int:
    if not SOURCE.exists():
        raise FileNotFoundError(f"Canonical logo is missing: {SOURCE}")
    OUTPUT.mkdir(parents=True, exist_ok=True)
    image = Image.open(SOURCE).convert("RGBA")
    icon_sizes = [(size, size) for size in SIZES]
    image.save(OUTPUT / "zs-api-client.ico", format="ICO", sizes=icon_sizes)
    image.save(OUTPUT / "zs-api-client.icns", format="ICNS", sizes=icon_sizes)
    for size in (16, 32, 48, 64, 128, 256, 512):
        image.resize((size, size), Image.Resampling.LANCZOS).save(OUTPUT / f"zs-api-client-{size}.png")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
