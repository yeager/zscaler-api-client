# runtime_hook.py - PyInstaller runtime hook
# This runs BEFORE the main script and BEFORE PyQt6 is imported
# Fixes Qt plugin path issues in bundled macOS apps

import os
import sys

def setup_qt_environment():
    """Set up Qt environment variables for bundled app."""
    if not getattr(sys, 'frozen', False):
        return  # Not running as bundled app
    
    # Get the bundle directory
    if sys.platform == 'darwin':
        # macOS: executable is in .app/Contents/MacOS/
        bundle_dir = os.path.dirname(sys.executable)
        frameworks_dir = os.path.join(bundle_dir, '..', 'Frameworks')
        resources_dir = os.path.join(bundle_dir, '..', 'Resources')
        
        # Possible Qt plugin locations
        plugin_paths = [
            os.path.join(frameworks_dir, 'PyQt6', 'Qt6', 'plugins'),
            os.path.join(resources_dir, 'PyQt6', 'Qt6', 'plugins'),
            os.path.join(frameworks_dir, 'PyQt6', 'Qt', 'plugins'),
            os.path.join(resources_dir, 'PyQt6', 'Qt', 'plugins'),
            os.path.join(bundle_dir, 'PyQt6', 'Qt6', 'plugins'),
            os.path.join(bundle_dir, 'PyQt6', 'Qt', 'plugins'),
        ]
        
        # Find valid plugin path
        for path in plugin_paths:
            if os.path.isdir(path):
                os.environ['QT_PLUGIN_PATH'] = path
                platforms_path = os.path.join(path, 'platforms')
                if os.path.isdir(platforms_path):
                    os.environ['QT_QPA_PLATFORM_PLUGIN_PATH'] = platforms_path
                break
        
        # Disable problematic features
        os.environ['QT_MAC_DISABLE_FOREGROUND_APPLICATION_TRANSFORM'] = '1'
        
    elif sys.platform == 'win32':
        # Windows
        bundle_dir = os.path.dirname(sys.executable)
        plugin_paths = [
            os.path.join(bundle_dir, 'PyQt6', 'Qt6', 'plugins'),
            os.path.join(bundle_dir, 'PyQt6', 'Qt', 'plugins'),
        ]
        
        for path in plugin_paths:
            if os.path.isdir(path):
                os.environ['QT_PLUGIN_PATH'] = path
                break

# Run setup immediately
setup_qt_environment()
