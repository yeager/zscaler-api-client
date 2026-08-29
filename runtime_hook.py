"""PyInstaller runtime hook for the PySide6 Qt platform plugins.

It runs before the application imports PySide6 and supports one-folder
Windows/Linux distributions as well as the macOS ``.app`` layout.
"""

from __future__ import annotations

import os
from pathlib import Path
import sys


def _plugin_candidates(executable: Path) -> list[Path]:
    """Return possible PySide6 plugin directories for the active bundle."""
    bundle_dir = executable.parent
    candidates = [
        bundle_dir / "PySide6" / "Qt" / "plugins",
        bundle_dir / "PySide6" / "Qt6" / "plugins",
    ]
    if sys.platform == "darwin":
        contents = bundle_dir.parent
        for base in (contents / "Frameworks", contents / "Resources"):
            candidates.extend((
                base / "PySide6" / "Qt" / "plugins",
                base / "PySide6" / "Qt6" / "plugins",
            ))
    return candidates


def setup_qt_environment() -> None:
    """Expose the first valid bundled platform-plugin directory to Qt."""
    if not getattr(sys, "frozen", False):
        return
    for path in _plugin_candidates(Path(sys.executable).resolve()):
        platforms = path / "platforms"
        if platforms.is_dir():
            os.environ.setdefault("QT_PLUGIN_PATH", str(path))
            os.environ.setdefault("QT_QPA_PLATFORM_PLUGIN_PATH", str(platforms))
            break


setup_qt_environment()
