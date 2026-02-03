# Zscaler API Client

🔐 A Postman-like desktop application for all Zscaler APIs

![Screenshot](screenshots/main.png)

## Features

- **8 APIs Supported** – ZIA, ZPA, ZDX, ZCC, ZIdentity, ZTW, ZWA, EASM
- **API Explorer** – Browse 200+ endpoints with inline documentation
- **Request Builder** – Build requests with params, headers, and JSON body
- **JSON Highlighting** – Syntax highlighting for responses
- **Batch Operations** – Import CSV for bulk create/delete/update
- **Request History** – Browse and reload previous requests
- **Copy as cURL** – Export requests for command-line use
- **Multi-language** – English, Swedish, German, French, Spanish, Japanese, Chinese
- **Secure Storage** – Credentials stored in system keychain
- **Advanced Settings** – Timeouts, proxy, SSL verification, themes
- **Light/Dark Themes** – Full theme support with system auto-detection
- **Splash Screen** – Professional startup experience
- **Welcome Guide** – Getting started help for new users
- **Inline Documentation** – Links to API docs for each endpoint
- **Auto-Update Check** – Automatically checks for new versions on startup

## Supported APIs

### ZIA (Zscaler Internet Access)
- Authentication
- Users, Groups, Departments
- Locations
- URL Categories & Lookup
- Firewall Policies
- Admin Audit Logs
- Activation
- **Security Insights** (Company Risk Score, Threat Insights)
- **Malware Protection** (Detection Stats, Blocked Malware, By Type)
- **Reports** (Executive Summary, Traffic, Security, Bandwidth, Top Users/Apps/Threats)
- **Sandbox** (Submit Files, Get Reports, Quota)

### ZPA (Zscaler Private Access)
- Authentication (OAuth)
- Application Segments
- Segment Groups
- Server Groups
- Connectors
- Access Policies
- SAML Attributes

### ZDX (Zscaler Digital Experience)
- Authentication (OAuth)
- Administration (Departments, Locations, Geolocations)
- Devices & Health Metrics
- Users & Scores
- Applications & Performance
- Alerts
- Web Probes
- Deep Traces

### ZCC (Client Connector)
- Authentication (OAuth)
- Device Management
- **Compliance Status** (compliant/non-compliant devices)
- Posture Profiles
- Software Versions & Updates
- Enrollment Tokens
- Troubleshooting & Logs

### ZIdentity (Identity & Access Management)
- OAuth 2.0 Authentication
- User Management (CRUD)
- Group Management
- **SCIM 2.0** (Users, Groups provisioning)
- Identity Providers (SAML, OIDC)
- API Clients Management
- Audit Logs

### ZTW (Zero Trust Workloads)
- OAuth Authentication
- Branch Connectors
- Connector Groups
- Locations
- Service Edges & Health
- Traffic Forwarding Rules

### ZWA (Workflow Automation)
- OAuth Authentication
- Workflows (Create, Execute, Enable/Disable)
- Execution History & Logs
- Triggers & Webhooks
- Actions & Integrations
- Templates

### EASM (External Attack Surface Management)
- OAuth Authentication
- **Asset Discovery** (domains, IPs, certificates)
- Vulnerability Management
- Risk Assessment & Trends
- Certificate Monitoring
- Scan Management
- Reports (Executive, Technical)

## Installation

### Requirements
- Python 3.9+
- PyQt6 or PySide6

### Install
```bash
pip install PyQt6
git clone https://github.com/yeager/zscaler-api-client.git
cd zscaler-api-client
python zscaler_api_client.py
```

### macOS App Bundle
```bash
pip install pyinstaller
pyinstaller zscaler_api_client.spec
```

The included `.spec` file and `runtime_hook.py` handle Qt plugin paths correctly for bundled apps.

## Usage

### 1. Configure Credentials
Go to **File → Settings** and enter your Zscaler credentials:

**ZIA:**
- Cloud (e.g., `zsapi.zscaler.net`)
- API Key
- Admin Username
- Admin Password

**ZPA:**
- Cloud (e.g., `config.private.zscaler.com`)
- Client ID
- Client Secret
- Customer ID

### 2. Browse Endpoints
Select **ZIA** or **ZPA** from the dropdown, then click on an endpoint in the tree to load it.

### 3. Send Request
1. Modify the URL, params, headers, or body as needed
2. Click **Send**
3. View the JSON response with syntax highlighting

### 4. Batch Operations
Go to **File → Batch Operations** to:
1. Import a CSV file
2. Select the operation (Create Users, Delete Users, etc.)
3. Execute in bulk

### CSV Format Examples

**Create Users (ZIA):**
```csv
name,email,department_id,group_ids
John Doe,john@example.com,123,"[456,789]"
Jane Doe,jane@example.com,123,"[456]"
```

**URL Lookup (ZIA):**
```csv
url
example.com
test.com
malware.com
```

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| Ctrl+Enter | Send Request |
| Ctrl+, | Settings |
| Ctrl+B | Batch Operations |
| Ctrl+H | Request History |
| Ctrl+Shift+C | Copy as cURL |
| Ctrl+Shift+R | Copy Response |
| Ctrl+Q | Quit |

## Languages

The application supports:
- 🇬🇧 English (default)
- 🇸🇪 Svenska
- 🇩🇪 Deutsch
- 🇫🇷 Français
- 🇪🇸 Español
- 🇯🇵 日本語
- 🇨🇳 中文

Change via **Language** menu.

## API Documentation

| API | Documentation |
|-----|---------------|
| ZIA | [ZIA API Reference](https://help.zscaler.com/zia/api) |
| ZPA | [ZPA API Reference](https://help.zscaler.com/zpa/api-reference) |
| ZDX | [ZDX API Reference](https://help.zscaler.com/zdx/api-reference) |
| ZCC | [ZCC API Reference](https://help.zscaler.com/zcc/api-reference) |
| ZIdentity | [ZIdentity API](https://help.zscaler.com/zidentity/api-reference) |
| ZTW | [Cloud Branch Connector API](https://help.zscaler.com/cloud-branch-connector/api-reference) |
| ZWA | [Workflow Automation API](https://help.zscaler.com/workflow-automation/api-reference) |
| EASM | [EASM API Reference](https://help.zscaler.com/easm/api-reference) |

**Official SDK:** [zscaler-sdk-python](https://github.com/zscaler/zscaler-sdk-python)

## Security

- Credentials are stored securely using QSettings (platform keychain on macOS)
- API sessions are automatically terminated when the app closes
- No telemetry or external connections except to Zscaler APIs

## Disclaimer

⚠️ **This software is NOT affiliated with, endorsed by, or supported by Zscaler, Inc. in any way.** This is an independent community project.

- Zscaler® is a registered trademark of Zscaler, Inc.
- All product names, logos, and brands are property of their respective owners.
- **NO WARRANTY:** This software is provided "as is" without warranty of any kind. Use at your own risk.
- **NO SUPPORT:** For Zscaler product support, please contact Zscaler directly through official channels.

The author is not responsible for any damage or data loss resulting from the use of this software.

## License

GPL-3.0-or-later

## Author

**Daniel Nylander** ([@yeager](https://github.com/yeager))

## Acknowledgments

Thanks to **Nima Samadi** for feature suggestions (ZDX, ZCC, compliance, splash screen, user guidance).
