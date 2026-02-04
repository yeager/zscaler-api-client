# Changelog

All notable changes to this project will be documented in this file.

## [1.7.2] - 2026-02-04

### Changed
- **Switched to PySide6** from PyQt6 – fixes macOS bundle crash on startup

### Fixed
- **Splash screen translation** – "Loading..." now displays in selected language
- **Keyring missing** – Credential storage now works in bundled app

## [1.7.1] - 2026-02-04

### Changed
- **Renamed project** to "ZS API Client" (from "Zscaler API Client") to avoid trademark concerns
- Updated window titles, splash screen, about dialog, and all translations

## [1.7.0] - 2026-02-03

### Added
- **Qt base translations** - Standard dialog buttons (OK, Cancel, Yes, No) now translated
- **Secure credential storage** - API keys stored in macOS Keychain / Windows Credential Locker

### Changed
- **Two-column Settings layout** - Credentials tab now side-by-side (ZIA/ZPA/ZDX/ZCC | ZIdentity/ZTW/ZWA/EASM)
- **Auto-width dropdowns** - All combo boxes adjust to content width
- **Improved translations** - Welcome dialog, API descriptions, tips fully translated for all 7 languages

### Fixed
- Splash screen "Loading..." now translated
- Translation string concatenation issues

## [1.6.5] - 2026-02-03

### Fixed
- **SSL certificate error in update check** - Bundled apps now handle SSL properly

## [1.6.4] - 2026-02-03

### Fixed
- **App restart after language change now works** - Fixed restart logic for both script and bundled app modes
- Uses `os.execv` for clean process replacement
- macOS .app bundles now use `open` command for proper restart

## [1.6.3] - 2026-02-03

### Added
- **Farsi (فارسی) language support** - Now supports 8 languages

## [1.6.2] - 2026-02-03

### Fixed
- **Language switching now works!** Compiled .qm translation files were missing
- Added "Restart now?" dialog when changing language
- App can now restart itself after language change

## [1.6.1] - 2026-02-03

### Fixed
- **macOS crash fix**: Use `zip -y` to preserve symlinks in .app bundle
- Root cause: broken symlinks caused `CFBundleGetMainBundle()` to return NULL
- Reverted to PyQt6 (proper fix found)

## [1.6.0] - 2026-02-03

### Changed
- Switched from PyQt6 to PySide6 (workaround for macOS crash)
- Note: Superseded by v1.6.1 which fixes the root cause

## [1.5.1] - 2026-02-03

### Fixed
- Attempted fix: Pinned PyQt6 to 6.5.3 (did not resolve macOS crash)

## [1.5.0] - 2026-02-03

### Added
- **ZIdentity API** - 19 endpoints for Identity & Access Management
  - User Management (CRUD operations)
  - Group Management
  - SCIM 2.0 provisioning
  - Identity Providers (SAML, OIDC)
  - API Clients Management
  - Audit Logs

- **ZTW API** - 16 endpoints for Zero Trust Workloads
  - Branch Connectors
  - Connector Groups
  - Locations
  - Service Edges & Health
  - Traffic Forwarding Rules

- **ZWA API** - 18 endpoints for Workflow Automation
  - Workflow Management
  - Execution History
  - Triggers & Webhooks
  - Actions & Integrations
  - Templates

- **EASM API** - 24 endpoints for External Attack Surface Management
  - Asset Discovery
  - Vulnerability Management
  - Risk Assessment
  - Certificate Monitoring
  - Scan Management
  - Reports

### Changed
- Updated translations for all 6 languages (+27 new strings each)
- Updated documentation with all 8 APIs

## [1.4.4] - 2026-02-03

### Fixed
- Attempted macOS crash fix by excluding Qt darwin permission plugin

## [1.4.3] - 2026-02-03

### Fixed
- Build improvements for macOS

## [1.4.2] - 2026-02-03

### Added
- Welcome dialog for first-time users
- Splash screen with loading progress

## [1.4.1] - 2026-02-03

### Fixed
- Minor UI improvements

## [1.4.0] - 2026-02-03

### Added
- **ZDX API** - Digital Experience monitoring
- **ZCC API** - Client Connector management
- Light/Dark/System theme support
- Request history dialog
- Copy as cURL functionality
- Copy response to clipboard
- Keyboard shortcuts

### Changed
- Improved settings dialog with tabs
- Better credential management

## [1.3.0] - 2026-02-03

### Added
- About dialog with version info
- Settings dialog
- Multi-language support (7 languages)

## [1.0.0] - 2026-02-03

### Added
- Initial release
- ZIA and ZPA API support
- JSON syntax highlighting
- Batch operations with CSV import
- Secure credential storage
