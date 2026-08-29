#!/usr/bin/env python3
"""Derive platform launcher icons from the canonical ZS API Client logo."""

from __future__ import annotations

import json
from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "assets" / "branding" / "zs-api-client-logo.png"
OUTPUT = ROOT / "assets" / "icons"
IOS_OUTPUT = ROOT / "ios" / "ZSAPIClient" / "Sources" / "Assets.xcassets" / "AppIcon.appiconset"
SIZES = (16, 20, 24, 29, 32, 40, 48, 57, 58, 60, 64, 72, 76, 80, 87, 96, 114, 120, 128, 144, 152, 167, 180, 192, 256, 512, 1024)
IOS_ICON_SLOTS = (
    ("iphone", "20x20", "2x", 40), ("iphone", "20x20", "3x", 60),
    ("iphone", "29x29", "2x", 58), ("iphone", "29x29", "3x", 87),
    ("iphone", "40x40", "2x", 80), ("iphone", "40x40", "3x", 120),
    ("iphone", "60x60", "2x", 120), ("iphone", "60x60", "3x", 180),
    ("ipad", "20x20", "1x", 20), ("ipad", "20x20", "2x", 40),
    ("ipad", "29x29", "1x", 29), ("ipad", "29x29", "2x", 58),
    ("ipad", "40x40", "1x", 40), ("ipad", "40x40", "2x", 80),
    ("ipad", "76x76", "1x", 76), ("ipad", "76x76", "2x", 152),
    ("ipad", "83.5x83.5", "2x", 167),
    ("ios-marketing", "1024x1024", "1x", 1024),
)


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
    IOS_OUTPUT.mkdir(parents=True, exist_ok=True)
    contents = {"images": [], "info": {"author": "xcode", "version": 1}}
    for idiom, point_size, scale, pixels in IOS_ICON_SLOTS:
        filename = f"zs-api-client-{idiom}-{pixels}.png"
        image.resize((pixels, pixels), Image.Resampling.LANCZOS).save(IOS_OUTPUT / filename)
        contents["images"].append({
            "filename": filename, "idiom": idiom, "scale": scale, "size": point_size,
        })
    (IOS_OUTPUT / "Contents.json").write_text(json.dumps(contents, indent=2) + "\n", encoding="utf-8")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
