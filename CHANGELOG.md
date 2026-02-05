# Changelog

All notable changes to this project will be documented in this file.

## [1.9.2] - 2026-02-05

### Added
- **ZCC App Profiles endpoints** – List, get profiles and assignments
- **ZCC Enrolled Devices endpoints** – List, details, bulk remove
- **ZCC API Keys endpoints** – List, create, revoke API keys
- **API Error Codes dialog** (Help → API Error Codes...)
  - Reference for all Zscaler API error codes
  - Organized by API type (ZIA, ZPA, ZDX, ZCC, ZIdentity)
  - Troubleshooting tips included

## [1.9.1] - 2026-02-05

### Fixed
- **ZDX OAuth endpoint** – Now uses correct `/v1/oauth/token` with JSON body
  - Uses `key_id`, `key_secret`, and `timestamp` parameters
  - Was incorrectly using `/oauth2/token` with form-urlencoded

## [1.9.0] - 2026-02-05

### Fixed
- **Keychain multiple prompts** – Credentials now cached after first read
  - Only one Keychain prompt per app launch (was prompting multiple times)
  
### Changed
- **Compact Settings layout** – Each API section now uses 2-3 rows instead of 5+
  - Horizontal layout with inline placeholders
  - Much smaller dialog footprint

## [1.8.9] - 2026-02-05

### Fixed
- **JSON Highlighter crash** – Fixed `import re` missing at module level
  - Was causing SIGABRT in syntax highlighter
  - Affected response display with large JSON payloads

## [1.8.8] - 2026-02-05

### Fixed
- **ZIdentity OAuth endpoint** – Now uses correct `/oauth2/v1/token` endpoint
  - Tested and verified working with real credentials
  - Token provides access to ZIA, ZPA, ZDX, ZWA and other services

## [1.8.7] - 2026-02-05

### Added
- **API Enable/Disable** – Each API now has an "Enabled" checkbox in Settings
  - Only enabled APIs appear in the API dropdown
  - ZIA enabled by default, others disabled
  - Streamlines UI for users who only need specific APIs

### Fixed
- **Auth button credentials** – Now correctly reads credentials from keychain
  - ZIA: api_key and password from secure storage
  - OAuth APIs: client_secret from secure storage
  - ZDX: Correctly uses key_id/key_secret fields
  - ZIdentity: Uses vanity domain for OAuth URL

## [1.8.6] - 2026-02-05

### Added
- **Auth button** – Quick "Auth" button next to API selector
  - One-click authentication for any API
  - Auto-fills credentials from Settings
  - Supports both session cookie (ZIA) and OAuth (ZPA, ZDX, etc.)

### Fixed
- Output panel now expands properly (removed max height limit)
- Better layout for output text area

## [1.8.5] - 2026-02-05

### Added
- **Output panel** – New panel at bottom-left showing:
  - Request activity log
  - Authentication status
  - Success/error messages with timestamps
  - Audit trail for all API calls

## [1.8.4] - 2026-02-05

### Added
- **cURL button** – Quick "cURL" button next to Send for copying requests

## [1.8.3] - 2026-02-05

### Fixed
- **ZIdentity authentication** – Added token support for ZIdentity, ZDX, ZCC, ZTW, ZWA, EASM APIs
- **Empty response handling** – Fixed "Expecting value" JSON parse error for empty API responses
- **HTTP error details** – Now shows full error response body for debugging

### Added
- Authorization header support for all 8 API types
- Per-API token storage and management
- Better error messages with HTTP status codes

## [1.8.2] - 2026-02-05

### Fixed
- **SSL certificate error** – Fixed "basic constraints of CA not marked critical" error in bundled apps
- **ZIdentity API URLs** – Fixed missing base URL for ZIdentity, ZTW, ZWA, EASM endpoints

### Changed
- Improved SSL fallback strategy for update checks in bundled applications
- All 7 new API types now build correct full URLs

## [1.8.1] - 2026-02-05

### Added
- **About Qt** – Added "About Qt..." to Help menu
- **Auto-update prompt** – First-run dialog asking about automatic update checks

### Security
- **Secure update check** – Verifies releases come from trusted GitHub repo (yeager/zscaler-api-client)
- **Author verification** – Only accepts releases from verified author
- **SSL enforcement** – Requires valid SSL certificate for update checks
- **Draft/prerelease handling** – Skips drafts, warns about pre-releases

## [1.8.0] - 2026-02-05

### Added
- **What's New dialog** – Shows changelog after app update with option to disable
- **Version tracking** – App remembers last known version to detect updates

### Changed
- Improved update flow with automatic changelog display

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
