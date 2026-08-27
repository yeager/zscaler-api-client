# Changelog

All notable changes to this project will be documented in this file.

## Unreleased

## [2.8.6] - 2026-08-27

### Added
- Local Zscaler Configuration Center index covering 935 Cloud Enforcement Node endpoint records and 171 SVPN IP records from the official zscaler.net catalog.
- PAC line-help balloons and a data-center explorer that explain PAC expressions and correlate explicit Zscaler hostnames or IPs to indexed locations.

## [2.8.5] - 2026-08-27

### Added
- Guided and advanced PAC Workspace for authoring, static verification, URL decision preview, ZIA hosted PAC workflows, ZCC/Mobile Portal forwarding-profile updates, and ZIA-to-ZCC PAC mappings.
- PAC reference for supported variables and functions, plus explainable performance and simplification guidance.

### Fixed
- Explicitly package the PAC service module in Linux, Windows, and macOS PyInstaller builds.

## [2.8.4] - 2026-08-27

### Fixed
- Bundle the complete `cryptography` package and native dependencies for frozen applications so the resource-backed evidence-signing module can load on macOS.

## [2.8.3] - 2026-08-27

### Fixed
- Add a resource-backed fallback for project-local service modules in frozen applications, addressing a macOS PyInstaller packaging regression that persisted in 2.8.2.

## [2.8.2] - 2026-08-27

### Fixed
- Explicitly bundle `feature_services` and the other local service modules in every PyInstaller package, fixing the macOS startup failure caused by a missing `feature_services` module.

## [2.8.1] - 2026-08-27

### Added
- Separate native macOS application packages for Intel Macs and Apple Silicon Macs.
- Windows x64 per-user installer built with Inno Setup.

### Changed
- System-default language is resolved at every application launch, including bundled macOS apps; an explicit language selection remains an override.
- Release assets, installation instructions, SPDX SBOMs, and GitHub attestations now cover both macOS architectures and the Windows installer.

## [2.8.0] - 2026-08-26

### Added
- User-approved background report schedules for Windows Task Scheduler, macOS LaunchAgents, and Linux systemd user timers.
- Headless, network-free report execution with stable schedule IDs and automatic cleanup when schedules are paused or removed.
- Guided GraphQL variable extraction, required/default metadata, typed JSON validation, multi-operation validation, and secure preset persistence.
- JSON, raw text, URL-encoded form, and multipart file request modes plus byte-exact binary response downloads.
- Documentation-derived request contracts for 1,000+ REST operations, including guided parameters, body templates, response codes, and AI-assisted contract loading.
- Explicit bounded pagination for documented page/pageSize, offset/limit, and cursor/next-page contracts, preserving every page plus a merged visualizable collection.
- Dataflow API chains with typed references to earlier JSON responses, URL-safe substitution, visual execution summaries, and masked JSON/CSV evidence export.
- Cooperative cancellation for requests, multi-page reads, and API chains; the active HTTP call finishes safely while no new page or step begins.
- Versioned, masked ZS API response exchanges that preserve request metadata, status, headers, complete REST/GraphQL bodies, and pagination details for safe local reopening without network execution.
- Unified response export to JSON, YAML, XML, CSV, XLSX, NDJSON, Markdown, HTML, multi-page PDF, HAR, PNG, and SVG without the response viewer's row or column limits.
- Configurable, cancellable retries for idempotent GET, HEAD, and OPTIONS requests after transient network failures or HTTP 408/429/502/503/504, including bounded `Retry-After` handling and visible retry evidence.
- Local response-baseline comparison for configuration and inventory drift, with identity-aware list matching, volatile-field exclusions, impact visualization, scoped fingerprints, and masked JSON/CSV/Markdown evidence export.
- Tenant-isolated environment profiles with per-profile non-secret API configuration, namespaced system-keychain credentials, active-environment context, and environment-aware request history.
- Tenant-scoped Operations Center analytics, audit evidence, integrations, exports, and scheduled/headless reports, with an explicit Advanced-mode cross-tenant overview.
- Digital Policy Twin with rule-order visualization, conflicts, shadowing, decision traces, blast-radius estimates, and tenant-scoped time-travel snapshots.
- Unified SOC investigation graph using complete REST/GraphQL response trees, entity correlation, potential attack paths, evidence timelines, and JSON/GraphML/CSV/PNG export.
- Continuous assurance with transparent local controls, NIST CSF 2.0/CISA Zero Trust navigation, deterministic CISO narratives, baselines, trends, and offline-verifiable Ed25519 evidence packages.
- ZDX/OneAPI experience journey maps, accelerated telemetry, explicit missing stages, transparent issue thresholds, and JSON/CSV/PNG export.
- Explainable Detection Lab with bounded declarative rules, templates, median/MAD anomaly baselines, and masked evidence export.
- Change-safety scoring, explicit review gates, integrity-verifiable rollback packages, tenant-scoped response playbooks, and a deterministic read-first API planner.
- Secure SIEM/SOAR handoffs in JSON Lines, CEF, and LEEF, plus non-executable Terraform review archives and read-only MCP manifests.
- Exposure and excessive-access analysis over complete response trees, guarded deception recommendations, and tenant-isolated masked investigation notebooks.
- Responsive PyQtGraph/NumPy telemetry rendering with downsampling and a Qt-native fallback.
- Reviewed Swedish localization for every new workspace and synchronized complete review catalogs for all 20 supported languages.

