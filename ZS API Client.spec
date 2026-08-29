# -*- mode: python ; coding: utf-8 -*-

from PyInstaller.utils.hooks import collect_all
import sys


cryptography_datas, cryptography_binaries, cryptography_hiddenimports = collect_all('cryptography')

a = Analysis(
    ['zscaler_api_client.py'],
    pathex=[],
    binaries=cryptography_binaries,
    datas=[
        *cryptography_datas,
        ('translations', 'translations'), ('data', 'data'), ('assets', 'assets'), ('CHANGELOG.md', '.'),
        ('feature_services.py', '.'), ('evidence_signing.py', '.'), ('schedule_services.py', '.'),
        ('pac_services.py', '.'), ('zscaler_config_services.py', '.'),
    ],
    hiddenimports=[
        *cryptography_hiddenimports,
        'keyring.backends.macOS', 'feature_services', 'evidence_signing', 'schedule_services',
        'pac_services', 'zscaler_config_services',
    ],
    hookspath=[],
    hooksconfig={},
    runtime_hooks=[],
    excludes=[],
    noarchive=False,
    optimize=0,
)
pyz = PYZ(a.pure)

exe = EXE(
    pyz,
    a.scripts,
    [],
    exclude_binaries=True,
    name='ZS API Client',
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
    a.datas,
    strip=False,
    upx=True,
    upx_exclude=[],
    name='ZS API Client',
)
app = BUNDLE(
    coll,
    name='ZS API Client.app',
    icon='assets/icons/zs-api-client.icns' if sys.platform == 'darwin' else 'assets/icons/zs-api-client.ico',
    bundle_identifier=None,
)
