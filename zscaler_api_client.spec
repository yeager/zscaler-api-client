# -*- mode: python ; coding: utf-8 -*-
# PyInstaller spec file for Zscaler API Client

import sys
import os
from pathlib import Path
from PyInstaller.utils.hooks import collect_all, collect_data_files, collect_submodules

VERSION = '2.8.11'

block_cipher = None

# Collect the Qt runtime used by the application, including its platform plugins.
pyside6_datas = collect_data_files('PySide6', include_py_files=True)
pyside6_submodules = collect_submodules('PySide6')
cryptography_datas, cryptography_binaries, cryptography_hiddenimports = collect_all('cryptography')

# Path to translations - include compiled .qm files
translations_path = Path('translations')
translation_files = [(str(f), 'translations') for f in translations_path.glob('*.qm')]
visual_files = [(str(f), 'assets/visuals') for f in Path('assets/visuals').glob('*.png')]
branding_files = [(str(f), 'assets/branding') for f in Path('assets/branding').glob('*.png')]

a = Analysis(
    ['zscaler_api_client.py'],
    pathex=[],
    binaries=cryptography_binaries,
    datas=[
        *pyside6_datas,
        *cryptography_datas,
        *translation_files,
        *visual_files,
        *branding_files,
        ('data', 'data'),
        ('feature_services.py', '.'),
        ('evidence_signing.py', '.'),
        ('schedule_services.py', '.'),
        ('pac_services.py', '.'),
        ('zscaler_config_services.py', '.'),
        ('CHANGELOG.md', '.'),
    ],
    hiddenimports=[
        *pyside6_submodules,
        *cryptography_hiddenimports,
        'feature_services',
        'evidence_signing',
        'schedule_services',
        'pac_services',
        'zscaler_config_services',
    ],
    hookspath=[],
    hooksconfig={},
    runtime_hooks=['runtime_hook.py'],
    excludes=[],
    win_no_prefer_redirects=False,
    win_private_assemblies=False,
    cipher=block_cipher,
    noarchive=False,
)

# macOS: Filter out problematic Qt permission plugins that crash on startup
# The darwin permission plugin tries to call CFBundleCopyBundleURL during
# static initialization, which crashes in PyInstaller bundles
if sys.platform == 'darwin':
    problematic_plugins = [
        'libqdarwinpermissionplugin',  # Crashes in _GLOBAL__sub_I_qdarwinpermissionplugin_location.mm
    ]
    a.binaries = [b for b in a.binaries if not any(p in b[0] for p in problematic_plugins)]
    a.datas = [d for d in a.datas if not any(p in d[0] for p in problematic_plugins)]

pyz = PYZ(a.pure, a.zipped_data, cipher=block_cipher)

import sys

# Platform-specific names for CI compatibility
if sys.platform == 'win32':
    exe_name = 'ZscalerAPIClient'
    collect_name = 'ZscalerAPIClient'
elif sys.platform == 'darwin':
    exe_name = 'Zscaler API Client'
    collect_name = 'Zscaler API Client'
else:  # Linux
    exe_name = 'zscaler-api-client'
    collect_name = 'zscaler-api-client'

exe = EXE(
    pyz,
    a.scripts,
    [],
    exclude_binaries=True,
    name=exe_name,
    debug=False,
    bootloader_ignore_signals=False,
    strip=False,
    upx=True,
    console=False,
    disable_windowed_traceback=False,
    argv_emulation=False,
    target_arch=None,
    codesign_identity=None,
    entitlements_file=None,
)

coll = COLLECT(
    exe,
    a.binaries,
    a.zipfiles,
    a.datas,
    strip=False,
    upx=True,
    upx_exclude=[],
    name=collect_name,
)

app = BUNDLE(
    coll,
    name='ZS API Client.app',
    icon='assets/icons/zs-api-client.icns' if sys.platform == 'darwin' else 'assets/icons/zs-api-client.ico',
    bundle_identifier='com.zscaler.apiclient',
    info_plist={
        'CFBundleName': 'ZS API Client',
        'CFBundleDisplayName': 'ZS API Client',
        'CFBundleShortVersionString': VERSION,
        'CFBundleVersion': VERSION,
        'CFBundleIdentifier': 'com.zscaler.apiclient',
        'CFBundlePackageType': 'APPL',
        'CFBundleSignature': '????',
        'CFBundleExecutable': 'ZS API Client',
        'NSHighResolutionCapable': True,
        'NSPrincipalClass': 'NSApplication',
        'LSMinimumSystemVersion': '10.15',
        'LSEnvironment': {
            # Disable Qt trying to detect bundle paths via CFBundle APIs
            'QT_MAC_DISABLE_FOREGROUND_APPLICATION_TRANSFORM': '1',
            # Disable early Qt logging that triggers the crash
            'QT_LOGGING_RULES': '*.debug=false;qt.*=false',
            # Force Qt to not use CF bundle detection
            'QT_QPA_PLATFORM_PLUGIN_PATH': '@executable_path/../Frameworks/PySide6/Qt/plugins/platforms',
        },
    },
)