### Security
- Background reports reuse redacted local history, run without administrator privileges, and never receive API credentials.
- ZIA session cookies and Client Connector JWTs are masked, kept in memory, and removed from the request editor immediately after authentication.
- Multipart history stores only the selected filename and masked metadata, while binary exports require explicit confirmation and obey a configurable transfer limit.
- Required documented query and header values are validated before execution; optional defaults are shown but never sent implicitly.
- Double-clicking a documented write operation now prepares it for review instead of executing it; sending requires a separate explicit action.
- Pagination never follows undocumented parameters, enforces page and aggregate transfer limits, and marks unproven or interrupted collections as partial.
- Chain templates reject forward references, executable expressions, credential headers, cross-host destinations, and more than 20 steps.
- Imported response exchanges are size-limited, reject symbolic links and unknown schemas, are re-masked on ingestion, and never restore authentication or execute the embedded request.
- POST, PUT, PATCH, and DELETE requests are never retried automatically, preventing duplicate administrative changes.
- Response baselines use the same size, schema, symlink, structure, and re-masking controls as imported response exchanges; comparisons never send an API request.
- Creating an environment copies only non-secret configuration. Activating one clears every in-memory API session plus request and response data, while cross-environment history replay remains blocked.
- Legacy history, audit events, and report schedules are safely assigned to the default environment; every new audit event and schedule carries hash-protected environment scope metadata.
- The retained 1,000-event audit window now preserves a verifiable predecessor anchor, and malformed audit storage is never silently overwritten.
- Embedded JSON credentials, bearer authorization text, sensitive URL queries, and OAuth fragments are masked consistently in audit, support, integration, and export paths.

### Fixed
- Corrected ZIA `JSESSIONID`, Client Connector `jwtToken`/`auth-token`, URL-encoded ZPA credentials, and configurable ZDX v1/v2 authentication semantics against the official product guides.
- Restored Python 3.11 compatibility for LEEF export and removed broad PyQtGraph demo/OpenGL collection that could crash headless Linux packaging.

## [2.7.1] - 2026-08-26

### Added
- Operations Center dashboard cards, audit timeline, policy-diff summaries, and masked export preview.
- Adaptive response views for tables, charts, trees, heatmaps, topology, and GraphQL schema output.

### Changed
- Compact command bar and improved response-tree field/value layout.
- Synced the new visualization strings across all Qt catalogs with reviewed Swedish translations.

## [2.7.0] - 2026-08-25

### Added
- Operations Center with local dashboards, policy diff, policy simulation, bulk CSV validation, report scheduling, environment profiles, and an audit trail.
- Hash-linked, redacted audit events and exportable redacted support bundles.
- Local read-only enforcement, configurable alert thresholds, and inert webhook/local-automation configuration guarded by explicit approval.
- Swedish translations and review fallbacks for all new Operations Center strings.

## [2.6.2] - 2026-08-25

### Fixed
- Updated artifact upload/download Actions to the Node 24-compatible v7 line

## [2.6.1] - 2026-08-25

### Changed
- Updated GitHub Actions dependencies to Node 24-compatible releases
- Compile Qt `.qm` catalogs only when the associated `.ts` contains more than 20% genuine translations
- Release builds now include SHA-256 checksums, SPDX SBOMs, and GitHub attestations

## [2.6.0] - 2026-08-25

