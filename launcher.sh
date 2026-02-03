#!/bin/bash
# Launcher script for Zscaler API Client
# Sets Qt environment variables before Python/PyQt6 loads

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
BUNDLE_DIR="$(dirname "$SCRIPT_DIR")"
FRAMEWORKS_DIR="$BUNDLE_DIR/Frameworks"
RESOURCES_DIR="$BUNDLE_DIR/Resources"

# Set Qt plugin paths BEFORE loading PyQt6
export QT_PLUGIN_PATH="$FRAMEWORKS_DIR/PyQt6/Qt6/plugins"
export QT_QPA_PLATFORM_PLUGIN_PATH="$FRAMEWORKS_DIR/PyQt6/Qt6/plugins/platforms"

# Alternative locations (py2app)
if [ ! -d "$QT_PLUGIN_PATH" ]; then
    export QT_PLUGIN_PATH="$RESOURCES_DIR/PyQt6/Qt6/plugins"
    export QT_QPA_PLATFORM_PLUGIN_PATH="$RESOURCES_DIR/PyQt6/Qt6/plugins/platforms"
fi

# Disable some problematic Qt features in bundled apps
export QT_MAC_DISABLE_FOREGROUND_APPLICATION_TRANSFORM=1

# Run the actual Python executable
exec "$SCRIPT_DIR/Zscaler API Client.bin" "$@"
