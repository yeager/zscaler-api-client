#!/usr/bin/env python3
# SPDX-License-Identifier: GPL-3.0-or-later
# ZS API Client - A Qt-based API client for Zscaler APIs
# Copyright (C) 2026 Daniel Nylander <daniel@danielnylander.se>

"""
ZS API Client - Postman-like tool for Zscaler APIs

Supports:
- ZIA (Zscaler Internet Access)
- ZPA (Zscaler Private Access)
- Batch operations with CSV import
- Multi-language support (en, sv, de, fr, es, ja, zh)
"""

import csv
import html
import io
import json
import os
import re
import shlex
import shutil
import sys
import time
import urllib.request
import urllib.parse
import urllib.error
import zipfile
from dataclasses import dataclass, field
from pathlib import Path
from typing import Optional, Dict, List, Any
from xml.sax.saxutils import escape as xml_escape

# Use PySide6 for Qt bindings
from PySide6.QtWidgets import (
    QApplication, QMainWindow, QWidget, QVBoxLayout, QHBoxLayout,
    QSplitter, QTreeWidget, QTreeWidgetItem, QTextEdit, QLineEdit,
    QComboBox, QPushButton, QLabel, QTabWidget, QTableWidget,
    QTableWidgetItem, QHeaderView, QFileDialog, QMessageBox,
    QGroupBox, QFormLayout, QDialog, QDialogButtonBox, QProgressBar,
    QStatusBar, QMenuBar, QMenu, QToolBar, QPlainTextEdit, QSplashScreen,
    QCheckBox, QScrollArea, QFrame, QStackedWidget, QGridLayout
    , QInputDialog
)
from PySide6.QtCore import Qt, QThread, Signal, QSettings, QTranslator, QLocale, QTimer, QLibraryInfo, QProcess, QProcessEnvironment
from PySide6.QtGui import QAction, QFont, QColor, QSyntaxHighlighter, QTextCharFormat, QPixmap, QPainter, QPen
from feature_services import AuditTrail, policy_diff, simulate_policy_trace, policy_overview, validate_bulk_csv, support_bundle, mask, is_sensitive_name, policy_as_code, compliance_findings, security_posture, operational_alerts, request_latency_trend, incident_evidence, change_control_plan, security_report_data, validate_request_chain, BATCH_OPERATIONS, build_batch_plan
QT_BINDINGS = "PySide6"

__version__ = "2.7.1"

# Locale registry. App translations are loaded from translations/ at startup;
# English is the explicit source-language fallback when a catalog is absent.
LANGUAGES = (
    ("🇬🇧 English", "en"), ("🇸🇪 Svenska", "sv"), ("🇩🇪 Deutsch", "de"),
    ("🇫🇷 Français", "fr"), ("🇪🇸 Español", "es"), ("🇵🇹 Português (Brasil)", "pt_BR"),
    ("🇮🇹 Italiano", "it"), ("🇳🇱 Nederlands", "nl"), ("🇩🇰 Dansk", "da"),
    ("🇳🇴 Norsk bokmål", "nb"), ("🇫🇮 Suomi", "fi"), ("🇵🇱 Polski", "pl"),
    ("🇨🇿 Čeština", "cs"), ("🇭🇺 Magyar", "hu"), ("🇹🇷 Türkçe", "tr"),
    ("🇸🇦 العربية", "ar"), ("🇮🇷 فارسی", "fa"), ("🇯🇵 日本語", "ja"),
    ("🇰🇷 한국어", "ko"), ("🇨🇳 简体中文", "zh_CN"),
)
LANGUAGE_CODES = frozenset(code for _, code in LANGUAGES)
QT_LANGUAGE_CODES = {
    "pt_BR": "pt_BR",
    "zh_CN": "zh_CN",
}


def resolve_language(language: str | None, system_locale: str | None = None) -> str:
    """Resolve an explicit preference, or use the supported system locale."""
    requested = str(language or "system")
    if requested == "system":
        requested = system_locale or QLocale.system().name()
    requested = requested.replace("-", "_")
    if requested in LANGUAGE_CODES:
        return requested
    base = requested.split("_", 1)[0]
    if base == "pt":
        return "pt_BR"
    if base == "zh":
        return "zh_CN"
    return base if base in LANGUAGE_CODES else "en"


def graphql_request_is_read_only(body_text: str) -> bool:
    """Conservatively recognize a GraphQL query carried in the JSON request body."""
    try:
        payload = json.loads(body_text)
    except (TypeError, ValueError):
        return False
    query = payload.get("query", "") if isinstance(payload, dict) else ""
    if not isinstance(query, str):
        return False
    query = re.sub(r"(?m)#.*$", "", query).strip()
    if not query or re.search(r"\b(?:mutation|subscription)\b", query, re.IGNORECASE):
        return False
    return bool(re.match(r"^(?:query\b|\{)", query, re.IGNORECASE))


def collect_record_datasets(value: Any, maximum_rows: int = 1000) -> list[tuple[str, list[dict[str, Any]]]]:
    """Collect every tabular JSON branch, merging repeated nested list paths."""
    collected: dict[str, list[dict[str, Any]]] = {}

    def visit(item: Any, path: str):
        if isinstance(item, list):
            records = [child for child in item if isinstance(child, dict)]
            scalars = [child for child in item if not isinstance(child, (dict, list))]
            if records:
                collected.setdefault(path, []).extend(records[:maximum_rows])
            elif scalars:
                collected.setdefault(path, []).extend({"value": child} for child in scalars[:maximum_rows])
            for child in item[:maximum_rows]:
                visit(child, path + "[]")
        elif isinstance(item, dict):
            for key, child in item.items():
                visit(child, f"{path}.{key}")

    visit(value, "$")
    return [(path, rows[:maximum_rows]) for path, rows in collected.items()]


def validate_local_automation_path(value: str) -> tuple[Path | None, str]:
    """Accept only a small, explicit, non-symlinked Python automation file."""
    raw = str(value or "").strip()
    if not raw:
        return None, "missing"
    candidate = Path(raw).expanduser()
    if not candidate.is_absolute():
        return None, "not_absolute"
    if candidate.is_symlink():
        return None, "symlink"
    try:
        resolved = candidate.resolve(strict=True)
        stat = resolved.stat()
    except OSError:
        return None, "unavailable"
    if not resolved.is_file() or resolved.suffix.lower() != ".py":
        return None, "not_python"
    if stat.st_size > 1_048_576:
        return None, "too_large"
    return resolved, ""


def validate_webhook_endpoint(value: str) -> tuple[str | None, str]:
    """Validate a user-approved webhook without allowing plaintext URL secrets."""
    endpoint = str(value or "").strip()
    if not endpoint:
        return None, "missing"
    try:
        parsed = urllib.parse.urlsplit(endpoint)
        _ = parsed.port
    except ValueError:
        return None, "invalid"
    local = parsed.hostname in {"localhost", "127.0.0.1", "::1"}
    if not parsed.hostname or (parsed.scheme != "https" and not (local and parsed.scheme == "http")):
        return None, "scheme"
    if parsed.username is not None or parsed.password is not None or parsed.fragment:
        return None, "credentials"
    if any(is_sensitive_name(key) for key, _ in urllib.parse.parse_qsl(parsed.query, keep_blank_values=True)):
        return None, "credentials"
    return endpoint, ""

# Secure credential storage using system keychain
SERVICE_NAME = "ZscalerAPIClient"
_credential_cache: dict = {}  # Cache to avoid multiple Keychain prompts
def redact_sensitive(value: Any) -> Any:
    """Return a history-safe copy of JSON or form-urlencoded request data."""
    if isinstance(value, dict):
        return {
            key: "***" if is_sensitive_name(key) else redact_sensitive(item)
            for key, item in value.items()
        }
    if isinstance(value, list):
        return [redact_sensitive(item) for item in value]
    if isinstance(value, str):
        stripped = value.strip()
        if stripped.startswith(("{", "[")):
            try:
                # API error bodies are frequently JSON embedded in an exception
                # string. Parse and redact them before they reach UI or exports.
                return json.dumps(redact_sensitive(json.loads(stripped)), ensure_ascii=False)
            except (ValueError, TypeError):
                pass
        masked = re.sub(
            r"(?i)(\b(?:authorization|proxy-?authorization|set-?cookie|cookie|password|(?:client_)?secret|(?:access|refresh)_token|x-?api-?key|api_?key)\s*[:=]\s*)(?:[\"'])?[^\s,;&}\]\"']+",
            r"\1***",
            value,
        )
        if masked != value:
            return masked
    if isinstance(value, str) and "=" in value:
        pairs = urllib.parse.parse_qsl(value, keep_blank_values=True)
        if pairs:
            return urllib.parse.urlencode([
                (key, "***" if is_sensitive_name(key) else item)
                for key, item in pairs
            ])
    return value


def redact_url(url: str) -> str:
    """Mask sensitive query-string values before persisting history."""
    parts = urllib.parse.urlsplit(url)
    query = urllib.parse.parse_qsl(parts.query, keep_blank_values=True)
    safe_query = urllib.parse.urlencode([
        (key, "***" if is_sensitive_name(key) else value)
        for key, value in query
    ])
    return urllib.parse.urlunsplit((parts.scheme, parts.netloc, parts.path, safe_query, parts.fragment))


class NoRedirectHandler(urllib.request.HTTPRedirectHandler):
    """Prevent approved webhook payloads from being redirected to another origin."""
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        return None


def build_network_opener(settings: QSettings | None = None, ssl_context=None, allow_redirects=True):
    """Create the shared network transport for API, AI, and update traffic."""
    settings = settings or QSettings("Zscaler", "APIClient")
    handlers = [urllib.request.HTTPSHandler(context=ssl_context)] if ssl_context else []
    if not allow_redirects:
        handlers.append(NoRedirectHandler())
    proxy_mode = str(settings.value("advanced/proxy_mode", "0"))
    if proxy_mode == "0":
        handlers.append(urllib.request.ProxyHandler({}))
    elif proxy_mode == "2":
        host = str(settings.value("advanced/proxy_host", "")).strip()
        port = str(settings.value("advanced/proxy_port", "")).strip()
        if not host or not port:
            raise ValueError("Manual proxy requires both host and port")
        username = str(settings.value("advanced/proxy_username", "")).strip()
        password = secure_get("proxy_password")
        credentials = ""
        if username:
            credentials = urllib.parse.quote(username, safe="")
            if password:
                credentials += ":" + urllib.parse.quote(password, safe="")
            credentials += "@"
        proxy_url = f"http://{credentials}{host}:{port}"
        handlers.append(urllib.request.ProxyHandler({"http": proxy_url, "https": proxy_url}))
    return urllib.request.build_opener(*handlers)

_credentials_loaded = False

def _load_all_credentials():
    """Load all credentials from a single keychain entry (one prompt)."""
    global _credential_cache, _credentials_loaded
    if _credentials_loaded:
        return
    _credentials_loaded = True
    try:
        import keyring
        blob = keyring.get_password(SERVICE_NAME, "_all_credentials")
        if blob:
            _credential_cache.update(json.loads(blob))
        else:
            # Migrate from individual keychain entries (one-time)
            keys = ["zia_api_key", "zia_password", "zpa_client_secret",
                    "zdx_key_secret", "zcc_client_secret", "zidentity_client_secret",
                    "ztw_client_secret", "zwa_client_secret", "easm_client_secret",
                    "oneapi_client_secret", "proxy_password"]
            migrated = {}
            for k in keys:
                try:
                    v = keyring.get_password(SERVICE_NAME, k)
                    if v:
                        migrated[k] = v
                except Exception:
                    pass
            if migrated:
                _credential_cache.update(migrated)
                _save_all_credentials()
    except Exception:
        pass

def _save_all_credentials():
    """Save all credentials to a single keychain entry (one prompt)."""
    try:
        import keyring
        blob = json.dumps({k: v for k, v in _credential_cache.items() if v})
        keyring.set_password(SERVICE_NAME, "_all_credentials", blob)
    except Exception:
        pass

def secure_store(key: str, value: str) -> bool:
    """Store credential securely in system keychain."""
    global _credential_cache
    _load_all_credentials()
    if not value:
        _credential_cache.pop(key, None)
    else:
        _credential_cache[key] = value
    _save_all_credentials()
    return True

def secure_get(key: str) -> str:
    """Retrieve credential from system keychain (single keychain access)."""
    _load_all_credentials()
    return _credential_cache.get(key, "")

def secure_delete(key: str) -> bool:
    """Delete credential from system keychain."""
    secure_store(key, "")
    return not bool(secure_get(key))

# Stylesheets for theming
DARK_STYLE = """
QMainWindow, QDialog {
    background-color: #1e1e1e;
    color: #d4d4d4;
}
QWidget {
    background-color: #1e1e1e;
    color: #d4d4d4;
}
QFrame#commandBar {
    background-color: #252526;
    border: 1px solid #3c3c3c;
    border-radius: 8px;
}
QGroupBox {
    border: 1px solid #3c3c3c;
    border-radius: 4px;
    margin-top: 8px;
    padding-top: 8px;
    font-weight: bold;
}
QGroupBox::title {
    subcontrol-origin: margin;
    left: 10px;
    padding: 0 5px;
}
QLineEdit, QPlainTextEdit, QTextEdit, QComboBox, QSpinBox {
    background-color: #2d2d2d;
    border: 1px solid #3c3c3c;
    border-radius: 4px;
    padding: 4px;
    color: #d4d4d4;
    selection-background-color: #264f78;
}
QLineEdit:focus, QPlainTextEdit:focus, QTextEdit:focus {
    border-color: #0078d4;
}
QComboBox::drop-down {
    border: none;
    padding-right: 8px;
}
QComboBox::down-arrow {
    image: none;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 6px solid #d4d4d4;
}
QPushButton {
    background-color: #0078d4;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 6px 16px;
    font-weight: bold;
}
QPushButton:hover {
    background-color: #1084d8;
}
QPushButton:pressed {
    background-color: #006cc1;
}
QPushButton:disabled {
    background-color: #3c3c3c;
    color: #6c6c6c;
}
QTreeWidget, QTableWidget, QListWidget {
    background-color: #252526;
    border: 1px solid #3c3c3c;
    border-radius: 4px;
    alternate-background-color: #2d2d2d;
}
QTreeWidget::item, QTableWidget::item, QListWidget::item {
    padding: 4px;
}
QTreeWidget::item:selected, QTableWidget::item:selected, QListWidget::item:selected {
    background-color: #264f78;
}
QTreeWidget::item:hover, QTableWidget::item:hover, QListWidget::item:hover {
    background-color: #2a2d2e;
}
QHeaderView::section {
    background-color: #2d2d2d;
    color: #d4d4d4;
    border: none;
    border-bottom: 1px solid #3c3c3c;
    padding: 6px;
    font-weight: bold;
}
QTabWidget::pane {
    border: 1px solid #3c3c3c;
    border-radius: 4px;
}
QTabBar::tab {
    background-color: #2d2d2d;
    color: #d4d4d4;
    border: 1px solid #3c3c3c;
    border-bottom: none;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    padding: 6px 12px;
    margin-right: 2px;
}
QTabBar::tab:selected {
    background-color: #1e1e1e;
    border-bottom: 2px solid #0078d4;
}
QTabBar::tab:hover:!selected {
    background-color: #383838;
}
QMenuBar {
    background-color: #2d2d2d;
    color: #d4d4d4;
}
QMenuBar::item:selected {
    background-color: #3c3c3c;
}
QMenu {
    background-color: #2d2d2d;
    color: #d4d4d4;
    border: 1px solid #3c3c3c;
}
QMenu::item:selected {
    background-color: #264f78;
}
QStatusBar {
    background-color: #007acc;
    color: white;
}
QSplitter::handle {
    background-color: #3c3c3c;
}
QScrollBar:vertical {
    background-color: #1e1e1e;
    width: 12px;
    border: none;
}
QScrollBar::handle:vertical {
    background-color: #5a5a5a;
    border-radius: 6px;
    min-height: 20px;
}
QScrollBar::handle:vertical:hover {
    background-color: #6a6a6a;
}
QScrollBar:horizontal {
    background-color: #1e1e1e;
    height: 12px;
    border: none;
}
QScrollBar::handle:horizontal {
    background-color: #5a5a5a;
    border-radius: 6px;
    min-width: 20px;
}
QProgressBar {
    border: 1px solid #3c3c3c;
    border-radius: 4px;
    background-color: #2d2d2d;
    text-align: center;
}
QProgressBar::chunk {
    background-color: #0078d4;
    border-radius: 3px;
}
QLabel {
    background-color: transparent;
}
QLabel a {
    color: #3794ff;
}
"""

WORKSPACE_STYLE = """
QFrame#commandBar {
    background: qlineargradient(x1:0, y1:0, x2:1, y2:0, stop:0 #172554, stop:0.52 #172554, stop:1 #0f766e);
    border: 1px solid #334155;
    border-radius: 10px;
}
QFrame#commandBar QLabel, QFrame#metricCard QLabel {
    color: #f8fafc;
}
QFrame#commandBar QPushButton {
    background: rgba(255, 255, 255, 28);
    border: 1px solid rgba(255, 255, 255, 50);
    border-radius: 7px;
    padding: 5px 11px;
}
QFrame#commandBar QPushButton:hover {
    background: rgba(255, 255, 255, 52);
}
QFrame#metricCard {
    background: qlineargradient(x1:0, y1:0, x2:0, y2:1, stop:0 #25354d, stop:1 #172235);
    border: 1px solid #3b506c;
    border-radius: 12px;
    min-width: 148px;
    min-height: 76px;
}
QFrame#metricCard:hover {
    border: 1px solid #38bdf8;
    background: #293c57;
}
QTableWidget {
    gridline-color: #334155;
    alternate-background-color: rgba(71, 85, 105, 80);
}
QLabel#sectionTitle {
    font-size: 18px;
    font-weight: 700;
    padding: 2px 0 6px 0;
}
QLabel#mutedLabel {
    color: #7b8490;
    font-size: 11px;
    padding: 0 2px 4px 2px;
}
QGroupBox {
    font-size: 12px;
}
QLineEdit, QComboBox, QPushButton {
    min-height: 24px;
}
QTabWidget::pane {
    top: -1px;
}
QSplitter::handle {
    width: 5px;
    height: 5px;
}
"""

LIGHT_STYLE = """
QMainWindow, QDialog {
    background-color: #f5f5f5;
    color: #1e1e1e;
}
QWidget {
    background-color: #f5f5f5;
    color: #1e1e1e;
}
QGroupBox {
    border: 1px solid #d0d0d0;
    border-radius: 4px;
    margin-top: 8px;
    padding-top: 8px;
    font-weight: bold;
}
QGroupBox::title {
    subcontrol-origin: margin;
    left: 10px;
    padding: 0 5px;
}
QLineEdit, QPlainTextEdit, QTextEdit, QComboBox, QSpinBox {
    background-color: white;
    border: 1px solid #d0d0d0;
    border-radius: 4px;
    padding: 4px;
    color: #1e1e1e;
    selection-background-color: #0078d4;
    selection-color: white;
}
QLineEdit:focus, QPlainTextEdit:focus, QTextEdit:focus {
    border-color: #0078d4;
}
QComboBox::drop-down {
    border: none;
    padding-right: 8px;
}
QComboBox::down-arrow {
    image: none;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 6px solid #1e1e1e;
}
QPushButton {
    background-color: #0078d4;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 6px 16px;
    font-weight: bold;
}
QPushButton:hover {
    background-color: #1084d8;
}
QPushButton:pressed {
    background-color: #006cc1;
}
QPushButton:disabled {
    background-color: #e0e0e0;
    color: #a0a0a0;
}
QTreeWidget, QTableWidget, QListWidget {
    background-color: white;
    border: 1px solid #d0d0d0;
    border-radius: 4px;
    alternate-background-color: #fafafa;
}
QTreeWidget::item, QTableWidget::item, QListWidget::item {
    padding: 4px;
}
QTreeWidget::item:selected, QTableWidget::item:selected, QListWidget::item:selected {
    background-color: #0078d4;
    color: white;
}
QTreeWidget::item:hover, QTableWidget::item:hover, QListWidget::item:hover {
    background-color: #e8e8e8;
}
QHeaderView::section {
    background-color: #f0f0f0;
    color: #1e1e1e;
    border: none;
    border-bottom: 1px solid #d0d0d0;
    padding: 6px;
    font-weight: bold;
}
QTabWidget::pane {
    border: 1px solid #d0d0d0;
    border-radius: 4px;
}
QTabBar::tab {
    background-color: #e8e8e8;
    color: #1e1e1e;
    border: 1px solid #d0d0d0;
    border-bottom: none;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    padding: 6px 12px;
    margin-right: 2px;
}
QTabBar::tab:selected {
    background-color: #f5f5f5;
    border-bottom: 2px solid #0078d4;
}
QTabBar::tab:hover:!selected {
    background-color: #d8d8d8;
}
QMenuBar {
    background-color: #f0f0f0;
    color: #1e1e1e;
}
QMenuBar::item:selected {
    background-color: #d0d0d0;
}
QMenu {
    background-color: white;
    color: #1e1e1e;
    border: 1px solid #d0d0d0;
}
QMenu::item:selected {
    background-color: #0078d4;
    color: white;
}
QStatusBar {
    background-color: #0078d4;
    color: white;
}
QSplitter::handle {
    background-color: #d0d0d0;
}
QScrollBar:vertical {
    background-color: #f5f5f5;
    width: 12px;
    border: none;
}
QScrollBar::handle:vertical {
    background-color: #c0c0c0;
    border-radius: 6px;
    min-height: 20px;
}
QScrollBar::handle:vertical:hover {
    background-color: #a0a0a0;
}
QScrollBar:horizontal {
    background-color: #f5f5f5;
    height: 12px;
    border: none;
}
QScrollBar::handle:horizontal {
    background-color: #c0c0c0;
    border-radius: 6px;
    min-width: 20px;
}
QProgressBar {
    border: 1px solid #d0d0d0;
    border-radius: 4px;
    background-color: white;
    text-align: center;
}
QProgressBar::chunk {
    background-color: #0078d4;
    border-radius: 3px;
}
QLabel {
    background-color: transparent;
}
QLabel a {
    color: #0066cc;
}
"""

# Zscaler API Definitions
ZIA_ENDPOINTS = {
    "Authentication": {
        "Authenticate": {
            "method": "POST",
            "path": "/api/v1/authenticatedSession",
            "description": "Authenticate and get session cookie",
            "body": {"apiKey": "", "username": "", "password": "", "timestamp": ""},
        },
        "End Session": {
            "method": "DELETE",
            "path": "/api/v1/authenticatedSession",
            "description": "End authenticated session",
        },
    },
    "Users": {
        "List Users": {
            "method": "GET",
            "path": "/api/v1/users",
            "description": "Get all users",
            "params": {"page": "1", "pageSize": "100", "search": ""},
        },
        "Get User": {
            "method": "GET",
            "path": "/api/v1/users/{userId}",
            "description": "Get user by ID",
        },
        "Create User": {
            "method": "POST",
            "path": "/api/v1/users",
            "description": "Create a new user",
            "body": {"name": "", "email": "", "department": {"id": 0}, "groups": []},
        },
        "Update User": {
            "method": "PUT",
            "path": "/api/v1/users/{userId}",
            "description": "Update existing user",
            "body": {"name": "", "email": "", "department": {"id": 0}, "groups": []},
        },
        "Delete User": {
            "method": "DELETE",
            "path": "/api/v1/users/{userId}",
            "description": "Delete user by ID",
        },
        "Bulk Delete Users": {
            "method": "POST",
            "path": "/api/v1/users/bulkDelete",
            "description": "Bulk delete users",
            "body": {"ids": []},
        },
    },
    "Groups": {
        "List Groups": {
            "method": "GET",
            "path": "/api/v1/groups",
            "description": "Get all groups",
        },
        "Get Group": {
            "method": "GET",
            "path": "/api/v1/groups/{groupId}",
            "description": "Get group by ID",
        },
    },
    "Departments": {
        "List Departments": {
            "method": "GET",
            "path": "/api/v1/departments",
            "description": "Get all departments",
        },
    },
    "Locations": {
        "List Locations": {
            "method": "GET",
            "path": "/api/v1/locations",
            "description": "Get all locations",
        },
        "Get Location": {
            "method": "GET",
            "path": "/api/v1/locations/{locationId}",
            "description": "Get location by ID",
        },
        "Create Location": {
            "method": "POST",
            "path": "/api/v1/locations",
            "description": "Create a new location",
            "body": {"name": "", "ipAddresses": [], "vpnCredentials": []},
        },
    },
    "URL Categories": {
        "List URL Categories": {
            "method": "GET",
            "path": "/api/v1/urlCategories",
            "description": "Get all URL categories",
        },
        "Get URL Category": {
            "method": "GET",
            "path": "/api/v1/urlCategories/{categoryId}",
            "description": "Get URL category by ID",
        },
        "Lookup URL": {
            "method": "POST",
            "path": "/api/v1/urlLookup",
            "description": "Lookup URL categorization",
            "body": ["example.com"],
        },
    },
    "Firewall Policies": {
        "List Firewall Rules": {
            "method": "GET",
            "path": "/api/v1/firewallRules",
            "description": "Get all firewall rules",
        },
        "Get Firewall Rule": {
            "method": "GET",
            "path": "/api/v1/firewallRules/{ruleId}",
            "description": "Get firewall rule by ID",
        },
    },
    "Admin Audit Logs": {
        "Get Audit Logs": {
            "method": "GET",
            "path": "/api/v1/adminAuditLogs",
            "description": "Get admin audit logs",
            "params": {"startTime": "", "endTime": "", "page": "1", "pageSize": "100"},
        },
    },
    "Activation": {
        "Get Status": {
            "method": "GET",
            "path": "/api/v1/status",
            "description": "Get activation status",
        },
        "Activate Changes": {
            "method": "POST",
            "path": "/api/v1/status/activate",
            "description": "Activate pending changes",
        },
    },
    "Security Insights": {
        "Get Company Risk Score": {
            "method": "GET",
            "path": "/api/v1/riskScore",
            "description": "Get company-wide risk score and trends",
            "doc_url": "https://help.zscaler.com/zia/api-risk-score",
        },
        "Get Risk Score History": {
            "method": "GET",
            "path": "/api/v1/riskScore/history",
            "description": "Get historical risk score data",
            "params": {"startTime": "", "endTime": ""},
            "doc_url": "https://help.zscaler.com/zia/api-risk-score",
        },
        "Get Insights Summary": {
            "method": "GET",
            "path": "/api/v1/insights/summary",
            "description": "Get security insights summary",
            "doc_url": "https://help.zscaler.com/zia/api-insights",
        },
        "Get Threat Insights": {
            "method": "GET",
            "path": "/api/v1/insights/threats",
            "description": "Get threat-related insights and statistics",
            "params": {"startTime": "", "endTime": ""},
            "doc_url": "https://help.zscaler.com/zia/api-insights",
        },
    },
    "Malware Protection": {
        "Get Malware Summary": {
            "method": "GET",
            "path": "/api/v1/malware/summary",
            "description": "Get malware detection summary (count, types)",
            "params": {"startTime": "", "endTime": ""},
            "doc_url": "https://help.zscaler.com/zia/api-malware-protection",
        },
        "Get Malware Detections": {
            "method": "GET",
            "path": "/api/v1/malware/detections",
            "description": "Get list of detected malware",
            "params": {"startTime": "", "endTime": "", "page": "1", "pageSize": "100"},
            "doc_url": "https://help.zscaler.com/zia/api-malware-protection",
        },
        "Get Blocked Malware": {
            "method": "GET",
            "path": "/api/v1/malware/blocked",
            "description": "Get blocked malware statistics",
            "params": {"startTime": "", "endTime": ""},
            "doc_url": "https://help.zscaler.com/zia/api-malware-protection",
        },
        "Get Malware by Type": {
            "method": "GET",
            "path": "/api/v1/malware/byType",
            "description": "Get malware breakdown by type (virus, trojan, ransomware, etc.)",
            "params": {"startTime": "", "endTime": ""},
            "doc_url": "https://help.zscaler.com/zia/api-malware-protection",
        },
    },
    "Reports": {
        "Get Executive Summary": {
            "method": "GET",
            "path": "/api/v1/reports/executive",
            "description": "Get executive summary report",
            "params": {"startTime": "", "endTime": ""},
            "doc_url": "https://help.zscaler.com/zia/api-reports",
        },
        "Get Web Traffic Report": {
            "method": "GET",
            "path": "/api/v1/reports/webTraffic",
            "description": "Get web traffic analytics",
            "params": {"startTime": "", "endTime": "", "groupBy": "user"},
            "doc_url": "https://help.zscaler.com/zia/api-reports",
        },
        "Get Security Report": {
            "method": "GET",
            "path": "/api/v1/reports/security",
            "description": "Get security events report",
            "params": {"startTime": "", "endTime": ""},
            "doc_url": "https://help.zscaler.com/zia/api-reports",
        },
        "Get Bandwidth Report": {
            "method": "GET",
            "path": "/api/v1/reports/bandwidth",
            "description": "Get bandwidth usage report",
            "params": {"startTime": "", "endTime": "", "groupBy": "department"},
            "doc_url": "https://help.zscaler.com/zia/api-reports",
        },
        "Get Top Users": {
            "method": "GET",
            "path": "/api/v1/reports/topUsers",
            "description": "Get top users by traffic/threats",
            "params": {"startTime": "", "endTime": "", "limit": "10", "metric": "traffic"},
            "doc_url": "https://help.zscaler.com/zia/api-reports",
        },
        "Get Top Applications": {
            "method": "GET",
            "path": "/api/v1/reports/topApps",
            "description": "Get top applications by usage",
            "params": {"startTime": "", "endTime": "", "limit": "10"},
            "doc_url": "https://help.zscaler.com/zia/api-reports",
        },
        "Get Top Threats": {
            "method": "GET",
            "path": "/api/v1/reports/topThreats",
            "description": "Get top threats detected",
            "params": {"startTime": "", "endTime": "", "limit": "10"},
            "doc_url": "https://help.zscaler.com/zia/api-reports",
        },
    },
    "Sandbox": {
        "Get Sandbox Report": {
            "method": "GET",
            "path": "/api/v1/sandbox/report/{md5Hash}",
            "description": "Get sandbox analysis report for a file",
            "doc_url": "https://help.zscaler.com/zia/api-sandbox",
        },
        "Submit File for Analysis": {
            "method": "POST",
            "path": "/api/v1/sandbox/submit",
            "description": "Submit a file for sandbox analysis",
            "body": {"fileType": "", "force": False},
            "doc_url": "https://help.zscaler.com/zia/api-sandbox",
        },
        "Get Sandbox Quota": {
            "method": "GET",
            "path": "/api/v1/sandbox/quota",
            "description": "Get remaining sandbox submission quota",
            "doc_url": "https://help.zscaler.com/zia/api-sandbox",
        },
    },
}

ZPA_ENDPOINTS = {
    "Authentication": {
        "Get Access Token": {
            "method": "POST",
            "path": "/signin",
            "description": "Get OAuth access token",
            "body": {"client_id": "", "client_secret": ""},
        },
    },
    "Application Segments": {
        "List App Segments": {
            "method": "GET",
            "path": "/mgmtconfig/v1/admin/customers/{customerId}/application",
            "description": "Get all application segments",
        },
        "Get App Segment": {
            "method": "GET",
            "path": "/mgmtconfig/v1/admin/customers/{customerId}/application/{appId}",
            "description": "Get application segment by ID",
        },
        "Create App Segment": {
            "method": "POST",
            "path": "/mgmtconfig/v1/admin/customers/{customerId}/application",
            "description": "Create application segment",
            "body": {
                "name": "",
                "domainNames": [],
                "tcpPortRanges": [],
                "segmentGroupId": "",
            },
        },
    },
    "Segment Groups": {
        "List Segment Groups": {
            "method": "GET",
            "path": "/mgmtconfig/v1/admin/customers/{customerId}/segmentGroup",
            "description": "Get all segment groups",
        },
    },
    "Server Groups": {
        "List Server Groups": {
            "method": "GET",
            "path": "/mgmtconfig/v1/admin/customers/{customerId}/serverGroup",
            "description": "Get all server groups",
        },
    },
    "Connectors": {
        "List Connectors": {
            "method": "GET",
            "path": "/mgmtconfig/v1/admin/customers/{customerId}/connector",
            "description": "Get all connectors",
        },
        "Get Connector": {
            "method": "GET",
            "path": "/mgmtconfig/v1/admin/customers/{customerId}/connector/{connectorId}",
            "description": "Get connector by ID",
        },
    },
    "Access Policies": {
        "List Access Policies": {
            "method": "GET",
            "path": "/mgmtconfig/v1/admin/customers/{customerId}/policySet/rules/policyType/ACCESS_POLICY",
            "description": "Get all access policies",
        },
    },
    "SAML Attributes": {
        "List SAML Attributes": {
            "method": "GET",
            "path": "/mgmtconfig/v1/admin/customers/{customerId}/samlAttribute",
            "description": "Get all SAML attributes",
        },
    },
}

ZDX_ENDPOINTS = {
    "Authentication": {
        "Get Access Token": {
            "method": "POST",
            "path": "/v1/oauth/token",
            "description": "Get OAuth access token for ZDX API",
            "body": {"key_id": "", "key_secret": ""},
            "doc_url": "https://help.zscaler.com/zdx/understanding-api-authentication",
        },
    },
    "Administration": {
        "Get Departments": {
            "method": "GET",
            "path": "/v1/administration/departments",
            "description": "Get all departments",
            "doc_url": "https://help.zscaler.com/zdx/administration-api",
        },
        "Get Locations": {
            "method": "GET",
            "path": "/v1/administration/locations",
            "description": "Get all locations",
            "doc_url": "https://help.zscaler.com/zdx/administration-api",
        },
        "Get Geolocations": {
            "method": "GET",
            "path": "/v1/administration/geolocations",
            "description": "Get all geolocations",
            "doc_url": "https://help.zscaler.com/zdx/administration-api",
        },
    },
    "Devices": {
        "List Devices": {
            "method": "GET",
            "path": "/v1/devices",
            "description": "Get all devices with ZDX scores",
            "params": {"since": "", "search": "", "limit": "100", "offset": "0"},
            "doc_url": "https://help.zscaler.com/zdx/devices-api",
        },
        "Get Device": {
            "method": "GET",
            "path": "/v1/devices/{deviceId}",
            "description": "Get device details by ID",
            "doc_url": "https://help.zscaler.com/zdx/devices-api",
        },
        "Get Device Apps": {
            "method": "GET",
            "path": "/v1/devices/{deviceId}/apps",
            "description": "Get applications on a specific device",
            "doc_url": "https://help.zscaler.com/zdx/devices-api",
        },
        "Get Device Web Probes": {
            "method": "GET",
            "path": "/v1/devices/{deviceId}/web-probes",
            "description": "Get web probe results for a device",
            "doc_url": "https://help.zscaler.com/zdx/devices-api",
        },
        "Get Device Health Metrics": {
            "method": "GET",
            "path": "/v1/devices/{deviceId}/health-metrics",
            "description": "Get health metrics for a device",
            "doc_url": "https://help.zscaler.com/zdx/devices-api",
        },
        "Get Device Events": {
            "method": "GET",
            "path": "/v1/devices/{deviceId}/events",
            "description": "Get events for a device",
            "doc_url": "https://help.zscaler.com/zdx/devices-api",
        },
    },
    "Users": {
        "List Users": {
            "method": "GET",
            "path": "/v1/users",
            "description": "Get all users with ZDX scores",
            "params": {"since": "", "search": "", "limit": "100", "offset": "0"},
            "doc_url": "https://help.zscaler.com/zdx/users-api",
        },
        "Get User": {
            "method": "GET",
            "path": "/v1/users/{userId}",
            "description": "Get user details by ID",
            "doc_url": "https://help.zscaler.com/zdx/users-api",
        },
    },
    "Applications": {
        "List Applications": {
            "method": "GET",
            "path": "/v1/apps",
            "description": "Get all monitored applications",
            "doc_url": "https://help.zscaler.com/zdx/apps-api",
        },
        "Get Application": {
            "method": "GET",
            "path": "/v1/apps/{appId}",
            "description": "Get application details by ID",
            "doc_url": "https://help.zscaler.com/zdx/apps-api",
        },
        "Get App Score": {
            "method": "GET",
            "path": "/v1/apps/{appId}/score",
            "description": "Get ZDX score for an application",
            "doc_url": "https://help.zscaler.com/zdx/apps-api",
        },
        "Get App Metrics": {
            "method": "GET",
            "path": "/v1/apps/{appId}/metrics",
            "description": "Get performance metrics for an application",
            "doc_url": "https://help.zscaler.com/zdx/apps-api",
        },
    },
    "Alerts": {
        "List Alerts": {
            "method": "GET",
            "path": "/v1/alerts",
            "description": "Get all active alerts",
            "params": {"since": "", "limit": "100", "offset": "0"},
            "doc_url": "https://help.zscaler.com/zdx/alerts-api",
        },
        "Get Alert": {
            "method": "GET",
            "path": "/v1/alerts/{alertId}",
            "description": "Get alert details by ID",
            "doc_url": "https://help.zscaler.com/zdx/alerts-api",
        },
    },
    "Web Probes": {
        "List Web Probes": {
            "method": "GET",
            "path": "/v1/web-probes",
            "description": "Get all configured web probes",
            "doc_url": "https://help.zscaler.com/zdx/web-probes-api",
        },
    },
    "Deep Traces": {
        "Start Deep Trace": {
            "method": "POST",
            "path": "/v1/devices/{deviceId}/deep-traces",
            "description": "Start a deep trace on a device",
            "body": {"app_id": "", "duration": 300},
            "doc_url": "https://help.zscaler.com/zdx/deep-traces-api",
        },
        "Get Deep Trace Status": {
            "method": "GET",
            "path": "/v1/devices/{deviceId}/deep-traces/{traceId}",
            "description": "Get deep trace status",
            "doc_url": "https://help.zscaler.com/zdx/deep-traces-api",
        },
    },
}

ZCC_ENDPOINTS = {
    "Authentication": {
        "Get Access Token": {
            "method": "POST",
            "path": "/oauth/token",
            "description": "Get OAuth access token for Client Connector API",
            "body": {"client_id": "", "client_secret": ""},
            "doc_url": "https://help.zscaler.com/zcc/understanding-api-authentication",
        },
    },
    "Devices": {
        "List Devices": {
            "method": "GET",
            "path": "/v1/devices",
            "description": "Get all registered devices",
            "params": {"osType": "", "limit": "100", "offset": "0"},
            "doc_url": "https://help.zscaler.com/zcc/devices-api",
        },
        "Get Device": {
            "method": "GET",
            "path": "/v1/devices/{deviceId}",
            "description": "Get device details by ID",
            "doc_url": "https://help.zscaler.com/zcc/devices-api",
        },
        "Get Device by UDID": {
            "method": "GET",
            "path": "/v1/devices/udid/{udid}",
            "description": "Get device by UDID",
            "doc_url": "https://help.zscaler.com/zcc/devices-api",
        },
        "Force Remove Device": {
            "method": "POST",
            "path": "/v1/devices/{deviceId}/force-remove",
            "description": "Force remove a device",
            "doc_url": "https://help.zscaler.com/zcc/devices-api",
        },
    },
    "Compliance": {
        "Get Compliance Status": {
            "method": "GET",
            "path": "/v1/devices/{deviceId}/compliance",
            "description": "Get device compliance status",
            "doc_url": "https://help.zscaler.com/zcc/compliance-api",
        },
        "List Non-Compliant Devices": {
            "method": "GET",
            "path": "/v1/compliance/non-compliant",
            "description": "Get all non-compliant devices",
            "params": {"limit": "100", "offset": "0"},
            "doc_url": "https://help.zscaler.com/zcc/compliance-api",
        },
        "Get Compliance Summary": {
            "method": "GET",
            "path": "/v1/compliance/summary",
            "description": "Get compliance summary statistics",
            "doc_url": "https://help.zscaler.com/zcc/compliance-api",
        },
        "Get Posture Profiles": {
            "method": "GET",
            "path": "/v1/compliance/posture-profiles",
            "description": "Get all device posture profiles",
            "doc_url": "https://help.zscaler.com/zcc/compliance-api",
        },
    },
    "Software": {
        "Get Software Versions": {
            "method": "GET",
            "path": "/v1/software/versions",
            "description": "Get available ZCC software versions",
            "doc_url": "https://help.zscaler.com/zcc/software-api",
        },
        "Get Device Software": {
            "method": "GET",
            "path": "/v1/devices/{deviceId}/software",
            "description": "Get software version on a device",
            "doc_url": "https://help.zscaler.com/zcc/software-api",
        },
        "Trigger Software Update": {
            "method": "POST",
            "path": "/v1/devices/{deviceId}/software/update",
            "description": "Trigger software update on a device",
            "body": {"version": ""},
            "doc_url": "https://help.zscaler.com/zcc/software-api",
        },
    },
    "Enrollment": {
        "Get Enrollment Tokens": {
            "method": "GET",
            "path": "/v1/enrollment/tokens",
            "description": "Get all enrollment tokens",
            "doc_url": "https://help.zscaler.com/zcc/enrollment-api",
        },
        "Create Enrollment Token": {
            "method": "POST",
            "path": "/v1/enrollment/tokens",
            "description": "Create new enrollment token",
            "body": {"name": "", "maxDevices": 100},
            "doc_url": "https://help.zscaler.com/zcc/enrollment-api",
        },
        "Delete Enrollment Token": {
            "method": "DELETE",
            "path": "/v1/enrollment/tokens/{tokenId}",
            "description": "Delete an enrollment token",
            "doc_url": "https://help.zscaler.com/zcc/enrollment-api",
        },
    },
    "Troubleshooting": {
        "Get Connection Health": {
            "method": "GET",
            "path": "/v1/devices/{deviceId}/health",
            "description": "Get connection health for a device",
            "doc_url": "https://help.zscaler.com/zcc/troubleshooting-api",
        },
        "Get Device Logs": {
            "method": "GET",
            "path": "/v1/devices/{deviceId}/logs",
            "description": "Get diagnostic logs from a device",
            "doc_url": "https://help.zscaler.com/zcc/troubleshooting-api",
        },
        "Request Log Upload": {
            "method": "POST",
            "path": "/v1/devices/{deviceId}/logs/upload",
            "description": "Request device to upload logs",
            "doc_url": "https://help.zscaler.com/zcc/troubleshooting-api",
        },
    },
    "App Profiles": {
        "List App Profiles": {
            "method": "GET",
            "path": "/v1/profiles",
            "description": "Get all ZCC app profiles",
            "doc_url": "https://help.zscaler.com/zscaler-client-connector/about-zscaler-client-connector-app-profiles",
        },
        "Get App Profile": {
            "method": "GET",
            "path": "/v1/profiles/{profileId}",
            "description": "Get app profile by ID",
            "doc_url": "https://help.zscaler.com/zscaler-client-connector/about-zscaler-client-connector-app-profiles",
        },
        "Get Profile Assignments": {
            "method": "GET",
            "path": "/v1/profiles/{profileId}/assignments",
            "description": "Get users/groups assigned to profile",
            "doc_url": "https://help.zscaler.com/zscaler-client-connector/about-zscaler-client-connector-app-profiles",
        },
    },
    "Enrolled Devices": {
        "List Enrolled Devices": {
            "method": "GET",
            "path": "/v1/enrolled-devices",
            "description": "Get all enrolled devices with details",
            "params": {"page": "1", "pageSize": "100", "osType": "", "userName": ""},
            "doc_url": "https://help.zscaler.com/zscaler-client-connector/about-enrolled-devices",
        },
        "Get Enrolled Device Details": {
            "method": "GET",
            "path": "/v1/enrolled-devices/{machineId}",
            "description": "Get detailed info for enrolled device",
            "doc_url": "https://help.zscaler.com/zscaler-client-connector/about-enrolled-devices",
        },
        "Bulk Force Remove": {
            "method": "POST",
            "path": "/v1/enrolled-devices/bulk-remove",
            "description": "Force remove multiple devices",
            "body": {"machineIds": []},
            "doc_url": "https://help.zscaler.com/zscaler-client-connector/about-enrolled-devices",
        },
    },
    "API Keys": {
        "List API Keys": {
            "method": "GET",
            "path": "/v1/api-keys",
            "description": "List all API keys",
            "doc_url": "https://help.zscaler.com/zscaler-client-connector/about-api-key-management",
        },
        "Get API Key": {
            "method": "GET",
            "path": "/v1/api-keys/{keyId}",
            "description": "Get API key details",
            "doc_url": "https://help.zscaler.com/zscaler-client-connector/about-api-key-management",
        },
        "Create API Key": {
            "method": "POST",
            "path": "/v1/api-keys",
            "description": "Create new API key",
            "body": {"name": "", "description": "", "permissions": []},
            "doc_url": "https://help.zscaler.com/zscaler-client-connector/about-api-key-management",
        },
        "Revoke API Key": {
            "method": "DELETE",
            "path": "/v1/api-keys/{keyId}",
            "description": "Revoke an API key",
            "doc_url": "https://help.zscaler.com/zscaler-client-connector/about-api-key-management",
        },
    },
}

# ZIdentity API Endpoints (Identity and Access Management)
ZIDENTITY_ENDPOINTS = {
    "Authentication": {
        "Get OAuth Token": {
            "method": "POST",
            "path": "/oauth2/v1/token",
            "description": "Get OAuth 2.0 access token",
            "body": {"client_id": "", "client_secret": "", "grant_type": "client_credentials"},
            "doc_url": "https://help.zscaler.com/zidentity/getting-started-zidentity-api",
        },
        "Revoke Token": {
            "method": "POST",
            "path": "/oauth2/v1/revoke",
            "description": "Revoke an access token",
            "body": {"token": ""},
            "doc_url": "https://help.zscaler.com/zidentity/getting-started-zidentity-api",
        },
    },
    "Users": {
        "List Users": {
            "method": "GET",
            "path": "/api/v1/users",
            "description": "List all users",
            "params": {"page": "1", "pageSize": "100", "search": ""},
            "doc_url": "https://help.zscaler.com/zidentity/user-management-api",
        },
        "Get User": {
            "method": "GET",
            "path": "/api/v1/users/{userId}",
            "description": "Get user by ID",
            "doc_url": "https://help.zscaler.com/zidentity/user-management-api",
        },
        "Create User": {
            "method": "POST",
            "path": "/api/v1/users",
            "description": "Create a new user",
            "body": {"userName": "", "email": "", "firstName": "", "lastName": "", "active": True},
            "doc_url": "https://help.zscaler.com/zidentity/user-management-api",
        },
        "Update User": {
            "method": "PUT",
            "path": "/api/v1/users/{userId}",
            "description": "Update an existing user",
            "body": {"userName": "", "email": "", "firstName": "", "lastName": "", "active": True},
            "doc_url": "https://help.zscaler.com/zidentity/user-management-api",
        },
        "Delete User": {
            "method": "DELETE",
            "path": "/api/v1/users/{userId}",
            "description": "Delete a user",
            "doc_url": "https://help.zscaler.com/zidentity/user-management-api",
        },
    },
    "Groups": {
        "List Groups": {
            "method": "GET",
            "path": "/api/v1/groups",
            "description": "List all groups",
            "params": {"page": "1", "pageSize": "100"},
            "doc_url": "https://help.zscaler.com/zidentity/group-management-api",
        },
        "Get Group": {
            "method": "GET",
            "path": "/api/v1/groups/{groupId}",
            "description": "Get group by ID",
            "doc_url": "https://help.zscaler.com/zidentity/group-management-api",
        },
        "Create Group": {
            "method": "POST",
            "path": "/api/v1/groups",
            "description": "Create a new group",
            "body": {"displayName": "", "description": ""},
            "doc_url": "https://help.zscaler.com/zidentity/group-management-api",
        },
        "Update Group": {
            "method": "PUT",
            "path": "/api/v1/groups/{groupId}",
            "description": "Update a group",
            "body": {"displayName": "", "description": ""},
            "doc_url": "https://help.zscaler.com/zidentity/group-management-api",
        },
        "Delete Group": {
            "method": "DELETE",
            "path": "/api/v1/groups/{groupId}",
            "description": "Delete a group",
            "doc_url": "https://help.zscaler.com/zidentity/group-management-api",
        },
        "Add User to Group": {
            "method": "POST",
            "path": "/api/v1/groups/{groupId}/members",
            "description": "Add user to group",
            "body": {"userId": ""},
            "doc_url": "https://help.zscaler.com/zidentity/group-management-api",
        },
        "Remove User from Group": {
            "method": "DELETE",
            "path": "/api/v1/groups/{groupId}/members/{userId}",
            "description": "Remove user from group",
            "doc_url": "https://help.zscaler.com/zidentity/group-management-api",
        },
    },
    "SCIM": {
        "List SCIM Users": {
            "method": "GET",
            "path": "/scim/v2/Users",
            "description": "List users via SCIM 2.0",
            "params": {"startIndex": "1", "count": "100", "filter": ""},
            "doc_url": "https://help.zscaler.com/zidentity/scim-api",
        },
        "Get SCIM User": {
            "method": "GET",
            "path": "/scim/v2/Users/{userId}",
            "description": "Get user via SCIM 2.0",
            "doc_url": "https://help.zscaler.com/zidentity/scim-api",
        },
        "Create SCIM User": {
            "method": "POST",
            "path": "/scim/v2/Users",
            "description": "Create user via SCIM 2.0",
            "body": {"schemas": ["urn:ietf:params:scim:schemas:core:2.0:User"], "userName": "", "name": {"givenName": "", "familyName": ""}, "emails": [{"value": "", "primary": True}]},
            "doc_url": "https://help.zscaler.com/zidentity/scim-api",
        },
        "List SCIM Groups": {
            "method": "GET",
            "path": "/scim/v2/Groups",
            "description": "List groups via SCIM 2.0",
            "params": {"startIndex": "1", "count": "100"},
            "doc_url": "https://help.zscaler.com/zidentity/scim-api",
        },
    },
    "Identity Providers": {
        "List IdPs": {
            "method": "GET",
            "path": "/api/v1/idp",
            "description": "List all identity providers",
            "doc_url": "https://help.zscaler.com/zidentity/idp-api",
        },
        "Get IdP": {
            "method": "GET",
            "path": "/api/v1/idp/{idpId}",
            "description": "Get identity provider by ID",
            "doc_url": "https://help.zscaler.com/zidentity/idp-api",
        },
        "Get IdP Metadata": {
            "method": "GET",
            "path": "/api/v1/idp/{idpId}/metadata",
            "description": "Get SAML metadata for IdP",
            "doc_url": "https://help.zscaler.com/zidentity/idp-api",
        },
    },
    "API Clients": {
        "List API Clients": {
            "method": "GET",
            "path": "/api/v1/clients",
            "description": "List all API clients",
            "doc_url": "https://help.zscaler.com/zidentity/api-clients",
        },
        "Get API Client": {
            "method": "GET",
            "path": "/api/v1/clients/{clientId}",
            "description": "Get API client by ID",
            "doc_url": "https://help.zscaler.com/zidentity/api-clients",
        },
        "Create API Client": {
            "method": "POST",
            "path": "/api/v1/clients",
            "description": "Create a new API client",
            "body": {"name": "", "description": "", "scopes": []},
            "doc_url": "https://help.zscaler.com/zidentity/api-clients",
        },
        "Rotate Client Secret": {
            "method": "POST",
            "path": "/api/v1/clients/{clientId}/rotate-secret",
            "description": "Rotate API client secret",
            "doc_url": "https://help.zscaler.com/zidentity/api-clients",
        },
    },
    "Audit Logs": {
        "Get Audit Logs": {
            "method": "GET",
            "path": "/api/v1/audit/logs",
            "description": "Get audit logs",
            "params": {"startTime": "", "endTime": "", "page": "1", "pageSize": "100"},
            "doc_url": "https://help.zscaler.com/zidentity/audit-api",
        },
    },
}

# ZTW API Endpoints (Zero Trust Workloads / Cloud Branch Connector)
ZTW_ENDPOINTS = {
    "Authentication": {
        "Get OAuth Token": {
            "method": "POST",
            "path": "/oauth/token",
            "description": "Get OAuth access token for ZTW API",
            "body": {"client_id": "", "client_secret": "", "grant_type": "client_credentials"},
            "doc_url": "https://help.zscaler.com/cloud-branch-connector/getting-started-api",
        },
    },
    "Branch Connectors": {
        "List Branch Connectors": {
            "method": "GET",
            "path": "/api/v1/branch-connectors",
            "description": "List all branch connectors",
            "params": {"page": "1", "pageSize": "100"},
            "doc_url": "https://help.zscaler.com/cloud-branch-connector/branch-connector-api",
        },
        "Get Branch Connector": {
            "method": "GET",
            "path": "/api/v1/branch-connectors/{connectorId}",
            "description": "Get branch connector details",
            "doc_url": "https://help.zscaler.com/cloud-branch-connector/branch-connector-api",
        },
        "Create Branch Connector": {
            "method": "POST",
            "path": "/api/v1/branch-connectors",
            "description": "Create a new branch connector",
            "body": {"name": "", "description": "", "locationId": ""},
            "doc_url": "https://help.zscaler.com/cloud-branch-connector/branch-connector-api",
        },
        "Update Branch Connector": {
            "method": "PUT",
            "path": "/api/v1/branch-connectors/{connectorId}",
            "description": "Update branch connector",
            "body": {"name": "", "description": ""},
            "doc_url": "https://help.zscaler.com/cloud-branch-connector/branch-connector-api",
        },
        "Delete Branch Connector": {
            "method": "DELETE",
            "path": "/api/v1/branch-connectors/{connectorId}",
            "description": "Delete branch connector",
            "doc_url": "https://help.zscaler.com/cloud-branch-connector/branch-connector-api",
        },
    },
    "Connector Groups": {
        "List Connector Groups": {
            "method": "GET",
            "path": "/api/v1/connector-groups",
            "description": "List all connector groups",
            "doc_url": "https://help.zscaler.com/cloud-branch-connector/connector-group-api",
        },
        "Get Connector Group": {
            "method": "GET",
            "path": "/api/v1/connector-groups/{groupId}",
            "description": "Get connector group details",
            "doc_url": "https://help.zscaler.com/cloud-branch-connector/connector-group-api",
        },
        "Create Connector Group": {
            "method": "POST",
            "path": "/api/v1/connector-groups",
            "description": "Create a connector group",
            "body": {"name": "", "description": "", "enabled": True},
            "doc_url": "https://help.zscaler.com/cloud-branch-connector/connector-group-api",
        },
    },
    "Locations": {
        "List Locations": {
            "method": "GET",
            "path": "/api/v1/locations",
            "description": "List all locations",
            "doc_url": "https://help.zscaler.com/cloud-branch-connector/location-api",
        },
        "Get Location": {
            "method": "GET",
            "path": "/api/v1/locations/{locationId}",
            "description": "Get location details",
            "doc_url": "https://help.zscaler.com/cloud-branch-connector/location-api",
        },
        "Create Location": {
            "method": "POST",
            "path": "/api/v1/locations",
            "description": "Create a new location",
            "body": {"name": "", "address": "", "latitude": 0, "longitude": 0},
            "doc_url": "https://help.zscaler.com/cloud-branch-connector/location-api",
        },
    },
    "Service Edges": {
        "List Service Edges": {
            "method": "GET",
            "path": "/api/v1/service-edges",
            "description": "List all service edges",
            "doc_url": "https://help.zscaler.com/cloud-branch-connector/service-edge-api",
        },
        "Get Service Edge": {
            "method": "GET",
            "path": "/api/v1/service-edges/{edgeId}",
            "description": "Get service edge details",
            "doc_url": "https://help.zscaler.com/cloud-branch-connector/service-edge-api",
        },
        "Get Service Edge Health": {
            "method": "GET",
            "path": "/api/v1/service-edges/{edgeId}/health",
            "description": "Get service edge health status",
            "doc_url": "https://help.zscaler.com/cloud-branch-connector/service-edge-api",
        },
    },
    "Traffic Forwarding": {
        "List Forwarding Rules": {
            "method": "GET",
            "path": "/api/v1/forwarding-rules",
            "description": "List traffic forwarding rules",
            "doc_url": "https://help.zscaler.com/cloud-branch-connector/forwarding-api",
        },
        "Get Forwarding Rule": {
            "method": "GET",
            "path": "/api/v1/forwarding-rules/{ruleId}",
            "description": "Get forwarding rule details",
            "doc_url": "https://help.zscaler.com/cloud-branch-connector/forwarding-api",
        },
        "Create Forwarding Rule": {
            "method": "POST",
            "path": "/api/v1/forwarding-rules",
            "description": "Create a forwarding rule",
            "body": {"name": "", "order": 1, "action": "FORWARD", "conditions": []},
            "doc_url": "https://help.zscaler.com/cloud-branch-connector/forwarding-api",
        },
    },
}

# ZWA API Endpoints (Workflow Automation)
ZWA_ENDPOINTS = {
    "Authentication": {
        "Get OAuth Token": {
            "method": "POST",
            "path": "/oauth/token",
            "description": "Get OAuth access token for Workflow Automation",
            "body": {"client_id": "", "client_secret": "", "grant_type": "client_credentials"},
            "doc_url": "https://help.zscaler.com/workflow-automation/getting-started-api",
        },
    },
    "Workflows": {
        "List Workflows": {
            "method": "GET",
            "path": "/api/v1/workflows",
            "description": "List all workflows",
            "params": {"page": "1", "pageSize": "100", "status": ""},
            "doc_url": "https://help.zscaler.com/workflow-automation/workflow-api",
        },
        "Get Workflow": {
            "method": "GET",
            "path": "/api/v1/workflows/{workflowId}",
            "description": "Get workflow details",
            "doc_url": "https://help.zscaler.com/workflow-automation/workflow-api",
        },
        "Create Workflow": {
            "method": "POST",
            "path": "/api/v1/workflows",
            "description": "Create a new workflow",
            "body": {"name": "", "description": "", "trigger": {}, "actions": []},
            "doc_url": "https://help.zscaler.com/workflow-automation/workflow-api",
        },
        "Update Workflow": {
            "method": "PUT",
            "path": "/api/v1/workflows/{workflowId}",
            "description": "Update a workflow",
            "body": {"name": "", "description": "", "enabled": True},
            "doc_url": "https://help.zscaler.com/workflow-automation/workflow-api",
        },
        "Delete Workflow": {
            "method": "DELETE",
            "path": "/api/v1/workflows/{workflowId}",
            "description": "Delete a workflow",
            "doc_url": "https://help.zscaler.com/workflow-automation/workflow-api",
        },
        "Enable Workflow": {
            "method": "POST",
            "path": "/api/v1/workflows/{workflowId}/enable",
            "description": "Enable a workflow",
            "doc_url": "https://help.zscaler.com/workflow-automation/workflow-api",
        },
        "Disable Workflow": {
            "method": "POST",
            "path": "/api/v1/workflows/{workflowId}/disable",
            "description": "Disable a workflow",
            "doc_url": "https://help.zscaler.com/workflow-automation/workflow-api",
        },
        "Execute Workflow": {
            "method": "POST",
            "path": "/api/v1/workflows/{workflowId}/execute",
            "description": "Manually execute a workflow",
            "body": {"parameters": {}},
            "doc_url": "https://help.zscaler.com/workflow-automation/workflow-api",
        },
    },
    "Executions": {
        "List Executions": {
            "method": "GET",
            "path": "/api/v1/executions",
            "description": "List workflow executions",
            "params": {"workflowId": "", "status": "", "startTime": "", "endTime": ""},
            "doc_url": "https://help.zscaler.com/workflow-automation/execution-api",
        },
        "Get Execution": {
            "method": "GET",
            "path": "/api/v1/executions/{executionId}",
            "description": "Get execution details",
            "doc_url": "https://help.zscaler.com/workflow-automation/execution-api",
        },
        "Get Execution Logs": {
            "method": "GET",
            "path": "/api/v1/executions/{executionId}/logs",
            "description": "Get execution logs",
            "doc_url": "https://help.zscaler.com/workflow-automation/execution-api",
        },
        "Cancel Execution": {
            "method": "POST",
            "path": "/api/v1/executions/{executionId}/cancel",
            "description": "Cancel a running execution",
            "doc_url": "https://help.zscaler.com/workflow-automation/execution-api",
        },
    },
    "Triggers": {
        "List Trigger Types": {
            "method": "GET",
            "path": "/api/v1/triggers/types",
            "description": "List available trigger types",
            "doc_url": "https://help.zscaler.com/workflow-automation/trigger-api",
        },
        "List Webhooks": {
            "method": "GET",
            "path": "/api/v1/webhooks",
            "description": "List webhook triggers",
            "doc_url": "https://help.zscaler.com/workflow-automation/trigger-api",
        },
        "Create Webhook": {
            "method": "POST",
            "path": "/api/v1/webhooks",
            "description": "Create a webhook trigger",
            "body": {"name": "", "workflowId": ""},
            "doc_url": "https://help.zscaler.com/workflow-automation/trigger-api",
        },
    },
    "Actions": {
        "List Action Types": {
            "method": "GET",
            "path": "/api/v1/actions/types",
            "description": "List available action types",
            "doc_url": "https://help.zscaler.com/workflow-automation/action-api",
        },
        "List Integrations": {
            "method": "GET",
            "path": "/api/v1/integrations",
            "description": "List available integrations",
            "doc_url": "https://help.zscaler.com/workflow-automation/integration-api",
        },
    },
    "Templates": {
        "List Templates": {
            "method": "GET",
            "path": "/api/v1/templates",
            "description": "List workflow templates",
            "doc_url": "https://help.zscaler.com/workflow-automation/template-api",
        },
        "Get Template": {
            "method": "GET",
            "path": "/api/v1/templates/{templateId}",
            "description": "Get template details",
            "doc_url": "https://help.zscaler.com/workflow-automation/template-api",
        },
        "Create from Template": {
            "method": "POST",
            "path": "/api/v1/templates/{templateId}/instantiate",
            "description": "Create workflow from template",
            "body": {"name": "", "parameters": {}},
            "doc_url": "https://help.zscaler.com/workflow-automation/template-api",
        },
    },
}

# EASM API Endpoints (External Attack Surface Management)
EASM_ENDPOINTS = {
    "Authentication": {
        "Get OAuth Token": {
            "method": "POST",
            "path": "/oauth/token",
            "description": "Get OAuth access token for EASM API",
            "body": {"client_id": "", "client_secret": "", "grant_type": "client_credentials"},
            "doc_url": "https://help.zscaler.com/easm/getting-started-api",
        },
    },
    "Assets": {
        "List Assets": {
            "method": "GET",
            "path": "/api/v1/assets",
            "description": "List all discovered assets",
            "params": {"page": "1", "pageSize": "100", "type": "", "riskLevel": ""},
            "doc_url": "https://help.zscaler.com/easm/assets-api",
        },
        "Get Asset": {
            "method": "GET",
            "path": "/api/v1/assets/{assetId}",
            "description": "Get asset details",
            "doc_url": "https://help.zscaler.com/easm/assets-api",
        },
        "Get Asset History": {
            "method": "GET",
            "path": "/api/v1/assets/{assetId}/history",
            "description": "Get asset change history",
            "doc_url": "https://help.zscaler.com/easm/assets-api",
        },
        "Update Asset Tags": {
            "method": "PUT",
            "path": "/api/v1/assets/{assetId}/tags",
            "description": "Update asset tags",
            "body": {"tags": []},
            "doc_url": "https://help.zscaler.com/easm/assets-api",
        },
    },
    "Domains": {
        "List Domains": {
            "method": "GET",
            "path": "/api/v1/domains",
            "description": "List all monitored domains",
            "params": {"page": "1", "pageSize": "100"},
            "doc_url": "https://help.zscaler.com/easm/domains-api",
        },
        "Get Domain": {
            "method": "GET",
            "path": "/api/v1/domains/{domainId}",
            "description": "Get domain details",
            "doc_url": "https://help.zscaler.com/easm/domains-api",
        },
        "Add Domain": {
            "method": "POST",
            "path": "/api/v1/domains",
            "description": "Add a domain to monitor",
            "body": {"domain": "", "autoDiscover": True},
            "doc_url": "https://help.zscaler.com/easm/domains-api",
        },
        "Remove Domain": {
            "method": "DELETE",
            "path": "/api/v1/domains/{domainId}",
            "description": "Remove a monitored domain",
            "doc_url": "https://help.zscaler.com/easm/domains-api",
        },
        "Get Subdomains": {
            "method": "GET",
            "path": "/api/v1/domains/{domainId}/subdomains",
            "description": "Get discovered subdomains",
            "doc_url": "https://help.zscaler.com/easm/domains-api",
        },
    },
    "IP Ranges": {
        "List IP Ranges": {
            "method": "GET",
            "path": "/api/v1/ip-ranges",
            "description": "List monitored IP ranges",
            "doc_url": "https://help.zscaler.com/easm/ip-api",
        },
        "Get IP Range": {
            "method": "GET",
            "path": "/api/v1/ip-ranges/{rangeId}",
            "description": "Get IP range details",
            "doc_url": "https://help.zscaler.com/easm/ip-api",
        },
        "Add IP Range": {
            "method": "POST",
            "path": "/api/v1/ip-ranges",
            "description": "Add an IP range to monitor",
            "body": {"cidr": "", "description": ""},
            "doc_url": "https://help.zscaler.com/easm/ip-api",
        },
        "Get IPs in Range": {
            "method": "GET",
            "path": "/api/v1/ip-ranges/{rangeId}/ips",
            "description": "Get discovered IPs in range",
            "doc_url": "https://help.zscaler.com/easm/ip-api",
        },
    },
    "Vulnerabilities": {
        "List Vulnerabilities": {
            "method": "GET",
            "path": "/api/v1/vulnerabilities",
            "description": "List all discovered vulnerabilities",
            "params": {"severity": "", "status": "", "page": "1", "pageSize": "100"},
            "doc_url": "https://help.zscaler.com/easm/vulnerabilities-api",
        },
        "Get Vulnerability": {
            "method": "GET",
            "path": "/api/v1/vulnerabilities/{vulnId}",
            "description": "Get vulnerability details",
            "doc_url": "https://help.zscaler.com/easm/vulnerabilities-api",
        },
        "Update Vulnerability Status": {
            "method": "PUT",
            "path": "/api/v1/vulnerabilities/{vulnId}/status",
            "description": "Update vulnerability status",
            "body": {"status": "ACKNOWLEDGED", "notes": ""},
            "doc_url": "https://help.zscaler.com/easm/vulnerabilities-api",
        },
        "Get Affected Assets": {
            "method": "GET",
            "path": "/api/v1/vulnerabilities/{vulnId}/assets",
            "description": "Get assets affected by vulnerability",
            "doc_url": "https://help.zscaler.com/easm/vulnerabilities-api",
        },
    },
    "Risks": {
        "Get Risk Summary": {
            "method": "GET",
            "path": "/api/v1/risks/summary",
            "description": "Get overall risk summary",
            "doc_url": "https://help.zscaler.com/easm/risks-api",
        },
        "Get Risk Trends": {
            "method": "GET",
            "path": "/api/v1/risks/trends",
            "description": "Get risk trends over time",
            "params": {"startDate": "", "endDate": ""},
            "doc_url": "https://help.zscaler.com/easm/risks-api",
        },
        "List Risk Factors": {
            "method": "GET",
            "path": "/api/v1/risks/factors",
            "description": "List contributing risk factors",
            "doc_url": "https://help.zscaler.com/easm/risks-api",
        },
    },
    "Certificates": {
        "List Certificates": {
            "method": "GET",
            "path": "/api/v1/certificates",
            "description": "List discovered SSL/TLS certificates",
            "params": {"status": "", "expiringWithin": ""},
            "doc_url": "https://help.zscaler.com/easm/certificates-api",
        },
        "Get Certificate": {
            "method": "GET",
            "path": "/api/v1/certificates/{certId}",
            "description": "Get certificate details",
            "doc_url": "https://help.zscaler.com/easm/certificates-api",
        },
        "Get Expiring Certificates": {
            "method": "GET",
            "path": "/api/v1/certificates/expiring",
            "description": "Get certificates expiring soon",
            "params": {"days": "30"},
            "doc_url": "https://help.zscaler.com/easm/certificates-api",
        },
    },
    "Scans": {
        "List Scans": {
            "method": "GET",
            "path": "/api/v1/scans",
            "description": "List all scans",
            "doc_url": "https://help.zscaler.com/easm/scans-api",
        },
        "Get Scan": {
            "method": "GET",
            "path": "/api/v1/scans/{scanId}",
            "description": "Get scan details",
            "doc_url": "https://help.zscaler.com/easm/scans-api",
        },
        "Trigger Scan": {
            "method": "POST",
            "path": "/api/v1/scans",
            "description": "Trigger a new scan",
            "body": {"type": "FULL", "targets": []},
            "doc_url": "https://help.zscaler.com/easm/scans-api",
        },
        "Get Scan Results": {
            "method": "GET",
            "path": "/api/v1/scans/{scanId}/results",
            "description": "Get scan results",
            "doc_url": "https://help.zscaler.com/easm/scans-api",
        },
    },
    "Reports": {
        "List Reports": {
            "method": "GET",
            "path": "/api/v1/reports",
            "description": "List generated reports",
            "doc_url": "https://help.zscaler.com/easm/reports-api",
        },
        "Generate Report": {
            "method": "POST",
            "path": "/api/v1/reports",
            "description": "Generate a new report",
            "body": {"type": "EXECUTIVE", "format": "PDF"},
            "doc_url": "https://help.zscaler.com/easm/reports-api",
        },
        "Download Report": {
            "method": "GET",
            "path": "/api/v1/reports/{reportId}/download",
            "description": "Download a report",
            "doc_url": "https://help.zscaler.com/easm/reports-api",
        },
    },
}

# OneAPI Unified Endpoints (v3 framework via ZIdentity OAuth2)
# Base URL: https://api.zsapi.net (production) or https://api.{cloud}.zsapi.net
# Auth URL: https://{vanity_domain}.zslogin.net/oauth2/v1/token
ONEAPI_ENDPOINTS = {
    "Authentication": {
        "Get OAuth Token": {
            "method": "POST",
            "path": "/oauth2/v1/token",
            "description": "Get OAuth 2.0 access token via ZIdentity (uses vanity domain auth URL)",
            "body": {"client_id": "", "client_secret": "", "grant_type": "client_credentials", "audience": "https://api.zscaler.com"},
            "doc_url": "https://help.zscaler.com/oneapi/understanding-oneapi",
            "auth_endpoint": True,
        },
    },
    "ZIA Endpoints": {
        "List URL Categories": {
            "method": "GET",
            "path": "/zia/api/v1/urlCategories",
            "description": "List all URL categories",
        },
        "Get URL Category": {
            "method": "GET",
            "path": "/zia/api/v1/urlCategories/{id}",
            "description": "Get URL category by ID",
        },
        "List Firewall Rules": {
            "method": "GET",
            "path": "/zia/api/v1/webApplicationRules",
            "description": "List firewall filtering rules",
        },
        "List DLP Dictionaries": {
            "method": "GET",
            "path": "/zia/api/v1/dlpDictionaries",
            "description": "List DLP dictionaries",
        },
        "List URL Filtering Rules": {
            "method": "GET",
            "path": "/zia/api/v1/urlFilteringRules",
            "description": "List URL filtering rules",
        },
        "List Locations": {
            "method": "GET",
            "path": "/zia/api/v1/locations",
            "description": "List all locations",
        },
        "List Users": {
            "method": "GET",
            "path": "/zia/api/v1/users",
            "description": "List all users",
            "params": {"page": "1", "pageSize": "100"},
        },
        "Activate Changes": {
            "method": "POST",
            "path": "/zia/api/v1/status/activate",
            "description": "Activate configuration changes",
        },
    },
    "ZPA Endpoints": {
        "List Application Segments": {
            "method": "GET",
            "path": "/zpa/mgmtconfig/v1/admin/customers/{customerId}/application",
            "description": "List all application segments",
        },
        "List Server Groups": {
            "method": "GET",
            "path": "/zpa/mgmtconfig/v1/admin/customers/{customerId}/serverGroup",
            "description": "List all server groups",
        },
        "List Connectors": {
            "method": "GET",
            "path": "/zpa/mgmtconfig/v1/admin/customers/{customerId}/connector",
            "description": "List all app connectors",
        },
        "List Connector Groups": {
            "method": "GET",
            "path": "/zpa/mgmtconfig/v1/admin/customers/{customerId}/appConnectorGroup",
            "description": "List all connector groups",
        },
        "List Segment Groups": {
            "method": "GET",
            "path": "/zpa/mgmtconfig/v1/admin/customers/{customerId}/segmentGroup",
            "description": "List all segment groups",
        },
        "List Access Policies": {
            "method": "GET",
            "path": "/zpa/mgmtconfig/v1/admin/customers/{customerId}/policySet/rules/policyType/ACCESS_POLICY",
            "description": "List access policy rules",
        },
    },
    "ZCC Endpoints": {
        "List Devices": {
            "method": "GET",
            "path": "/zcc/papi/public/v1/getDevices",
            "description": "Get all enrolled devices",
            "params": {"page": "1", "pageSize": "100"},
        },
        "Get Device by ID": {
            "method": "GET",
            "path": "/zcc/papi/public/v1/getDevices/{deviceId}",
            "description": "Get device by ID",
        },
        "Force Remove Device": {
            "method": "POST",
            "path": "/zcc/papi/public/v1/removeDevices",
            "description": "Force remove a device",
            "body": {"clientConnectorVersion": [], "deviceType": 0, "osType": 0, "udids": ""},
        },
    },
    "ZIdentity Admin Endpoints": {
        "List Users": {
            "method": "GET",
            "path": "/admin/api/v1/users",
            "description": "List all ZIdentity users",
            "params": {"page": "1", "pageSize": "100"},
            "use_zidentity_base": True,
        },
        "List Groups": {
            "method": "GET",
            "path": "/admin/api/v1/groups",
            "description": "List all ZIdentity groups",
            "params": {"page": "1", "pageSize": "100"},
            "use_zidentity_base": True,
        },
        "List API Clients": {
            "method": "GET",
            "path": "/admin/api/v1/apiClients",
            "description": "List all API clients",
            "use_zidentity_base": True,
        },
    },
}


def _resource_path(relative_path: str) -> Path:
    """Resolve a bundled resource both from source and a PyInstaller build."""
    bundle_root = Path(getattr(sys, "_MEIPASS", Path(__file__).resolve().parent))
    return bundle_root / relative_path


def _load_automation_hub_catalog() -> List[Dict[str, Any]]:
    """Read the bundled Automation Hub catalog."""
    catalog_path = _resource_path("data/zscaler_api_catalog.json")
    try:
        return json.loads(catalog_path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as error:
        print(f"Unable to load Automation Hub catalog: {error}", file=sys.stderr)
        return []


def _load_graphql_catalog() -> List[Dict[str, Any]]:
    """Read the bundled, documentation-derived ZInsights GraphQL schema catalog."""
    catalog_path = _resource_path("data/zscaler_graphql_catalog.json")
    try:
        catalog = json.loads(catalog_path.read_text(encoding="utf-8"))
        return catalog if isinstance(catalog, list) else []
    except (OSError, json.JSONDecodeError) as error:
        print(f"Unable to load GraphQL catalog: {error}", file=sys.stderr)
        return []


def _load_automation_hub_endpoints() -> Dict[str, Dict[str, Dict[str, Any]]]:
    """Load every usable REST endpoint published by Automation Hub."""
    catalog = AUTOMATION_HUB_CATALOG
    if not catalog:
        return ONEAPI_ENDPOINTS

    endpoints: Dict[str, Dict[str, Dict[str, Any]]] = {}
    for entry in catalog:
        product = entry.get("product", "other").upper()
        category = entry.get("category", "Other")
        group = f"{product} · {category}"
        details = {
            "method": entry["method"],
            "path": urllib.parse.urlsplit(entry["url"]).path,
            "absolute_url": entry["url"],
            "description": entry.get("description", ""),
            "doc_url": entry.get("doc_url", ""),
        }
        group_items = endpoints.setdefault(group, {})
        base_name = entry["name"]
        name = base_name
        duplicate = 2
        while name in group_items:
            name = f"{base_name} ({entry['method']} #{duplicate})"
            duplicate += 1
        group_items[name] = details
    return endpoints


# Automation Hub is the source of truth. The small built-in dictionary above is
# retained as a safe fallback for damaged or incomplete installations.
AUTOMATION_HUB_CATALOG = _load_automation_hub_catalog()
ZINSIGHTS_GRAPHQL_CATALOG = _load_graphql_catalog()
ONEAPI_ENDPOINTS = _load_automation_hub_endpoints()

# API Documentation URLs
API_DOCS = {
    "ZIA": {
        "base": "https://help.zscaler.com/zia/api",
        "getting_started": "https://help.zscaler.com/zia/getting-started-zia-api",
        "authentication": "https://help.zscaler.com/zia/api-authentication",
        "rate_limits": "https://help.zscaler.com/zia/rate-limiting",
    },
    "ZPA": {
        "base": "https://help.zscaler.com/zpa/api-reference",
        "getting_started": "https://help.zscaler.com/zpa/zpa-api-getting-started",
        "authentication": "https://help.zscaler.com/zpa/about-zpa-api-authentication",
        "rate_limits": "https://help.zscaler.com/zpa/api-rate-limiting",
    },
    "ZDX": {
        "base": "https://help.zscaler.com/zdx/api-reference",
        "getting_started": "https://help.zscaler.com/zdx/getting-started-zdx-api",
        "authentication": "https://help.zscaler.com/zdx/understanding-api-authentication",
        "rate_limits": "https://help.zscaler.com/zdx/api-rate-limiting",
    },
    "ZCC": {
        "base": "https://help.zscaler.com/zcc/api-reference",
        "getting_started": "https://help.zscaler.com/zcc/getting-started-zcc-api",
        "authentication": "https://help.zscaler.com/zcc/understanding-api-authentication",
        "rate_limits": "https://help.zscaler.com/zcc/api-rate-limiting",
    },
    "ZIdentity": {
        "base": "https://help.zscaler.com/zidentity/api-reference",
        "getting_started": "https://help.zscaler.com/zidentity/getting-started-zidentity-api",
        "authentication": "https://help.zscaler.com/zidentity/api-authentication",
        "rate_limits": "https://help.zscaler.com/zidentity/api-rate-limiting",
    },
    "ZTW": {
        "base": "https://help.zscaler.com/cloud-branch-connector/api-reference",
        "getting_started": "https://help.zscaler.com/cloud-branch-connector/getting-started-api",
        "authentication": "https://help.zscaler.com/cloud-branch-connector/api-authentication",
        "rate_limits": "https://help.zscaler.com/cloud-branch-connector/api-rate-limiting",
    },
    "ZWA": {
        "base": "https://help.zscaler.com/workflow-automation/api-reference",
        "getting_started": "https://help.zscaler.com/workflow-automation/getting-started-api",
        "authentication": "https://help.zscaler.com/workflow-automation/api-authentication",
        "rate_limits": "https://help.zscaler.com/workflow-automation/api-rate-limiting",
    },
    "EASM": {
        "base": "https://help.zscaler.com/easm/api-reference",
        "getting_started": "https://help.zscaler.com/easm/getting-started-api",
        "authentication": "https://help.zscaler.com/easm/api-authentication",
        "rate_limits": "https://help.zscaler.com/easm/api-rate-limiting",
    },
    "OneAPI": {
        "base": "https://automate.zscaler.com/docs/api-reference-and-guides/guides/UnderstandingOneAPI",
        "getting_started": "https://automate.zscaler.com/docs/getting-started/getting-started",
        "authentication": "https://automate.zscaler.com/docs/getting-started/getting-started",
        "rate_limits": "https://automate.zscaler.com/docs/api-reference-and-guides/guides/rate-limiting/",
    },
}


class JsonHighlighter(QSyntaxHighlighter):
    """Syntax highlighter for JSON."""
    
    def __init__(self, parent=None):
        super().__init__(parent)
        self.formats = {}
        
        # String format (green)
        string_format = QTextCharFormat()
        string_format.setForeground(QColor("#22863a"))
        self.formats["string"] = string_format
        
        # Number format (blue)
        number_format = QTextCharFormat()
        number_format.setForeground(QColor("#005cc5"))
        self.formats["number"] = number_format
        
        # Key format (purple)
        key_format = QTextCharFormat()
        key_format.setForeground(QColor("#6f42c1"))
        self.formats["key"] = key_format
        
        # Boolean/null format (red)
        keyword_format = QTextCharFormat()
        keyword_format.setForeground(QColor("#d73a49"))
        self.formats["keyword"] = keyword_format
    
    def highlightBlock(self, text):
        # Keys
        for match in re.finditer(r'"([^"]+)"(?=\s*:)', text):
            self.setFormat(match.start(), match.end() - match.start(), self.formats["key"])
        
        # Strings (not keys)
        for match in re.finditer(r':\s*"([^"]*)"', text):
            start = match.start() + text[match.start():].index('"')
            self.setFormat(start, match.end() - start, self.formats["string"])
        
        # Numbers
        for match in re.finditer(r'\b-?\d+\.?\d*\b', text):
            self.setFormat(match.start(), match.end() - match.start(), self.formats["number"])
        
        # Keywords
        for match in re.finditer(r'\b(true|false|null)\b', text):
            self.setFormat(match.start(), match.end() - match.start(), self.formats["keyword"])


class ApiRequestError(Exception):
    """An API failure that retains its HTTP status for safe local telemetry."""
    def __init__(self, status_code: int, message: str, response_headers: Dict | None = None):
        super().__init__(message)
        self.status_code = status_code
        self.response_headers = response_headers or {}


def api_result_status(result: Dict) -> int:
    """Return the real HTTP status retained by a worker result when available."""
    if not result.get("success"):
        return int(result.get("status_code") or 0)
    payload = result.get("data")
    if isinstance(payload, dict):
        return int(payload.get("_status_code") or 200)
    return 200


def api_result_headers(result: Dict) -> Dict:
    """Return worker response headers for success and error results."""
    if not result.get("success"):
        return dict(result.get("response_headers") or {})
    payload = result.get("data")
    return dict(payload.get("_headers") or {}) if isinstance(payload, dict) else {}


class ApiWorker(QThread):
    """Worker thread for API requests."""
    finished = Signal(dict)
    progress = Signal(int, int)
    
    def __init__(self, requests: List[Dict], stop_on_failure: bool = False):
        super().__init__()
        self.requests = requests
        self.stop_on_failure = stop_on_failure
    
    def run(self):
        results = []
        total = len(self.requests)
        
        stopped_early = False
        for i, req in enumerate(self.requests):
            try:
                result = self._make_request(req)
                results.append({"success": True, "data": result, "request": req})
            except ApiRequestError as error:
                results.append({"success": False, "error": str(error), "status_code": error.status_code, "response_headers": error.response_headers, "request": req})
            except Exception as error:
                results.append({"success": False, "error": str(error), "status_code": 0, "request": req})
            
            self.progress.emit(i + 1, total)
            if not results[-1]["success"] and self.stop_on_failure:
                stopped_early = i + 1 < total
                break
            time.sleep(0.1)  # Rate limiting
        
        self.finished.emit({"results": results, "stopped_early": stopped_early})
    
    def _make_request(self, req: Dict) -> Dict:
        url = req["url"]
        method = req.get("method", "GET")
        headers = req.get("headers", {})
        body = req.get("body")
        
        data = None
        if body:
            content_type = headers.get("Content-Type", "")
            if content_type == "application/x-www-form-urlencoded" and isinstance(body, str):
                # Form-urlencoded body (used by OAuth2 token endpoints)
                data = body.encode("utf-8")
            else:
                data = json.dumps(body).encode("utf-8")
                if "Content-Type" not in headers:
                    headers["Content-Type"] = "application/json"
        
        request = urllib.request.Request(url, data=data, headers=headers, method=method)
        
        # Build SSL context based on settings
        import ssl
        settings = QSettings("Zscaler", "APIClient")
        verify_ssl = settings.value("advanced/verify_ssl", "true") == "true"
        timeout = int(settings.value("advanced/timeout", "30"))
        
        ssl_context = None
        if not verify_ssl:
            ssl_context = ssl.create_default_context()
            ssl_context.check_hostname = False
            ssl_context.verify_mode = ssl.CERT_NONE
        else:
            # Try certifi first, fall back to default
            try:
                import certifi
                ssl_context = ssl.create_default_context(cafile=certifi.where())
            except (ImportError, Exception):
                ssl_context = ssl.create_default_context()
        
        opener = build_network_opener(settings, ssl_context)

        try:
            with opener.open(request, timeout=timeout) as response:
                response_data = response.read()
                response_size = len(response_data)
                status_code = response.status
                reason = response.reason
                response_headers = dict(response.headers.items())
                response_text = response_data.decode("utf-8", errors="replace")
                if not response_text or not response_text.strip():
                    return {"_status_code": status_code, "_reason": reason,
                            "_size": response_size, "_headers": response_headers,
                            "status": "success", "message": "Empty response (operation may have succeeded)"}
                try:
                    parsed = json.loads(response_text)
                except json.JSONDecodeError:
                    return {
                        "_status_code": status_code,
                        "_reason": reason,
                        "_size": response_size,
                        "_headers": response_headers,
                        "_raw_text": response_text,
                    }
                if not isinstance(parsed, dict):
                    # Retain metadata without changing the payload displayed in
                    # the response view; list APIs are a common Zscaler shape.
                    return {"_payload": parsed, "_status_code": status_code, "_reason": reason,
                            "_size": response_size, "_headers": response_headers}
                parsed["_status_code"] = status_code
                parsed["_reason"] = reason
                parsed["_size"] = response_size
                parsed["_headers"] = response_headers
                return parsed
        except urllib.error.HTTPError as e:
            error_body = ""
            try:
                error_body = e.read().decode("utf-8")
            except:
                pass
            raise ApiRequestError(e.code, f"HTTP {e.code}: {e.reason}\n{error_body}", dict(e.headers.items()) if e.headers else {})


class LlmWorker(QThread):
    """Runs an LLM request away from the GUI thread."""
    completed = Signal(str)
    failed = Signal(str)

    def __init__(self, request_fn):
        super().__init__()
        self.request_fn = request_fn

    def run(self):
        try:
            self.completed.emit(self.request_fn())
        except Exception as error:
            self.failed.emit(str(error))


class NumericBarChart(QWidget):
    """Compact, dependency-free chart with accessible labels and contrasts."""
    def __init__(self, parent=None):
        super().__init__(parent)
        self.values: list[tuple[str, float]] = []
        self.style = "bar"
        self.setMinimumHeight(150)

    def set_values(self, values: list[tuple[str, float]]):
        self.values = values[:12]
        self.setVisible(bool(self.values))
        self.update()

    def set_style(self, style: str):
        self.style = style
        self.update()

    def paintEvent(self, event):
        painter = QPainter(self)
        painter.setRenderHint(QPainter.RenderHint.Antialiasing)
        canvas = self.rect().adjusted(1, 1, -1, -1)
        painter.setPen(QPen(QColor("#334155"), 1))
        painter.setBrush(QColor("#172235"))
        painter.drawRoundedRect(canvas, 9, 9)
        if not self.values:
            return
        maximum = max(value for _, value in self.values) or 1
        palette = ("#38bdf8", "#34d399", "#fbbf24", "#a78bfa", "#fb7185", "#fb923c", "#22d3ee")
        chart = self.rect().adjusted(42, 16, -16, -31)
        if self.style == "pie":
            total = sum(value for _, value in self.values) or 1
            pie_size = min(chart.height(), chart.width() // 2)
            pie = chart.adjusted(0, 0, -(chart.width() - pie_size), -(chart.height() - pie_size))
            start = 0
            for index, (label, value) in enumerate(self.values):
                span = int(5760 * value / total)
                painter.setPen(QPen(QColor("#172235"), 2))
                painter.setBrush(QColor(palette[index % len(palette)]))
                painter.drawPie(pie, start, span)
                start += span
            legend_x = pie.right() + 18
            legend_y = pie.top() + 10
            painter.setPen(QColor("#e2e8f0"))
            for index, (label, value) in enumerate(self.values[:6]):
                y = legend_y + index * 22
                painter.setPen(Qt.PenStyle.NoPen)
                painter.setBrush(QColor(palette[index % len(palette)]))
                painter.drawRoundedRect(legend_x, y, 10, 10, 3, 3)
                painter.setPen(QColor("#e2e8f0"))
                painter.drawText(legend_x + 16, y + 10, f"{label[:18]}  {value:g}")
            return
        if self.style == "line":
            points = []
            painter.setPen(QPen(QColor("#314158"), 1, Qt.PenStyle.DashLine))
            for step in range(1, 4):
                y = chart.top() + chart.height() * step // 4
                painter.drawLine(chart.left(), y, chart.right(), y)
            for index, (_, value) in enumerate(self.values):
                x = chart.left() + (chart.width() * index // max(1, len(self.values) - 1))
                y = chart.bottom() - int(chart.height() * value / maximum)
                points.append((x, y))
            painter.setPen(QPen(QColor("#38bdf8"), 2))
            for first, second in zip(points, points[1:]):
                painter.drawLine(first[0], first[1], second[0], second[1])
            for x, y in points:
                painter.setPen(QPen(QColor("#e0f2fe"), 1))
                painter.setBrush(QColor("#38bdf8"))
                painter.drawEllipse(x - 3, y - 3, 6, 6)
            painter.setPen(QColor("#94a3b8"))
            painter.drawText(8, 18, f"{maximum:g} ms")
            return
        width = max(8, chart.width() // len(self.values) - 8)
        painter.setPen(QPen(QColor("#314158"), 1, Qt.PenStyle.DashLine))
        for step in range(1, 4):
            y = chart.top() + chart.height() * step // 4
            painter.drawLine(chart.left(), y, chart.right(), y)
        for index, (label, value) in enumerate(self.values):
            height = int(chart.height() * (value / maximum))
            x = chart.left() + index * (chart.width() // len(self.values)) + 4
            y = chart.bottom() - height
            painter.setPen(Qt.PenStyle.NoPen)
            painter.setBrush(QColor(palette[index % len(palette)]))
            painter.drawRoundedRect(x, y, width, height, 4, 4)
            painter.setPen(QColor("#cbd5e1"))
            painter.drawText(x, chart.bottom() + 18, width, 12, Qt.AlignmentFlag.AlignHCenter, label[:9])
        painter.setPen(QColor("#94a3b8"))
        painter.drawText(8, 18, f"{maximum:g}")


class WelcomeDialog(QDialog):
    """Welcome dialog for new users with getting started guidance."""
    
    def __init__(self, parent=None):
        super().__init__(parent)
        self.setWindowTitle(self.tr("Welcome to ZS API Client"))
        self.setMinimumSize(700, 600)
        
        layout = QVBoxLayout(self)

        layout.setSpacing(20)
        
        # Header
        header = QLabel(f"<h1>🔐 ZS API Client v{__version__}</h1>")
        header.setAlignment(Qt.AlignmentFlag.AlignCenter)
        layout.addWidget(header)
        
        subtitle = QLabel(self.tr("<p style='font-size: 14px; color: #666;'>A Postman-like tool for exploring Zscaler APIs</p>"))
        subtitle.setAlignment(Qt.AlignmentFlag.AlignCenter)
        layout.addWidget(subtitle)
        
        # Scroll area for content
        scroll = QScrollArea()
        scroll.setWidgetResizable(True)
        scroll.setFrameShape(QFrame.Shape.NoFrame)
        
        content = QWidget()
        content_layout = QVBoxLayout(content)
        
        # Supported APIs
        apis_group = QGroupBox(self.tr("Supported APIs"))
        apis_layout = QVBoxLayout(apis_group)
        apis_label = QLabel(self.tr(
            "<table cellspacing='10'>"
            "<tr><td><b>🌐 ZIA</b></td><td>Zscaler Internet Access – Web security, URL filtering, firewall</td></tr>"
            "<tr><td><b>🔒 ZPA</b></td><td>Zscaler Private Access – Zero trust application access</td></tr>"
            "<tr><td><b>📊 ZDX</b></td><td>Zscaler Digital Experience – User experience monitoring</td></tr>"
            "<tr><td><b>💻 ZCC</b></td><td>Client Connector – Device management and compliance</td></tr>"
            "<tr><td><b>🔑 ZIdentity</b></td><td>Identity & Access Management – Users, groups, SCIM, IdPs</td></tr>"
            "<tr><td><b>🌿 ZTW</b></td><td>Zero Trust Workloads – Branch connectors, service edges</td></tr>"
            "<tr><td><b>⚡ ZWA</b></td><td>Workflow Automation – Automated policies and triggers</td></tr>"
            "<tr><td><b>🔍 EASM</b></td><td>External Attack Surface Management – Asset discovery, vulnerabilities</td></tr>"
            "</table>"
        ))
        apis_label.setWordWrap(True)
        apis_layout.addWidget(apis_label)
        content_layout.addWidget(apis_group)
        
        # Getting Started
        start_group = QGroupBox(self.tr("Getting Started"))
        start_layout = QVBoxLayout(start_group)
        start_label = QLabel(self.tr(
            "<ol>"
            "<li><b>Configure Credentials</b> – Go to <i>File → Settings</i> and enter your API credentials</li>"
            "<li><b>Select API</b> – Choose from ZIA, ZPA, ZDX, ZCC, ZIdentity, ZTW, ZWA, or EASM</li>"
            "<li><b>Browse Endpoints</b> – Click on an endpoint in the tree to load it</li>"
            "<li><b>Send Request</b> – Modify parameters if needed, then click Send</li>"
            "<li><b>View Response</b> – JSON response will appear with syntax highlighting</li>"
            "</ol>"
        ))
        start_label.setWordWrap(True)
        start_layout.addWidget(start_label)
        content_layout.addWidget(start_group)
        
        # Tips for Advanced Users
        tips_group = QGroupBox(self.tr("Tips for Advanced Users"))
        tips_layout = QVBoxLayout(tips_group)
        tips_label = QLabel(self.tr(
            "<ul>"
            "<li><b>Ctrl+Enter</b> – Send request quickly</li>"
            "<li><b>Ctrl+Shift+C</b> – Copy request as cURL command</li>"
            "<li><b>Ctrl+H</b> – View request history</li>"
            "<li><b>Batch Operations</b> – Import CSV for bulk API calls</li>"
            "<li><b>Request menu</b> – Quick authentication helpers for each API</li>"
            "<li><b>Themes</b> – Switch between Light/Dark/System in Settings</li>"
            "</ul>"
        ))
        tips_label.setWordWrap(True)
        tips_layout.addWidget(tips_label)
        content_layout.addWidget(tips_group)
        
        # Documentation Links
        docs_group = QGroupBox(self.tr("Documentation"))
        docs_layout = QVBoxLayout(docs_group)
        docs_label = QLabel(
            "<p>"
            "<a href='https://help.zscaler.com/zia/api'>ZIA API Documentation</a> · "
            "<a href='https://help.zscaler.com/zpa/api-reference'>ZPA API Documentation</a><br>"
            "<a href='https://help.zscaler.com/zdx/api-reference'>ZDX API Documentation</a> · "
            "<a href='https://help.zscaler.com/zcc/api-reference'>ZCC API Documentation</a><br><br>"
            "<a href='https://github.com/yeager/zscaler-api-client'>GitHub Repository</a>"
            "</p>"
        )
        docs_label.setOpenExternalLinks(True)
        docs_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        docs_layout.addWidget(docs_label)
        content_layout.addWidget(docs_group)
        
        content_layout.addStretch()
        scroll.setWidget(content)
        layout.addWidget(scroll)
        
        # Show on startup checkbox
        self.show_on_startup = QCheckBox(self.tr("Show this dialog on startup"))
        self.show_on_startup.setChecked(True)
        layout.addWidget(self.show_on_startup)
        
        # Buttons
        btn_layout = QHBoxLayout()
        btn_layout.addStretch()
        
        settings_btn = QPushButton(self.tr("Open Settings"))
        settings_btn.clicked.connect(self._open_settings)
        btn_layout.addWidget(settings_btn)
        
        start_btn = QPushButton(self.tr("Get Started"))
        start_btn.setDefault(True)
        start_btn.clicked.connect(self.accept)
        btn_layout.addWidget(start_btn)
        
        layout.addLayout(btn_layout)
        
        # Load preference
        settings = QSettings("Zscaler", "APIClient")
        show = settings.value("welcome/show_on_startup", "true") == "true"
        self.show_on_startup.setChecked(show)
    
    def _open_settings(self):
        self.accept()
        if self.parent():
            self.parent()._show_settings()
    
    def accept(self):
        settings = QSettings("Zscaler", "APIClient")
        settings.setValue("welcome/show_on_startup", 
                         "true" if self.show_on_startup.isChecked() else "false")
        super().accept()


class SetupWizard(QDialog):
    """A practical first-run guide for configuration and common API tasks."""

    COMMON_TASKS = {
        "ZIA · List users": ("GET", "https://api.zsapi.net/zia/api/v1/users"),
        "ZIA · List URL categories": ("GET", "https://api.zsapi.net/zia/api/v1/urlCategories"),
        "ZIA · Check activation status": ("GET", "https://api.zsapi.net/zia/api/v1/status"),
        "ZIA · List cloud firewall policies": ("GET", "https://api.zsapi.net/zia/api/v1/firewallPolicies"),
        "ZPA · List application segments": ("GET", "https://api.zsapi.net/zpa/mgmtconfig/v1/admin/customers/:customerId/application"),
        "ZPA · List segment groups": ("GET", "https://api.zsapi.net/zpa/mgmtconfig/v1/admin/customers/:customerId/segmentGroup"),
        "ZPA · List connectors": ("GET", "https://api.zsapi.net/zpa/mgmtconfig/v1/admin/customers/:customerId/connector"),
        "ZDX · List devices and experience scores": ("GET", "https://api.zsapi.net/zdx/v1/devices"),
        "ZDX · List active alerts": ("GET", "https://api.zsapi.net/zdx/v1/alerts"),
        "ZDX · List monitored applications": ("GET", "https://api.zsapi.net/zdx/v1/apps"),
        "Client Connector · List devices": ("GET", "https://api.zsapi.net/zcc/papi/public/v1/getDevices"),
        "ZIdentity · List users": ("GET", "https://api.zsapi.net/zidentity/admin/api/v1/users"),
        "ZIdentity · List groups": ("GET", "https://api.zsapi.net/zidentity/admin/api/v1/groups"),
        "AI Security · List workloads": ("GET", "https://api.zsapi.net/aisecurity/aispm/v1/resources/workloads"),
    }

    def _task_label(self, task: str) -> str:
        labels = {
            "ZIA · List users": self.tr("ZIA · List users"),
            "ZIA · List URL categories": self.tr("ZIA · List URL categories"),
            "ZIA · Check activation status": self.tr("ZIA · Check activation status"),
            "ZIA · List cloud firewall policies": self.tr("ZIA · List cloud firewall policies"),
            "ZPA · List application segments": self.tr("ZPA · List application segments"),
            "ZPA · List segment groups": self.tr("ZPA · List segment groups"),
            "ZPA · List connectors": self.tr("ZPA · List connectors"),
            "ZDX · List devices and experience scores": self.tr("ZDX · List devices and experience scores"),
            "ZDX · List active alerts": self.tr("ZDX · List active alerts"),
            "ZDX · List monitored applications": self.tr("ZDX · List monitored applications"),
            "Client Connector · List devices": self.tr("Client Connector · List devices"),
            "ZIdentity · List users": self.tr("ZIdentity · List users"),
            "ZIdentity · List groups": self.tr("ZIdentity · List groups"),
            "AI Security · List workloads": self.tr("AI Security · List workloads"),
        }
        return labels[task]

    def __init__(self, parent=None):
        super().__init__(parent)
        self.setWindowTitle(self.tr("Getting Started Wizard"))
        self.setMinimumSize(720, 500)
        layout = QVBoxLayout(self)

        self.step_label = QLabel()
        self.step_label.setObjectName("mutedLabel")
        layout.addWidget(self.step_label)
        self.pages = QStackedWidget()
        layout.addWidget(self.pages)

        self.pages.addWidget(self._make_welcome_page())
        self.pages.addWidget(self._make_setup_page())
        self.pages.addWidget(self._make_tasks_page())
        self.pages.addWidget(self._make_finish_page())
        settings = QSettings("Zscaler", "APIClient")
        self.mode_choice.setCurrentIndex(0 if settings.value("ui/mode", "basic") == "basic" else 1)
        self._apply_mode()

        controls = QHBoxLayout()
        self.back_btn = QPushButton(self.tr("Back"))
        self.back_btn.clicked.connect(lambda: self._go(-1))
        controls.addWidget(self.back_btn)
        controls.addStretch()
        self.skip_setup = QPushButton(self.tr("Open full settings"))
        self.skip_setup.clicked.connect(self._open_full_settings)
        controls.addWidget(self.skip_setup)
        self.next_btn = QPushButton(self.tr("Continue"))
        self.next_btn.setDefault(True)
        self.next_btn.clicked.connect(lambda: self._go(1))
        controls.addWidget(self.next_btn)
        layout.addLayout(controls)
        self._update_controls()

    def _make_welcome_page(self):
        page = QWidget()
        layout = QVBoxLayout(page)
        title = QLabel(self.tr("<h1>Welcome to ZS API Client</h1>"))
        layout.addWidget(title)
        intro = QLabel(self.tr(
            "<p>This guide sets up secure OneAPI access and prepares common requests. "
            "Credentials are stored in your system keychain; you can change any setting later.</p>"
            "<p><b>Recommended:</b> use OneAPI for a unified token across supported Zscaler services.</p>"
        ))
        intro.setWordWrap(True)
        layout.addWidget(intro)
        mode_form = QFormLayout()
        self.mode_choice = QComboBox()
        self.mode_choice.addItem(self.tr("Basic"), "basic")
        self.mode_choice.addItem(self.tr("Advanced"), "advanced")
        self.mode_choice.currentIndexChanged.connect(self._apply_mode)
        mode_form.addRow(self.tr("Setup mode:"), self.mode_choice)
        layout.addLayout(mode_form)
        layout.addStretch()
        return page

    def _make_setup_page(self):
        page = QWidget()
        layout = QVBoxLayout(page)
        layout.addWidget(QLabel(self.tr("<h2>Connect your Zscaler tenant</h2>")))
        note = QLabel(self.tr("Create an API client with the required roles in ZIdentity, then enter its details below."))
        note.setWordWrap(True)
        layout.addWidget(note)
        form = QFormLayout()
        self.vanity_input = QLineEdit()
        self.vanity_input.setPlaceholderText("acme")
        form.addRow(self.tr("Vanity domain"), self.vanity_input)
        self.client_id_input = QLineEdit()
        form.addRow(self.tr("Client ID"), self.client_id_input)
        self.client_secret_input = QLineEdit()
        self.client_secret_input.setEchoMode(QLineEdit.EchoMode.Password)
        form.addRow(self.tr("Client secret"), self.client_secret_input)
        self.cloud_input = QLineEdit()
        self.cloud_input.setPlaceholderText(self.tr("Leave empty for production; use beta or alpha when applicable"))
        form.addRow(self.tr("Cloud"), self.cloud_input)
        self.customer_id_input = QLineEdit()
        self.customer_id_input.setPlaceholderText(self.tr("Optional; required for many ZPA requests"))
        form.addRow(self.tr("ZPA customer ID"), self.customer_id_input)
        self._advanced_setup_widgets = (self.cloud_input, self.customer_id_input)
        self._advanced_setup_labels = (form.labelForField(self.cloud_input), form.labelForField(self.customer_id_input))
        layout.addLayout(form)
        layout.addStretch()
        return page

    def _apply_mode(self):
        advanced = self.mode_choice.currentData() == "advanced"
        for widget in getattr(self, "_advanced_setup_widgets", ()):
            widget.setVisible(advanced)
        for label in getattr(self, "_advanced_setup_labels", ()):
            label.setVisible(advanced)
        if hasattr(self, "authenticate_after_finish"):
            self.authenticate_after_finish.setVisible(advanced)
        if hasattr(self, "task_choice"):
            current = self.task_choice.currentData()
            tasks = list(self.COMMON_TASKS)
            if not advanced:
                tasks = tasks[:4]
            self.task_choice.clear()
            self.task_choice.addItem(self.tr("Just explore the API catalog"), "")
            for task in tasks:
                self.task_choice.addItem(self._task_label(task), task)
            index = self.task_choice.findData(current)
            self.task_choice.setCurrentIndex(index if index >= 0 else 0)

    def _make_tasks_page(self):
        page = QWidget()
        layout = QVBoxLayout(page)
        layout.addWidget(QLabel(self.tr("<h2>What would you like to do first?</h2>")))
        description = QLabel(self.tr("Choose a common operation. The wizard will load it into the request builder with required path variables highlighted."))
        description.setWordWrap(True)
        layout.addWidget(description)
        self.task_choice = QComboBox()
        self.task_choice.addItem(self.tr("Just explore the API catalog"), "")
        for task in self.COMMON_TASKS:
            self.task_choice.addItem(self._task_label(task), task)
        layout.addWidget(self.task_choice)
        self.authenticate_after_finish = QCheckBox(self.tr("Authenticate immediately after finishing"))
        self.authenticate_after_finish.setChecked(True)
        layout.addWidget(self.authenticate_after_finish)
        layout.addStretch()
        return page

    def _make_finish_page(self):
        page = QWidget()
        layout = QVBoxLayout(page)
        layout.addWidget(QLabel(self.tr("<h2>You are ready to make your first request</h2>")))
        message = QLabel(self.tr(
            "The API Explorer contains the complete bundled catalog. Use the Documentation tab for endpoint details, "
            "the Console tab for request activity, and Request History to replay safe, redacted requests."
        ))
        message.setWordWrap(True)
        layout.addWidget(message)
        layout.addStretch()
        return page

    def _go(self, direction: int):
        target = self.pages.currentIndex() + direction
        if target >= self.pages.count():
            self._finish()
            return
        self.pages.setCurrentIndex(max(0, target))
        self._update_controls()

    def _update_controls(self):
        index = self.pages.currentIndex()
        self.step_label.setText(self.tr("Step {current} of {total}").format(current=index + 1, total=self.pages.count()))
        self.back_btn.setEnabled(index > 0)
        self.next_btn.setText(self.tr("Finish") if index == self.pages.count() - 1 else self.tr("Continue"))

    def _open_full_settings(self):
        self.reject()
        if self.parent():
            self.parent()._show_settings()

    def _finish(self):
        settings = QSettings("Zscaler", "APIClient")
        vanity = self.vanity_input.text().strip()
        client_id = self.client_id_input.text().strip()
        client_secret = self.client_secret_input.text()
        if any((vanity, client_id, client_secret)):
            settings.setValue("oneapi/enabled", "true")
            settings.setValue("oneapi/vanity_domain", vanity)
            settings.setValue("oneapi/client_id", client_id)
            settings.setValue("oneapi/cloud", self.cloud_input.text().strip())
            settings.setValue("oneapi/customer_id", self.customer_id_input.text().strip())
            if client_secret:
                secure_store("oneapi_client_secret", client_secret)
        settings.setValue("welcome/show_on_startup", "false")
        settings.setValue("ui/mode", self.mode_choice.currentData())
        if self.parent():
            parent = self.parent()
            parent._update_api_list()
            parent.api_type.setCurrentText("OneAPI")
            task = self.task_choice.currentData()
            if task in self.COMMON_TASKS:
                method, url = self.COMMON_TASKS[task]
                parent._load_wizard_request(method, url, task)
            if self.authenticate_after_finish.isChecked() and all((vanity, client_id, client_secret)):
                QTimer.singleShot(0, parent._authenticate_api)
        self.accept()


def create_splash_pixmap() -> QPixmap:
    """Create a splash screen pixmap."""
    pixmap = QPixmap(500, 300)
    pixmap.fill(QColor("#1e1e1e"))
    
    painter = QPainter(pixmap)
    painter.setRenderHint(QPainter.RenderHint.Antialiasing)
    
    # Draw gradient background
    painter.fillRect(0, 0, 500, 300, QColor("#1a1a2e"))
    
    # Draw accent bar
    painter.fillRect(0, 0, 500, 4, QColor("#0078d4"))
    
    # Draw title
    font = QFont("Arial", 28, QFont.Weight.Bold)
    painter.setFont(font)
    painter.setPen(QColor("#ffffff"))
    painter.drawText(pixmap.rect().adjusted(0, 60, 0, 0), 
                    Qt.AlignmentFlag.AlignHCenter, "🔐 ZS API Client")
    
    # Draw version
    font = QFont("Arial", 14)
    painter.setFont(font)
    painter.setPen(QColor("#888888"))
    painter.drawText(pixmap.rect().adjusted(0, 120, 0, 0),
                    Qt.AlignmentFlag.AlignHCenter, f"Version {__version__}")
    
    # Draw supported APIs
    font = QFont("Arial", 11)
    painter.setFont(font)
    painter.setPen(QColor("#666666"))
    painter.drawText(pixmap.rect().adjusted(0, 170, 0, 0),
                    Qt.AlignmentFlag.AlignHCenter, "ZIA · ZPA · ZDX · ZCC · ZIdentity · ZTW · ZWA · EASM")
    
    # Draw loading text
    from PySide6.QtCore import QCoreApplication
    loading_text = QCoreApplication.translate("SplashScreen", "Loading...")
    painter.drawText(pixmap.rect().adjusted(0, 220, 0, 0),
                    Qt.AlignmentFlag.AlignHCenter, loading_text)
    
    # Draw copyright
    font = QFont("Arial", 9)
    painter.setFont(font)
    painter.setPen(QColor("#444444"))
    painter.drawText(pixmap.rect().adjusted(0, 0, 0, -20),
                    Qt.AlignmentFlag.AlignHCenter | Qt.AlignmentFlag.AlignBottom,
                    "© 2026 Daniel Nylander · GPL-3.0")
    
    painter.end()
    return pixmap


class PostureGauge(QWidget):
    """A compact native gauge for local posture, requiring no external assets."""
    def __init__(self, parent=None):
        super().__init__(parent)
        self.score = 0
        self.setMinimumSize(190, 150)

    def set_score(self, score: int):
        self.score = max(0, min(100, int(score)))
        self.update()

    def paintEvent(self, event):
        painter = QPainter(self)
        painter.setRenderHint(QPainter.RenderHint.Antialiasing)
        diameter = min(self.width() - 24, self.height() - 24)
        rect = self.rect().adjusted((self.width() - diameter) // 2 + 12, 12, -((self.width() - diameter) // 2 + 12), -12)
        painter.setPen(QPen(QColor("#334155"), 13))
        painter.drawArc(rect, 225 * 16, -270 * 16)
        color = QColor("#22c55e" if self.score >= 80 else "#facc15" if self.score >= 60 else "#f97316" if self.score >= 35 else "#ef4444")
        painter.setPen(QPen(color, 13))
        painter.drawArc(rect, 225 * 16, -round(270 * self.score / 100) * 16)
        painter.setPen(QColor("#e2e8f0"))
        font = painter.font(); font.setPointSize(24); font.setBold(True); painter.setFont(font)
        painter.drawText(self.rect(), Qt.AlignmentFlag.AlignCenter, str(self.score))
        painter.end()


class AboutDialog(QDialog):
    """About dialog with copyright and disclaimer."""
    
    def __init__(self, parent=None):
        super().__init__(parent)
        self.setWindowTitle(self.tr("About ZS API Client"))
        self.setMinimumSize(520, 550)
        
        layout = QVBoxLayout(self)
        layout.setSpacing(10)
        
        # Scroll area for content
        scroll = QScrollArea()
        scroll.setWidgetResizable(True)
        scroll.setFrameShape(QFrame.Shape.NoFrame)
        
        content = QWidget()
        content_layout = QVBoxLayout(content)
        content_layout.setSpacing(10)
        
        # Title and version
        title_label = QLabel(f"<h1>ZS API Client</h1>")
        title_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        content_layout.addWidget(title_label)
        
        version_label = QLabel(f"<p style='font-size: 14px;'>Version {__version__}</p>")
        version_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        content_layout.addWidget(version_label)
        
        # Description
        desc_label = QLabel(self.tr(
            "<p>A Postman-like desktop application for exploring and testing "
            "Zscaler APIs (ZIA and ZPA).</p>"
        ))
        desc_label.setWordWrap(True)
        desc_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        content_layout.addWidget(desc_label)
        
        # Copyright
        copyright_label = QLabel(
            "<p><b>Copyright © 2026 Daniel Nylander</b><br>"
            "<a href='mailto:daniel@danielnylander.se'>daniel@danielnylander.se</a></p>"
        )
        copyright_label.setOpenExternalLinks(True)
        copyright_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        content_layout.addWidget(copyright_label)
        
        # Credits
        credits_label = QLabel(
            "<p><i>Thanks to Nima Samadi for feature suggestions</i></p>"
        )
        credits_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        content_layout.addWidget(credits_label)
        
        # License
        license_label = QLabel(
            "<p>Licensed under the <a href='https://www.gnu.org/licenses/gpl-3.0.html'>"
            "GNU General Public License v3.0</a> or later.</p>"
        )
        license_label.setOpenExternalLinks(True)
        license_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        content_layout.addWidget(license_label)
        
        # Disclaimer box
        disclaimer_group = QGroupBox(self.tr("Disclaimer"))
        disclaimer_layout = QVBoxLayout(disclaimer_group)
        disclaimer_text = QLabel(self.tr(
            "<p style='color: #666;'>"
            "This software is <b>not affiliated with, endorsed by, or supported by "
            "Zscaler, Inc.</b> in any way. This is an independent community project.</p>"
            "<p style='color: #666;'>"
            "Zscaler® is a registered trademark of Zscaler, Inc. All product names, "
            "logos, and brands are property of their respective owners.</p>"
            "<p style='color: #666;'>"
            "<b>NO WARRANTY:</b> This software is provided \"as is\" without warranty "
            "of any kind. Use at your own risk. The author is not responsible for any "
            "damage or data loss resulting from the use of this software.</p>"
            "<p style='color: #666;'>"
            "<b>NO SUPPORT:</b> For Zscaler product support, please contact "
            "Zscaler directly through official channels.</p>"
        ))
        disclaimer_text.setWordWrap(True)
        disclaimer_layout.addWidget(disclaimer_text)
        content_layout.addWidget(disclaimer_group)
        
        # Links
        links_label = QLabel(
            "<p><a href='https://github.com/yeager/zscaler-api-client'>GitHub Repository</a> | "
            "<a href='https://help.zscaler.com/zia/api'>ZIA API Docs</a> | "
            "<a href='https://help.zscaler.com/zpa/api-reference'>ZPA API Docs</a></p>"
        )
        links_label.setOpenExternalLinks(True)
        links_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        content_layout.addWidget(links_label)
        
        content_layout.addStretch()
        scroll.setWidget(content)
        layout.addWidget(scroll)
        
        # Close button
        buttons = QDialogButtonBox(QDialogButtonBox.StandardButton.Close)
        buttons.rejected.connect(self.reject)
        layout.addWidget(buttons)


class ChangelogDialog(QDialog):
    """Dialog showing changelog after application update."""
    
    def __init__(self, parent=None, previous_version: str = None):
        super().__init__(parent)
        self.setWindowTitle(self.tr("What's New"))
        self.setMinimumSize(550, 450)
        
        layout = QVBoxLayout(self)
        layout.setSpacing(15)
        
        # Header
        header = QLabel(self.tr("<h2>🎉 Updated to version {version}</h2>").format(version=__version__))
        header.setAlignment(Qt.AlignmentFlag.AlignCenter)
        layout.addWidget(header)
        
        if previous_version:
            from_label = QLabel(self.tr("<p style='color: #666;'>Updated from version {prev}</p>").format(prev=previous_version))
            from_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
            layout.addWidget(from_label)
        
        # Changelog content
        changelog_text = QTextEdit()
        changelog_text.setReadOnly(True)
        changelog_text.setMinimumHeight(300)
        
        # Load changelog
        changelog_content = self._load_changelog()
        changelog_text.setMarkdown(changelog_content)
        
        layout.addWidget(changelog_text)
        
        # Don't show again checkbox
        self.dont_show = QCheckBox(self.tr("Don't show this after future updates"))
        layout.addWidget(self.dont_show)
        
        # Close button
        buttons = QDialogButtonBox(QDialogButtonBox.StandardButton.Ok)
        buttons.accepted.connect(self.accept)
        layout.addWidget(buttons)
    
    def _load_changelog(self) -> str:
        """Load and return the changelog content, limited to recent versions."""
        try:
            # Find changelog file
            if getattr(sys, 'frozen', False):
                base_path = Path(sys.executable).parent
                changelog_path = base_path / "CHANGELOG.md"
                if not changelog_path.exists():
                    changelog_path = base_path.parent / "Resources" / "CHANGELOG.md"
            else:
                changelog_path = Path(__file__).parent / "CHANGELOG.md"
            
            if not changelog_path.exists():
                return self.tr("*Changelog not found*")
            
            with open(changelog_path, "r", encoding="utf-8") as f:
                content = f.read()
            
            # Extract only the latest 3 versions
            lines = content.split('\n')
            result = []
            version_count = 0
            
            for line in lines:
                if line.startswith('## ['):
                    version_count += 1
                    if version_count > 3:
                        break
                if version_count <= 3:
                    result.append(line)
            
            return '\n'.join(result) if result else content[:2000]
            
        except Exception as e:
            return self.tr("*Could not load changelog: {error}*").format(error=str(e))


class SettingsDialog(QDialog):
    """Settings dialog for API credentials and advanced options."""
    
    def __init__(self, parent=None):
        super().__init__(parent)
        self.setWindowTitle(self.tr("Settings"))
        self.setMinimumWidth(550)
        
        layout = QVBoxLayout(self)
        mode_form = QFormLayout()
        self.mode_choice = QComboBox()
        self.mode_choice.addItem(self.tr("Basic"), "basic")
        self.mode_choice.addItem(self.tr("Advanced"), "advanced")
        self.mode_choice.currentIndexChanged.connect(self._apply_mode)
        mode_form.addRow(self.tr("Interface mode:"), self.mode_choice)
        layout.addLayout(mode_form)
        
        # Create tab widget for organized settings
        tabs = QTabWidget()
        self.settings_tabs = tabs
        
        # === Credentials Tab ===
        creds_widget = QWidget()
        creds_main_layout = QVBoxLayout(creds_widget)
        
        # Two-column layout for credentials
        creds_columns = QHBoxLayout()
        left_column = QVBoxLayout()
        right_column = QVBoxLayout()
        
        # ZIA Settings (Left) - Compact 3-row layout
        zia_group = QGroupBox(self.tr("ZIA (Zscaler Internet Access)"))
        zia_layout = QVBoxLayout(zia_group)
        zia_layout.setSpacing(4)
        
        # Row 1: Enabled + Cloud
        zia_row1 = QHBoxLayout()
        self.zia_enabled = QCheckBox(self.tr("Enabled"))
        self.zia_enabled.setChecked(True)
        zia_row1.addWidget(self.zia_enabled)
        self.zia_cloud = QLineEdit()
        self.zia_cloud.setPlaceholderText("Cloud (zsapi.zscaler.net)")
        zia_row1.addWidget(self.zia_cloud, 1)
        zia_layout.addLayout(zia_row1)
        
        # Row 2: Username + Password
        zia_row2 = QHBoxLayout()
        self.zia_username = QLineEdit()
        self.zia_username.setPlaceholderText("Username")
        zia_row2.addWidget(self.zia_username, 1)
        self.zia_password = QLineEdit()
        self.zia_password.setEchoMode(QLineEdit.EchoMode.Password)
        self.zia_password.setPlaceholderText("Password")
        zia_row2.addWidget(self.zia_password, 1)
        zia_layout.addLayout(zia_row2)
        
        # Row 3: API Key
        self.zia_api_key = QLineEdit()
        self.zia_api_key.setEchoMode(QLineEdit.EchoMode.Password)
        self.zia_api_key.setPlaceholderText("API Key")
        zia_layout.addWidget(self.zia_api_key)
        
        left_column.addWidget(zia_group)
        
        # ZPA Settings (Left) - Compact 3-row layout
        zpa_group = QGroupBox(self.tr("ZPA (Zscaler Private Access)"))
        zpa_layout = QVBoxLayout(zpa_group)
        zpa_layout.setSpacing(4)
        
        # Row 1: Enabled + Cloud
        zpa_row1 = QHBoxLayout()
        self.zpa_enabled = QCheckBox(self.tr("Enabled"))
        zpa_row1.addWidget(self.zpa_enabled)
        self.zpa_cloud = QLineEdit()
        self.zpa_cloud.setPlaceholderText("Cloud (config.private.zscaler.com)")
        zpa_row1.addWidget(self.zpa_cloud, 1)
        zpa_layout.addLayout(zpa_row1)
        
        # Row 2: Client ID + Secret
        zpa_row2 = QHBoxLayout()
        self.zpa_client_id = QLineEdit()
        self.zpa_client_id.setPlaceholderText("Client ID")
        zpa_row2.addWidget(self.zpa_client_id, 1)
        self.zpa_client_secret = QLineEdit()
        self.zpa_client_secret.setEchoMode(QLineEdit.EchoMode.Password)
        self.zpa_client_secret.setPlaceholderText("Client Secret")
        zpa_row2.addWidget(self.zpa_client_secret, 1)
        zpa_layout.addLayout(zpa_row2)
        
        # Row 3: Customer ID
        self.zpa_customer_id = QLineEdit()
        self.zpa_customer_id.setPlaceholderText("Customer ID")
        zpa_layout.addWidget(self.zpa_customer_id)
        
        left_column.addWidget(zpa_group)
        
        # ZDX Settings (Left) - Compact 2-row layout
        zdx_group = QGroupBox(self.tr("ZDX (Zscaler Digital Experience)"))
        zdx_layout = QVBoxLayout(zdx_group)
        zdx_layout.setSpacing(4)
        
        # Row 1: Enabled + Cloud
        zdx_row1 = QHBoxLayout()
        self.zdx_enabled = QCheckBox(self.tr("Enabled"))
        zdx_row1.addWidget(self.zdx_enabled)
        self.zdx_cloud = QLineEdit()
        self.zdx_cloud.setPlaceholderText("Cloud (api.zdxcloud.net)")
        zdx_row1.addWidget(self.zdx_cloud, 1)
        zdx_layout.addLayout(zdx_row1)
        
        # Row 2: Key ID + Secret
        zdx_row2 = QHBoxLayout()
        self.zdx_key_id = QLineEdit()
        self.zdx_key_id.setPlaceholderText("Key ID")
        zdx_row2.addWidget(self.zdx_key_id, 1)
        self.zdx_key_secret = QLineEdit()
        self.zdx_key_secret.setEchoMode(QLineEdit.EchoMode.Password)
        self.zdx_key_secret.setPlaceholderText("Key Secret")
        zdx_row2.addWidget(self.zdx_key_secret, 1)
        zdx_layout.addLayout(zdx_row2)
        
        left_column.addWidget(zdx_group)
        
        # ZCC Settings (Left) - Compact 2-row layout
        zcc_group = QGroupBox(self.tr("ZCC (Client Connector)"))
        zcc_layout = QVBoxLayout(zcc_group)
        zcc_layout.setSpacing(4)
        
        # Row 1: Enabled + Cloud
        zcc_row1 = QHBoxLayout()
        self.zcc_enabled = QCheckBox(self.tr("Enabled"))
        zcc_row1.addWidget(self.zcc_enabled)
        self.zcc_cloud = QLineEdit()
        self.zcc_cloud.setPlaceholderText("Cloud (api.zsapi.net)")
        zcc_row1.addWidget(self.zcc_cloud, 1)
        zcc_layout.addLayout(zcc_row1)
        
        # Row 2: API key + secret key.  ZCC's JWT login does not use OAuth.
        zcc_row2 = QHBoxLayout()
        self.zcc_client_id = QLineEdit()
        self.zcc_client_id.setPlaceholderText("API Key")
        zcc_row2.addWidget(self.zcc_client_id, 1)
        self.zcc_client_secret = QLineEdit()
        self.zcc_client_secret.setEchoMode(QLineEdit.EchoMode.Password)
        self.zcc_client_secret.setPlaceholderText("API Secret")
        zcc_row2.addWidget(self.zcc_client_secret, 1)
        zcc_layout.addLayout(zcc_row2)
        
        left_column.addWidget(zcc_group)
        left_column.addStretch()
        
        # OneAPI Settings (Right) - New unified auth
        oneapi_group = QGroupBox(self.tr("OneAPI (Unified v3 Framework)"))
        oneapi_layout = QVBoxLayout(oneapi_group)
        oneapi_layout.setSpacing(4)
        
        # Row 1: Enabled + Vanity Domain
        oneapi_row1 = QHBoxLayout()
        self.oneapi_enabled = QCheckBox(self.tr("Enabled"))
        oneapi_row1.addWidget(self.oneapi_enabled)
        self.oneapi_vanity_domain = QLineEdit()
        self.oneapi_vanity_domain.setPlaceholderText("Vanity Domain (e.g. acme)")
        oneapi_row1.addWidget(self.oneapi_vanity_domain, 1)
        oneapi_layout.addLayout(oneapi_row1)
        
        # Row 2: Client ID + Secret
        oneapi_row2 = QHBoxLayout()
        self.oneapi_client_id = QLineEdit()
        self.oneapi_client_id.setPlaceholderText("Client ID (from ZIdentity API Clients)")
        oneapi_row2.addWidget(self.oneapi_client_id, 1)
        self.oneapi_client_secret = QLineEdit()
        self.oneapi_client_secret.setEchoMode(QLineEdit.EchoMode.Password)
        self.oneapi_client_secret.setPlaceholderText("Client Secret")
        oneapi_row2.addWidget(self.oneapi_client_secret, 1)
        oneapi_layout.addLayout(oneapi_row2)
        
        # Row 3: Cloud + Customer ID (for ZPA endpoints)
        oneapi_row3 = QHBoxLayout()
        self.oneapi_cloud = QLineEdit()
        self.oneapi_cloud.setPlaceholderText("Cloud (empty=production, or: beta, alpha)")
        oneapi_row3.addWidget(self.oneapi_cloud, 1)
        self.oneapi_customer_id = QLineEdit()
        self.oneapi_customer_id.setPlaceholderText("ZPA Customer ID (optional)")
        oneapi_row3.addWidget(self.oneapi_customer_id, 1)
        oneapi_layout.addLayout(oneapi_row3)
        
        right_column.addWidget(oneapi_group)
        
        # ZIdentity Settings (Right) - Compact 2-row layout
        zidentity_group = QGroupBox(self.tr("ZIdentity (Identity & Access)"))
        zidentity_layout = QVBoxLayout(zidentity_group)
        zidentity_layout.setSpacing(4)
        
        # Row 1: Enabled + Domain
        zid_row1 = QHBoxLayout()
        self.zidentity_enabled = QCheckBox(self.tr("Enabled"))
        zid_row1.addWidget(self.zidentity_enabled)
        self.zidentity_domain = QLineEdit()
        self.zidentity_domain.setPlaceholderText("Domain (tenant.zslogin.net)")
        zid_row1.addWidget(self.zidentity_domain, 1)
        zidentity_layout.addLayout(zid_row1)
        
        # Row 2: Client ID + Secret
        zid_row2 = QHBoxLayout()
        self.zidentity_client_id = QLineEdit()
        self.zidentity_client_id.setPlaceholderText("Client ID")
        zid_row2.addWidget(self.zidentity_client_id, 1)
        self.zidentity_client_secret = QLineEdit()
        self.zidentity_client_secret.setEchoMode(QLineEdit.EchoMode.Password)
        self.zidentity_client_secret.setPlaceholderText("Client Secret")
        zid_row2.addWidget(self.zidentity_client_secret, 1)
        zidentity_layout.addLayout(zid_row2)
        
        right_column.addWidget(zidentity_group)
        
        # ZTW Settings (Right) - Compact 2-row layout
        ztw_group = QGroupBox(self.tr("ZTW (Zero Trust Workloads)"))
        ztw_layout = QVBoxLayout(ztw_group)
        ztw_layout.setSpacing(4)
        
        # Row 1: Enabled + Cloud
        ztw_row1 = QHBoxLayout()
        self.ztw_enabled = QCheckBox(self.tr("Enabled"))
        ztw_row1.addWidget(self.ztw_enabled)
        self.ztw_cloud = QLineEdit()
        self.ztw_cloud.setPlaceholderText("Cloud (api.zscaler.com)")
        ztw_row1.addWidget(self.ztw_cloud, 1)
        ztw_layout.addLayout(ztw_row1)
        
        # Row 2: Client ID + Secret
        ztw_row2 = QHBoxLayout()
        self.ztw_client_id = QLineEdit()
        self.ztw_client_id.setPlaceholderText("Client ID")
        ztw_row2.addWidget(self.ztw_client_id, 1)
        self.ztw_client_secret = QLineEdit()
        self.ztw_client_secret.setEchoMode(QLineEdit.EchoMode.Password)
        self.ztw_client_secret.setPlaceholderText("Client Secret")
        ztw_row2.addWidget(self.ztw_client_secret, 1)
        ztw_layout.addLayout(ztw_row2)
        
        right_column.addWidget(ztw_group)
        
        # ZWA Settings (Right) - Compact 2-row layout
        zwa_group = QGroupBox(self.tr("ZWA (Workflow Automation)"))
        zwa_layout = QVBoxLayout(zwa_group)
        zwa_layout.setSpacing(4)
        
        # Row 1: Enabled + Cloud
        zwa_row1 = QHBoxLayout()
        self.zwa_enabled = QCheckBox(self.tr("Enabled"))
        zwa_row1.addWidget(self.zwa_enabled)
        self.zwa_cloud = QLineEdit()
        self.zwa_cloud.setPlaceholderText("Cloud (api.zscaler.com)")
        zwa_row1.addWidget(self.zwa_cloud, 1)
        zwa_layout.addLayout(zwa_row1)
        
        # Row 2: Client ID + Secret
        zwa_row2 = QHBoxLayout()
        self.zwa_client_id = QLineEdit()
        self.zwa_client_id.setPlaceholderText("Client ID")
        zwa_row2.addWidget(self.zwa_client_id, 1)
        self.zwa_client_secret = QLineEdit()
        self.zwa_client_secret.setEchoMode(QLineEdit.EchoMode.Password)
        self.zwa_client_secret.setPlaceholderText("Client Secret")
        zwa_row2.addWidget(self.zwa_client_secret, 1)
        zwa_layout.addLayout(zwa_row2)
        
        right_column.addWidget(zwa_group)
        
        # EASM Settings (Right) - Compact 2-row layout
        easm_group = QGroupBox(self.tr("EASM (Attack Surface Management)"))
        easm_layout = QVBoxLayout(easm_group)
        easm_layout.setSpacing(4)
        
        # Row 1: Enabled + Cloud
        easm_row1 = QHBoxLayout()
        self.easm_enabled = QCheckBox(self.tr("Enabled"))
        easm_row1.addWidget(self.easm_enabled)
        self.easm_cloud = QLineEdit()
        self.easm_cloud.setPlaceholderText("Cloud (api.zscaler.com)")
        easm_row1.addWidget(self.easm_cloud, 1)
        easm_layout.addLayout(easm_row1)
        
        # Row 2: Client ID + Secret
        easm_row2 = QHBoxLayout()
        self.easm_client_id = QLineEdit()
        self.easm_client_id.setPlaceholderText("Client ID")
        easm_row2.addWidget(self.easm_client_id, 1)
        self.easm_client_secret = QLineEdit()
        self.easm_client_secret.setEchoMode(QLineEdit.EchoMode.Password)
        self.easm_client_secret.setPlaceholderText("Client Secret")
        easm_row2.addWidget(self.easm_client_secret, 1)
        easm_layout.addLayout(easm_row2)
        
        right_column.addWidget(easm_group)
        right_column.addStretch()
        
        # Add columns to main layout
        creds_columns.addLayout(left_column)
        creds_columns.addLayout(right_column)
        creds_main_layout.addLayout(creds_columns)
        
        tabs.addTab(creds_widget, self.tr("Credentials"))
        
        # === Advanced Tab ===
        advanced_widget = QWidget()
        advanced_layout = QVBoxLayout(advanced_widget)
        
        # Network Settings
        network_group = QGroupBox(self.tr("Network"))
        network_layout = QFormLayout(network_group)
        
        self.timeout_spin = QComboBox()
        self.timeout_spin.setSizeAdjustPolicy(QComboBox.SizeAdjustPolicy.AdjustToContents)
        self.timeout_spin.setMinimumContentsLength(10)
        self.timeout_spin.addItems(["10", "30", "60", "120", "300"])
        self.timeout_spin.setEditable(True)
        network_layout.addRow(self.tr("Request Timeout (seconds):"), self.timeout_spin)
        
        self.verify_ssl = QComboBox()
        self.verify_ssl.setSizeAdjustPolicy(QComboBox.SizeAdjustPolicy.AdjustToContents)
        self.verify_ssl.setMinimumContentsLength(10)
        self.verify_ssl.addItems([self.tr("Enabled"), self.tr("Disabled")])
        ssl_note = QLabel(self.tr("<small><i>⚠️ Only disable for testing</i></small>"))
        ssl_layout = QHBoxLayout()
        ssl_layout.addWidget(self.verify_ssl)
        ssl_layout.addWidget(ssl_note)
        ssl_layout.addStretch()
        network_layout.addRow(self.tr("SSL Verification:"), ssl_layout)
        
        advanced_layout.addWidget(network_group)
        
        # Proxy Settings
        proxy_group = QGroupBox(self.tr("Proxy"))
        proxy_layout = QFormLayout(proxy_group)
        
        self.proxy_enabled = QComboBox()
        self.proxy_enabled.setSizeAdjustPolicy(QComboBox.SizeAdjustPolicy.AdjustToContents)
        self.proxy_enabled.setMinimumContentsLength(10)
        self.proxy_enabled.addItems([self.tr("No Proxy"), self.tr("System Proxy"), self.tr("Manual")])
        self.proxy_enabled.currentIndexChanged.connect(self._on_proxy_changed)
        proxy_layout.addRow(self.tr("Proxy Mode:"), self.proxy_enabled)
        
        self.proxy_host = QLineEdit()
        self.proxy_host.setPlaceholderText("proxy.example.com")
        proxy_layout.addRow(self.tr("Proxy Host:"), self.proxy_host)
        
        self.proxy_port = QLineEdit()
        self.proxy_port.setPlaceholderText("8080")
        self.proxy_port.setMaximumWidth(100)
        proxy_layout.addRow(self.tr("Proxy Port:"), self.proxy_port)
        
        self.proxy_username = QLineEdit()
        self.proxy_username.setPlaceholderText(self.tr("Optional"))
        proxy_layout.addRow(self.tr("Proxy Username:"), self.proxy_username)
        
        self.proxy_password = QLineEdit()
        self.proxy_password.setEchoMode(QLineEdit.EchoMode.Password)
        self.proxy_password.setPlaceholderText(self.tr("Optional"))
        proxy_layout.addRow(self.tr("Proxy Password:"), self.proxy_password)
        
        advanced_layout.addWidget(proxy_group)
        
        # Behavior Settings
        behavior_group = QGroupBox(self.tr("Behavior"))
        behavior_layout = QFormLayout(behavior_group)
        
        self.auto_auth = QComboBox()
        self.auto_auth.setSizeAdjustPolicy(QComboBox.SizeAdjustPolicy.AdjustToContents)
        self.auto_auth.setMinimumContentsLength(10)
        self.auto_auth.addItems([self.tr("Disabled"), self.tr("Enabled")])
        behavior_layout.addRow(self.tr("Auto-authenticate on startup:"), self.auto_auth)
        
        self.save_history = QComboBox()
        self.save_history.setSizeAdjustPolicy(QComboBox.SizeAdjustPolicy.AdjustToContents)
        self.save_history.setMinimumContentsLength(10)
        self.save_history.addItems([self.tr("Disabled"), self.tr("Enabled")])
        behavior_layout.addRow(self.tr("Save request history:"), self.save_history)
        
        self.history_limit = QComboBox()
        self.history_limit.setSizeAdjustPolicy(QComboBox.SizeAdjustPolicy.AdjustToContents)
        self.history_limit.setMinimumContentsLength(10)
        self.history_limit.addItems(["50", "100", "200", "500", "1000"])
        behavior_layout.addRow(self.tr("History limit:"), self.history_limit)
        
        self.default_api = QComboBox()
        self.default_api.setSizeAdjustPolicy(QComboBox.SizeAdjustPolicy.AdjustToContents)
        self.default_api.setMinimumContentsLength(10)
        self.default_api.addItems(["OneAPI", "ZIA", "ZPA", "ZDX", "ZCC", "ZIdentity", "ZTW", "ZWA", "EASM"])
        behavior_layout.addRow(self.tr("Default API:"), self.default_api)
        
        self.auto_update_check = QComboBox()
        self.auto_update_check.setSizeAdjustPolicy(QComboBox.SizeAdjustPolicy.AdjustToContents)
        self.auto_update_check.setMinimumContentsLength(10)
        self.auto_update_check.addItems([self.tr("Disabled"), self.tr("Enabled")])
        behavior_layout.addRow(self.tr("Check for updates on startup:"), self.auto_update_check)
        
        advanced_layout.addWidget(behavior_group)
        advanced_layout.addStretch()
        
        tabs.addTab(advanced_widget, self.tr("Advanced"))
        
        # === Display Tab ===
        display_widget = QWidget()
        display_layout = QVBoxLayout(display_widget)
        
        display_group = QGroupBox(self.tr("Response Display"))
        display_form = QFormLayout(display_group)
        
        self.json_indent = QComboBox()
        self.json_indent.setSizeAdjustPolicy(QComboBox.SizeAdjustPolicy.AdjustToContents)
        self.json_indent.setMinimumContentsLength(10)
        self.json_indent.addItems(["2", "4", "Tab"])
        display_form.addRow(self.tr("JSON Indentation:"), self.json_indent)
        
        self.word_wrap = QComboBox()
        self.word_wrap.setSizeAdjustPolicy(QComboBox.SizeAdjustPolicy.AdjustToContents)
        self.word_wrap.setMinimumContentsLength(10)
        self.word_wrap.addItems([self.tr("Disabled"), self.tr("Enabled")])
        display_form.addRow(self.tr("Word Wrap:"), self.word_wrap)
        
        self.font_size = QComboBox()
        self.font_size.setSizeAdjustPolicy(QComboBox.SizeAdjustPolicy.AdjustToContents)
        self.font_size.setMinimumContentsLength(10)
        self.font_size.addItems(["10", "11", "12", "13", "14", "16", "18"])
        display_form.addRow(self.tr("Font Size:"), self.font_size)
        
        self.theme = QComboBox()
        self.theme.setSizeAdjustPolicy(QComboBox.SizeAdjustPolicy.AdjustToContents)
        self.theme.setMinimumContentsLength(10)
        self.theme.addItems([self.tr("Light"), self.tr("Dark"), self.tr("System")])
        display_form.addRow(self.tr("Theme:"), self.theme)
        
        display_layout.addWidget(display_group)
        display_layout.addStretch()
        
        tabs.addTab(display_widget, self.tr("Display"))

        # === Language Tab ===
        language_widget = QWidget()
        language_layout = QVBoxLayout(language_widget)
        language_group = QGroupBox(self.tr("Language"))
        language_form = QFormLayout(language_group)
        self.language_choice = QComboBox()
        self.language_choice.addItem(self.tr("System default"), "system")
        for name, code in LANGUAGES:
            self.language_choice.addItem(name, code)
        language_form.addRow(self.tr("Application language:"), self.language_choice)
        language_hint = QLabel(self.tr("System default follows your operating system language. Restart after saving to apply a change."))
        language_hint.setWordWrap(True)
        language_layout.addWidget(language_group)
        ai_group = QGroupBox(self.tr("AI / LLM"))
        ai_form = QFormLayout(ai_group)
        self.ai_provider = QComboBox()
        self.ai_provider.addItem(self.tr("Local catalog assistant"), "catalog")
        self.ai_provider.addItem(self.tr("OpenAI-compatible cloud"), "openai")
        self.ai_provider.addItem(self.tr("Local OpenAI-compatible server"), "local")
        ai_form.addRow(self.tr("AI provider:"), self.ai_provider)
        self.ai_endpoint = QLineEdit()
        self.ai_endpoint.setPlaceholderText("http://localhost:11434/v1")
        ai_form.addRow(self.tr("AI endpoint:"), self.ai_endpoint)
        self.ai_model = QLineEdit()
        ai_form.addRow(self.tr("Model:"), self.ai_model)
        self.ai_api_key = QLineEdit()
        self.ai_api_key.setEchoMode(QLineEdit.EchoMode.Password)
        self.ai_api_key.setPlaceholderText(self.tr("Stored securely in your system keychain"))
        ai_form.addRow(self.tr("API key:"), self.ai_api_key)
        self.ai_allow_external = QCheckBox(self.tr("Allow this app to send the masked question and catalog metadata to an external AI service"))
        ai_form.addRow(self.ai_allow_external)
        ai_buttons = QHBoxLayout()
        clear_ai_key = QPushButton(self.tr("Clear AI key"))
        clear_ai_key.clicked.connect(self._clear_ai_key)
        ai_buttons.addWidget(clear_ai_key)
        test_ai = QPushButton(self.tr("Test AI connection"))
        test_ai.clicked.connect(self._test_ai_connection)
        ai_buttons.addWidget(test_ai)
        ai_form.addRow(ai_buttons)
        language_layout.addWidget(ai_group)
        language_layout.addWidget(language_hint)
        language_layout.addStretch()
        tabs.addTab(language_widget, self.tr("Language"))
        
        layout.addWidget(tabs)
        
        # Buttons
        buttons = QDialogButtonBox(
            QDialogButtonBox.StandardButton.Save | 
            QDialogButtonBox.StandardButton.Cancel |
            QDialogButtonBox.StandardButton.RestoreDefaults
        )
        buttons.accepted.connect(self.accept)
        buttons.rejected.connect(self.reject)
        buttons.button(QDialogButtonBox.StandardButton.RestoreDefaults).clicked.connect(
            self._restore_defaults
        )
        layout.addWidget(buttons)
        
        self._load_settings()
        self._apply_mode()
        self._on_proxy_changed()
    
    def _on_proxy_changed(self):
        """Enable/disable proxy fields based on mode."""
        manual = self.proxy_enabled.currentIndex() == 2
        self.proxy_host.setEnabled(manual)
        self.proxy_port.setEnabled(manual)
        self.proxy_username.setEnabled(manual)
        self.proxy_password.setEnabled(manual)

    def _apply_mode(self):
        """Keep first-time configuration focused while preserving expert controls."""
        advanced = self.mode_choice.currentData() == "advanced"
        for group in self.findChildren(QGroupBox):
            if group.title().startswith("OneAPI") or group.title() in {self.tr("Language"), self.tr("AI / LLM")}:
                continue
            group.setVisible(advanced)
        for index in range(self.settings_tabs.count()):
            title = self.settings_tabs.tabText(index)
            self.settings_tabs.setTabVisible(index, advanced or title in {self.tr("Credentials"), self.tr("Language")})
    
    def _restore_defaults(self):
        """Restore default settings."""
        reply = QMessageBox.question(
            self,
            self.tr("Restore Defaults"),
            self.tr("This will reset all advanced settings to defaults. Continue?"),
            QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.No
        )
        if reply == QMessageBox.StandardButton.Yes:
            self.timeout_spin.setCurrentText("30")
            self.verify_ssl.setCurrentIndex(0)
            self.proxy_enabled.setCurrentIndex(0)
            self.proxy_host.clear()
            self.proxy_port.clear()
            self.proxy_username.clear()
            self.proxy_password.clear()
            self.auto_auth.setCurrentIndex(0)
            self.save_history.setCurrentIndex(1)
            self.history_limit.setCurrentText("100")
            self.default_api.setCurrentIndex(0)
            self.json_indent.setCurrentText("2")
            self.word_wrap.setCurrentIndex(0)
            self.font_size.setCurrentText("11")
            self.theme.setCurrentIndex(2)
    
    def _load_settings(self):
        settings = QSettings("Zscaler", "APIClient")
        
        # API Enabled states
        self.zia_enabled.setChecked(settings.value("zia/enabled", "true") == "true")
        self.zpa_enabled.setChecked(settings.value("zpa/enabled", "false") == "true")
        self.zdx_enabled.setChecked(settings.value("zdx/enabled", "false") == "true")
        self.zcc_enabled.setChecked(settings.value("zcc/enabled", "false") == "true")
        self.zidentity_enabled.setChecked(settings.value("zidentity/enabled", "false") == "true")
        self.ztw_enabled.setChecked(settings.value("ztw/enabled", "false") == "true")
        self.zwa_enabled.setChecked(settings.value("zwa/enabled", "false") == "true")
        self.easm_enabled.setChecked(settings.value("easm/enabled", "false") == "true")
        
        # Credentials (non-sensitive from QSettings, sensitive from Keychain)
        self.zia_cloud.setText(settings.value("zia/cloud", ""))
        self.zia_api_key.setText(secure_get("zia_api_key"))
        self.zia_username.setText(settings.value("zia/username", ""))
        self.zia_password.setText(secure_get("zia_password"))
        self.zpa_cloud.setText(settings.value("zpa/cloud", ""))
        self.zpa_client_id.setText(settings.value("zpa/client_id", ""))
        self.zpa_client_secret.setText(secure_get("zpa_client_secret"))
        self.zpa_customer_id.setText(settings.value("zpa/customer_id", ""))
        
        # ZDX
        self.zdx_cloud.setText(settings.value("zdx/cloud", ""))
        self.zdx_key_id.setText(settings.value("zdx/key_id", ""))
        self.zdx_key_secret.setText(secure_get("zdx_key_secret"))
        
        # ZCC
        self.zcc_cloud.setText(settings.value("zcc/cloud", ""))
        self.zcc_client_id.setText(settings.value("zcc/client_id", ""))
        self.zcc_client_secret.setText(secure_get("zcc_client_secret"))
        
        # ZIdentity
        self.zidentity_domain.setText(settings.value("zidentity/domain", ""))
        self.zidentity_client_id.setText(settings.value("zidentity/client_id", ""))
        self.zidentity_client_secret.setText(secure_get("zidentity_client_secret"))
        
        # ZTW
        self.ztw_cloud.setText(settings.value("ztw/cloud", ""))
        self.ztw_client_id.setText(settings.value("ztw/client_id", ""))
        self.ztw_client_secret.setText(secure_get("ztw_client_secret"))
        
        # ZWA
        self.zwa_cloud.setText(settings.value("zwa/cloud", ""))
        self.zwa_client_id.setText(settings.value("zwa/client_id", ""))
        self.zwa_client_secret.setText(secure_get("zwa_client_secret"))
        
        # EASM
        self.easm_cloud.setText(settings.value("easm/cloud", ""))
        self.easm_client_id.setText(settings.value("easm/client_id", ""))
        self.easm_client_secret.setText(secure_get("easm_client_secret"))
        
        # OneAPI
        self.oneapi_enabled.setChecked(settings.value("oneapi/enabled", "true") == "true")
        self.oneapi_vanity_domain.setText(settings.value("oneapi/vanity_domain", ""))
        self.oneapi_client_id.setText(settings.value("oneapi/client_id", ""))
        self.oneapi_client_secret.setText(secure_get("oneapi_client_secret"))
        self.oneapi_cloud.setText(settings.value("oneapi/cloud", ""))
        self.oneapi_customer_id.setText(settings.value("oneapi/customer_id", ""))
        
        # Advanced
        self.timeout_spin.setCurrentText(settings.value("advanced/timeout", "30"))
        self.verify_ssl.setCurrentIndex(0 if settings.value("advanced/verify_ssl", "true") == "true" else 1)
        self.proxy_enabled.setCurrentIndex(int(settings.value("advanced/proxy_mode", "0")))
        self.proxy_host.setText(settings.value("advanced/proxy_host", ""))
        self.proxy_port.setText(settings.value("advanced/proxy_port", ""))
        self.proxy_username.setText(settings.value("advanced/proxy_username", ""))
        self.proxy_password.setText(secure_get("proxy_password"))
        self.auto_auth.setCurrentIndex(1 if settings.value("advanced/auto_auth", "false") == "true" else 0)
        self.save_history.setCurrentIndex(1 if settings.value("advanced/save_history", "true") == "true" else 0)
        self.history_limit.setCurrentText(settings.value("advanced/history_limit", "100"))
        self.default_api.setCurrentText(settings.value("advanced/default_api", "ZIA"))
        self.auto_update_check.setCurrentIndex(1 if settings.value("advanced/auto_update_check", "true") == "true" else 0)
        
        # Display
        self.json_indent.setCurrentText(settings.value("display/json_indent", "2"))
        self.word_wrap.setCurrentIndex(1 if settings.value("display/word_wrap", "false") == "true" else 0)
        self.font_size.setCurrentText(settings.value("display/font_size", "11"))
        self.theme.setCurrentIndex(int(settings.value("display/theme", "2")))
        language = str(settings.value("language", "system"))
        self.language_choice.setCurrentIndex(max(0, self.language_choice.findData(language)))
        self.mode_choice.setCurrentIndex(0 if settings.value("ui/mode", "basic") == "basic" else 1)
        self.ai_provider.setCurrentIndex(max(0, self.ai_provider.findData(settings.value("ai/provider", "catalog"))))
        self.ai_endpoint.setText(settings.value("ai/endpoint", ""))
        self.ai_model.setText(settings.value("ai/model", ""))
        if secure_get("ai_api_key"):
            self.ai_api_key.setPlaceholderText(self.tr("Configured securely in your system keychain"))
        self.ai_allow_external.setChecked(settings.value("ai/allow_external", "false") == "true")

    def _clear_ai_key(self):
        secure_delete("ai_api_key")
        self.ai_api_key.clear()
        self.ai_api_key.setPlaceholderText(self.tr("AI key cleared"))

    def _test_ai_connection(self):
        endpoint = self.ai_endpoint.text().strip().rstrip("/")
        provider = self.ai_provider.currentData()
        if provider == "catalog":
            QMessageBox.information(self, self.tr("AI connection"), self.tr("Local catalog assistant is ready."))
            return
        if not endpoint:
            QMessageBox.warning(self, self.tr("AI connection"), self.tr("Enter an AI endpoint first."))
            return
        def check_connection():
            request = urllib.request.Request(f"{endpoint}/models", headers={"Authorization": f"Bearer {secure_get('ai_api_key')}"} if secure_get("ai_api_key") else {})
            with build_network_opener(QSettings("Zscaler", "APIClient")).open(request, timeout=10) as response:
                response.read(1)
            return self.tr("AI connection succeeded.")
        self.ai_test_worker = LlmWorker(check_connection)
        self.ai_test_worker.completed.connect(lambda message: QMessageBox.information(self, self.tr("AI connection"), message))
        self.ai_test_worker.failed.connect(lambda error: QMessageBox.warning(self, self.tr("AI connection"), self.tr("AI connection failed: {error}").format(error=redact_sensitive(error))))
        self.ai_test_worker.start()
    
    def _validate_and_sanitize(self) -> bool:
        """Validate inputs and show warnings for common mistakes. Returns True if OK."""
        warnings = []
        
        # --- ZIA Cloud ---
        zia_cloud = self.zia_cloud.text().strip()
        if zia_cloud:
            # Strip https:// if pasted
            if zia_cloud.startswith(("https://", "http://")):
                zia_cloud = zia_cloud.split("://", 1)[1].rstrip("/")
                self.zia_cloud.setText(zia_cloud)
                warnings.append(self.tr("ZIA Cloud: Removed URL prefix (only hostname needed)"))
        
        # --- ZPA Cloud ---
        zpa_cloud = self.zpa_cloud.text().strip()
        if zpa_cloud and zpa_cloud.startswith(("https://", "http://")):
            zpa_cloud = zpa_cloud.split("://", 1)[1].rstrip("/")
            self.zpa_cloud.setText(zpa_cloud)
            warnings.append(self.tr("ZPA Cloud: Removed URL prefix (only hostname needed)"))
        
        # --- ZPA Customer ID ---
        zpa_cid = self.zpa_customer_id.text().strip()
        if self.zpa_enabled.isChecked() and self.zpa_client_id.text().strip() and not zpa_cid:
            warnings.append(self.tr("ZPA: Customer ID is empty — required for most ZPA endpoints"))
        if zpa_cid and not zpa_cid.isdigit():
            warnings.append(self.tr("ZPA: Customer ID should be numeric (got '{value}')").format(value=zpa_cid[:20]))
        
        # --- OneAPI Vanity Domain ---
        vanity = self.oneapi_vanity_domain.text().strip()
        if vanity:
            if vanity.startswith(("https://", "http://")):
                vanity = vanity.split("://", 1)[1].rstrip("/")
                self.oneapi_vanity_domain.setText(vanity)
                warnings.append(self.tr("OneAPI: Removed URL prefix from vanity domain"))
            if ".zslogin.net" in vanity:
                vanity = vanity.replace(".zslogin.net", "")
                self.oneapi_vanity_domain.setText(vanity)
                warnings.append(self.tr("OneAPI: Removed .zslogin.net suffix — only the prefix is needed (e.g. 'acme')"))
            if "." in vanity:
                warnings.append(self.tr("OneAPI: Vanity domain usually has no dots (e.g. 'acme', not '{value}')").format(value=vanity[:30]))
        
        # --- OneAPI Cloud ---
        oneapi_cloud = self.oneapi_cloud.text().strip()
        if oneapi_cloud:
            if "." in oneapi_cloud:
                warnings.append(self.tr("OneAPI: Cloud should be empty (production) or a simple name like 'beta'/'alpha'. Got '{value}' — this looks like a full domain. Leave empty for production.").format(value=oneapi_cloud[:30]))
            if oneapi_cloud.startswith(("https://", "http://")):
                oneapi_cloud = oneapi_cloud.split("://", 1)[1].rstrip("/")
                self.oneapi_cloud.setText(oneapi_cloud)
        
        # --- OneAPI Customer ID ---
        oneapi_cid = self.oneapi_customer_id.text().strip()
        if oneapi_cid and not oneapi_cid.isdigit():
            warnings.append(self.tr("OneAPI: Customer ID should be numeric (got '{value}')").format(value=oneapi_cid[:20]))
        
        # --- ZIdentity Domain ---
        zid_domain = self.zidentity_domain.text().strip()
        if zid_domain:
            if zid_domain.startswith(("https://", "http://")):
                zid_domain = zid_domain.split("://", 1)[1].rstrip("/")
                self.zidentity_domain.setText(zid_domain)
                warnings.append(self.tr("ZIdentity: Removed URL prefix from domain"))
        
        # --- Enabled but missing credentials ---
        if self.zia_enabled.isChecked() and not self.zia_cloud.text().strip():
            warnings.append(self.tr("ZIA is enabled but Cloud is empty"))
        if self.oneapi_enabled.isChecked() and not vanity:
            warnings.append(self.tr("OneAPI is enabled but Vanity Domain is empty"))
        if self.oneapi_enabled.isChecked() and not self.oneapi_client_id.text().strip():
            warnings.append(self.tr("OneAPI is enabled but Client ID is empty"))
        
        # --- Strip whitespace from all text fields ---
        for field in [self.zia_cloud, self.zia_username, self.zpa_cloud, self.zpa_client_id,
                      self.zpa_customer_id, self.zdx_cloud, self.zdx_key_id,
                      self.zcc_cloud, self.zcc_client_id, self.zidentity_domain,
                      self.zidentity_client_id, self.ztw_cloud, self.ztw_client_id,
                      self.zwa_cloud, self.zwa_client_id, self.easm_cloud,
                      self.easm_client_id, self.oneapi_vanity_domain,
                      self.oneapi_client_id, self.oneapi_cloud, self.oneapi_customer_id]:
            field.setText(field.text().strip())
        
        if warnings:
            msg = QMessageBox(self)
            msg.setIcon(QMessageBox.Icon.Warning)
            msg.setWindowTitle(self.tr("Settings Validation"))
            msg.setText(self.tr("Some settings were adjusted or may need attention:"))
            msg.setDetailedText("\n".join(f"• {w}" for w in warnings))
            msg.setStandardButtons(QMessageBox.StandardButton.Ok | QMessageBox.StandardButton.Cancel)
            msg.setDefaultButton(QMessageBox.StandardButton.Ok)
            msg.button(QMessageBox.StandardButton.Ok).setText(self.tr("Save Anyway"))
            msg.button(QMessageBox.StandardButton.Cancel).setText(self.tr("Go Back"))
            # Auto-show details
            for btn in msg.buttons():
                if msg.buttonRole(btn) == QMessageBox.ButtonRole.ActionRole:
                    btn.click()
                    break
            return msg.exec() == QMessageBox.StandardButton.Ok
        
        return True

    def accept(self):
        if not self._validate_and_sanitize():
            return
        settings = QSettings("Zscaler", "APIClient")
        
        # API Enabled states
        settings.setValue("zia/enabled", "true" if self.zia_enabled.isChecked() else "false")
        settings.setValue("zpa/enabled", "true" if self.zpa_enabled.isChecked() else "false")
        settings.setValue("zdx/enabled", "true" if self.zdx_enabled.isChecked() else "false")
        settings.setValue("zcc/enabled", "true" if self.zcc_enabled.isChecked() else "false")
        settings.setValue("zidentity/enabled", "true" if self.zidentity_enabled.isChecked() else "false")
        settings.setValue("ztw/enabled", "true" if self.ztw_enabled.isChecked() else "false")
        settings.setValue("zwa/enabled", "true" if self.zwa_enabled.isChecked() else "false")
        settings.setValue("easm/enabled", "true" if self.easm_enabled.isChecked() else "false")
        
        # Credentials (non-sensitive to QSettings, sensitive to Keychain)
        settings.setValue("zia/cloud", self.zia_cloud.text())
        secure_store("zia_api_key", self.zia_api_key.text())
        settings.setValue("zia/username", self.zia_username.text())
        secure_store("zia_password", self.zia_password.text())
        settings.setValue("zpa/cloud", self.zpa_cloud.text())
        settings.setValue("zpa/client_id", self.zpa_client_id.text())
        secure_store("zpa_client_secret", self.zpa_client_secret.text())
        settings.setValue("zpa/customer_id", self.zpa_customer_id.text())
        
        # ZDX
        settings.setValue("zdx/cloud", self.zdx_cloud.text())
        settings.setValue("zdx/key_id", self.zdx_key_id.text())
        secure_store("zdx_key_secret", self.zdx_key_secret.text())
        
        # ZCC
        settings.setValue("zcc/cloud", self.zcc_cloud.text())
        settings.setValue("zcc/client_id", self.zcc_client_id.text())
        secure_store("zcc_client_secret", self.zcc_client_secret.text())
        
        # ZIdentity
        settings.setValue("zidentity/domain", self.zidentity_domain.text())
        settings.setValue("zidentity/client_id", self.zidentity_client_id.text())
        secure_store("zidentity_client_secret", self.zidentity_client_secret.text())
        
        # ZTW
        settings.setValue("ztw/cloud", self.ztw_cloud.text())
        settings.setValue("ztw/client_id", self.ztw_client_id.text())
        secure_store("ztw_client_secret", self.ztw_client_secret.text())
        
        # ZWA
        settings.setValue("zwa/cloud", self.zwa_cloud.text())
        settings.setValue("zwa/client_id", self.zwa_client_id.text())
        secure_store("zwa_client_secret", self.zwa_client_secret.text())
        
        # EASM
        settings.setValue("easm/cloud", self.easm_cloud.text())
        settings.setValue("easm/client_id", self.easm_client_id.text())
        secure_store("easm_client_secret", self.easm_client_secret.text())
        
        # OneAPI
        settings.setValue("oneapi/enabled", "true" if self.oneapi_enabled.isChecked() else "false")
        settings.setValue("oneapi/vanity_domain", self.oneapi_vanity_domain.text())
        settings.setValue("oneapi/client_id", self.oneapi_client_id.text())
        secure_store("oneapi_client_secret", self.oneapi_client_secret.text())
        settings.setValue("oneapi/cloud", self.oneapi_cloud.text())
        settings.setValue("oneapi/customer_id", self.oneapi_customer_id.text())
        
        # Advanced
        settings.setValue("advanced/timeout", self.timeout_spin.currentText())
        settings.setValue("advanced/verify_ssl", "true" if self.verify_ssl.currentIndex() == 0 else "false")
        settings.setValue("advanced/proxy_mode", str(self.proxy_enabled.currentIndex()))
        settings.setValue("advanced/proxy_host", self.proxy_host.text())
        settings.setValue("advanced/proxy_port", self.proxy_port.text())
        settings.setValue("advanced/proxy_username", self.proxy_username.text())
        secure_store("proxy_password", self.proxy_password.text())
        settings.setValue("advanced/auto_auth", "true" if self.auto_auth.currentIndex() == 1 else "false")
        settings.setValue("advanced/save_history", "true" if self.save_history.currentIndex() == 1 else "false")
        settings.setValue("advanced/history_limit", self.history_limit.currentText())
        settings.setValue("advanced/default_api", self.default_api.currentText())
        settings.setValue("advanced/auto_update_check", "true" if self.auto_update_check.currentIndex() == 1 else "false")
        
        # Display
        settings.setValue("display/json_indent", self.json_indent.currentText())
        settings.setValue("display/word_wrap", "true" if self.word_wrap.currentIndex() == 1 else "false")
        settings.setValue("display/font_size", self.font_size.currentText())
        settings.setValue("display/theme", str(self.theme.currentIndex()))
        settings.setValue("language", self.language_choice.currentData())
        settings.setValue("ui/mode", self.mode_choice.currentData())
        settings.setValue("ai/provider", self.ai_provider.currentData())
        settings.setValue("ai/endpoint", self.ai_endpoint.text().strip())
        settings.setValue("ai/model", self.ai_model.text().strip())
        settings.setValue("ai/allow_external", "true" if self.ai_allow_external.isChecked() else "false")
        if self.ai_api_key.text():
            secure_store("ai_api_key", self.ai_api_key.text())
        
        super().accept()


class ErrorCodesDialog(QDialog):
    """Dialog showing Zscaler API error codes reference."""
    
    ERROR_CODES = {
        "ZIA": {
            "400": ("Bad Request", "Invalid request syntax or parameters"),
            "401": ("Unauthorized", "Invalid or expired session/credentials"),
            "403": ("Forbidden", "Insufficient permissions for this operation"),
            "404": ("Not Found", "Resource does not exist"),
            "409": ("Conflict", "Resource already exists or conflict with current state"),
            "429": ("Too Many Requests", "Rate limit exceeded - wait and retry"),
            "500": ("Internal Server Error", "Server-side error - contact support if persistent"),
        },
        "ZPA": {
            "400": ("Bad Request", "Malformed request or invalid parameters"),
            "401": ("Unauthorized", "Invalid token or credentials"),
            "403": ("Forbidden", "Access denied - check role permissions"),
            "404": ("Not Found", "Application, segment, or connector not found"),
            "409": ("Conflict", "Duplicate name or conflicting configuration"),
            "422": ("Unprocessable Entity", "Valid syntax but semantic errors"),
            "429": ("Rate Limited", "Too many requests - implement backoff"),
        },
        "ZDX": {
            "1000": ("Invalid Request", "Missing or invalid key, secret, or timestamp"),
            "1001": ("Auth Failed", "Authentication failed - check credentials"),
            "1004": ("Bad Request", "Malformed request body or parameters"),
            "400": ("Bad Request", "Invalid request format"),
            "401": ("Unauthorized", "Token expired or invalid"),
            "403": ("Forbidden", "Insufficient permissions"),
        },
        "ZCC": {
            "400": ("Bad Request", "Invalid parameters or request format"),
            "401": ("Unauthorized", "Invalid or expired OAuth token"),
            "403": ("Forbidden", "API key lacks required permissions"),
            "404": ("Device Not Found", "Device ID or UDID does not exist"),
            "409": ("Conflict", "Device already enrolled or token in use"),
        },
        "ZIdentity": {
            "400": ("Bad Request", "Invalid SCIM request or parameters"),
            "401": ("Unauthorized", "Invalid OAuth token"),
            "403": ("Forbidden", "Client lacks required scopes"),
            "404": ("Not Found", "User, group, or IdP not found"),
            "409": ("Conflict", "User or group already exists"),
            "422": ("Validation Error", "SCIM schema validation failed"),
        },
    }
    
    def __init__(self, parent=None):
        super().__init__(parent)
        self.setWindowTitle(self.tr("API Error Codes Reference"))
        self.setMinimumSize(700, 500)
        
        layout = QVBoxLayout(self)
        
        # Header
        header = QLabel(self.tr("<h2>🔴 Zscaler API Error Codes</h2>"))
        layout.addWidget(header)
        
        desc = QLabel(self.tr("Common error codes and their meanings for each API."))
        desc.setStyleSheet("color: #666; margin-bottom: 10px;")
        layout.addWidget(desc)
        
        # Tab widget for each API
        tabs = QTabWidget()
        
        for api_name, codes in self.ERROR_CODES.items():
            widget = QWidget()
            api_layout = QVBoxLayout(widget)
            
            table = QTableWidget()
            table.setColumnCount(3)
            table.setHorizontalHeaderLabels([self.tr("Code"), self.tr("Name"), self.tr("Description")])
            table.horizontalHeader().setStretchLastSection(True)
            table.horizontalHeader().setSectionResizeMode(0, QHeaderView.ResizeMode.ResizeToContents)
            table.horizontalHeader().setSectionResizeMode(1, QHeaderView.ResizeMode.ResizeToContents)
            table.setRowCount(len(codes))
            table.setEditTriggers(QTableWidget.EditTrigger.NoEditTriggers)
            table.setAlternatingRowColors(True)
            
            for row, (code, (name, desc)) in enumerate(codes.items()):
                table.setItem(row, 0, QTableWidgetItem(str(code)))
                table.setItem(row, 1, QTableWidgetItem(name))
                table.setItem(row, 2, QTableWidgetItem(desc))
            
            api_layout.addWidget(table)
            tabs.addTab(widget, api_name)
        
        layout.addWidget(tabs)
        
        # Tips section
        tips = QLabel(self.tr(
            "<p><b>💡 Tips:</b></p>"
            "<ul>"
            "<li><b>401/403:</b> Re-authenticate using the Auth button</li>"
            "<li><b>429:</b> Wait 60 seconds before retrying</li>"
            "<li><b>500:</b> Check Zscaler status page for outages</li>"
            "</ul>"
        ))
        tips.setStyleSheet("background: #f0f9ff; padding: 10px; border-radius: 5px;")
        layout.addWidget(tips)
        
        # Close button
        close_btn = QPushButton(self.tr("Close"))
        close_btn.clicked.connect(self.accept)
        layout.addWidget(close_btn)


class BatchDialog(QDialog):
    """Dialog for batch operations."""
    
    def __init__(self, parent=None):
        super().__init__(parent)
        self.setWindowTitle(self.tr("Batch Operations"))
        self.setMinimumSize(700, 500)
        
        layout = QVBoxLayout(self)
        
        # Instructions
        instructions = QLabel(self.tr(
            "Import a CSV file to perform batch operations. "
            "The CSV should have columns matching the API parameters."
        ))
        instructions.setWordWrap(True)
        layout.addWidget(instructions)
        
        # File selection
        file_layout = QHBoxLayout()
        self.file_path = QLineEdit()
        self.file_path.setPlaceholderText(self.tr("Select CSV file..."))
        file_layout.addWidget(self.file_path)
        
        browse_btn = QPushButton(self.tr("Browse..."))
        browse_btn.clicked.connect(self._browse_file)
        file_layout.addWidget(browse_btn)
        layout.addLayout(file_layout)
        
        # Preview table
        self.preview_table = QTableWidget()
        self.preview_table.setMinimumHeight(200)
        layout.addWidget(self.preview_table)
        
        # Operation selection
        op_layout = QHBoxLayout()
        op_layout.addWidget(QLabel(self.tr("Operation:")))
        self.operation_combo = QComboBox()
        self.operation_combo.setSizeAdjustPolicy(QComboBox.SizeAdjustPolicy.AdjustToContents)
        self.operation_combo.setMinimumContentsLength(10)
        self.operation_combo.addItem(self.tr("Create Users (ZIA)"), "zia_create_users")
        self.operation_combo.addItem(self.tr("Update Users (ZIA)"), "zia_update_users")
        self.operation_combo.addItem(self.tr("Delete Users (ZIA)"), "zia_delete_users")
        self.operation_combo.addItem(self.tr("Create Locations (ZIA)"), "zia_create_locations")
        self.operation_combo.addItem(self.tr("URL Lookup (ZIA)"), "zia_url_lookup")
        self.operation_combo.addItem(self.tr("Create App Segments (ZPA)"), "zpa_create_app_segments")
        op_layout.addWidget(self.operation_combo)
        op_layout.addStretch()
        layout.addLayout(op_layout)
        
        # Progress
        self.progress_bar = QProgressBar()
        self.progress_bar.setVisible(False)
        layout.addWidget(self.progress_bar)
        
        # Buttons
        buttons = QDialogButtonBox(
            QDialogButtonBox.StandardButton.Ok | QDialogButtonBox.StandardButton.Cancel
        )
        buttons.accepted.connect(self.accept)
        buttons.rejected.connect(self.reject)
        layout.addWidget(buttons)
        
        self.csv_data = []
        self.validation_label = QLabel()
        self.validation_label.setWordWrap(True)
        layout.insertWidget(layout.count() - 2, self.validation_label)
        self.operation_combo.currentIndexChanged.connect(self._update_validation)
    
    def _browse_file(self):
        file_path, _ = QFileDialog.getOpenFileName(
            self, self.tr("Select CSV File"), "", "CSV Files (*.csv);;All Files (*)"
        )
        if file_path:
            self.file_path.setText(file_path)
            self._load_csv(file_path)
    
    def _load_csv(self, file_path: str):
        try:
            with open(file_path, "r", encoding="utf-8") as f:
                reader = csv.DictReader(f)
                self.csv_data = list(reader)
            
            if not self.csv_data:
                return
            
            # Update table
            headers = list(self.csv_data[0].keys())
            self.preview_table.setColumnCount(len(headers))
            self.preview_table.setHorizontalHeaderLabels(headers)
            self.preview_table.setRowCount(min(10, len(self.csv_data)))
            
            for row_idx, row in enumerate(self.csv_data[:10]):
                for col_idx, header in enumerate(headers):
                    item = QTableWidgetItem(str(row.get(header, "")))
                    self.preview_table.setItem(row_idx, col_idx, item)
            
            self.preview_table.resizeColumnsToContents()
            self._update_validation()
            
        except Exception as e:
            QMessageBox.critical(self, self.tr("Error"), str(e))

    def _update_validation(self):
        if not self.csv_data:
            self.validation_label.setText("")
            return
        plan = build_batch_plan(self.operation_combo.currentData(), self.csv_data)
        required = ", ".join(BATCH_OPERATIONS[self.operation_combo.currentData()]["required"])
        if plan["valid"]:
            self.validation_label.setText(self.tr("Validated: {count} requests are ready for review.").format(count=len(plan["requests"])))
        else:
            self.validation_label.setText(self.tr("Batch validation failed. Required CSV columns: {columns}").format(columns=required))


class HistoryDialog(QDialog):
    """Dialog to view and select from request history."""
    
    request_selected = Signal(dict)
    
    def __init__(self, history: List[Dict], parent=None):
        super().__init__(parent)
        self.setWindowTitle(self.tr("Request History"))
        self.setMinimumSize(800, 500)
        self.history = history
        
        layout = QVBoxLayout(self)
        
        # Search
        search_layout = QHBoxLayout()
        search_layout.addWidget(QLabel(self.tr("Search:")))
        self.search_input = QLineEdit()
        self.search_input.setPlaceholderText(self.tr("Filter by URL or method..."))
        self.search_input.textChanged.connect(self._filter_history)
        search_layout.addWidget(self.search_input)
        
        clear_btn = QPushButton(self.tr("Clear History"))
        clear_btn.clicked.connect(self._clear_history)
        search_layout.addWidget(clear_btn)
        layout.addLayout(search_layout)
        
        # History table
        self.history_table = QTableWidget()
        self.history_table.setColumnCount(5)
        self.history_table.setHorizontalHeaderLabels([
            self.tr("Time"), self.tr("Method"), self.tr("URL"), 
            self.tr("Status"), self.tr("Duration")
        ])
        self.history_table.horizontalHeader().setStretchLastSection(True)
        self.history_table.setSelectionBehavior(QTableWidget.SelectionBehavior.SelectRows)
        self.history_table.setSelectionMode(QTableWidget.SelectionMode.SingleSelection)
        self.history_table.doubleClicked.connect(self._on_double_click)
        layout.addWidget(self.history_table)
        
        # Buttons
        btn_layout = QHBoxLayout()
        btn_layout.addStretch()
        
        load_btn = QPushButton(self.tr("Load Request"))
        load_btn.clicked.connect(self._load_selected)
        btn_layout.addWidget(load_btn)
        
        close_btn = QPushButton(self.tr("Close"))
        close_btn.clicked.connect(self.reject)
        btn_layout.addWidget(close_btn)
        layout.addLayout(btn_layout)
        
        self._populate_table()
    
    def _populate_table(self, filter_text: str = ""):
        self.history_table.setRowCount(0)
        filter_lower = filter_text.lower()
        
        for entry in reversed(self.history):  # Most recent first
            if filter_lower and filter_lower not in entry.get("url", "").lower() \
               and filter_lower not in entry.get("method", "").lower():
                continue
            
            row = self.history_table.rowCount()
            self.history_table.insertRow(row)
            
            self.history_table.setItem(row, 0, QTableWidgetItem(entry.get("timestamp", "")))
            self.history_table.setItem(row, 1, QTableWidgetItem(entry.get("method", "")))
            self.history_table.setItem(row, 2, QTableWidgetItem(entry.get("url", "")))
            
            status = entry.get("status", "")
            status_item = QTableWidgetItem(str(status) if status else "-")
            if status and 200 <= status < 300:
                status_item.setForeground(QColor("#22863a"))
            elif status and status >= 400:
                status_item.setForeground(QColor("#d73a49"))
            self.history_table.setItem(row, 3, status_item)
            
            duration = entry.get("duration_ms", "")
            self.history_table.setItem(row, 4, QTableWidgetItem(f"{duration}ms" if duration else "-"))
            
            # Store full entry data
            self.history_table.item(row, 0).setData(Qt.ItemDataRole.UserRole, entry)
        
        self.history_table.resizeColumnsToContents()
    
    def _filter_history(self, text: str):
        self._populate_table(text)
    
    def _clear_history(self):
        reply = QMessageBox.question(
            self,
            self.tr("Clear History"),
            self.tr("Are you sure you want to clear all request history?"),
            QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.No
        )
        if reply == QMessageBox.StandardButton.Yes:
            self.history.clear()
            self._populate_table()
    
    def _on_double_click(self, index):
        self._load_selected()
    
    def _load_selected(self):
        row = self.history_table.currentRow()
        if row >= 0:
            item = self.history_table.item(row, 0)
            if item:
                entry = item.data(Qt.ItemDataRole.UserRole)
                if entry:
                    self.request_selected.emit(entry)
                    self.accept()


class OperationsDialog(QDialog):
    """Advanced local operations: no action is sent to Zscaler without Send."""
    def __init__(self, window, initial_tab=0):
        super().__init__(window)
        self.window = window
        self.settings = QSettings("Zscaler", "APIClient")
        self.setWindowTitle(self.tr("Operations Center"))
        self.resize(900, 620)
        layout = QVBoxLayout(self)
        self.tabs = QTabWidget()
        layout.addWidget(self.tabs)

        dashboard = QWidget(); dashboard_layout = QVBoxLayout(dashboard)
        cards = QGridLayout()
        self.dashboard_cards = {}
        for index, (key, label) in enumerate((("requests", self.tr("Requests")), ("success", self.tr("Success rate")), ("audit", self.tr("Audit integrity")), ("environment", self.tr("Active environment")), ("alerts", self.tr("Open alerts")))):
            card = QFrame(); card.setObjectName("metricCard")
            card_layout = QVBoxLayout(card)
            label_widget = QLabel(label); label_widget.setObjectName("mutedLabel"); card_layout.addWidget(label_widget)
            value = QLabel("—"); value.setObjectName("sectionTitle")
            value_font = value.font(); value_font.setPointSize(18); value_font.setBold(True); value.setFont(value_font)
            card_layout.addWidget(value); self.dashboard_cards[key] = value
            cards.addWidget(card, index // 3, index % 3)
        for column in range(3):
            cards.setColumnStretch(column, 1)
        dashboard_layout.addLayout(cards)
        self.dashboard_chart = NumericBarChart(); self.dashboard_chart.set_style("pie")
        dashboard_layout.addWidget(QLabel(self.tr("Recent request outcomes")))
        dashboard_layout.addWidget(self.dashboard_chart)
        self.dashboard_trend = NumericBarChart(); self.dashboard_trend.set_style("line")
        dashboard_layout.addWidget(QLabel(self.tr("Recent request latency (ms)")))
        dashboard_layout.addWidget(self.dashboard_trend)
        self.dashboard_events = QTableWidget(0, 3); self.dashboard_events.setHorizontalHeaderLabels([self.tr("Time"), self.tr("Activity"), self.tr("Status")]); self.dashboard_events.horizontalHeader().setStretchLastSection(True); self.dashboard_events.setEditTriggers(QTableWidget.EditTrigger.NoEditTriggers)
        dashboard_layout.addWidget(QLabel(self.tr("Recent activity")))
        dashboard_layout.addWidget(self.dashboard_events)
        dashboard_controls = QHBoxLayout()
        refresh = QPushButton(self.tr("Refresh dashboard")); refresh.clicked.connect(self.refresh_dashboard); dashboard_controls.addWidget(refresh)
        self.local_monitor_enabled = QCheckBox(self.tr("Auto-refresh local signals")); self.local_monitor_enabled.setChecked(self.settings.value("monitoring/auto_refresh", "false") == "true"); self.local_monitor_enabled.toggled.connect(self.configure_local_monitor); dashboard_controls.addWidget(self.local_monitor_enabled)
        self.local_monitor_interval = QComboBox(); self.local_monitor_interval.addItem(self.tr("Every 30 seconds"), 30); self.local_monitor_interval.addItem(self.tr("Every minute"), 60); self.local_monitor_interval.addItem(self.tr("Every 5 minutes"), 300)
        interval = int(self.settings.value("monitoring/refresh_seconds", "60")); self.local_monitor_interval.setCurrentIndex(max(0, self.local_monitor_interval.findData(interval))); self.local_monitor_interval.currentIndexChanged.connect(self.configure_local_monitor); dashboard_controls.addWidget(self.local_monitor_interval); dashboard_controls.addStretch()
        dashboard_layout.addLayout(dashboard_controls); self.local_monitor_timer = QTimer(self); self.local_monitor_timer.timeout.connect(self.refresh_local_signals); self.tabs.addTab(dashboard, self.tr("Dashboard"))

        diff_page = QWidget(); diff_layout = QVBoxLayout(diff_page)
        self.before_policy = QPlainTextEdit(); self.before_policy.setPlaceholderText(self.tr("Previous policy JSON"))
        self.after_policy = QPlainTextEdit(); self.after_policy.setPlaceholderText(self.tr("Proposed policy JSON"))
        self.diff_result = QPlainTextEdit(); self.diff_result.setReadOnly(True)
        for widget in (self.before_policy, self.after_policy, self.diff_result): diff_layout.addWidget(widget)
        diff_layout.addWidget(QLabel(self.tr("Policy rule overview")))
        self.policy_chart = NumericBarChart(); self.policy_chart.setMaximumHeight(145); diff_layout.addWidget(self.policy_chart)
        self.policy_rules = QTableWidget(0, 4); self.policy_rules.setHorizontalHeaderLabels([self.tr("Rule"), self.tr("Action"), self.tr("Conditions"), self.tr("State")]); self.policy_rules.horizontalHeader().setStretchLastSection(True); self.policy_rules.setEditTriggers(QTableWidget.EditTrigger.NoEditTriggers); self.policy_rules.setMaximumHeight(160); diff_layout.addWidget(self.policy_rules)
        self.best_practices = QTableWidget(0, 3); self.best_practices.setHorizontalHeaderLabels([self.tr("Severity"), self.tr("Rule"), self.tr("Best-practice finding")]); self.best_practices.horizontalHeader().setStretchLastSection(True); self.best_practices.setEditTriggers(QTableWidget.EditTrigger.NoEditTriggers); self.best_practices.setMaximumHeight(130); diff_layout.addWidget(self.best_practices)
        diff_btn = QPushButton(self.tr("Compare policies")); diff_btn.clicked.connect(self.compare_policies)
        policy_actions = QHBoxLayout(); policy_actions.addWidget(diff_btn)
        export_json = QPushButton(self.tr("Export policy as JSON")); export_json.clicked.connect(lambda: self.export_policy("json")); policy_actions.addWidget(export_json)
        export_yaml = QPushButton(self.tr("Export policy as YAML")); export_yaml.clicked.connect(lambda: self.export_policy("yaml")); policy_actions.addWidget(export_yaml)
        compliance = QPushButton(self.tr("Run compliance checks")); compliance.clicked.connect(self.run_compliance); policy_actions.addWidget(compliance)
        diff_layout.addLayout(policy_actions); self.tabs.addTab(diff_page, self.tr("Policy diff"))

        simulate_page = QWidget(); simulate_layout = QVBoxLayout(simulate_page)
        self.rules_input = QPlainTextEdit(); self.rules_input.setPlaceholderText(self.tr("Rules JSON: [{\"name\": \"Allow staff\", \"conditions\": {\"group\": \"staff\"}, \"action\": \"allow\"}]"))
        self.context_input = QPlainTextEdit(); self.context_input.setPlaceholderText(self.tr("Request context JSON: {\"group\": \"staff\"}"))
        self.simulation_result = QPlainTextEdit(); self.simulation_result.setReadOnly(True)
        for widget in (self.rules_input, self.context_input, self.simulation_result): simulate_layout.addWidget(widget)
        self.simulation_chart = NumericBarChart(); self.simulation_chart.setMaximumHeight(140); simulate_layout.addWidget(self.simulation_chart)
        self.simulation_path = QTableWidget(0, 4); self.simulation_path.setHorizontalHeaderLabels([self.tr("Order"), self.tr("Rule"), self.tr("Action"), self.tr("Decision")]); self.simulation_path.horizontalHeader().setStretchLastSection(True); self.simulation_path.setEditTriggers(QTableWidget.EditTrigger.NoEditTriggers); self.simulation_path.setMaximumHeight(160); simulate_layout.addWidget(self.simulation_path)
        simulate_btn = QPushButton(self.tr("Simulate policy (local only)")); simulate_btn.clicked.connect(self.run_simulation)
        simulate_layout.addWidget(simulate_btn); self.tabs.addTab(simulate_page, self.tr("Simulation"))

        bulk_page = QWidget(); bulk_layout = QVBoxLayout(bulk_page)
        self.bulk_csv = QPlainTextEdit(); self.bulk_csv.setPlaceholderText(self.tr("CSV data, e.g. name,email\nAda,ada@example.com"))
        self.bulk_required = QLineEdit("name,email")
        self.bulk_result = QPlainTextEdit(); self.bulk_result.setReadOnly(True)
        bulk_layout.addWidget(QLabel(self.tr("Required columns (comma separated)"))); bulk_layout.addWidget(self.bulk_required)
        bulk_layout.addWidget(self.bulk_csv); bulk_layout.addWidget(self.bulk_result)
        bulk_btn = QPushButton(self.tr("Validate bulk import")); bulk_btn.clicked.connect(self.validate_bulk)
        bulk_layout.addWidget(bulk_btn); self.tabs.addTab(bulk_page, self.tr("Bulk operations"))

        governance_page = QWidget(); governance_layout = QFormLayout(governance_page)
        self.role_choice = QComboBox(); self.role_choice.addItem(self.tr("Administrator"), "admin"); self.role_choice.addItem(self.tr("Analyst"), "analyst"); self.role_choice.addItem(self.tr("Read only"), "readonly")
        self.role_choice.setCurrentIndex(max(0, self.role_choice.findData(self.settings.value("access/role", "admin"))))
        self.alert_threshold = QLineEdit(str(self.settings.value("monitoring/error_threshold", "10")))
        self.webhook_url = QLineEdit(str(self.settings.value("automation/webhook_url", ""))); self.webhook_url.setPlaceholderText("https://hooks.example.invalid/...")
        self.plugin_path = QLineEdit(str(self.settings.value("automation/local_plugin", ""))); self.plugin_path.setPlaceholderText(self.tr("Absolute path to a reviewed local Python automation"))
        governance_layout.addRow(self.tr("Local role:"), self.role_choice); governance_layout.addRow(self.tr("Alert threshold (errors):"), self.alert_threshold); governance_layout.addRow(self.tr("Webhook endpoint (disabled until approved):"), self.webhook_url); governance_layout.addRow(self.tr("Local automation:"), self.plugin_path)
        governance_save = QPushButton(self.tr("Save governance settings")); governance_save.clicked.connect(self.save_governance); governance_layout.addRow(governance_save)
        governance_note = QLabel(self.tr("Read-only mode blocks write requests and local automation. Every webhook or local automation execution requires explicit approval.")); governance_note.setWordWrap(True); governance_layout.addRow(governance_note)
        self.tabs.addTab(governance_page, self.tr("Governance"))

        integrations_page = QWidget(); integrations_layout = QVBoxLayout(integrations_page)
        integrations_intro = QLabel(self.tr("Official integrations are optional. Credentials remain in the system keychain and no command runs automatically.")); integrations_intro.setWordWrap(True); integrations_layout.addWidget(integrations_intro)
        self.integration_status = QTableWidget(0, 3); self.integration_status.setHorizontalHeaderLabels([self.tr("Integration"), self.tr("Status"), self.tr("Recommended use")]); self.integration_status.horizontalHeader().setStretchLastSection(True); self.integration_status.setEditTriggers(QTableWidget.EditTrigger.NoEditTriggers); integrations_layout.addWidget(self.integration_status)
        self.integration_preview = QPlainTextEdit(); self.integration_preview.setReadOnly(True); integrations_layout.addWidget(self.integration_preview)
        integration_buttons = QGridLayout()
        refresh_integrations = QPushButton(self.tr("Check local integrations")); refresh_integrations.clicked.connect(self.refresh_integrations); integration_buttons.addWidget(refresh_integrations, 0, 0)
        terraform_preview = QPushButton(self.tr("Prepare Terraform import")); terraform_preview.clicked.connect(lambda: self.prepare_integration("terraform")); integration_buttons.addWidget(terraform_preview, 0, 1)
        mcp_preview = QPushButton(self.tr("Prepare MCP connection")); mcp_preview.clicked.connect(lambda: self.prepare_integration("mcp")); integration_buttons.addWidget(mcp_preview, 0, 2)
        sdk_preview = QPushButton(self.tr("Prepare SDK configuration")); sdk_preview.clicked.connect(lambda: self.prepare_integration("sdk")); integration_buttons.addWidget(sdk_preview, 0, 3)
        webhook_test = QPushButton(self.tr("Send masked webhook test")); webhook_test.clicked.connect(self.send_webhook_test); integration_buttons.addWidget(webhook_test, 1, 0)
        local_automation = QPushButton(self.tr("Run reviewed local automation")); local_automation.clicked.connect(self.run_local_automation); integration_buttons.addWidget(local_automation, 1, 1)
        copy_preview = QPushButton(self.tr("Copy reviewed command")); copy_preview.clicked.connect(self.copy_integration_preview); integration_buttons.addWidget(copy_preview, 1, 2)
        webhook_alerts = QPushButton(self.tr("Send current masked alerts")); webhook_alerts.clicked.connect(self.send_webhook_alerts); integration_buttons.addWidget(webhook_alerts, 1, 3)
        for column in range(4): integration_buttons.setColumnStretch(column, 1)
        integrations_layout.addLayout(integration_buttons); self.tabs.addTab(integrations_page, self.tr("Integrations"))

        audit_page = QWidget(); audit_layout = QVBoxLayout(audit_page)
        self.audit_timeline = QTableWidget(0, 3); self.audit_timeline.setHorizontalHeaderLabels([self.tr("Time"), self.tr("Event"), self.tr("Details")]); self.audit_timeline.horizontalHeader().setStretchLastSection(True); self.audit_timeline.setEditTriggers(QTableWidget.EditTrigger.NoEditTriggers); audit_layout.addWidget(self.audit_timeline)
        audit_controls = QHBoxLayout()
        audit_refresh = QPushButton(self.tr("Refresh audit trail")); audit_refresh.clicked.connect(self.refresh_audit); audit_controls.addWidget(audit_refresh)
        schedule = QPushButton(self.tr("Schedule report")); schedule.clicked.connect(self.configure_schedule); audit_controls.addWidget(schedule)
        bundle = QPushButton(self.tr("Create redacted support bundle")); bundle.clicked.connect(self.create_support_bundle); audit_controls.addWidget(bundle)
        audit_layout.addLayout(audit_controls); self.tabs.addTab(audit_page, self.tr("Audit & automation"))

        posture_page = QWidget(); posture_layout = QVBoxLayout(posture_page)
        posture_intro = QLabel(self.tr("Local security posture uses redacted request history and audit integrity. It is an operational signal, not a tenant security assessment.")); posture_intro.setWordWrap(True); posture_layout.addWidget(posture_intro)
        self.posture_score = QLabel("—"); self.posture_score.setObjectName("sectionTitle")
        score_font = self.posture_score.font(); score_font.setPointSize(28); score_font.setBold(True); self.posture_score.setFont(score_font)
        posture_visual = QHBoxLayout(); self.posture_gauge = PostureGauge(); posture_visual.addWidget(self.posture_gauge); posture_visual.addWidget(self.posture_score); posture_visual.addStretch(); posture_layout.addLayout(posture_visual)
        self.posture_chart = NumericBarChart(); posture_layout.addWidget(self.posture_chart)
        self.posture_findings = QTableWidget(0, 3); self.posture_findings.setHorizontalHeaderLabels([self.tr("Severity"), self.tr("Finding"), self.tr("Details")]); self.posture_findings.horizontalHeader().setStretchLastSection(True); self.posture_findings.setEditTriggers(QTableWidget.EditTrigger.NoEditTriggers); posture_layout.addWidget(self.posture_findings)
        posture_refresh = QPushButton(self.tr("Refresh security posture")); posture_refresh.clicked.connect(self.refresh_posture); posture_layout.addWidget(posture_refresh)
        self.posture_tab_index = self.tabs.addTab(posture_page, self.tr("Security posture"))

        alerts_page = QWidget(); alerts_layout = QVBoxLayout(alerts_page)
        alerts_intro = QLabel(self.tr("Local alerts evaluate retained, redacted request history only. They do not monitor the tenant in real time or send data externally.")); alerts_intro.setWordWrap(True); alerts_layout.addWidget(alerts_intro)
        self.alert_summary = QLabel(); self.alert_summary.setObjectName("sectionTitle"); alerts_layout.addWidget(self.alert_summary)
        self.alert_chart = NumericBarChart(); self.alert_chart.setStyleSheet("background: transparent;"); self.alert_chart.setMaximumHeight(145); alerts_layout.addWidget(self.alert_chart)
        self.alert_table = QTableWidget(0, 4); self.alert_table.setHorizontalHeaderLabels([self.tr("Severity"), self.tr("Alert"), self.tr("Count"), self.tr("Evidence")]); self.alert_table.horizontalHeader().setStretchLastSection(True); self.alert_table.setEditTriggers(QTableWidget.EditTrigger.NoEditTriggers); alerts_layout.addWidget(self.alert_table)
        alert_actions = QHBoxLayout(); refresh_alerts = QPushButton(self.tr("Refresh local alerts")); refresh_alerts.clicked.connect(self.refresh_alerts); alert_actions.addWidget(refresh_alerts)
        copy_alerts = QPushButton(self.tr("Copy masked alert summary")); copy_alerts.clicked.connect(self.copy_alert_summary); alert_actions.addWidget(copy_alerts); alert_actions.addStretch(); alerts_layout.addLayout(alert_actions)
        export_alert_json = QPushButton(self.tr("Export alerts as JSON")); export_alert_json.clicked.connect(lambda: self.export_alerts("json")); alert_actions.addWidget(export_alert_json)
        export_alert_markdown = QPushButton(self.tr("Export alerts as Markdown")); export_alert_markdown.clicked.connect(lambda: self.export_alerts("markdown")); alert_actions.addWidget(export_alert_markdown)
        self.alert_tab_index = self.tabs.addTab(alerts_page, self.tr("Alert Center"))

        incident_page = QWidget(); incident_layout = QVBoxLayout(incident_page)
        incident_intro = QLabel(self.tr("Build a redacted local investigation timeline. Prepared chains never send API requests automatically.")); incident_intro.setWordWrap(True); incident_layout.addWidget(incident_intro)
        chain_controls = QHBoxLayout(); chain_controls.addWidget(QLabel(self.tr("Investigation:")))
        self.incident_type = QComboBox(); self.incident_type.addItem(self.tr("API failure investigation"), "failures"); self.incident_type.addItem(self.tr("Change activity review"), "changes"); self.incident_type.addItem(self.tr("Slow response investigation"), "performance"); chain_controls.addWidget(self.incident_type)
        chain_prepare = QPushButton(self.tr("Prepare investigation chain")); chain_prepare.clicked.connect(self.prepare_incident_chain); chain_controls.addWidget(chain_prepare); chain_controls.addStretch(); incident_layout.addLayout(chain_controls)
        self.incident_chain = QPlainTextEdit(); self.incident_chain.setReadOnly(True); self.incident_chain.setMaximumHeight(120); incident_layout.addWidget(self.incident_chain)
        self.incident_timeline = QTableWidget(0, 4); self.incident_timeline.setHorizontalHeaderLabels([self.tr("Time"), self.tr("Source"), self.tr("Severity"), self.tr("Evidence")]); self.incident_timeline.horizontalHeader().setStretchLastSection(True); self.incident_timeline.setEditTriggers(QTableWidget.EditTrigger.NoEditTriggers); incident_layout.addWidget(self.incident_timeline)
        incident_actions = QHBoxLayout(); incident_refresh = QPushButton(self.tr("Refresh investigation")); incident_refresh.clicked.connect(self.refresh_incident); incident_actions.addWidget(incident_refresh)
        incident_export = QPushButton(self.tr("Export incident evidence")); incident_export.clicked.connect(self.export_incident_evidence); incident_actions.addWidget(incident_export); incident_actions.addStretch(); incident_layout.addLayout(incident_actions)
        self.incident_tab_index = self.tabs.addTab(incident_page, self.tr("Incident investigation"))

        change_page = QWidget(); change_layout = QVBoxLayout(change_page)
        change_intro = QLabel(self.tr("Create a local review from Policy diff. Approval records intent only; no policy, Terraform, or Git change is applied automatically.")); change_intro.setWordWrap(True); change_layout.addWidget(change_intro)
        change_form = QFormLayout(); self.change_ticket = QLineEdit(); self.change_ticket.setPlaceholderText(self.tr("Change ticket or reference")); self.change_reviewer = QLineEdit(); self.change_reviewer.setPlaceholderText(self.tr("Reviewer name")); change_form.addRow(self.tr("Reference:"), self.change_ticket); change_form.addRow(self.tr("Reviewer:"), self.change_reviewer); change_layout.addLayout(change_form)
        self.change_review = QPlainTextEdit(); self.change_review.setReadOnly(True); change_layout.addWidget(self.change_review)
        change_controls = QHBoxLayout(); prepare_change = QPushButton(self.tr("Prepare change review")); prepare_change.clicked.connect(self.prepare_change_review); change_controls.addWidget(prepare_change)
        approve_change = QPushButton(self.tr("Record local approval")); approve_change.clicked.connect(self.approve_change_review); change_controls.addWidget(approve_change)
        git_export = QPushButton(self.tr("Export Git review")); git_export.clicked.connect(lambda: self.export_change_review("git")); change_controls.addWidget(git_export)
        rollback_export = QPushButton(self.tr("Export rollback plan")); rollback_export.clicked.connect(lambda: self.export_change_review("rollback")); change_controls.addWidget(rollback_export); change_controls.addStretch(); change_layout.addLayout(change_controls)
        self.change_tab_index = self.tabs.addTab(change_page, self.tr("Change control"))

        reports_page = QWidget(); reports_layout = QVBoxLayout(reports_page)
        reports_intro = QLabel(self.tr("Generate local, redacted reports for leadership, SOC, or operations. Reports contain no credentials and are not sent automatically.")); reports_intro.setWordWrap(True); reports_layout.addWidget(reports_intro)
        report_controls = QHBoxLayout(); report_controls.addWidget(QLabel(self.tr("Report type:")))
        self.report_type = QComboBox(); self.report_type.addItem(self.tr("CISO security summary"), "ciso"); self.report_type.addItem(self.tr("SOC investigation summary"), "soc"); self.report_type.addItem(self.tr("Operations health summary"), "operations"); report_controls.addWidget(self.report_type)
        report_generate = QPushButton(self.tr("Generate report")); report_generate.clicked.connect(self.generate_report); report_controls.addWidget(report_generate); report_controls.addStretch(); reports_layout.addLayout(report_controls)
        self.report_chart = NumericBarChart(); reports_layout.addWidget(self.report_chart)
        self.report_preview = QPlainTextEdit(); self.report_preview.setReadOnly(True); reports_layout.addWidget(self.report_preview)
        report_actions = QHBoxLayout(); report_markdown = QPushButton(self.tr("Export report as Markdown")); report_markdown.clicked.connect(lambda: self.export_report("markdown")); report_actions.addWidget(report_markdown)
        report_json = QPushButton(self.tr("Export report as JSON")); report_json.clicked.connect(lambda: self.export_report("json")); report_actions.addWidget(report_json); report_actions.addStretch(); reports_layout.addLayout(report_actions)
        reports_layout.addWidget(QLabel(self.tr("Scheduled reports")))
        self.report_schedules = QTableWidget(0, 5)
        self.report_schedules.setHorizontalHeaderLabels([self.tr("Name"), self.tr("Type"), self.tr("Cadence"), self.tr("Next run"), self.tr("Status")])
        self.report_schedules.horizontalHeader().setStretchLastSection(True)
        self.report_schedules.setEditTriggers(QTableWidget.EditTrigger.NoEditTriggers)
        self.report_schedules.setSelectionBehavior(QTableWidget.SelectionBehavior.SelectRows)
        self.report_schedules.setMaximumHeight(155)
        reports_layout.addWidget(self.report_schedules)
        schedule_actions = QHBoxLayout()
        create_schedule = QPushButton(self.tr("Schedule report")); create_schedule.clicked.connect(self.configure_schedule); schedule_actions.addWidget(create_schedule)
        run_schedule = QPushButton(self.tr("Run selected now")); run_schedule.clicked.connect(self.run_selected_schedule); schedule_actions.addWidget(run_schedule)
        toggle_schedule = QPushButton(self.tr("Enable or pause")); toggle_schedule.clicked.connect(self.toggle_selected_schedule); schedule_actions.addWidget(toggle_schedule)
        remove_schedule = QPushButton(self.tr("Remove schedule")); remove_schedule.clicked.connect(self.remove_selected_schedule); schedule_actions.addWidget(remove_schedule)
        refresh_schedules = QPushButton(self.tr("Refresh schedules")); refresh_schedules.clicked.connect(self.refresh_schedules); schedule_actions.addWidget(refresh_schedules)
        schedule_actions.addStretch(); reports_layout.addLayout(schedule_actions)
        self.reports_tab_index = self.tabs.addTab(reports_page, self.tr("Reports"))

        chain_page = QWidget(); chain_layout = QVBoxLayout(chain_page)
        chain_intro = QLabel(self.tr("Run a reviewed sequence against the active authenticated environment. Chains are limited to 20 steps, stay on the selected product host, and every run requires approval.")); chain_intro.setWordWrap(True); chain_layout.addWidget(chain_intro)
        chain_layout.addWidget(QLabel(self.tr("Chain JSON")))
        self.api_chain_input = QPlainTextEdit('[\n  {"method": "GET", "url": "/api/v1/users"}\n]')
        self.api_chain_input.setPlaceholderText(self.tr("A JSON list of API requests. Relative paths use the active product host.")); chain_layout.addWidget(self.api_chain_input)
        self.api_chain_preview = QPlainTextEdit(); self.api_chain_preview.setReadOnly(True); self.api_chain_preview.setMaximumHeight(130); chain_layout.addWidget(self.api_chain_preview)
        self.api_chain_result = QPlainTextEdit(); self.api_chain_result.setReadOnly(True); chain_layout.addWidget(self.api_chain_result)
        self.api_chain_stop_on_error = QCheckBox(self.tr("Stop after the first failed step")); self.api_chain_stop_on_error.setChecked(True); chain_layout.addWidget(self.api_chain_stop_on_error)
        chain_actions = QHBoxLayout(); validate_chain = QPushButton(self.tr("Validate chain")); validate_chain.clicked.connect(self.validate_api_chain); chain_actions.addWidget(validate_chain)
        run_chain = QPushButton(self.tr("Run approved chain")); run_chain.clicked.connect(self.run_api_chain); chain_actions.addWidget(run_chain); chain_actions.addStretch(); chain_layout.addLayout(chain_actions)
        self.chain_tab_index = self.tabs.addTab(chain_page, self.tr("API chains"))
        self._apply_operations_mode()
        close = QDialogButtonBox(QDialogButtonBox.StandardButton.Close); close.rejected.connect(self.reject); layout.addWidget(close)
        self.tabs.setCurrentIndex(max(0, min(initial_tab, self.tabs.count() - 1)))
        self.refresh_dashboard(); self.refresh_audit(); self.refresh_integrations(); self.refresh_posture(); self.refresh_alerts(); self.refresh_incident(); self.generate_report(); self.refresh_schedules(); self.configure_local_monitor(self.local_monitor_enabled.isChecked(), record_audit=False)

    def _apply_operations_mode(self):
        """Keep basic mode focused on situational awareness and investigation."""
        basic = self.settings.value("ui/mode", "basic") == "basic"
        advanced_tabs = (1, 2, 3, 4, 5, 6, self.change_tab_index, self.chain_tab_index)
        for index in advanced_tabs:
            self.tabs.setTabVisible(index, not basic)

    def configure_local_monitor(self, enabled=None, record_audit=True):
        """Refresh local views on a user-approved timer; it never sends API calls."""
        enabled = self.local_monitor_enabled.isChecked() if enabled is None else bool(enabled)
        seconds = int(self.local_monitor_interval.currentData() or 60)
        self.settings.setValue("monitoring/auto_refresh", "true" if enabled else "false")
        self.settings.setValue("monitoring/refresh_seconds", str(seconds))
        if enabled:
            self.local_monitor_timer.start(seconds * 1000)
        else:
            self.local_monitor_timer.stop()
        if record_audit:
            AuditTrail(self.settings).append("local_monitor_updated", {"enabled": enabled, "seconds": seconds})

    def refresh_local_signals(self):
        """Update visualizations from retained local data only."""
        self.refresh_dashboard(); self.refresh_posture(); self.refresh_alerts(); self.refresh_incident(); self.generate_report()

    def _json(self, editor, fallback):
        try: return json.loads(editor.toPlainText() or fallback)
        except ValueError as exc: raise ValueError(self.tr("Invalid JSON: ") + str(exc))

    def _severity_item(self, text, severity):
        """Create a color-coded, accessible severity cell for operations tables."""
        colors = {"critical": "#ef4444", "high": "#f97316", "medium": "#facc15", "low": "#38bdf8", "info": "#a78bfa"}
        item = QTableWidgetItem(text)
        item.setForeground(QColor(colors.get(severity, "#94a3b8")))
        font = item.font(); font.setBold(True); item.setFont(font)
        return item

    def refresh_dashboard(self):
        history = getattr(self.window, "request_history", [])
        events = AuditTrail(self.settings).events()
        successful = sum(1 for item in history if str(item.get("status", "")).startswith("2"))
        total = len(history)
        self.dashboard_cards["requests"].setText(str(total))
        self.dashboard_cards["success"].setText(f"{(successful / total * 100):.0f}%" if total else "—")
        valid = AuditTrail(self.settings).verify()
        self.dashboard_cards["audit"].setText("✓" if valid else "!")
        self.dashboard_cards["audit"].setStyleSheet("color: #22c55e;" if valid else "color: #f97316;")
        self.dashboard_cards["audit"].setToolTip(self.tr("Audit chain is valid") if valid else self.tr("Audit chain needs review"))
        self.dashboard_cards["environment"].setText(str(self.settings.value("profiles/active", "default")))
        alerts = self._alert_data()["alerts"]
        self.dashboard_cards["alerts"].setText(str(len(alerts)))
        self.dashboard_cards["alerts"].setStyleSheet("color: #ef4444;" if alerts else "color: #22c55e;")
        outcome = {self.tr("Success"): successful, self.tr("Other"): max(0, total - successful)}
        self.dashboard_chart.set_values([(label, float(value)) for label, value in outcome.items()])
        self.dashboard_trend.set_values(request_latency_trend(history))
        recent = list(reversed(events[-12:]))
        self.dashboard_events.setRowCount(len(recent))
        for row, event in enumerate(recent):
            timestamp = time.strftime("%H:%M:%S", time.localtime(event.get("timestamp", 0)))
            self.dashboard_events.setItem(row, 0, QTableWidgetItem(timestamp))
            self.dashboard_events.setItem(row, 1, QTableWidgetItem(event.get("action", "")))
            self.dashboard_events.setItem(row, 2, QTableWidgetItem("✓" if valid else "!"))

    def refresh_posture(self):
        posture = security_posture(getattr(self.window, "request_history", []), AuditTrail(self.settings).verify())
        self.posture_score.setText(self.tr("Posture score: {score}/100").format(score=posture["score"]))
        self.posture_gauge.set_score(posture["score"])
        severity_labels = {"critical": self.tr("Critical"), "high": self.tr("High"), "medium": self.tr("Medium"), "low": self.tr("Low"), "info": self.tr("Info")}
        labels = [(severity_labels[level], float(count)) for level, count in posture["severity_counts"].items()]
        self.posture_chart.set_style("pie"); self.posture_chart.set_values(labels)
        wording = {
            "audit_integrity": (self.tr("Audit integrity needs review"), self.tr("The local audit chain did not verify.")),
            "repeated_failures": (self.tr("Repeated API failures"), self.tr("{count} failed requests are in local history.")),
            "api_failures": (self.tr("API failures observed"), self.tr("{count} request(s) need review.")),
            "change_burst": (self.tr("Change activity burst"), self.tr("{count} write requests are in local history.")),
            "slow_responses": (self.tr("Slow API responses"), self.tr("{count} request(s) took ten seconds or more.")),
            "no_telemetry": (self.tr("No local telemetry yet"), self.tr("Send or import redacted requests to establish a local baseline.")),
        }
        findings = posture["findings"]
        self.posture_findings.setRowCount(len(findings))
        for row, finding in enumerate(findings):
            title, detail = wording[finding["code"]]
            self.posture_findings.setItem(row, 0, self._severity_item(severity_labels[finding["severity"]], finding["severity"]))
            self.posture_findings.setItem(row, 1, QTableWidgetItem(title))
            self.posture_findings.setItem(row, 2, QTableWidgetItem(detail.format(count=finding["count"])))

    def _alert_data(self):
        try:
            threshold = max(1, int(self.settings.value("monitoring/error_threshold", "10")))
        except (TypeError, ValueError):
            threshold = 10
        return operational_alerts(getattr(self.window, "request_history", []), AuditTrail(self.settings).verify(), threshold)

    def refresh_alerts(self):
        data = self._alert_data(); alerts = data["alerts"]
        self.alert_summary.setText(self.tr("{count} local alert(s) · error threshold: {threshold}").format(count=len(alerts), threshold=data["threshold"]))
        labels = {"critical": self.tr("Critical"), "high": self.tr("High"), "medium": self.tr("Medium"), "low": self.tr("Low")}
        self.alert_chart.set_style("pie")
        chart_values = [(labels[level], float(sum(1 for alert in alerts if alert["severity"] == level))) for level in ("critical", "high", "medium", "low")]
        self.alert_chart.set_values([(label, count) for label, count in chart_values if count])
        wording = {
            "audit_integrity": self.tr("The local audit chain needs review."),
            "error_threshold": self.tr("Local failed requests reached the configured threshold."),
            "rate_limited": self.tr("API rate limiting was observed in local history."),
            "rate_limit_exhausted": self.tr("A response reported no remaining API rate-limit capacity."),
            "endpoint_failure_regression": self.tr("The latest request failed after successful requests to the same endpoint."),
            "endpoint_latency_anomaly": self.tr("The latest endpoint response was much slower than its local baseline."),
            "slow_requests": self.tr("Three or more local requests took ten seconds or more."),
        }
        self.alert_table.setRowCount(len(alerts))
        for row, alert in enumerate(alerts):
            self.alert_table.setItem(row, 0, self._severity_item(labels[alert["severity"]], alert["severity"]))
            self.alert_table.setItem(row, 1, QTableWidgetItem(wording[alert["code"]]))
            self.alert_table.setItem(row, 2, QTableWidgetItem(str(alert["count"])))
            self.alert_table.setItem(row, 3, QTableWidgetItem(json.dumps(mask(alert["evidence"]), ensure_ascii=False)))

    def copy_alert_summary(self):
        QApplication.clipboard().setText(json.dumps(mask(self._alert_data()), indent=2, ensure_ascii=False))
        AuditTrail(self.settings).append("local_alert_summary_copied", {})
        self.alert_summary.setToolTip(self.tr("Copied to clipboard"))

    def _alert_export_content(self, format_name):
        data = mask(self._alert_data())
        if format_name == "json":
            return json.dumps(data, indent=2, ensure_ascii=False)
        lines = ["# " + self.tr("Local alert summary"), "", self.tr("Error threshold: {threshold}").format(threshold=data["threshold"]), self.tr("Local requests: {count}").format(count=data["requests"]), self.tr("Failed requests: {count}").format(count=data["failed"]), ""]
        if not data["alerts"]:
            lines.append(self.tr("No local alerts."))
        for alert in data["alerts"]:
            lines.extend([f"## {alert['severity'].title()} · {alert['code']}", self.tr("Count: {count}").format(count=alert["count"]), "```json", json.dumps(alert["evidence"], indent=2, ensure_ascii=False), "```", ""])
        return "\n".join(lines)

    def export_alerts(self, format_name):
        suffix, filter_name = ("json", "JSON (*.json)") if format_name == "json" else ("md", "Markdown (*.md)")
        path, _ = QFileDialog.getSaveFileName(self, self.tr("Export local alerts"), f"local-alerts.{suffix}", filter_name)
        if not path:
            return
        Path(path).write_text(self._alert_export_content(format_name), encoding="utf-8")
        AuditTrail(self.settings).append("local_alerts_exported", {"format": format_name, "file": os.path.basename(path)})

    def _incident_evidence(self):
        return incident_evidence(getattr(self.window, "request_history", []), AuditTrail(self.settings).events())

    def refresh_incident(self):
        evidence = self._incident_evidence()
        timeline = evidence["timeline"]
        self.incident_timeline.setRowCount(len(timeline))
        severity_labels = {"high": self.tr("High"), "medium": self.tr("Medium"), "info": self.tr("Info")}
        for row, item in enumerate(timeline):
            self.incident_timeline.setItem(row, 0, QTableWidgetItem(str(item["time"])))
            self.incident_timeline.setItem(row, 1, QTableWidgetItem(self.tr("Request") if item["source"] == "request" else self.tr("Audit")))
            self.incident_timeline.setItem(row, 2, self._severity_item(severity_labels[item["severity"]], item["severity"]))
            self.incident_timeline.setItem(row, 3, QTableWidgetItem(item["summary"]))

    def prepare_incident_chain(self):
        chains = {
            "failures": self.tr("1. Review failed requests in the local timeline.\n2. Select the matching product and endpoint in API Explorer.\n3. Run the read-only status or list operation.\n4. Compare the masked response with the audit trail.\n5. Export evidence or open a change review; no remediation is sent automatically."),
            "changes": self.tr("1. Review recent write requests and audit events.\n2. Export or load the current policy object.\n3. Use Policy diff and local simulation.\n4. Run compliance checks.\n5. Prepare a reviewed Terraform or Git change; no apply is sent automatically."),
            "performance": self.tr("1. Identify slow requests in the local timeline.\n2. Review response status, duration, and rate-limit headers.\n3. Query the relevant ZDX or product status endpoint.\n4. Compare against recent requests.\n5. Export the masked incident evidence for escalation."),
        }
        kind = self.incident_type.currentData()
        self.incident_chain.setPlainText(chains[kind])
        AuditTrail(self.settings).append("incident_chain_prepared", {"kind": kind})

    def export_incident_evidence(self):
        path, _ = QFileDialog.getSaveFileName(self, self.tr("Export incident evidence"), "incident-evidence.json", "JSON (*.json)")
        if not path:
            return
        Path(path).write_text(json.dumps(self._incident_evidence(), indent=2, ensure_ascii=False), encoding="utf-8")
        AuditTrail(self.settings).append("incident_evidence_exported", {"file": os.path.basename(path)})

    def _change_plan(self):
        return change_control_plan(self._json(self.before_policy, {}), self._json(self.after_policy, {}))

    def prepare_change_review(self):
        try:
            plan = self._change_plan()
        except ValueError as exc:
            QMessageBox.warning(self, self.tr("Change control"), str(exc)); return
        self.change_review.setPlainText(json.dumps({
            "risk": plan["risk"], "change_counts": plan["change_counts"],
            "compliance_findings": plan["compliance_findings"], "rollback_ready": True,
            "next_steps": [self.tr("Review policy diff"), self.tr("Run local simulation"), self.tr("Record reviewer approval"), self.tr("Export Git/Terraform review"), self.tr("Apply outside this client only after approval")],
        }, indent=2, ensure_ascii=False))
        AuditTrail(self.settings).append("change_review_prepared", {"risk": plan["risk"], "changes": len(plan["changes"])})

    def approve_change_review(self):
        try:
            plan = self._change_plan()
        except ValueError as exc:
            QMessageBox.warning(self, self.tr("Change control"), str(exc)); return
        reviewer = self.change_reviewer.text().strip()
        if not reviewer:
            QMessageBox.warning(self, self.tr("Change control"), self.tr("Enter a reviewer before recording approval.")); return
        AuditTrail(self.settings).append("change_review_approved", {"reference": self.change_ticket.text().strip(), "reviewer": reviewer, "risk": plan["risk"], "changes": len(plan["changes"])})
        self.change_review.appendPlainText("\n" + self.tr("Local approval recorded. External apply remains disabled."))

    def export_change_review(self, kind):
        try:
            plan = self._change_plan()
        except ValueError as exc:
            QMessageBox.warning(self, self.tr("Change control"), str(exc)); return
        if kind == "rollback":
            path, _ = QFileDialog.getSaveFileName(self, self.tr("Export rollback plan"), "rollback-policy.json", "JSON (*.json)")
            content = json.dumps({"rollback_policy": plan["rollback_policy"], "reference": self.change_ticket.text().strip()}, indent=2, ensure_ascii=False)
        else:
            path, _ = QFileDialog.getSaveFileName(self, self.tr("Export Git review"), "policy-review.md", "Markdown (*.md)")
            content = "# Policy change review\n\n" + json.dumps({"risk": plan["risk"], "change_counts": plan["change_counts"], "compliance_findings": plan["compliance_findings"]}, indent=2, ensure_ascii=False) + "\n\n## Proposed policy (redacted)\n```json\n" + policy_as_code(plan["proposed_policy"], "json") + "```\n\n## Rollback\nUse the separately exported rollback plan after change approval.\n"
        if path:
            Path(path).write_text(content, encoding="utf-8")
            AuditTrail(self.settings).append("change_review_exported", {"kind": kind, "file": os.path.basename(path), "risk": plan["risk"]})

    def _report_data(self):
        return security_report_data(self.report_type.currentData(), getattr(self.window, "request_history", []), AuditTrail(self.settings).events(), AuditTrail(self.settings).verify())

    def generate_report(self):
        data = self._report_data()
        posture, incidents = data["posture"], data["incident_summary"]
        severity_labels = {"critical": self.tr("Critical"), "high": self.tr("High"), "medium": self.tr("Medium"), "low": self.tr("Low"), "info": self.tr("Info")}
        self.report_chart.set_style("pie"); self.report_chart.set_values([(severity_labels[level], float(count)) for level, count in posture["severity_counts"].items()])
        title = {"ciso": self.tr("CISO security summary"), "soc": self.tr("SOC investigation summary"), "operations": self.tr("Operations health summary")}[data["kind"]]
        lines = [f"# {title}", "", self.tr("Posture score: {score}/100").format(score=posture["score"]), self.tr("Local requests: {count}").format(count=posture["metrics"]["requests"]), self.tr("Failed requests: {count}").format(count=posture["metrics"]["failed"]), self.tr("Audit integrity: {status}").format(status=self.tr("Valid") if data["audit_valid"] else self.tr("Needs review")), "", self.tr("Incident signals"), f"- {self.tr('High')}: {incidents['high']}", f"- {self.tr('Medium')}: {incidents['medium']}"]
        if data["kind"] == "ciso":
            lines += ["", self.tr("Executive actions"), "- " + self.tr("Review high-risk findings and approval records."), "- " + self.tr("Use the Security Posture and Change Control workspaces for evidence.")]
        elif data["kind"] == "soc":
            lines += ["", self.tr("SOC next steps"), "- " + self.tr("Use Incident Investigation to prepare a review chain."), "- " + self.tr("Export masked evidence before escalation.")]
        else:
            lines += ["", self.tr("Operations next steps"), "- " + self.tr("Review slow responses and API failures."), "- " + self.tr("Confirm rate limits and service health with read-only queries.")]
        self.report_preview.setPlainText("\n".join(lines))

    def export_report(self, format_name):
        data = self._report_data()
        if format_name == "json":
            path, _ = QFileDialog.getSaveFileName(self, self.tr("Export report as JSON"), "security-report.json", "JSON (*.json)")
            content = json.dumps(data, indent=2, ensure_ascii=False)
        else:
            path, _ = QFileDialog.getSaveFileName(self, self.tr("Export report as Markdown"), "security-report.md", "Markdown (*.md)")
            content = self.report_preview.toPlainText() + "\n"
        if path:
            Path(path).write_text(content, encoding="utf-8")
            AuditTrail(self.settings).append("security_report_exported", {"kind": data["kind"], "format": format_name, "file": os.path.basename(path)})

    def _active_chain_base_url(self):
        """Return the selected product's approved API origin, never a user-provided host."""
        api = self.window._current_api_type()
        settings = self.settings
        if api == "OneAPI":
            cloud = str(settings.value("oneapi/cloud", "")).strip()
            return f"https://api.{cloud.lower()}.zsapi.net" if cloud and cloud.upper() != "PRODUCTION" and "." not in cloud else "https://api.zsapi.net"
        values = {
            "ZIA": ("zia/cloud", "zsapi.zscaler.net"), "ZPA": ("zpa/cloud", "config.private.zscaler.com"),
            "ZDX": ("zdx/cloud", "api.zdxcloud.net"), "ZCC": ("zcc/cloud", "api.zscaler.com"),
            "ZTW": ("ztw/cloud", "connector.zscaler.net"), "ZWA": ("zwa/cloud", "workflow.zscaler.com"),
            "EASM": ("easm/cloud", "api.zscaler.com"), "ZIdentity": ("zidentity/domain", ""),
        }
        key, default = values.get(api, ("", ""))
        host = str(settings.value(key, default)).strip()
        return f"https://{host}" if host else ""

    def _chain_headers(self):
        api = self.window._current_api_type()
        tokens = {"ZPA": self.window.zpa_token, "ZDX": self.window.zdx_token, "ZCC": self.window.zcc_token,
                  "ZIdentity": self.window.zidentity_token, "ZTW": self.window.ztw_token,
                  "ZWA": self.window.zwa_token, "EASM": self.window.easm_token, "OneAPI": self.window.oneapi_token}
        headers = {"Content-Type": "application/json"}
        if api == "ZIA" and self.window.zia_session:
            headers["Cookie"] = f"JSESSIONID={self.window.zia_session}"
        elif tokens.get(api):
            headers["Authorization"] = f"Bearer {tokens[api]}"
        return headers

    def _api_chain_plan(self):
        try:
            raw = json.loads(self.api_chain_input.toPlainText())
        except ValueError as exc:
            return {"valid": False, "errors": [self.tr("Invalid JSON: ") + str(exc)], "steps": []}
        plan = validate_request_chain(raw)
        base = self._active_chain_base_url()
        if not base:
            plan["valid"] = False; plan.setdefault("errors", []).append(self.tr("Configure a host for the active product before running a chain."))
            return plan
        base_parts = urllib.parse.urlsplit(base)
        for step in plan.get("steps", []):
            if step["url"].startswith("/"):
                step["resolved_url"] = base.rstrip("/") + step["url"]
            else:
                step["resolved_url"] = step["url"]
            destination = urllib.parse.urlsplit(step["resolved_url"])
            if destination.scheme != "https" or destination.netloc != base_parts.netloc:
                plan["valid"] = False; plan.setdefault("errors", []).append(self.tr("Each chain step must stay on the active product host."))
        return plan

    def validate_api_chain(self):
        plan = self._api_chain_plan()
        preview = {"valid": plan["valid"], "errors": plan.get("errors", []), "steps": [
            {"method": step["method"], "url": redact_url(step.get("resolved_url", step["url"])), "body": mask(step.get("body"))}
            for step in plan.get("steps", [])]}
        self.api_chain_preview.setPlainText(json.dumps(preview, indent=2, ensure_ascii=False))
        if plan["valid"]:
            AuditTrail(self.settings).append("api_chain_validated", {"count": len(plan["steps"]), "api": self.window._current_api_type()})
        return plan

    def run_api_chain(self):
        plan = self.validate_api_chain()
        if not plan["valid"]:
            QMessageBox.warning(self, self.tr("API chains"), self.tr("Fix the chain validation errors before running it.")); return
        steps = plan["steps"]
        writes = [step for step in steps if step["method"] in {"POST", "PUT", "PATCH", "DELETE"}]
        if self.settings.value("access/role", "admin") == "readonly" and writes:
            QMessageBox.warning(self, self.tr("Read only"), self.tr("Read-only mode blocks write requests. Change the local role in Operations Center to continue.")); return
        if not self.window._get_auth_status(self.window._current_api_type()):
            QMessageBox.warning(self, self.tr("API chains"), self.tr("Authenticate the active product before running a chain.")); return
        message = self.tr("Run {count} API step(s) sequentially against the active environment?").format(count=len(steps))
        if writes:
            message += "\n\n" + self.tr("The chain contains write operations; review and approve before continuing.")
        if QMessageBox.question(self, self.tr("Run approved chain"), message, QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.Cancel, QMessageBox.StandardButton.Cancel) != QMessageBox.StandardButton.Yes:
            AuditTrail(self.settings).append("api_chain_cancelled", {"count": len(steps)}); return
        headers = self._chain_headers()
        requests = [{"url": step["resolved_url"], "method": step["method"], "headers": dict(headers), "body": step.get("body")} for step in steps]
        self.api_chain_result.clear()
        self.api_chain_worker = ApiWorker(requests, stop_on_failure=self.api_chain_stop_on_error.isChecked())
        self.api_chain_worker.progress.connect(self._on_api_chain_progress)
        self.api_chain_worker.finished.connect(self._on_api_chain_finished)
        self.api_chain_worker.start()
        AuditTrail(self.settings).append("api_chain_started", {"count": len(steps), "api": self.window._current_api_type(), "write_steps": len(writes), "stop_on_failure": self.api_chain_stop_on_error.isChecked()})

    def _on_api_chain_progress(self, completed, total):
        self.api_chain_result.setPlainText(self.tr("Running API chain step {completed} of {total}...").format(completed=completed, total=total))

    def _on_api_chain_finished(self, result):
        results = result.get("results", [])
        successful = sum(1 for item in results if item.get("success")); failed = len(results) - successful
        safe_results = redact_sensitive(mask(results))
        for item in safe_results:
            request = item.get("request", {})
            if isinstance(request, dict) and "url" in request:
                request["url"] = redact_url(request["url"])
        self.api_chain_result.setPlainText(json.dumps(safe_results, indent=2, ensure_ascii=False))
        for item in results:
            request = item.get("request", {})
            self.window._add_to_history(request.get("method", ""), request.get("url", ""), request.get("headers", {}), request.get("body"), status=api_result_status(item), response_headers=api_result_headers(item))
        stopped_early = bool(result.get("stopped_early"))
        AuditTrail(self.settings).append("api_chain_finished", {"successful": successful, "failed": failed, "stopped_early": stopped_early})
        message = self.tr("API chain completed: {successful} succeeded, {failed} failed.").format(successful=successful, failed=failed)
        if stopped_early:
            message += "\n\n" + self.tr("The chain stopped after the first failed step.")
        QMessageBox.information(self, self.tr("API chains"), message)

    def compare_policies(self):
        try:
            after = self._json(self.after_policy, {})
            changes = policy_diff(self._json(self.before_policy, {}), after)
            counts = {kind: sum(1 for item in changes if item["change"] == kind) for kind in ("added", "removed", "changed")}
            self.diff_result.setPlainText(json.dumps({"summary": counts, "changes": changes}, indent=2))
            self._render_policy_overview(after)
        except ValueError as exc: QMessageBox.warning(self, self.tr("Policy diff"), str(exc))

    def _render_policy_overview(self, policy):
        overview = policy_overview(policy)
        self.policy_chart.set_style("pie"); self.policy_chart.set_values([(action.title(), float(count)) for action, count in overview["actions"].items()])
        self.policy_rules.setRowCount(len(overview["rules"]))
        for row, rule in enumerate(overview["rules"]):
            values = (rule["name"], rule["action"].title(), str(rule["conditions"]), self.tr("Enabled") if rule["enabled"] else self.tr("Disabled"))
            for column, value in enumerate(values): self.policy_rules.setItem(row, column, QTableWidgetItem(value))

    def _render_best_practices(self, findings):
        labels = {"critical": self.tr("Critical"), "high": self.tr("High"), "medium": self.tr("Medium"), "low": self.tr("Low"), "info": self.tr("Info")}
        messages = {
            "Allow rule has no conditions": self.tr("Allow rule has no conditions"), "Rule is disabled": self.tr("Rule is disabled"),
            "Rule name is duplicated": self.tr("Rule name is duplicated"), "Rule action is unspecified": self.tr("Rule action is unspecified"),
        }
        self.best_practices.setRowCount(len(findings))
        for row, finding in enumerate(findings):
            values = (labels.get(finding["severity"], finding["severity"]), finding["rule"], messages.get(finding["message"], finding["message"]))
            for column, value in enumerate(values): self.best_practices.setItem(row, column, QTableWidgetItem(value))

    def export_policy(self, format_name):
        try: payload = policy_as_code(self._json(self.after_policy, {}), format_name)
        except ValueError as exc: QMessageBox.warning(self, self.tr("Policy export"), str(exc)); return
        path, _ = QFileDialog.getSaveFileName(self, self.tr("Export policy"), f"policy.{format_name}", f"{format_name.upper()} (*.{format_name})")
        if path:
            Path(path).write_text(payload, encoding="utf-8")
            AuditTrail(self.settings).append("policy_exported", {"format": format_name, "file": os.path.basename(path)})

    def run_compliance(self):
        try:
            policy = self._json(self.after_policy, {})
            findings = compliance_findings(policy)
        except ValueError as exc: QMessageBox.warning(self, self.tr("Compliance"), str(exc)); return
        self._render_policy_overview(policy); self._render_best_practices(findings)
        self.diff_result.setPlainText(json.dumps({"best_practice_findings": findings, "count": len(findings), "scope": "local policy heuristic"}, indent=2))

    def run_simulation(self):
        try:
            result = simulate_policy_trace(self._json(self.rules_input, []), self._json(self.context_input, {}))
            self.simulation_result.setPlainText(json.dumps(result, indent=2))
            trace = result["trace"]
            self.simulation_chart.set_values([(self.tr("Rules evaluated"), float(len(trace))), (self.tr("Matched rule"), 1.0 if result["matched"] else 0.0)])
            self.simulation_path.setRowCount(len(trace))
            for row, item in enumerate(trace):
                values = (str(item["position"]), item["name"], str(item["action"]).title(), self.tr("Matched") if item["matched"] else self.tr("Not matched"))
                for column, value in enumerate(values): self.simulation_path.setItem(row, column, QTableWidgetItem(value))
        except ValueError as exc: QMessageBox.warning(self, self.tr("Simulation"), str(exc))

    def validate_bulk(self):
        required = [item.strip() for item in self.bulk_required.text().split(",") if item.strip()]
        self.bulk_result.setPlainText(json.dumps(validate_bulk_csv(self.bulk_csv.toPlainText(), required), indent=2))

    def save_governance(self):
        try: threshold = max(1, int(self.alert_threshold.text()))
        except ValueError:
            QMessageBox.warning(self, self.tr("Governance"), self.tr("Alert threshold must be a positive integer.")); return
        automation_path = self.plugin_path.text().strip()
        if automation_path and validate_local_automation_path(automation_path)[0] is None:
            QMessageBox.warning(self, self.tr("Governance"), self.tr("Local automation must be an existing absolute path to a non-symlinked .py file no larger than 1 MiB.")); return
        webhook_endpoint = self.webhook_url.text().strip()
        if webhook_endpoint and validate_webhook_endpoint(webhook_endpoint)[0] is None:
            QMessageBox.warning(self, self.tr("Governance"), self.tr("Webhook endpoints must use HTTPS (or local HTTP) and must not contain credentials in the URL.")); return
        self.settings.setValue("access/role", self.role_choice.currentData())
        self.settings.setValue("monitoring/error_threshold", str(threshold))
        self.settings.setValue("automation/webhook_url", webhook_endpoint)
        self.settings.setValue("automation/local_plugin", automation_path)
        AuditTrail(self.settings).append("governance_updated", {"role": self.role_choice.currentData(), "threshold": threshold, "webhook_configured": bool(webhook_endpoint), "plugin_configured": bool(automation_path)})
        QMessageBox.information(self, self.tr("Governance"), self.tr("Governance settings saved."))

    def refresh_integrations(self):
        sdk_available = bool(__import__("importlib").util.find_spec("zscaler"))
        tools = [("Zscaler Python SDK", sdk_available, self.tr("Use OneAPI or legacy clients locally")), ("Zscaler MCP Server", bool(shutil.which("zscaler-mcp-server")), self.tr("AI-assisted, tool-scoped exploration")), ("zscaler-terraformer", bool(shutil.which("zscaler-terraformer")), self.tr("Export existing ZIA/ZPA configuration to Terraform"))]
        self.integration_status.setRowCount(len(tools))
        for row, (name, available, use) in enumerate(tools):
            self.integration_status.setItem(row, 0, QTableWidgetItem(name)); self.integration_status.setItem(row, 1, QTableWidgetItem(self.tr("Available") if available else self.tr("Not installed"))); self.integration_status.setItem(row, 2, QTableWidgetItem(use))

    def prepare_integration(self, kind):
        commands = {
            "sdk": "pip install zscaler-sdk-python\n# Configure OneAPI credentials in Settings; they are never written to this command.\n# Use the SDK only after reviewing product coverage and tenant scope.",
            "mcp": "pip install zscaler-mcp-server\n# Add a locally scoped MCP server only after reviewing its tool permissions.\n# Start in read-only exploration mode; require approval for every write operation.",
            "terraform": "zscaler-terraformer --help\n# Export a selected ZIA/ZPA scope to a new local directory.\n# Review generated Terraform, policy diff, and secrets scan before any terraform plan/apply.",
        }
        self.integration_preview.setPlainText(commands[kind])
        AuditTrail(self.settings).append("integration_previewed", {"integration": kind})

    def copy_integration_preview(self):
        preview = self.integration_preview.toPlainText()
        if not preview:
            QMessageBox.information(self, self.tr("Integrations"), self.tr("Prepare an integration first.")); return
        QApplication.clipboard().setText(preview)
        AuditTrail(self.settings).append("integration_command_copied", {})
        self.integration_preview.setToolTip(self.tr("Copied to clipboard"))

    def _webhook_payload(self):
        posture = security_posture(getattr(self.window, "request_history", []), AuditTrail(self.settings).verify())
        return {"source": "ZS API Client", "event": "connectivity_test", "timestamp": int(time.time()), "posture": {"score": posture["score"], "metrics": posture["metrics"]}}

    def _webhook_alert_payload(self):
        posture = security_posture(getattr(self.window, "request_history", []), AuditTrail(self.settings).verify())
        return redact_sensitive({
            "source": "ZS API Client", "event": "local_alert_snapshot", "timestamp": int(time.time()),
            "posture": {"score": posture["score"], "metrics": posture["metrics"]},
            "alerts": self._alert_data(),
        })

    def _local_automation_payload(self):
        """Build the only data passed to local automation; credentials and raw responses are excluded."""
        posture = security_posture(getattr(self.window, "request_history", []), AuditTrail(self.settings).verify())
        return redact_sensitive({
            "source": "ZS API Client", "event": "local_security_snapshot", "timestamp": int(time.time()),
            "posture": {"score": posture["score"], "metrics": posture["metrics"], "findings": posture["findings"]},
            "alerts": self._alert_data(),
        })

    def run_local_automation(self):
        """Run one explicitly approved Python file with masked JSON on standard input."""
        if self.settings.value("access/role", "admin") == "readonly":
            QMessageBox.warning(self, self.tr("Local automation"), self.tr("Read-only mode blocks local automation.")); return
        script, _ = validate_local_automation_path(str(self.settings.value("automation/local_plugin", "")))
        if script is None:
            QMessageBox.warning(self, self.tr("Local automation"), self.tr("Configure a valid local Python automation in Governance first.")); return
        if hasattr(self, "local_automation_process") and self.local_automation_process.state() != QProcess.ProcessState.NotRunning:
            QMessageBox.information(self, self.tr("Local automation"), self.tr("Local automation is already running.")); return
        payload = json.dumps(self._local_automation_payload(), ensure_ascii=False, indent=2) + "\n"
        self.integration_preview.setPlainText(payload)
        if QMessageBox.question(
            self, self.tr("Local automation"),
            self.tr("Run the reviewed Python file with masked local posture and alert data? The process receives no API credentials."),
            QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.Cancel, QMessageBox.StandardButton.Cancel,
        ) != QMessageBox.StandardButton.Yes:
            return
        process = QProcess(self); self.local_automation_process = process; self._local_automation_timed_out = False
        environment = QProcessEnvironment()
        for key in ("PATH", "SystemRoot", "WINDIR", "TEMP", "TMP", "TMPDIR", "LANG", "LC_ALL"):
            if os.environ.get(key):
                environment.insert(key, os.environ[key])
        environment.insert("PYTHONNOUSERSITE", "1")
        process.setProcessEnvironment(environment)
        process.setWorkingDirectory(str(script.parent))
        process.setProgram(sys.executable)
        process.setArguments(["-I", str(script)])
        process.started.connect(lambda: (process.write(payload.encode("utf-8")), process.closeWriteChannel()))
        process.finished.connect(self._on_local_automation_finished)
        process.errorOccurred.connect(self._on_local_automation_error)
        process.start()
        QTimer.singleShot(15_000, self._timeout_local_automation)
        AuditTrail(self.settings).append("local_automation_started", {"script": script.name, "input_bytes": len(payload.encode("utf-8"))})

    def _timeout_local_automation(self):
        process = getattr(self, "local_automation_process", None)
        if process is not None and process.state() != QProcess.ProcessState.NotRunning:
            self._local_automation_timed_out = True
            process.kill()
            AuditTrail(self.settings).append("local_automation_timed_out", {})
            QMessageBox.warning(self, self.tr("Local automation"), self.tr("Local automation exceeded the 15-second limit and was stopped."))

    def _on_local_automation_finished(self, exit_code, exit_status):
        process = self.local_automation_process
        stdout = bytes(process.readAllStandardOutput()).decode("utf-8", "replace")[:65_536]
        stderr = bytes(process.readAllStandardError()).decode("utf-8", "replace")[:65_536]
        result = redact_sensitive({"exit_code": int(exit_code), "stdout": stdout, "stderr": stderr})
        self.integration_preview.setPlainText(json.dumps(result, indent=2, ensure_ascii=False))
        AuditTrail(self.settings).append("local_automation_finished", {"exit_code": int(exit_code), "stdout_bytes": len(stdout.encode("utf-8")), "stderr_bytes": len(stderr.encode("utf-8"))})
        if not getattr(self, "_local_automation_timed_out", False):
            QMessageBox.information(self, self.tr("Local automation"), self.tr("Local automation completed with exit code {code}.").format(code=exit_code))

    def _on_local_automation_error(self, process_error):
        AuditTrail(self.settings).append("local_automation_failed", {"process_error": str(process_error)})
        if process_error == QProcess.ProcessError.FailedToStart:
            QMessageBox.warning(self, self.tr("Local automation"), self.tr("Local automation failed to start."))

    def send_webhook_test(self):
        self._send_webhook_delivery(self._webhook_payload(), "test", self.tr("Send a masked connectivity test to the configured webhook endpoint?"))

    def send_webhook_alerts(self):
        self._send_webhook_delivery(self._webhook_alert_payload(), "alerts", self.tr("Send the current masked local alert snapshot to the configured webhook endpoint?"))

    def _send_webhook_delivery(self, payload, kind, confirmation):
        endpoint, error = validate_webhook_endpoint(str(self.settings.value("automation/webhook_url", "")))
        if endpoint is None:
            message = self.tr("Configure a webhook endpoint in Governance first.") if error == "missing" else self.tr("Webhook endpoints must use HTTPS (or local HTTP) and must not contain credentials in the URL.")
            QMessageBox.warning(self, self.tr("Webhook delivery"), message); return
        if hasattr(self, "webhook_worker") and self.webhook_worker.isRunning():
            QMessageBox.information(self, self.tr("Webhook delivery"), self.tr("A webhook delivery is already running.")); return
        safe_payload = redact_sensitive(payload)
        self.integration_preview.setPlainText(json.dumps(safe_payload, indent=2, ensure_ascii=False))
        if QMessageBox.question(self, self.tr("Webhook delivery"), confirmation, QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.Cancel, QMessageBox.StandardButton.Cancel) != QMessageBox.StandardButton.Yes:
            return
        parsed = urllib.parse.urlsplit(endpoint)
        def send():
            request = urllib.request.Request(endpoint, data=json.dumps(safe_payload).encode("utf-8"), headers={"Content-Type": "application/json"}, method="POST")
            with build_network_opener(self.settings, allow_redirects=False).open(request, timeout=10) as response:
                return str(getattr(response, "status", 200))
        self._webhook_delivery_kind = kind
        self.webhook_worker = LlmWorker(send)
        self.webhook_worker.completed.connect(self._on_webhook_completed)
        self.webhook_worker.failed.connect(self._on_webhook_failed)
        self.webhook_worker.start()
        AuditTrail(self.settings).append(f"webhook_{kind}_started", {"endpoint_host": parsed.hostname or "", "payload_bytes": len(json.dumps(safe_payload).encode("utf-8"))})

    def _on_webhook_completed(self, status):
        kind = getattr(self, "_webhook_delivery_kind", "unknown")
        AuditTrail(self.settings).append(f"webhook_{kind}_completed", {"status": status})
        QMessageBox.information(self, self.tr("Webhook delivery"), self.tr("Masked webhook delivery succeeded (HTTP {status}).").format(status=status))

    def _on_webhook_failed(self, error):
        kind = getattr(self, "_webhook_delivery_kind", "unknown")
        safe_error = redact_sensitive(error)
        AuditTrail(self.settings).append(f"webhook_{kind}_failed", {"error": safe_error})
        QMessageBox.warning(self, self.tr("Webhook delivery"), self.tr("Masked webhook delivery failed: {error}").format(error=safe_error))

    def refresh_audit(self):
        trail = AuditTrail(self.settings)
        events = list(reversed(trail.events()))
        self.audit_timeline.setRowCount(len(events))
        for row, event in enumerate(events):
            self.audit_timeline.setItem(row, 0, QTableWidgetItem(time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(event.get("timestamp", 0)))))
            self.audit_timeline.setItem(row, 1, QTableWidgetItem(event.get("action", "")))
            self.audit_timeline.setItem(row, 2, QTableWidgetItem(json.dumps(event.get("details", {}), ensure_ascii=False)))

    def refresh_schedules(self):
        schedules = self.window._report_schedules()
        type_labels = {"ciso": self.tr("CISO security summary"), "soc": self.tr("SOC investigation summary"), "operations": self.tr("Operations health summary")}
        cadence_labels = {3600: self.tr("Hourly"), 86400: self.tr("Daily"), 604800: self.tr("Weekly")}
        self.report_schedules.setRowCount(len(schedules))
        for row, schedule in enumerate(schedules):
            try:
                cadence = int(schedule.get("cadence_seconds", 86400))
            except (TypeError, ValueError):
                cadence = 86400
            try:
                next_run = int(schedule.get("next_run", 0))
            except (TypeError, ValueError):
                next_run = 0
            values = (
                str(schedule.get("name", "")), type_labels.get(str(schedule.get("kind", "ciso")), type_labels["ciso"]),
                cadence_labels.get(cadence, f"{cadence // 3600} h"),
                time.strftime("%Y-%m-%d %H:%M", time.localtime(next_run)) if next_run else "—",
                self.tr("Enabled") if schedule.get("enabled", True) else self.tr("Paused"),
            )
            for column, value in enumerate(values):
                self.report_schedules.setItem(row, column, QTableWidgetItem(value))

    def _selected_schedule_row(self):
        row = self.report_schedules.currentRow()
        schedules = self.window._report_schedules()
        if row < 0 or row >= len(schedules):
            QMessageBox.information(self, self.tr("Scheduled report"), self.tr("Select a scheduled report first."))
            return -1, schedules
        return row, schedules

    def run_selected_schedule(self):
        row, schedules = self._selected_schedule_row()
        if row < 0:
            return
        now = int(time.time())
        schedules[row]["next_run"] = now
        self.settings.setValue("automation/schedules", json.dumps(schedules))
        generated = self.window._run_due_report_schedules(now, selected_index=row)
        self.refresh_schedules(); self.refresh_audit()
        if generated:
            QMessageBox.information(self, self.tr("Scheduled report"), self.tr("The scheduled report was generated locally."))
        else:
            QMessageBox.warning(self, self.tr("Scheduled report"), self.tr("The scheduled report could not be generated. Check its output folder and the audit trail."))

    def toggle_selected_schedule(self):
        row, schedules = self._selected_schedule_row()
        if row < 0:
            return
        schedules[row]["enabled"] = not schedules[row].get("enabled", True)
        self.settings.setValue("automation/schedules", json.dumps(schedules))
        AuditTrail(self.settings).append("scheduled_report_toggled", {"name": str(schedules[row].get("name", "")), "enabled": schedules[row]["enabled"]})
        self.refresh_schedules(); self.refresh_audit()

    def remove_selected_schedule(self):
        row, schedules = self._selected_schedule_row()
        if row < 0:
            return
        if QMessageBox.question(self, self.tr("Scheduled report"), self.tr("Remove the selected scheduled report?"), QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.Cancel, QMessageBox.StandardButton.Cancel) != QMessageBox.StandardButton.Yes:
            return
        removed = schedules.pop(row)
        self.settings.setValue("automation/schedules", json.dumps(schedules))
        AuditTrail(self.settings).append("scheduled_report_removed", {"name": str(removed.get("name", ""))})
        self.refresh_schedules(); self.refresh_audit()

    def configure_schedule(self):
        name, ok = QInputDialog.getText(self, self.tr("Scheduled report"), self.tr("Report name:"), text=self.tr("CISO security summary"))
        if not ok or not name.strip():
            return
        cadence_labels = (self.tr("Hourly"), self.tr("Daily"), self.tr("Weekly"))
        cadence_label, ok = QInputDialog.getItem(self, self.tr("Scheduled report"), self.tr("Report cadence:"), cadence_labels, 1, False)
        if not ok:
            return
        output_dir = QFileDialog.getExistingDirectory(self, self.tr("Choose report output folder"), str(Path.home()))
        if not output_dir:
            return
        cadence_seconds = {cadence_labels[0]: 3600, cadence_labels[1]: 86400, cadence_labels[2]: 604800}[cadence_label]
        now = int(time.time())
        schedules = self.window._report_schedules()
        schedules.append({
            "name": name.strip(), "kind": self.report_type.currentData(), "cadence_seconds": cadence_seconds,
            "output_dir": output_dir, "enabled": True, "created": now, "next_run": now + cadence_seconds,
        })
        self.settings.setValue("automation/schedules", json.dumps(schedules))
        AuditTrail(self.settings).append("scheduled_report_created", {
            "name": name.strip(), "kind": self.report_type.currentData(), "cadence_seconds": cadence_seconds,
        })
        self.refresh_dashboard(); self.refresh_audit(); self.refresh_schedules()
        QMessageBox.information(self, self.tr("Scheduled report"), self.tr("Scheduled report saved. Reports run locally while the application is open."))

    def create_support_bundle(self):
        path, _ = QFileDialog.getSaveFileName(self, self.tr("Save support bundle"), "zs-api-client-support.zip", "ZIP (*.zip)")
        if path:
            support_bundle(path, {"version": __version__, "settings": {"language": self.settings.value("language", "system"), "mode": self.settings.value("ui/mode", "basic")}}, AuditTrail(self.settings).events())
            AuditTrail(self.settings).append("support_bundle_created", {"file": os.path.basename(path)})
            QMessageBox.information(self, self.tr("Support bundle"), self.tr("A redacted support bundle was created."))


class MainWindow(QMainWindow):
    """Main application window."""

    def _guided_ai_examples(self) -> tuple[tuple[str, str], ...]:
        """Localized, non-executing prompts for common OneAPI exploration."""
        return (
            (self.tr("ZIA · List users"), self.tr("List ZIA users with pagination")),
            (self.tr("ZIA · Find URL categories"), self.tr("Search ZIA URL categories for social media")),
            (self.tr("ZIA · Review firewall policies"), self.tr("List ZIA cloud firewall policies")),
            (self.tr("ZPA · Application segments"), self.tr("List ZPA application segments")),
            (self.tr("ZPA · Connector inventory"), self.tr("List ZPA connectors")),
            (self.tr("ZDX · Experience overview"), self.tr("List ZDX devices and experience scores")),
            (self.tr("ZDX · Active alerts"), self.tr("List active ZDX alerts with pagination")),
            (self.tr("ZDX · Application monitoring"), self.tr("List monitored ZDX applications")),
            (self.tr("Client Connector · Devices"), self.tr("List Client Connector devices")),
            (self.tr("ZIdentity · Users"), self.tr("List ZIdentity users with pagination")),
            (self.tr("ZIdentity · Groups"), self.tr("List ZIdentity groups")),
            (self.tr("AI Security · Workloads"), self.tr("List AI Security workloads")),
        )
    
    def __init__(self):
        super().__init__()
        self.setWindowTitle(f"ZS API Client v{__version__}")
        self.setMinimumSize(1200, 800)
        
        self.zia_session = None
        self.zpa_token = None
        self.zdx_token = None
        self.zcc_token = None
        self.zidentity_token = None
        self.ztw_token = None
        self.zwa_token = None
        self.easm_token = None
        self.oneapi_token = None
        self.request_history = []
        
        self._setup_ui()
        self._setup_menu()
        self._load_settings()
        self._load_history()
        # Scheduled reports are local application jobs. Nothing is uploaded,
        # and jobs only run while the desktop client is open.
        self.report_schedule_timer = QTimer(self)
        self.report_schedule_timer.timeout.connect(self._run_due_report_schedules)
        self.report_schedule_timer.start(60_000)
    
    def _setup_ui(self):
        central = QWidget()
        central.setObjectName("workspace")
        self.setCentralWidget(central)
        layout = QVBoxLayout(central)
        layout.setContentsMargins(10, 10, 10, 10)
        layout.setSpacing(8)

        # A persistent command bar keeps the primary workflow visible instead
        # of making users hunt through menus as the client grows.
        command_bar = QFrame()
        command_bar.setObjectName("commandBar")
        command_bar.setFixedHeight(52)
        command_layout = QHBoxLayout(command_bar)
        command_layout.setContentsMargins(12, 8, 12, 8)
        title = QLabel(self.tr("ZS API Client"))
        title.setObjectName("sectionTitle")
        title_font = title.font()
        title_font.setPointSize(16)
        title_font.setBold(True)
        title.setFont(title_font)
        command_layout.addWidget(title)
        self.workspace_context = QLabel(self.tr("Explore APIs, review changes, and operate safely"))
        self.workspace_context.setObjectName("mutedLabel")
        command_layout.addWidget(self.workspace_context)
        command_layout.addStretch()
        environment_shortcut = QPushButton(self.tr("1 · Environment"))
        environment_shortcut.setToolTip(self.tr("Select or create a tenant environment profile"))
        environment_shortcut.clicked.connect(self._manage_profiles)
        command_layout.addWidget(environment_shortcut)
        self.insight_shortcut = QPushButton(self.tr("2 · Analyze"))
        self.insight_shortcut.setToolTip(self.tr("Open dashboards, audits, policy diffs, and response analysis"))
        self.insight_shortcut.clicked.connect(lambda: self._show_operations(0))
        command_layout.addWidget(self.insight_shortcut)
        self.change_shortcut = QPushButton(self.tr("3 · Change"))
        self.change_shortcut.setToolTip(self.tr("Open policy diff and policy-as-code export"))
        self.change_shortcut.clicked.connect(lambda: self._show_operations(1))
        command_layout.addWidget(self.change_shortcut)
        self.operations_shortcut = QPushButton(self.tr("Operations Center"))
        self.operations_shortcut.clicked.connect(self._show_operations)
        command_layout.addWidget(self.operations_shortcut)
        settings_shortcut = QPushButton(self.tr("Settings"))
        settings_shortcut.clicked.connect(self._show_settings)
        command_layout.addWidget(settings_shortcut)
        layout.addWidget(command_bar)
        
        # Left panel - API Explorer
        left_panel = QWidget()
        left_layout = QVBoxLayout(left_panel)
        left_layout.setContentsMargins(0, 0, 0, 0)
        
        # API type selector
        api_selector = QHBoxLayout()
        explorer_title = QLabel(self.tr("API Explorer"))
        explorer_title.setObjectName("sectionTitle")
        left_layout.addWidget(explorer_title)
        api_selector.addWidget(QLabel(self.tr("Product")))
        self.api_type = QComboBox()
        self.api_type.setSizeAdjustPolicy(QComboBox.SizeAdjustPolicy.AdjustToContents)
        self.api_type.setMinimumContentsLength(10)
        self.api_type.setSizeAdjustPolicy(QComboBox.SizeAdjustPolicy.AdjustToContents)
        self._update_api_list()  # Populate based on enabled APIs
        self.api_type.currentTextChanged.connect(self._update_endpoint_tree)
        api_selector.addWidget(self.api_type)
        
        # Authenticate button
        self.auth_btn = QPushButton(self.tr("Auth"))
        self.auth_btn.setToolTip(self.tr("Authenticate with selected API (Ctrl+Shift+A)"))
        self.auth_btn.setShortcut("Ctrl+Shift+A")
        self.auth_btn.clicked.connect(self._authenticate_api)
        api_selector.addWidget(self.auth_btn)
        
        api_selector.addStretch()
        left_layout.addLayout(api_selector)
        
        # Endpoint search filter
        self.endpoint_filter = QLineEdit()
        self.endpoint_filter.setPlaceholderText(self.tr("🔍 Filter endpoints..."))
        self.endpoint_filter.setClearButtonEnabled(True)
        self.endpoint_filter.textChanged.connect(self._filter_endpoints)
        left_layout.addWidget(self.endpoint_filter)

        self.endpoint_count = QLabel()
        self.endpoint_count.setObjectName("mutedLabel")
        left_layout.addWidget(self.endpoint_count)

        # Endpoint tree
        self.endpoint_tree = QTreeWidget()
        self.endpoint_tree.setHeaderLabel(self.tr("Endpoints"))
        self.endpoint_tree.itemClicked.connect(self._on_endpoint_selected)
        self.endpoint_tree.itemDoubleClicked.connect(self._on_endpoint_double_clicked)
        left_layout.addWidget(self.endpoint_tree)
        
        # Output/Audit panel
        output_group = QGroupBox(self.tr("Output"))
        output_layout = QVBoxLayout(output_group)
        output_layout.setContentsMargins(4, 4, 4, 4)
        self.output_log = QPlainTextEdit()
        self.output_log.setReadOnly(True)
        self.output_log.setMinimumHeight(120)
        self.output_log.setPlaceholderText(self.tr("Authentication status, requests, and audit info..."))
        output_font = QFont("Menlo, Monaco, Consolas, monospace", 10)
        self.output_log.setFont(output_font)
        output_layout.addWidget(self.output_log)
        
        # Right panel - Request/Response
        right_panel = QWidget()
        right_layout = QVBoxLayout(right_panel)
        right_layout.setContentsMargins(0, 0, 0, 0)
        
        # Request section
        request_group = QGroupBox(self.tr("Request Builder"))
        request_layout = QVBoxLayout(request_group)
        
        # Method and URL
        url_layout = QHBoxLayout()
        self.method_combo = QComboBox()
        self.method_combo.setSizeAdjustPolicy(QComboBox.SizeAdjustPolicy.AdjustToContents)
        self.method_combo.setMinimumContentsLength(10)
        self.method_combo.setSizeAdjustPolicy(QComboBox.SizeAdjustPolicy.AdjustToContents)
        self._method_colors = {
            "GET": "#2e7d32", "POST": "#1565c0", "PUT": "#e65100",
            "DELETE": "#c62828", "PATCH": "#6a1b9a"
        }
        for method, color in self._method_colors.items():
            self.method_combo.addItem(f"● {method}")
        self.method_combo.setStyleSheet(
            "QComboBox { font-weight: bold; }"
        )
        self.method_combo.currentIndexChanged.connect(self._update_method_color)
        self._update_method_color()
        url_layout.addWidget(self.method_combo)
        
        self.url_input = QLineEdit()
        self.url_input.setPlaceholderText(self.tr("Enter URL or select endpoint..."))
        url_layout.addWidget(self.url_input)
        
        self.send_btn = QPushButton(self.tr("Send"))
        self.send_btn.setToolTip(self.tr("Send request (Ctrl+Return)"))
        self.send_btn.setShortcut("Ctrl+Return")
        self.send_btn.clicked.connect(self._send_request)
        url_layout.addWidget(self.send_btn)
        
        self.curl_btn = QPushButton(self.tr("cURL"))
        self.curl_btn.setToolTip(self.tr("Copy request as cURL command (Ctrl+Shift+C)"))
        self.curl_btn.setShortcut("Ctrl+Shift+C")
        self.curl_btn.clicked.connect(self._copy_as_curl)
        url_layout.addWidget(self.curl_btn)
        
        request_layout.addLayout(url_layout)
        self.graphql_mode = QCheckBox(self.tr("GraphQL request"))
        self.graphql_mode.setToolTip(self.tr("Send the request body as a GraphQL query and preserve data, errors, and extensions."))
        self.graphql_mode.toggled.connect(lambda enabled: self.method_combo.setCurrentText("● POST") if enabled else None)
        request_layout.addWidget(self.graphql_mode)
        graphql_presets = QHBoxLayout()
        self.graphql_preset_name = QLineEdit()
        self.graphql_preset_name.setPlaceholderText(self.tr("Saved GraphQL query name"))
        graphql_presets.addWidget(self.graphql_preset_name)
        self.graphql_preset_choice = QComboBox()
        graphql_presets.addWidget(self.graphql_preset_choice)
        save_graphql_btn = QPushButton(self.tr("Save query"))
        save_graphql_btn.clicked.connect(self._save_graphql_query)
        graphql_presets.addWidget(save_graphql_btn)
        load_graphql_btn = QPushButton(self.tr("Load query"))
        load_graphql_btn.clicked.connect(self._load_graphql_query)
        graphql_presets.addWidget(load_graphql_btn)
        rename_graphql_btn = QPushButton(self.tr("Rename query"))
        rename_graphql_btn.clicked.connect(self._rename_graphql_query)
        graphql_presets.addWidget(rename_graphql_btn)
        delete_graphql_btn = QPushButton(self.tr("Delete query"))
        delete_graphql_btn.clicked.connect(self._delete_graphql_query)
        graphql_presets.addWidget(delete_graphql_btn)
        introspect_btn = QPushButton(self.tr("Introspect schema"))
        introspect_btn.clicked.connect(self._prepare_graphql_introspection)
        graphql_presets.addWidget(introspect_btn)
        load_schema_btn = QPushButton(self.tr("Load saved schema"))
        load_schema_btn.clicked.connect(self._load_graphql_introspection)
        graphql_presets.addWidget(load_schema_btn)
        request_layout.addLayout(graphql_presets)
        graphql_catalog = QHBoxLayout()
        self.graphql_catalog_choice = QComboBox()
        self.graphql_catalog_choice.addItem(self.tr("Documented ZInsights query…"), None)
        for entry in ZINSIGHTS_GRAPHQL_CATALOG:
            if entry.get("kind") == "query":
                self.graphql_catalog_choice.addItem(f"{entry.get('domain', '')} · {entry.get('name', '')}", entry)
        graphql_catalog.addWidget(self.graphql_catalog_choice)
        load_documented_query = QPushButton(self.tr("Load documented query"))
        load_documented_query.clicked.connect(self._load_documented_graphql_query)
        graphql_catalog.addWidget(load_documented_query)
        browse_documented_schema = QPushButton(self.tr("Browse documented schema"))
        browse_documented_schema.clicked.connect(self._browse_documented_graphql_schema)
        graphql_catalog.addWidget(browse_documented_schema)
        graphql_catalog.addStretch()
        request_layout.addLayout(graphql_catalog)
        
        # Request tabs (Params, Headers, Body)
        self.request_tabs = QTabWidget()
        
        # Params tab
        params_widget = QWidget()
        params_layout = QVBoxLayout(params_widget)
        self.params_table = QTableWidget(12, 2)
        self.params_table.setHorizontalHeaderLabels([self.tr("Key"), self.tr("Value")])
        self.params_table.horizontalHeader().setStretchLastSection(True)
        params_layout.addWidget(self.params_table)
        self.request_tabs.addTab(params_widget, self.tr("Params"))
        
        # Headers tab
        headers_widget = QWidget()
        headers_layout = QVBoxLayout(headers_widget)
        self.headers_table = QTableWidget(12, 2)
        self.headers_table.setHorizontalHeaderLabels([self.tr("Key"), self.tr("Value")])
        self.headers_table.horizontalHeader().setStretchLastSection(True)
        headers_layout.addWidget(self.headers_table)
        self.request_tabs.addTab(headers_widget, self.tr("Headers"))
        
        # Body tab
        body_widget = QWidget()
        body_layout = QVBoxLayout(body_widget)
        self.body_input = QPlainTextEdit()
        self.body_input.setPlaceholderText(self.tr("Request body (JSON)..."))
        font = QFont("Menlo, Monaco, Consolas, monospace", 11)
        self.body_input.setFont(font)
        body_layout.addWidget(self.body_input)
        self.request_tabs.addTab(body_widget, self.tr("Body"))

        # Path variables are extracted automatically from :name and {name}
        # placeholders in the selected Automation Hub endpoint.
        variables_widget = QWidget()
        variables_layout = QVBoxLayout(variables_widget)
        self.variables_table = QTableWidget(0, 2)
        self.variables_table.setHorizontalHeaderLabels([self.tr("Variable"), self.tr("Value")])
        self.variables_table.horizontalHeader().setStretchLastSection(True)
        variables_layout.addWidget(self.variables_table)
        self.request_tabs.addTab(variables_widget, self.tr("Path Variables"))
        
        request_layout.addWidget(self.request_tabs)
        self._refresh_graphql_presets()
        
        # Response section
        response_group = QGroupBox(self.tr("Response"))
        response_layout = QVBoxLayout(response_group)
        
        # Response info bar
        response_info_bar = QHBoxLayout()
        self.response_info = QLabel()
        response_info_bar.addWidget(self.response_info)
        response_info_bar.addWidget(QLabel(self.tr("Dataset:")))
        self.response_dataset_choice = QComboBox()
        self.response_dataset_choice.setMinimumWidth(220)
        self.response_dataset_choice.currentIndexChanged.connect(self._render_selected_response_dataset)
        response_info_bar.addWidget(self.response_dataset_choice)
        self._response_datasets = []
        response_info_bar.addStretch()
        self.pretty_print_enabled = True
        self.pretty_print_btn = QPushButton(self.tr("Pretty"))
        self.pretty_print_btn.setCheckable(True)
        self.pretty_print_btn.setChecked(True)
        self.pretty_print_btn.setToolTip(self.tr("Toggle pretty-print JSON (Ctrl+P)"))
        self.pretty_print_btn.setShortcut("Ctrl+P")
        self.pretty_print_btn.clicked.connect(self._toggle_pretty_print)
        self.pretty_print_btn.setMinimumWidth(70)
        response_info_bar.addWidget(self.pretty_print_btn)
        self.export_response_btn = QPushButton(self.tr("Export response"))
        self.export_response_btn.clicked.connect(self._export_full_response)
        response_info_bar.addWidget(self.export_response_btn)
        preview_export_btn = QPushButton(self.tr("Preview export"))
        preview_export_btn.clicked.connect(self._preview_response_export)
        response_info_bar.addWidget(preview_export_btn)
        response_layout.addLayout(response_info_bar)

        # Response body and headers
        self.response_body = QPlainTextEdit()
        self.response_body.setReadOnly(True)
        self.response_body.setFont(font)
        self.json_highlighter = JsonHighlighter(self.response_body.document())
        self.response_headers = QPlainTextEdit()
        self.response_headers.setReadOnly(True)
        self.response_headers.setFont(font)
        self.response_tabs = QTabWidget()
        self.response_tabs.addTab(self.response_body, self.tr("Body"))
        self.response_tabs.addTab(self.response_headers, self.tr("Headers"))
        self.response_table = QTableWidget(0, 0)
        self.response_table.setEditTriggers(QTableWidget.EditTrigger.NoEditTriggers)
        self.response_tabs.addTab(self.response_table, self.tr("Table"))
        self.response_chart = NumericBarChart()
        self.response_tabs.addTab(self.response_chart, self.tr("Chart"))
        self.response_tree = QTreeWidget()
        self.response_tree.setHeaderLabels([self.tr("Field"), self.tr("Value")])
        self.response_tree.header().setStretchLastSection(True)
        self.response_tabs.addTab(self.response_tree, self.tr("Tree"))
        self.response_heatmap = QTableWidget(0, 0)
        self.response_heatmap.setEditTriggers(QTableWidget.EditTrigger.NoEditTriggers)
        self.response_tabs.addTab(self.response_heatmap, self.tr("Heatmap"))
        self.response_topology = QPlainTextEdit()
        self.response_topology.setReadOnly(True)
        self.response_tabs.addTab(self.response_topology, self.tr("Topology"))
        self.graphql_schema_tree = QTreeWidget()
        self.graphql_schema_tree.setHeaderLabel(self.tr("GraphQL schema"))
        self.graphql_schema_tree.itemDoubleClicked.connect(self._on_documented_graphql_item)
        self.response_tabs.addTab(self.graphql_schema_tree, self.tr("Schema"))
        response_layout.addWidget(self.response_tabs)

        # Natural-language assistant. It operates locally against the bundled
        # OneAPI catalog and never receives credentials or unredacted output.
        ai_group = QGroupBox(self.tr("AI Assistant"))
        ai_layout = QVBoxLayout(ai_group)
        self.ai_question = QLineEdit()
        self.ai_question.setPlaceholderText(self.tr("Ask a OneAPI question, e.g. list ZPA application segments"))
        self.ai_question.returnPressed.connect(self._run_ai_assistant)
        ai_layout.addWidget(self.ai_question)
        self.ai_example_choice = QComboBox()
        self.ai_example_choice.addItem(self.tr("Choose a guided AI example…"), "")
        for title, question in self._guided_ai_examples():
            self.ai_example_choice.addItem(title, question)
        self.ai_example_choice.currentIndexChanged.connect(self._load_ai_example)
        ai_layout.addWidget(self.ai_example_choice)
        ai_actions = QHBoxLayout()
        self.ai_run_btn = QPushButton(self.tr("Find API request"))
        self.ai_run_btn.clicked.connect(self._run_ai_assistant)
        ai_actions.addWidget(self.ai_run_btn)
        self.ai_execute_btn = QPushButton(self.tr("Run selected request"))
        self.ai_execute_btn.clicked.connect(self._review_ai_request)
        ai_actions.addWidget(self.ai_execute_btn)
        self.ai_export_btn = QPushButton(self.tr("Export result"))
        self.ai_export_btn.clicked.connect(self._export_ai_result)
        ai_actions.addWidget(self.ai_export_btn)
        ai_layout.addLayout(ai_actions)
        self.ai_summary = QLabel(self.tr("Ask in plain language. Sensitive values are masked before display or export."))
        self.ai_summary.setWordWrap(True)
        ai_layout.addWidget(self.ai_summary)
        self.ai_preview = QPlainTextEdit()
        self.ai_preview.setReadOnly(True)
        self.ai_preview.setMaximumHeight(95)
        self.ai_preview.setPlaceholderText(self.tr("AI request preview appears here before execution."))
        ai_layout.addWidget(self.ai_preview)
        self.ai_chart = NumericBarChart()
        self.ai_chart.setVisible(False)
        ai_layout.addWidget(self.ai_chart)
        self.ai_chart_style = QComboBox()
        self.ai_chart_style.addItem(self.tr("Bar chart"), "bar")
        self.ai_chart_style.addItem(self.tr("Line chart"), "line")
        self.ai_chart_style.addItem(self.tr("Pie chart"), "pie")
        self.ai_chart_style.currentIndexChanged.connect(lambda: self.ai_chart.set_style(self.ai_chart_style.currentData()))
        ai_layout.addWidget(self.ai_chart_style)
        self.ai_table = QTableWidget(0, 0)
        self.ai_table.setEditTriggers(QTableWidget.EditTrigger.NoEditTriggers)
        ai_layout.addWidget(self.ai_table)
        
        
        # Help panel
        help_group = QGroupBox(self.tr("Help"))
        help_layout = QVBoxLayout(help_group)
        self.help_text = QLabel()
        self.help_text.setWordWrap(True)
        self.help_text.setAlignment(Qt.AlignmentFlag.AlignTop)
        self.help_text.setOpenExternalLinks(True)
        help_layout.addWidget(self.help_text)
        
        # Resizable editor and inspector regions
        editor_splitter = QSplitter(Qt.Orientation.Vertical)
        editor_splitter.addWidget(request_group)
        editor_splitter.addWidget(response_group)
        editor_splitter.setSizes([360, 440])
        editor_splitter.setChildrenCollapsible(False)
        self.editor_splitter = editor_splitter
        right_layout.addWidget(editor_splitter)

        inspector_tabs = QTabWidget()
        inspector_tabs.addTab(help_group, self.tr("Documentation"))
        inspector_tabs.addTab(output_group, self.tr("Console"))
        inspector_tabs.addTab(ai_group, self.tr("AI Assistant"))

        # Main workspace splitter
        splitter = QSplitter(Qt.Orientation.Horizontal)
        splitter.addWidget(left_panel)
        splitter.addWidget(right_panel)
        splitter.addWidget(inspector_tabs)
        splitter.setSizes([320, 760, 300])
        splitter.setChildrenCollapsible(False)
        self.main_splitter = splitter
        
        layout.addWidget(splitter)
        
        # Status bar
        self.status_bar = QStatusBar()
        self.setStatusBar(self.status_bar)
        self.status_bar.showMessage(self.tr("Ready"))
        
        # Initialize endpoint tree
        self._update_endpoint_tree(self.api_type.currentText())
    
    def _setup_menu(self):
        menubar = self.menuBar()
        
        # File menu
        file_menu = menubar.addMenu(self.tr("&File"))
        
        settings_action = QAction(self.tr("&Settings..."), self)
        settings_action.setShortcut("Ctrl+,")
        settings_action.triggered.connect(self._show_settings)
        file_menu.addAction(settings_action)
        
        batch_action = QAction(self.tr("&Batch Operations..."), self)
        batch_action.setShortcut("Ctrl+B")
        batch_action.triggered.connect(self._show_batch)
        file_menu.addAction(batch_action)
        
        file_menu.addSeparator()
        
        history_action = QAction(self.tr("Request &History..."), self)
        history_action.setShortcut("Ctrl+H")
        history_action.triggered.connect(self._show_history)
        file_menu.addAction(history_action)
        
        file_menu.addSeparator()
        
        quit_action = QAction(self.tr("&Quit"), self)
        quit_action.setShortcut("Ctrl+Q")
        quit_action.triggered.connect(self.close)
        file_menu.addAction(quit_action)
        
        # Edit menu
        edit_menu = menubar.addMenu(self.tr("&Edit"))
        
        copy_curl_action = QAction(self.tr("Copy as c&URL"), self)
        copy_curl_action.setShortcut("Ctrl+Shift+C")
        copy_curl_action.triggered.connect(self._copy_as_curl)
        edit_menu.addAction(copy_curl_action)
        
        copy_response_action = QAction(self.tr("Copy &Response"), self)
        copy_response_action.setShortcut("Ctrl+Shift+R")
        copy_response_action.triggered.connect(self._copy_response)
        edit_menu.addAction(copy_response_action)
        
        edit_menu.addSeparator()
        
        clear_request_action = QAction(self.tr("C&lear Request"), self)
        clear_request_action.triggered.connect(self._clear_request)
        edit_menu.addAction(clear_request_action)
        
        # Request menu
        request_menu = menubar.addMenu(self.tr("&Request"))
        
        send_action = QAction(self.tr("&Send Request"), self)
        send_action.setShortcut("Ctrl+Return")
        send_action.triggered.connect(self._send_request)
        request_menu.addAction(send_action)
        
        request_menu.addSeparator()
        
        auth_zia_action = QAction(self.tr("Authenticate &ZIA"), self)
        auth_zia_action.triggered.connect(self._authenticate_zia)
        request_menu.addAction(auth_zia_action)
        
        auth_zpa_action = QAction(self.tr("Authenticate Z&PA"), self)
        auth_zpa_action.triggered.connect(self._authenticate_zpa)
        request_menu.addAction(auth_zpa_action)
        
        request_menu.addSeparator()
        
        logout_action = QAction(self.tr("&Logout All Sessions"), self)
        logout_action.triggered.connect(self._logout_all)
        request_menu.addAction(logout_action)

        operations_menu = menubar.addMenu(self.tr("&Operations"))
        operations_action = QAction(self.tr("Operations &Center..."), self)
        operations_action.setShortcut("Ctrl+Shift+O")
        operations_action.triggered.connect(self._show_operations)
        operations_menu.addAction(operations_action)
        profiles_action = QAction(self.tr("Environment &Profiles..."), self)
        profiles_action.triggered.connect(self._manage_profiles)
        operations_menu.addAction(profiles_action)
        
        # Language menu
        lang_menu = menubar.addMenu(self.tr("&Language"))
        
        for name, code in LANGUAGES:
            action = QAction(name, self)
            action.setData(code)
            action.triggered.connect(self._change_language)
            lang_menu.addAction(action)
        
        # Help menu
        help_menu = menubar.addMenu(self.tr("&Help"))
        
        welcome_action = QAction(self.tr("&Welcome Guide..."), self)
        welcome_action.triggered.connect(self._show_welcome)
        help_menu.addAction(welcome_action)
        
        about_action = QAction(self.tr("&About..."), self)
        about_action.setMenuRole(QAction.MenuRole.AboutRole)
        about_action.triggered.connect(self._show_about)
        help_menu.addAction(about_action)
        
        about_qt_action = QAction(self.tr("About &Qt..."), self)
        about_qt_action.setMenuRole(QAction.MenuRole.NoRole)
        about_qt_action.triggered.connect(QApplication.aboutQt)
        help_menu.addAction(about_qt_action)
        
        help_menu.addSeparator()
        
        zia_docs_action = QAction(self.tr("ZIA API &Documentation"), self)
        zia_docs_action.triggered.connect(lambda: __import__("webbrowser").open("https://help.zscaler.com/zia/api"))
        help_menu.addAction(zia_docs_action)
        
        zpa_docs_action = QAction(self.tr("ZPA API D&ocumentation"), self)
        zpa_docs_action.triggered.connect(lambda: __import__("webbrowser").open("https://help.zscaler.com/zpa/api-reference"))
        help_menu.addAction(zpa_docs_action)
        
        api_portal_action = QAction(self.tr("Zscaler API &Portal"), self)
        api_portal_action.triggered.connect(lambda: __import__("webbrowser").open("https://automate.zscaler.com/"))
        help_menu.addAction(api_portal_action)
        
        error_codes_action = QAction(self.tr("API &Error Codes..."), self)
        error_codes_action.triggered.connect(self._show_error_codes)
        help_menu.addAction(error_codes_action)
        
        help_menu.addSeparator()
        
        check_updates_action = QAction(self.tr("Check for &Updates..."), self)
        check_updates_action.triggered.connect(self._check_for_updates)
        help_menu.addAction(check_updates_action)
    
    def _load_settings(self):
        settings = QSettings("Zscaler", "APIClient")
        geometry = settings.value("geometry")
        if geometry:
            self.restoreGeometry(geometry)
        splitter_sizes = settings.value("main_splitter_sizes")
        if splitter_sizes:
            self.main_splitter.setSizes([int(size) for size in splitter_sizes])
        editor_sizes = settings.value("editor_splitter_sizes")
        if editor_sizes:
            self.editor_splitter.setSizes([int(size) for size in editor_sizes])
        # The product selector is created before window settings are restored.
        # Refresh it here so the persisted default is actually honored.
        self._update_api_list()
        self._update_endpoint_tree(self.api_type.currentText())
        self._apply_main_mode()

    def _report_schedules(self):
        """Return only valid persisted report schedule objects."""
        settings = QSettings("Zscaler", "APIClient")
        try:
            schedules = json.loads(str(settings.value("automation/schedules", "[]")))
        except (TypeError, ValueError):
            return []
        return [item for item in schedules if isinstance(item, dict)] if isinstance(schedules, list) else []

    @staticmethod
    def _scheduled_report_filename(name, timestamp):
        """Create a traversal-safe, portable filename for a scheduled report."""
        stem = re.sub(r"[^A-Za-z0-9._-]+", "-", str(name).strip()).strip(".-") or "security-report"
        return f"{stem[:80]}-{time.strftime('%Y%m%d-%H%M%S', time.gmtime(timestamp))}.json"

    @staticmethod
    def _write_new_report(directory, filename, content):
        """Write a new report atomically enough to avoid overwriting or following a collision."""
        target = Path(directory) / filename
        for suffix in range(100):
            candidate = target if suffix == 0 else target.with_name(f"{target.stem}-{suffix}{target.suffix}")
            try:
                with candidate.open("x", encoding="utf-8") as handle:
                    handle.write(content)
                return candidate
            except FileExistsError:
                continue
        raise FileExistsError("Could not allocate a unique scheduled report filename")

    def _run_due_report_schedules(self, now=None, selected_index=None):
        """Generate due redacted reports locally; never perform network activity."""
        now = int(time.time() if now is None else now)
        settings = QSettings("Zscaler", "APIClient")
        schedules = self._report_schedules()
        if not schedules:
            return []
        trail = AuditTrail(settings)
        generated = []
        changed = False
        for index, schedule in enumerate(schedules):
            if selected_index is not None and index != selected_index:
                continue
            try:
                next_run = int(schedule.get("next_run", now + 1))
            except (TypeError, ValueError):
                next_run = now
            if (selected_index is None and not schedule.get("enabled", True)) or next_run > now:
                continue
            try:
                cadence = max(3600, int(schedule.get("cadence_seconds", 86400)))
            except (TypeError, ValueError):
                cadence = 86400
            schedule["next_run"] = now + cadence
            changed = True
            raw_output_dir = str(schedule.get("output_dir", "")).strip()
            output_dir = Path(raw_output_dir).expanduser()
            if not raw_output_dir or not output_dir.is_absolute() or not output_dir.is_dir():
                trail.append("scheduled_report_failed", {"name": str(schedule.get("name", "")), "reason": "output_directory_unavailable"})
                continue
            try:
                kind = str(schedule.get("kind", "ciso"))
                if kind not in {"ciso", "soc", "operations"}:
                    kind = "ciso"
                data = security_report_data(kind, self.request_history, trail.events(), trail.verify())
                content = json.dumps(redact_sensitive(data), indent=2, ensure_ascii=False) + "\n"
                filename = self._scheduled_report_filename(schedule.get("name", "security-report"), now)
                destination = self._write_new_report(output_dir, filename, content)
                generated.append(str(destination))
                trail.append("scheduled_report_generated", {"name": str(schedule.get("name", "")), "kind": kind, "file": destination.name})
            except (OSError, TypeError, ValueError) as error:
                trail.append("scheduled_report_failed", {"name": str(schedule.get("name", "")), "reason": type(error).__name__})
        if changed:
            settings.setValue("automation/schedules", json.dumps(schedules))
        return generated
    
    def _save_settings(self):
        settings = QSettings("Zscaler", "APIClient")
        settings.setValue("geometry", self.saveGeometry())
        settings.setValue("main_splitter_sizes", self.main_splitter.sizes())
        settings.setValue("editor_splitter_sizes", self.editor_splitter.sizes())
    
    def closeEvent(self, event):
        self._clear_sessions(record_audit=False)
        self._save_settings()
        event.accept()
    
    def _update_endpoint_tree(self, api_type: str):
        api_type = api_type.replace("🟢 ", "").replace("🔴 ", "")
        self.endpoint_tree.clear()
        
        # Select endpoints based on API type
        endpoint_map = {
            "ZIA": ZIA_ENDPOINTS,
            "ZPA": ZPA_ENDPOINTS,
            "ZDX": ZDX_ENDPOINTS,
            "ZCC": ZCC_ENDPOINTS,
            "ZIdentity": ZIDENTITY_ENDPOINTS,
            "ZTW": ZTW_ENDPOINTS,
            "ZWA": ZWA_ENDPOINTS,
            "EASM": EASM_ENDPOINTS,
            "OneAPI": ONEAPI_ENDPOINTS,
        }
        endpoints = endpoint_map.get(api_type, ZIA_ENDPOINTS)
        endpoint_total = sum(len(items) for items in endpoints.values())
        self.endpoint_count.setText(
            self.tr("{count} operations · {groups} groups").format(
                count=endpoint_total, groups=len(endpoints)
            )
        )
        
        first_category = True
        for category, items in endpoints.items():
            category_item = QTreeWidgetItem([category])
            category_item.setExpanded(first_category)
            first_category = False
            
            for name, details in items.items():
                endpoint_item = QTreeWidgetItem([f"{details['method']} {name}"])
                endpoint_item.setData(0, Qt.ItemDataRole.UserRole, details)
                category_item.addChild(endpoint_item)
            
            self.endpoint_tree.addTopLevelItem(category_item)
        
        # Update help panel with API documentation links
        docs = API_DOCS.get(api_type, {})
        if docs:
            self.help_text.setText(
                f"<h3>{api_type} API</h3>"
                f"<p><a href='{docs.get('getting_started', '')}'>Getting Started</a></p>"
                f"<p><a href='{docs.get('authentication', '')}'>Authentication</a></p>"
                f"<p><a href='{docs.get('base', '')}'>API Reference</a></p>"
                f"<p><a href='{docs.get('rate_limits', '')}'>Rate Limits</a></p>"
            )
            self.help_text.setOpenExternalLinks(True)
    
    def _on_endpoint_selected(self, item: QTreeWidgetItem, column: int):
        details = item.data(0, Qt.ItemDataRole.UserRole)
        if not details:
            return
        
        # Update request
        self.method_combo.setCurrentText(f"● {details['method']}")
        
        # Build URL
        settings = QSettings("Zscaler", "APIClient")
        api_type = self.api_type.currentText().replace("🟢 ", "").replace("🔴 ", "")
        path = details["path"]
        
        if details.get("absolute_url"):
            # Automation Hub publishes the authoritative host per product.
            base_url = ""
            path = details["absolute_url"]
            cloud = settings.value("oneapi/cloud", "").strip().lower()
            if cloud and cloud.upper() != "PRODUCTION" and "." not in cloud:
                path = path.replace("https://api.zsapi.net", f"https://api.{cloud}.zsapi.net")
            customer_id = settings.value("oneapi/customer_id", "")
            if customer_id:
                path = path.replace(":customerId", customer_id)
        elif api_type == "ZIA":
            cloud = settings.value("zia/cloud", "zsapi.zscaler.net")
            base_url = f"https://{cloud}"
        elif api_type == "ZPA":
            cloud = settings.value("zpa/cloud", "config.private.zscaler.com")
            base_url = f"https://{cloud}"
            # Replace customer ID placeholder
            customer_id = settings.value("zpa/customer_id", "")
            path = path.replace("{customerId}", customer_id)
        elif api_type == "ZDX":
            cloud = settings.value("zdx/cloud", "api.zdxcloud.net")
            base_url = f"https://{cloud}"
        elif api_type == "ZCC":
            cloud = settings.value("zcc/cloud", "api.zscaler.com")
            base_url = f"https://{cloud}"
        elif api_type == "ZIdentity":
            domain = settings.value("zidentity/domain", "")
            if domain:
                base_url = f"https://{domain}"
            else:
                base_url = ""
        elif api_type == "ZTW":
            cloud = settings.value("ztw/cloud", "connector.zscaler.net")
            base_url = f"https://{cloud}"
        elif api_type == "ZWA":
            cloud = settings.value("zwa/cloud", "workflow.zscaler.com")
            base_url = f"https://{cloud}"
        elif api_type == "EASM":
            cloud = settings.value("easm/cloud", "api.zscaler.com")
            base_url = f"https://{cloud}"
        elif api_type == "OneAPI":
            # OneAPI: unified base URL
            cloud = settings.value("oneapi/cloud", "").strip()
            vanity_domain = settings.value("oneapi/vanity_domain", "")
            # Cloud should be empty (production), or a simple prefix like 'beta'/'alpha'
            # If it contains dots (e.g. 'zscalerthree.net'), treat as production
            is_non_prod = cloud and cloud.upper() != "PRODUCTION" and "." not in cloud
            if details.get("auth_endpoint"):
                # Auth endpoint uses zslogin domain
                if is_non_prod:
                    base_url = f"https://{vanity_domain}.zslogin{cloud.lower()}.net"
                else:
                    base_url = f"https://{vanity_domain}.zslogin.net"
            elif details.get("use_zidentity_base"):
                # ZIdentity admin endpoints
                if is_non_prod:
                    base_url = f"https://{vanity_domain}-admin.zslogin{cloud.lower()}.net"
                else:
                    base_url = f"https://{vanity_domain}-admin.zslogin.net"
            else:
                # Regular API endpoints
                if is_non_prod:
                    base_url = f"https://api.{cloud.lower()}.zsapi.net"
                else:
                    base_url = "https://api.zsapi.net"
            # Replace customerId placeholder for ZPA endpoints
            customer_id = settings.value("oneapi/customer_id", "")
            path = path.replace("{customerId}", customer_id)
        else:
            base_url = ""
        
        self.url_input.setText(base_url + path)
        self._populate_path_variables(base_url + path)
        
        # Update body if present
        if "body" in details:
            self.body_input.setPlainText(json.dumps(details["body"], indent=2))
            self.request_tabs.setCurrentIndex(2)  # Body tab
        else:
            self.body_input.clear()
        
        # Update params
        self.params_table.clearContents()
        if "params" in details:
            for row, (key, value) in enumerate(details["params"].items()):
                if row < self.params_table.rowCount():
                    self.params_table.setItem(row, 0, QTableWidgetItem(key))
                    self.params_table.setItem(row, 1, QTableWidgetItem(value))
        
        # Update help with documentation link
        doc_url = details.get("doc_url", "")
        doc_link = f"<br><br><a href='{doc_url}'>📖 View Documentation</a>" if doc_url else ""
        self.help_text.setText(f"<b>{item.text(0)}</b><br><br>{details['description']}{doc_link}")
        self.help_text.setOpenExternalLinks(True)

    def _populate_path_variables(self, url: str):
        """Populate editable values for placeholders in an endpoint URL."""
        names = []
        url_path = urllib.parse.urlsplit(url).path
        for colon_name, brace_name in re.findall(
            r":([A-Za-z][A-Za-z0-9_]*)|\{([A-Za-z][A-Za-z0-9_]*)\}", url_path
        ):
            name = colon_name or brace_name
            if name not in names:
                names.append(name)
        self.variables_table.setRowCount(len(names))
        for row, name in enumerate(names):
            name_item = QTableWidgetItem(name)
            name_item.setFlags(name_item.flags() & ~Qt.ItemFlag.ItemIsEditable)
            self.variables_table.setItem(row, 0, name_item)
            self.variables_table.setItem(row, 1, QTableWidgetItem(""))
        if names:
            self.request_tabs.setCurrentIndex(3)
    
    def _update_api_list(self):
        """Update API dropdown based on enabled APIs in settings."""
        settings = QSettings("Zscaler", "APIClient")
        
        all_apis = ["OneAPI", "ZIA", "ZPA", "ZDX", "ZCC", "ZIdentity", "ZTW", "ZWA", "EASM"]
        enabled_apis = []
        
        for api in all_apis:
            api_lower = api.lower()
            if settings.value(f"{api_lower}/enabled", "true" if api in ("ZIA", "OneAPI") else "false") == "true":
                enabled_apis.append(api)
        
        # If no APIs enabled, show all (fallback)
        if not enabled_apis:
            enabled_apis = all_apis
        
        current = self.api_type.currentText().replace("🟢 ", "").replace("🔴 ", "")
        preferred = str(settings.value("advanced/default_api", "ZIA"))
        self.api_type.blockSignals(True)
        self.api_type.clear()
        self.api_type.addItems(enabled_apis)
        
        # The explicit startup default has priority; keep the prior selection
        # only when that default is disabled for the current profile.
        if preferred in enabled_apis:
            self.api_type.setCurrentText(preferred)
        elif current in enabled_apis:
            self.api_type.setCurrentText(current)
        
        self.api_type.blockSignals(False)

    def _apply_startup_authentication(self):
        """Honor explicit auto-auth preference after first-run dialogs are complete."""
        settings = QSettings("Zscaler", "APIClient")
        api = self._current_api_type()
        if settings.value("advanced/auto_auth", "false") == "true" and not self._get_auth_status(api):
            self._authenticate_api()
    
    def _log_output(self, message: str, level: str = "info"):
        """Log a message to the output panel."""
        from datetime import datetime
        timestamp = datetime.now().strftime("%H:%M:%S")
        prefix = {"info": "ℹ️", "success": "✅", "error": "❌", "warning": "⚠️"}.get(level, "")
        self.output_log.appendPlainText(f"[{timestamp}] {prefix} {message}")
        # Auto-scroll to bottom
        scrollbar = self.output_log.verticalScrollBar()
        scrollbar.setValue(scrollbar.maximum())
        AuditTrail(QSettings("Zscaler", "APIClient")).append("console", {"level": level, "message": message})

    def _show_operations(self, initial_tab=0):
        """Open the relevant Operations Center workspace for the chosen task."""
        OperationsDialog(self, initial_tab=initial_tab).exec()

    def _manage_profiles(self):
        """Save/switch non-secret environment settings; secrets remain in the keychain."""
        settings = QSettings("Zscaler", "APIClient")
        raw = settings.value("profiles/names", "[]")
        try: names = json.loads(raw)
        except (TypeError, ValueError): names = []
        choices = names + [self.tr("Create new profile…")]
        choice, ok = QInputDialog.getItem(self, self.tr("Environment profiles"), self.tr("Profile:"), choices, editable=False)
        if not ok: return
        if choice == self.tr("Create new profile…"):
            choice, ok = QInputDialog.getText(self, self.tr("Environment profiles"), self.tr("New profile name:"))
            if not ok or not choice.strip(): return
            choice = choice.strip()
            if choice not in names: names.append(choice)
            settings.setValue("profiles/names", json.dumps(names))
            settings.setValue(f"profiles/{choice}/api", self.api_type.currentText())
            settings.setValue(f"profiles/{choice}/url", redact_url(self.url_input.text()))
        else:
            api = settings.value(f"profiles/{choice}/api", "ZIA")
            url = settings.value(f"profiles/{choice}/url", "")
            if self.api_type.findText(api) >= 0: self.api_type.setCurrentText(api)
            self.url_input.setText(url)
        settings.setValue("profiles/active", choice)
        AuditTrail(settings).append("environment_profile_selected", {"profile": choice})
        self.status_bar.showMessage(self.tr("Environment profile active: ") + choice)
    
    def _update_method_color(self):
        """Update method combo color based on selected HTTP method."""
        text = self.method_combo.currentText().replace("● ", "")
        color = self._method_colors.get(text, "#000000")
        self.method_combo.setStyleSheet(
            f"QComboBox {{ font-weight: bold; color: {color}; }}"
        )

    def _filter_endpoints(self, text: str):
        """Filter endpoint tree items by search text."""
        text = text.lower()
        visible_count = 0
        for i in range(self.endpoint_tree.topLevelItemCount()):
            category = self.endpoint_tree.topLevelItem(i)
            any_visible = False
            for j in range(category.childCount()):
                child = category.child(j)
                details = child.data(0, Qt.ItemDataRole.UserRole) or {}
                haystack = " ".join([
                    category.text(0), child.text(0), details.get("description", ""),
                    details.get("absolute_url", details.get("path", "")),
                ]).lower()
                visible = not text or text in haystack
                child.setHidden(not visible)
                if visible:
                    any_visible = True
                    visible_count += 1
            category.setHidden(not any_visible)
            if any_visible and text:
                category.setExpanded(True)
        label = self.tr("{count} matching operations") if text else self.tr("{count} operations")
        self.endpoint_count.setText(label.format(count=visible_count))

    def _on_endpoint_double_clicked(self, item, column: int):
        """Double-click an endpoint to select and send."""
        details = item.data(0, Qt.ItemDataRole.UserRole)
        if not details:
            return
        self._on_endpoint_selected(item, column)
        self._send_request()

    def _load_wizard_request(self, method: str, url: str, task_name: str):
        """Load a common task selected by the first-run wizard."""
        self.method_combo.setCurrentText(f"● {method}")
        self.url_input.setText(url)
        self.params_table.clearContents()
        self.headers_table.clearContents()
        self.body_input.clear()
        self._populate_path_variables(url)
        self.help_text.setText(
            f"<h3>{task_name}</h3><p>Prepared by the Getting Started Wizard. "
            "Enter any highlighted path variables, then send the request.</p>"
        )

    def _load_ai_example(self, index: int):
        """Load a catalog-only example; execution still requires preview and approval."""
        question = self.ai_example_choice.itemData(index)
        if not question:
            return
        self.ai_question.setText(question)
        self.ai_preview.clear()
        self.ai_summary.setText(self.tr("Guided example loaded. Find the API request, review the preview, then choose whether to run it."))
        self.ai_question.setFocus()

    def _toggle_pretty_print(self):
        """Toggle pretty-print for JSON response."""
        self.pretty_print_enabled = self.pretty_print_btn.isChecked()
        text = self.response_body.toPlainText()
        if not text:
            return
        try:
            data = json.loads(text)
            if self.pretty_print_enabled:
                settings = QSettings("Zscaler", "APIClient")
                indent = settings.value("display/json_indent", "2")
                indent_val = None if indent == "Tab" else int(indent)
                self.response_body.setPlainText(json.dumps(data, indent=indent_val))
            else:
                self.response_body.setPlainText(json.dumps(data, separators=(',', ':')))
        except (json.JSONDecodeError, ValueError):
            pass

    def _format_size(self, size_bytes: int) -> str:
        """Format byte size to human readable."""
        if size_bytes < 1024:
            return f"{size_bytes} B"
        elif size_bytes < 1024 * 1024:
            return f"{size_bytes / 1024:.1f} KB"
        else:
            return f"{size_bytes / (1024 * 1024):.1f} MB"

    def _get_auth_status(self, api_type: str) -> bool:
        """Check if an API type is authenticated."""
        token_map = {
            "ZIA": self.zia_session,
            "ZPA": self.zpa_token,
            "ZDX": self.zdx_token,
            "ZCC": self.zcc_token,
            "ZIdentity": self.zidentity_token,
            "ZTW": self.ztw_token,
            "ZWA": self.zwa_token,
            "EASM": self.easm_token,
            "OneAPI": self.oneapi_token,
        }
        return bool(token_map.get(api_type))

    def _current_api_type(self) -> str:
        """Get current API type without indicator emoji."""
        return self.api_type.currentText().replace("🟢 ", "").replace("🔴 ", "")

    def _api_base_url(self, api_type: str | None = None) -> str:
        """Resolve the normal API origin for every configured product."""
        api_type = api_type or self._current_api_type()
        settings = QSettings("Zscaler", "APIClient")
        if api_type == "OneAPI":
            cloud = str(settings.value("oneapi/cloud", "")).strip()
            if cloud and cloud.upper() != "PRODUCTION" and "." not in cloud:
                return f"https://api.{cloud.lower()}.zsapi.net"
            return "https://api.zsapi.net"
        product_hosts = {
            "ZIA": ("zia/cloud", "zsapi.zscaler.net"), "ZPA": ("zpa/cloud", "config.private.zscaler.com"),
            "ZDX": ("zdx/cloud", "api.zdxcloud.net"), "ZCC": ("zcc/cloud", "api.zscaler.com"),
            "ZIdentity": ("zidentity/domain", ""), "ZTW": ("ztw/cloud", "connector.zscaler.net"),
            "ZWA": ("zwa/cloud", "workflow.zscaler.com"), "EASM": ("easm/cloud", "api.zscaler.com"),
        }
        key, default = product_hosts.get(api_type, ("", ""))
        host = str(settings.value(key, default)).strip()
        return f"https://{host}" if host else ""

    def _update_auth_indicators(self):
        """Update api_type combo with auth indicators."""
        for i in range(self.api_type.count()):
            api = self.api_type.itemText(i)
            clean = api.replace("🟢 ", "").replace("🔴 ", "")
            if self._get_auth_status(clean):
                self.api_type.setItemText(i, f"🟢 {clean}")
            else:
                self.api_type.setItemText(i, f"🔴 {clean}")

    def _authenticate_api(self):
        """Authenticate with the currently selected API."""
        api_type = self._current_api_type()
        settings = QSettings("Zscaler", "APIClient")
        
        self._log_output(f"Authenticating {api_type}...")
        
        if api_type == "ZIA":
            # ZIA uses session cookie auth
            cloud = settings.value("zia/cloud", "")
            api_key = secure_get("zia_api_key")  # From keychain
            username = settings.value("zia/username", "")
            password = secure_get("zia_password")  # From keychain
            
            if not all([cloud, api_key, username, password]):
                self._log_output("ZIA credentials not configured. Go to Settings.", "error")
                QMessageBox.warning(self, self.tr("Error"), 
                    self.tr("ZIA credentials not configured. Please go to Settings."))
                return
            
            # Build auth URL and body
            url = f"https://{cloud}/api/v1/authenticatedSession"
            self.url_input.setText(url)
            self.method_combo.setCurrentText("● POST")
            
            # Generate timestamp and obfuscated key
            import time
            timestamp = str(int(time.time() * 1000))
            key = self._obfuscate_api_key(api_key, timestamp)
            
            body = {
                "apiKey": key,
                "username": username,
                "password": password,
                "timestamp": timestamp
            }
            self.body_input.setPlainText(json.dumps(body, indent=2))
            self._send_request()
            
        elif api_type == "ZCC":
            cloud = settings.value("zcc/cloud", "api.zsapi.net")
            api_key = settings.value("zcc/client_id", "")
            api_secret = secure_get("zcc_client_secret")
            if not all([cloud, api_key, api_secret]):
                self._log_output("ZCC credentials not configured. Go to Settings.", "error")
                QMessageBox.warning(self, self.tr("Error"), self.tr("ZCC credentials not configured. Please go to Settings."))
                return
            self.url_input.setText(f"https://{cloud}/zcc/papi/auth/v1/login")
            self.method_combo.setCurrentText("● POST")
            self.headers_table.setItem(0, 0, QTableWidgetItem("Content-Type"))
            self.headers_table.setItem(0, 1, QTableWidgetItem("application/json"))
            self.body_input.setPlainText(json.dumps({"apiKey": api_key, "secretKey": api_secret}, indent=2))
            self._send_request()

        elif api_type in ["ZPA", "ZDX", "ZIdentity", "ZTW", "ZWA", "EASM"]:
            # OAuth-based APIs
            api_lower = api_type.lower()
            cloud = settings.value(f"{api_lower}/cloud", "")
            
            # Handle different credential field names
            if api_type == "ZDX":
                client_id = settings.value("zdx/key_id", "")
                client_secret = secure_get("zdx_key_secret")
            else:
                client_id = settings.value(f"{api_lower}/client_id", "")
                client_secret = secure_get(f"{api_lower}_client_secret")
            
            if not all([cloud, client_id, client_secret]):
                self._log_output(f"{api_type} credentials not configured. Go to Settings.", "error")
                QMessageBox.warning(self, self.tr("Error"), 
                    self.tr(f"{api_type} credentials not configured. Please go to Settings."))
                return
            
            # Build OAuth URL based on API type
            if api_type == "ZPA":
                url = f"https://{cloud}/signin"
            elif api_type == "ZIdentity":
                domain = settings.value("zidentity/domain", "")
                # ZIdentity uses /oauth2/v1/token endpoint on zslogin domain
                if domain:
                    # If domain looks like a vanity domain (no dots), construct zslogin URL
                    if "." not in domain:
                        url = f"https://{domain}.zslogin.net/oauth2/v1/token"
                    else:
                        url = f"https://{domain}/oauth2/v1/token"
                else:
                    url = f"https://{cloud}/oauth2/v1/token"
            elif api_type == "ZDX":
                # ZDX uses /v1/oauth/token with JSON body
                url = f"https://{cloud}/v1/oauth/token"
            elif api_type in ("ZTW", "ZWA", "EASM"):
                # These APIs use /oauth/token
                url = f"https://{cloud}/oauth/token"
            else:
                url = f"https://{cloud}/oauth2/token"
            
            self.url_input.setText(url)
            self.method_combo.setCurrentText("● POST")
            
            # Set content type and body based on API type
            if api_type == "ZDX":
                # ZDX uses JSON body with key_id/key_secret
                self.headers_table.setItem(0, 0, QTableWidgetItem("Content-Type"))
                self.headers_table.setItem(0, 1, QTableWidgetItem("application/json"))
                import time
                body = json.dumps({
                    "key_id": client_id,
                    "key_secret": client_secret,
                    "timestamp": int(time.time() * 1000)
                }, indent=2)
            else:
                # Other APIs use form-urlencoded
                self.headers_table.setItem(0, 0, QTableWidgetItem("Content-Type"))
                self.headers_table.setItem(0, 1, QTableWidgetItem("application/x-www-form-urlencoded"))
                body = f"client_id={client_id}&client_secret={client_secret}&grant_type=client_credentials"
            
            self.body_input.setPlainText(body)
            self._send_request()
            
        elif api_type == "OneAPI":
            # OneAPI uses ZIdentity OAuth2 with vanity domain
            vanity_domain = settings.value("oneapi/vanity_domain", "")
            client_id = settings.value("oneapi/client_id", "")
            client_secret = secure_get("oneapi_client_secret")
            cloud = settings.value("oneapi/cloud", "")
            
            if not all([vanity_domain, client_id, client_secret]):
                self._log_output("OneAPI credentials not configured. Go to Settings.", "error")
                QMessageBox.warning(self, self.tr("Error"), 
                    self.tr("OneAPI credentials not configured. Please go to Settings."))
                return
            
            # Build auth URL: https://{vanity_domain}.zslogin{cloud}.net/oauth2/v1/token
            if cloud and cloud.upper() != "PRODUCTION":
                auth_url = f"https://{vanity_domain}.zslogin{cloud.lower()}.net/oauth2/v1/token"
            else:
                auth_url = f"https://{vanity_domain}.zslogin.net/oauth2/v1/token"
            
            self.url_input.setText(auth_url)
            self.method_combo.setCurrentText("● POST")
            
            # OneAPI uses form-urlencoded with audience parameter
            self.headers_table.setItem(0, 0, QTableWidgetItem("Content-Type"))
            self.headers_table.setItem(0, 1, QTableWidgetItem("application/x-www-form-urlencoded"))
            body = f"client_id={client_id}&client_secret={client_secret}&grant_type=client_credentials&audience=https://api.zscaler.com"
            
            self.body_input.setPlainText(body)
            self._send_request()
    
    def _run_ai_assistant(self):
        """Turn a natural-language question into a safe catalog-backed request."""
        question = self.ai_question.text().strip()
        if not question:
            return
        settings = QSettings("Zscaler", "APIClient")
        provider = settings.value("ai/provider", "catalog")
        words = {word for word in re.findall(r"[a-z0-9]+", question.lower()) if len(word) > 2}
        def score(endpoint):
            haystack = " ".join(str(endpoint.get(key, "")) for key in ("product", "category", "name", "description", "url")).lower()
            product = str(endpoint.get("product", "")).lower()
            return sum(word in haystack for word in words) + (10 if product in words else 0)
        matches = sorted(AUTOMATION_HUB_CATALOG, key=score, reverse=True)
        matches = [match for match in matches if score(match)][:20]
        if not matches:
            self.ai_summary.setText(self.tr("No matching API operation was found. Try product and resource names."))
            self.ai_table.setRowCount(0)
            return
        best = matches[0]
        self.method_combo.setCurrentText(f"● {best['method']}")
        self.url_input.setText(best["url"])
        self._populate_path_variables(best["url"])
        summary = self.tr("Suggested request: {method} {name}. Review path variables before running.").format(method=best["method"], name=best["name"])
        if provider in {"openai", "local"}:
            summary = f"{summary}\n\n{self.tr('Asking configured LLM…') }"
            self.ai_llm_worker = LlmWorker(lambda: self._ask_configured_llm(question, matches[:5]))
            self.ai_llm_worker.completed.connect(self._on_llm_completed)
            self.ai_llm_worker.failed.connect(self._on_llm_failed)
            self.ai_llm_worker.start()
        self.ai_summary.setText(summary)
        self.ai_table.setRowCount(len(matches))
        self.ai_table.setColumnCount(4)
        self.ai_table.setHorizontalHeaderLabels([self.tr("Product"), self.tr("Operation"), self.tr("Method"), self.tr("URL")])
        for row, endpoint in enumerate(matches):
            for column, value in enumerate((endpoint["product"].upper(), endpoint["name"], endpoint["method"], redact_url(endpoint["url"]))):
                self.ai_table.setItem(row, column, QTableWidgetItem(value))
        self.ai_table.resizeColumnsToContents()
        self._log_output(f"AI catalog match: {best['method']} {redact_url(best['url'])}", "info")
        suggestions = {}
        if any(token in words for token in {"all", "many", "page", "pagination", "limit"}):
            suggestions["pageSize"] = "100"
        if "filter" in words or "search" in words:
            suggestions["search"] = "<review-required>"
        self.ai_preview.setPlainText(json.dumps(redact_sensitive({"method": best["method"], "url": best["url"], "suggested_params": suggestions}), indent=2))

    def _review_ai_request(self):
        """Require a human acknowledgement before executing an AI-derived request."""
        if not self.ai_preview.toPlainText():
            QMessageBox.warning(self, self.tr("Warning"), self.tr("Ask the AI assistant for a request first."))
            return
        review = QMessageBox.question(
            self, self.tr("Review AI request"),
            self.tr("Review the URL, path variables, and parameters in the preview before sending. Send this request now?"),
            QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.No, QMessageBox.StandardButton.No,
        )
        if review == QMessageBox.StandardButton.Yes:
            self._apply_ai_suggestions()
            self._send_request()

    def _apply_ai_suggestions(self):
        """Apply only reviewed, concrete AI parameters; placeholders remain user input."""
        try:
            suggestions = json.loads(self.ai_preview.toPlainText()).get("suggested_params", {})
        except json.JSONDecodeError:
            return
        concrete = {key: value for key, value in suggestions.items() if value and not str(value).startswith("<")}
        if not concrete:
            return
        values = self._table_values(self.params_table)
        values.update(concrete)
        self._populate_table(self.params_table, values)
        self.request_tabs.setCurrentIndex(0)

    def _on_llm_completed(self, answer: str):
        self.ai_summary.setText(self.ai_summary.text().replace(self.tr("Asking configured LLM…"), redact_sensitive(answer)))

    def _on_llm_failed(self, error: str):
        fallback = self.tr("LLM unavailable; using the local catalog assistant.")
        self.ai_summary.setText(self.ai_summary.text().replace(self.tr("Asking configured LLM…"), f"{fallback}: {redact_sensitive(error)}"))

    def _ask_configured_llm(self, question: str, candidates: list[dict]) -> str:
        """Call a configured OpenAI-compatible endpoint without credentials or API responses."""
        settings = QSettings("Zscaler", "APIClient")
        endpoint = str(settings.value("ai/endpoint", "")).rstrip("/")
        model = str(settings.value("ai/model", "")).strip()
        key = secure_get("ai_api_key")
        if not endpoint or not model:
            raise ValueError(self.tr("Configure an AI endpoint and model in Settings."))
        parsed_endpoint = urllib.parse.urlsplit(endpoint)
        local_host = parsed_endpoint.hostname in {"localhost", "127.0.0.1", "::1"}
        if parsed_endpoint.scheme not in {"http", "https"}:
            raise ValueError(self.tr("AI endpoint must use HTTP or HTTPS."))
        if not local_host and settings.value("ai/allow_external", "false") != "true":
            raise PermissionError(self.tr("External AI is disabled. Enable it explicitly in Settings."))
        if not local_host and parsed_endpoint.scheme != "https":
            raise ValueError(self.tr("External AI endpoints must use HTTPS."))
        if len(question) > 2000:
            raise ValueError(self.tr("AI question is too long (maximum 2000 characters)."))
        url = endpoint if endpoint.endswith("/chat/completions") else f"{endpoint}/chat/completions"
        catalog = [{key: item[key] for key in ("product", "name", "method", "url", "description")} for item in candidates]
        prompt = (
            "You are a Zscaler OneAPI assistant. Use only the supplied API catalog candidates. "
            "Do not request, reveal, or include secrets. Explain the best safe request in concise plain text.\n"
            f"Question: {redact_sensitive(question)}\nCandidates: {json.dumps(redact_sensitive(catalog))}"
        )
        headers = {"Content-Type": "application/json"}
        if key:
            headers["Authorization"] = f"Bearer {key}"
        payload = json.dumps({"model": model, "messages": [{"role": "user", "content": prompt}], "temperature": 0.1}).encode("utf-8")
        request = urllib.request.Request(url, data=payload, headers=headers, method="POST")
        with build_network_opener(QSettings("Zscaler", "APIClient")).open(request, timeout=30) as response:
            result = json.loads(response.read().decode("utf-8"))
        return str(result["choices"][0]["message"]["content"]).strip()

    def _export_full_response(self):
        path, _ = QFileDialog.getSaveFileName(
            self, self.tr("Export response"), "response.json",
            "JSON (*.json);;Markdown (*.md);;HTML (*.html);;PDF (*.pdf)"
        )
        if not path:
            return
        raw = self.response_body.toPlainText()
        try:
            body = json.loads(raw)
        except json.JSONDecodeError:
            body = raw
        headers = dict(line.split(": ", 1) for line in self.response_headers.toPlainText().splitlines() if ": " in line)
        payload = redact_sensitive({"body": body, "headers": headers})
        suffix = Path(path).suffix.lower()
        if suffix == ".md":
            content = "# ZS API Client response\n\n```json\n" + json.dumps(payload, indent=2) + "\n```\n"
            Path(path).write_text(content, encoding="utf-8")
        elif suffix == ".html":
            content = "<!doctype html><html><head><meta charset=\"utf-8\"><title>ZS API Client response</title></head><body><h1>ZS API Client response</h1><pre>" + html.escape(json.dumps(payload, indent=2)) + "</pre></body></html>"
            Path(path).write_text(content, encoding="utf-8")
        elif suffix == ".pdf":
            Path(path).write_bytes(self._pdf_bytes("ZS API Client response", json.dumps(payload, indent=2).splitlines()))
        else:
            Path(path).write_text(json.dumps(payload, indent=2), encoding="utf-8")
        self.status_bar.showMessage(self.tr("Masked response exported"))

    def _preview_response_export(self):
        """Show exactly what will leave the application, with secrets already masked."""
        raw = self.response_body.toPlainText()
        try: body = json.loads(raw)
        except json.JSONDecodeError: body = raw
        headers = dict(line.split(": ", 1) for line in self.response_headers.toPlainText().splitlines() if ": " in line)
        preview = json.dumps(redact_sensitive({"body": body, "headers": headers}), indent=2)
        dialog = QDialog(self); dialog.setWindowTitle(self.tr("Export preview")); dialog.resize(760, 520)
        layout = QVBoxLayout(dialog); note = QLabel(self.tr("Sensitive fields are masked in every export.")); layout.addWidget(note)
        text = QPlainTextEdit(preview); text.setReadOnly(True); layout.addWidget(text)
        buttons = QDialogButtonBox(QDialogButtonBox.StandardButton.Close); buttons.rejected.connect(dialog.reject); layout.addWidget(buttons)
        dialog.exec()

    def _export_ai_result(self):
        path, _ = QFileDialog.getSaveFileName(
            self, self.tr("Export AI result"), "ai-result.csv",
            "CSV (*.csv);;Excel (*.xlsx);;NDJSON (*.jsonl);;JSON (*.json);;Markdown (*.md);;HTML (*.html);;PDF (*.pdf);;PNG chart (*.png);;SVG chart (*.svg);;cURL (*.sh);;Postman Collection (*.postman_collection.json)"
        )
        if not path:
            return
        headers, safe_rows = self._ai_export_payload()
        suffix = Path(path).suffix.lower()
        if suffix == ".png":
            if not self.ai_chart.values:
                QMessageBox.information(self, self.tr("Export AI result"), self.tr("No chart data is available to export."))
                return
            self.ai_chart.grab().save(path, "PNG")
        elif suffix == ".svg":
            if not self.ai_chart.values:
                QMessageBox.information(self, self.tr("Export AI result"), self.tr("No chart data is available to export."))
                return
            Path(path).write_text(self._svg_chart(), encoding="utf-8")
        elif suffix == ".sh":
            Path(path).write_text(self._masked_curl_command() + "\n", encoding="utf-8")
        elif path.lower().endswith(".postman_collection.json"):
            Path(path).write_text(json.dumps(self._postman_collection(), indent=2), encoding="utf-8")
        else:
            Path(path).write_bytes(self._tabular_export_bytes(suffix, headers, safe_rows))
        self.status_bar.showMessage(self.tr("AI result exported"))

    @staticmethod
    def _tabular_export_bytes(suffix: str, headers: list[str], rows: list[list[str]]) -> bytes:
        """Serialize a masked table without optional third-party dependencies."""
        suffix = suffix.lower()
        if suffix == ".json":
            return json.dumps({"columns": headers, "rows": rows}, indent=2).encode("utf-8")
        if suffix == ".jsonl":
            return ("\n".join(json.dumps(dict(zip(headers, row)), ensure_ascii=False) for row in rows) + ("\n" if rows else "")).encode("utf-8")
        if suffix == ".md":
            escape_cell = lambda value: str(value).replace("|", "\\|").replace("\n", "<br>")
            lines = ["| " + " | ".join(escape_cell(value) for value in headers) + " |", "| " + " | ".join("---" for _ in headers) + " |"]
            lines.extend("| " + " | ".join(escape_cell(value) for value in row) + " |" for row in rows)
            return ("\n".join(lines) + "\n").encode("utf-8")
        if suffix == ".html":
            cells = lambda tag, values: "<tr>" + "".join(f"<{tag}>{html.escape(str(value))}</{tag}>" for value in values) + "</tr>"
            document = "<!doctype html><html><head><meta charset=\"utf-8\"><title>ZS API Client export</title></head><body><table><thead>" + cells("th", headers) + "</thead><tbody>" + "".join(cells("td", row) for row in rows) + "</tbody></table></body></html>"
            return document.encode("utf-8")
        if suffix == ".pdf":
            lines = [" | ".join(headers)] + [" | ".join(str(value) for value in row) for row in rows]
            return MainWindow._pdf_bytes("ZS API Client export", lines)
        if suffix == ".xlsx":
            return MainWindow._xlsx_bytes(headers, rows)
        output = io.StringIO(newline="")
        writer = csv.writer(output)
        writer.writerow(headers)
        writer.writerows(rows)
        return output.getvalue().encode("utf-8")

    @staticmethod
    def _xlsx_bytes(headers: list[str], rows: list[list[str]]) -> bytes:
        """Create a standards-compatible single-sheet XLSX using inline strings."""
        sheet_rows = []
        for row_number, row in enumerate([headers, *rows], 1):
            cells = "".join(
                f'<c r="{chr(65 + column)}{row_number}" t="inlineStr"><is><t>{xml_escape(str(value))}</t></is></c>'
                for column, value in enumerate(row[:26])
            )
            sheet_rows.append(f'<row r="{row_number}">{cells}</row>')
        sheet = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetData>' + "".join(sheet_rows) + "</sheetData></worksheet>"
        archive = io.BytesIO()
        with zipfile.ZipFile(archive, "w", zipfile.ZIP_DEFLATED) as workbook:
            workbook.writestr("[Content_Types].xml", '<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/></Types>')
            workbook.writestr("_rels/.rels", '<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>')
            workbook.writestr("xl/workbook.xml", '<?xml version="1.0" encoding="UTF-8"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="Export" sheetId="1" r:id="rId1"/></sheets></workbook>')
            workbook.writestr("xl/_rels/workbook.xml.rels", '<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/></Relationships>')
            workbook.writestr("xl/worksheets/sheet1.xml", sheet)
        return archive.getvalue()

    @staticmethod
    def _pdf_bytes(title: str, lines: list[str]) -> bytes:
        """Write a small portable PDF report; data is text-only and already masked."""
        safe_lines = [title, ""] + [str(line)[:150] for line in lines[:55]]
        escape_pdf = lambda value: value.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")
        stream = "BT\n/F1 10 Tf\n50 790 Td\n" + "\n".join(f"({escape_pdf(line)}) Tj\n0 -13 Td" for line in safe_lines) + "\nET"
        objects = [
            "<< /Type /Catalog /Pages 2 0 R >>",
            "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
            "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>",
            f"<< /Length {len(stream.encode('latin-1', 'replace'))} >>\nstream\n{stream}\nendstream",
            "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
        ]
        output = io.BytesIO()
        output.write(b"%PDF-1.4\n")
        offsets = [0]
        for index, value in enumerate(objects, 1):
            offsets.append(output.tell())
            output.write(f"{index} 0 obj\n{value}\nendobj\n".encode("latin-1", "replace"))
        xref = output.tell()
        output.write(f"xref\n0 {len(objects) + 1}\n0000000000 65535 f \n".encode())
        output.write("".join(f"{offset:010d} 00000 n \n" for offset in offsets[1:]).encode())
        output.write(f"trailer\n<< /Size {len(objects) + 1} /Root 1 0 R >>\nstartxref\n{xref}\n%%EOF\n".encode())
        return output.getvalue()

    def _ai_export_payload(self) -> tuple[list[str], list[list[str]]]:
        headers = [self.ai_table.horizontalHeaderItem(col).text() if self.ai_table.horizontalHeaderItem(col) else "" for col in range(self.ai_table.columnCount())]
        rows = [[self.ai_table.item(row, col).text() if self.ai_table.item(row, col) else "" for col in range(self.ai_table.columnCount())] for row in range(self.ai_table.rowCount())]
        return headers, redact_sensitive(rows)

    def _svg_chart(self) -> str:
        """Export the current masked chart as a portable, dependency-free SVG."""
        values = self.ai_chart.values
        width, height = 800, 360
        maximum = max((value for _, value in values), default=1) or 1
        palette = ("#0078d4", "#2e7d32", "#e65100", "#6a1b9a", "#c62828")
        content = ['<rect width="800" height="360" fill="#252526"/>']
        if self.ai_chart.style == "pie":
            import math
            total = sum(value for _, value in values) or 1
            start = -90.0
            for index, (label, value) in enumerate(values):
                end = start + 360 * value / total
                start_x, start_y = 400 + 130 * math.cos(math.radians(start)), 180 + 130 * math.sin(math.radians(start))
                end_x, end_y = 400 + 130 * math.cos(math.radians(end)), 180 + 130 * math.sin(math.radians(end))
                large = 1 if end - start > 180 else 0
                content.append(f'<path d="M 400 180 L {start_x:.1f} {start_y:.1f} A 130 130 0 {large} 1 {end_x:.1f} {end_y:.1f} Z" fill="{palette[index % len(palette)]}"/><text x="20" y="{25 + index * 18}" fill="white">{html.escape(str(label))}: {value:g}</text>')
                start = end
        elif self.ai_chart.style == "line":
            points = [f"{55 + index * (720 / max(1, len(values) - 1)):.1f},{310 - value / maximum * 250:.1f}" for index, (_, value) in enumerate(values)]
            content.append('<polyline points="' + " ".join(points) + '" fill="none" stroke="#0078d4" stroke-width="3"/>')
            content.extend(f'<circle cx="{point.split(",")[0]}" cy="{point.split(",")[1]}" r="4" fill="#0078d4"/><text x="{55 + index * (720 / max(1, len(values) - 1)):.1f}" y="340" text-anchor="middle" fill="white">{html.escape(str(label))[:12]}</text>' for index, ((label, _), point) in enumerate(zip(values, points)))
        else:
            bar_width = max(12, 700 / max(1, len(values)) - 8)
            for index, (label, value) in enumerate(values):
                x = 55 + index * (700 / len(values))
                bar_height = value / maximum * 250
                content.append(f'<rect x="{x:.1f}" y="{310 - bar_height:.1f}" width="{bar_width:.1f}" height="{bar_height:.1f}" fill="#0078d4"/><text x="{x + bar_width / 2:.1f}" y="330" text-anchor="middle" fill="white">{html.escape(str(label))[:12]}</text>')
        return '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="360" viewBox="0 0 800 360">' + "".join(content) + "</svg>"

    def _masked_request_parts(self) -> tuple[str, str, dict[str, str], str]:
        method = self.method_combo.currentText().replace("● ", "")
        url = redact_url(self.url_input.text())
        headers: dict[str, str] = {}
        for row in range(self.headers_table.rowCount()):
            key_item, value_item = self.headers_table.item(row, 0), self.headers_table.item(row, 1)
            if key_item and value_item and key_item.text().strip():
                key = key_item.text().strip()
                headers[key] = "***" if is_sensitive_name(key) else str(redact_sensitive(value_item.text()))
        raw_body = self.body_input.toPlainText().strip()
        try:
            body = json.dumps(redact_sensitive(json.loads(raw_body)), indent=2) if raw_body else ""
        except json.JSONDecodeError:
            body = str(redact_sensitive(raw_body))
        return method, url, headers, body

    def _masked_curl_command(self) -> str:
        method, url, headers, body = self._masked_request_parts()
        parts = ["curl", "-X", method]
        for key, value in headers.items():
            parts.extend(["-H", shlex.quote(f"{key}: {value}")])
        if body and method in {"POST", "PUT", "PATCH", "DELETE"}:
            if not any(key.lower() == "content-type" for key in headers):
                parts.extend(["-H", shlex.quote("Content-Type: application/json")])
            parts.extend(["--data", shlex.quote(body)])
        parts.append(shlex.quote(url))
        return " \\\n  ".join(parts)

    def _postman_collection(self) -> dict:
        method, url, headers, body = self._masked_request_parts()
        request: dict[str, Any] = {
            "method": method,
            "header": [{"key": key, "value": value, "type": "text"} for key, value in headers.items()],
            "url": url,
        }
        if body and method in {"POST", "PUT", "PATCH", "DELETE"}:
            request["body"] = {"mode": "raw", "raw": body, "options": {"raw": {"language": "json"}}}
        return {
            "info": {"name": "ZS API Client (sanitized)", "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"},
            "item": [{"name": f"{method} request (sanitized)", "request": request}],
        }

    def _render_response_visualization(self, data: Any):
        """Visualize masked REST/GraphQL JSON without hiding the raw response."""
        safe = redact_sensitive(data)
        self.response_tree.clear()
        def add(parent, name, value):
            item = QTreeWidgetItem([str(name), "" if isinstance(value, (dict, list)) else str(value)])
            parent.addChild(item)
            if isinstance(value, dict):
                for key, child in value.items(): add(item, key, child)
            elif isinstance(value, list):
                for index, child in enumerate(value[:100]): add(item, f"[{index}]", child)
        root = QTreeWidgetItem([self.tr("Response"), ""]); self.response_tree.addTopLevelItem(root); add(root, "data", safe); root.setExpanded(True)
        self._response_datasets = collect_record_datasets(safe)
        self.response_dataset_choice.blockSignals(True)
        self.response_dataset_choice.clear()
        for index, (path, rows) in enumerate(self._response_datasets):
            self.response_dataset_choice.addItem(f"{path} ({len(rows)})", index)
        if not self._response_datasets:
            self.response_dataset_choice.addItem(self.tr("No tabular datasets"), -1)
        self.response_dataset_choice.setEnabled(bool(self._response_datasets))
        self.response_dataset_choice.blockSignals(False)
        self._render_selected_response_dataset(0)
        nodes = safe.get("nodes", []) if isinstance(safe, dict) else []
        links = safe.get("links", safe.get("edges", [])) if isinstance(safe, dict) else []
        if isinstance(nodes, list) and isinstance(links, list) and (nodes or links):
            node_names = [str(item.get("name") or item.get("id") or item) if isinstance(item, dict) else str(item) for item in nodes[:100]]
            link_names = [f"{item.get('source', '?')} → {item.get('target', '?')}" if isinstance(item, dict) else str(item) for item in links[:200]]
            self.response_topology.setPlainText(self.tr("Nodes") + ":\n" + "\n".join(node_names) + "\n\n" + self.tr("Connections") + ":\n" + "\n".join(link_names))
        else:
            self.response_topology.setPlainText(self.tr("No nodes or connections were found in this response."))

    def _render_selected_response_dataset(self, index=None):
        """Render the selected JSON/GraphQL list branch as table, heatmap, and chart."""
        dataset_index = self.response_dataset_choice.currentData()
        if not isinstance(dataset_index, int) or dataset_index < 0 or dataset_index >= len(self._response_datasets):
            rows = []
        else:
            rows = self._response_datasets[dataset_index][1]
        columns = list(dict.fromkeys(key for row in rows[:100] for key in row))[:16]
        self.response_table.clearContents(); self.response_table.setRowCount(min(100, len(rows))); self.response_table.setColumnCount(len(columns)); self.response_table.setHorizontalHeaderLabels(columns)
        for row_index, row in enumerate(rows[:100]):
            for column_index, column in enumerate(columns):
                value = row.get(column, "")
                self.response_table.setItem(row_index, column_index, QTableWidgetItem(json.dumps(value, ensure_ascii=False) if isinstance(value, (dict, list)) else str(value)))
        self.response_table.resizeColumnsToContents()
        sample = rows[:min(12, len(rows))]
        numeric = [key for key in columns if sample and all(isinstance(row.get(key), (int, float)) and not isinstance(row.get(key), bool) for row in sample)]
        self.response_heatmap.clearContents(); self.response_heatmap.setRowCount(min(50, len(rows))); self.response_heatmap.setColumnCount(len(numeric)); self.response_heatmap.setHorizontalHeaderLabels(numeric)
        for row_index, row in enumerate(rows[:50]):
            for column_index, key in enumerate(numeric):
                value = float(row.get(key, 0)); maximum = max(float(item.get(key, 0)) for item in rows[:50]) or 1
                cell = QTableWidgetItem(f"{value:g}"); intensity = int(60 + 195 * value / maximum); cell.setBackground(QColor(255 - intensity // 2, intensity, 100)); self.response_heatmap.setItem(row_index, column_index, cell)
        self.response_heatmap.resizeColumnsToContents()
        if numeric:
            key = numeric[0]; labels = [str(row.get("name") or row.get("id") or row_index + 1) for row_index, row in enumerate(rows[:12])]
            self.response_chart.set_values(list(zip(labels, [float(row[key]) for row in rows[:12]])))
        else:
            self.response_chart.set_values([])

    def _show_ai_visualization(self, data: Any):
        """Render common API collections as a safe table for quick inspection."""
        def first_record_list(value: Any):
            if isinstance(value, list) and any(isinstance(item, dict) for item in value):
                return value
            if isinstance(value, dict):
                for child in value.values():
                    found = first_record_list(child)
                    if found:
                        return found
            return []
        rows = first_record_list(data)
        rows = [redact_sensitive(row) for row in rows if isinstance(row, dict)]
        if not rows:
            return
        columns = list(dict.fromkeys(key for row in rows[:100] for key in row))[:12]
        self.ai_table.setRowCount(min(len(rows), 100))
        self.ai_table.setColumnCount(len(columns))
        self.ai_table.setHorizontalHeaderLabels(columns)
        for row_index, row in enumerate(rows[:100]):
            for column_index, column in enumerate(columns):
                value = row.get(column, "")
                self.ai_table.setItem(row_index, column_index, QTableWidgetItem(str(value)))
        self.ai_table.resizeColumnsToContents()
        numeric_fields = [column for column in columns if all(isinstance(row.get(column), (int, float)) and not isinstance(row.get(column), bool) for row in rows[: min(len(rows), 12)])]
        if numeric_fields:
            field = numeric_fields[0]
            labels = [str(row.get("name") or row.get("id") or index + 1) for index, row in enumerate(rows[:12])]
            self.ai_chart.set_values(list(zip(labels, [float(row[field]) for row in rows[:12]])))
        else:
            self.ai_chart.set_values([])
        self.ai_summary.setText(self.tr("Visualized {count} records as a masked table. Export is available from the AI Assistant tab.").format(count=len(rows)))

    def _refresh_graphql_presets(self):
        names = QSettings("Zscaler", "APIClient").value("graphql/presets", [], type=list)
        self.graphql_preset_choice.clear()
        self.graphql_preset_choice.addItems(sorted(set(names)))

    def _show_documented_graphql_help(self, entry):
        details = str(entry.get("details") or entry.get("description") or "")[:3000]
        doc_url = html.escape(str(entry.get("doc_url", "")), quote=True)
        link = f"<p><a href='{doc_url}'>Automation Hub</a></p>" if doc_url else ""
        self.help_text.setText(
            f"<h3>{html.escape(str(entry.get('name', '')))}</h3>"
            f"<p><b>{html.escape(str(entry.get('domain', '')))}</b></p>"
            f"<p>{html.escape(details)}</p>{link}"
        )

    def _load_documented_graphql_query(self, entry=None):
        """Prepare an exact Automation Hub example; never execute it automatically."""
        if not isinstance(entry, dict):
            entry = self.graphql_catalog_choice.currentData()
        if not isinstance(entry, dict):
            return
        self._show_documented_graphql_help(entry)
        query = str(entry.get("query", "")).strip()
        if not query:
            QMessageBox.information(
                self, self.tr("Documented GraphQL schema"),
                self.tr("The current Automation Hub page has no executable query example. Open its documentation or use schema introspection."),
            )
            return
        for index in range(self.api_type.count()):
            if self.api_type.itemText(index).replace("🟢 ", "").replace("🔴 ", "") == "OneAPI":
                self.api_type.setCurrentIndex(index)
                break
        self.graphql_mode.setChecked(True)
        self.method_combo.setCurrentText("● POST")
        self.url_input.setText(self._api_base_url("OneAPI").rstrip("/") + "/zins/graphql")
        self.body_input.setPlainText(json.dumps({"query": query, "variables": {}}, indent=2, ensure_ascii=False))
        self.request_tabs.setCurrentIndex(2)
        self.status_bar.showMessage(self.tr("Loaded documented ZInsights query. Review time ranges, filters, and fields before sending."))

    def _browse_documented_graphql_schema(self):
        """Render every bundled ZInsights query and type in the existing schema tree."""
        self.graphql_schema_tree.clear()
        self.graphql_schema_tree.setHeaderLabel(self.tr("Documented GraphQL schema"))
        query_root = QTreeWidgetItem([f"{self.tr('Queries')} ({sum(item.get('kind') == 'query' for item in ZINSIGHTS_GRAPHQL_CATALOG)})"])
        type_root = QTreeWidgetItem([f"{self.tr('Types')} ({sum(item.get('kind') == 'type' for item in ZINSIGHTS_GRAPHQL_CATALOG)})"])
        self.graphql_schema_tree.addTopLevelItems([query_root, type_root])
        domains = {}
        for entry in ZINSIGHTS_GRAPHQL_CATALOG:
            if entry.get("kind") == "query":
                domain = str(entry.get("domain", ""))
                parent = domains.get(domain)
                if parent is None:
                    parent = QTreeWidgetItem([domain]); query_root.addChild(parent); domains[domain] = parent
            else:
                parent = type_root
            item = QTreeWidgetItem([str(entry.get("name", ""))])
            item.setData(0, Qt.ItemDataRole.UserRole, entry)
            item.setToolTip(0, str(entry.get("description") or entry.get("details") or "")[:800])
            parent.addChild(item)
        query_root.setExpanded(True); type_root.setExpanded(True)
        self.response_tabs.setCurrentWidget(self.graphql_schema_tree)

    def _on_documented_graphql_item(self, item, column):
        entry = item.data(0, Qt.ItemDataRole.UserRole)
        if not isinstance(entry, dict):
            return
        self._show_documented_graphql_help(entry)
        if entry.get("kind") == "query":
            self._load_documented_graphql_query(entry)

    def _save_graphql_query(self):
        name = self.graphql_preset_name.text().strip()
        if not name:
            QMessageBox.warning(self, self.tr("Warning"), self.tr("Enter a name before saving the GraphQL query."))
            return
        payload = {"url": self.url_input.text().strip(), "body": self.body_input.toPlainText(), "params": self._table_values(self.params_table)}
        secure_store(f"graphql_preset_{name}", json.dumps(payload))
        settings = QSettings("Zscaler", "APIClient")
        names = settings.value("graphql/presets", [], type=list)
        settings.setValue("graphql/presets", sorted(set(names + [name])))
        self._refresh_graphql_presets()
        self.graphql_preset_choice.setCurrentText(name)
        self.status_bar.showMessage(self.tr("GraphQL query saved securely"))

    def _load_graphql_query(self):
        name = self.graphql_preset_choice.currentText()
        raw = secure_get(f"graphql_preset_{name}")
        if not raw:
            QMessageBox.warning(self, self.tr("Warning"), self.tr("Saved GraphQL query is unavailable."))
            return
        payload = json.loads(raw)
        self.graphql_mode.setChecked(True)
        self.url_input.setText(payload.get("url", ""))
        self.body_input.setPlainText(payload.get("body", ""))
        self._populate_table(self.params_table, payload.get("params", {}))
        self.graphql_preset_name.setText(name)

    def _rename_graphql_query(self):
        old_name = self.graphql_preset_choice.currentText()
        new_name = self.graphql_preset_name.text().strip()
        if not old_name or not new_name or old_name == new_name:
            return
        raw = secure_get(f"graphql_preset_{old_name}")
        if not raw:
            return
        secure_store(f"graphql_preset_{new_name}", raw)
        secure_delete(f"graphql_preset_{old_name}")
        settings = QSettings("Zscaler", "APIClient")
        names = settings.value("graphql/presets", [], type=list)
        settings.setValue("graphql/presets", sorted(set((new_name if name == old_name else name) for name in names)))
        self._refresh_graphql_presets()
        self.graphql_preset_choice.setCurrentText(new_name)

    def _delete_graphql_query(self):
        name = self.graphql_preset_choice.currentText()
        if not name:
            return
        secure_delete(f"graphql_preset_{name}")
        settings = QSettings("Zscaler", "APIClient")
        settings.setValue("graphql/presets", [item for item in settings.value("graphql/presets", [], type=list) if item != name])
        self._refresh_graphql_presets()

    def _prepare_graphql_introspection(self):
        self.graphql_mode.setChecked(True)
        self._graphql_introspection_pending = True
        self.body_input.setPlainText(json.dumps({"query": "query IntrospectionQuery { __schema { queryType { name } types { name kind fields { name } } } }"}, indent=2))
        self.request_tabs.setCurrentIndex(2)
        self.status_bar.showMessage(self.tr("GraphQL introspection query prepared. Review the endpoint before sending."))

    def _graphql_schema_key(self, url: str) -> str:
        host = urllib.parse.urlsplit(url).netloc.replace(".", "_").replace(":", "_")
        return f"graphql_introspection_{host or 'default'}"

    def _save_graphql_introspection(self, url: str, payload: dict):
        secure_store(self._graphql_schema_key(url), json.dumps(payload))
        self.status_bar.showMessage(self.tr("GraphQL schema saved securely"))

    def _load_graphql_introspection(self):
        raw = secure_get(self._graphql_schema_key(self.url_input.text().strip()))
        if not raw:
            QMessageBox.information(self, self.tr("GraphQL schema"), self.tr("No saved introspection result exists for this endpoint."))
            return
        payload = json.loads(raw)
        self.response_body.setPlainText(json.dumps(redact_sensitive(payload), indent=2))
        self._show_graphql_output(payload)
        self._populate_graphql_schema_tree(payload)
        self.response_tabs.setCurrentWidget(self.graphql_schema_tree)

    def _populate_graphql_schema_tree(self, payload: dict):
        self.graphql_schema_tree.clear()
        schema = payload.get("data", {}).get("__schema", {})
        for type_info in schema.get("types", []):
            name = type_info.get("name", "")
            if not name or name.startswith("__"):
                continue
            item = QTreeWidgetItem([f"{name} ({type_info.get('kind', '')})"])
            for field in type_info.get("fields") or []:
                item.addChild(QTreeWidgetItem([field.get("name", "")]))
            self.graphql_schema_tree.addTopLevelItem(item)

    @staticmethod
    def _table_values(table: QTableWidget) -> dict:
        return {table.item(row, 0).text(): table.item(row, 1).text() for row in range(table.rowCount()) if table.item(row, 0) and table.item(row, 1) and table.item(row, 0).text()}

    @staticmethod
    def _populate_table(table: QTableWidget, values: dict):
        table.clearContents()
        for row, (key, value) in enumerate(values.items()):
            if row >= table.rowCount():
                table.insertRow(row)
            table.setItem(row, 0, QTableWidgetItem(str(key)))
            table.setItem(row, 1, QTableWidgetItem(str(value)))

    def _show_graphql_output(self, payload: dict):
        """Summarize all GraphQL result sections while keeping the complete raw body visible."""
        data = payload.get("data")
        errors = payload.get("errors", [])
        extensions = payload.get("extensions", {})
        self._show_ai_visualization(data)
        details = []
        if errors:
            details.append(self.tr("{count} GraphQL errors").format(count=len(errors)))
        if extensions:
            details.append(self.tr("extensions included"))
        if details:
            self.ai_summary.setText(self.ai_summary.text() + " · " + ", ".join(details))

    def _send_request(self):
        url = self.url_input.text().strip()
        method = self.method_combo.currentText().replace("● ", "")
        if self.graphql_mode.isChecked():
            method = "POST"
        graphql_read = self.graphql_mode.isChecked() and graphql_request_is_read_only(self.body_input.toPlainText())
        if (QSettings("Zscaler", "APIClient").value("access/role", "admin") == "readonly"
                and method in {"POST", "PUT", "PATCH", "DELETE"} and not graphql_read):
            self._log_output("Read-only role blocked a write request", "warning")
            QMessageBox.warning(self, self.tr("Read only"), self.tr("Read-only mode blocks write requests. Change the local role in Operations Center to continue."))
            return
        
        if not url:
            QMessageBox.warning(self, self.tr("Warning"), self.tr("Please enter a URL"))
            return

        # Resolve endpoint path variables before building query parameters.
        missing_variables = []
        for row in range(self.variables_table.rowCount()):
            name_item = self.variables_table.item(row, 0)
            value_item = self.variables_table.item(row, 1)
            if not name_item:
                continue
            name = name_item.text()
            value = value_item.text().strip() if value_item else ""
            if not value:
                missing_variables.append(name)
                continue
            encoded = urllib.parse.quote(value, safe="")
            url = url.replace(f":{name}", encoded).replace(f"{{{name}}}", encoded)
        if missing_variables:
            self.request_tabs.setCurrentIndex(3)
            QMessageBox.warning(
                self,
                self.tr("Missing Path Variables"),
                self.tr("Enter values for: {names}").format(names=", ".join(missing_variables)),
            )
            return
        self.url_input.setText(url)
        
        # If URL is a relative path, prepend the appropriate base URL
        self._log_output(f"URL before fix: {url[:80]}", "info")
        if url.startswith("/"):
            base = self._api_base_url()
            if not base:
                QMessageBox.warning(self, self.tr("Warning"), self.tr("Configure a base URL for the selected product before sending a relative API path."))
                return
            url = base + url
            self.url_input.setText(url)
        
        # Build headers
        headers = {}
        for row in range(self.headers_table.rowCount()):
            key_item = self.headers_table.item(row, 0)
            value_item = self.headers_table.item(row, 1)
            if key_item and value_item and key_item.text():
                headers[key_item.text()] = value_item.text()
        if self.graphql_mode.isChecked():
            headers.setdefault("Content-Type", "application/json")
        
        # Add session/token headers
        api_type = self._current_api_type()
        if api_type == "ZIA" and self.zia_session:
            headers["Cookie"] = f"JSESSIONID={self.zia_session}"
        elif api_type == "ZPA" and self.zpa_token:
            headers["Authorization"] = f"Bearer {self.zpa_token}"
        elif api_type == "ZDX" and self.zdx_token:
            headers["Authorization"] = f"Bearer {self.zdx_token}"
        elif api_type == "ZCC" and self.zcc_token:
            headers["Authorization"] = f"Bearer {self.zcc_token}"
        elif api_type == "ZIdentity" and self.zidentity_token:
            headers["Authorization"] = f"Bearer {self.zidentity_token}"
        elif api_type == "ZTW" and self.ztw_token:
            headers["Authorization"] = f"Bearer {self.ztw_token}"
        elif api_type == "ZWA" and self.zwa_token:
            headers["Authorization"] = f"Bearer {self.zwa_token}"
        elif api_type == "EASM" and self.easm_token:
            headers["Authorization"] = f"Bearer {self.easm_token}"
        elif api_type == "OneAPI" and self.oneapi_token:
            headers["Authorization"] = f"Bearer {self.oneapi_token}"
        
        # Build params
        params = {}
        for row in range(self.params_table.rowCount()):
            key_item = self.params_table.item(row, 0)
            value_item = self.params_table.item(row, 1)
            if key_item and value_item and key_item.text() and value_item.text():
                params[key_item.text()] = value_item.text()
        
        if params:
            url += "?" + urllib.parse.urlencode(params)
        
        # Get body
        body = None
        body_text = self.body_input.toPlainText().strip()
        if body_text and method in ["POST", "PUT", "PATCH"]:
            # Check if content type is form-urlencoded (used by OAuth2 endpoints)
            content_type = headers.get("Content-Type", "")
            if content_type == "application/x-www-form-urlencoded":
                # Pass form-urlencoded body as raw string
                body = body_text
            else:
                try:
                    body = json.loads(body_text)
                except json.JSONDecodeError as e:
                    QMessageBox.warning(self, self.tr("Error"), f"Invalid JSON: {e}")
                    return
        
        # Send request
        self.status_bar.showMessage(self.tr("Sending request..."))
        self.send_btn.setEnabled(False)
        
        # Log the request
        self._log_output(f"{method} {url[:60]}{'...' if len(url) > 60 else ''}")
        
        request = {
            "url": url,
            "method": method,
            "headers": headers,
            "body": body,
        }
        
        # Store request info for history
        self._pending_request = {
            "method": method,
            "url": url,
            "headers": headers,
            "body": body,
            "start_time": time.time(),
        }
        
        self.worker = ApiWorker([request])
        self.worker.finished.connect(self._on_request_finished)
        self.worker.start()
    
    def _on_request_finished(self, result: Dict):
        self.send_btn.setEnabled(True)
        
        # Calculate duration
        duration_ms = None
        if hasattr(self, "_pending_request") and self._pending_request:
            duration_ms = int((time.time() - self._pending_request["start_time"]) * 1000)
        
        if result["results"]:
            res = result["results"][0]
            status = api_result_status(res)
            response_headers = api_result_headers(res)
            
            if res["success"]:
                # Extract metadata from response
                response_data = res["data"]
                status_code = response_data.pop("_status_code", 200) if isinstance(response_data, dict) else 200
                reason = response_data.pop("_reason", "OK") if isinstance(response_data, dict) else "OK"
                resp_size = response_data.pop("_size", 0) if isinstance(response_data, dict) else 0
                response_headers = response_data.pop("_headers", {}) if isinstance(response_data, dict) else {}
                raw_text = response_data.pop("_raw_text", None) if isinstance(response_data, dict) else None
                payload = response_data.pop("_payload", response_data) if isinstance(response_data, dict) else response_data
                size_str = self._format_size(resp_size)
                safe_response_headers = {
                    key: "***" if is_sensitive_name(key) else redact_sensitive(value)
                    for key, value in response_headers.items()
                }
                self.response_headers.setPlainText(
                    "\n".join(f"{key}: {value}" for key, value in safe_response_headers.items())
                )
                
                # Color based on status code range
                if status_code < 300:
                    badge_color = "#2e7d32"
                elif status_code < 400:
                    badge_color = "#1565c0"
                elif status_code < 500:
                    badge_color = "#e65100"
                else:
                    badge_color = "#c62828"
                
                self.response_info.setText(
                    f"<span style='color: {badge_color}; font-weight: bold;'>"
                    f"{status_code} {reason}</span>"
                    f" · {duration_ms}ms · {size_str}"
                )
                
                # Get indent setting
                settings = QSettings("Zscaler", "APIClient")
                indent = settings.value("display/json_indent", "2")
                indent_val = None if indent == "Tab" else int(indent)
                
                # Keep response values available only in memory for the active
                # request flow.  The UI, visualizations and later exports must
                # never expose credential-like fields from auth or API replies.
                display_data = redact_sensitive(payload)
                if raw_text is not None:
                    self.response_body.setPlainText(redact_sensitive(raw_text))
                elif self.pretty_print_enabled:
                    self.response_body.setPlainText(json.dumps(display_data, indent=indent_val))
                else:
                    self.response_body.setPlainText(json.dumps(display_data, separators=(',', ':')))
                self._show_ai_visualization(display_data)
                self._render_response_visualization(display_data)
                if self.graphql_mode.isChecked() and isinstance(payload, dict):
                    self._show_graphql_output(display_data)
                    if getattr(self, "_graphql_introspection_pending", False):
                        self._save_graphql_introspection(self.url_input.text().strip(), display_data)
                        self._populate_graphql_schema_tree(display_data)
                        self._graphql_introspection_pending = False
                self.status_bar.showMessage(self.tr("Request successful") + f" ({duration_ms}ms · {size_str})")
                
                # Check for session token in response
                api_type = self._current_api_type()
                if isinstance(payload, dict):
                    if "authCookie" in payload:
                        self.zia_session = payload["authCookie"]
                        self.status_bar.showMessage(self.tr("ZIA authenticated successfully"))
                        self._log_output("ZIA session established", "success")
                        self._update_auth_indicators()
                    elif "access_token" in payload or "token" in payload:
                        token = payload.get("access_token") or payload.get("token")
                        # Set token for the correct API type
                        if api_type == "ZPA":
                            self.zpa_token = token
                            self.status_bar.showMessage(self.tr("ZPA authenticated successfully"))
                            self._log_output("ZPA token acquired", "success")
                        elif api_type == "ZDX":
                            self.zdx_token = token
                            self.status_bar.showMessage(self.tr("ZDX authenticated successfully"))
                            self._log_output("ZDX token acquired", "success")
                        elif api_type == "ZCC":
                            self.zcc_token = token
                            self.status_bar.showMessage(self.tr("ZCC authenticated successfully"))
                            self._log_output("ZCC token acquired", "success")
                        elif api_type == "ZIdentity":
                            self.zidentity_token = token
                            self.status_bar.showMessage(self.tr("ZIdentity authenticated successfully"))
                            self._log_output("ZIdentity token acquired", "success")
                        elif api_type == "ZTW":
                            self.ztw_token = token
                            self.status_bar.showMessage(self.tr("ZTW authenticated successfully"))
                            self._log_output("ZTW token acquired", "success")
                        elif api_type == "ZWA":
                            self.zwa_token = token
                            self.status_bar.showMessage(self.tr("ZWA authenticated successfully"))
                            self._log_output("ZWA token acquired", "success")
                        elif api_type == "EASM":
                            self.easm_token = token
                            self.status_bar.showMessage(self.tr("EASM authenticated successfully"))
                            self._log_output("EASM token acquired", "success")
                        elif api_type == "OneAPI":
                            self.oneapi_token = token
                            self.status_bar.showMessage(self.tr("OneAPI authenticated successfully"))
                            self._log_output("OneAPI token acquired (unified auth)", "success")
                        else:
                            # Default to ZPA for backwards compatibility
                            self.zpa_token = token
                            self.status_bar.showMessage(self.tr("Authenticated successfully"))
                            self._log_output("Token acquired", "success")
                        self._update_auth_indicators()
                        # Clear auth-specific headers/body so they don't leak into API requests
                        for row in range(self.headers_table.rowCount()):
                            self.headers_table.setItem(row, 0, None)
                            self.headers_table.setItem(row, 1, None)
                        self.body_input.clear()
                        self.url_input.clear()
                
                # Log success
                self._log_output(f"Response: {duration_ms}ms", "success")
            else:
                self.response_info.setText(
                    f"<span style='color: red;'>✗ {self.tr('Error')} ({duration_ms}ms)</span>"
                )
                safe_error = redact_sensitive(res["error"])
                self.response_body.setPlainText(safe_error)
                safe_response_headers = {
                    key: "***" if is_sensitive_name(key) else redact_sensitive(value)
                    for key, value in response_headers.items()
                }
                self.response_headers.setPlainText("\n".join(f"{key}: {value}" for key, value in safe_response_headers.items()))
                self.status_bar.showMessage(self.tr("Request failed"))
                self._log_output(f"Error: {safe_error[:50]}...", "error")
            
            # Save to history
            if hasattr(self, "_pending_request") and self._pending_request:
                self._add_to_history(
                    self._pending_request["method"],
                    self._pending_request["url"],
                    self._pending_request["headers"],
                    self._pending_request["body"],
                    status=status,
                    duration_ms=duration_ms,
                    response_headers=response_headers,
                )
                self._pending_request = None
    
    def _show_settings(self):
        dialog = SettingsDialog(self)
        if dialog.exec():
            self._apply_settings()
            self._update_api_list()  # Refresh API dropdown based on enabled APIs
            self._update_endpoint_tree(self.api_type.currentText())
            self._apply_main_mode()

    def _apply_main_mode(self):
        """Keep the primary command bar aligned with basic/advanced mode."""
        basic = QSettings("Zscaler", "APIClient").value("ui/mode", "basic") == "basic"
        self.change_shortcut.setVisible(not basic)
    
    def _apply_settings(self):
        """Apply settings that can be changed without restart."""
        settings = QSettings("Zscaler", "APIClient")
        
        # Apply font size
        font_size = int(settings.value("display/font_size", "11"))
        font = QFont("Menlo, Monaco, Consolas, monospace", font_size)
        self.body_input.setFont(font)
        self.response_body.setFont(font)
        
        # Apply word wrap
        word_wrap = settings.value("display/word_wrap", "false") == "true"
        if word_wrap:
            self.response_body.setLineWrapMode(QPlainTextEdit.LineWrapMode.WidgetWidth)
        else:
            self.response_body.setLineWrapMode(QPlainTextEdit.LineWrapMode.NoWrap)
        
        # Apply theme
        theme = int(settings.value("display/theme", "2"))
        apply_theme(QApplication.instance(), theme)
    
    def _show_batch(self):
        dialog = BatchDialog(self)
        if dialog.exec() and dialog.csv_data:
            self._run_batch(dialog.csv_data, dialog.operation_combo.currentData())
    
    def _run_batch(self, data: List[Dict], operation: str):
        """Run only a validated, user-confirmed plan; each row remains auditable."""
        plan = build_batch_plan(operation, data)
        if not plan["valid"]:
            details = "; ".join(f"{item['row']}: {', '.join(item['missing'])}" for item in plan["errors"])
            QMessageBox.warning(self, self.tr("Batch"), self.tr("Batch validation failed: ") + details)
            return
        if self._current_api_type() != plan["api"]:
            QMessageBox.warning(self, self.tr("Batch"), self.tr("Select {api} before running this batch.").format(api=plan["api"]))
            return
        method = BATCH_OPERATIONS[operation]["method"]
        if (QSettings("Zscaler", "APIClient").value("access/role", "admin") == "readonly"
                and method in {"POST", "PUT", "PATCH", "DELETE"}):
            QMessageBox.warning(self, self.tr("Read only"), self.tr("Read-only mode blocks write requests. Change the local role in Operations Center to continue."))
            return
        count = len(plan["requests"])
        prompt = self.tr("Review complete. Send {count} request(s) to the active environment?").format(count=count)
        if QMessageBox.question(self, self.tr("Confirm batch"), prompt,
                                QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.Cancel,
                                QMessageBox.StandardButton.Cancel) != QMessageBox.StandardButton.Yes:
            AuditTrail(QSettings("Zscaler", "APIClient")).append("batch_cancelled", {"operation": operation, "count": count})
            return
        settings = QSettings("Zscaler", "APIClient")
        api = plan["api"]
        base = {
            "ZIA": f"https://{settings.value('zia/cloud', 'zsapi.zscaler.net')}",
            "ZPA": f"https://{settings.value('zpa/cloud', 'config.private.zscaler.com')}",
        }[api]
        headers = self._batch_headers(api)
        requests = [{"url": base + item["path"], "method": item["method"],
                     "headers": dict(headers), "body": item["body"], "batch_row": item["row"]}
                    for item in plan["requests"]]
        self.status_bar.showMessage(self.tr("Sending batch request 0 of {count}...").format(count=count))
        self._log_output(self.tr("Batch execution started: {count} request(s)").format(count=count))
        AuditTrail(settings).append("batch_started", {"operation": operation, "count": count, "api": api})
        self.batch_worker = ApiWorker(requests)
        self.batch_worker.progress.connect(self._on_batch_progress)
        self.batch_worker.finished.connect(self._on_batch_finished)
        self.batch_worker.start()

    def _batch_headers(self, api: str) -> Dict[str, str]:
        """Use the active authenticated session without exposing it in the batch plan."""
        headers = {"Content-Type": "application/json"}
        if api == "ZIA" and self.zia_session:
            headers["Cookie"] = f"JSESSIONID={self.zia_session}"
        elif api == "ZPA" and self.zpa_token:
            headers["Authorization"] = f"Bearer {self.zpa_token}"
        return headers

    def _on_batch_progress(self, completed: int, total: int):
        self.status_bar.showMessage(self.tr("Sending batch request {completed} of {total}...").format(completed=completed, total=total))

    def _on_batch_finished(self, result: Dict):
        results = result.get("results", [])
        successful = sum(1 for item in results if item.get("success"))
        failed = len(results) - successful
        for item in results:
            request = item.get("request", {})
            self._add_to_history(request.get("method", ""), request.get("url", ""), request.get("headers", {}), request.get("body"), status=api_result_status(item), response_headers=api_result_headers(item))
        AuditTrail(QSettings("Zscaler", "APIClient")).append("batch_finished", {"successful": successful, "failed": failed})
        self.status_bar.showMessage(self.tr("Batch complete: {successful} succeeded, {failed} failed.").format(successful=successful, failed=failed))
        self._log_output(self.tr("Batch complete: {successful} succeeded, {failed} failed.").format(successful=successful, failed=failed), "success" if not failed else "warning")
        QMessageBox.information(self, self.tr("Batch"), self.tr("Batch complete: {successful} succeeded, {failed} failed.").format(successful=successful, failed=failed))
    
    def _show_history(self):
        dialog = HistoryDialog(self.request_history, self)
        dialog.request_selected.connect(self._load_from_history)
        dialog.exec()
        self._save_history()
    
    def _load_from_history(self, entry: Dict):
        """Load a request from history."""
        self.method_combo.setCurrentText(f"● {entry.get('method', 'GET')}")
        self.url_input.setText(entry.get("url", ""))
        
        if entry.get("body"):
            self.body_input.setPlainText(json.dumps(entry["body"], indent=2))
            self.request_tabs.setCurrentIndex(2)
        
        # Load headers
        self.headers_table.clearContents()
        for row, (key, value) in enumerate(entry.get("headers", {}).items()):
            if row < self.headers_table.rowCount():
                self.headers_table.setItem(row, 0, QTableWidgetItem(key))
                self.headers_table.setItem(row, 1, QTableWidgetItem(value))
        
        self.status_bar.showMessage(self.tr("Request loaded from history"))
    
    def _load_history(self):
        """Load request history from file."""
        history_file = Path.home() / ".zscaler-api-client" / "history.json"
        if history_file.exists():
            try:
                with open(history_file, "r", encoding="utf-8") as f:
                    self.request_history = json.load(f)
                    for entry in self.request_history:
                        entry["url"] = redact_url(entry.get("url", ""))
                        entry["headers"] = redact_sensitive(entry.get("headers", {}))
                        entry["body"] = redact_sensitive(entry.get("body"))
                # Rewrite legacy history immediately so old plaintext secrets
                # do not remain on disk after upgrading.
                with open(history_file, "w", encoding="utf-8") as f:
                    json.dump(self.request_history, f, indent=2)
            except Exception:
                self.request_history = []
    
    def _save_history(self):
        """Save request history to file."""
        settings = QSettings("Zscaler", "APIClient")
        if settings.value("advanced/save_history", "true") != "true":
            return
        
        history_dir = Path.home() / ".zscaler-api-client"
        history_dir.mkdir(exist_ok=True)
        history_file = history_dir / "history.json"
        
        # Limit history size
        limit = int(settings.value("advanced/history_limit", "100"))
        self.request_history = self.request_history[-limit:]
        
        try:
            with open(history_file, "w", encoding="utf-8") as f:
                json.dump(self.request_history, f, indent=2)
        except Exception:
            pass
    
    def _add_to_history(self, method: str, url: str, headers: Dict, body: Any,
                        status: int = None, duration_ms: int = None, response_headers: Dict | None = None):
        """Add a request to history."""
        from datetime import datetime
        
        entry = {
            "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
            "method": method,
            "url": redact_url(url),
            "headers": redact_sensitive(headers),
            "response_headers": redact_sensitive(response_headers or {}),
            "body": redact_sensitive(body),
            "status": status,
            "duration_ms": duration_ms,
        }
        self.request_history.append(entry)
        self._save_history()
    
    def _copy_as_curl(self):
        """Copy a sanitized current request as cURL command."""
        url = self.url_input.text()
        if not url:
            QMessageBox.warning(self, self.tr("Warning"), self.tr("No URL to copy"))
            return
        QApplication.clipboard().setText(self._masked_curl_command())
        self.status_bar.showMessage(self.tr("Masked cURL command copied to clipboard"))
    
    def _copy_response(self):
        """Copy a redacted response body so the clipboard never receives secrets."""
        raw = self.response_body.toPlainText()
        if raw:
            try:
                text = json.dumps(redact_sensitive(json.loads(raw)), indent=2)
            except json.JSONDecodeError:
                text = str(redact_sensitive(raw))
            QApplication.clipboard().setText(text)
            self.status_bar.showMessage(self.tr("Masked response copied to clipboard"))
        else:
            QMessageBox.warning(self, self.tr("Warning"), self.tr("No response to copy"))
    
    def _clear_request(self):
        """Clear request input and every response-derived view as one unit."""
        self.url_input.clear()
        self.body_input.clear()
        self.params_table.clearContents()
        self.headers_table.clearContents()
        self.variables_table.setRowCount(0)
        self.response_body.clear()
        self.response_headers.clear()
        self.response_info.clear()
        self.response_tree.clear()
        for table in (self.response_table, self.response_heatmap, self.ai_table):
            table.clearContents()
            table.setRowCount(0)
            table.setColumnCount(0)
        self.response_chart.set_values([])
        self.response_topology.clear()
        self.graphql_schema_tree.clear()
        self.ai_chart.set_values([])
        self.ai_preview.clear()
        self.ai_summary.setText(self.tr("Ask in plain language. Sensitive values are masked before display or export."))
        self.help_text.clear()
        self.status_bar.showMessage(self.tr("Request cleared"))
    
    def _authenticate_zia(self):
        """Authenticate to ZIA API."""
        settings = QSettings("Zscaler", "APIClient")
        cloud = settings.value("zia/cloud", "")
        api_key = secure_get("zia_api_key")
        username = settings.value("zia/username", "")
        password = secure_get("zia_password")
        
        if not all([cloud, api_key, username, password]):
            QMessageBox.warning(
                self, 
                self.tr("Missing Credentials"),
                self.tr("Please configure ZIA credentials in Settings first.")
            )
            return
        
        # Generate obfuscated API key
        import hashlib
        timestamp = str(int(time.time() * 1000))
        obf_key = self._obfuscate_api_key(api_key, timestamp)
        
        # Set up auth request
        self.api_type.setCurrentText("ZIA")
        self.method_combo.setCurrentText("● POST")
        self.url_input.setText(f"https://{cloud}/api/v1/authenticatedSession")
        self.body_input.setPlainText(json.dumps({
            "apiKey": obf_key,
            "username": username,
            "password": password,
            "timestamp": timestamp
        }, indent=2))
        self.request_tabs.setCurrentIndex(2)
        
        self.status_bar.showMessage(self.tr("ZIA auth request prepared. Click Send to authenticate."))
    
    def _obfuscate_api_key(self, api_key: str, timestamp: str) -> str:
        """Obfuscate API key for ZIA authentication."""
        high = timestamp[-6:]
        low = str(int(high) >> 1)
        
        obf = ""
        for i, char in enumerate(api_key):
            if i < len(high):
                obf += chr(ord(char) + ord(high[i]))
            elif i < len(low) + len(high):
                obf += chr(ord(char) + ord(low[i - len(high)]))
            else:
                obf += chr(ord(char) + ord(high[i - len(high) - len(low)]))
        
        return obf
    
    def _authenticate_zpa(self):
        """Authenticate to ZPA API."""
        settings = QSettings("Zscaler", "APIClient")
        cloud = settings.value("zpa/cloud", "")
        client_id = settings.value("zpa/client_id", "")
        client_secret = secure_get("zpa_client_secret")
        
        if not all([cloud, client_id, client_secret]):
            QMessageBox.warning(
                self, 
                self.tr("Missing Credentials"),
                self.tr("Please configure ZPA credentials in Settings first.")
            )
            return
        
        self.api_type.setCurrentText("ZPA")
        self.method_combo.setCurrentText("● POST")
        self.url_input.setText(f"https://{cloud}/signin")
        self.body_input.setPlainText(json.dumps({
            "client_id": client_id,
            "client_secret": client_secret
        }, indent=2))
        self.request_tabs.setCurrentIndex(2)
        
        self.status_bar.showMessage(self.tr("ZPA auth request prepared. Click Send to authenticate."))
    
    def _logout_all(self):
        """Clear all authentication sessions."""
        self._clear_sessions()
        self.status_bar.showMessage(self.tr("All sessions cleared"))

    def _clear_sessions(self, record_audit=True):
        """Remove every in-memory API session without touching keychain credentials."""
        for attribute in (
            "zia_session", "zpa_token", "zdx_token", "zcc_token", "zidentity_token",
            "ztw_token", "zwa_token", "easm_token", "oneapi_token",
        ):
            setattr(self, attribute, None)
        self._update_auth_indicators()
        if record_audit:
            AuditTrail(QSettings("Zscaler", "APIClient")).append("sessions_cleared", {})
    
    def _change_language(self):
        action = self.sender()
        lang_code = action.data()
        
        settings = QSettings("Zscaler", "APIClient")
        settings.setValue("language", lang_code)
        settings.sync()  # Force write to disk
        
        reply = QMessageBox.question(
            self,
            self.tr("Language Changed"),
            self.tr("The application needs to restart to apply the new language.\n\nRestart now?"),
            QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.No,
            QMessageBox.StandardButton.Yes
        )
        
        if reply == QMessageBox.StandardButton.Yes:
            self._restart_application()
    
    def _restart_application(self):
        """Restart the application."""
        import subprocess
        
        if getattr(sys, 'frozen', False):
            # Running as bundled app (PyInstaller)
            executable = sys.executable
            bundle_path = os.path.dirname(os.path.dirname(os.path.dirname(executable)))
            if bundle_path.endswith('.app'):
                # Use 'open' command to launch the .app properly
                subprocess.Popen(['open', '-n', bundle_path])
                QApplication.quit()
            else:
                os.execv(executable, [executable])
        else:
            # Running as script
            executable = sys.executable
            script = os.path.abspath(__file__)
            os.execv(executable, [executable, script])
    
    def _show_changelog_if_updated(self):
        """Show changelog dialog if the application was updated since last run."""
        settings = QSettings("Zscaler", "APIClient")
        last_known_version = settings.value("last_known_version", "")
        show_changelog = settings.value("show_changelog_after_update", "true") == "true"
        
        if last_known_version and last_known_version != __version__ and show_changelog:
            # Version changed - show changelog
            dialog = ChangelogDialog(self, last_known_version)
            dialog.exec()
            
            # Check if user doesn't want to see it again
            if dialog.dont_show.isChecked():
                settings.setValue("show_changelog_after_update", "false")
        
        # Update stored version
        settings.setValue("last_known_version", __version__)
    
    def _check_for_updates(self):
        """Check GitHub for newer releases with security verification."""
        self.status_bar.showMessage(self.tr("Checking for updates..."))
        QApplication.processEvents()
        
        # Security: Only trust releases from this specific repository
        TRUSTED_REPO = "yeager/zscaler-api-client"
        TRUSTED_AUTHOR = "yeager"
        GITHUB_API_URL = f"https://api.github.com/repos/{TRUSTED_REPO}/releases/latest"
        
        try:
            import ssl
            
            # Keep certificate verification on for every update request.
            ssl_context = None
            
            # Strategy 1: Try certifi (most reliable for bundled apps)
            try:
                import certifi
                ssl_context = ssl.create_default_context(cafile=certifi.where())
                ssl_context.check_hostname = True
                ssl_context.verify_mode = ssl.CERT_REQUIRED
            except Exception:
                pass
            
            # Strategy 2: Fall back to system certificates
            if ssl_context is None:
                try:
                    ssl_context = ssl.create_default_context()
                    ssl_context.check_hostname = True
                    ssl_context.verify_mode = ssl.CERT_REQUIRED
                except Exception:
                    pass
            if ssl_context is None:
                raise RuntimeError("No verified TLS context is available for update checking")
            
            request = urllib.request.Request(
                GITHUB_API_URL, 
                headers={"User-Agent": "ZscalerAPIClient", "Accept": "application/vnd.github.v3+json"}
            )
            
            with build_network_opener(QSettings("Zscaler", "APIClient"), ssl_context).open(request, timeout=10) as response:
                data = json.loads(response.read().decode("utf-8"))
            
            # Security verification
            html_url = data.get("html_url", "")
            author_login = data.get("author", {}).get("login", "")
            is_draft = data.get("draft", False)
            is_prerelease = data.get("prerelease", False)
            
            # Verify the release URL points to our trusted repository
            if not html_url.startswith(f"https://github.com/{TRUSTED_REPO}/"):
                raise ValueError(f"Security: Release URL does not match trusted repository")
            
            # Verify the author
            if author_login.lower() != TRUSTED_AUTHOR.lower():
                raise ValueError(f"Security: Release author '{author_login}' is not trusted")
            
            # Skip draft releases
            if is_draft:
                raise ValueError("Release is a draft and not yet published")
            
            latest_version = data.get("tag_name", "").lstrip("v")
            current_version = __version__
            release_name = data.get("name", f"v{latest_version}")
            
            # Version validation
            def version_tuple(v):
                try:
                    return tuple(map(int, v.split(".")))
                except (ValueError, AttributeError):
                    return (0, 0, 0)
            
            if version_tuple(latest_version) > version_tuple(current_version):
                # Build info message with security details
                prerelease_warning = self.tr("<p><i>⚠️ This is a pre-release version</i></p>") if is_prerelease else ""
                
                reply = QMessageBox.information(
                    self,
                    self.tr("Update Available"),
                    self.tr(
                        "<h3>A new version is available!</h3>"
                        "<p><b>Current version:</b> {current}</p>"
                        "<p><b>Latest version:</b> {latest}</p>"
                        "<p><b>Release:</b> {name}</p>"
                        "{prerelease}"
                        "<p style='color: #666; font-size: 11px;'>✓ Verified from github.com/{repo}</p>"
                        "<p>Would you like to open the download page?</p>"
                    ).format(
                        current=current_version, 
                        latest=latest_version,
                        name=release_name,
                        prerelease=prerelease_warning,
                        repo=TRUSTED_REPO
                    ),
                    QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.No
                )
                if reply == QMessageBox.StandardButton.Yes:
                    import webbrowser
                    # Only open verified URL
                    webbrowser.open(html_url)
                self.status_bar.showMessage(self.tr("Update available: v{version}").format(version=latest_version))
            else:
                # No popup if already on latest — only show in status bar
                self.status_bar.showMessage(self.tr("You are up to date (v{version})").format(version=current_version))
        
        except Exception as e:
            QMessageBox.warning(
                self,
                self.tr("Update Check Failed"),
                self.tr("Could not check for updates:\n{error}").format(error=str(e))
            )
            self.status_bar.showMessage(self.tr("Update check failed"))
    
    def _show_welcome(self):
        dialog = SetupWizard(self)
        dialog.exec()
    
    def _show_about(self):
        dialog = AboutDialog(self)
        dialog.exec()
    
    def _show_error_codes(self):
        dialog = ErrorCodesDialog(self)
        dialog.exec()


def is_system_dark_mode() -> bool:
    """Check if macOS is in dark mode."""
    if sys.platform == "darwin":
        try:
            import subprocess
            result = subprocess.run(
                ["defaults", "read", "-g", "AppleInterfaceStyle"],
                capture_output=True, text=True
            )
            return result.stdout.strip().lower() == "dark"
        except Exception:
            pass
    return False


def apply_theme(app: QApplication, theme: int):
    """Apply theme: 0=Light, 1=Dark, 2=System."""
    if theme == 2:  # System
        use_dark = is_system_dark_mode()
    else:
        use_dark = (theme == 1)
    
    if use_dark:
        app.setStyleSheet(DARK_STYLE + WORKSPACE_STYLE)
    else:
        app.setStyleSheet(LIGHT_STYLE + WORKSPACE_STYLE)


def main():
    # Fix for bundled macOS apps (PyInstaller/py2app)
    # Must be done BEFORE QApplication is created
    if getattr(sys, 'frozen', False):
        bundle_dir = os.path.dirname(sys.executable)
        # Set Qt plugin path for bundled app (PySide6)
        plugin_path = os.path.join(bundle_dir, '..', 'Frameworks', 'PySide6', 'Qt6', 'plugins')
        if os.path.exists(plugin_path):
            os.environ['QT_PLUGIN_PATH'] = plugin_path
        # Also try alternative locations
        alt_plugin_path = os.path.join(bundle_dir, '..', 'Resources', 'PySide6', 'Qt6', 'plugins')
        if os.path.exists(alt_plugin_path):
            os.environ['QT_PLUGIN_PATH'] = alt_plugin_path
        # Set library path for Qt
        lib_path = os.path.join(bundle_dir, '..', 'Frameworks')
        if os.path.exists(lib_path):
            os.environ['QT_QPA_PLATFORM_PLUGIN_PATH'] = os.path.join(lib_path, 'PySide6', 'Qt6', 'plugins', 'platforms')
    
    app = QApplication(sys.argv)
    app.setApplicationName("ZS API Client")
    app.setOrganizationName("Zscaler")
    
    # Load settings
    settings = QSettings("Zscaler", "APIClient")
    
    # Load translation BEFORE splash screen (so "Loading..." is translated)
    lang = resolve_language(settings.value("language", "system"))
    
    # Handle both frozen (bundled) and script modes
    if getattr(sys, 'frozen', False):
        # Bundled app - translations are in the app bundle
        base_path = Path(sys.executable).parent
        translations_dir = base_path / "translations"
        if not translations_dir.exists():
            # Try Resources folder for macOS
            translations_dir = base_path.parent / "Resources" / "translations"
    else:
        translations_dir = Path(__file__).parent / "translations"
    
    # Load Qt base translations (for standard dialogs, buttons, etc.)
    qt_translator = QTranslator()
    app_lang = "zh" if str(lang).startswith("zh") else str(lang).split("_", 1)[0]
    qt_lang = QT_LANGUAGE_CODES.get(str(lang), app_lang)
    # The application's catalogs are bundled beside the executable. Qt's own
    # catalogs are normally supplied by the installed/bundled Qt runtime, so
    # they do not need to be versioned in this project.
    qt_translation_dirs = (str(translations_dir), QLibraryInfo.path(QLibraryInfo.LibraryPath.TranslationsPath))
    if any(qt_translator.load(f"qtbase_{qt_lang}", directory) for directory in qt_translation_dirs if directory):
        app.installTranslator(qt_translator)
    
    # Load app translations
    translator = QTranslator()
    if translator.load(f"zscaler_api_client_{app_lang}", str(translations_dir)):
        app.installTranslator(translator)
    
    # Show splash screen (now with translated "Loading...")
    splash_pixmap = create_splash_pixmap()
    splash = QSplashScreen(splash_pixmap)
    splash.show()
    app.processEvents()
    
    # Apply theme
    theme = int(settings.value("display/theme", "2"))
    apply_theme(app, theme)
    
    # Small delay for splash visibility
    import time
    time.sleep(0.5)
    
    # Create main window
    window = MainWindow()
    
    # Close splash and show window
    splash.finish(window)
    window.show()
    
    # Show welcome dialog on first run or if enabled
    show_welcome = settings.value("welcome/show_on_startup", "true") == "true"
    if show_welcome:
        QTimer.singleShot(100, lambda: SetupWizard(window).exec())

    # This is deliberately delayed until after the first-run wizard, so a
    # configured automatic authentication never competes with setup input.
    QTimer.singleShot(700 if show_welcome else 150, window._apply_startup_authentication)
    
    # Show changelog if app was updated (after welcome dialog)
    QTimer.singleShot(500 if show_welcome else 100, window._show_changelog_if_updated)
    
    # Ask about auto-update on first run
    auto_update_asked = settings.value("advanced/auto_update_asked", "false") == "true"
    if not auto_update_asked:
        def ask_auto_update():
            reply = QMessageBox.question(
                window,
                window.tr("Automatic Update Check"),
                window.tr(
                    "<p>Would you like to automatically check for updates when the app starts?</p>"
                    "<p>This will connect to GitHub to check for new versions.</p>"
                ),
                QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.No,
                QMessageBox.StandardButton.Yes
            )
            settings.setValue("advanced/auto_update_asked", "true")
            if reply == QMessageBox.StandardButton.Yes:
                settings.setValue("advanced/auto_update_check", "true")
                window._check_for_updates()
            else:
                settings.setValue("advanced/auto_update_check", "false")
        QTimer.singleShot(1000 if show_welcome else 300, ask_auto_update)
    else:
        # Auto-check for updates on startup
        auto_update = settings.value("advanced/auto_update_check", "true") == "true"
        if auto_update and not show_welcome:
            QTimer.singleShot(2000, window._check_for_updates)
    
    sys.exit(app.exec())


if __name__ == "__main__":
    main()