### Added
- Secure GraphQL query presets, variables, per-endpoint introspection reuse, and schema inspection
- Bar, line, and pie visualizations for numeric API results
- AI request parameter, pagination, and filter suggestions with mandatory preview and approval
- Guided API tasks and guided AI questions for ZIA, ZPA, ZDX, Client Connector, ZIdentity, and AI Security
- Safe exports for CSV, XLSX, NDJSON, JSON, Markdown, HTML, PDF, PNG, SVG, cURL, and Postman collections

### Security
- AI key clearing, masked LLM connection diagnostics, sanitized request exports, and additional secret-handling tests

### Changed
- Qt `.qm` catalogs are generated from `.ts` files during packaging and are no longer versioned

## [2.5.1] - 2026-08-25

### Added
- GraphQL request mode with complete `data`, `errors`, and `extensions` output handling
- Masked GraphQL result visualization and export
- OpenAI-compatible AI endpoint execution with a local catalog fallback

### Fixed
- Basic settings mode keeps language and AI controls available
- CI installs Qt runtime dependencies before GUI tests and secret scanning

## [2.5.0] - 2026-08-25

### Added
- Twenty language profiles: English, Swedish, German, French, Spanish, Brazilian Portuguese, Italian, Dutch, Danish, Norwegian Bokmål, Finnish, Polish, Czech, Hungarian, Turkish, Arabic, Persian, Japanese, Korean, and Simplified Chinese
- Complete Qt translation catalogs and bundled Qt standard-dialog translations for the added locales
- Natural-language OneAPI assistant with secure local, cloud, and OpenAI-compatible LLM configuration
- Basic and Advanced modes for the setup wizard and settings UI
- Masked table visualization and CSV/JSON export for AI-assisted results

### Security
- System-keychain storage for AI credentials and automated GitHub secret scanning

### Changed
- Updated every localized catalog for the setup wizard and advanced workspace; unavailable machine translations use English review fallbacks so no UI text disappears

## [2.4.1] - 2026-08-25

### Added
- First-run setup wizard for OneAPI credentials, tenant configuration, authentication, and common API tasks

## [2.4.0] - 2026-08-25

### Added
- Bundled Automation Hub catalog with 900+ executable REST operations across 12 Zscaler products
- Reproducible catalog updater sourced from the official Automation Hub search index
- Three-pane advanced workspace with resizable API explorer, request/response editor, and documentation/console inspector
- Automatic path-variable extraction and URL-safe substitution
- Response headers view and plain-text response support for CSV and download endpoints

### Fixed
- Preserve the documented product URL when selecting OneAPI endpoints
- Accept both `access_token` and ZDX's `token` authentication response fields
- Include the API catalog in PyInstaller builds

## [2.2.1] - 2026-03-02

### Fixed
- **Settings dialog crash** — Missing global variable caused Settings to not open
- **OneAPI base URL** — Cloud names containing dots (e.g. zscalerthree.net) no longer produce malformed URLs

## [2.2.0] - 2026-03-02

### Added
- **Color-coded HTTP methods** — GET (green), POST (blue), PUT (orange), DELETE (red), PATCH (purple) with colored indicators in dropdown
- **Response status badge** — colored status code display (2xx green, 3xx blue, 4xx orange, 5xx red) with format "200 OK · 234ms · 1.2 KB"
- **Request timing** — elapsed time displayed in status bar and response info for every request
- **Auth status indicators** — 🟢/🔴 dots next to API names in the selector showing authentication state
- **Keyboard shortcuts in tooltips** — Send (Ctrl+Return), Auth (Ctrl+Shift+A), cURL (Ctrl+Shift+C)
- **Auto-expand first endpoint category** when switching APIs in the tree
- **Response size** shown in response info label
- **Endpoint search/filter** — filter box above the endpoint tree to find endpoints by name
- **Double-click to send** — double-clicking a configured endpoint auto-sends the request
- **Pretty-print toggle** (Ctrl+P) for JSON response formatting
- **Polish translation** (71/210 strings)
- **Hungarian translation** (71/210 strings)

## [2.1.3] - 2026-03-02

### Fixed
- **Single keychain prompt** — All credentials stored in one keychain entry instead of individual ones, eliminating repeated unlock prompts on macOS
- Automatic migration from old individual keychain entries

## [2.1.2] - 2026-03-02

### Fixed
- **OneAPI settings** — Vanity domain, client ID/secret, cloud and customer ID now properly saved and loaded

