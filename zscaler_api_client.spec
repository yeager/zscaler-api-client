# -*- mode: python ; coding: utf-8 -*-
# PyInstaller spec file for Zscaler API Client

import sys
import os
from pathlib import Path
from PyInstaller.utils.hooks import collect_data_files, collect_submodules

VERSION = '1.4.2'

block_cipher = None

# Collect all PyQt6 data files and submodules
pyqt6_datas = collect_data_files('PyQt6', include_py_files=True)
pyqt6_submodules = collect_submodules('PyQt6')

# Path to translations
translations_path = Path('translations')
translation_files = [(str(f), 'translations') for f in translations_path.glob('*.ts')]

a = Analysis(
    ['zscaler_api_client.py'],
    pathex=[],
    binaries=[],
    datas=[
        *pyqt6_datas,
        *translation_files,
    ],
    hiddenimports=[
        *pyqt6_submodules,
        'PyQt6.QtCore',
        'PyQt6.QtGui',
        'PyQt6.QtWidgets',
        'PyQt6.sip',
    ],
    hookspath=[],
    hooksconfig={},
    runtime_hooks=['runtime_hook.py'],  # Important: sets env vars before PyQt6 loads
    excludes=[],
    win_no_prefer_redirects=False,
    win_private_assemblies=False,
    cipher=block_cipher,
    noarchive=False,
)

pyz = PYZ(a.pure, a.zipped_data, cipher=block_cipher)

exe = EXE(
    pyz,
    a.scripts,
    [],
    exclude_binaries=True,
    name='Zscaler API Client',
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
    name='Zscaler API Client',
)

app = BUNDLE(
    coll,
    name=f'Zscaler API Client {VERSION}.app',
    icon=None,  # Add icon path here: 'icon.icns'
    bundle_identifier='com.zscaler.apiclient',
    info_plist={
        'CFBundleName': 'Zscaler API Client',
        'CFBundleDisplayName': 'Zscaler API Client',
        'CFBundleShortVersionString': VERSION,
        'CFBundleVersion': VERSION,
        'CFBundleIdentifier': 'com.zscaler.apiclient',
        'NSHighResolutionCapable': True,
        'NSPrincipalClass': 'NSApplication',
        'LSMinimumSystemVersion': '10.15',
        'LSEnvironment': {
            'QT_MAC_DISABLE_FOREGROUND_APPLICATION_TRANSFORM': '1',
        },
    },
)
