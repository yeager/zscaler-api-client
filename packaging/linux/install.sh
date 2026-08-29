#!/bin/sh
# Install the extracted Linux bundle and its desktop launcher for the current user.
set -eu

SOURCE_DIR=$(CDPATH= cd -- "$(dirname -- "$0")/../.." && pwd)
APP_DIR="${HOME}/.local/opt/ZS API Client"
BIN_DIR="${HOME}/.local/bin"
ICON_ROOT="${HOME}/.local/share/icons/hicolor"
DESKTOP_DIR="${HOME}/.local/share/applications"

mkdir -p "$APP_DIR" "$BIN_DIR" "$DESKTOP_DIR"
cp -R "$SOURCE_DIR"/. "$APP_DIR"/
for icon_size in 16 32 48 64 128 256 512; do
    icon_dir="$ICON_ROOT/${icon_size}x${icon_size}/apps"
    mkdir -p "$icon_dir"
    cp "$APP_DIR/assets/icons/zs-api-client-${icon_size}.png" "$icon_dir/zs-api-client.png"
done
ln -sfn "$APP_DIR/ZS API Client" "$BIN_DIR/zs-api-client"
cp "$APP_DIR/packaging/linux/zs-api-client.desktop" "$DESKTOP_DIR/zs-api-client.desktop"
gtk-update-icon-cache -f "$ICON_ROOT" 2>/dev/null || true
update-desktop-database "$DESKTOP_DIR" 2>/dev/null || true
printf '%s\n' "Installed ZS API Client. Ensure $BIN_DIR is in PATH before launching from the desktop menu."