## [2.1.1] - 2026-03-02

### Fixed
- **macOS About menu** — Now shows "About ZS API Client" instead of "About Qt"
- **SSL certificate handling** — Update check handles corporate SSL inspection
  (e.g. Zscaler) where CA certificates have non-critical Basic Constraints

## [2.1.0] - 2026-02-28

### Fixed
- **Critical: OAuth2 authentication broken for all APIs** — `_make_request()` always
  JSON-encoded the request body and overrode `Content-Type` to `application/json`, even
  for OAuth2 token endpoints that require `application/x-www-form-urlencoded`. This caused
  all OAuth-based authentication (ZPA, ZCC, ZIdentity, ZTW, ZWA, EASM, OneAPI) to fail.
- **Critical: Form-urlencoded body rejected by JSON parser** — `_send_request()` tried
  to `json.loads()` the form-urlencoded auth body string, which failed with a JSON decode
  error dialog, preventing the auth request from being sent at all.
- **ZCC/ZTW/ZWA/EASM auth URL path** — These APIs use `/oauth/token` but the code was
  sending to `/oauth2/token`. Fixed to use the correct endpoint path.

## [2.0.0] - 2026-02-27

### Added
- **OneAPI v3 Framework Support** — New unified authentication via ZIdentity OAuth2
  - Single token works across ZIA, ZPA, ZCC, and ZIdentity endpoints
  - Auth via `https://{vanity_domain}.zslogin.net/oauth2/v1/token`
  - API base URL: `https://api.zsapi.net` (production) or `https://api.{cloud}.zsapi.net`
  - Supports production, beta, and alpha environments via cloud parameter
  - Includes `audience` parameter (`https://api.zscaler.com`) per Zscaler SDK spec
- **OneAPI Endpoint Browser** — Pre-built endpoints for:
  - ZIA: URL categories, firewall rules, DLP dictionaries, locations, users
  - ZPA: Application segments, server groups, connectors, segment groups, access policies
  - ZCC: Device management (list, get, force remove)
  - ZIdentity Admin: Users, groups, API clients
- **OneAPI Settings** — New settings panel with:
  - Vanity Domain (organization identifier for zslogin)
  - Client ID / Client Secret (from ZIdentity API Clients)
  - Cloud selection (production/beta/alpha)
  - ZPA Customer ID (for ZPA endpoint paths)
- OneAPI appears first in API dropdown and defaults to enabled

### Fixed
- **ZIdentity auth URL** — Now correctly constructs `zslogin.net` URLs from vanity domain
  - Plain vanity domains (e.g. "acme") → `https://acme.zslogin.net/oauth2/v1/token`
  - Full domains with dots pass through unchanged


## [1.9.3] - 2026-02-05
## [2.0.0] - 2026-02-27

### Added
- **OneAPI v3 Framework Support** — New unified authentication via ZIdentity OAuth2
  - Single token works across ZIA, ZPA, ZCC, and ZIdentity endpoints
  - Auth via `https://{vanity_domain}.zslogin.net/oauth2/v1/token`
  - API base URL: `https://api.zsapi.net` (production) or `https://api.{cloud}.zsapi.net`
  - Supports production, beta, and alpha environments via cloud parameter
  - Includes `audience` parameter (`https://api.zscaler.com`) per Zscaler SDK spec
- **OneAPI Endpoint Browser** — Pre-built endpoints for:
  - ZIA: URL categories, firewall rules, DLP dictionaries, locations, users
  - ZPA: Application segments, server groups, connectors, segment groups, access policies
  - ZCC: Device management (list, get, force remove)
  - ZIdentity Admin: Users, groups, API clients
- **OneAPI Settings** — New settings panel with:
  - Vanity Domain (organization identifier for zslogin)
  - Client ID / Client Secret (from ZIdentity API Clients)
  - Cloud selection (production/beta/alpha)
  - ZPA Customer ID (for ZPA endpoint paths)
- OneAPI appears first in API dropdown and defaults to enabled

### Fixed
- **ZIdentity auth URL** — Now correctly constructs `zslogin.net` URLs from vanity domain
  - Plain vanity domains (e.g. "acme") → `https://acme.zslogin.net/oauth2/v1/token`
  - Full domains with dots pass through unchanged


### Fixed
- **Keychain cache initialization** – Cache variable now declared before use
  - Fixes multiple Keychain prompt issue on macOS
  - Credentials properly cached after first access

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
