# ZS API Client

🔐 A Postman-like desktop application for all Zscaler APIs

[![Latest Release](https://img.shields.io/github/v/release/yeager/zscaler-api-client)](https://github.com/yeager/zscaler-api-client/releases)
[![License: GPL-3.0](https://img.shields.io/badge/License-GPL%203.0-blue.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/platform-macOS%20%7C%20Windows%20%7C%20Linux-lightgrey)](https://github.com/yeager/zscaler-api-client/releases)

![Screenshot](screenshots/main.png)

## 🛡️ Security First

ZS API Client is built with security as a top priority:

### Credential Security
- **System Keychain Integration** – All credentials stored securely in macOS Keychain, Windows Credential Locker, or Linux Secret Service
- **No Plain Text Storage** – Sensitive data never written to disk in readable format
- **Memory Protection** – Credentials cleared from memory when not in use

### Update Security
- **Verified Updates** – Update checker verifies releases from trusted GitHub repository only
- **Author Verification** – Only accepts releases from verified maintainer (yeager)
- **SSL Enforcement** – All update checks use HTTPS with certificate verification
- **Pre-release Warnings** – Clearly indicates when a release is a pre-release version

### API Security
- **Per-Session Tokens** – Each API type maintains its own authentication token
- **Automatic Session Cleanup** – Sessions terminated when app closes
- **No Telemetry** – Zero tracking, analytics, or external connections except Zscaler APIs
- **OAuth 2.0 Support** – Modern authentication for all newer APIs

## ✨ Features

### API Coverage
- **8 APIs Supported** – Complete coverage of the Zscaler platform:
  - ZIA (Zscaler Internet Access)
  - ZPA (Zscaler Private Access)
  - ZDX (Zscaler Digital Experience)
  - ZCC (Client Connector)
  - ZIdentity (Identity & Access Management)
  - ZTW (Zero Trust Workloads / Branch Connector)
  - ZWA (Workflow Automation)
  - EASM (External Attack Surface Management)

### Developer Experience
- **200+ Endpoints** – Browse all available API endpoints in an organized tree view
- **Inline Documentation** – Direct links to official Zscaler API docs for each endpoint
- **Request Builder** – Full control over URL, params, headers, and JSON body
- **Syntax Highlighting** – Beautiful JSON response formatting
- **Copy as cURL** – Export any request for command-line use or scripting
- **Request History** – Browse and replay previous requests

### Productivity
- **Batch Operations** – Import CSV files for bulk create/delete/update operations
- **Multi-language UI** – 8 languages: English, Swedish, German, French, Spanish, Japanese, Chinese, Farsi
- **Light/Dark Themes** – Full theme support with system auto-detection
- **Keyboard Shortcuts** – Efficient workflow with customizable shortcuts
- **What's New Dialog** – See changes after each update

### Enterprise Ready
- **Cross-Platform** – Native builds for macOS (Apple Silicon & Intel), Windows, and Linux
- **Offline Capable** – Works without internet (except for API calls)
- **No Installation Required** – Portable app, just download and run
- **Open Source** – Full source code available for security audits

## 📦 Installation

### Download
Get the latest release for your platform:
- **macOS (Apple Silicon):** `ZS API Client-x.x.x-macos-arm64.dmg`
- **Windows:** `ZS-API-Client-x.x.x-win64.zip`
- **Linux:** `ZS-API-Client-x.x.x-linux-x64.tar.gz`

👉 [Download Latest Release](https://github.com/yeager/zscaler-api-client/releases/latest)

### From Source
```bash
# Clone repository
git clone https://github.com/yeager/zscaler-api-client.git
cd zscaler-api-client

# Install dependencies
pip install PySide6 keyring

# Run
python zscaler_api_client.py
```

### Build Standalone App
```bash
pip install pyinstaller
pyinstaller "ZS API Client.spec"
```

## 🚀 Quick Start

### 1. Configure Credentials
**File → Settings** and enter your Zscaler credentials:

| API | Required Credentials |
|-----|---------------------|
| ZIA | Cloud, API Key, Username, Password |
| ZPA | Cloud, Client ID, Client Secret, Customer ID |
| ZDX | Cloud, API Key, API Secret |
| ZCC | Cloud, Client ID, Client Secret |
| ZIdentity | Vanity Domain, Client ID, Client Secret |
| ZTW | Cloud, Client ID, Client Secret |
| ZWA | Cloud, Client ID, Client Secret |
| EASM | Cloud, API Key, API Secret |

### 2. Authenticate
Select an API → Choose an **Authenticate** endpoint → Click **Send**

### 3. Explore & Test
Browse endpoints in the tree, modify parameters, and send requests!

## 📋 Supported APIs

### ZIA (Zscaler Internet Access)
Web security, URL filtering, and firewall policies.
- User/Group/Department Management
- URL Categories & Lookup
- Firewall Policies
- Security Insights & Risk Scores
- Malware Protection Stats
- Sandbox File Analysis
- Admin Audit Logs

### ZPA (Zscaler Private Access)
Zero trust application access.
- Application Segments
- Server Groups & Connectors
- Access Policies
- SAML Attributes

### ZDX (Zscaler Digital Experience)
End-user experience monitoring.
- Device Health Metrics
- User Experience Scores
- Application Performance
- Web Probes & Deep Traces
- Alerts

### ZCC (Client Connector)
Endpoint agent management.
- Device Inventory
- Compliance Status
- Software Updates
- Enrollment Tokens
- Troubleshooting Logs

### ZIdentity (Identity & Access Management)
User identity and SSO.
- User & Group Management
- SCIM 2.0 Provisioning
- Identity Providers (SAML/OIDC)
- API Client Management
- Audit Logs

### ZTW (Zero Trust Workloads)
Branch connector management.
- Branch Connectors
- Service Edges
- Traffic Forwarding
- Location Management

### ZWA (Workflow Automation)
Security automation workflows.
- Workflow Management
- Execution History
- Triggers & Actions
- Templates

### EASM (External Attack Surface Management)
External threat discovery.
- Asset Discovery
- Vulnerability Management
- Risk Assessment
- Certificate Monitoring
- Scan Management

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+Enter` | Send Request |
| `Ctrl+,` | Settings |
| `Ctrl+B` | Batch Operations |
| `Ctrl+H` | Request History |
| `Ctrl+Shift+C` | Copy as cURL |
| `Ctrl+Shift+R` | Copy Response |
| `Ctrl+Q` | Quit |

## 🌍 Languages

Change language via the **Language** menu:

🇬🇧 English • 🇸🇪 Svenska • 🇩🇪 Deutsch • 🇫🇷 Français • 🇪🇸 Español • 🇯🇵 日本語 • 🇨🇳 中文 • 🇮🇷 فارسی

## 📚 Documentation

| API | Official Docs |
|-----|---------------|
| ZIA | [help.zscaler.com/zia/api](https://help.zscaler.com/zia/api) |
| ZPA | [help.zscaler.com/zpa/api-reference](https://help.zscaler.com/zpa/api-reference) |
| ZDX | [help.zscaler.com/zdx/api-reference](https://help.zscaler.com/zdx/api-reference) |
| ZCC | [help.zscaler.com/zcc/api-reference](https://help.zscaler.com/zcc/api-reference) |
| ZIdentity | [help.zscaler.com/zidentity/api-reference](https://help.zscaler.com/zidentity/api-reference) |
| ZTW | [help.zscaler.com/cloud-branch-connector/api-reference](https://help.zscaler.com/cloud-branch-connector/api-reference) |
| ZWA | [help.zscaler.com/workflow-automation/api-reference](https://help.zscaler.com/workflow-automation/api-reference) |
| EASM | [help.zscaler.com/easm/api-reference](https://help.zscaler.com/easm/api-reference) |

**Official SDK:** [zscaler-sdk-python](https://github.com/zscaler/zscaler-sdk-python)

## ⚠️ Disclaimer

**This software is NOT affiliated with, endorsed by, or supported by Zscaler, Inc.**

This is an independent community project. Zscaler® is a registered trademark of Zscaler, Inc.

- **NO WARRANTY:** Software provided "as is" without warranty of any kind
- **NO SUPPORT:** For Zscaler product support, contact Zscaler directly
- **USE AT YOUR OWN RISK:** Author not responsible for any damage or data loss

## 📄 License

GPL-3.0-or-later – Free software, use and modify as you wish.

## 👤 Author

**Daniel Nylander** ([@yeager](https://github.com/yeager))

## 🙏 Acknowledgments

- **Nima Samadi** – Feature suggestions (ZDX, ZCC, compliance, splash screen)
- **Zscaler** – For building an amazing zero trust platform

---

See [CHANGELOG.md](CHANGELOG.md) for version history.
