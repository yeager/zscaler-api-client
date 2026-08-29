#!/bin/sh
# Install the extracted Linux bundle and its desktop launcher for the current user.
set -eu

SOURCE_DIR=$(CDPATH= cd -- "$(dirname -- "$0")/../.." && pwd)
APP_DIR="${HOME}/.local/opt/ZS API Client"
BIN_DIR="${HOME}/.local/bin"
ICON_DIR="${HOME}/.local/share/icons/hicolor/256x256/apps"
DESKTOP_DIR="${HOME}/.local/share/applications"

mkdir -p "$APP_DIR" "$BIN_DIR" "$ICON_DIR" "$DESKTOP_DIR"
cp -R "$SOURCE_DIR"/. "$APP_DIR"/
cp "$APP_DIR/assets/icons/zs-api-client-256.png" "$ICON_DIR/zs-api-client.png"
ln -sfn "$APP_DIR/ZS API Client" "$BIN_DIR/zs-api-client"
cp "$APP_DIR/packaging/linux/zs-api-client.desktop" "$DESKTOP_DIR/zs-api-client.desktop"
update-desktop-database "$DESKTOP_DIR" 2>/dev/null || true
printf '%s\n' "Installed ZS API Client. Ensure $BIN_DIR is in PATH before launching from the desktop menu."
