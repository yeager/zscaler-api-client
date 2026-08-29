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
import base64
import errno
import html
import hashlib
import io
import json
import math
import mimetypes
import os
import re
import shlex
import shutil
import socket
import subprocess
import sys
import textwrap
import time
import uuid
import urllib.request
import urllib.parse
import urllib.error
import zipfile
from dataclasses import dataclass, field
from email.utils import parsedate_to_datetime
from pathlib import Path
from typing import Optional, Dict, List, Any
from xml.sax.saxutils import escape as xml_escape

# PyInstaller's import analysis can miss project-local modules on some macOS
# runners. The build copies these modules into the bundle as a defensive
# fallback; make both normal one-folder and macOS app resource locations
# importable before importing them.
if getattr(sys, "frozen", False):
    executable_dir = Path(sys.executable).resolve().parent
    bundle_paths = (
        getattr(sys, "_MEIPASS", ""),
        str(executable_dir),
        str(executable_dir.parent / "Resources"),
    )
    for bundle_path in bundle_paths:
        if bundle_path and bundle_path not in sys.path:
            sys.path.insert(0, bundle_path)

# Use PySide6 for Qt bindings
from PySide6.QtWidgets import (
    QApplication, QMainWindow, QWidget, QVBoxLayout, QHBoxLayout,
    QSplitter, QTreeWidget, QTreeWidgetItem, QTextEdit, QLineEdit,
    QComboBox, QPushButton, QLabel, QTabWidget, QTableWidget,
    QTableWidgetItem, QHeaderView, QFileDialog, QMessageBox,
    QGroupBox, QFormLayout, QDialog, QDialogButtonBox, QProgressBar,
    QStatusBar, QMenuBar, QMenu, QToolBar, QPlainTextEdit, QSplashScreen,
    QCheckBox, QScrollArea, QFrame, QStackedWidget, QGridLayout, QSizePolicy
    , QInputDialog, QToolTip
)
from PySide6.QtCore import Qt, QThread, Signal, QSettings, QTranslator, QLocale, QTimer, QLibraryInfo, QProcess, QProcessEnvironment, QSize, QPoint
from PySide6.QtGui import QAction, QFont, QColor, QSyntaxHighlighter, QTextCharFormat, QPixmap, QPainter, QPen

try:
    import pyqtgraph as pg
except (ImportError, OSError):  # Keep source checkouts usable with the minimal Qt stack.
    pg = None
from feature_services import AuditTrail, policy_diff, response_drift, simulate_policy_trace, policy_overview, policy_twin, validate_bulk_csv, support_bundle, mask, is_sensitive_name, policy_as_code, compliance_findings, security_posture, operational_alerts, request_latency_trend, incident_evidence, soc_investigation_graph, change_control_plan, change_safety_assessment, rollback_package, verify_rollback_package, guided_playbook, smart_api_plan, security_event_export, read_only_mcp_manifest, terraform_review_handoff, exposure_access_analysis, investigation_note, PLAYBOOK_TEMPLATES, security_report_data, user_risk_report, compliance_assessment, executive_security_narrative, zdx_experience_journey, adaptive_anomalies, validate_detection_rule, evaluate_detection_rule, DETECTION_TEMPLATES, validate_request_chain, resolve_chain_templates, BATCH_OPERATIONS, build_batch_plan, environment_scope, environment_scope_metadata, obfuscate_identifiers
from evidence_signing import generate_private_key, public_key, sign_evidence, verify_evidence
from pac_services import PAC_TEMPLATE, PAC_VARIABLES, PAC_FUNCTIONS, build_guided_pac, lint_pac, pac_improvements, pac_profile_mappings, pac_variables, preview_pac_decision, substitute_pac_variables, zia_pac_payload, zcc_pac_patch
from schedule_services import register_background_schedule, unregister_background_schedule
from zscaler_config_services import CONFIG_SOURCE_URL, load_cenr_index, pac_config_references, pac_line_explanation, search_cenr
QT_BINDINGS = "PySide6"

__version__ = "2.8.9"
RESPONSE_EXCHANGE_SCHEMA = "https://github.com/yeager/zscaler-api-client/schemas/response-exchange/v1"

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
RTL_LANGUAGE_CODES = frozenset({"ar", "fa"})
AI_PROVIDER_PRESETS = (
    ("Local catalog assistant", "catalog", "", ""),
    ("OpenAI", "openai", "https://api.openai.com/v1", "gpt-4.1-mini"),
    ("Claude (Anthropic)", "anthropic", "https://api.anthropic.com/v1", "claude-sonnet-4-5"),
    ("Qwen", "qwen", "https://dashscope-intl.aliyuncs.com/compatible-mode/v1", "qwen-plus"),
    ("Kimi (Moonshot AI)", "kimi", "https://api.moonshot.ai/v1", "moonshot-v1-8k"),
    ("DeepSeek", "deepseek", "https://api.deepseek.com/v1", "deepseek-chat"),
    ("Groq", "groq", "https://api.groq.com/openai/v1", "llama-3.3-70b-versatile"),
    ("Mistral AI", "mistral", "https://api.mistral.ai/v1", "mistral-small-latest"),
    ("Ollama (local)", "ollama", "http://localhost:11434/v1", "llama3.2"),
    ("LM Studio (local)", "lmstudio", "http://localhost:1234/v1", "local-model"),
    ("Custom OpenAI-compatible", "custom", "", ""),
)


def language_layout_direction(language: str) -> Qt.LayoutDirection:
    """Return the application layout direction for a resolved locale."""
    app_language = str(language).split("_", 1)[0]
    return (
        Qt.LayoutDirection.RightToLeft
        if app_language in RTL_LANGUAGE_CODES
        else Qt.LayoutDirection.LeftToRight
    )


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


def resolve_startup_language(
    language_preference: str | None, system_locale: str | None = None,
) -> str:
    """Resolve the language preference afresh for each application launch.

    A ``system`` preference deliberately reads the OS locale at startup. This
    keeps a bundled macOS app aligned with a language changed in macOS System
    Settings between launches, while an explicit application language remains
    an override.
    """
    locale_name = QLocale.system().name() if system_locale is None else system_locale
    return resolve_language(language_preference, locale_name)


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


def _split_graphql_variable_declarations(text: str) -> list[str]:
    """Split a GraphQL variable definition list without breaking nested defaults."""
    parts: list[str] = []; start = 0; stack: list[str] = []; quote = ""; escaped = False
    pairs = {")": "(", "]": "[", "}": "{"}
    for index, char in enumerate(text):
        if quote:
            if escaped:
                escaped = False
            elif char == "\\":
                escaped = True
            elif char == quote:
                quote = ""
            continue
        if char in {'"', "'"}:
            quote = char
        elif char in "([{":
            stack.append(char)
        elif char in ")]}" and stack and stack[-1] == pairs[char]:
            stack.pop()
        elif char == "," and not stack:
            parts.append(text[start:index].strip()); start = index + 1
    tail = text[start:].strip()
    if tail:
        parts.append(tail)
    return [part for part in parts if part]


def graphql_variable_definitions(query: str, operation_name: str | None = None) -> list[dict[str, Any]]:
    """Extract typed variables for one GraphQL operation without executing the query."""
    cleaned = re.sub(r"(?m)#.*$", "", str(query or ""))
    operation = re.compile(r"\b(query|mutation|subscription)\b\s*([_A-Za-z][_0-9A-Za-z]*)?\s*(\()", re.IGNORECASE)
    candidates: list[tuple[str, str]] = []
    for match in operation.finditer(cleaned):
        depth = 1; quote = ""; escaped = False; end = None
        for index in range(match.end(), len(cleaned)):
            char = cleaned[index]
            if quote:
                if escaped:
                    escaped = False
                elif char == "\\":
                    escaped = True
                elif char == quote:
                    quote = ""
                continue
            if char in {'"', "'"}:
                quote = char
            elif char == "(":
                depth += 1
            elif char == ")":
                depth -= 1
                if depth == 0:
                    end = index; break
        if end is not None:
            candidates.append((str(match.group(2) or ""), cleaned[match.end():end]))
    if not candidates:
        return []
    if operation_name:
        selected = next((value for name, value in candidates if name == operation_name), None)
        if selected is None:
            return []
    else:
        selected = candidates[0][1]
    definitions = []
    for raw in _split_graphql_variable_declarations(selected):
        match = re.match(r"^\s*\$([_A-Za-z][_0-9A-Za-z]*)\s*:\s*([\[_A-Za-z][_0-9A-Za-z!\[\]]*)(?:\s*=\s*(.+))?\s*$", raw, re.DOTALL)
        if not match:
            continue
        type_name = match.group(2); default = match.group(3)
        definitions.append({"name": match.group(1), "type": type_name, "required": type_name.endswith("!") and default is None, "default": default})
    return definitions


def graphql_operation_names(query: str) -> list[str]:
    """Return named operations in source order for operationName validation."""
    cleaned = re.sub(r"(?m)#.*$", "", str(query or ""))
    return re.findall(r"\b(?:query|mutation|subscription)\b\s+([_A-Za-z][_0-9A-Za-z]*)", cleaned, re.IGNORECASE)


def _graphql_value_type_error(value: Any, type_name: str) -> str:
    required = type_name.endswith("!"); nullable_type = type_name[:-1] if required else type_name
    if value is None:
        return "null_not_allowed" if required else ""
    if nullable_type.startswith("[") and nullable_type.endswith("]"):
        if not isinstance(value, list):
            return "expected_list"
        inner = nullable_type[1:-1]
        return next((error for item in value if (error := _graphql_value_type_error(item, inner))), "")
    if nullable_type == "Int" and (isinstance(value, bool) or not isinstance(value, int)):
        return "expected_int"
    if nullable_type == "Float" and (isinstance(value, bool) or not isinstance(value, (int, float))):
        return "expected_float"
    if nullable_type == "Boolean" and not isinstance(value, bool):
        return "expected_boolean"
    return ""


def parse_graphql_variable_value(text: str, type_name: str) -> tuple[Any, str]:
    """Parse one variable as JSON and enforce GraphQL built-in container/scalar types."""
    raw = str(text or "").strip(); base = type_name.replace("!", "").replace("[", "").replace("]", "")
    if not raw:
        return None, "missing"
    try:
        value = json.loads(raw)
    except (TypeError, ValueError):
        if base in {"String", "ID"} or base not in {"Int", "Float", "Boolean"}:
            value = raw
        else:
            return None, "invalid_json"
    return value, _graphql_value_type_error(value, type_name)


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
WEBHOOK_CREDENTIAL_KEY = "automation_webhook_endpoint"
TENANT_SECRET_KEYS = frozenset({
    "zia_api_key", "zia_password", "zpa_client_secret", "zdx_key_secret",
    "zcc_client_secret", "zidentity_client_secret", "ztw_client_secret",
    "zwa_client_secret", "easm_client_secret", "oneapi_client_secret",
})
TENANT_SETTING_KEYS = (
    "zia/enabled", "zia/cloud", "zia/username",
    "zpa/enabled", "zpa/cloud", "zpa/client_id", "zpa/customer_id",
    "zdx/enabled", "zdx/cloud", "zdx/key_id", "zdx/api_version",
    "zcc/enabled", "zcc/cloud", "zcc/client_id",
    "zidentity/enabled", "zidentity/domain", "zidentity/client_id",
    "ztw/enabled", "ztw/cloud", "ztw/client_id",
    "zwa/enabled", "zwa/cloud", "zwa/client_id",
    "easm/enabled", "easm/cloud", "easm/client_id",
    "oneapi/enabled", "oneapi/vanity_domain", "oneapi/client_id", "oneapi/cloud", "oneapi/customer_id",
    "advanced/default_api",
)
_credential_cache: dict = {}  # Cache to avoid multiple Keychain prompts


def valid_environment_profile_id(value: Any) -> bool:
    profile_id = str(value or "")
    return profile_id == "default" or bool(re.fullmatch(r"[0-9a-f]{16,32}", profile_id))


def _valid_profile_id(value: Any) -> str:
    profile_id = str(value or "default")
    return profile_id if valid_environment_profile_id(profile_id) else "default"


def valid_environment_profile_name(value: Any) -> str:
    """Return a safe display name, rejecting settings-path separators and controls."""
    name = re.sub(r"\s+", " ", str(value or "").strip())
    if not name or len(name) > 60 or "/" in name or "\\" in name or any(ord(character) < 32 for character in name):
        return ""
    return name


def environment_profiles(settings: QSettings | None = None) -> list[dict[str, str]]:
    """Load and migrate profile metadata without ever including credentials."""
    settings = settings or QSettings("Zscaler", "APIClient")
    try:
        parsed = json.loads(str(settings.value("profiles/items", "[]") or "[]"))
    except (TypeError, ValueError):
        parsed = []
    profiles, seen = [], set()
    for item in parsed if isinstance(parsed, list) else []:
        if not isinstance(item, dict):
            continue
        if not valid_environment_profile_id(item.get("id")):
            continue
        profile_id, name = str(item["id"]), valid_environment_profile_name(item.get("name"))
        if profile_id not in seen and name:
            profiles.append({"id": profile_id, "name": name}); seen.add(profile_id)
    if "default" not in seen:
        profiles.insert(0, {"id": "default", "name": "Default"}); seen.add("default")
    # Migrate the original name-only profiles into deterministic safe IDs.
    try:
        legacy_names = json.loads(str(settings.value("profiles/names", "[]") or "[]"))
    except (TypeError, ValueError):
        legacy_names = []
    legacy_active = str(settings.value("profiles/active", "default") or "default")
    migrated_active = "default"
    for raw_name in legacy_names if isinstance(legacy_names, list) else []:
        name = valid_environment_profile_name(raw_name)
        if not name:
            continue
        profile_id = uuid.uuid5(uuid.NAMESPACE_URL, "zs-api-client-profile:" + name).hex[:16]
        if profile_id not in seen:
            profiles.append({"id": profile_id, "name": name}); seen.add(profile_id)
            for old_key, new_key in (("api", "workspace/api"), ("url", "workspace/url")):
                value = settings.value(f"profiles/{name}/{old_key}", None)
                if value is not None: settings.setValue(f"profiles/data/{profile_id}/{new_key}", value)
        if name == legacy_active:
            migrated_active = profile_id
    active_id = _valid_profile_id(settings.value("profiles/active_id", migrated_active))
    if active_id not in seen:
        active_id = "default"
    settings.setValue("profiles/items", json.dumps(profiles, ensure_ascii=False))
    settings.setValue("profiles/active_id", active_id)
    settings.setValue("profiles/active", next(item["name"] for item in profiles if item["id"] == active_id))
    settings.remove("profiles/names")
    return profiles


def active_environment_profile(settings: QSettings | None = None) -> dict[str, str]:
    settings = settings or QSettings("Zscaler", "APIClient")
    profiles = environment_profiles(settings); active_id = _valid_profile_id(settings.value("profiles/active_id", "default"))
    return next((item for item in profiles if item["id"] == active_id), profiles[0])


def environment_profile_display_name(owner: Any, profile: dict[str, str]) -> str:
    """Translate the built-in profile name without changing its stable metadata."""
    return owner.tr("Default") if profile.get("id") == "default" else str(profile.get("name") or "")


def _profile_data_key(profile_id: str, key: str) -> str:
    return f"profiles/data/{_valid_profile_id(profile_id)}/{key}"


def save_environment_profile_snapshot(settings: QSettings, profile_id: str | None = None, workspace_api: str | None = None, workspace_url: str | None = None):
    """Persist only non-secret tenant settings for one profile."""
    profile_id = _valid_profile_id(profile_id or active_environment_profile(settings)["id"])
    for key in TENANT_SETTING_KEYS:
        value = settings.value(key, None)
        if value is None: settings.remove(_profile_data_key(profile_id, "settings/" + key))
        else: settings.setValue(_profile_data_key(profile_id, "settings/" + key), value)
    if workspace_api is not None: settings.setValue(_profile_data_key(profile_id, "workspace/api"), workspace_api)
    if workspace_url is not None: settings.setValue(_profile_data_key(profile_id, "workspace/url"), redact_url(workspace_url))
    settings.setValue(_profile_data_key(profile_id, "initialized"), "true")


def activate_environment_profile_settings(settings: QSettings, profile_id: str) -> dict[str, str] | None:
    """Activate one known profile and project its non-secret settings into the app."""
    if not valid_environment_profile_id(profile_id):
        return None
    profile_id = str(profile_id); profiles = environment_profiles(settings)
    profile = next((item for item in profiles if item["id"] == profile_id), None)
    if profile is None:
        return None
    # Legacy name-only profiles stored only the workspace API and URL. Seed
    # their first snapshot from the current non-secret tenant configuration.
    if settings.value(_profile_data_key(profile_id, "initialized"), "false") != "true":
        for key in TENANT_SETTING_KEYS:
            value = settings.value(key, None)
            if value is not None:
                settings.setValue(_profile_data_key(profile_id, "settings/" + key), value)
        settings.setValue(_profile_data_key(profile_id, "initialized"), "true")
    for key in TENANT_SETTING_KEYS:
        stored = settings.value(_profile_data_key(profile_id, "settings/" + key), None)
        if stored is None: settings.remove(key)
        else: settings.setValue(key, stored)
    settings.setValue("profiles/active_id", profile_id); settings.setValue("profiles/active", profile["name"]); settings.sync()
    return {"id": profile_id, "name": profile["name"],
            "api": str(settings.value(_profile_data_key(profile_id, "workspace/api"), settings.value("advanced/default_api", "OneAPI"))),
            "url": str(settings.value(_profile_data_key(profile_id, "workspace/url"), ""))}


def create_environment_profile(settings: QSettings, name: str) -> dict[str, str] | None:
    """Clone current non-secret configuration into a new profile; secrets stay empty."""
    name = valid_environment_profile_name(name)
    if not name:
        return None
    profiles = environment_profiles(settings)
    if any(item["name"].casefold() == name.casefold() for item in profiles):
        return None
    current = active_environment_profile(settings); save_environment_profile_snapshot(settings, current["id"])
    profile_id = uuid.uuid4().hex[:16]; profile = {"id": profile_id, "name": name}; profiles.append(profile)
    source_prefix = _profile_data_key(current["id"], "")
    target_prefix = _profile_data_key(profile_id, "")
    settings.beginGroup(source_prefix)
    values = {key: settings.value(key) for key in settings.allKeys()}
    settings.endGroup()
    for key, value in values.items(): settings.setValue(target_prefix + key, value)
    settings.setValue("profiles/items", json.dumps(profiles, ensure_ascii=False)); return profile


def _tenant_credential_key(key: str, profile_id: str | None = None) -> str:
    if key not in TENANT_SECRET_KEYS:
        return key
    profile_id = _valid_profile_id(profile_id or active_environment_profile()["id"])
    return key if profile_id == "default" else f"profile:{profile_id}:{key}"
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
            r"(?i)(\b(?:authorization|proxy-?authorization|set-?cookie|cookie|password|(?:client_)?secret|(?:access|refresh)_token|token|jwt-?token|auth-?token|session-?id|j-?session-?id|x-?api-?key|api_?key)\s*[:=]\s*)(?:[\"'])?[^\r\n,;&}\]]+",
            r"\1***",
            value,
        )
        if masked != value:
            return masked
    if isinstance(value, str) and "=" in value and "://" not in value:
        pairs = urllib.parse.parse_qsl(value, keep_blank_values=True)
        if pairs:
            return urllib.parse.urlencode([
                (key, "***" if is_sensitive_name(key) else item)
                for key, item in pairs
            ], safe="*")
    return value


def redact_url(url: str) -> str:
    """Mask sensitive query-string values before persisting history."""
    parts = urllib.parse.urlsplit(url)
    query = urllib.parse.parse_qsl(parts.query, keep_blank_values=True)
    safe_query = urllib.parse.urlencode([
        (key, "***" if is_sensitive_name(key) else value)
        for key, value in query
    ], safe="*")
    # OAuth redirect URLs commonly place access tokens in the fragment.
    safe_fragment = "***" if parts.fragment else ""
    hostname = parts.hostname or ""
    if ":" in hostname and not hostname.startswith("["):
        hostname = f"[{hostname}]"
    try:
        port = parts.port
    except ValueError:
        port = None
    netloc = hostname + (f":{port}" if port else "")
    return urllib.parse.urlunsplit((parts.scheme, netloc, parts.path, safe_query, safe_fragment))


PRIVACY_CATEGORY_KEYS = {
    "users": "privacy/obfuscate_users",
    "addresses": "privacy/obfuscate_addresses",
    "hosts": "privacy/obfuscate_hosts",
    "tenants": "privacy/obfuscate_tenants",
    "ids": "privacy/obfuscate_ids",
    "labels": "privacy/obfuscate_labels",
}
_privacy_session_salt = ""


def privacy_salt(settings: QSettings | None = None) -> str:
    """Return a keychain-backed pseudonym salt without retaining a mapping."""
    global _privacy_session_salt
    settings = settings or QSettings("Zscaler", "APIClient")
    legacy = str(settings.value("privacy/pseudonym_salt", "") or "")
    salt = secure_global_get("privacy_pseudonym_salt")
    if not re.fullmatch(r"[0-9a-f]{64}", salt) and re.fullmatch(r"[0-9a-f]{64}", legacy):
        salt = legacy
        if secure_global_store("privacy_pseudonym_salt", salt):
            settings.remove("privacy/pseudonym_salt")
    elif legacy:
        settings.remove("privacy/pseudonym_salt")
    if not re.fullmatch(r"[0-9a-f]{64}", salt):
        if not re.fullmatch(r"[0-9a-f]{64}", _privacy_session_salt):
            _privacy_session_salt = uuid.uuid4().hex + uuid.uuid4().hex
        salt = _privacy_session_salt
        if secure_global_store("privacy_pseudonym_salt", salt):
            _privacy_session_salt = ""
    return salt


def rotate_privacy_salt(settings: QSettings | None = None) -> str:
    """Break correlation with previous pseudonyms without retaining old mappings."""
    global _privacy_session_salt
    settings = settings or QSettings("Zscaler", "APIClient")
    salt = uuid.uuid4().hex + uuid.uuid4().hex
    settings.remove("privacy/pseudonym_salt")
    _privacy_session_salt = "" if secure_global_store("privacy_pseudonym_salt", salt) else salt
    return salt


def privacy_safe(value: Any, settings: QSettings | None = None, target: str = "export") -> Any:
    """Always mask secrets and apply configured identifier pseudonymization."""
    settings = settings or QSettings("Zscaler", "APIClient")
    safe = redact_sensitive(value)
    mode = str(settings.value("privacy/mode", "external") or "external")
    if mode not in {"off", "external", "everywhere"}:
        mode = "external"
    if mode == "off" or (target == "display" and mode != "everywhere"):
        return safe
    categories = {name: settings.value(key, "true") == "true" for name, key in PRIVACY_CATEGORY_KEYS.items()}
    return obfuscate_identifiers(safe, privacy_salt(settings), categories)


def load_masked_response_exchange(path: str | Path, maximum_bytes: int) -> tuple[dict[str, Any] | None, str]:
    """Validate and re-mask a local exchange without restoring any executable state."""
    candidate = Path(path)
    try:
        if not candidate.is_file() or candidate.is_symlink() or candidate.stat().st_size > max(1, maximum_bytes):
            return None, "unavailable"
        document = json.loads(candidate.read_text(encoding="utf-8"))
    except (OSError, UnicodeError, json.JSONDecodeError, RecursionError):
        return None, "invalid_json"
    if not isinstance(document, dict) or document.get("schema") != RESPONSE_EXCHANGE_SCHEMA:
        return None, "unsupported"
    request, response = document.get("request", {}), document.get("response")
    try:
        valid = (isinstance(request, dict) and isinstance(request.get("headers", {}), dict)
                 and isinstance(response, dict) and isinstance(response.get("headers", {}), dict)
                 and "body" in response)
        status_value = int(response.get("status", 0) or 0) if valid else -1
        size_value = int(response.get("size_bytes", 0) or 0) if valid else -1
        duration_value = int(response.get("duration_ms", 0) or 0) if valid else -1
    except (TypeError, ValueError):
        valid = False
    if not valid or not 0 <= status_value <= 999 or size_value < 0 or duration_value < 0:
        return None, "incomplete"
    safe_document = redact_sensitive(document)
    safe_request = safe_document.get("request", {})
    if isinstance(safe_request, dict) and safe_request.get("url"):
        safe_request["url"] = redact_url(str(safe_request["url"]))
    return safe_document, ""


def response_exchange_error_message(owner: Any, code: str) -> str:
    """Translate stable exchange validation codes in any Qt dialog/window."""
    messages = {
        "unavailable": owner.tr("The response export is unavailable, is a symbolic link, or exceeds the configured transfer limit."),
        "invalid_json": owner.tr("The response export is not valid UTF-8 JSON."),
        "unsupported": owner.tr("This is not a supported ZS API response exchange file."),
        "incomplete": owner.tr("The response exchange file is incomplete."),
    }
    return messages.get(code, owner.tr("The response exchange file could not be opened."))


def response_cookie(headers: Dict | None, name: str) -> str:
    """Extract one response cookie without retaining attributes or other cookies."""
    wanted = str(name or "").lower()
    for key, value in (headers or {}).items():
        if str(key).lower() != "set-cookie":
            continue
        for cookie in re.split(r",(?=\s*[^;,=\s]+=)", str(value)):
            first = cookie.split(";", 1)[0].strip()
            if "=" in first:
                cookie_name, cookie_value = first.split("=", 1)
                if cookie_name.strip().lower() == wanted:
                    return cookie_value.strip()
    return ""


def http_header_value(headers: Dict | None, name: str) -> str:
    """Read an HTTP header case-insensitively."""
    wanted = str(name or "").lower()
    return next((str(value) for key, value in (headers or {}).items() if str(key).lower() == wanted), "")


def set_http_header(headers: Dict, name: str, value: str):
    """Set one HTTP header without leaving differently-cased duplicates."""
    for key in list(headers):
        if str(key).lower() == name.lower():
            headers.pop(key)
    headers[name] = value


def is_authentication_request(api_type: str, url: str, method: str = "POST") -> bool:
    """Recognize only documented authentication requests before accepting returned tokens."""
    if str(method).upper() != "POST":
        return False
    path = urllib.parse.urlsplit(str(url or "")).path.rstrip("/").lower()
    exact = {
        "ZIA": ("/api/v1/authenticatedsession",),
        "ZPA": ("/signin",),
        "ZCC": ("/papi/auth/v1/login",),
        "OneAPI": ("/oauth2/v1/token",),
        "ZIdentity": ("/oauth2/v1/token",),
        "ZTW": ("/oauth/token",),
        "ZWA": ("/oauth/token",),
        "EASM": ("/oauth/token",),
    }
    if api_type == "ZDX":
        return bool(re.search(r"/v[12]/oauth/token$", path))
    return any(path.endswith(candidate) for candidate in exact.get(api_type, ()))


def is_textual_response(content_type: str, data: bytes) -> bool:
    """Classify a response without corrupting binary downloads through UTF-8 replacement."""
    media_type = str(content_type or "").split(";", 1)[0].strip().lower()
    if media_type.startswith("text/") or any(marker in media_type for marker in (
        "json", "xml", "yaml", "csv", "javascript", "graphql", "problem+",
    )):
        return True
    if media_type and media_type not in {"application/octet-stream"}:
        return False
    if b"\x00" in data[:4096]:
        return False
    try:
        data[:4096].decode("utf-8")
        return True
    except UnicodeDecodeError:
        return False


def safe_download_filename(headers: Dict | None, url: str, content_type: str = "") -> str:
    """Derive a traversal-safe filename from Content-Disposition or the response URL."""
    disposition = http_header_value(headers, "Content-Disposition")
    name = ""
    extended = re.search(r"filename\*\s*=\s*(?:UTF-8'')?([^;]+)", disposition, re.IGNORECASE)
    regular = re.search(r'filename\s*=\s*(?:"([^"]+)"|([^;]+))', disposition, re.IGNORECASE)
    if extended:
        name = urllib.parse.unquote(extended.group(1).strip().strip('"'))
    elif regular:
        name = (regular.group(1) or regular.group(2) or "").strip()
    if not name:
        name = urllib.parse.unquote(Path(urllib.parse.urlsplit(str(url or "")).path).name)
    name = Path(name.replace("\\", "/")).name
    name = re.sub(r"[\x00-\x1f\x7f/:*?\"<>|]", "_", name).strip(" .")[:180]
    if not name:
        extension = mimetypes.guess_extension(str(content_type or "").split(";", 1)[0].strip()) or ".bin"
        name = "response" + extension
    return name


def encode_multipart_body(spec: Dict, maximum_bytes: int) -> tuple[bytes, str]:
    """Encode one explicitly selected file and scalar/JSON metadata as multipart form data."""
    file_path = Path(str(spec.get("file_path") or "")).expanduser()
    if not file_path.is_file():
        raise ValueError("Selected upload file is unavailable")
    file_size = file_path.stat().st_size
    if file_size > maximum_bytes:
        raise ValueError("Selected upload file exceeds the configured transfer limit")
    file_field = str(spec.get("file_field") or "file").strip()
    if not file_field or any(character in file_field for character in '\r\n"'):
        raise ValueError("Multipart file field name is invalid")
    fields = spec.get("fields") or {}
    if not isinstance(fields, dict):
        raise ValueError("Multipart fields must be a JSON object")
    boundary = "----ZSAPIClient" + uuid.uuid4().hex
    chunks: list[bytes] = []
    for key, value in fields.items():
        field_name = str(key)
        if not field_name or any(character in field_name for character in '\r\n"'):
            raise ValueError("Multipart field name is invalid")
        rendered = value if isinstance(value, str) else json.dumps(value, ensure_ascii=False, separators=(",", ":"))
        chunks.extend([
            f"--{boundary}\r\nContent-Disposition: form-data; name=\"{field_name}\"\r\n\r\n".encode(),
            str(rendered).encode("utf-8"), b"\r\n",
        ])
    filename = safe_download_filename({}, file_path.name)
    media_type = mimetypes.guess_type(filename)[0] or "application/octet-stream"
    chunks.extend([
        f"--{boundary}\r\nContent-Disposition: form-data; name=\"{file_field}\"; filename=\"{filename}\"\r\nContent-Type: {media_type}\r\n\r\n".encode(),
        file_path.read_bytes(), b"\r\n", f"--{boundary}--\r\n".encode(),
    ])
    data = b"".join(chunks)
    if len(data) > maximum_bytes:
        raise ValueError("Multipart request exceeds the configured transfer limit")
    return data, f"multipart/form-data; boundary={boundary}"


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
        return True
    loaded: dict[str, str] = {}
    try:
        import keyring
        blob = keyring.get_password(SERVICE_NAME, "_all_credentials")
        if blob:
            document = json.loads(blob)
            if not isinstance(document, dict) or not all(isinstance(key, str) and isinstance(value, str) for key, value in document.items()):
                return False
            loaded.update(document)
        else:
            # Migrate from individual keychain entries (one-time)
            keys = ["zia_api_key", "zia_password", "zpa_client_secret",
                    "zdx_key_secret", "zcc_client_secret", "zidentity_client_secret",
                    "ztw_client_secret", "zwa_client_secret", "easm_client_secret",
                    "oneapi_client_secret", "proxy_password"]
            for k in keys:
                v = keyring.get_password(SERVICE_NAME, k)
                if v:
                    loaded[k] = v
    except Exception:
        return False
    _credential_cache.update(loaded)
    _credentials_loaded = True
    if loaded and not blob:
        _save_all_credentials()
    return True

def _save_all_credentials() -> bool:
    """Save all credentials to a single keychain entry (one prompt)."""
    try:
        import keyring
        blob = json.dumps({k: v for k, v in _credential_cache.items() if v})
        keyring.set_password(SERVICE_NAME, "_all_credentials", blob)
        return True
    except Exception:
        return False


def secure_store_many(values: dict[str, str]) -> bool:
    """Atomically update multiple secrets, rolling back memory if keychain fails."""
    global _credential_cache
    if not _load_all_credentials():
        return False
    previous = dict(_credential_cache)
    for key, value in values.items():
        key = _tenant_credential_key(key)
        if not value:
            _credential_cache.pop(key, None)
        else:
            _credential_cache[key] = value
    if _credential_cache == previous:
        return True
    if _save_all_credentials():
        return True
    _credential_cache.clear()
    _credential_cache.update(previous)
    return False

def secure_store(key: str, value: str) -> bool:
    """Store credential securely in system keychain."""
    return secure_store_many({key: value})

def secure_get(key: str) -> str:
    """Retrieve credential from system keychain (single keychain access)."""
    if not _load_all_credentials():
        return ""
    return _credential_cache.get(_tenant_credential_key(key), "")

def secure_global_get(key: str) -> str:
    """Retrieve an app-wide protected value without tenant namespacing."""
    if not _load_all_credentials():
        return ""
    return _credential_cache.get(key, "")

def secure_global_store(key: str, value: str) -> bool:
    """Store an app-wide protected value in the system keychain."""
    global _credential_cache
    if not _load_all_credentials():
        return False
    previous = dict(_credential_cache)
    if value:
        _credential_cache[key] = value
    else:
        _credential_cache.pop(key, None)
    if _save_all_credentials():
        return True
    _credential_cache.clear(); _credential_cache.update(previous)
    return False

def secure_delete(key: str) -> bool:
    """Delete credential from system keychain."""
    return secure_store(key, "")


def delete_environment_profile(settings: QSettings, profile_id: str) -> bool:
    """Delete an inactive non-default profile and its namespaced keychain secrets."""
    global _credential_cache
    if not valid_environment_profile_id(profile_id):
        return False
    profile_id = str(profile_id); profiles = environment_profiles(settings)
    if profile_id == "default" or profile_id == active_environment_profile(settings)["id"] or not any(item["id"] == profile_id for item in profiles):
        return False
    if not _load_all_credentials():
        return False
    previous = dict(_credential_cache)
    for key in TENANT_SECRET_KEYS: _credential_cache.pop(_tenant_credential_key(key, profile_id), None)
    if _credential_cache != previous and not _save_all_credentials():
        _credential_cache.clear(); _credential_cache.update(previous); return False
    settings.remove(_profile_data_key(profile_id, "")); settings.setValue("profiles/items", json.dumps([item for item in profiles if item["id"] != profile_id], ensure_ascii=False))
    return True


def rename_environment_profile(settings: QSettings, profile_id: str, name: str) -> bool:
    if not valid_environment_profile_id(profile_id):
        return False
    name = valid_environment_profile_name(name); profiles = environment_profiles(settings); profile_id = str(profile_id)
    if not name or any(item["name"].casefold() == name.casefold() and item["id"] != profile_id for item in profiles):
        return False
    profile = next((item for item in profiles if item["id"] == profile_id), None)
    if profile is None:
        return False
    profile["name"] = name; settings.setValue("profiles/items", json.dumps(profiles, ensure_ascii=False))
    if active_environment_profile(settings)["id"] == profile_id: settings.setValue("profiles/active", name)
    return True


def environment_profile_secret_count(profile_id: str) -> int:
    """Return only a count for UI status; credential values never leave the cache."""
    if not _load_all_credentials():
        return 0
    return sum(1 for key in TENANT_SECRET_KEYS if _credential_cache.get(_tenant_credential_key(key, profile_id)))


def secure_webhook_endpoint(settings: QSettings, migrate_legacy: bool = True) -> str:
    """Read the webhook endpoint from keychain and remove legacy plaintext storage."""
    endpoint = str(secure_get(WEBHOOK_CREDENTIAL_KEY) or "").strip()
    legacy = str(settings.value("automation/webhook_url", "") or "").strip()
    if endpoint:
        if legacy:
            settings.remove("automation/webhook_url")
        return endpoint
    if migrate_legacy and legacy:
        if validate_webhook_endpoint(legacy)[0] is not None:
            settings.remove("automation/webhook_url")
            return legacy if secure_store(WEBHOOK_CREDENTIAL_KEY, legacy) else ""
        # Never keep a rejected endpoint (which may contain credentials) in plaintext.
        settings.remove("automation/webhook_url")
    return ""


def application_invocation() -> list[str]:
    """Return a stable argv prefix for this source or packaged application."""
    if getattr(sys, "frozen", False):
        return [str(Path(sys.executable).resolve())]
    return [str(Path(sys.executable).resolve()), str(Path(__file__).resolve())]


def persisted_request_history() -> list[dict[str, Any]]:
    """Load the already-redacted local history for headless report generation."""
    path = Path.home() / ".zscaler-api-client" / "history.json"
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, TypeError, ValueError):
        return []
    if not isinstance(data, list):
        return []
    return [redact_sensitive(item) for item in data if isinstance(item, dict)]


def stored_report_schedules(settings: QSettings) -> list[dict[str, Any]]:
    """Return only persisted report schedule objects."""
    try:
        schedules = json.loads(str(settings.value("automation/schedules", "[]")))
    except (TypeError, ValueError):
        return []
    valid = [item for item in schedules if isinstance(item, dict)] if isinstance(schedules, list) else []
    changed = False
    for item in valid:
        if not re.fullmatch(r"[A-Za-z0-9_-]{1,64}", str(item.get("id", ""))):
            item["id"] = uuid.uuid4().hex; changed = True
        scope_id = str(item.get("environment_id") or "default")
        if scope_id != "*" and not valid_environment_profile_id(scope_id):
            scope_id = "default"
        scope_name = str(item.get("environment") or ("All environments" if scope_id == "*" else "Default"))[:60]
        if item.get("environment_id") != scope_id or item.get("environment") != scope_name:
            item["environment_id"], item["environment"] = scope_id, scope_name; changed = True
    if changed:
        settings.setValue("automation/schedules", json.dumps(valid))
    return valid


def scheduled_report_filename(name: str, timestamp: int) -> str:
    """Create a traversal-safe, portable report filename."""
    stem = re.sub(r"[^A-Za-z0-9._-]+", "-", str(name).strip()).strip(".-") or "security-report"
    return f"{stem[:80]}-{time.strftime('%Y%m%d-%H%M%S', time.gmtime(timestamp))}.json"


def write_new_report(directory: Path, filename: str, content: str) -> Path:
    """Create a report without overwriting an existing file."""
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


def run_report_schedules(
    settings: QSettings,
    history: list[dict[str, Any]],
    *,
    now: int | None = None,
    selected_index: int | None = None,
    selected_id: str | None = None,
) -> list[str]:
    """Generate due local reports; background jobs can target one stable ID."""
    now = int(time.time() if now is None else now)
    schedules = stored_report_schedules(settings)
    if not schedules:
        return []
    trail = AuditTrail(settings); generated: list[str] = []; changed = False
    for index, schedule in enumerate(schedules):
        by_index = selected_index is not None and index == selected_index
        by_id = selected_id is not None and str(schedule.get("id", "")) == selected_id
        if selected_index is not None and not by_index:
            continue
        if selected_id is not None and not by_id:
            continue
        if selected_id is not None and not schedule.get("enabled", True):
            continue
        if selected_index is None and selected_id is None and schedule.get("background", False):
            continue
        try:
            next_run = int(schedule.get("next_run", now + 1))
        except (TypeError, ValueError):
            next_run = now
        if not by_index and not by_id and (not schedule.get("enabled", True) or next_run > now):
            continue
        try:
            cadence = max(3600, int(schedule.get("cadence_seconds", 86400)))
        except (TypeError, ValueError):
            cadence = 86400
        schedule["next_run"] = now + cadence; schedule["last_run"] = now; changed = True
        scope = environment_scope_metadata(str(schedule.get("environment_id") or "default"), str(schedule.get("environment") or "Default"))
        schedule_trail = AuditTrail(settings, environment_id=scope["environment_id"], environment_name=scope["environment"])
        raw_output_dir = str(schedule.get("output_dir", "")).strip(); output_dir = Path(raw_output_dir).expanduser()
        if not raw_output_dir or not output_dir.is_absolute() or not output_dir.is_dir():
            schedule_trail.append("scheduled_report_failed", {"id": str(schedule.get("id", "")), "name": str(schedule.get("name", "")), "reason": "output_directory_unavailable"})
            continue
        try:
            kind = str(schedule.get("kind", "ciso"))
            if kind not in {"ciso", "soc", "operations"}:
                kind = "ciso"
            data = security_report_data(kind, environment_scope(history, scope["environment_id"]), environment_scope(trail.events(), scope["environment_id"]), trail.verify(), scope)
            content = json.dumps(privacy_safe(data, settings, "export"), indent=2, ensure_ascii=False) + "\n"
            destination = write_new_report(output_dir, scheduled_report_filename(schedule.get("name", "security-report"), now), content)
            generated.append(str(destination))
            schedule_trail.append("scheduled_report_generated", {"id": str(schedule.get("id", "")), "name": str(schedule.get("name", "")), "kind": kind, "file": destination.name, "background": bool(selected_id)})
        except (OSError, TypeError, ValueError) as error:
            schedule_trail.append("scheduled_report_failed", {"id": str(schedule.get("id", "")), "name": str(schedule.get("name", "")), "reason": type(error).__name__})
    if changed:
        settings.setValue("automation/schedules", json.dumps(schedules))
    return generated

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


class VisualAssetLabel(QLabel):
    """Responsive bundled artwork that degrades cleanly when an asset is absent."""
    def __init__(self, relative_path: str, height: int, *, crop: bool = False, parent=None):
        super().__init__(parent)
        self._source = QPixmap(str(_resource_path(relative_path)))
        self._crop = crop
        self._render_size = None
        self._rendering = False
        self.setFixedHeight(height)
        self.setSizePolicy(QSizePolicy.Policy.Expanding, QSizePolicy.Policy.Fixed)
        self.setAlignment(Qt.AlignmentFlag.AlignCenter)
        self.setStyleSheet("background: transparent; border: none;")
        self.setVisible(not self._source.isNull())

    def sizeHint(self):
        """Never let the source artwork dictate a dialog's width."""
        return QSize(640, self.height())

    def minimumSizeHint(self):
        return QSize(0, self.height())

    def resizeEvent(self, event):
        super().resizeEvent(event)
        size = self.size()
        if self._rendering or self._source.isNull() or size.width() <= 0 or size.height() <= 0 or size == self._render_size:
            return
        self._rendering = True
        try:
            mode = Qt.AspectRatioMode.KeepAspectRatioByExpanding if self._crop else Qt.AspectRatioMode.KeepAspectRatio
            scaled = self._source.scaled(size, mode, Qt.TransformationMode.SmoothTransformation)
            if self._crop and (scaled.width() > size.width() or scaled.height() > size.height()):
                left = max(0, (scaled.width() - size.width()) // 2)
                top = max(0, (scaled.height() - size.height()) // 2)
                scaled = scaled.copy(left, top, min(size.width(), scaled.width()), min(size.height(), scaled.height()))
            self.setPixmap(scaled)
            self._render_size = size
        finally:
            self._rendering = False


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


def _automation_entry_details(entry: Dict[str, Any]) -> Dict[str, Any]:
    """Convert one bundled Automation Hub operation into request-editor data."""
    details = {
        "method": entry["method"],
        "path": urllib.parse.urlsplit(entry["url"]).path,
        "absolute_url": entry["url"],
        "description": entry.get("description", ""),
        "doc_url": entry.get("doc_url", ""),
        "parameters": entry.get("parameters", []),
        "response_codes": entry.get("response_codes", []),
        "request_content_type": entry.get("request_content_type", ""),
        "documentation_updated_at": entry.get("documentation_updated_at", ""),
        "pagination": entry.get("pagination"),
    }
    if "request_body" in entry:
        details["body"] = entry["request_body"]
    return details


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
        details = _automation_entry_details(entry)
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


class ApiRequestCancelled(Exception):
    """Internal control flow for a user-cancelled retry wait."""


IDEMPOTENT_READ_METHODS = frozenset({"GET", "HEAD", "OPTIONS"})
TRANSIENT_READ_STATUS_CODES = frozenset({408, 429, 502, 503, 504})


def retry_after_seconds(headers: Dict | None, retry_number: int, maximum_wait: int, now: float | None = None) -> int:
    """Return a bounded Retry-After delay, falling back to exponential backoff."""
    maximum = max(0, min(300, int(maximum_wait)))
    fallback = min(maximum, 2 ** max(0, int(retry_number) - 1))
    raw = http_header_value(headers, "Retry-After").strip()
    if not raw:
        return fallback
    try:
        delay = int(raw)
    except ValueError:
        try:
            delay = int(max(0, parsedate_to_datetime(raw).timestamp() - (time.time() if now is None else now)))
        except (TypeError, ValueError, OverflowError):
            return fallback
    return max(0, min(maximum, delay))


def is_transient_url_error(error: urllib.error.URLError) -> bool:
    """Distinguish retryable connectivity failures from certificate/configuration errors."""
    reason = getattr(error, "reason", None)
    if reason.__class__.__name__ in {"SSLCertVerificationError", "CertificateError"}:
        return False
    if isinstance(reason, socket.gaierror):
        return reason.errno == getattr(socket, "EAI_AGAIN", -3)
    if isinstance(reason, (TimeoutError, ConnectionError, socket.timeout)):
        return True
    if isinstance(reason, OSError):
        return reason.errno in {
            errno.ECONNABORTED, errno.ECONNREFUSED, errno.ECONNRESET,
            errno.EHOSTUNREACH, errno.ENETDOWN, errno.ENETUNREACH, errno.ETIMEDOUT,
        }
    return False


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


def url_with_query_value(url: str, name: str, value: Any) -> str:
    """Replace one query parameter while preserving all unrelated values."""
    parts = urllib.parse.urlsplit(url)
    pairs = [(key, item) for key, item in urllib.parse.parse_qsl(parts.query, keep_blank_values=True) if key != name]
    pairs.append((name, str(value)))
    return urllib.parse.urlunsplit((parts.scheme, parts.netloc, parts.path, urllib.parse.urlencode(pairs), parts.fragment))


def paginated_records(payload: Any) -> tuple[list | None, str]:
    """Return a documented API page's primary collection without discarding its envelope."""
    if isinstance(payload, list):
        return payload, "items"
    if not isinstance(payload, dict):
        return None, ""
    for name in ("items", "results", "data", "records", "resources", "content", "list"):
        if isinstance(payload.get(name), list):
            return payload[name], name
    lists = [(str(name), value) for name, value in payload.items() if isinstance(value, list) and not str(name).startswith("_")]
    return (lists[0][1], lists[0][0]) if len(lists) == 1 else (None, "")


def nested_response_value(payload: Any, name: str, maximum_depth: int = 3) -> Any:
    """Find an exact response-envelope field within a shallow metadata hierarchy."""
    if not isinstance(payload, dict) or maximum_depth < 0:
        return None
    if name in payload:
        return payload[name]
    for key in ("pagination", "page", "meta", "metadata", "links"):
        if isinstance(payload.get(key), dict):
            found = nested_response_value(payload[key], name, maximum_depth - 1)
            if found is not None:
                return found
    return None


class ApiWorker(QThread):
    """Worker thread for API requests."""
    finished = Signal(dict)
    progress = Signal(int, int)
    retrying = Signal(int, int, int)
    
    def __init__(self, requests: List[Dict], stop_on_failure: bool = False):
        super().__init__()
        self.requests = requests
        self.stop_on_failure = stop_on_failure
    
    def run(self):
        results = []
        total = len(self.requests)
        
        stopped_early = False
        cancelled = False
        for i, req in enumerate(self.requests):
            if self.isInterruptionRequested():
                cancelled = True; stopped_early = i < total; break
            try:
                result = self._make_request(req)
                results.append({"success": True, "data": result, "request": req})
            except ApiRequestCancelled:
                cancelled = True; stopped_early = i < total; break
            except ApiRequestError as error:
                results.append({"success": False, "error": str(error), "status_code": error.status_code, "response_headers": error.response_headers, "request": req})
            except Exception as error:
                results.append({"success": False, "error": str(error), "status_code": 0, "request": req})
            
            self.progress.emit(i + 1, total)
            if not results[-1]["success"] and self.stop_on_failure:
                stopped_early = i + 1 < total
                break
            time.sleep(0.1)  # Rate limiting
        
        self.finished.emit({"results": results, "stopped_early": stopped_early, "cancelled": cancelled})
    
    def _retry_policy(self, req: Dict) -> tuple[int, int]:
        """Read the bounded retry policy; mutating requests always return zero retries."""
        if str(req.get("method", "GET")).upper() not in IDEMPOTENT_READ_METHODS:
            return 0, 0
        settings = QSettings("Zscaler", "APIClient")
        if settings.value("advanced/retry_reads", "true") != "true":
            return 0, 0
        try:
            retries = max(0, min(5, int(settings.value("advanced/max_read_retries", "2"))))
            maximum_wait = max(0, min(300, int(settings.value("advanced/retry_max_wait", "60"))))
        except (TypeError, ValueError):
            retries, maximum_wait = 2, 60
        return retries, maximum_wait

    def _wait_for_retry(self, seconds: int) -> bool:
        """Wait cooperatively so Cancel remains effective during server backoff."""
        deadline = time.monotonic() + max(0, seconds)
        while time.monotonic() < deadline:
            if self.isInterruptionRequested():
                return False
            time.sleep(min(0.1, max(0, deadline - time.monotonic())))
        return not self.isInterruptionRequested()

    def _make_request(self, req: Dict) -> Dict:
        """Retry transient failures only for safe read methods."""
        retries, maximum_wait = self._retry_policy(req)
        for retry_number in range(retries + 1):
            try:
                result = self._make_request_once(req)
                if retry_number and isinstance(result, dict):
                    result["_retry_count"] = retry_number
                return result
            except ApiRequestError as error:
                if retry_number >= retries or error.status_code not in TRANSIENT_READ_STATUS_CODES:
                    raise
                delay = retry_after_seconds(error.response_headers, retry_number + 1, maximum_wait)
            except urllib.error.URLError as error:
                if retry_number >= retries or not is_transient_url_error(error):
                    raise
                delay = retry_after_seconds({}, retry_number + 1, maximum_wait)
            self.retrying.emit(retry_number + 1, retries, delay)
            if not self._wait_for_retry(delay):
                raise ApiRequestCancelled()
        raise RuntimeError("Unreachable retry state")

    def _make_request_once(self, req: Dict) -> Dict:
        url = req["url"]
        method = req.get("method", "GET")
        headers = dict(req.get("headers", {}))
        body = req.get("body")
        body_mode = str(req.get("body_mode") or "json")

        settings = QSettings("Zscaler", "APIClient")
        try:
            maximum_bytes = max(1, min(1024, int(settings.value("advanced/max_transfer_mb", "100")))) * 1024 * 1024
        except (TypeError, ValueError):
            maximum_bytes = 100 * 1024 * 1024
        data = None
        if body is not None:
            content_type = http_header_value(headers, "Content-Type").split(";", 1)[0].strip().lower()
            if body_mode == "multipart":
                if not isinstance(body, dict) or not isinstance(body.get("_multipart"), dict):
                    raise ValueError("Multipart request descriptor is invalid")
                data, multipart_type = encode_multipart_body(body["_multipart"], maximum_bytes)
                set_http_header(headers, "Content-Type", multipart_type)
            elif body_mode == "raw" or (isinstance(body, str) and content_type not in {"", "application/json"}):
                data = body if isinstance(body, bytes) else str(body).encode("utf-8")
                if not content_type:
                    set_http_header(headers, "Content-Type", "text/plain; charset=utf-8")
            elif content_type == "application/x-www-form-urlencoded" and isinstance(body, str):
                data = body.encode("utf-8")
            else:
                data = json.dumps(body).encode("utf-8")
                if not content_type:
                    set_http_header(headers, "Content-Type", "application/json")
            if len(data) > maximum_bytes:
                raise ValueError("Request body exceeds the configured transfer limit")
        
        request = urllib.request.Request(url, data=data, headers=headers, method=method)
        
        # Build SSL context based on settings
        import ssl
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
                response_data = response.read(maximum_bytes + 1)
                if len(response_data) > maximum_bytes:
                    raise ApiRequestError(0, "Response exceeds the configured transfer limit", dict(response.headers.items()))
                response_size = len(response_data)
                status_code = response.status
                reason = response.reason
                response_headers = dict(response.headers.items())
                content_type = http_header_value(response_headers, "Content-Type")
                if not response_data:
                    return {"_status_code": status_code, "_reason": reason,
                            "_size": response_size, "_headers": response_headers,
                            "status": "success", "message": "Empty response (operation may have succeeded)"}
                if not is_textual_response(content_type, response_data):
                    return {
                        "_status_code": status_code, "_reason": reason, "_size": response_size,
                        "_headers": response_headers, "_content_type": content_type or "application/octet-stream",
                        "_download_filename": safe_download_filename(response_headers, url, content_type),
                        "_binary_base64": base64.b64encode(response_data).decode("ascii"),
                    }
                response_text = response_data.decode("utf-8", errors="replace")
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
                error_bytes = e.read(maximum_bytes + 1)
                if len(error_bytes) > maximum_bytes:
                    error_bytes = error_bytes[:maximum_bytes]
                    error_body = error_bytes.decode("utf-8", errors="replace") + "\n[error body truncated at transfer limit]"
                else:
                    error_body = error_bytes.decode("utf-8", errors="replace")
            except Exception:
                pass
            raise ApiRequestError(e.code, f"HTTP {e.code}: {e.reason}\n{error_body}", dict(e.headers.items()) if e.headers else {})


class PaginatedApiWorker(ApiWorker):
    """Fetch a bounded, documentation-described collection without guessing pagination."""
    def __init__(self, request: Dict, pagination: Dict):
        super().__init__([request])
        self.pagination = dict(pagination)

    @staticmethod
    def _business_payload(data: Any) -> Any:
        if not isinstance(data, dict):
            return data
        if "_payload" in data:
            return data["_payload"]
        return {key: value for key, value in data.items() if not str(key).startswith("_")}

    def run(self):
        original = dict(self.requests[0])
        mode = str(self.pagination.get("mode", ""))
        position_param = str(self.pagination.get("position_param", ""))
        size_param = str(self.pagination.get("size_param", ""))
        page_size = max(1, min(1000, int(self.pagination.get("page_size", 100))))
        maximum_pages = max(1, min(100, int(self.pagination.get("max_pages", 10))))
        settings = QSettings("Zscaler", "APIClient")
        try:
            maximum_bytes = max(1, min(1024, int(settings.value("advanced/max_transfer_mb", "100")))) * 1024 * 1024
        except (TypeError, ValueError):
            maximum_bytes = 100 * 1024 * 1024
        pages, records, collection_name = [], [], "items"
        total_bytes = 0
        total_retries = 0
        cursor = ""
        position = int(self.pagination.get("start", 1 if mode == "page" else 0))
        seen_cursors = set()
        partial_error = ""
        cancelled = False
        last_data: dict = {}
        more_available = False

        for index in range(maximum_pages):
            if self.isInterruptionRequested():
                cancelled = True
                break
            request = dict(original)
            page_url = original["url"]
            if size_param:
                page_url = url_with_query_value(page_url, size_param, page_size)
            if mode == "cursor":
                if cursor:
                    page_url = url_with_query_value(page_url, position_param, cursor)
            else:
                page_url = url_with_query_value(page_url, position_param, position)
            request["url"] = page_url
            try:
                data = self._make_request(request)
            except ApiRequestCancelled:
                cancelled = True
                break
            except ApiRequestError as error:
                if not pages:
                    self.finished.emit({"results": [{"success": False, "error": str(error), "status_code": error.status_code, "response_headers": error.response_headers, "request": original}], "stopped_early": False})
                    return
                partial_error = str(error)
                break
            except Exception as error:
                if not pages:
                    self.finished.emit({"results": [{"success": False, "error": str(error), "status_code": 0, "request": original}], "stopped_early": False})
                    return
                partial_error = str(error)
                break
            last_data = data if isinstance(data, dict) else {}
            total_retries += int(last_data.pop("_retry_count", 0) or 0)
            total_bytes += int(last_data.get("_size") or 0)
            if total_bytes > maximum_bytes:
                partial_error = "Combined paginated response exceeds the configured transfer limit"
                break
            business = self._business_payload(data)
            pages.append(business)
            page_records, detected_name = paginated_records(business)
            if page_records is not None:
                collection_name = detected_name or collection_name
                records.extend(page_records)
            self.progress.emit(index + 1, maximum_pages)

            if mode == "cursor":
                next_value = nested_response_value(business, str(self.pagination.get("next_field", "")))
                if next_value in (None, "") or str(next_value) in seen_cursors:
                    more_available = False
                    break
                cursor = str(next_value); seen_cursors.add(cursor); more_available = True
            elif page_records is None or not page_records:
                more_available = False
                break
            elif mode == "offset":
                position += len(page_records); more_available = True
            else:
                total_pages = nested_response_value(business, "totalPages")
                current_page = nested_response_value(business, "page")
                if total_pages is not None:
                    try:
                        if int(current_page if current_page is not None else position) >= int(total_pages):
                            more_available = False
                            break
                    except (TypeError, ValueError):
                        pass
                position += 1; more_available = True
            time.sleep(0.1)

        complete = not partial_error and not more_available and not cancelled
        pagination_summary = {
            "mode": mode, "pages_fetched": len(pages), "records_fetched": len(records),
            "complete": complete, "limited_by_max_pages": bool(more_available and not partial_error and not cancelled),
            "cancelled": cancelled,
        }
        if partial_error:
            pagination_summary["error"] = redact_sensitive(partial_error)
        merged = {
            collection_name: records, "_page_responses": pages, "_pagination": pagination_summary,
            "_status_code": int(last_data.get("_status_code") or 200), "_reason": last_data.get("_reason", "OK"),
            "_size": total_bytes, "_headers": last_data.get("_headers", {}),
            "_retry_count": total_retries,
        }
        self.finished.emit({"results": [{"success": True, "data": merged, "request": original}], "stopped_early": cancelled, "cancelled": cancelled})


class ApiChainWorker(ApiWorker):
    """Resolve approved references between sequential requests without evaluating code."""
    def __init__(self, steps: List[Dict], base_headers: Dict, stop_on_failure: bool = True):
        super().__init__([], stop_on_failure=stop_on_failure)
        self.steps = steps
        self.base_headers = dict(base_headers)

    def run(self):
        results, context, stopped_early, cancelled = [], {}, False, False
        total = len(self.steps)
        for index, step in enumerate(self.steps):
            if self.isInterruptionRequested():
                cancelled = True; stopped_early = index < total; break
            started = time.time()
            try:
                resolved_url = resolve_chain_templates(step["resolved_url"], context, url_value=True)
                custom_headers = {key: str(value) for key, value in resolve_chain_templates(step.get("headers", {}), context).items()}
                body = resolve_chain_templates(step.get("body"), context)
                request = {
                    "id": step["id"], "url": resolved_url, "method": step["method"],
                    "headers": {**self.base_headers, **custom_headers}, "body": body, "body_mode": step.get("body_mode", "json"),
                }
                data = self._make_request(request)
                context[step["id"]] = PaginatedApiWorker._business_payload(data)
                results.append({"success": True, "data": data, "request": request, "duration_ms": int((time.time() - started) * 1000)})
            except ApiRequestCancelled:
                cancelled = True; stopped_early = index < total; break
            except ApiRequestError as error:
                results.append({"success": False, "error": str(error), "status_code": error.status_code, "response_headers": error.response_headers, "request": {"id": step["id"], "url": step.get("resolved_url", step["url"]), "method": step["method"]}, "duration_ms": int((time.time() - started) * 1000)})
            except Exception as error:
                results.append({"success": False, "error": str(error), "status_code": 0, "request": {"id": step["id"], "url": step.get("resolved_url", step["url"]), "method": step["method"]}, "duration_ms": int((time.time() - started) * 1000)})
            self.progress.emit(index + 1, total)
            if not results[-1]["success"] and self.stop_on_failure:
                stopped_early = index + 1 < total
                break
            time.sleep(0.1)
        self.finished.emit({"results": results, "stopped_early": stopped_early, "cancelled": cancelled})


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
    activated = Signal(str, float)
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

    def mousePressEvent(self, event):
        if not self.values:
            return super().mousePressEvent(event)
        point = event.position().toPoint()
        if self.style == "pie":
            total = sum(value for _, value in self.values) or 1
            chart = self.rect().adjusted(42, 16, -16, -31); size = min(chart.height(), chart.width() // 2)
            center = QPoint(chart.left() + size // 2, chart.top() + size // 2)
            dx, dy = point.x() - center.x(), point.y() - center.y()
            if dx * dx + dy * dy <= (size // 2) ** 2:
                angle = (math.degrees(math.atan2(-dy, dx)) + 360) % 360; start = 0.0
                for label, value in self.values:
                    span = 360 * value / total
                    if start <= angle < start + span: self.activated.emit(label, value); break
                    start += span
        else:
            chart = self.rect().adjusted(42, 16, -16, -31); index = min(len(self.values) - 1, max(0, (point.x() - chart.left()) * len(self.values) // max(1, chart.width())))
            self.activated.emit(*self.values[index])
        super().mousePressEvent(event)

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


class HighPerformanceLineChart(QWidget):
    """Accelerated telemetry plot with the native chart as a safe fallback."""
    def __init__(self, parent=None, axis_label=None, units="", fixed_range=None):
        super().__init__(parent)
        self.values: list[tuple[str, float]] = []
        self.style = "line"
        self.setMinimumHeight(150)
        layout = QVBoxLayout(self); layout.setContentsMargins(0, 0, 0, 0)
        self._fallback = None
        self._plot = None
        self._fixed_range = fixed_range
        if pg is None:
            self._fallback = NumericBarChart(); self._fallback.set_style("line"); layout.addWidget(self._fallback)
            return
        self._plot = pg.PlotWidget(background="#172235")
        self._plot.setMenuEnabled(False)
        self._plot.setMouseEnabled(x=True, y=False)
        self._plot.showGrid(x=True, y=True, alpha=0.18)
        self._plot.setLabel("left", axis_label or self.tr("Value"), units=units)
        self._plot.getAxis("left").setTextPen(pg.mkPen("#cbd5e1"))
        self._plot.getAxis("bottom").setTextPen(pg.mkPen("#94a3b8"))
        self._curve = self._plot.plot(pen=pg.mkPen("#38bdf8", width=2), connect="finite")
        self._curve.setDownsampling(auto=True, method="peak")
        self._curve.setClipToView(True)
        if fixed_range is not None: self._plot.setYRange(float(fixed_range[0]), float(fixed_range[1]), padding=0)
        layout.addWidget(self._plot)

    def set_values(self, values: list[tuple[str, float]]):
        self.values = list(values)[-5000:]
        self.setVisible(bool(self.values))
        if self._fallback is not None:
            self._fallback.set_values(self.values)
            return
        x_values = list(range(len(self.values)))
        y_values = [value for _, value in self.values]
        self._curve.setData(x_values, y_values)
        if self.values:
            stride = max(1, len(self.values) // 6)
            ticks = [(index, self.values[index][0]) for index in range(0, len(self.values), stride)]
            if ticks[-1][0] != len(self.values) - 1:
                ticks.append((len(self.values) - 1, self.values[-1][0]))
            self._plot.getAxis("bottom").setTicks([ticks])
            if self._fixed_range is None: self._plot.enableAutoRange(axis="y", enable=True)


class PolicyTwinGraph(QWidget):
    """Compact local visualization of rule order and policy conflicts."""
    def __init__(self, parent=None):
        super().__init__(parent)
        self.nodes: list[dict[str, Any]] = []
        self.edges: list[dict[str, Any]] = []
        self.setMinimumHeight(250)

    def set_graph(self, nodes, edges):
        self.nodes = list(nodes)[:12]
        known = {node.get("id") for node in self.nodes}
        self.edges = [edge for edge in edges if edge.get("source") in known and edge.get("target") in known]
        self.setVisible(bool(self.nodes)); self.update()

    def paintEvent(self, event):
        painter = QPainter(self); painter.setRenderHint(QPainter.RenderHint.Antialiasing)
        canvas = self.rect().adjusted(1, 1, -1, -1)
        painter.setPen(QPen(QColor("#294564"), 1)); painter.setBrush(QColor("#0c192a")); painter.drawRoundedRect(canvas, 14, 14)
        if not self.nodes: return
        columns = min(4, len(self.nodes), max(1, canvas.width() // 150)); rows = (len(self.nodes) + columns - 1) // columns
        gap, margin = 14, 18
        width = max(80, (canvas.width() - margin * 2 - gap * (columns - 1)) // columns)
        height = max(68, (canvas.height() - margin * 2 - gap * (rows - 1)) // rows)
        rectangles = {}
        for index, node in enumerate(self.nodes):
            row, column = divmod(index, columns)
            if row % 2: column = columns - 1 - column
            x = canvas.left() + margin + column * (width + gap); y = canvas.top() + margin + row * (height + gap)
            rectangles[node["id"]] = (x, y, width, height)
        for edge in self.edges:
            if edge.get("relation") == "next": continue
            first, second = rectangles[edge["source"]], rectangles[edge["target"]]
            severity = "high" if edge["relation"] == "shadowed_conflict" else "medium"
            painter.setPen(QPen(QColor("#fb7185" if severity == "high" else "#fbbf24"), 2, Qt.PenStyle.DashLine))
            painter.drawLine(first[0] + first[2] // 2, first[1] + first[3] // 2, second[0] + second[2] // 2, second[1] + second[3] // 2)
        action_colors = {"allow": "#166534", "permit": "#166534", "block": "#991b1b", "deny": "#991b1b", "isolate": "#6b21a8"}
        border_colors = {"high": "#fb7185", "medium": "#fbbf24", "normal": "#38bdf8"}
        for node in self.nodes:
            x, y, width, height = rectangles[node["id"]]
            painter.setPen(QPen(QColor(border_colors.get(node.get("risk"), "#38bdf8")), 2))
            painter.setBrush(QColor(action_colors.get(node.get("action"), "#17365d")))
            painter.drawRoundedRect(x, y, width, height, 10, 10)
            painter.setPen(QColor("#dbeafe")); painter.drawText(x + 10, y + 8, width - 20, 18, Qt.AlignmentFlag.AlignLeft, f"{node['position']}. {str(node['name'])[:22]}")
            painter.setPen(QColor("#bae6fd")); painter.drawText(x + 10, y + 31, width - 20, 16, Qt.AlignmentFlag.AlignLeft, str(node.get("action", "")).upper())
            painter.setPen(QColor("#cbd5e1")); painter.drawText(x + 10, y + 50, width - 20, 16, Qt.AlignmentFlag.AlignLeft, self.tr("{count} condition(s)").format(count=node.get("conditions", 0)))


class SocEntityGraph(QWidget):
    """Accessible local entity relationship map for investigation evidence."""
    nodeSelected = Signal(str)

    def __init__(self, parent=None):
        super().__init__(parent)
        self.nodes: list[dict[str, Any]] = []
        self.edges: list[dict[str, Any]] = []
        self.highlighted: set[str] = set()
        self._hit_boxes: dict[str, tuple[int, int, int, int]] = {}
        self.setMinimumHeight(330)

    def set_graph(self, nodes, edges):
        grouped: dict[str, list[dict[str, Any]]] = {}
        for node in nodes:
            grouped.setdefault(str(node.get("type", "resource")), []).append(node)
        preferred = ("identity", "address", "device", "application", "policy", "service", "endpoint", "infrastructure", "indicator", "activity", "environment", "resource")
        risk_rank = {"normal": 0, "low": 1, "medium": 2, "high": 3, "critical": 4}
        type_rank = {kind: index for index, kind in enumerate(preferred)}
        chosen = set(sorted(grouped, key=lambda kind: (-max(risk_rank.get(item.get("risk"), 0) for item in grouped[kind]), type_rank.get(kind, 99)))[:8])
        visible_types = [kind for kind in preferred if kind in chosen] + sorted(chosen - set(preferred))
        self.nodes = [node for kind in visible_types for node in grouped[kind][:8]][:64]
        known = {str(node.get("id", "")) for node in self.nodes}
        self.edges = [edge for edge in edges if str(edge.get("source_id", "")) in known and str(edge.get("target_id", "")) in known][:240]
        self.highlighted &= known
        self.setVisible(bool(self.nodes)); self.update()

    def highlight_path(self, node_ids):
        self.highlighted = {str(item) for item in node_ids}; self.update()

    def paintEvent(self, event):
        painter = QPainter(self); painter.setRenderHint(QPainter.RenderHint.Antialiasing)
        canvas = self.rect().adjusted(1, 1, -1, -1)
        painter.setPen(QPen(QColor("#294564"), 1)); painter.setBrush(QColor("#0c192a")); painter.drawRoundedRect(canvas, 14, 14)
        if not self.nodes:
            return
        types = []
        for node in self.nodes:
            if node.get("type") not in types: types.append(node.get("type"))
        columns = max(1, len(types)); gap, margin, heading = 10, 14, 24
        column_width = max(84, (canvas.width() - margin * 2 - gap * (columns - 1)) // columns)
        groups = {kind: [node for node in self.nodes if node.get("type") == kind] for kind in types}
        type_labels = {"identity": self.tr("Identity"), "address": self.tr("Address"), "device": self.tr("Device"), "application": self.tr("Application"), "policy": self.tr("Policy"), "service": self.tr("Service"), "endpoint": self.tr("Endpoint"), "infrastructure": self.tr("Infrastructure"), "indicator": self.tr("Indicator"), "activity": self.tr("Activity"), "environment": self.tr("Environment"), "resource": self.tr("Resource")}
        positions = {}; self._hit_boxes = {}
        for column, kind in enumerate(types):
            x = canvas.left() + margin + column * (column_width + gap)
            painter.setPen(QColor("#94a3b8")); painter.drawText(x, canvas.top() + 8, column_width, 16, Qt.AlignmentFlag.AlignCenter, type_labels.get(kind, str(kind).title()))
            items = groups[kind]; available = canvas.height() - margin * 2 - heading
            node_height = max(32, min(54, (available - gap * max(0, len(items) - 1)) // max(1, len(items))))
            for row, node in enumerate(items):
                y = canvas.top() + margin + heading + row * (node_height + gap)
                box = (x, y, column_width, node_height); positions[str(node["id"])] = box; self._hit_boxes[str(node["id"])] = box
        for edge in self.edges:
            source, target = str(edge["source_id"]), str(edge["target_id"])
            if source not in positions or target not in positions: continue
            first, second = positions[source], positions[target]
            on_path = source in self.highlighted and target in self.highlighted
            color = QColor("#fbbf24" if on_path else "#3b82a6"); color.setAlpha(240 if on_path else 165)
            painter.setPen(QPen(color, 3 if on_path else 1))
            painter.drawLine(first[0] + first[2] // 2, first[1] + first[3] // 2, second[0] + second[2] // 2, second[1] + second[3] // 2)
        fill = {"identity": "#164e63", "address": "#075985", "device": "#1e3a8a", "application": "#4c1d95", "policy": "#5b21b6", "service": "#134e4a", "endpoint": "#134e4a", "infrastructure": "#3f3f46", "indicator": "#7f1d1d", "activity": "#334155", "environment": "#0f766e", "resource": "#1e293b"}
        border = {"critical": "#ef4444", "high": "#fb7185", "medium": "#fbbf24", "low": "#38bdf8", "normal": "#64748b"}
        for node in self.nodes:
            x, y, width, height = positions[str(node["id"])]
            selected = str(node["id"]) in self.highlighted
            painter.setPen(QPen(QColor("#f8fafc" if selected else border.get(node.get("risk"), "#64748b")), 3 if selected else 2))
            painter.setBrush(QColor(fill.get(node.get("type"), "#1e293b"))); painter.drawRoundedRect(x, y, width, height, 8, 8)
            painter.setPen(QColor("#f8fafc")); label = str(node.get("label", "")); maximum = max(7, width // 7)
            painter.drawText(x + 6, y + 5, width - 12, height - 10, Qt.AlignmentFlag.AlignCenter | Qt.TextFlag.TextWordWrap, label[:maximum * 2])

    def mousePressEvent(self, event):
        point = event.position().toPoint()
        for identifier, (x, y, width, height) in self._hit_boxes.items():
            if x <= point.x() <= x + width and y <= point.y() <= y + height:
                self.highlighted = {identifier}; self.nodeSelected.emit(identifier); self.update(); return
        super().mousePressEvent(event)


class ExperienceJourneyGraph(QWidget):
    """Compact user-to-application journey with explicit missing-data states."""
    def __init__(self, parent=None):
        super().__init__(parent)
        self.stages: list[dict[str, Any]] = []
        self.issues: list[dict[str, Any]] = []
        self.setMinimumHeight(205)

    def set_journey(self, stages, issues):
        self.stages = list(stages)[:5]; self.issues = list(issues)
        self.update()

    def paintEvent(self, event):
        painter = QPainter(self); painter.setRenderHint(QPainter.RenderHint.Antialiasing)
        canvas = self.rect().adjusted(1, 1, -1, -1)
        painter.setPen(QPen(QColor("#294564"), 1)); painter.setBrush(QColor("#0c192a")); painter.drawRoundedRect(canvas, 14, 14)
        if not self.stages:
            painter.setPen(QColor("#94a3b8")); painter.drawText(canvas, Qt.AlignmentFlag.AlignCenter, self.tr("No journey telemetry in the current response")); return
        margin, gap = 22, 20
        width = max(100, (canvas.width() - margin * 2 - gap * (len(self.stages) - 1)) // max(1, len(self.stages)))
        height = min(112, canvas.height() - 62); top = canvas.center().y() - height // 2
        issue_stages = {str(item.get("stage")) for item in self.issues}
        boxes = []
        for index, stage in enumerate(self.stages):
            boxes.append((canvas.left() + margin + index * (width + gap), top, width, height))
        for first, second in zip(boxes, boxes[1:]):
            y = first[1] + first[3] // 2
            painter.setPen(QPen(QColor("#38bdf8"), 3)); painter.drawLine(first[0] + first[2], y, second[0], y)
            painter.drawLine(second[0], y, second[0] - 9, y - 6); painter.drawLine(second[0], y, second[0] - 9, y + 6)
        for stage, box in zip(self.stages, boxes):
            x, y, box_width, box_height = box; observed = stage.get("status") == "observed"; issue = stage.get("id") in issue_stages
            painter.setPen(QPen(QColor("#fb7185" if issue else "#34d399" if observed else "#475569"), 3 if issue else 2))
            painter.setBrush(QColor("#3b1625" if issue else "#123c35" if observed else "#1e293b")); painter.drawRoundedRect(x, y, box_width, box_height, 12, 12)
            painter.setPen(QColor("#f8fafc")); font = painter.font(); font.setBold(True); painter.setFont(font)
            painter.drawText(x + 8, y + 10, box_width - 16, 20, Qt.AlignmentFlag.AlignCenter, self.tr(str(stage.get("label", ""))))
            font.setBold(False); painter.setFont(font); metrics = list(stage.get("metrics", {}).items())
            detail = "\n".join(f"{key.replace('_', ' ')}: {value:g}" for key, value in metrics[:3]) if metrics else self.tr("No observed data")
            painter.setPen(QColor("#cbd5e1" if observed else "#64748b")); painter.drawText(x + 8, y + 38, box_width - 16, box_height - 46, Qt.AlignmentFlag.AlignCenter | Qt.TextFlag.TextWordWrap, detail)


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
        hero = VisualAssetLabel("assets/visuals/zero-trust-hero.png", 170, crop=True)
        hero.setAccessibleName(self.tr("Abstract zero trust security network"))
        layout.addWidget(hero)
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
            if client_secret and not secure_store("oneapi_client_secret", client_secret):
                QMessageBox.warning(self, self.tr("Secure storage"), self.tr("The system keychain could not save the secret. Check the keychain service and try again."))
                return
        save_environment_profile_snapshot(settings)
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
        zdx_version_row = QHBoxLayout()
        zdx_version_row.addWidget(QLabel(self.tr("API version:")))
        self.zdx_api_version = QComboBox()
        self.zdx_api_version.addItem("v2", "v2")
        self.zdx_api_version.addItem("v1", "v1")
        zdx_version_row.addWidget(self.zdx_api_version, 1)
        zdx_layout.addLayout(zdx_version_row)
        
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
        self.zcc_cloud.setPlaceholderText("Cloud host (e.g. mobile.zscalertwo.net)")
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

        self.max_transfer_mb = QComboBox()
        self.max_transfer_mb.setEditable(True)
        self.max_transfer_mb.addItems(["10", "25", "50", "100", "250", "500", "1024"])
        network_layout.addRow(self.tr("Maximum upload/download (MB):"), self.max_transfer_mb)

        self.retry_reads = QComboBox()
        self.retry_reads.addItems([self.tr("Enabled"), self.tr("Disabled")])
        self.retry_reads.setToolTip(self.tr("Retry only GET, HEAD, and OPTIONS after transient network errors or HTTP 408, 429, 502, 503, and 504. Write requests are never retried automatically."))
        network_layout.addRow(self.tr("Retry safe reads:"), self.retry_reads)

        self.max_read_retries = QComboBox()
        self.max_read_retries.addItems(["0", "1", "2", "3", "5"])
        network_layout.addRow(self.tr("Maximum read retries:"), self.max_read_retries)

        self.retry_max_wait = QComboBox()
        self.retry_max_wait.addItems(["5", "15", "30", "60", "120", "300"])
        self.retry_max_wait.setToolTip(self.tr("Maximum seconds to honor from Retry-After; shorter exponential backoff is used when the server omits it."))
        network_layout.addRow(self.tr("Maximum retry wait (seconds):"), self.retry_max_wait)
        
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

        # === Privacy Tab ===
        privacy_widget = QWidget()
        privacy_layout = QVBoxLayout(privacy_widget)
        privacy_group = QGroupBox(self.tr("Privacy"))
        privacy_form = QFormLayout(privacy_group)
        self.privacy_mode = QComboBox()
        self.privacy_mode.addItem(self.tr("Secrets only (identifiers visible)"), "off")
        self.privacy_mode.addItem(self.tr("Obfuscate exports and external integrations (recommended)"), "external")
        self.privacy_mode.addItem(self.tr("Obfuscate exports, integrations, and on-screen data"), "everywhere")
        self.privacy_mode.currentIndexChanged.connect(self._update_privacy_preview)
        privacy_form.addRow(self.tr("Identifier obfuscation:"), self.privacy_mode)
        privacy_note = QLabel(self.tr("Credentials and authentication material are always masked. Identifier pseudonyms are stable until the local pseudonym key is rotated; no original-to-pseudonym mapping is stored."))
        privacy_note.setWordWrap(True); privacy_form.addRow(privacy_note)
        self.privacy_users = QCheckBox(self.tr("Usernames, display names, and email addresses"))
        self.privacy_addresses = QCheckBox(self.tr("IPv4 and IPv6 addresses"))
        self.privacy_hosts = QCheckBox(self.tr("Hostnames, domains, and URL hosts"))
        self.privacy_tenants = QCheckBox(self.tr("Tenant, customer, organization, and environment names"))
        self.privacy_ids = QCheckBox(self.tr("Object IDs, UUIDs, GUIDs, and client identifiers"))
        self.privacy_labels = QCheckBox(self.tr("Policy, application, group, location, and resource names"))
        self.privacy_category_controls = {
            "users": self.privacy_users, "addresses": self.privacy_addresses, "hosts": self.privacy_hosts,
            "tenants": self.privacy_tenants, "ids": self.privacy_ids, "labels": self.privacy_labels,
        }
        for control in self.privacy_category_controls.values():
            control.toggled.connect(self._update_privacy_preview); privacy_form.addRow(control)
        rotate_privacy = QPushButton(self.tr("Rotate local pseudonym key"))
        rotate_privacy.setToolTip(self.tr("Creates new pseudonyms for future views and exports. Existing files are not modified."))
        rotate_privacy.clicked.connect(self._rotate_privacy_key)
        privacy_form.addRow(rotate_privacy)
        rotate_signing = QPushButton(self.tr("Rotate evidence signing key"))
        rotate_signing.setToolTip(self.tr("Creates a new Ed25519 key in the system keychain. Existing signed packages remain verifiable with their embedded public keys."))
        rotate_signing.clicked.connect(self._rotate_evidence_signing_key); privacy_form.addRow(rotate_signing)
        privacy_layout.addWidget(privacy_group)
        preview_group = QGroupBox(self.tr("Obfuscation preview"))
        preview_layout = QVBoxLayout(preview_group)
        preview_layout.addWidget(QLabel(self.tr("Preview of exported or externally shared data using synthetic examples:")))
        self.privacy_preview = QPlainTextEdit(); self.privacy_preview.setReadOnly(True); self.privacy_preview.setMaximumHeight(210)
        preview_layout.addWidget(self.privacy_preview); privacy_layout.addWidget(preview_group); privacy_layout.addStretch()
        tabs.addTab(privacy_widget, self.tr("Privacy"))

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
        for label, code, _endpoint, _model in AI_PROVIDER_PRESETS:
            self.ai_provider.addItem(self.tr(label), code)
        self.ai_provider.currentIndexChanged.connect(self._apply_ai_provider_preset)
        ai_form.addRow(self.tr("AI provider:"), self.ai_provider)
        self.ai_endpoint = QLineEdit()
        self.ai_endpoint.setPlaceholderText("http://localhost:11434/v1")
        ai_form.addRow(self.tr("AI endpoint:"), self.ai_endpoint)
        self.ai_model = QLineEdit()
        self.ai_model.setPlaceholderText(self.tr("Select a provider to prefill a recommended model"))
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
        ai_note = QLabel(self.tr("Provider profiles prefill public endpoints and recommended models. Review model availability, pricing, and your organization’s data policy before enabling an external service."))
        ai_note.setWordWrap(True); ai_form.addRow(ai_note)
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
            if group.title().startswith("OneAPI") or group.title() in {self.tr("Language"), self.tr("AI / LLM"), self.tr("Privacy"), self.tr("Obfuscation preview")}:
                continue
            group.setVisible(advanced)
        for index in range(self.settings_tabs.count()):
            title = self.settings_tabs.tabText(index)
            self.settings_tabs.setTabVisible(index, advanced or title in {self.tr("Credentials"), self.tr("Privacy"), self.tr("Language")})

    def _privacy_categories(self) -> dict[str, bool]:
        return {name: control.isChecked() for name, control in self.privacy_category_controls.items()}

    def _update_privacy_preview(self, *_args):
        sample = {
            "environment": "Production Europe", "email": "ada@example.com", "sourceIp": "10.20.30.40",
            "url": "https://tenant.example.com/api/v1/users/42", "resourceId": "8d81b2e7-1f00-4f00-a100-000000000042",
            "policyName": "Finance internet access",
            "client_secret": "always-hidden",
        }
        safe = redact_sensitive(sample)
        if self.privacy_mode.currentData() != "off":
            safe = obfuscate_identifiers(safe, privacy_salt(), self._privacy_categories())
        self.privacy_preview.setPlainText(json.dumps(safe, indent=2, ensure_ascii=False))

    def _rotate_privacy_key(self):
        if QMessageBox.question(
            self, self.tr("Rotate pseudonym key"),
            self.tr("Rotate the local pseudonym key? Future pseudonyms will change and will no longer correlate with previous exports."),
            QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.Cancel, QMessageBox.StandardButton.Cancel,
        ) != QMessageBox.StandardButton.Yes:
            return
        settings = QSettings("Zscaler", "APIClient")
        rotate_privacy_salt(settings)
        AuditTrail(settings).append("privacy_pseudonym_key_rotated", {})
        self._update_privacy_preview()
        QMessageBox.information(self, self.tr("Rotate pseudonym key"), self.tr("The local pseudonym key was rotated. No credentials or source identifiers were stored."))

    def _rotate_evidence_signing_key(self):
        if QMessageBox.question(self, self.tr("Rotate evidence signing key"), self.tr("Create a new local evidence signing identity? Existing signed packages remain verifiable, but future packages will have a different public-key fingerprint."), QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.Cancel, QMessageBox.StandardButton.Cancel) != QMessageBox.StandardButton.Yes: return
        private = generate_private_key()
        if not secure_global_store("evidence_signing_ed25519_private", private):
            QMessageBox.warning(self, self.tr("Signed evidence"), self.tr("The system keychain could not store the evidence signing key.")); return
        fingerprint = hashlib.sha256(public_key(private).encode()).hexdigest()[:16]
        AuditTrail(QSettings("Zscaler", "APIClient")).append("evidence_signing_key_rotated", {"public_key_fingerprint": fingerprint})
        QMessageBox.information(self, self.tr("Rotate evidence signing key"), self.tr("A new signing key was stored in the system keychain. Public-key fingerprint: {fingerprint}").format(fingerprint=fingerprint))
    
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
            self.max_transfer_mb.setCurrentText("100")
            self.retry_reads.setCurrentIndex(0)
            self.max_read_retries.setCurrentText("2")
            self.retry_max_wait.setCurrentText("60")
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
            self.privacy_mode.setCurrentIndex(max(0, self.privacy_mode.findData("external")))
            for control in self.privacy_category_controls.values(): control.setChecked(True)
            self.zdx_api_version.setCurrentIndex(max(0, self.zdx_api_version.findData("v2")))
    
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
        self.zdx_api_version.setCurrentIndex(max(0, self.zdx_api_version.findData(settings.value("zdx/api_version", "v2"))))
        
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
        self.max_transfer_mb.setCurrentText(settings.value("advanced/max_transfer_mb", "100"))
        self.retry_reads.setCurrentIndex(0 if settings.value("advanced/retry_reads", "true") == "true" else 1)
        self.max_read_retries.setCurrentText(settings.value("advanced/max_read_retries", "2"))
        self.retry_max_wait.setCurrentText(settings.value("advanced/retry_max_wait", "60"))
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
        self.privacy_mode.setCurrentIndex(max(0, self.privacy_mode.findData(settings.value("privacy/mode", "external"))))
        for name, control in self.privacy_category_controls.items():
            control.setChecked(settings.value(PRIVACY_CATEGORY_KEYS[name], "true") == "true")
        language = str(settings.value("language", "system"))
        self.language_choice.setCurrentIndex(max(0, self.language_choice.findData(language)))
        self.mode_choice.setCurrentIndex(0 if settings.value("ui/mode", "basic") == "basic" else 1)
        self.ai_provider.setCurrentIndex(max(0, self.ai_provider.findData(settings.value("ai/provider", "catalog"))))
        self.ai_endpoint.setText(settings.value("ai/endpoint", ""))
        self.ai_model.setText(settings.value("ai/model", ""))
        if secure_get("ai_api_key"):
            self.ai_api_key.setPlaceholderText(self.tr("Configured securely in your system keychain"))
        self.ai_allow_external.setChecked(settings.value("ai/allow_external", "false") == "true")
        self._update_privacy_preview()

    def _clear_ai_key(self):
        secure_delete("ai_api_key")
        self.ai_api_key.clear()
        self.ai_api_key.setPlaceholderText(self.tr("AI key cleared"))

    def _apply_ai_provider_preset(self, *_unused):
        """Prefill only public provider metadata; credentials always remain untouched."""
        provider = self.ai_provider.currentData()
        preset = next((item for item in AI_PROVIDER_PRESETS if item[1] == provider), None)
        if preset is None:
            return
        _label, _code, endpoint, model = preset
        self.ai_endpoint.setText(endpoint)
        self.ai_model.setText(model)

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
            headers = {"Authorization": f"Bearer {secure_get('ai_api_key')}"} if secure_get("ai_api_key") else {}
            if provider == "anthropic" and secure_get("ai_api_key"):
                headers = {"x-api-key": secure_get("ai_api_key"), "anthropic-version": "2023-06-01"}
            request = urllib.request.Request(f"{endpoint}/models", headers=headers)
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

        for product, field in (("ZDX", self.zdx_cloud), ("ZCC", self.zcc_cloud)):
            host = field.text().strip()
            if host.startswith(("https://", "http://")):
                field.setText(host.split("://", 1)[1].rstrip("/"))
                warnings.append(self.tr("{product} Cloud: Removed URL prefix (only hostname needed)").format(product=product))
        
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
        if self.zcc_enabled.isChecked() and not self.zcc_cloud.text().strip():
            warnings.append(self.tr("ZCC is enabled but Cloud host is empty"))
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
        secrets = {
            "zia_api_key": self.zia_api_key.text(), "zia_password": self.zia_password.text(),
            "zpa_client_secret": self.zpa_client_secret.text(), "zdx_key_secret": self.zdx_key_secret.text(),
            "zcc_client_secret": self.zcc_client_secret.text(), "zidentity_client_secret": self.zidentity_client_secret.text(),
            "ztw_client_secret": self.ztw_client_secret.text(), "zwa_client_secret": self.zwa_client_secret.text(),
            "easm_client_secret": self.easm_client_secret.text(), "oneapi_client_secret": self.oneapi_client_secret.text(),
            "proxy_password": self.proxy_password.text(),
        }
        if self.ai_api_key.text():
            secrets["ai_api_key"] = self.ai_api_key.text()
        if not secure_store_many(secrets):
            QMessageBox.warning(self, self.tr("Secure storage"), self.tr("The system keychain could not save one or more secrets. No secret changes were applied."))
            return
        
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
        settings.setValue("zia/username", self.zia_username.text())
        settings.setValue("zpa/cloud", self.zpa_cloud.text())
        settings.setValue("zpa/client_id", self.zpa_client_id.text())
        settings.setValue("zpa/customer_id", self.zpa_customer_id.text())
        
        # ZDX
        settings.setValue("zdx/cloud", self.zdx_cloud.text())
        settings.setValue("zdx/key_id", self.zdx_key_id.text())
        settings.setValue("zdx/api_version", self.zdx_api_version.currentData())
        
        # ZCC
        settings.setValue("zcc/cloud", self.zcc_cloud.text())
        settings.setValue("zcc/client_id", self.zcc_client_id.text())
        
        # ZIdentity
        settings.setValue("zidentity/domain", self.zidentity_domain.text())
        settings.setValue("zidentity/client_id", self.zidentity_client_id.text())
        
        # ZTW
        settings.setValue("ztw/cloud", self.ztw_cloud.text())
        settings.setValue("ztw/client_id", self.ztw_client_id.text())
        
        # ZWA
        settings.setValue("zwa/cloud", self.zwa_cloud.text())
        settings.setValue("zwa/client_id", self.zwa_client_id.text())
        
        # EASM
        settings.setValue("easm/cloud", self.easm_cloud.text())
        settings.setValue("easm/client_id", self.easm_client_id.text())
        
        # OneAPI
        settings.setValue("oneapi/enabled", "true" if self.oneapi_enabled.isChecked() else "false")
        settings.setValue("oneapi/vanity_domain", self.oneapi_vanity_domain.text())
        settings.setValue("oneapi/client_id", self.oneapi_client_id.text())
        settings.setValue("oneapi/cloud", self.oneapi_cloud.text())
        settings.setValue("oneapi/customer_id", self.oneapi_customer_id.text())
        
        # Advanced
        try:
            timeout = max(1, min(600, int(self.timeout_spin.currentText())))
        except ValueError:
            timeout = 30
        settings.setValue("advanced/timeout", str(timeout))
        try:
            maximum_transfer = max(1, min(1024, int(self.max_transfer_mb.currentText())))
        except ValueError:
            maximum_transfer = 100
        settings.setValue("advanced/max_transfer_mb", str(maximum_transfer))
        settings.setValue("advanced/retry_reads", "true" if self.retry_reads.currentIndex() == 0 else "false")
        settings.setValue("advanced/max_read_retries", str(max(0, min(5, int(self.max_read_retries.currentText())))))
        settings.setValue("advanced/retry_max_wait", str(max(0, min(300, int(self.retry_max_wait.currentText())))))
        settings.setValue("advanced/verify_ssl", "true" if self.verify_ssl.currentIndex() == 0 else "false")
        settings.setValue("advanced/proxy_mode", str(self.proxy_enabled.currentIndex()))
        settings.setValue("advanced/proxy_host", self.proxy_host.text())
        settings.setValue("advanced/proxy_port", self.proxy_port.text())
        settings.setValue("advanced/proxy_username", self.proxy_username.text())
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
        settings.setValue("privacy/mode", self.privacy_mode.currentData())
        for name, control in self.privacy_category_controls.items():
            settings.setValue(PRIVACY_CATEGORY_KEYS[name], "true" if control.isChecked() else "false")
        settings.setValue("language", self.language_choice.currentData())
        settings.setValue("ui/mode", self.mode_choice.currentData())
        settings.setValue("ai/provider", self.ai_provider.currentData())
        settings.setValue("ai/endpoint", self.ai_endpoint.text().strip())
        settings.setValue("ai/model", self.ai_model.text().strip())
        settings.setValue("ai/allow_external", "true" if self.ai_allow_external.isChecked() else "false")
        save_environment_profile_snapshot(settings)
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
    
    def __init__(self, history: List[Dict], parent=None, active_profile: dict[str, str] | None = None):
        super().__init__(parent)
        self.setWindowTitle(self.tr("Request History"))
        self.setMinimumSize(800, 500)
        self.history = history
        self.active_profile = active_profile or {"id": "default", "name": "Default"}
        
        layout = QVBoxLayout(self)
        
        # Search
        search_layout = QHBoxLayout()
        search_layout.addWidget(QLabel(self.tr("Search:")))
        self.search_input = QLineEdit()
        self.search_input.setPlaceholderText(self.tr("Filter by URL or method..."))
        self.search_input.textChanged.connect(self._filter_history)
        search_layout.addWidget(self.search_input)

        self.environment_filter = QComboBox()
        self.environment_filter.addItem(self.tr("Current environment: {name}").format(name=environment_profile_display_name(self, self.active_profile)), "current")
        self.environment_filter.addItem(self.tr("All environments"), "all")
        self.environment_filter.currentIndexChanged.connect(lambda _index: self._populate_table(self.search_input.text()))
        search_layout.addWidget(self.environment_filter)
        
        clear_btn = QPushButton(self.tr("Clear History"))
        clear_btn.clicked.connect(self._clear_history)
        search_layout.addWidget(clear_btn)
        layout.addLayout(search_layout)
        
        # History table
        self.history_table = QTableWidget()
        self.history_table.setColumnCount(6)
        self.history_table.setHorizontalHeaderLabels([
            self.tr("Time"), self.tr("Environment"), self.tr("Method"), self.tr("URL"),
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
            entry_profile_id = str(entry.get("environment_id") or "default")
            if self.environment_filter.currentData() == "current" and entry_profile_id != self.active_profile["id"]:
                continue
            if filter_lower and filter_lower not in entry.get("url", "").lower() \
               and filter_lower not in entry.get("method", "").lower() \
               and filter_lower not in str(entry.get("environment") or "Default").lower():
                continue
            
            row = self.history_table.rowCount()
            self.history_table.insertRow(row)
            
            self.history_table.setItem(row, 0, QTableWidgetItem(entry.get("timestamp", "")))
            environment_name = self.tr("Default") if entry_profile_id == "default" else str(entry.get("environment") or "")
            self.history_table.setItem(row, 1, QTableWidgetItem(environment_name))
            self.history_table.setItem(row, 2, QTableWidgetItem(entry.get("method", "")))
            self.history_table.setItem(row, 3, QTableWidgetItem(entry.get("url", "")))
            
            status = entry.get("status", "")
            status_item = QTableWidgetItem(str(status) if status else "-")
            if status and 200 <= status < 300:
                status_item.setForeground(QColor("#22863a"))
            elif status and status >= 400:
                status_item.setForeground(QColor("#d73a49"))
            self.history_table.setItem(row, 4, status_item)
            
            duration = entry.get("duration_ms", "")
            self.history_table.setItem(row, 5, QTableWidgetItem(f"{duration}ms" if duration else "-"))
            
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


class EnvironmentProfilesDialog(QDialog):
    """Manage isolated tenant profiles without displaying or copying secrets."""
    def __init__(self, parent=None):
        super().__init__(parent)
        self.settings = QSettings("Zscaler", "APIClient")
        self.activated_profile_id = ""
        self.setWindowTitle(self.tr("Environment profiles")); self.resize(820, 480)
        layout = QVBoxLayout(self)
        intro = QLabel(self.tr("Each environment keeps separate tenant hosts, client identifiers, enabled products, and keychain credentials. Creating a profile copies only non-secret configuration. Activating a profile clears every in-memory API session.")); intro.setWordWrap(True); layout.addWidget(intro)
        self.table = QTableWidget(0, 5); self.table.setHorizontalHeaderLabels([self.tr("Active"), self.tr("Name"), self.tr("Default API"), self.tr("Configured host"), self.tr("Keychain secrets")])
        self.table.setSelectionBehavior(QTableWidget.SelectionBehavior.SelectRows); self.table.setSelectionMode(QTableWidget.SelectionMode.SingleSelection); self.table.setEditTriggers(QTableWidget.EditTrigger.NoEditTriggers); self.table.horizontalHeader().setStretchLastSection(True); self.table.doubleClicked.connect(lambda _index: self.activate_selected()); layout.addWidget(self.table)
        actions = QHBoxLayout()
        create = QPushButton(self.tr("Create profile")); create.clicked.connect(self.create_profile); actions.addWidget(create)
        rename = QPushButton(self.tr("Rename profile")); rename.clicked.connect(self.rename_profile); actions.addWidget(rename)
        remove = QPushButton(self.tr("Delete profile")); remove.clicked.connect(self.delete_profile); actions.addWidget(remove)
        actions.addStretch(); activate = QPushButton(self.tr("Activate profile")); activate.clicked.connect(self.activate_selected); actions.addWidget(activate)
        close = QPushButton(self.tr("Close")); close.clicked.connect(self.reject); actions.addWidget(close); layout.addLayout(actions)
        self.refresh()

    def _profile_host(self, profile_id: str, api: str) -> str:
        workspace = str(self.settings.value(_profile_data_key(profile_id, "workspace/url"), ""))
        if workspace:
            return urllib.parse.urlsplit(workspace).netloc or workspace
        key = {"OneAPI": "oneapi/vanity_domain", "ZIA": "zia/cloud", "ZPA": "zpa/cloud", "ZDX": "zdx/cloud", "ZCC": "zcc/cloud", "ZIdentity": "zidentity/domain", "ZTW": "ztw/cloud", "ZWA": "zwa/cloud", "EASM": "easm/cloud"}.get(api, "")
        return str(self.settings.value(_profile_data_key(profile_id, "settings/" + key), "")) if key else ""

    def refresh(self, select_id: str = ""):
        profiles = environment_profiles(self.settings); active_id = active_environment_profile(self.settings)["id"]
        self.table.setRowCount(len(profiles)); selected_row = 0
        for row, profile in enumerate(profiles):
            profile_id = profile["id"]
            api = str(self.settings.value(_profile_data_key(profile_id, "settings/advanced/default_api"), "OneAPI"))
            values = ("●" if profile_id == active_id else "", environment_profile_display_name(self, profile), api, self._profile_host(profile_id, api), self.tr("{count} configured").format(count=environment_profile_secret_count(profile_id)))
            for column, value in enumerate(values): self.table.setItem(row, column, QTableWidgetItem(value))
            self.table.item(row, 0).setData(Qt.ItemDataRole.UserRole, profile_id)
            if profile_id == (select_id or active_id): selected_row = row
        if profiles: self.table.selectRow(selected_row)
        self.table.resizeColumnsToContents()

    def _selected(self) -> tuple[str, str]:
        row = self.table.currentRow()
        if row < 0 or not self.table.item(row, 0): return "", ""
        return str(self.table.item(row, 0).data(Qt.ItemDataRole.UserRole) or ""), self.table.item(row, 1).text()

    def create_profile(self):
        name, ok = QInputDialog.getText(self, self.tr("Create profile"), self.tr("Profile name:"))
        if not ok: return
        profile = create_environment_profile(self.settings, name)
        if profile is None:
            QMessageBox.warning(self, self.tr("Environment profiles"), self.tr("Enter a unique profile name without path separators (maximum 60 characters).")); return
        AuditTrail(self.settings).append("environment_profile_created", {"profile_id": profile["id"], "name": profile["name"], "secrets_copied": False})
        self.refresh(profile["id"])
        QMessageBox.information(self, self.tr("Environment profiles"), self.tr("The profile was created with non-secret settings only. Open Settings after activation to add its keychain credentials."))

    def rename_profile(self):
        profile_id, old_name = self._selected()
        if not profile_id: return
        name, ok = QInputDialog.getText(self, self.tr("Rename profile"), self.tr("Profile name:"), text=old_name)
        if not ok: return
        if not rename_environment_profile(self.settings, profile_id, name):
            QMessageBox.warning(self, self.tr("Environment profiles"), self.tr("Enter a unique profile name without path separators (maximum 60 characters).")); return
        AuditTrail(self.settings).append("environment_profile_renamed", {"profile_id": profile_id})
        self.refresh(profile_id)

    def delete_profile(self):
        profile_id, name = self._selected(); active_id = active_environment_profile(self.settings)["id"]
        if not profile_id: return
        if profile_id == "default" or profile_id == active_id:
            QMessageBox.information(self, self.tr("Delete profile"), self.tr("The default or active profile cannot be deleted. Activate another profile first.")); return
        if QMessageBox.question(self, self.tr("Delete profile"), self.tr("Delete profile “{name}” and all of its keychain credentials? This cannot be undone.").format(name=name), QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.Cancel, QMessageBox.StandardButton.Cancel) != QMessageBox.StandardButton.Yes: return
        if not delete_environment_profile(self.settings, profile_id):
            QMessageBox.warning(self, self.tr("Secure storage"), self.tr("The profile could not be deleted because its keychain credentials could not be removed.")); return
        AuditTrail(self.settings).append("environment_profile_deleted", {"profile_id": profile_id}); self.refresh()

    def activate_selected(self):
        profile_id, _name = self._selected()
        if not profile_id: return
        self.activated_profile_id = profile_id; self.accept()


class ResponseComparisonDialog(QDialog):
    """Compare a masked active response with a local baseline without network access."""
    def __init__(self, current_exchange: dict[str, Any], parent=None):
        super().__init__(parent)
        self.settings = QSettings("Zscaler", "APIClient")
        self.current_exchange = redact_sensitive(current_exchange)
        self.baseline_exchange: dict[str, Any] | None = None
        self.baseline_name = ""
        self._last_drift: dict[str, Any] | None = None
        self.setWindowTitle(self.tr("Response drift comparison")); self.resize(1040, 700)
        layout = QVBoxLayout(self)
        intro = QLabel(self.tr("Compare the active masked response with a local ZS API Exchange baseline. Matching records are aligned by id, UUID, resourceId, key, or name. No API request is sent.")); intro.setWordWrap(True); layout.addWidget(intro)

        source_row = QHBoxLayout()
        source_row.addWidget(QLabel(self.tr("Baseline:")))
        self.baseline_path = QLineEdit(); self.baseline_path.setReadOnly(True); self.baseline_path.setPlaceholderText(self.tr("Choose a masked response exchange file")); source_row.addWidget(self.baseline_path, 1)
        choose = QPushButton(self.tr("Open baseline…")); choose.clicked.connect(self._load_baseline); source_row.addWidget(choose)
        layout.addLayout(source_row)

        ignore_row = QHBoxLayout(); ignore_row.addWidget(QLabel(self.tr("Ignore volatile fields:")))
        self.ignored_fields = QLineEdit(str(self.settings.value("drift/ignored_fields", "timestamp,createdAt,updatedAt,lastModified,requestId,traceId")))
        self.ignored_fields.setToolTip(self.tr("Comma-separated field names ignored at every JSON depth. Secrets are always masked independently.")); ignore_row.addWidget(self.ignored_fields, 1)
        compare = QPushButton(self.tr("Compare responses")); compare.clicked.connect(self.compare); ignore_row.addWidget(compare); layout.addLayout(ignore_row)

        self.summary = QLabel(self.tr("Open a baseline to calculate drift.")); self.summary.setObjectName("sectionTitle"); layout.addWidget(self.summary)
        self.chart = NumericBarChart(); self.chart.setMaximumHeight(135); layout.addWidget(self.chart)
        self.table = QTableWidget(0, 6)
        self.table.setHorizontalHeaderLabels([self.tr("Impact"), self.tr("Change"), self.tr("JSON path"), self.tr("Identity"), self.tr("Baseline value"), self.tr("Current value")])
        self.table.horizontalHeader().setStretchLastSection(True); self.table.setEditTriggers(QTableWidget.EditTrigger.NoEditTriggers); self.table.setSelectionBehavior(QTableWidget.SelectionBehavior.SelectRows); layout.addWidget(self.table)

        actions = QHBoxLayout(); actions.addStretch()
        self.export_button = QPushButton(self.tr("Export masked drift…")); self.export_button.setEnabled(False); self.export_button.clicked.connect(self.export_drift); actions.addWidget(self.export_button)
        close = QPushButton(self.tr("Close")); close.clicked.connect(self.reject); actions.addWidget(close); layout.addLayout(actions)

    def _maximum_bytes(self) -> int:
        try:
            return max(1, min(1024, int(self.settings.value("advanced/max_transfer_mb", "100")))) * 1024 * 1024
        except (TypeError, ValueError):
            return 100 * 1024 * 1024

    def _load_baseline(self):
        path, _ = QFileDialog.getOpenFileName(self, self.tr("Open response baseline"), "", "ZS API Exchange (*.zsapi.json *.json);;JSON (*.json)")
        if not path:
            return
        document, error_code = load_masked_response_exchange(path, self._maximum_bytes())
        if document is None:
            QMessageBox.warning(self, self.tr("Open response baseline"), response_exchange_error_message(self, error_code)); return
        self.baseline_exchange = document
        self.baseline_name = Path(path).name
        self.baseline_path.setText(self.baseline_name)
        AuditTrail(self.settings).append("response_baseline_opened", {"file": self.baseline_name})
        self.compare()

    @staticmethod
    def _response_body(exchange: dict[str, Any]) -> Any:
        response = exchange.get("response", {}) if isinstance(exchange, dict) else {}
        return response.get("body") if isinstance(response, dict) else None

    @staticmethod
    def _serialized_value(value: Any) -> str:
        return json.dumps(value, ensure_ascii=False, sort_keys=True) if isinstance(value, (dict, list)) else "" if value is None else str(value)

    @classmethod
    def _cell_value(cls, value: Any) -> str:
        rendered = cls._serialized_value(value)
        return rendered if len(rendered) <= 300 else rendered[:297] + "…"

    def compare(self):
        if self.baseline_exchange is None:
            QMessageBox.information(self, self.tr("Response drift comparison"), self.tr("Open a baseline response exchange first.")); return
        ignored = [item.strip() for item in self.ignored_fields.text().split(",") if item.strip()]
        self.settings.setValue("drift/ignored_fields", ",".join(ignored))
        drift = response_drift(self._response_body(self.baseline_exchange), self._response_body(self.current_exchange), ignored_fields=ignored)
        self._last_drift = redact_sensitive(drift)
        counts, impacts = drift["summary"], drift["impacts"]
        if drift["unchanged"]:
            message = self.tr("No drift found in the compared scope.")
        else:
            message = self.tr("{total} change(s): {added} added, {removed} removed, {changed} changed · {high} high-impact").format(
                total=len(drift["changes"]), added=counts["added"], removed=counts["removed"], changed=counts["changed"], high=impacts["high"])
            if drift["truncated"]:
                message += " · " + self.tr("Result truncated at {maximum} changes").format(maximum=drift["maximum_changes"])
        self.summary.setText(message + " · " + self.tr("Baseline {baseline} · current {current}").format(baseline=drift["baseline_sha256"][:12], current=drift["current_sha256"][:12]))
        self.chart.set_values([(self.tr("Added"), float(counts["added"])), (self.tr("Removed"), float(counts["removed"])), (self.tr("Changed"), float(counts["changed"])), (self.tr("High impact"), float(impacts["high"]))])
        visible = drift["changes"][:1000]
        self.table.setRowCount(len(visible))
        impact_colors = {"high": "#c62828", "medium": "#e65100", "low": "#1565c0"}
        for row, change in enumerate(visible):
            values = (change["impact"].title(), change["change"].title(), change["path"], change.get("identity", ""), self._cell_value(change.get("before")), self._cell_value(change.get("after")))
            for column, value in enumerate(values):
                item = QTableWidgetItem(value)
                if column == 0: item.setForeground(QColor(impact_colors.get(change["impact"], "#1565c0")))
                self.table.setItem(row, column, item)
        self.table.resizeColumnsToContents(); self.export_button.setEnabled(True)
        AuditTrail(self.settings).append("response_drift_compared", {"baseline_file": self.baseline_name, "changes": len(drift["changes"]), "high_impact": impacts["high"], "truncated": drift["truncated"]})

    def export_drift(self):
        if not self._last_drift:
            return
        path, selected = QFileDialog.getSaveFileName(self, self.tr("Export masked drift"), "response-drift.json", "JSON (*.json);;CSV (*.csv);;Markdown (*.md)")
        if not path:
            return
        safe = privacy_safe(self._last_drift, self.settings, "export"); suffix = Path(path).suffix.lower()
        if suffix == ".csv" or "CSV" in selected:
            output = io.StringIO(); writer = csv.writer(output); writer.writerow(["impact", "change", "path", "identity", "before", "after"])
            for item in safe["changes"]: writer.writerow([item["impact"], item["change"], item["path"], item.get("identity", ""), self._serialized_value(item.get("before")), self._serialized_value(item.get("after"))])
            Path(path).write_text(output.getvalue(), encoding="utf-8")
        elif suffix == ".md" or "Markdown" in selected:
            lines = ["# ZS API Client response drift", "", self.summary.text(), "", "| Impact | Change | Path | Identity | Baseline | Current |", "| --- | --- | --- | --- | --- | --- |"]
            for item in safe["changes"]:
                values = [str(item.get(key, "")) for key in ("impact", "change", "path", "identity")] + [self._serialized_value(item.get("before")), self._serialized_value(item.get("after"))]
                lines.append("| " + " | ".join(value.replace("|", "\\|").replace("\n", "<br>") for value in values) + " |")
            Path(path).write_text("\n".join(lines) + "\n", encoding="utf-8")
        else:
            Path(path).write_text(json.dumps(safe, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
        AuditTrail(self.settings).append("response_drift_exported", {"file": Path(path).name, "format": suffix.lstrip("."), "changes": len(safe["changes"])})


class OperationsDialog(QDialog):
    """Advanced local operations: no action is sent to Zscaler without Send."""
    def __init__(self, window, initial_tab=0):
        super().__init__(window)
        self.window = window
        self.settings = QSettings("Zscaler", "APIClient")
        self.setWindowTitle(self.tr("Operations Center"))
        self.resize(1120, 760)
        layout = QVBoxLayout(self)
        self.active_profile = active_environment_profile(self.settings)
        scope_bar = QHBoxLayout()
        scope_bar.addWidget(QLabel(self.tr("Data scope:")))
        self.data_scope = QComboBox()
        self.data_scope.addItem(
            self.tr("Active environment: {name}").format(name=environment_profile_display_name(self, self.active_profile)),
            self.active_profile["id"],
        )
        if self.settings.value("ui/mode", "basic") != "basic":
            self.data_scope.addItem(self.tr("All environments (cross-tenant overview)"), "*")
        scope_bar.addWidget(self.data_scope)
        self.scope_note = QLabel(self.tr("Analytics are tenant-isolated by default. Cross-tenant scope is explicit and available in Advanced mode."))
        self.scope_note.setObjectName("mutedLabel"); self.scope_note.setWordWrap(True); scope_bar.addWidget(self.scope_note, 1)
        layout.addLayout(scope_bar)
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
        self.dashboard_trend = HighPerformanceLineChart(axis_label=self.tr("Latency"), units="ms")
        dashboard_layout.addWidget(QLabel(self.tr("Recent request latency (ms)")))
        dashboard_layout.addWidget(self.dashboard_trend)
        self.dashboard_events = QTableWidget(0, 4); self.dashboard_events.setHorizontalHeaderLabels([self.tr("Time"), self.tr("Environment"), self.tr("Activity"), self.tr("Status")]); self.dashboard_events.horizontalHeader().setStretchLastSection(True); self.dashboard_events.setEditTriggers(QTableWidget.EditTrigger.NoEditTriggers)
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
        self.webhook_url = QLineEdit(secure_webhook_endpoint(self.settings)); self.webhook_url.setPlaceholderText("https://hooks.example.invalid/..."); self.webhook_url.setEchoMode(QLineEdit.EchoMode.Password)
        self.webhook_visible = QCheckBox(self.tr("Show webhook endpoint")); self.webhook_visible.toggled.connect(lambda visible: self.webhook_url.setEchoMode(QLineEdit.EchoMode.Normal if visible else QLineEdit.EchoMode.Password))
        webhook_editor = QWidget(); webhook_editor_layout = QHBoxLayout(webhook_editor); webhook_editor_layout.setContentsMargins(0, 0, 0, 0); webhook_editor_layout.addWidget(self.webhook_url, 1); webhook_editor_layout.addWidget(self.webhook_visible)
        self.plugin_path = QLineEdit(str(self.settings.value("automation/local_plugin", ""))); self.plugin_path.setPlaceholderText(self.tr("Absolute path to a reviewed local Python automation"))
        governance_layout.addRow(self.tr("Local role:"), self.role_choice); governance_layout.addRow(self.tr("Alert threshold (errors):"), self.alert_threshold); governance_layout.addRow(self.tr("Webhook endpoint (stored in system keychain):"), webhook_editor); governance_layout.addRow(self.tr("Local automation:"), self.plugin_path)
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
        self.siem_format = QComboBox(); self.siem_format.addItem(self.tr("JSON Lines (SIEM/SOAR)"), "jsonl"); self.siem_format.addItem("CEF", "cef"); self.siem_format.addItem("LEEF", "leef"); integration_buttons.addWidget(self.siem_format, 2, 0)
        export_siem = QPushButton(self.tr("Export masked security events")); export_siem.clicked.connect(self.export_security_events); integration_buttons.addWidget(export_siem, 2, 1)
        export_mcp = QPushButton(self.tr("Export read-only MCP manifest")); export_mcp.clicked.connect(self.export_mcp_manifest); integration_buttons.addWidget(export_mcp, 2, 2)
        export_terraform = QPushButton(self.tr("Export Terraform review handoff")); export_terraform.clicked.connect(self.export_terraform_handoff); integration_buttons.addWidget(export_terraform, 2, 3)
        for column in range(4): integration_buttons.setColumnStretch(column, 1)
        integrations_layout.addLayout(integration_buttons)
        integrations_layout.addWidget(QLabel(self.tr("Webhook delivery history")))
        self.webhook_history = QTableWidget(0, 4); self.webhook_history.setHorizontalHeaderLabels([self.tr("Time"), self.tr("Delivery"), self.tr("Status"), self.tr("Details")]); self.webhook_history.horizontalHeader().setStretchLastSection(True); self.webhook_history.setEditTriggers(QTableWidget.EditTrigger.NoEditTriggers); self.webhook_history.setMaximumHeight(180); integrations_layout.addWidget(self.webhook_history)
        self.tabs.addTab(integrations_page, self.tr("Integrations"))

        audit_page = QWidget(); audit_layout = QVBoxLayout(audit_page)
        self.audit_timeline = QTableWidget(0, 4); self.audit_timeline.setHorizontalHeaderLabels([self.tr("Time"), self.tr("Environment"), self.tr("Event"), self.tr("Details")]); self.audit_timeline.horizontalHeader().setStretchLastSection(True); self.audit_timeline.setEditTriggers(QTableWidget.EditTrigger.NoEditTriggers); audit_layout.addWidget(self.audit_timeline)
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
        incident_intro = QLabel(self.tr("Correlate retained local activity with every object in the current masked REST or GraphQL response. Paths are investigation hypotheses, never proof of compromise, and prepared chains never run automatically.")); incident_intro.setWordWrap(True); incident_layout.addWidget(incident_intro)
        chain_controls = QHBoxLayout(); chain_controls.addWidget(QLabel(self.tr("Investigation:")))
        self.incident_type = QComboBox(); self.incident_type.addItem(self.tr("API failure investigation"), "failures"); self.incident_type.addItem(self.tr("Change activity review"), "changes"); self.incident_type.addItem(self.tr("Slow response investigation"), "performance"); chain_controls.addWidget(self.incident_type)
        chain_prepare = QPushButton(self.tr("Prepare investigation chain")); chain_prepare.clicked.connect(self.prepare_incident_chain); chain_controls.addWidget(chain_prepare)
        self.soc_include_response = QCheckBox(self.tr("Include current API/GraphQL response")); self.soc_include_response.setChecked(bool(getattr(self.window, "_last_response_exchange", None))); self.soc_include_response.setEnabled(bool(getattr(self.window, "_last_response_exchange", None))); chain_controls.addWidget(self.soc_include_response)
        correlate = QPushButton(self.tr("Correlate entities")); correlate.clicked.connect(self.refresh_soc_graph); chain_controls.addWidget(correlate); chain_controls.addStretch(); incident_layout.addLayout(chain_controls)
        self.incident_chain = QPlainTextEdit(); self.incident_chain.setReadOnly(True); self.incident_chain.setMaximumHeight(120); self.incident_chain.setVisible(False); incident_layout.addWidget(self.incident_chain)
        self.investigation_views = QTabWidget(); incident_layout.addWidget(self.investigation_views)
        timeline_page = QWidget(); timeline_layout = QVBoxLayout(timeline_page)
        self.incident_empty_art = VisualAssetLabel("assets/visuals/investigation-empty-state.png", 165)
        self.incident_empty_art.setAccessibleName(self.tr("Security investigation evidence map")); timeline_layout.addWidget(self.incident_empty_art)
        self.incident_timeline = QTableWidget(0, 4); self.incident_timeline.setHorizontalHeaderLabels([self.tr("Time"), self.tr("Source"), self.tr("Severity"), self.tr("Evidence")]); self.incident_timeline.horizontalHeader().setStretchLastSection(True); self.incident_timeline.setEditTriggers(QTableWidget.EditTrigger.NoEditTriggers); timeline_layout.addWidget(self.incident_timeline)
        self.investigation_views.addTab(timeline_page, self.tr("Evidence timeline"))

        graph_page = QWidget(); graph_layout = QVBoxLayout(graph_page)
        graph_cards = QGridLayout(); self.soc_cards = {}
        for column, (key, label) in enumerate((("entities", self.tr("Entities")), ("relationships", self.tr("Relationships")), ("attack_paths", self.tr("Potential paths")), ("high_risk", self.tr("High-risk entities")))):
            card = QFrame(); card.setObjectName("metricCard"); card_layout = QVBoxLayout(card); title = QLabel(label); title.setObjectName("mutedLabel"); card_layout.addWidget(title)
            value = QLabel("—"); value.setObjectName("sectionTitle"); font = value.font(); font.setPointSize(18); font.setBold(True); value.setFont(font); card_layout.addWidget(value); self.soc_cards[key] = value; graph_cards.addWidget(card, 0, column)
        graph_layout.addLayout(graph_cards)
        filter_row = QHBoxLayout(); filter_row.addWidget(QLabel(self.tr("Filter entities:"))); self.soc_entity_filter = QLineEdit(); self.soc_entity_filter.setPlaceholderText(self.tr("Name, type, risk, or evidence source")); self.soc_entity_filter.textChanged.connect(self.filter_soc_entities); filter_row.addWidget(self.soc_entity_filter, 1); graph_layout.addLayout(filter_row)
        self.soc_graph = SocEntityGraph(); self.soc_graph.setAccessibleName(self.tr("SOC entity and potential attack-path graph")); self.soc_graph.nodeSelected.connect(self.show_soc_entity); graph_layout.addWidget(self.soc_graph)
        self.soc_entity_detail = QLabel(self.tr("Select an entity to inspect its local evidence.")); self.soc_entity_detail.setWordWrap(True); self.soc_entity_detail.setObjectName("mutedLabel"); graph_layout.addWidget(self.soc_entity_detail)
        self.soc_paths = QTableWidget(0, 5); self.soc_paths.setHorizontalHeaderLabels([self.tr("Severity"), self.tr("Source"), self.tr("Target"), self.tr("Hops"), self.tr("Explanation")]); self.soc_paths.horizontalHeader().setStretchLastSection(True); self.soc_paths.setEditTriggers(QTableWidget.EditTrigger.NoEditTriggers); self.soc_paths.setSelectionBehavior(QTableWidget.SelectionBehavior.SelectRows); self.soc_paths.setMaximumHeight(170); self.soc_paths.cellClicked.connect(self.highlight_soc_path); graph_layout.addWidget(self.soc_paths)
        self.investigation_views.addTab(graph_page, self.tr("Entity graph"))

        signals_page = QWidget(); signals_layout = QVBoxLayout(signals_page)
        signal_note = QLabel(self.tr("Explainable signals are derived only from retained local evidence and the selected response. Validate them against authoritative product telemetry.")); signal_note.setWordWrap(True); signals_layout.addWidget(signal_note)
        self.soc_signals = QTableWidget(0, 4); self.soc_signals.setHorizontalHeaderLabels([self.tr("Severity"), self.tr("Signal"), self.tr("Entity"), self.tr("Explanation")]); self.soc_signals.horizontalHeader().setStretchLastSection(True); self.soc_signals.setEditTriggers(QTableWidget.EditTrigger.NoEditTriggers); signals_layout.addWidget(self.soc_signals)
        self.soc_signals_tab_index = self.investigation_views.addTab(signals_page, self.tr("Correlated signals"))
        self.soc_include_response.toggled.connect(lambda _checked: self.refresh_soc_graph(record_audit=False))
        incident_actions = QHBoxLayout(); incident_refresh = QPushButton(self.tr("Refresh investigation")); incident_refresh.clicked.connect(self.refresh_incident); incident_actions.addWidget(incident_refresh)
        incident_export = QPushButton(self.tr("Export incident evidence")); incident_export.clicked.connect(self.export_incident_evidence); incident_actions.addWidget(incident_export); incident_actions.addStretch(); incident_layout.addLayout(incident_actions)
        graph_export = QPushButton(self.tr("Export entity graph")); graph_export.clicked.connect(self.export_soc_graph); incident_actions.insertWidget(2, graph_export)
        self.incident_tab_index = self.tabs.addTab(incident_page, self.tr("Incident investigation"))

        journey_page = QWidget(); journey_layout = QVBoxLayout(journey_page)
        journey_intro = QLabel(self.tr("Trace observed digital experience from user and device through network and service edge to the application. The parser consumes the complete current REST or GraphQL response, marks missing stages explicitly, and never queries the tenant automatically.")); journey_intro.setWordWrap(True); journey_layout.addWidget(journey_intro)
        journey_cards = QGridLayout(); self.journey_cards = {}
        for column, (key, label) in enumerate((("overall_score", self.tr("Experience score")), ("latency_ms", self.tr("Latency")), ("packet_loss_percent", self.tr("Packet loss")), ("issues", self.tr("Journey issues")))):
            card = QFrame(); card.setObjectName("metricCard"); card_layout = QVBoxLayout(card); title = QLabel(label); title.setObjectName("mutedLabel"); card_layout.addWidget(title)
            value = QLabel("—"); value.setObjectName("sectionTitle"); font = value.font(); font.setPointSize(18); font.setBold(True); value.setFont(font); card_layout.addWidget(value); self.journey_cards[key] = value; journey_cards.addWidget(card, 0, column)
        journey_layout.addLayout(journey_cards)
        self.journey_graph = ExperienceJourneyGraph(); self.journey_graph.setAccessibleName(self.tr("Observed user-to-application experience journey")); journey_layout.addWidget(self.journey_graph)
        journey_split = QSplitter(Qt.Orientation.Horizontal)
        journey_left = QWidget(); journey_left_layout = QVBoxLayout(journey_left); journey_left_layout.setContentsMargins(0, 0, 0, 0)
        journey_metric_row = QHBoxLayout(); journey_metric_row.addWidget(QLabel(self.tr("Trend metric:"))); self.journey_metric = QComboBox(); self.journey_metric.currentIndexChanged.connect(self.render_journey_trend); journey_metric_row.addWidget(self.journey_metric, 1); journey_left_layout.addLayout(journey_metric_row)
        self.journey_trend = HighPerformanceLineChart(axis_label=self.tr("Observed value")); journey_left_layout.addWidget(self.journey_trend); journey_split.addWidget(journey_left)
        journey_right = QWidget(); journey_right_layout = QVBoxLayout(journey_right); journey_right_layout.setContentsMargins(0, 0, 0, 0)
        self.journey_issues = QTableWidget(0, 4); self.journey_issues.setHorizontalHeaderLabels([self.tr("Severity"), self.tr("Stage"), self.tr("Metric"), self.tr("Explanation")]); self.journey_issues.horizontalHeader().setStretchLastSection(True); self.journey_issues.setEditTriggers(QTableWidget.EditTrigger.NoEditTriggers); journey_right_layout.addWidget(self.journey_issues); journey_split.addWidget(journey_right); journey_split.setSizes([520, 560]); journey_layout.addWidget(journey_split)
        self.journey_note = QLabel(); self.journey_note.setObjectName("mutedLabel"); self.journey_note.setWordWrap(True); journey_layout.addWidget(self.journey_note)
        journey_actions = QHBoxLayout(); refresh_journey = QPushButton(self.tr("Analyze current experience response")); refresh_journey.clicked.connect(self.refresh_experience_journey); journey_actions.addWidget(refresh_journey)
        export_journey = QPushButton(self.tr("Export masked journey")); export_journey.clicked.connect(self.export_experience_journey); journey_actions.addWidget(export_journey); journey_actions.addStretch(); journey_layout.addLayout(journey_actions)
        self.journey_tab_index = self.tabs.addTab(journey_page, self.tr("Experience journey"))

        exposure_page = QWidget(); exposure_layout = QVBoxLayout(exposure_page)
        exposure_intro = QLabel(self.tr("Inspect the complete current REST or GraphQL response for explicit internet exposure, vulnerability severity and broad or write-capable access. Findings are local hypotheses and deception suggestions are never deployed automatically.")); exposure_intro.setWordWrap(True); exposure_layout.addWidget(exposure_intro)
        exposure_cards = QGridLayout(); self.exposure_cards = {}
        for column, (key, label) in enumerate((("exposed_assets", self.tr("Exposure signals")), ("high_risk_assets", self.tr("High-risk assets")), ("permission_findings", self.tr("Access findings")), ("high_permissions", self.tr("Broad privileges")))):
            card = QFrame(); card.setObjectName("metricCard"); card_layout = QVBoxLayout(card); heading = QLabel(label); heading.setObjectName("mutedLabel"); card_layout.addWidget(heading); value = QLabel("—"); value.setObjectName("sectionTitle"); card_layout.addWidget(value); self.exposure_cards[key] = value; exposure_cards.addWidget(card, 0, column)
        exposure_layout.addLayout(exposure_cards)
        exposure_split = QSplitter(Qt.Orientation.Horizontal)
        self.exposure_assets = QTableWidget(0, 4); self.exposure_assets.setHorizontalHeaderLabels([self.tr("Severity"), self.tr("Asset"), self.tr("Risk score"), self.tr("Observed factors")]); self.exposure_assets.horizontalHeader().setStretchLastSection(True); self.exposure_assets.setEditTriggers(QTableWidget.EditTrigger.NoEditTriggers); exposure_split.addWidget(self.exposure_assets)
        self.permission_findings = QTableWidget(0, 4); self.permission_findings.setHorizontalHeaderLabels([self.tr("Severity"), self.tr("Subject"), self.tr("Permission field"), self.tr("Explanation")]); self.permission_findings.horizontalHeader().setStretchLastSection(True); self.permission_findings.setEditTriggers(QTableWidget.EditTrigger.NoEditTriggers); exposure_split.addWidget(self.permission_findings); exposure_layout.addWidget(exposure_split)
        exposure_layout.addWidget(QLabel(self.tr("Defensive deception opportunities"))); self.deception_recommendations = QPlainTextEdit(); self.deception_recommendations.setReadOnly(True); self.deception_recommendations.setMaximumHeight(115); exposure_layout.addWidget(self.deception_recommendations)
        exposure_actions = QHBoxLayout(); analyze_exposure = QPushButton(self.tr("Analyze current exposure and access")); analyze_exposure.clicked.connect(self.refresh_exposure_analysis); exposure_actions.addWidget(analyze_exposure); export_exposure = QPushButton(self.tr("Export masked exposure evidence")); export_exposure.clicked.connect(self.export_exposure_analysis); exposure_actions.addWidget(export_exposure); exposure_actions.addStretch(); exposure_layout.addLayout(exposure_actions)
        self.notebook_group = QGroupBox(self.tr("Investigation notebook")); notebook_layout = QVBoxLayout(self.notebook_group); notebook_form = QHBoxLayout(); self.note_title = QLineEdit(); self.note_title.setPlaceholderText(self.tr("Note title")); notebook_form.addWidget(self.note_title); self.note_tags = QLineEdit(); self.note_tags.setPlaceholderText(self.tr("Comma-separated tags")); notebook_form.addWidget(self.note_tags); notebook_layout.addLayout(notebook_form); self.note_body = QPlainTextEdit(); self.note_body.setPlaceholderText(self.tr("Masked investigation observations, decisions and follow-up")); self.note_body.setMaximumHeight(100); notebook_layout.addWidget(self.note_body)
        note_actions = QHBoxLayout(); save_note = QPushButton(self.tr("Save local note")); save_note.clicked.connect(self.save_investigation_note); note_actions.addWidget(save_note); export_notes = QPushButton(self.tr("Export masked notebook")); export_notes.clicked.connect(self.export_investigation_notebook); note_actions.addWidget(export_notes); note_actions.addStretch(); notebook_layout.addLayout(note_actions); self.note_table = QTableWidget(0, 4); self.note_table.setHorizontalHeaderLabels([self.tr("Time"), self.tr("Title"), self.tr("Tags"), self.tr("Preview")]); self.note_table.horizontalHeader().setStretchLastSection(True); self.note_table.setEditTriggers(QTableWidget.EditTrigger.NoEditTriggers); self.note_table.setMaximumHeight(145); notebook_layout.addWidget(self.note_table); exposure_layout.addWidget(self.notebook_group)
        self.exposure_tab_index = self.tabs.addTab(exposure_page, self.tr("Exposure & access")); self._last_exposure_analysis = {}; self.refresh_exposure_analysis(record_audit=False); self.refresh_investigation_notes()

        detection_page = QWidget(); detection_layout = QVBoxLayout(detection_page)
        detection_intro = QLabel(self.tr("Build and test explainable detections against retained local request history. Rules use a bounded declarative grammar—no Python, eval, tenant writes, network calls, or automatic remediation.")); detection_intro.setWordWrap(True); detection_layout.addWidget(detection_intro)
        detection_controls = QHBoxLayout(); detection_controls.addWidget(QLabel(self.tr("Template:"))); self.detection_template = QComboBox()
        template_labels = {"server_errors": self.tr("Server errors"), "rate_limits": self.tr("Rate-limit responses"), "high_latency": self.tr("High request latency"), "write_activity": self.tr("Write activity"), "authentication_failures": self.tr("Authentication failures")}
        for key in DETECTION_TEMPLATES: self.detection_template.addItem(template_labels[key], key)
        self.detection_template.currentIndexChanged.connect(self.load_detection_template); detection_controls.addWidget(self.detection_template)
        detection_controls.addWidget(QLabel(self.tr("Anomaly sensitivity:"))); self.detection_sensitivity = QComboBox(); self.detection_sensitivity.addItem(self.tr("Relaxed"), "relaxed"); self.detection_sensitivity.addItem(self.tr("Balanced"), "balanced"); self.detection_sensitivity.addItem(self.tr("Sensitive"), "sensitive"); self.detection_sensitivity.setCurrentIndex(1); detection_controls.addWidget(self.detection_sensitivity); detection_controls.addStretch(); detection_layout.addLayout(detection_controls)
        self.detection_rule = QPlainTextEdit(); self.detection_rule.setMaximumHeight(145); self.detection_rule.setPlaceholderText(self.tr("Declarative detection rule JSON")); detection_layout.addWidget(self.detection_rule)
        detection_actions = QHBoxLayout(); validate_detection = QPushButton(self.tr("Validate rule")); validate_detection.clicked.connect(self.validate_detection_lab); detection_actions.addWidget(validate_detection)
        run_detection = QPushButton(self.tr("Run local detection")); run_detection.clicked.connect(self.run_detection_lab); detection_actions.addWidget(run_detection)
        run_anomaly = QPushButton(self.tr("Analyze adaptive anomalies")); run_anomaly.clicked.connect(self.refresh_adaptive_anomalies); detection_actions.addWidget(run_anomaly)
        export_detection = QPushButton(self.tr("Export masked detection evidence")); export_detection.clicked.connect(self.export_detection_lab); detection_actions.addWidget(export_detection); detection_actions.addStretch(); detection_layout.addLayout(detection_actions)
        self.detection_status = QLabel(); self.detection_status.setWordWrap(True); self.detection_status.setObjectName("mutedLabel"); detection_layout.addWidget(self.detection_status)
        detection_split = QSplitter(Qt.Orientation.Horizontal)
        self.detection_matches = QTableWidget(0, 6); self.detection_matches.setHorizontalHeaderLabels([self.tr("Time"), self.tr("Method"), self.tr("URL"), self.tr("Status"), self.tr("Duration"), self.tr("Environment")]); self.detection_matches.horizontalHeader().setStretchLastSection(True); self.detection_matches.setEditTriggers(QTableWidget.EditTrigger.NoEditTriggers); detection_split.addWidget(self.detection_matches)
        anomaly_panel = QWidget(); anomaly_layout = QVBoxLayout(anomaly_panel); anomaly_layout.setContentsMargins(0, 0, 0, 0)
        self.anomaly_chart = NumericBarChart(); self.anomaly_chart.setMaximumHeight(160); anomaly_layout.addWidget(self.anomaly_chart)
        self.anomaly_findings = QTableWidget(0, 4); self.anomaly_findings.setHorizontalHeaderLabels([self.tr("Severity"), self.tr("Endpoint"), self.tr("Observed"), self.tr("Explanation")]); self.anomaly_findings.horizontalHeader().setStretchLastSection(True); self.anomaly_findings.setEditTriggers(QTableWidget.EditTrigger.NoEditTriggers); anomaly_layout.addWidget(self.anomaly_findings); detection_split.addWidget(anomaly_panel); detection_split.setSizes([600, 480]); detection_layout.addWidget(detection_split)
        self.detection_tab_index = self.tabs.addTab(detection_page, self.tr("Detection lab"))
        self._last_detection_result = {}; self._last_adaptive_result = {}; self.load_detection_template(); self.refresh_adaptive_anomalies(record_audit=False)

        playbook_page = QWidget(); playbook_layout = QVBoxLayout(playbook_page)
        playbook_intro = QLabel(self.tr("Use guided, locally tracked response and recovery checklists. A completed step records only operator intent in the local audit trail; it never changes a tenant or closes an authoritative incident.")); playbook_intro.setWordWrap(True); playbook_layout.addWidget(playbook_intro)
        playbook_controls = QHBoxLayout(); playbook_controls.addWidget(QLabel(self.tr("Playbook:"))); self.playbook_choice = QComboBox()
        playbook_labels = {"api_outage": self.tr("API/service disruption"), "policy_change": self.tr("High-risk policy change"), "experience_degradation": self.tr("Digital experience degradation"), "credential_exposure": self.tr("Possible credential exposure"), "ransomware_containment": self.tr("Ransomware containment support")}
        for key in PLAYBOOK_TEMPLATES: self.playbook_choice.addItem(playbook_labels[key], key)
        self.playbook_choice.currentIndexChanged.connect(self.refresh_playbook); playbook_controls.addWidget(self.playbook_choice, 1)
        complete_step = QPushButton(self.tr("Mark selected step complete")); complete_step.clicked.connect(self.complete_playbook_step); playbook_controls.addWidget(complete_step)
        export_playbook = QPushButton(self.tr("Export masked playbook evidence")); export_playbook.clicked.connect(self.export_playbook); playbook_controls.addWidget(export_playbook); playbook_layout.addLayout(playbook_controls)
        self.playbook_progress = QProgressBar(); self.playbook_progress.setRange(0, 100); playbook_layout.addWidget(self.playbook_progress)
        self.playbook_steps = QTableWidget(0, 4); self.playbook_steps.setHorizontalHeaderLabels([self.tr("Step"), self.tr("Status"), self.tr("Guidance"), self.tr("Local evidence")]); self.playbook_steps.horizontalHeader().setStretchLastSection(True); self.playbook_steps.setEditTriggers(QTableWidget.EditTrigger.NoEditTriggers); self.playbook_steps.setSelectionBehavior(QTableWidget.SelectionBehavior.SelectRows); playbook_layout.addWidget(self.playbook_steps)
        self.api_planner_group = QGroupBox(self.tr("Smart API planner (review only)")); planner_layout = QVBoxLayout(self.api_planner_group)
        planner_intro = QLabel(self.tr("Describe a goal to rank documented Automation Hub operations deterministically. Read operations are preferred; tenant values are never guessed and nothing runs automatically.")); planner_intro.setWordWrap(True); planner_layout.addWidget(planner_intro)
        planner_controls = QHBoxLayout(); self.api_plan_goal = QLineEdit(); self.api_plan_goal.setPlaceholderText(self.tr("Example: investigate slow ZDX application experience")); planner_controls.addWidget(self.api_plan_goal, 1)
        plan_api = QPushButton(self.tr("Plan documented operations")); plan_api.clicked.connect(self.build_smart_api_plan); planner_controls.addWidget(plan_api)
        copy_plan = QPushButton(self.tr("Copy safe reads to API Chains")); copy_plan.clicked.connect(self.copy_api_plan_to_chain); planner_controls.addWidget(copy_plan); planner_layout.addLayout(planner_controls)
        self.api_plan_summary = QLabel(); self.api_plan_summary.setWordWrap(True); self.api_plan_summary.setObjectName("mutedLabel"); planner_layout.addWidget(self.api_plan_summary)
        self.api_plan_table = QTableWidget(0, 5); self.api_plan_table.setHorizontalHeaderLabels([self.tr("Score"), self.tr("Product"), self.tr("Operation"), self.tr("Method"), self.tr("URL")]); self.api_plan_table.horizontalHeader().setStretchLastSection(True); self.api_plan_table.setEditTriggers(QTableWidget.EditTrigger.NoEditTriggers); self.api_plan_table.setMaximumHeight(190); planner_layout.addWidget(self.api_plan_table); playbook_layout.addWidget(self.api_planner_group)
        self.playbook_tab_index = self.tabs.addTab(playbook_page, self.tr("Response playbooks")); self._last_playbook = {}; self._last_api_plan = {}; self.refresh_playbook(record_audit=False)

        change_page = QWidget(); change_layout = QVBoxLayout(change_page)
        change_intro = QLabel(self.tr("Create a local review from Policy diff. Approval records intent only; no policy, Terraform, or Git change is applied automatically.")); change_intro.setWordWrap(True); change_layout.addWidget(change_intro)
        change_form = QFormLayout(); self.change_ticket = QLineEdit(); self.change_ticket.setPlaceholderText(self.tr("Change ticket or reference")); self.change_owner = QLineEdit(); self.change_owner.setPlaceholderText(self.tr("Change owner")); self.change_reviewer = QLineEdit(); self.change_reviewer.setPlaceholderText(self.tr("Independent reviewer")); change_form.addRow(self.tr("Reference:"), self.change_ticket); change_form.addRow(self.tr("Owner:"), self.change_owner); change_form.addRow(self.tr("Reviewer:"), self.change_reviewer); change_layout.addLayout(change_form)
        safety_checks = QHBoxLayout(); self.change_maintenance = QCheckBox(self.tr("Maintenance window confirmed")); safety_checks.addWidget(self.change_maintenance); self.change_simulated = QCheckBox(self.tr("Local simulation reviewed")); safety_checks.addWidget(self.change_simulated); self.change_rollback_ready = QCheckBox(self.tr("Rollback prepared")); safety_checks.addWidget(self.change_rollback_ready); safety_checks.addStretch(); change_layout.addLayout(safety_checks); self._change_approved = False
        self.change_risk = QLabel(); self.change_risk.setObjectName("sectionTitle"); change_layout.addWidget(self.change_risk)
        self.change_gates = QTableWidget(0, 3); self.change_gates.setHorizontalHeaderLabels([self.tr("Gate"), self.tr("Required"), self.tr("Status")]); self.change_gates.horizontalHeader().setStretchLastSection(True); self.change_gates.setEditTriggers(QTableWidget.EditTrigger.NoEditTriggers); self.change_gates.setMaximumHeight(175); change_layout.addWidget(self.change_gates)
        self.change_review = QPlainTextEdit(); self.change_review.setReadOnly(True); change_layout.addWidget(self.change_review)
        change_controls = QHBoxLayout(); prepare_change = QPushButton(self.tr("Prepare change review")); prepare_change.clicked.connect(self.prepare_change_review); change_controls.addWidget(prepare_change)
        approve_change = QPushButton(self.tr("Record local approval")); approve_change.clicked.connect(self.approve_change_review); change_controls.addWidget(approve_change)
        git_export = QPushButton(self.tr("Export Git review")); git_export.clicked.connect(lambda: self.export_change_review("git")); change_controls.addWidget(git_export)
        rollback_export = QPushButton(self.tr("Export rollback plan")); rollback_export.clicked.connect(lambda: self.export_change_review("rollback")); change_controls.addWidget(rollback_export); change_controls.addStretch(); change_layout.addLayout(change_controls)
        rollback_verify = QPushButton(self.tr("Verify rollback artifact")); rollback_verify.clicked.connect(self.verify_rollback_artifact); change_controls.insertWidget(4, rollback_verify)
        self.change_tab_index = self.tabs.addTab(change_page, self.tr("Change control"))

        assurance_page = QWidget(); assurance_layout = QVBoxLayout(assurance_page)
        assurance_intro = QLabel(self.tr("Continuously evaluate a transparent local evidence baseline. Framework mappings are navigational aids—not certification—and no tenant query or remediation runs automatically.")); assurance_intro.setWordWrap(True); assurance_layout.addWidget(assurance_intro)
        assurance_controls = QHBoxLayout(); assurance_controls.addWidget(QLabel(self.tr("Framework view:")))
        self.assurance_framework = QComboBox(); self.assurance_framework.addItem(self.tr("All local controls"), "all"); self.assurance_framework.addItem(self.tr("NIST CSF 2.0 functions"), "nist"); self.assurance_framework.addItem(self.tr("CISA Zero Trust pillars"), "cisa"); self.assurance_framework.currentIndexChanged.connect(self.render_assurance); assurance_controls.addWidget(self.assurance_framework)
        self.assurance_use_policy = QCheckBox(self.tr("Include proposed policy from Policy diff")); self.assurance_use_policy.setChecked(True); assurance_controls.addWidget(self.assurance_use_policy)
        run_assurance = QPushButton(self.tr("Evaluate now")); run_assurance.clicked.connect(self.refresh_assurance); assurance_controls.addWidget(run_assurance); assurance_controls.addStretch(); assurance_layout.addLayout(assurance_controls)
        assurance_cards = QGridLayout(); self.assurance_cards = {}
        for column, (key, label) in enumerate((("score", self.tr("Assurance score")), ("passed", self.tr("Passed")), ("failed", self.tr("Failed")), ("not_evaluated", self.tr("Not evaluated")), ("coverage_percent", self.tr("Evidence coverage")))):
            card = QFrame(); card.setObjectName("metricCard"); card_layout = QVBoxLayout(card); title = QLabel(label); title.setObjectName("mutedLabel"); card_layout.addWidget(title)
            value = QLabel("—"); value.setObjectName("sectionTitle"); font = value.font(); font.setPointSize(18); font.setBold(True); value.setFont(font); card_layout.addWidget(value); self.assurance_cards[key] = value; assurance_cards.addWidget(card, 0, column)
        assurance_layout.addLayout(assurance_cards)
        assurance_split = QSplitter(Qt.Orientation.Horizontal)
        assurance_left = QWidget(); assurance_left_layout = QVBoxLayout(assurance_left); assurance_left_layout.setContentsMargins(0, 0, 0, 0)
        self.assurance_table = QTableWidget(0, 7); self.assurance_table.setHorizontalHeaderLabels([self.tr("Control"), self.tr("Status"), self.tr("Severity"), self.tr("Control objective"), self.tr("Evidence"), self.tr("Framework mapping"), self.tr("Recommendation")]); self.assurance_table.horizontalHeader().setStretchLastSection(True); self.assurance_table.setEditTriggers(QTableWidget.EditTrigger.NoEditTriggers); self.assurance_table.setSelectionBehavior(QTableWidget.SelectionBehavior.SelectRows); assurance_left_layout.addWidget(self.assurance_table); assurance_split.addWidget(assurance_left)
        assurance_right = QWidget(); assurance_right_layout = QVBoxLayout(assurance_right); assurance_right_layout.setContentsMargins(0, 0, 0, 0); assurance_right_layout.addWidget(QLabel(self.tr("Leadership narrative")))
        self.assurance_narrative = QPlainTextEdit(); self.assurance_narrative.setReadOnly(True); assurance_right_layout.addWidget(self.assurance_narrative)
        self.assurance_trend = HighPerformanceLineChart(axis_label=self.tr("Score"), fixed_range=(0, 100)); self.assurance_trend.setMaximumHeight(180); assurance_right_layout.addWidget(self.assurance_trend); assurance_split.addWidget(assurance_right); assurance_split.setSizes([720, 340]); assurance_layout.addWidget(assurance_split)
        baseline_controls = QHBoxLayout(); baseline_controls.addWidget(QLabel(self.tr("Local baseline:"))); self.assurance_baseline = QComboBox(); baseline_controls.addWidget(self.assurance_baseline, 1)
        self.assurance_save_baseline = QPushButton(self.tr("Save assessment baseline")); self.assurance_save_baseline.clicked.connect(self.save_assurance_baseline); baseline_controls.addWidget(self.assurance_save_baseline)
        self.assurance_sign = QPushButton(self.tr("Export signed evidence")); self.assurance_sign.clicked.connect(self.export_signed_assurance); baseline_controls.addWidget(self.assurance_sign)
        self.assurance_verify = QPushButton(self.tr("Verify signed evidence")); self.assurance_verify.clicked.connect(self.verify_signed_assurance); baseline_controls.addWidget(self.assurance_verify); assurance_layout.addLayout(baseline_controls)
        self.assurance_status = QLabel(); self.assurance_status.setWordWrap(True); self.assurance_status.setObjectName("mutedLabel"); assurance_layout.addWidget(self.assurance_status)
        self.assurance_tab_index = self.tabs.addTab(assurance_page, self.tr("Continuous assurance"))

        reports_page = QWidget(); reports_layout = QVBoxLayout(reports_page)
        reports_intro = QLabel(self.tr("Generate local, redacted reports for leadership, SOC, or operations. Reports contain no credentials and are not sent automatically.")); reports_intro.setWordWrap(True); reports_layout.addWidget(reports_intro)
        report_controls = QHBoxLayout(); report_controls.addWidget(QLabel(self.tr("Report type:")))
        self.report_type = QComboBox(); self.report_type.addItem(self.tr("CISO security summary"), "ciso"); self.report_type.addItem(self.tr("SOC investigation summary"), "soc"); self.report_type.addItem(self.tr("Operations health summary"), "operations"); self.report_type.addItem(self.tr("User risk report (current response)"), "user_risk"); report_controls.addWidget(self.report_type)
        report_generate = QPushButton(self.tr("Generate report")); report_generate.clicked.connect(self.generate_report); report_controls.addWidget(report_generate); report_controls.addStretch(); reports_layout.addLayout(report_controls)
        report_banner = VisualAssetLabel("assets/visuals/security-report-banner.png", 120, crop=True)
        report_banner.setAccessibleName(self.tr("Security posture report artwork")); reports_layout.addWidget(report_banner)
        self.report_chart = NumericBarChart(); reports_layout.addWidget(self.report_chart)
        self.report_chart.activated.connect(self._drill_into_report_metric)
        self.report_preview = QPlainTextEdit(); self.report_preview.setReadOnly(True); reports_layout.addWidget(self.report_preview)
        report_actions = QHBoxLayout(); report_markdown = QPushButton(self.tr("Export report as Markdown")); report_markdown.clicked.connect(lambda: self.export_report("markdown")); report_actions.addWidget(report_markdown)
        report_json = QPushButton(self.tr("Export report as JSON")); report_json.clicked.connect(lambda: self.export_report("json")); report_actions.addWidget(report_json); report_actions.addStretch(); reports_layout.addLayout(report_actions)
        report_html = QPushButton(self.tr("Export visual report as HTML")); report_html.clicked.connect(lambda: self.export_report("html")); report_actions.insertWidget(2, report_html)
        reports_layout.addWidget(QLabel(self.tr("Scheduled reports")))
        self.report_schedules = QTableWidget(0, 7)
        self.report_schedules.setHorizontalHeaderLabels([self.tr("Name"), self.tr("Environment"), self.tr("Type"), self.tr("Cadence"), self.tr("Next run"), self.tr("Mode"), self.tr("Status")])
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
        chain_intro = QLabel(self.tr("Run a reviewed sequence against the active authenticated environment. Chains are limited to 20 steps, stay on the selected product host, and can reference earlier JSON values with {{stepId.path.0.value}}. Every run requires approval.")); chain_intro.setWordWrap(True); chain_layout.addWidget(chain_intro)
        chain_layout.addWidget(QLabel(self.tr("Chain JSON")))
        self.api_chain_input = QPlainTextEdit('[\n  {"id": "users", "method": "GET", "url": "/api/v1/users"}\n]')
        self.api_chain_input.setPlaceholderText(self.tr("A JSON list of API requests. Relative paths use the active product host; references can use only completed step IDs.")); chain_layout.addWidget(self.api_chain_input)
        self.api_chain_preview = QPlainTextEdit(); self.api_chain_preview.setReadOnly(True); self.api_chain_preview.setMaximumHeight(130); chain_layout.addWidget(self.api_chain_preview)
        self.api_chain_chart = NumericBarChart(); self.api_chain_chart.setMaximumHeight(120); chain_layout.addWidget(self.api_chain_chart)
        self.api_chain_table = QTableWidget(0, 5); self.api_chain_table.setHorizontalHeaderLabels([self.tr("Step"), self.tr("Method"), self.tr("Status"), self.tr("Records"), self.tr("Duration")]); self.api_chain_table.horizontalHeader().setStretchLastSection(True); self.api_chain_table.setEditTriggers(QTableWidget.EditTrigger.NoEditTriggers); chain_layout.addWidget(self.api_chain_table)
        self.api_chain_result = QPlainTextEdit(); self.api_chain_result.setReadOnly(True); chain_layout.addWidget(self.api_chain_result)
        self._last_chain_results = []
        self.api_chain_stop_on_error = QCheckBox(self.tr("Stop after the first failed step")); self.api_chain_stop_on_error.setChecked(True); chain_layout.addWidget(self.api_chain_stop_on_error)
        chain_actions = QHBoxLayout(); validate_chain = QPushButton(self.tr("Validate chain")); validate_chain.clicked.connect(self.validate_api_chain); chain_actions.addWidget(validate_chain)
        run_chain = QPushButton(self.tr("Run approved chain")); run_chain.clicked.connect(self.run_api_chain); chain_actions.addWidget(run_chain)
        self.cancel_chain_btn = QPushButton(self.tr("Cancel chain")); self.cancel_chain_btn.setEnabled(False); self.cancel_chain_btn.clicked.connect(self.cancel_api_chain); chain_actions.addWidget(self.cancel_chain_btn)
        export_chain = QPushButton(self.tr("Export masked chain results")); export_chain.clicked.connect(self.export_api_chain); chain_actions.addWidget(export_chain); chain_actions.addStretch(); chain_layout.addLayout(chain_actions)
        self.chain_tab_index = self.tabs.addTab(chain_page, self.tr("API chains"))

        twin_page = QWidget(); twin_layout = QVBoxLayout(twin_page)
        twin_intro = QLabel(self.tr("Build a local digital twin of policy order. It explains decisions, highlights overlap and shadowing, estimates change blast radius, and never applies a policy.")); twin_intro.setWordWrap(True); twin_layout.addWidget(twin_intro)
        self.twin_policy_input = QPlainTextEdit('[\n  {"name":"Allow staff","conditions":{"group":"staff"},"action":"allow"},\n  {"name":"Block fallback","conditions":{},"action":"block"}\n]')
        self.twin_policy_input.setPlaceholderText(self.tr("Policy rules JSON or an object containing a rules list")); self.twin_policy_input.setMaximumHeight(135); twin_layout.addWidget(self.twin_policy_input)
        twin_controls = QHBoxLayout(); analyze_twin = QPushButton(self.tr("Analyze policy twin")); analyze_twin.clicked.connect(self.analyze_policy_twin); twin_controls.addWidget(analyze_twin)
        export_twin = QPushButton(self.tr("Export twin evidence")); export_twin.clicked.connect(self.export_policy_twin); twin_controls.addWidget(export_twin)
        self.twin_load_proposed = QPushButton(self.tr("Load proposed policy")); self.twin_load_proposed.clicked.connect(self.load_proposed_into_twin); twin_controls.addWidget(self.twin_load_proposed)
        twin_controls.addWidget(QLabel(self.tr("Test context:"))); self.twin_context = QLineEdit('{"group":"staff"}'); self.twin_context.setPlaceholderText(self.tr("Request context JSON")); twin_controls.addWidget(self.twin_context, 1)
        explain_twin = QPushButton(self.tr("Explain decision")); explain_twin.clicked.connect(self.explain_twin_decision); twin_controls.addWidget(explain_twin); twin_layout.addLayout(twin_controls)
        twin_cards = QGridLayout(); self.twin_cards = {}
        for column, (key, label) in enumerate((("rules", self.tr("Rules")), ("conflicts", self.tr("Conflicts")), ("shadowed", self.tr("Shadowed")), ("blast_radius", self.tr("Blast radius")))):
            card = QFrame(); card.setObjectName("metricCard"); card_layout = QVBoxLayout(card); muted = QLabel(label); muted.setObjectName("mutedLabel"); card_layout.addWidget(muted)
            value = QLabel("—"); value.setObjectName("sectionTitle"); value_font = value.font(); value_font.setPointSize(20); value_font.setBold(True); value.setFont(value_font); card_layout.addWidget(value); self.twin_cards[key] = value; twin_cards.addWidget(card, 0, column)
        twin_layout.addLayout(twin_cards)
        self.twin_graph = PolicyTwinGraph(); self.twin_graph.setAccessibleName(self.tr("Policy order and conflict graph")); twin_layout.addWidget(self.twin_graph)
        self.twin_explanation = QLabel(); self.twin_explanation.setWordWrap(True); self.twin_explanation.setObjectName("sectionTitle"); twin_layout.addWidget(self.twin_explanation)
        self.twin_findings = QTableWidget(0, 5); self.twin_findings.setHorizontalHeaderLabels([self.tr("Severity"), self.tr("Finding"), self.tr("Earlier rule"), self.tr("Later rule"), self.tr("Explanation")]); self.twin_findings.horizontalHeader().setStretchLastSection(True); self.twin_findings.setEditTriggers(QTableWidget.EditTrigger.NoEditTriggers); self.twin_findings.setMaximumHeight(170); twin_layout.addWidget(self.twin_findings)
        self.twin_snapshot_group = QGroupBox(self.tr("Policy time travel")); snapshot_layout = QHBoxLayout(self.twin_snapshot_group)
        self.twin_snapshot_choice = QComboBox(); snapshot_layout.addWidget(self.twin_snapshot_choice, 1)
        save_snapshot = QPushButton(self.tr("Save snapshot")); save_snapshot.clicked.connect(self.save_policy_snapshot); snapshot_layout.addWidget(save_snapshot)
        use_snapshot = QPushButton(self.tr("Use as baseline")); use_snapshot.clicked.connect(self.analyze_policy_twin); snapshot_layout.addWidget(use_snapshot)
        load_snapshot = QPushButton(self.tr("Load snapshot")); load_snapshot.clicked.connect(self.load_policy_snapshot); snapshot_layout.addWidget(load_snapshot)
        delete_snapshot = QPushButton(self.tr("Delete snapshot")); delete_snapshot.clicked.connect(self.delete_policy_snapshot); snapshot_layout.addWidget(delete_snapshot)
        twin_layout.addWidget(self.twin_snapshot_group)
        self.twin_tab_index = self.tabs.addTab(twin_page, self.tr("Policy twin"))
        self.data_scope.currentIndexChanged.connect(self._scope_changed)
        self._apply_operations_mode()
        close = QDialogButtonBox(QDialogButtonBox.StandardButton.Close); close.rejected.connect(self.reject); layout.addWidget(close)
        self.tabs.setCurrentIndex(max(0, min(initial_tab, self.tabs.count() - 1)))
        self.refresh_dashboard(); self.refresh_audit(); self.refresh_integrations(); self.refresh_webhook_history(); self.refresh_posture(); self.refresh_alerts(); self.refresh_incident(); self.refresh_experience_journey(record_audit=False); self.refresh_assurance_baselines(); self.refresh_assurance(record_audit=False); self.generate_report(); self.refresh_schedules(); self.refresh_policy_snapshots(); self.analyze_policy_twin(record_audit=False); self.configure_local_monitor(self.local_monitor_enabled.isChecked(), record_audit=False)

    def _apply_operations_mode(self):
        """Keep basic mode focused on situational awareness and investigation."""
        basic = self.settings.value("ui/mode", "basic") == "basic"
        advanced_tabs = (1, 2, 3, 4, 5, 6, self.change_tab_index, self.chain_tab_index, self.detection_tab_index)
        for index in advanced_tabs:
            self.tabs.setTabVisible(index, not basic)
        self.twin_snapshot_group.setVisible(not basic)
        self.twin_load_proposed.setVisible(not basic)
        self.investigation_views.setTabVisible(self.soc_signals_tab_index, not basic)
        self.assurance_save_baseline.setVisible(not basic); self.assurance_sign.setVisible(not basic); self.assurance_verify.setVisible(not basic)
        self.api_planner_group.setVisible(not basic)
        self.notebook_group.setVisible(not basic)

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
        self.refresh_dashboard(); self.refresh_posture(); self.refresh_alerts(); self.refresh_incident(); self.refresh_experience_journey(record_audit=False); self.refresh_exposure_analysis(record_audit=False); self.refresh_investigation_notes(); self.refresh_adaptive_anomalies(record_audit=False); self.refresh_assurance(record_audit=False); self.generate_report()

    def _scope_id(self) -> str:
        return str(self.data_scope.currentData() or self.active_profile["id"])

    def _scope_metadata(self) -> dict[str, str]:
        if self._scope_id() == "*":
            return environment_scope_metadata("*", self.tr("All environments"))
        return environment_scope_metadata(self.active_profile["id"], environment_profile_display_name(self, self.active_profile))

    def _scope_audit(self, scope: dict[str, str] | None = None) -> AuditTrail:
        metadata = scope or self._scope_metadata()
        return AuditTrail(self.settings, environment_id=metadata["environment_id"], environment_name=metadata["environment"])

    def _scoped_history(self) -> list[dict[str, Any]]:
        return environment_scope(getattr(self.window, "request_history", []), self._scope_id())

    def _scoped_events(self) -> list[dict[str, Any]]:
        return environment_scope(AuditTrail(self.settings).events(), self._scope_id())

    def _scope_changed(self, _index=0):
        scope = self._scope_metadata()
        self.scope_note.setText(
            self.tr("Showing local evidence for: {name}").format(name=scope["environment"])
            if scope["environment_id"] != "*" else
            self.tr("Cross-tenant overview is active. Exports and integrations will include all local environments.")
        )
        self.refresh_assurance_baselines(); self.refresh_local_signals(); self.refresh_audit(); self.refresh_webhook_history(); self.refresh_schedules(); self.refresh_policy_snapshots(); self.analyze_policy_twin(record_audit=False)

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
        history = self._scoped_history()
        events = privacy_safe(self._scoped_events(), self.settings, "display")
        successful = sum(1 for item in history if str(item.get("status", "")).startswith("2"))
        total = len(history)
        self.dashboard_cards["requests"].setText(str(total))
        self.dashboard_cards["success"].setText(f"{(successful / total * 100):.0f}%" if total else "—")
        valid = AuditTrail(self.settings).verify()
        self.dashboard_cards["audit"].setText("✓" if valid else "!")
        self.dashboard_cards["audit"].setStyleSheet("color: #22c55e;" if valid else "color: #f97316;")
        self.dashboard_cards["audit"].setToolTip(self.tr("Audit chain is valid") if valid else self.tr("Audit chain needs review"))
        display_scope = privacy_safe(self._scope_metadata(), self.settings, "display")
        self.dashboard_cards["environment"].setText(display_scope["environment"])
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
            self.dashboard_events.setItem(row, 1, QTableWidgetItem(str(event.get("environment") or "Default")))
            self.dashboard_events.setItem(row, 2, QTableWidgetItem(event.get("action", "")))
            self.dashboard_events.setItem(row, 3, QTableWidgetItem("✓" if valid else "!"))

    def refresh_posture(self):
        posture = security_posture(self._scoped_history(), AuditTrail(self.settings).verify())
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
        data = operational_alerts(self._scoped_history(), AuditTrail(self.settings).verify(), threshold)
        data["scope"] = self._scope_metadata()
        return data

    def refresh_alerts(self):
        data = privacy_safe(self._alert_data(), self.settings, "display"); alerts = data["alerts"]
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
        QApplication.clipboard().setText(json.dumps(privacy_safe(self._alert_data(), self.settings, "clipboard"), indent=2, ensure_ascii=False))
        self._scope_audit().append("local_alert_summary_copied", {})
        self.alert_summary.setToolTip(self.tr("Copied to clipboard"))

    def _alert_export_content(self, format_name):
        data = privacy_safe(self._alert_data(), self.settings, "export")
        if format_name == "json":
            return json.dumps(data, indent=2, ensure_ascii=False)
        lines = ["# " + self.tr("Local alert summary"), "", self.tr("Data scope: {name}").format(name=data["scope"]["environment"]), self.tr("Error threshold: {threshold}").format(threshold=data["threshold"]), self.tr("Local requests: {count}").format(count=data["requests"]), self.tr("Failed requests: {count}").format(count=data["failed"]), ""]
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
        self._scope_audit().append("local_alerts_exported", {"format": format_name, "file": os.path.basename(path)})

    def _incident_evidence(self):
        evidence = incident_evidence(self._scoped_history(), self._scoped_events())
        evidence["scope"] = self._scope_metadata()
        evidence["entity_graph"] = getattr(self, "_last_soc_graph", None) or self._soc_graph_data()
        return evidence

    def _soc_graph_data(self):
        response = None
        if getattr(self, "soc_include_response", None) is not None and self.soc_include_response.isChecked():
            exchange = getattr(self.window, "_last_response_exchange", None) or {}
            response_section = exchange.get("response", {}) if isinstance(exchange, dict) else {}
            response = response_section.get("body") if isinstance(response_section, dict) else None
        return soc_investigation_graph(self._scoped_history(), self._scoped_events(), response, self._scope_metadata())

    def refresh_soc_graph(self, _checked=False, record_audit=True):
        raw = self._soc_graph_data(); self._last_soc_graph = raw
        display = privacy_safe(raw, self.settings, "display"); self._last_soc_graph_display = display
        summary = display["summary"]
        for key, widget in self.soc_cards.items(): widget.setText(str(summary[key]))
        self.soc_cards["high_risk"].setStyleSheet("color: #fb7185;" if summary["high_risk"] else "color: #34d399;")
        self.soc_cards["attack_paths"].setStyleSheet("color: #fbbf24;" if summary["attack_paths"] else "color: #34d399;")
        self.filter_soc_entities()
        node_lookup = {node["id"]: node for node in display["nodes"]}
        severity_labels = {"critical": self.tr("Critical"), "high": self.tr("High"), "medium": self.tr("Medium"), "low": self.tr("Low"), "normal": self.tr("Normal")}
        self.soc_paths.setRowCount(len(display["paths"]))
        for row, path in enumerate(display["paths"]):
            source = node_lookup.get(path["source_id"], {}).get("label", path["source_id"])
            target = node_lookup.get(path["target_id"], {}).get("label", path["target_id"])
            values = (severity_labels.get(path["severity"], path["severity"]), source, target, str(max(0, len(path["node_ids"]) - 1)), self.tr("Observed relationship chain across local evidence; validate before treating it as an exploitable attack path."))
            for column, value in enumerate(values):
                item = self._severity_item(str(value), path["severity"]) if column == 0 else QTableWidgetItem(str(value))
                if column == 0: item.setData(Qt.ItemDataRole.UserRole, row)
                self.soc_paths.setItem(row, column, item)
        self.soc_paths.resizeColumnsToContents()
        signal_names = {"endpoint_failure_evidence": self.tr("Endpoint failure evidence"), "relationship_concentration": self.tr("Relationship concentration"), "security_indicator_observed": self.tr("Security indicator observed")}
        signal_explanations = {
            "endpoint_failure_evidence": self.tr("The endpoint has locally retained server or network failure evidence."),
            "relationship_concentration": self.tr("The entity is connected to an unusually broad set of locally observed relationships."),
            "security_indicator_observed": self.tr("A threat, exposure, vulnerability, or indicator-like object was present in the response."),
        }
        self.soc_signals.setRowCount(len(display["anomalies"]))
        for row, signal in enumerate(display["anomalies"]):
            entity = node_lookup.get(signal["entity_id"], {}).get("label", signal["entity_id"])
            values = (severity_labels.get(signal["severity"], signal["severity"]), signal_names.get(signal["code"], signal["code"]), entity, signal_explanations.get(signal["code"], signal["explanation"]))
            for column, value in enumerate(values): self.soc_signals.setItem(row, column, self._severity_item(str(value), signal["severity"]) if column == 0 else QTableWidgetItem(str(value)))
        self.soc_signals.resizeColumnsToContents()
        if summary["truncated"]:
            self.soc_entity_detail.setText(self.tr("The graph reached its local safety limit; use the filter or export the evidence for complete review."))
        elif not display["nodes"]:
            self.soc_entity_detail.setText(self.tr("No correlatable entities are available in the selected local scope."))
        else:
            self.soc_entity_detail.setText(self.tr("Select an entity to inspect its local evidence."))
        if record_audit:
            self._scope_audit().append("soc_entities_correlated", {"entities": summary["entities"], "relationships": summary["relationships"], "paths": summary["attack_paths"], "response_included": summary["response_included"]})

    def filter_soc_entities(self, _text=""):
        graph = getattr(self, "_last_soc_graph_display", None)
        if not graph: return
        query = self.soc_entity_filter.text().strip().casefold()
        nodes = graph["nodes"]
        if query:
            nodes = [node for node in nodes if query in " ".join((str(node.get("label", "")), str(node.get("type", "")), str(node.get("risk", "")), " ".join(node.get("sources", [])))).casefold()]
        known = {node["id"] for node in nodes}
        edges = [edge for edge in graph["edges"] if edge["source_id"] in known and edge["target_id"] in known]
        self.soc_graph.set_graph(nodes, edges)

    def show_soc_entity(self, identifier):
        graph = getattr(self, "_last_soc_graph_display", {})
        node = next((item for item in graph.get("nodes", []) if item.get("id") == identifier), None)
        if not node: return
        relationships = sum(1 for edge in graph.get("edges", []) if identifier in {edge.get("source_id"), edge.get("target_id")})
        self.soc_entity_detail.setText(self.tr("{type}: {label} · risk {risk} · {evidence} evidence item(s) · {relationships} relationship(s) · sources: {sources}").format(type=str(node["type"]).title(), label=node["label"], risk=node["risk"], evidence=node["evidence_count"], relationships=relationships, sources=", ".join(node["sources"])))

    def highlight_soc_path(self, row, _column=0):
        graph = getattr(self, "_last_soc_graph_display", {})
        paths = graph.get("paths", [])
        if 0 <= row < len(paths):
            if self.soc_entity_filter.text(): self.soc_entity_filter.clear()
            self.soc_graph.highlight_path(paths[row]["node_ids"])

    def refresh_incident(self, _checked=False):
        self.refresh_soc_graph(record_audit=False)
        evidence = privacy_safe(self._incident_evidence(), self.settings, "display")
        timeline = evidence["timeline"]
        self.incident_empty_art.setVisible(not timeline and not self.incident_empty_art._source.isNull())
        self.incident_timeline.setVisible(bool(timeline))
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
        self.incident_chain.setPlainText(chains[kind]); self.incident_chain.setVisible(True)
        self._scope_audit().append("incident_chain_prepared", {"kind": kind})

    def export_incident_evidence(self):
        path, _ = QFileDialog.getSaveFileName(self, self.tr("Export incident evidence"), "incident-evidence.json", "JSON (*.json)")
        if not path:
            return
        self.refresh_soc_graph(record_audit=False)
        Path(path).write_text(json.dumps(privacy_safe(self._incident_evidence(), self.settings, "export"), indent=2, ensure_ascii=False), encoding="utf-8")
        self._scope_audit().append("incident_evidence_exported", {"file": os.path.basename(path)})

    def export_soc_graph(self):
        self.refresh_soc_graph(record_audit=False)
        path, selected = QFileDialog.getSaveFileName(self, self.tr("Export entity graph"), "soc-entity-graph.json", "JSON (*.json);;GraphML (*.graphml);;CSV edge list (*.csv);;PNG graph (*.png)")
        if not path: return
        safe = privacy_safe(self._last_soc_graph, self.settings, "export"); suffix = Path(path).suffix.casefold()
        if suffix == ".png" or "PNG" in selected:
            display = getattr(self, "_last_soc_graph_display", safe)
            self.soc_graph.set_graph(safe["nodes"], safe["edges"]); self.soc_graph.highlight_path([]); self.soc_graph.grab().save(path, "PNG")
            self._last_soc_graph_display = display; self.filter_soc_entities(); format_name = "png"
        elif suffix == ".graphml" or "GraphML" in selected:
            lines = ['<?xml version="1.0" encoding="UTF-8"?>', '<graphml xmlns="http://graphml.graphdrawing.org/xmlns">', '<key id="type" for="node" attr.name="type" attr.type="string"/>', '<key id="label" for="node" attr.name="label" attr.type="string"/>', '<key id="risk" for="node" attr.name="risk" attr.type="string"/>', '<key id="relation" for="edge" attr.name="relation" attr.type="string"/>', '<graph id="soc" edgedefault="directed">']
            for node in safe["nodes"]:
                lines.append(f'<node id="{xml_escape(str(node["id"]))}"><data key="type">{xml_escape(str(node["type"]))}</data><data key="label">{xml_escape(str(node["label"]))}</data><data key="risk">{xml_escape(str(node["risk"]))}</data></node>')
            for index, edge in enumerate(safe["edges"]):
                lines.append(f'<edge id="e{index}" source="{xml_escape(str(edge["source_id"]))}" target="{xml_escape(str(edge["target_id"]))}"><data key="relation">{xml_escape(str(edge["relation"]))}</data></edge>')
            lines.extend(["</graph>", "</graphml>"]); Path(path).write_text("\n".join(lines) + "\n", encoding="utf-8"); format_name = "graphml"
        elif suffix == ".csv" or "CSV" in selected:
            output = io.StringIO(); writer = csv.writer(output); writer.writerow(["source_id", "target_id", "relation", "evidence_count"])
            for edge in safe["edges"]: writer.writerow([edge["source_id"], edge["target_id"], edge["relation"], edge["evidence_count"]])
            Path(path).write_text(output.getvalue(), encoding="utf-8"); format_name = "csv"
        else:
            Path(path).write_text(json.dumps(safe, indent=2, ensure_ascii=False) + "\n", encoding="utf-8"); format_name = "json"
        self._scope_audit().append("soc_entity_graph_exported", {"format": format_name, "file": os.path.basename(path), "entities": safe["summary"]["entities"]})

    def _current_response_body(self):
        exchange = getattr(self.window, "_last_response_exchange", None) or {}
        response = exchange.get("response", {}) if isinstance(exchange, dict) else {}
        return response.get("body") if isinstance(response, dict) else None

    def refresh_experience_journey(self, _checked=False, record_audit=True):
        raw = zdx_experience_journey(self._current_response_body())
        self._last_experience_journey = raw
        data = privacy_safe(raw, self.settings, "display"); summary = data["summary"]
        values = {
            "overall_score": "—" if summary["overall_score"] is None else f"{summary['overall_score']:g}/100",
            "latency_ms": "—" if summary["latency_ms"] is None else self.tr("{value:g} ms").format(value=summary["latency_ms"]),
            "packet_loss_percent": "—" if summary["packet_loss_percent"] is None else f"{summary['packet_loss_percent']:g}%",
            "issues": str(summary["issues"]),
        }
        for key, value in values.items(): self.journey_cards[key].setText(value)
        self.journey_cards["issues"].setStyleSheet("color: #fb7185;" if summary["issues"] else "color: #34d399;")
        stage_names = {"user": self.tr("User"), "device": self.tr("Device"), "network": self.tr("Network"), "service_edge": self.tr("Service edge"), "application": self.tr("Application")}
        visual_stages = [{**stage, "label": stage_names.get(stage["id"], stage["label"])} for stage in data["stages"]]
        self.journey_graph.set_journey(visual_stages, data["issues"])
        selected = self.journey_metric.currentData(); self.journey_metric.blockSignals(True); self.journey_metric.clear()
        metric_names = {"overall_score": self.tr("Experience score"), "device_score": self.tr("Device score"), "application_score": self.tr("Application score"), "service_edge_score": self.tr("Service-edge score"), "latency_ms": self.tr("Latency"), "packet_loss_percent": self.tr("Packet loss"), "jitter_ms": self.tr("Jitter"), "dns_ms": self.tr("DNS time"), "tcp_connect_ms": self.tr("TCP connect time"), "page_fetch_ms": self.tr("Page fetch time"), "availability_percent": self.tr("Availability"), "cpu_percent": self.tr("CPU"), "memory_percent": self.tr("Memory")}
        for metric in data["series"]: self.journey_metric.addItem(metric_names.get(metric, metric.replace("_", " ").title()), metric)
        index = self.journey_metric.findData(selected); self.journey_metric.setCurrentIndex(index if index >= 0 else 0); self.journey_metric.blockSignals(False); self.render_journey_trend()
        self.journey_issues.setRowCount(len(data["issues"]))
        issue_explanations = {"overall_score": self.tr("Overall experience score is below 70"), "device_score": self.tr("Device score is below 70"), "application_score": self.tr("Application score is below 70"), "service_edge_score": self.tr("Service-edge score is below 70"), "latency_ms": self.tr("Observed latency exceeds 250 ms"), "packet_loss_percent": self.tr("Observed packet loss exceeds 2%"), "jitter_ms": self.tr("Observed jitter exceeds 40 ms"), "availability_percent": self.tr("Observed availability is below 99%")}
        for row, issue in enumerate(data["issues"]):
            values = (self.tr(issue["severity"].title()), stage_names.get(issue["stage"], issue["stage"]), metric_names.get(issue["metric"], issue["metric"]), issue_explanations.get(issue["metric"], issue["explanation"]))
            for column, value in enumerate(values): self.journey_issues.setItem(row, column, self._severity_item(str(value), issue["severity"]) if column == 0 else QTableWidgetItem(str(value)))
        self.journey_issues.resizeColumnsToContents()
        no_response = self._current_response_body() is None
        disclaimer = self.tr("Schema-tolerant local interpretation of observed API fields. Thresholds are transparent operational hints, not Zscaler health verdicts or SLA determinations.")
        self.journey_note.setText(self.tr("No current API or GraphQL response is available. Run or import a ZDX/OneAPI query, then analyze again.") if no_response else self.tr("Observed {stages} of 5 journey stages across {samples} metric sample(s). {disclaimer}").format(stages=summary["observed_stages"], samples=summary["samples"], disclaimer=disclaimer))
        if record_audit: self._scope_audit().append("experience_journey_analyzed", {"samples": summary["samples"], "observed_stages": summary["observed_stages"], "issues": summary["issues"]})

    def render_journey_trend(self, _index=0):
        data = getattr(self, "_last_experience_journey", {})
        metric = self.journey_metric.currentData()
        values = [(str(item["label"])[-24:], float(item["value"])) for item in data.get("series", {}).get(metric, [])]
        self.journey_trend.set_values(values)

    def export_experience_journey(self):
        if not getattr(self, "_last_experience_journey", None): self.refresh_experience_journey(record_audit=False)
        path, selected = QFileDialog.getSaveFileName(self, self.tr("Export masked journey"), "experience-journey.json", "JSON (*.json);;CSV metrics (*.csv);;PNG journey (*.png)")
        if not path: return
        safe = privacy_safe(self._last_experience_journey, self.settings, "export"); suffix = Path(path).suffix.lower()
        if suffix == ".png" or "PNG" in selected:
            display = privacy_safe(self._last_experience_journey, self.settings, "display"); self.journey_graph.set_journey(safe["stages"], safe["issues"]); self.journey_graph.grab().save(path, "PNG"); self.journey_graph.set_journey(display["stages"], display["issues"]); format_name = "png"
        elif suffix == ".csv" or "CSV" in selected:
            output = io.StringIO(); writer = csv.writer(output); writer.writerow(["metric", "label", "value"])
            for metric, samples in safe["series"].items():
                for sample in samples: writer.writerow([metric, sample["label"], sample["value"]])
            Path(path).write_text(output.getvalue(), encoding="utf-8"); format_name = "csv"
        else:
            Path(path).write_text(json.dumps(safe, indent=2, ensure_ascii=False) + "\n", encoding="utf-8"); format_name = "json"
        self._scope_audit().append("experience_journey_exported", {"format": format_name, "file": os.path.basename(path), "samples": safe["summary"]["samples"]})

    def refresh_exposure_analysis(self, _checked=False, record_audit=True):
        raw = exposure_access_analysis(self._current_response_body()); self._last_exposure_analysis = raw; data = privacy_safe(raw, self.settings, "display"); summary = data["summary"]
        for key, widget in self.exposure_cards.items(): widget.setText(str(summary[key]))
        self.exposure_cards["high_risk_assets"].setStyleSheet("color: #fb7185;" if summary["high_risk_assets"] else "color: #34d399;"); self.exposure_cards["high_permissions"].setStyleSheet("color: #fb7185;" if summary["high_permissions"] else "color: #34d399;")
        self.exposure_assets.setRowCount(len(data["assets"]))
        for row, item in enumerate(data["assets"]):
            values = (self.tr(item["severity"].title()), item["label"], item["risk_score"], ", ".join(item["factors"]))
            for column, value in enumerate(values): self.exposure_assets.setItem(row, column, self._severity_item(str(value), item["severity"]) if column == 0 else QTableWidgetItem(str(value)))
        self.exposure_assets.resizeColumnsToContents(); self.permission_findings.setRowCount(len(data["permission_findings"]))
        permission_explanation = self.tr("Explicit broad or write-capable access observed; validate least privilege and assignment context.")
        for row, item in enumerate(data["permission_findings"]):
            values = (self.tr(item["severity"].title()), item["subject"], item["field"], permission_explanation)
            for column, value in enumerate(values): self.permission_findings.setItem(row, column, self._severity_item(str(value), item["severity"]) if column == 0 else QTableWidgetItem(str(value)))
        self.permission_findings.resizeColumnsToContents()
        deception_titles = {"canary_resource": self.tr("Consider a monitored decoy resource near exposed paths"), "honey_permission": self.tr("Consider a non-production canary permission for privileged-path monitoring"), "baseline": self.tr("Maintain an exposure and least-privilege baseline")}
        self.deception_recommendations.setPlainText("\n".join(f"• {deception_titles.get(item['type'], item['title'])}\n  {self.tr('Suggestion only; design and approve it in authoritative security and governance tooling.')}" for item in data["deception_recommendations"]))
        if record_audit: self._scope_audit().append("exposure_access_analyzed", summary)

    def export_exposure_analysis(self):
        path, _ = QFileDialog.getSaveFileName(self, self.tr("Export masked exposure evidence"), "exposure-access-evidence.json", "JSON (*.json)")
        if not path: return
        safe = privacy_safe({**self._last_exposure_analysis, "scope": self._scope_metadata()}, self.settings, "export"); Path(path).write_text(json.dumps(safe, indent=2, ensure_ascii=False) + "\n", encoding="utf-8"); self._scope_audit().append("exposure_access_exported", {"file": os.path.basename(path), **safe["summary"]})

    def _investigation_notes(self):
        try: notes = json.loads(str(self.settings.value("investigation/notebook", "[]") or "[]"))
        except (TypeError, ValueError): notes = []
        return [item for item in notes if isinstance(item, dict) and item.get("schema") == "zs-api-client/investigation-note/v1" and item.get("note_id")]

    def refresh_investigation_notes(self):
        notes = [item for item in self._investigation_notes() if self._scope_id() == "*" or str(item.get("scope", {}).get("environment_id", "default")) == self._scope_id()]
        display = privacy_safe(list(reversed(notes)), self.settings, "display"); self.note_table.setRowCount(len(display))
        for row, note in enumerate(display):
            values = (time.strftime("%Y-%m-%d %H:%M", time.localtime(int(note.get("created_at", 0)))), note["title"], ", ".join(note.get("tags", [])), str(note["body"])[:160])
            for column, value in enumerate(values): self.note_table.setItem(row, column, QTableWidgetItem(str(value)))
        self.note_table.resizeColumnsToContents()

    def save_investigation_note(self):
        if self._scope_id() == "*": QMessageBox.warning(self, self.tr("Investigation notebook"), self.tr("Select one environment before saving an investigation note.")); return
        try: note = investigation_note(self.note_title.text(), self.note_body.toPlainText(), [item.strip() for item in self.note_tags.text().split(",")], self._scope_metadata())
        except ValueError as exc: QMessageBox.warning(self, self.tr("Investigation notebook"), self.tr(str(exc))); return
        notes = self._investigation_notes(); notes.append(note); self.settings.setValue("investigation/notebook", json.dumps(notes[-100:], ensure_ascii=False)); self.note_title.clear(); self.note_tags.clear(); self.note_body.clear(); self.refresh_investigation_notes(); self._scope_audit().append("investigation_note_saved", {"note_id": note["note_id"], "tags": note["tags"]})

    def export_investigation_notebook(self):
        notes = [item for item in self._investigation_notes() if self._scope_id() == "*" or str(item.get("scope", {}).get("environment_id", "default")) == self._scope_id()]
        path, _ = QFileDialog.getSaveFileName(self, self.tr("Export masked notebook"), "investigation-notebook.json", "JSON (*.json)")
        if not path: return
        safe = privacy_safe({"schema": "zs-api-client/investigation-notebook/v1", "scope": self._scope_metadata(), "notes": notes}, self.settings, "export"); Path(path).write_text(json.dumps(safe, indent=2, ensure_ascii=False) + "\n", encoding="utf-8"); self._scope_audit().append("investigation_notebook_exported", {"file": os.path.basename(path), "notes": len(notes)})

    def load_detection_template(self, _index=0):
        key = self.detection_template.currentData()
        if key in DETECTION_TEMPLATES: self.detection_rule.setPlainText(json.dumps(DETECTION_TEMPLATES[key], indent=2, ensure_ascii=False))

    def _detection_rule_data(self):
        try: return json.loads(self.detection_rule.toPlainText())
        except ValueError as exc: return {"_parse_error": self.tr("Invalid JSON: ") + str(exc)}

    def validate_detection_lab(self):
        rule = self._detection_rule_data()
        if "_parse_error" in rule:
            result = {"valid": False, "errors": [rule["_parse_error"]]}
        else:
            result = validate_detection_rule(rule)
        self.detection_status.setText(self.tr("Rule is valid and can be evaluated locally.") if result["valid"] else self.tr("Rule validation failed: {errors}").format(errors="; ".join(result["errors"])))
        self.detection_status.setStyleSheet("color: #34d399;" if result["valid"] else "color: #fb7185;")
        return result

    def run_detection_lab(self):
        validation = self.validate_detection_lab()
        if not validation["valid"]: return
        raw = evaluate_detection_rule(validation["rule"], self._scoped_history()); self._last_detection_result = raw
        data = privacy_safe(raw, self.settings, "display"); matches = data["matches"]
        self.detection_matches.setRowCount(len(matches))
        for row, event in enumerate(matches):
            values = (event.get("timestamp", ""), event.get("method", ""), event.get("url", ""), event.get("status", ""), self.tr("{duration} ms").format(duration=event.get("duration_ms", "—")), event.get("environment_id", ""))
            for column, value in enumerate(values): self.detection_matches.setItem(row, column, QTableWidgetItem(str(value)))
        explanation = self.tr("Matched events where {mode} of {conditions} declarative condition(s) were true.").format(mode=self.tr(data["rule"]["match"].title()), conditions=len(data["rule"]["conditions"]))
        self.detection_matches.resizeColumnsToContents(); self.detection_status.setText(self.tr("Examined {examined} local event(s); {matched} matched. {explanation}").format(examined=data["summary"]["examined"], matched=data["summary"]["matched"], explanation=explanation))
        self._scope_audit().append("local_detection_evaluated", {"rule": data["rule"]["name"], **data["summary"]})

    def refresh_adaptive_anomalies(self, _checked=False, record_audit=True):
        raw = adaptive_anomalies(self._scoped_history(), self.detection_sensitivity.currentData() or "balanced"); self._last_adaptive_result = raw
        data = privacy_safe(raw, self.settings, "display"); findings = data["findings"]
        self.anomaly_findings.setRowCount(len(findings))
        for row, finding in enumerate(findings):
            values = (self.tr(finding["severity"].title()), finding["endpoint"], finding["observed"], finding["explanation"])
            for column, value in enumerate(values): self.anomaly_findings.setItem(row, column, self._severity_item(str(value), finding["severity"]) if column == 0 else QTableWidgetItem(str(value)))
        self.anomaly_findings.resizeColumnsToContents()
        values = []
        for index, baseline in enumerate(data["baselines"][:8], 1):
            values.extend([(self.tr("Endpoint {number} current").format(number=index), float(baseline["current_ms"])), (self.tr("Endpoint {number} threshold").format(number=index), float(baseline["threshold_ms"]))])
        method = self.tr("Median absolute deviation (MAD), scaled by 1.4826 with a 10%/10 ms noise floor")
        self.anomaly_chart.set_values(values); self.detection_status.setText(self.tr("Adaptive analysis evaluated {endpoints} endpoint(s) and found {findings} explainable anomaly hint(s). Method: {method}").format(endpoints=data["summary"]["endpoints_evaluated"], findings=data["summary"]["findings"], method=method))
        if record_audit: self._scope_audit().append("adaptive_anomalies_evaluated", {"sensitivity": data["sensitivity"], **data["summary"]})

    def export_detection_lab(self):
        evidence = {"scope": self._scope_metadata(), "detection": self._last_detection_result, "adaptive_anomalies": self._last_adaptive_result}
        path, selected = QFileDialog.getSaveFileName(self, self.tr("Export masked detection evidence"), "detection-evidence.json", "JSON (*.json);;CSV matches (*.csv)")
        if not path: return
        safe = privacy_safe(evidence, self.settings, "export")
        if Path(path).suffix.lower() == ".csv" or "CSV" in selected:
            output = io.StringIO(); writer = csv.writer(output); writer.writerow(["timestamp", "method", "url", "status", "duration_ms", "environment_id"])
            for event in safe.get("detection", {}).get("matches", []): writer.writerow([event.get(key, "") for key in ("timestamp", "method", "url", "status", "duration_ms", "environment_id")])
            Path(path).write_text(output.getvalue(), encoding="utf-8"); format_name = "csv"
        else:
            Path(path).write_text(json.dumps(safe, indent=2, ensure_ascii=False) + "\n", encoding="utf-8"); format_name = "json"
        self._scope_audit().append("detection_evidence_exported", {"format": format_name, "file": os.path.basename(path)})

    def refresh_playbook(self, _index=0, record_audit=True):
        raw = guided_playbook(self.playbook_choice.currentData() or "api_outage", self._scoped_events()); self._last_playbook = raw
        data = privacy_safe(raw, self.settings, "display"); self.playbook_steps.setRowCount(len(data["steps"]))
        wording = {
            "Confirm scope from retained failures": self.tr("Confirm scope from retained failures"), "Check rate-limit and service-health evidence": self.tr("Check rate-limit and service-health evidence"), "Collect read-only product status": self.tr("Collect read-only product status"), "Correlate affected entities": self.tr("Correlate affected entities"), "Export masked incident evidence": self.tr("Export masked incident evidence"), "Record closure decision": self.tr("Record closure decision"),
            "Capture current policy baseline": self.tr("Capture current policy baseline"), "Run policy diff and best-practice checks": self.tr("Run policy diff and best-practice checks"), "Run Policy Twin and decision simulation": self.tr("Run Policy Twin and decision simulation"), "Prepare rollback artifact": self.tr("Prepare rollback artifact"), "Record independent review": self.tr("Record independent review"), "Export change package": self.tr("Export change package"),
            "Identify affected user and application scope": self.tr("Identify affected user and application scope"), "Inspect device metrics": self.tr("Inspect device metrics"), "Inspect network latency, loss and jitter": self.tr("Inspect network latency, loss and jitter"), "Inspect service-edge path": self.tr("Inspect service-edge path"), "Compare application response": self.tr("Compare application response"), "Export masked journey evidence": self.tr("Export masked journey evidence"),
            "Stop copying or exporting raw material": self.tr("Stop copying or exporting raw material"), "Rotate the affected credential outside this client": self.tr("Rotate the affected credential outside this client"), "Clear in-memory sessions": self.tr("Clear in-memory sessions"), "Review masked audit evidence": self.tr("Review masked audit evidence"), "Validate least-privilege access": self.tr("Validate least-privilege access"), "Record containment and recovery": self.tr("Record containment and recovery"),
            "Validate the alert in authoritative security tooling": self.tr("Validate the alert in authoritative security tooling"), "Identify users, devices and applications": self.tr("Identify users, devices and applications"), "Preserve masked evidence": self.tr("Preserve masked evidence"), "Prepare containment changes for independent approval": self.tr("Prepare containment changes for independent approval"), "Track recovery prerequisites": self.tr("Track recovery prerequisites"), "Record lessons learned": self.tr("Record lessons learned"),
        }
        for row, step in enumerate(data["steps"]):
            status = self.tr("Complete") if step["status"] == "complete" else self.tr("Pending")
            values = (step["order"], status, wording.get(step["title"], step["title"]), self.tr("Recorded in local audit trail") if step["status"] == "complete" else self.tr("No completion evidence"))
            for column, value in enumerate(values):
                item = QTableWidgetItem(str(value)); item.setData(Qt.ItemDataRole.UserRole, step["id"])
                if column == 1: item.setForeground(QColor("#34d399" if step["status"] == "complete" else "#fbbf24"))
                self.playbook_steps.setItem(row, column, item)
        self.playbook_steps.resizeColumnsToContents(); summary = data["summary"]; self.playbook_progress.setValue(round(100 * summary["complete"] / max(1, summary["total"])))
        if record_audit: self._scope_audit().append("playbook_opened", {"kind": data["kind"]})

    def complete_playbook_step(self):
        row = self.playbook_steps.currentRow()
        if row < 0:
            QMessageBox.information(self, self.tr("Response playbooks"), self.tr("Select a playbook step first.")); return
        step_id = str(self.playbook_steps.item(row, 0).data(Qt.ItemDataRole.UserRole))
        playbook = getattr(self, "_last_playbook", {}); step = next((item for item in playbook.get("steps", []) if item["id"] == step_id), None)
        if not step or step["status"] == "complete": return
        if QMessageBox.question(self, self.tr("Mark step complete"), self.tr("Record this step as completed in the local audit trail? This does not perform the action or update an authoritative incident."), QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.Cancel, QMessageBox.StandardButton.Cancel) != QMessageBox.StandardButton.Yes: return
        self._scope_audit().append("playbook_step_completed", {"kind": playbook["kind"], "step_id": step_id, "order": step["order"], "title": step["title"]}); self.refresh_playbook(record_audit=False)

    def export_playbook(self):
        path, _ = QFileDialog.getSaveFileName(self, self.tr("Export masked playbook evidence"), "response-playbook.json", "JSON (*.json)")
        if not path: return
        data = privacy_safe({**self._last_playbook, "scope": self._scope_metadata()}, self.settings, "export"); Path(path).write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8"); self._scope_audit().append("playbook_evidence_exported", {"kind": data["kind"], "file": os.path.basename(path)})

    def build_smart_api_plan(self):
        goal = self.api_plan_goal.text().strip()
        if not goal:
            self.api_plan_summary.setText(self.tr("Describe an administrative or investigation goal first.")); return
        raw = smart_api_plan(goal, AUTOMATION_HUB_CATALOG); self._last_api_plan = raw; data = privacy_safe(raw, self.settings, "display")
        self.api_plan_table.setRowCount(len(data["candidates"]))
        for row, item in enumerate(data["candidates"]):
            values = (item["score"], str(item["product"]).upper(), item["name"], item["method"], item["url"])
            for column, value in enumerate(values):
                cell = QTableWidgetItem(str(value));
                if column == 3: cell.setForeground(QColor("#34d399" if item["method"] == "GET" else "#fb7185"))
                self.api_plan_table.setItem(row, column, cell)
        self.api_plan_table.resizeColumnsToContents(); self.api_plan_summary.setText(self.tr("Found {matches} documented match(es); proposed {proposed}, including {writes} write operation(s). Review parameters and documentation before creating a chain.").format(matches=data["summary"]["matches"], proposed=data["summary"]["proposed"], writes=data["summary"]["write_operations"]))
        self._scope_audit().append("smart_api_plan_created", {"matches": data["summary"]["matches"], "proposed": data["summary"]["proposed"], "write_operations": data["summary"]["write_operations"]})

    def copy_api_plan_to_chain(self):
        candidates = [item for item in getattr(self, "_last_api_plan", {}).get("candidates", []) if item.get("method") == "GET"]
        if not candidates:
            QMessageBox.information(self, self.tr("Smart API planner"), self.tr("Create a plan with at least one read operation first.")); return
        steps = [{"id": f"read{index}", "method": "GET", "url": item["url"]} for index, item in enumerate(candidates, 1)]
        self.api_chain_input.setPlainText(json.dumps(steps, indent=2, ensure_ascii=False)); self.api_chain_preview.setPlainText(self.tr("Planner output copied for review. Validate the chain, supply required path values, and approve it separately before execution.")); self.tabs.setCurrentIndex(self.chain_tab_index)
        self._scope_audit().append("smart_api_plan_copied_to_chain", {"read_steps": len(steps)})

    def _change_plan(self):
        return change_control_plan(self._json(self.before_policy, {}), self._json(self.after_policy, {}))

    def _change_safety(self):
        return change_safety_assessment(self._json(self.before_policy, {}), self._json(self.after_policy, {}), {
            "reference": self.change_ticket.text().strip(), "owner": self.change_owner.text().strip(), "reviewer": self.change_reviewer.text().strip(),
            "maintenance_window": self.change_maintenance.isChecked(), "simulation": self.change_simulated.isChecked(), "rollback": self.change_rollback_ready.isChecked(), "approval": self._change_approved,
        })

    def prepare_change_review(self):
        try:
            plan = self._change_plan(); safety = self._change_safety()
        except ValueError as exc:
            QMessageBox.warning(self, self.tr("Change control"), str(exc)); return
        self.change_review.setPlainText(json.dumps({
            "risk": plan["risk"], "risk_score": safety["risk_score"], "ready_for_external_review": safety["ready_for_external_review"], "change_counts": plan["change_counts"],
            "compliance_findings": plan["compliance_findings"], "rollback_ready": True,
            "next_steps": [self.tr("Review policy diff"), self.tr("Run local simulation"), self.tr("Record reviewer approval"), self.tr("Export Git/Terraform review"), self.tr("Apply outside this client only after approval")],
        }, indent=2, ensure_ascii=False))
        self.change_risk.setText(self.tr("Change risk: {risk} · {score}/100 · {blocking} blocking gate(s)").format(risk=self.tr(safety["risk"].title()), score=safety["risk_score"], blocking=len(safety["blocking_gates"])))
        self.change_risk.setStyleSheet("color: #fb7185;" if safety["risk"] in {"critical", "high"} else "color: #fbbf24;" if safety["risk"] == "medium" else "color: #34d399;")
        self.change_gates.setRowCount(len(safety["gates"]))
        gate_names = {"reference": self.tr("Change reference recorded"), "owner": self.tr("Change owner recorded"), "reviewer": self.tr("Independent reviewer recorded"), "maintenance_window": self.tr("Maintenance window confirmed"), "simulation": self.tr("Local policy simulation reviewed"), "rollback": self.tr("Rollback artifact prepared"), "approval": self.tr("Local approval recorded")}
        for row, gate in enumerate(safety["gates"]):
            values = (gate_names.get(gate["id"], gate["title"]), self.tr("Yes") if gate["required"] else self.tr("No"), self.tr("Passed") if gate["passed"] else self.tr("Blocked") if gate["required"] else self.tr("Optional"))
            for column, value in enumerate(values):
                item = QTableWidgetItem(str(value));
                if column == 2: item.setForeground(QColor("#34d399" if gate["passed"] else "#fb7185" if gate["required"] else "#94a3b8"))
                self.change_gates.setItem(row, column, item)
        self.change_gates.resizeColumnsToContents(); AuditTrail(self.settings).append("change_review_prepared", {"risk": safety["risk"], "risk_score": safety["risk_score"], "changes": len(plan["changes"]), "blocking_gates": len(safety["blocking_gates"])})

    def approve_change_review(self):
        try:
            plan = self._change_plan()
        except ValueError as exc:
            QMessageBox.warning(self, self.tr("Change control"), str(exc)); return
        reviewer = self.change_reviewer.text().strip()
        if not reviewer:
            QMessageBox.warning(self, self.tr("Change control"), self.tr("Enter a reviewer before recording approval.")); return
        self._change_approved = True; AuditTrail(self.settings).append("change_review_approved", {"reference": self.change_ticket.text().strip(), "reviewer": reviewer, "risk": plan["risk"], "changes": len(plan["changes"])})
        self.change_review.appendPlainText("\n" + self.tr("Local approval recorded. External apply remains disabled."))
        self.prepare_change_review()

    def export_change_review(self, kind):
        try:
            plan = privacy_safe(self._change_plan(), self.settings, "export")
        except ValueError as exc:
            QMessageBox.warning(self, self.tr("Change control"), str(exc)); return
        if kind == "rollback":
            path, _ = QFileDialog.getSaveFileName(self, self.tr("Export rollback plan"), "rollback-policy.json", "JSON (*.json)")
            safe_reference = privacy_safe({"reference": self.change_ticket.text().strip()}, self.settings, "export")["reference"]
            content = json.dumps(rollback_package(plan["rollback_policy"], plan["proposed_policy"], safe_reference), indent=2, ensure_ascii=False)
        else:
            path, _ = QFileDialog.getSaveFileName(self, self.tr("Export Git review"), "policy-review.md", "Markdown (*.md)")
            content = "# Policy change review\n\n" + json.dumps({"risk": plan["risk"], "change_counts": plan["change_counts"], "compliance_findings": plan["compliance_findings"]}, indent=2, ensure_ascii=False) + "\n\n## Proposed policy (redacted)\n```json\n" + policy_as_code(plan["proposed_policy"], "json") + "```\n\n## Rollback\nUse the separately exported rollback plan after change approval.\n"
        if path:
            Path(path).write_text(content, encoding="utf-8")
            AuditTrail(self.settings).append("change_review_exported", {"kind": kind, "file": os.path.basename(path), "risk": plan["risk"]})

    def verify_rollback_artifact(self):
        path, _ = QFileDialog.getOpenFileName(self, self.tr("Verify rollback artifact"), "", "JSON (*.json)")
        if not path: return
        try: package = json.loads(Path(path).read_text(encoding="utf-8")); result = verify_rollback_package(package)
        except (OSError, ValueError) as exc: result = {"valid": False, "reason": str(exc)}
        if result["valid"]: QMessageBox.information(self, self.tr("Verify rollback artifact"), self.tr("Rollback artifact integrity verified. This does not authorize applying it."))
        else: QMessageBox.warning(self, self.tr("Verify rollback artifact"), self.tr("Rollback verification failed: {reason}").format(reason=result["reason"]))
        self._scope_audit().append("rollback_artifact_verified", {"valid": result["valid"], "file": os.path.basename(path), "reason": result["reason"]})

    def _assurance_history(self):
        try: values = json.loads(str(self.settings.value("assurance/history", "[]") or "[]"))
        except (TypeError, ValueError): values = []
        return [item for item in values if isinstance(item, dict) and isinstance(item.get("summary"), dict) and item.get("assessment_id")]

    def refresh_assurance_baselines(self):
        selected = self.assurance_baseline.currentData() if self.assurance_baseline.count() else ""
        self.assurance_baseline.clear(); self.assurance_baseline.addItem(self.tr("No comparison baseline"), "")
        for item in self._assurance_history():
            environment_id = str(item.get("scope", {}).get("environment_id", "default"))
            if self._scope_id() not in {"*", environment_id}: continue
            timestamp = time.strftime("%Y-%m-%d %H:%M", time.localtime(int(item.get("generated_at", 0))))
            self.assurance_baseline.addItem(self.tr("{time} · score {score}/100").format(time=timestamp, score=item["summary"].get("score", 0)), item["assessment_id"])
        index = self.assurance_baseline.findData(selected); self.assurance_baseline.setCurrentIndex(index if index >= 0 else 0)

    def _selected_assurance_baseline(self):
        identifier = str(self.assurance_baseline.currentData() or "")
        return next((item for item in self._assurance_history() if item.get("assessment_id") == identifier), None)

    def _assurance_policy(self):
        if not self.assurance_use_policy.isChecked() or not self.after_policy.toPlainText().strip(): return None
        return self._json(self.after_policy, {})

    def refresh_assurance(self, _checked=False, record_audit=True):
        try: policy = self._assurance_policy()
        except ValueError as exc:
            if record_audit: QMessageBox.warning(self, self.tr("Continuous assurance"), str(exc))
            policy = None
        assessment = compliance_assessment(self._scoped_history(), self._scoped_events(), AuditTrail(self.settings).verify(), policy, self._selected_assurance_baseline(), self._scope_metadata())
        self._last_assurance = assessment; self.render_assurance()
        if record_audit:
            self._scope_audit().append("assurance_evaluated", {"score": assessment["summary"]["score"], "failed": assessment["summary"]["failed"], "coverage": assessment["summary"]["coverage_percent"], "policy_included": policy is not None})

    def _assurance_wording(self):
        return {
            "LOCAL-GV-01": (self.tr("Audit evidence integrity"), self.tr("Review and restore the local hash-linked audit trail.")),
            "LOCAL-ID-01": (self.tr("Operational evidence available"), self.tr("Collect or import masked read-only evidence for the selected environment.")),
            "LOCAL-DE-01": (self.tr("API health and anomaly monitoring"), self.tr("Investigate repeated failures, latency regressions, and rate limiting.")),
            "LOCAL-PR-01": (self.tr("Least-privilege policy baseline"), self.tr("Constrain unconditional allow rules and validate order in Policy Twin.")),
            "LOCAL-GV-02": (self.tr("Reviewed write activity"), self.tr("Require a recorded review and rollback artifact for write activity.")),
            "LOCAL-RS-01": (self.tr("Incident evidence readiness"), self.tr("Prepare and export masked investigation evidence for unresolved failures.")),
            "LOCAL-RC-01": (self.tr("Recovery evidence available"), self.tr("Save a policy snapshot or reviewed rollback artifact before change.")),
        }

    def render_assurance(self, _index=0):
        raw = getattr(self, "_last_assurance", None)
        if not raw: return
        data = privacy_safe(raw, self.settings, "display"); summary = data["summary"]
        for key, widget in self.assurance_cards.items():
            suffix = "/100" if key == "score" else "%" if key == "coverage_percent" else ""
            widget.setText(f"{summary[key]}{suffix}")
        self.assurance_cards["score"].setStyleSheet("color: #34d399;" if summary["score"] >= 80 else "color: #fbbf24;" if summary["score"] >= 60 else "color: #fb7185;")
        self.assurance_cards["failed"].setStyleSheet("color: #fb7185;" if summary["failed"] else "color: #34d399;")
        framework = str(self.assurance_framework.currentData() or "all")
        controls = [item for item in data["controls"] if framework == "all" or any(framework.upper() in mapping.upper() for mapping in item["mappings"])]
        status_names = {"pass": self.tr("Pass"), "fail": self.tr("Fail"), "not_evaluated": self.tr("Not evaluated")}
        severity_names = {"critical": self.tr("Critical"), "high": self.tr("High"), "medium": self.tr("Medium"), "low": self.tr("Low")}
        wording = self._assurance_wording(); self.assurance_table.setRowCount(len(controls))
        for row, control in enumerate(controls):
            title, recommendation = wording.get(control["code"], (control["title"], control["recommendation"]))
            values = (control["code"], status_names.get(control["status"], control["status"]), severity_names.get(control["severity"], control["severity"]), title, json.dumps(control["evidence"], ensure_ascii=False), " · ".join(control["mappings"]), recommendation)
            for column, value in enumerate(values):
                item = QTableWidgetItem(str(value))
                item.setToolTip(str(value))
                if column == 1: item.setForeground(QColor("#34d399" if control["status"] == "pass" else "#fb7185" if control["status"] == "fail" else "#94a3b8")); font = item.font(); font.setBold(True); item.setFont(font)
                self.assurance_table.setItem(row, column, item)
        self.assurance_table.resizeColumnsToContents()
        narrative = executive_security_narrative(raw, security_posture(self._scoped_history(), AuditTrail(self.settings).verify()))
        headline = self.tr("Local assurance requires attention") if summary["failed"] else self.tr("No failing controls in the evaluated local scope")
        lines = [headline, "", self.tr("{passed} evaluated control(s) passed and {failed} failed.").format(passed=summary["passed"], failed=summary["failed"]), self.tr("Evidence coverage is {coverage}% and local posture is {posture}/100.").format(coverage=summary["coverage_percent"], posture=security_posture(self._scoped_history(), AuditTrail(self.settings).verify())["score"])]
        if summary.get("delta") is not None: lines.append(self.tr("The assurance score changed by {delta:+d} points versus the selected baseline.").format(delta=int(summary["delta"])))
        lines += ["", self.tr("Prioritized actions")]
        for action in narrative["recommended_actions"]:
            recommendation = wording.get(action["control"], ("", action["action"]))[1]; lines.append(f"- {action['control']}: {recommendation}")
        lines += ["", self.tr("Local evidence limitation: validate results against authoritative tenant and governance records.")]
        self.assurance_narrative.setPlainText("\n".join(lines))
        history = [item for item in self._assurance_history() if self._scope_id() in {"*", str(item.get("scope", {}).get("environment_id", "default"))}]
        trend = [(time.strftime("%m-%d %H:%M", time.localtime(int(item.get("generated_at", 0)))), float(item["summary"].get("score", 0))) for item in history[-100:]]
        trend.append((self.tr("Now"), float(summary["score"]))); self.assurance_trend.set_values(trend)
        self.assurance_status.setText(self.tr("Assessment {identifier} · {frameworks} · local evidence only, not certification.").format(identifier=data["assessment_id"][:12], frameworks=", ".join(data["frameworks"])))

    def save_assurance_baseline(self):
        if self._scope_id() == "*": QMessageBox.warning(self, self.tr("Continuous assurance"), self.tr("Select one environment before saving an assurance baseline.")); return
        if not getattr(self, "_last_assurance", None): self.refresh_assurance(record_audit=False)
        history = self._assurance_history(); history.append(self._last_assurance); self.settings.setValue("assurance/history", json.dumps(history[-100:], ensure_ascii=False)); self.refresh_assurance_baselines(); self.assurance_baseline.setCurrentIndex(self.assurance_baseline.count() - 1)
        self._scope_audit().append("assurance_baseline_saved", {"assessment_id": self._last_assurance["assessment_id"], "score": self._last_assurance["summary"]["score"]})

    def export_signed_assurance(self):
        if not getattr(self, "_last_assurance", None): self.refresh_assurance(record_audit=False)
        private = secure_global_get("evidence_signing_ed25519_private")
        if not private:
            private = generate_private_key()
            if not secure_global_store("evidence_signing_ed25519_private", private): QMessageBox.warning(self, self.tr("Signed evidence"), self.tr("The system keychain could not store the evidence signing key.")); return
        try: package = sign_evidence(privacy_safe(self._last_assurance, self.settings, "export"), private)
        except (TypeError, ValueError): QMessageBox.warning(self, self.tr("Signed evidence"), self.tr("The protected evidence signing key is invalid. Rotate it in Settings before signing.")); return
        path, _ = QFileDialog.getSaveFileName(self, self.tr("Export signed evidence"), "signed-assurance.json", "Signed JSON (*.json)")
        if not path: return
        Path(path).write_text(json.dumps(package, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
        fingerprint = hashlib.sha256(package["public_key"].encode()).hexdigest()[:16]; self.assurance_status.setText(self.tr("Signed evidence exported · public-key fingerprint {fingerprint}").format(fingerprint=fingerprint))
        self._scope_audit().append("signed_assurance_exported", {"file": os.path.basename(path), "assessment_id": self._last_assurance["assessment_id"], "public_key_fingerprint": fingerprint})

    def verify_signed_assurance(self):
        path, _ = QFileDialog.getOpenFileName(self, self.tr("Verify signed evidence"), "", "Signed JSON (*.json)")
        if not path: return
        source = Path(path)
        try:
            if source.is_symlink() or not source.is_file() or source.stat().st_size > 50 * 1024 * 1024: raise ValueError("unsafe")
            package = json.loads(source.read_text(encoding="utf-8")); result = verify_evidence(package)
        except (OSError, ValueError, json.JSONDecodeError): result = {"valid": False, "reason": "file_invalid"}
        if result["valid"]:
            fingerprint = hashlib.sha256(result["public_key"].encode()).hexdigest()[:16]; message = self.tr("Signature verified. Payload digest {digest}; public-key fingerprint {fingerprint}.").format(digest=result["payload_sha256"][:16], fingerprint=fingerprint)
            QMessageBox.information(self, self.tr("Signed evidence"), message)
        else:
            message = self.tr("Signature verification failed: {reason}").format(reason=result["reason"]); QMessageBox.warning(self, self.tr("Signed evidence"), message)
        self.assurance_status.setText(message); self._scope_audit().append("signed_assurance_verified", {"file": os.path.basename(path), "valid": bool(result["valid"]), "reason": result["reason"]})

    def _report_data(self):
        kind = self.report_type.currentData()
        if kind == "user_risk":
            data = security_report_data("operations", self._scoped_history(), self._scoped_events(), AuditTrail(self.settings).verify(), self._scope_metadata())
            data["kind"] = "user_risk"; data["user_risk"] = user_risk_report(self._current_response_body())
            return data
        return security_report_data(kind, self._scoped_history(), self._scoped_events(), AuditTrail(self.settings).verify(), self._scope_metadata())

    def _report_lines(self, data):
        posture, incidents = data["posture"], data["incident_summary"]
        assurance = data.get("assurance", {"summary": {"score": 0, "passed": 0, "failed": 0, "coverage_percent": 0}, "controls": []})
        title = {"ciso": self.tr("CISO security summary"), "soc": self.tr("SOC investigation summary"), "operations": self.tr("Operations health summary"), "user_risk": self.tr("User risk report")}[data["kind"]]
        lines = [f"# {title}", "", self.tr("Data scope: {name}").format(name=data["scope"]["environment"]), self.tr("Posture score: {score}/100").format(score=posture["score"]), self.tr("Assurance score: {score}/100 · evidence coverage {coverage}%").format(score=assurance["summary"]["score"], coverage=assurance["summary"]["coverage_percent"]), self.tr("Local requests: {count}").format(count=posture["metrics"]["requests"]), self.tr("Failed requests: {count}").format(count=posture["metrics"]["failed"]), self.tr("Audit integrity: {status}").format(status=self.tr("Valid") if data["audit_valid"] else self.tr("Needs review")), "", self.tr("Incident signals"), f"- {self.tr('High')}: {incidents['high']}", f"- {self.tr('Medium')}: {incidents['medium']}"]
        if data["kind"] == "ciso":
            lines += ["", self.tr("Executive assurance narrative"), self.tr("Local assurance requires attention") if assurance["summary"]["failed"] else self.tr("No failing controls in the evaluated local scope")]
            lines += ["- " + self.tr("{passed} evaluated control(s) passed and {failed} failed.").format(passed=assurance["summary"]["passed"], failed=assurance["summary"]["failed"])]
            lines += ["", self.tr("Executive actions"), "- " + self.tr("Review high-risk findings and approval records."), "- " + self.tr("Use the Security Posture and Change Control workspaces for evidence.")]
        elif data["kind"] == "soc":
            lines += ["", self.tr("SOC next steps"), "- " + self.tr("Use Incident Investigation to prepare a review chain."), "- " + self.tr("Export masked evidence before escalation.")]
        elif data["kind"] == "user_risk":
            risk = data["user_risk"]; lines += ["", self.tr("User risk evidence"), self.tr("Observed users: {count}; explicit risk signals: {signals}.").format(count=risk["summary"]["observed_users"], signals=risk["summary"]["explicit_risk_signals"]), self.tr("Only explicit fields in the current response are reported; identity alone is never treated as risk.")]
            lines += [f"- {item['identity']}: {item['risk_level']} ({item['risk_score']})" for item in risk["users"][:50]] or [self.tr("No user records with explicit risk evidence were found in the current response.")]
        else:
            lines += ["", self.tr("Operations next steps"), "- " + self.tr("Review slow responses and API failures."), "- " + self.tr("Confirm rate limits and service health with read-only queries.")]
        return lines

    def generate_report(self):
        data = privacy_safe(self._report_data(), self.settings, "display")
        posture = data["posture"]
        severity_labels = {"critical": self.tr("Critical"), "high": self.tr("High"), "medium": self.tr("Medium"), "low": self.tr("Low"), "info": self.tr("Info")}
        self.report_chart.set_style("pie"); self.report_chart.set_values([(severity_labels[level], float(count)) for level, count in posture["severity_counts"].items()])
        self.report_preview.setPlainText("\n".join(self._report_lines(data)))

    def _drill_into_report_metric(self, label: str, value: float):
        """Turn a visual report metric into a local, reviewable evidence view."""
        data = privacy_safe(self._report_data(), self.settings, "display")
        detail = {"metric": label, "value": value, "scope": data["scope"], "findings": [item for item in data["posture"].get("findings", []) if str(item.get("severity", "")).lower() == str(label).lower()]}
        dialog = QDialog(self); dialog.setWindowTitle(self.tr("Report detail")); dialog.resize(700, 440)
        layout = QVBoxLayout(dialog); intro = QLabel(self.tr("Local evidence behind the selected report metric. It is not a tenant-wide assessment.")); intro.setWordWrap(True); layout.addWidget(intro)
        output = QPlainTextEdit(json.dumps(detail, indent=2, ensure_ascii=False)); output.setReadOnly(True); layout.addWidget(output, 1)
        close = QPushButton(self.tr("Close")); close.clicked.connect(dialog.accept); layout.addWidget(close, alignment=Qt.AlignmentFlag.AlignRight); dialog.exec()

    def _report_html(self, data):
        """Create a self-contained visual report with embedded, offline artwork."""
        posture, incidents = data["posture"], data["incident_summary"]
        assurance = data.get("assurance", {"summary": {"score": 0, "coverage_percent": 0}, "controls": []})
        title = {"ciso": self.tr("CISO security summary"), "soc": self.tr("SOC investigation summary"), "operations": self.tr("Operations health summary")}[data["kind"]]
        try:
            banner = base64.b64encode(_resource_path("assets/visuals/security-report-banner.png").read_bytes()).decode("ascii")
            banner_style = f"background-image:linear-gradient(90deg,rgba(4,12,27,.15),rgba(4,12,27,.05)),url(data:image/png;base64,{banner});"
        except OSError:
            banner_style = ""
        metrics = posture["metrics"]
        cards = (
            (self.tr("Posture score"), f"{posture['score']}/100", "good" if posture["score"] >= 80 else "warn"),
            (self.tr("Local requests"), metrics["requests"], "neutral"),
            (self.tr("Failed requests"), metrics["failed"], "risk" if metrics["failed"] else "good"),
            (self.tr("Audit integrity"), self.tr("Valid") if data["audit_valid"] else self.tr("Needs review"), "good" if data["audit_valid"] else "risk"),
            (self.tr("Assurance score"), f"{assurance['summary']['score']}/100", "good" if assurance["summary"]["score"] >= 80 else "warn" if assurance["summary"]["score"] >= 60 else "risk"),
        )
        card_html = "".join(f'<section class="metric {tone}"><span>{html.escape(str(label))}</span><strong>{html.escape(str(value))}</strong></section>' for label, value, tone in cards)
        finding_rows = "".join(
            f"<tr><td><span class='severity {html.escape(str(item['severity']))}'>{html.escape(str(item['severity']).title())}</span></td><td>{html.escape(str(item['code']).replace('_', ' ').title())}</td><td>{int(item.get('count', 0))}</td></tr>"
            for item in posture["findings"]
        ) or f"<tr><td colspan='3'>{html.escape(self.tr('No local findings.'))}</td></tr>"
        event_rows = "".join(
            f"<tr><td>{html.escape(str(item.get('time', '')))}</td><td>{html.escape(str(item.get('source', '')))}</td><td>{html.escape(str(item.get('summary', '')))}</td></tr>"
            for item in data.get("recent_events", [])
        ) or f"<tr><td colspan='3'>{html.escape(self.tr('No recent evidence.'))}</td></tr>"
        wording = self._assurance_wording()
        assurance_rows = "".join(f"<tr><td>{html.escape(str(item['code']))}</td><td><span class='severity {'low' if item['status'] == 'pass' else 'high' if item['status'] == 'fail' else 'info'}'>{html.escape(item['status'].replace('_', ' ').title())}</span></td><td>{html.escape(wording.get(item['code'], (item['title'], ''))[0])}</td><td>{html.escape(' · '.join(item['mappings']))}</td></tr>" for item in assurance.get("controls", []))
        assurance_summary = assurance["summary"]
        narrative_headline = self.tr("Local assurance requires attention") if assurance_summary.get("failed") else self.tr("No failing controls in the evaluated local scope")
        narrative_observations = [self.tr("{passed} evaluated control(s) passed and {failed} failed.").format(passed=assurance_summary.get("passed", 0), failed=assurance_summary.get("failed", 0)), self.tr("Evidence coverage is {coverage}% and local posture is {posture}/100.").format(coverage=assurance_summary.get("coverage_percent", 0), posture=posture["score"])]
        if assurance_summary.get("delta") is not None: narrative_observations.append(self.tr("The assurance score changed by {delta:+d} points versus the selected baseline.").format(delta=int(assurance_summary["delta"])))
        narrative_items = "".join(f"<li>{html.escape(str(item))}</li>" for item in narrative_observations)
        return f"""<!doctype html><html><head><meta charset='utf-8'><meta name='viewport' content='width=device-width'><title>{html.escape(title)}</title><style>
body{{margin:0;background:#07111f;color:#e7f0fa;font:15px system-ui,sans-serif}}main{{max-width:1100px;margin:auto;padding:28px}}.hero{{min-height:260px;border:1px solid #17375b;border-radius:22px;background-color:#0a1830;background-size:cover;background-position:center;display:flex;align-items:flex-end;padding:32px;box-sizing:border-box}}h1{{font-size:34px;margin:0}}.scope{{color:#9db4cc;margin-top:8px}}.metrics{{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:14px;margin:20px 0}}.metric{{background:#0d1e33;border:1px solid #1c3b5d;border-radius:16px;padding:18px}}.metric span{{display:block;color:#9db4cc}}.metric strong{{display:block;font-size:26px;margin-top:7px}}.good strong{{color:#34d399}}.warn strong{{color:#fbbf24}}.risk strong{{color:#fb7185}}.panel{{background:#0d1e33;border:1px solid #1c3b5d;border-radius:16px;padding:20px;margin-top:16px}}table{{width:100%;border-collapse:collapse}}th,td{{text-align:left;padding:10px;border-bottom:1px solid #1c3b5d}}th{{color:#7dd3fc}}.severity{{font-weight:700}}.critical,.high{{color:#fb7185}}.medium{{color:#fbbf24}}.low,.info{{color:#7dd3fc}}footer{{color:#7890a8;margin-top:24px;font-size:12px}}@media(max-width:760px){{.metrics{{grid-template-columns:1fr 1fr}}}}
</style></head><body><main><header class='hero' style='{banner_style}'><div><h1>{html.escape(title)}</h1><div class='scope'>{html.escape(self.tr('Data scope: {name}').format(name=data['scope']['environment']))}</div></div></header><div class='metrics'>{card_html}</div><section class='panel'><h2>{html.escape(self.tr('Executive assurance narrative'))}</h2><h3>{html.escape(narrative_headline)}</h3><ul>{narrative_items}</ul><p>{html.escape(self.tr('Local evidence limitation: validate results against authoritative tenant and governance records.'))}</p></section><section class='panel'><h2>{html.escape(self.tr('Continuous assurance'))}</h2><p>{html.escape(self.tr('Evidence coverage: {coverage}%').format(coverage=assurance['summary']['coverage_percent']))}</p><table><thead><tr><th>{html.escape(self.tr('Control'))}</th><th>{html.escape(self.tr('Status'))}</th><th>{html.escape(self.tr('Control objective'))}</th><th>{html.escape(self.tr('Framework mapping'))}</th></tr></thead><tbody>{assurance_rows}</tbody></table></section><section class='panel'><h2>{html.escape(self.tr('Security findings'))}</h2><table><thead><tr><th>{html.escape(self.tr('Severity'))}</th><th>{html.escape(self.tr('Finding'))}</th><th>{html.escape(self.tr('Count'))}</th></tr></thead><tbody>{finding_rows}</tbody></table></section><section class='panel'><h2>{html.escape(self.tr('Recent evidence'))}</h2><table><thead><tr><th>{html.escape(self.tr('Time'))}</th><th>{html.escape(self.tr('Source'))}</th><th>{html.escape(self.tr('Evidence'))}</th></tr></thead><tbody>{event_rows}</tbody></table></section><section class='panel'><h2>{html.escape(self.tr('Incident signals'))}</h2><p>{html.escape(self.tr('High'))}: {int(incidents['high'])} · {html.escape(self.tr('Medium'))}: {int(incidents['medium'])}</p></section><footer>ZS API Client · {html.escape(self.tr('Generated locally; credentials are never included.'))}</footer></main></body></html>"""

    def export_report(self, format_name):
        data = privacy_safe(self._report_data(), self.settings, "export")
        if format_name == "json":
            path, _ = QFileDialog.getSaveFileName(self, self.tr("Export report as JSON"), "security-report.json", "JSON (*.json)")
            content = json.dumps(data, indent=2, ensure_ascii=False)
        elif format_name == "html":
            path, _ = QFileDialog.getSaveFileName(self, self.tr("Export visual report as HTML"), "security-report.html", "HTML (*.html)")
            content = self._report_html(data)
        else:
            path, _ = QFileDialog.getSaveFileName(self, self.tr("Export report as Markdown"), "security-report.md", "Markdown (*.md)")
            content = "\n".join(self._report_lines(data)) + "\n"
        if path:
            Path(path).write_text(content, encoding="utf-8")
            self._scope_audit().append("security_report_exported", {"kind": data["kind"], "format": format_name, "file": os.path.basename(path)})

    def _active_chain_base_url(self):
        """Return the selected product's approved API origin, never a user-provided host."""
        api = self.window._current_api_type()
        settings = self.settings
        if api == "OneAPI":
            cloud = str(settings.value("oneapi/cloud", "")).strip()
            return f"https://api.{cloud.lower()}.zsapi.net" if cloud and cloud.upper() != "PRODUCTION" and "." not in cloud else "https://api.zsapi.net"
        values = {
            "ZIA": ("zia/cloud", "zsapi.zscaler.net"), "ZPA": ("zpa/cloud", "config.private.zscaler.com"),
            "ZDX": ("zdx/cloud", "api.zdxcloud.net"), "ZCC": ("zcc/cloud", ""),
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
            {"id": step["id"], "method": step["method"], "url": redact_url(step.get("resolved_url", step["url"])), "headers": mask(step.get("headers", {})), "body_mode": step.get("body_mode", "json"), "body": mask(step.get("body"))}
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
        self.api_chain_result.clear()
        self.api_chain_table.setRowCount(0); self.api_chain_chart.set_values([]); self._last_chain_results = []
        self.api_chain_worker = ApiChainWorker(steps, headers, stop_on_failure=self.api_chain_stop_on_error.isChecked())
        self.api_chain_worker.progress.connect(self._on_api_chain_progress)
        self.api_chain_worker.retrying.connect(self._on_api_chain_retrying)
        self.api_chain_worker.finished.connect(self._on_api_chain_finished)
        self.api_chain_worker.start()
        self.cancel_chain_btn.setEnabled(True)
        AuditTrail(self.settings).append("api_chain_started", {"count": len(steps), "api": self.window._current_api_type(), "write_steps": len(writes), "stop_on_failure": self.api_chain_stop_on_error.isChecked()})

    def _on_api_chain_progress(self, completed, total):
        self.api_chain_result.setPlainText(self.tr("Running API chain step {completed} of {total}...").format(completed=completed, total=total))

    def _on_api_chain_retrying(self, attempt, maximum, seconds):
        self.api_chain_result.setPlainText(self.tr("Safe read retry {attempt} of {maximum} in {seconds} second(s)…").format(attempt=attempt, maximum=maximum, seconds=seconds))

    def cancel_api_chain(self):
        worker = getattr(self, "api_chain_worker", None)
        if worker is not None and worker.isRunning():
            worker.requestInterruption(); self.cancel_chain_btn.setEnabled(False)
            self.api_chain_result.setPlainText(self.tr("Cancellation requested; the current HTTP request will finish and no new chain step will start."))

    def _on_api_chain_finished(self, result):
        self.cancel_chain_btn.setEnabled(False)
        results = result.get("results", [])
        successful = sum(1 for item in results if item.get("success")); failed = len(results) - successful
        safe_results = redact_sensitive(mask(results))
        display_results = privacy_safe(safe_results, self.settings, "display")
        for item in display_results:
            request = item.get("request", {})
            if isinstance(request, dict) and "url" in request:
                request["url"] = redact_url(request["url"])
        self.api_chain_result.setPlainText(json.dumps(display_results, indent=2, ensure_ascii=False))
        self._last_chain_results = safe_results
        self.api_chain_table.setRowCount(len(results))
        for row, item in enumerate(results):
            request = item.get("request", {})
            status = api_result_status(item)
            business = PaginatedApiWorker._business_payload(item.get("data")) if item.get("success") else None
            page_records, _ = paginated_records(business)
            display_request = privacy_safe(request, self.settings, "display")
            values = (
                str(display_request.get("id", f"step{row + 1}")), str(request.get("method", "")),
                str(status), str(len(page_records)) if page_records is not None else "—",
                self.tr("{duration} ms").format(duration=item.get("duration_ms", 0)),
            )
            for column, value in enumerate(values):
                cell = QTableWidgetItem(value)
                if column == 2:
                    cell.setForeground(QColor("#2e7d32" if item.get("success") else "#c62828"))
                self.api_chain_table.setItem(row, column, cell)
        self.api_chain_table.resizeColumnsToContents()
        self.api_chain_chart.set_values([(self.tr("Succeeded"), float(successful)), (self.tr("Failed"), float(failed))])
        for item in results:
            request = item.get("request", {})
            self.window._add_to_history(request.get("method", ""), request.get("url", ""), request.get("headers", {}), request.get("body"), status=api_result_status(item), response_headers=api_result_headers(item))
        stopped_early = bool(result.get("stopped_early"))
        cancelled = bool(result.get("cancelled"))
        AuditTrail(self.settings).append("api_chain_finished", {"successful": successful, "failed": failed, "stopped_early": stopped_early, "cancelled": cancelled})
        message = self.tr("API chain completed: {successful} succeeded, {failed} failed.").format(successful=successful, failed=failed)
        if cancelled:
            message += "\n\n" + self.tr("The chain was cancelled before all steps started; completed results were retained.")
        elif stopped_early:
            message += "\n\n" + self.tr("The chain stopped after the first failed step.")
        QMessageBox.information(self, self.tr("API chains"), message)

    def export_api_chain(self):
        if not self._last_chain_results:
            QMessageBox.information(self, self.tr("API chains"), self.tr("Run a chain before exporting its masked results.")); return
        path, selected = QFileDialog.getSaveFileName(self, self.tr("Export masked chain results"), "api-chain-results.json", "JSON (*.json);;CSV (*.csv)")
        if not path:
            return
        safe_results = privacy_safe(self._last_chain_results, self.settings, "export")
        if Path(path).suffix.lower() == ".csv" or "CSV" in selected:
            output = io.StringIO(); writer = csv.writer(output); writer.writerow(["step", "method", "url", "status", "duration_ms", "error"])
            for index, item in enumerate(safe_results, 1):
                request = item.get("request", {})
                writer.writerow([request.get("id", f"step{index}"), request.get("method", ""), redact_url(request.get("url", "")), api_result_status(item), item.get("duration_ms", 0), item.get("error", "")])
            Path(path).write_text(output.getvalue(), encoding="utf-8")
        else:
            Path(path).write_text(json.dumps(safe_results, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
        AuditTrail(self.settings).append("api_chain_exported", {"format": "csv" if Path(path).suffix.lower() == ".csv" else "json", "steps": len(safe_results), "file": os.path.basename(path)})

    def _policy_snapshots(self):
        try:
            values = json.loads(str(self.settings.value("policy/snapshots", "[]") or "[]"))
        except (TypeError, ValueError):
            values = []
        return [item for item in values if isinstance(item, dict) and isinstance(item.get("policy"), (dict, list)) and item.get("id")]

    def refresh_policy_snapshots(self):
        selected = self.twin_snapshot_choice.currentData() if self.twin_snapshot_choice.count() else None
        self.twin_snapshot_choice.clear(); self.twin_snapshot_choice.addItem(self.tr("No baseline (analyze current policy only)"), "")
        for item in self._policy_snapshots():
            if self._scope_id() not in {"*", str(item.get("environment_id") or "default")}:
                continue
            timestamp = time.strftime("%Y-%m-%d %H:%M", time.localtime(int(item.get("timestamp", 0))))
            self.twin_snapshot_choice.addItem(f"{item.get('name', self.tr('Snapshot'))} · {timestamp}", item["id"])
        index = self.twin_snapshot_choice.findData(selected); self.twin_snapshot_choice.setCurrentIndex(index if index >= 0 else 0)

    def _selected_policy_snapshot(self):
        snapshot_id = str(self.twin_snapshot_choice.currentData() or "")
        return next((item for item in self._policy_snapshots() if str(item.get("id")) == snapshot_id), None)

    def analyze_policy_twin(self, _checked=False, record_audit=True):
        try:
            policy = self._json(self.twin_policy_input, [])
        except ValueError as exc:
            QMessageBox.warning(self, self.tr("Policy twin"), str(exc)); return
        snapshot = self._selected_policy_snapshot(); baseline = snapshot.get("policy") if snapshot else None
        raw_twin = policy_twin(policy, baseline)
        self._last_policy_twin = raw_twin
        twin = privacy_safe(raw_twin, self.settings, "display"); summary = twin["summary"]
        self.twin_cards["rules"].setText(str(summary["rules"])); self.twin_cards["conflicts"].setText(str(summary["conflicts"])); self.twin_cards["shadowed"].setText(str(summary["shadowed"])); self.twin_cards["blast_radius"].setText(f"{summary['blast_radius']}/100")
        self.twin_cards["conflicts"].setStyleSheet("color: #fb7185;" if summary["conflicts"] else "color: #34d399;")
        self.twin_cards["blast_radius"].setStyleSheet("color: #fb7185;" if summary["blast_radius"] >= 60 else "color: #fbbf24;" if summary["blast_radius"] >= 30 else "color: #34d399;")
        self.twin_graph.set_graph(twin["nodes"], twin["edges"])
        findings = twin["findings"]; self.twin_findings.setRowCount(len(findings))
        finding_names = {"unconditional_allow": self.tr("Unconditional allow"), "shadowed_conflict": self.tr("Shadowed conflict"), "redundant_shadow": self.tr("Redundant shadow"), "overlap_conflict": self.tr("Overlapping actions"), "duplicate_name": self.tr("Duplicate rule name")}
        detail_names = {
            "An unconditional allow rule can expose every later matching scope.": self.tr("An unconditional allow rule can expose every later matching scope."),
            "The later rule can never decide because an earlier rule covers all of its matches.": self.tr("The later rule can never decide because an earlier rule covers all of its matches."),
            "The rules can match the same context but have different actions; order decides the outcome.": self.tr("The rules can match the same context but have different actions; order decides the outcome."),
            "Duplicate rule names make reviews, evidence, and rollback ambiguous.": self.tr("Duplicate rule names make reviews, evidence, and rollback ambiguous."),
        }
        severity_names = {"high": self.tr("High"), "medium": self.tr("Medium"), "low": self.tr("Low"), "info": self.tr("Info")}
        for row, finding in enumerate(findings):
            values = (severity_names.get(finding["severity"], finding["severity"]), finding_names.get(finding["kind"], finding["kind"]), finding["earlier"], finding["later"], detail_names.get(finding["detail"], finding["detail"]))
            for column, value in enumerate(values):
                item = self._severity_item(str(value), finding["severity"]) if column == 0 else QTableWidgetItem(str(value)); self.twin_findings.setItem(row, column, item)
        self.twin_findings.resizeColumnsToContents()
        changed = summary["changed_rules"]
        self.twin_explanation.setText(self.tr("Policy twin: {rules} rule(s), {findings} finding(s), blast radius {score}/100, {changed} changed rule(s) versus baseline.").format(rules=summary["rules"], findings=len(findings), score=summary["blast_radius"], changed=changed))
        if record_audit:
            self._scope_audit().append("policy_twin_analyzed", {"rules": summary["rules"], "findings": len(findings), "blast_radius": summary["blast_radius"], "baseline": bool(snapshot)})

    def explain_twin_decision(self):
        try:
            policy = self._json(self.twin_policy_input, []); context = json.loads(self.twin_context.text().strip() or "{}")
            if not isinstance(context, dict): raise ValueError(self.tr("Request context must be a JSON object."))
            rules = policy if isinstance(policy, list) else policy.get("rules", []) if isinstance(policy, dict) else []
            result = privacy_safe(simulate_policy_trace(rules, context), self.settings, "display")
        except (TypeError, ValueError) as exc:
            QMessageBox.warning(self, self.tr("Policy twin"), str(exc)); return
        if result["matched"]:
            message = self.tr("Decision: {action}. Rule “{name}” matched after evaluating {count} rule(s).").format(action=str(result["action"]).upper(), name=result["name"], count=len(result["trace"]))
        else:
            message = self.tr("Decision: no match after evaluating {count} rule(s).").format(count=len(result["trace"]))
        self.twin_explanation.setText(message); self._scope_audit().append("policy_twin_decision_explained", {"matched": result["matched"], "evaluated": len(result["trace"]), "action": result["action"]})

    def export_policy_twin(self):
        if not getattr(self, "_last_policy_twin", None): self.analyze_policy_twin()
        if not getattr(self, "_last_policy_twin", None): return
        path, _ = QFileDialog.getSaveFileName(self, self.tr("Export twin evidence"), "policy-twin.json", "JSON (*.json);;PNG graph (*.png)")
        if not path: return
        safe = privacy_safe(self._last_policy_twin, self.settings, "export")
        if Path(path).suffix.lower() == ".png":
            display = privacy_safe(self._last_policy_twin, self.settings, "display")
            self.twin_graph.set_graph(safe["nodes"], safe["edges"]); self.twin_graph.grab().save(path, "PNG"); self.twin_graph.set_graph(display["nodes"], display["edges"])
            format_name = "png"
        else:
            Path(path).write_text(json.dumps(safe, indent=2, ensure_ascii=False) + "\n", encoding="utf-8"); format_name = "json"
        self._scope_audit().append("policy_twin_exported", {"format": format_name, "file": os.path.basename(path), "rules": safe["summary"]["rules"]})

    def load_proposed_into_twin(self):
        try:
            policy = self._json(self.after_policy, {})
        except ValueError as exc:
            QMessageBox.warning(self, self.tr("Policy twin"), str(exc)); return
        self.twin_policy_input.setPlainText(json.dumps(policy, indent=2, ensure_ascii=False)); self.analyze_policy_twin(); self.tabs.setCurrentIndex(self.twin_tab_index)

    def save_policy_snapshot(self):
        if self._scope_id() == "*":
            QMessageBox.warning(self, self.tr("Policy time travel"), self.tr("Select one environment before saving a policy snapshot.")); return
        try:
            policy = self._json(self.twin_policy_input, [])
        except ValueError as exc:
            QMessageBox.warning(self, self.tr("Policy time travel"), str(exc)); return
        if len(json.dumps(policy, ensure_ascii=False).encode("utf-8")) > 2 * 1024 * 1024:
            QMessageBox.warning(self, self.tr("Policy time travel"), self.tr("Policy snapshots are limited to 2 MB.")); return
        name, ok = QInputDialog.getText(self, self.tr("Save policy snapshot"), self.tr("Snapshot name:"))
        name = str(name).strip()[:60]
        if not ok or not name: return
        scope = self._scope_metadata(); snapshots = self._policy_snapshots()
        snapshots.append({"id": uuid.uuid4().hex, "name": name, "timestamp": int(time.time()), "environment_id": scope["environment_id"], "environment": scope["environment"], "policy": redact_sensitive(policy)})
        self.settings.setValue("policy/snapshots", json.dumps(snapshots[-50:], ensure_ascii=False)); self.refresh_policy_snapshots(); self.twin_snapshot_choice.setCurrentIndex(self.twin_snapshot_choice.count() - 1)
        self._scope_audit().append("policy_snapshot_saved", {"name": name, "rules": policy_twin(policy)["summary"]["rules"]})

    def load_policy_snapshot(self):
        snapshot = self._selected_policy_snapshot()
        if not snapshot:
            QMessageBox.information(self, self.tr("Policy time travel"), self.tr("Select a saved policy snapshot first.")); return
        self.twin_policy_input.setPlainText(json.dumps(snapshot["policy"], indent=2, ensure_ascii=False)); self.analyze_policy_twin(); self._scope_audit().append("policy_snapshot_loaded", {"name": snapshot.get("name", "")})

    def delete_policy_snapshot(self):
        snapshot = self._selected_policy_snapshot()
        if not snapshot: return
        if QMessageBox.question(self, self.tr("Delete policy snapshot"), self.tr("Delete the selected local policy snapshot?"), QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.Cancel, QMessageBox.StandardButton.Cancel) != QMessageBox.StandardButton.Yes: return
        snapshots = [item for item in self._policy_snapshots() if item["id"] != snapshot["id"]]
        self.settings.setValue("policy/snapshots", json.dumps(snapshots, ensure_ascii=False)); self.refresh_policy_snapshots(); self._scope_audit().append("policy_snapshot_deleted", {"name": snapshot.get("name", "")})

    def compare_policies(self):
        try:
            after = self._json(self.after_policy, {})
            changes = policy_diff(self._json(self.before_policy, {}), after)
            counts = {kind: sum(1 for item in changes if item["change"] == kind) for kind in ("added", "removed", "changed")}
            self.diff_result.setPlainText(json.dumps(privacy_safe({"summary": counts, "changes": changes}, self.settings, "display"), indent=2))
            self._render_policy_overview(after)
        except ValueError as exc: QMessageBox.warning(self, self.tr("Policy diff"), str(exc))

    def _render_policy_overview(self, policy):
        overview = privacy_safe(policy_overview(policy), self.settings, "display")
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
        try: payload = policy_as_code(privacy_safe(self._json(self.after_policy, {}), self.settings, "export"), format_name)
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
        self._render_policy_overview(policy); self._render_best_practices(privacy_safe(findings, self.settings, "display"))
        self.diff_result.setPlainText(json.dumps(privacy_safe({"best_practice_findings": findings, "count": len(findings), "scope": "local policy heuristic"}, self.settings, "display"), indent=2))

    def run_simulation(self):
        try:
            result = simulate_policy_trace(self._json(self.rules_input, []), self._json(self.context_input, {}))
            display_result = privacy_safe(result, self.settings, "display")
            self.simulation_result.setPlainText(json.dumps(display_result, indent=2))
            trace = display_result["trace"]
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
        if not secure_store(WEBHOOK_CREDENTIAL_KEY, webhook_endpoint):
            QMessageBox.warning(self, self.tr("Secure storage"), self.tr("The system keychain could not save the webhook endpoint. Check the keychain service and try again.")); return
        self.settings.remove("automation/webhook_url")
        self.settings.setValue("automation/local_plugin", automation_path)
        AuditTrail(self.settings).append("governance_updated", {"role": self.role_choice.currentData(), "threshold": threshold, "webhook_configured": bool(webhook_endpoint), "plugin_configured": bool(automation_path)})
        QMessageBox.information(self, self.tr("Governance"), self.tr("Governance settings saved."))

    def refresh_integrations(self):
        sdk_available = bool(__import__("importlib").util.find_spec("zscaler"))
        tools = [("Zscaler Python SDK", sdk_available, self.tr("Use OneAPI or legacy clients locally")), ("Zscaler MCP Server", bool(shutil.which("zscaler-mcp-server")), self.tr("AI-assisted, tool-scoped exploration")), ("zscaler-terraformer", bool(shutil.which("zscaler-terraformer")), self.tr("Export existing ZIA/ZPA configuration to Terraform"))]
        self.integration_status.setRowCount(len(tools))
        for row, (name, available, use) in enumerate(tools):
            self.integration_status.setItem(row, 0, QTableWidgetItem(name)); self.integration_status.setItem(row, 1, QTableWidgetItem(self.tr("Available") if available else self.tr("Not installed"))); self.integration_status.setItem(row, 2, QTableWidgetItem(use))

    def refresh_webhook_history(self):
        """Render only redacted webhook audit metadata; endpoint paths never appear."""
        events = [event for event in reversed(self._scoped_events()) if str(event.get("action", "")).startswith("webhook_")][:100]
        labels = {"test": self.tr("Connectivity test"), "alerts": self.tr("Alert snapshot")}
        states = {"started": self.tr("Started"), "completed": self.tr("Succeeded"), "failed": self.tr("Failed")}
        colors = {"started": "#38bdf8", "completed": "#22c55e", "failed": "#ef4444"}
        self.webhook_history.setRowCount(len(events))
        for row, event in enumerate(events):
            parts = str(event.get("action", "")).split("_")
            kind = parts[1] if len(parts) > 2 else "unknown"; state = parts[-1] if parts else "unknown"
            details = redact_sensitive(event.get("details", {}))
            values = (time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(event.get("timestamp", 0))), labels.get(kind, kind), states.get(state, state), json.dumps(details, ensure_ascii=False))
            for column, value in enumerate(values):
                item = QTableWidgetItem(str(value))
                if column == 2:
                    item.setForeground(QColor(colors.get(state, "#94a3b8"))); font = item.font(); font.setBold(True); item.setFont(font)
                self.webhook_history.setItem(row, column, item)

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
        QApplication.clipboard().setText(str(privacy_safe(preview, self.settings, "clipboard")))
        AuditTrail(self.settings).append("integration_command_copied", {})
        self.integration_preview.setToolTip(self.tr("Copied to clipboard"))

    def export_security_events(self):
        format_name = self.siem_format.currentData() or "jsonl"; extensions = {"jsonl": "jsonl", "cef": "cef", "leef": "leef"}
        path, _ = QFileDialog.getSaveFileName(self, self.tr("Export masked security events"), f"zs-security-events.{extensions[format_name]}", self.tr("All files (*)"))
        if not path: return
        safe_history = privacy_safe(self._scoped_history(), self.settings, "export"); content = security_event_export(safe_history, format_name); Path(path).write_text(content, encoding="utf-8")
        self.integration_preview.setPlainText(self.tr("Exported {count} masked local event(s) as {format}. No data was sent automatically.").format(count=len(safe_history[-5000:]), format=format_name.upper())); self._scope_audit().append("security_events_exported", {"format": format_name, "events": len(safe_history[-5000:]), "file": os.path.basename(path)})

    def export_mcp_manifest(self):
        path, _ = QFileDialog.getSaveFileName(self, self.tr("Export read-only MCP manifest"), "mcp-read-only-manifest.json", "JSON (*.json)")
        if not path: return
        manifest = privacy_safe(read_only_mcp_manifest(self._scope_metadata()), self.settings, "export"); Path(path).write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
        self.integration_preview.setPlainText(json.dumps(manifest, indent=2, ensure_ascii=False)); self._scope_audit().append("mcp_manifest_exported", {"file": os.path.basename(path), "writes_enabled": False})

    def export_terraform_handoff(self):
        try: policy = self._json(self.after_policy, {})
        except ValueError as exc: QMessageBox.warning(self, self.tr("Integrations"), str(exc)); return
        path, _ = QFileDialog.getSaveFileName(self, self.tr("Export Terraform review handoff"), "terraform-review-handoff.zip", "ZIP (*.zip)")
        if not path: return
        safe_policy = privacy_safe(policy, self.settings, "export"); files = terraform_review_handoff(safe_policy, privacy_safe(self._scope_metadata(), self.settings, "export"))
        with zipfile.ZipFile(path, "w", zipfile.ZIP_DEFLATED) as archive:
            for name, content in files.items(): archive.writestr(name, content)
        self.integration_preview.setPlainText(self.tr("Created a non-executable Terraform review handoff. Run terraformer and terraform plan only after independent review; this client never applies it.")); self._scope_audit().append("terraform_handoff_exported", {"file": os.path.basename(path), "files": sorted(files)})

    def _webhook_payload(self):
        posture = security_posture(self._scoped_history(), AuditTrail(self.settings).verify())
        return {"source": "ZS API Client", "event": "connectivity_test", "timestamp": int(time.time()), "scope": self._scope_metadata(), "posture": {"score": posture["score"], "metrics": posture["metrics"]}}

    def _webhook_alert_payload(self):
        posture = security_posture(self._scoped_history(), AuditTrail(self.settings).verify())
        return redact_sensitive({
            "source": "ZS API Client", "event": "local_alert_snapshot", "timestamp": int(time.time()), "scope": self._scope_metadata(),
            "posture": {"score": posture["score"], "metrics": posture["metrics"]},
            "alerts": self._alert_data(),
        })

    def _local_automation_payload(self):
        """Build the only data passed to local automation; credentials and raw responses are excluded."""
        posture = security_posture(self._scoped_history(), AuditTrail(self.settings).verify())
        return privacy_safe({
            "source": "ZS API Client", "event": "local_security_snapshot", "timestamp": int(time.time()), "scope": self._scope_metadata(),
            "posture": {"score": posture["score"], "metrics": posture["metrics"], "findings": posture["findings"]},
            "alerts": self._alert_data(),
        }, self.settings, "external")

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
        scope = self._scope_metadata()
        if QMessageBox.question(
            self, self.tr("Local automation"),
            self.tr("Run the reviewed Python file with masked local posture and alert data? The process receives no API credentials.") + "\n\n" + self.tr("Data scope: {name}").format(name=scope["environment"]),
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
        self._local_automation_audit_scope = scope
        self._scope_audit(scope).append("local_automation_started", {"script": script.name, "input_bytes": len(payload.encode("utf-8"))})
        process.start()
        QTimer.singleShot(15_000, self._timeout_local_automation)

    def _timeout_local_automation(self):
        process = getattr(self, "local_automation_process", None)
        if process is not None and process.state() != QProcess.ProcessState.NotRunning:
            self._local_automation_timed_out = True
            process.kill()
            self._scope_audit(getattr(self, "_local_automation_audit_scope", None)).append("local_automation_timed_out", {})
            QMessageBox.warning(self, self.tr("Local automation"), self.tr("Local automation exceeded the 15-second limit and was stopped."))

    def _on_local_automation_finished(self, exit_code, exit_status):
        process = self.local_automation_process
        stdout = bytes(process.readAllStandardOutput()).decode("utf-8", "replace")[:65_536]
        stderr = bytes(process.readAllStandardError()).decode("utf-8", "replace")[:65_536]
        result = privacy_safe({"exit_code": int(exit_code), "stdout": stdout, "stderr": stderr}, self.settings, "display")
        self.integration_preview.setPlainText(json.dumps(result, indent=2, ensure_ascii=False))
        self._scope_audit(getattr(self, "_local_automation_audit_scope", None)).append("local_automation_finished", {"exit_code": int(exit_code), "stdout_bytes": len(stdout.encode("utf-8")), "stderr_bytes": len(stderr.encode("utf-8"))})
        if not getattr(self, "_local_automation_timed_out", False):
            QMessageBox.information(self, self.tr("Local automation"), self.tr("Local automation completed with exit code {code}.").format(code=exit_code))

    def _on_local_automation_error(self, process_error):
        self._scope_audit(getattr(self, "_local_automation_audit_scope", None)).append("local_automation_failed", {"process_error": str(process_error)})
        if process_error == QProcess.ProcessError.FailedToStart:
            QMessageBox.warning(self, self.tr("Local automation"), self.tr("Local automation failed to start."))

    def send_webhook_test(self):
        self._send_webhook_delivery(self._webhook_payload(), "test", self.tr("Send a masked connectivity test to the configured webhook endpoint?"))

    def send_webhook_alerts(self):
        self._send_webhook_delivery(self._webhook_alert_payload(), "alerts", self.tr("Send the current masked local alert snapshot to the configured webhook endpoint?"))

    def _send_webhook_delivery(self, payload, kind, confirmation):
        endpoint, error = validate_webhook_endpoint(secure_webhook_endpoint(self.settings))
        if endpoint is None:
            message = self.tr("Configure a webhook endpoint in Governance first.") if error == "missing" else self.tr("Webhook endpoints must use HTTPS (or local HTTP) and must not contain credentials in the URL.")
            QMessageBox.warning(self, self.tr("Webhook delivery"), message); return
        if hasattr(self, "webhook_worker") and self.webhook_worker.isRunning():
            QMessageBox.information(self, self.tr("Webhook delivery"), self.tr("A webhook delivery is already running.")); return
        safe_payload = privacy_safe(payload, self.settings, "external")
        self.integration_preview.setPlainText(json.dumps(safe_payload, indent=2, ensure_ascii=False))
        scope = self._scope_metadata()
        if QMessageBox.question(self, self.tr("Webhook delivery"), confirmation + "\n\n" + self.tr("Data scope: {name}").format(name=scope["environment"]), QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.Cancel, QMessageBox.StandardButton.Cancel) != QMessageBox.StandardButton.Yes:
            return
        parsed = urllib.parse.urlsplit(endpoint)
        def send():
            request = urllib.request.Request(endpoint, data=json.dumps(safe_payload).encode("utf-8"), headers={"Content-Type": "application/json"}, method="POST")
            with build_network_opener(self.settings, allow_redirects=False).open(request, timeout=10) as response:
                return str(getattr(response, "status", 200))
        self._webhook_delivery_kind = kind
        self._webhook_delivery_scope = scope
        self.webhook_worker = LlmWorker(send)
        self.webhook_worker.completed.connect(self._on_webhook_completed)
        self.webhook_worker.failed.connect(self._on_webhook_failed)
        self._scope_audit(scope).append(f"webhook_{kind}_started", {"endpoint_host": parsed.hostname or "", "payload_bytes": len(json.dumps(safe_payload).encode("utf-8"))})
        self.webhook_worker.start()
        self.refresh_webhook_history(); self.refresh_audit()

    def _on_webhook_completed(self, status):
        kind = getattr(self, "_webhook_delivery_kind", "unknown")
        self._scope_audit(getattr(self, "_webhook_delivery_scope", None)).append(f"webhook_{kind}_completed", {"status": status})
        self.refresh_webhook_history(); self.refresh_audit()
        QMessageBox.information(self, self.tr("Webhook delivery"), self.tr("Masked webhook delivery succeeded (HTTP {status}).").format(status=status))

    def _on_webhook_failed(self, error):
        kind = getattr(self, "_webhook_delivery_kind", "unknown")
        safe_error = privacy_safe(error, self.settings, "display")
        self._scope_audit(getattr(self, "_webhook_delivery_scope", None)).append(f"webhook_{kind}_failed", {"error": safe_error})
        self.refresh_webhook_history(); self.refresh_audit()
        QMessageBox.warning(self, self.tr("Webhook delivery"), self.tr("Masked webhook delivery failed: {error}").format(error=safe_error))

    def refresh_audit(self):
        events = list(reversed(privacy_safe(self._scoped_events(), self.settings, "display")))
        self.audit_timeline.setRowCount(len(events))
        for row, event in enumerate(events):
            self.audit_timeline.setItem(row, 0, QTableWidgetItem(time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(event.get("timestamp", 0)))))
            self.audit_timeline.setItem(row, 1, QTableWidgetItem(str(event.get("environment") or "Default")))
            self.audit_timeline.setItem(row, 2, QTableWidgetItem(event.get("action", "")))
            self.audit_timeline.setItem(row, 3, QTableWidgetItem(json.dumps(event.get("details", {}), ensure_ascii=False)))

    def refresh_schedules(self):
        schedules = environment_scope(self.window._report_schedules(), self._scope_id())
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
                str(schedule.get("name", "")), str(schedule.get("environment") or "Default"), type_labels.get(str(schedule.get("kind", "ciso")), type_labels["ciso"]),
                cadence_labels.get(cadence, f"{cadence // 3600} h"),
                time.strftime("%Y-%m-%d %H:%M", time.localtime(next_run)) if next_run else "—",
                self.tr("Background") if schedule.get("background", False) else self.tr("App only"),
                self.tr("Enabled") if schedule.get("enabled", True) else self.tr("Paused"),
            )
            for column, value in enumerate(values):
                self.report_schedules.setItem(row, column, QTableWidgetItem(value))
            self.report_schedules.item(row, 0).setData(Qt.ItemDataRole.UserRole, str(schedule.get("id", "")))

    def _selected_schedule_row(self):
        row = self.report_schedules.currentRow()
        schedules = self.window._report_schedules()
        selected_id = str(self.report_schedules.item(row, 0).data(Qt.ItemDataRole.UserRole) or "") if row >= 0 and self.report_schedules.item(row, 0) else ""
        index = next((index for index, schedule in enumerate(schedules) if str(schedule.get("id", "")) == selected_id), -1)
        if index < 0:
            QMessageBox.information(self, self.tr("Scheduled report"), self.tr("Select a scheduled report first."))
            return -1, schedules
        return index, schedules

    def _schedule_audit(self, schedule: dict[str, Any]) -> AuditTrail:
        scope = environment_scope_metadata(str(schedule.get("environment_id") or "default"), str(schedule.get("environment") or "Default"))
        return AuditTrail(self.settings, environment_id=scope["environment_id"], environment_name=scope["environment"])

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
        schedule = schedules[row]; enable = not schedule.get("enabled", True)
        scheduler_error = None
        if schedule.get("background", False):
            if enable:
                try:
                    schedule["scheduler_backend"] = register_background_schedule(schedule, application_invocation())
                except (OSError, RuntimeError, ValueError, subprocess.SubprocessError) as error:
                    self._schedule_audit(schedule).append("scheduled_report_scheduler_failed", {"id": str(schedule.get("id", "")), "operation": "enable", "reason": type(error).__name__})
                    QMessageBox.warning(self, self.tr("Scheduled report"), self.tr("The operating-system schedule could not be updated. No state was changed.")); return
            else:
                # Persist the pause first: even a stale OS job will see the
                # disabled flag and refuse to generate a report.
                schedule["enabled"] = False
                self.settings.setValue("automation/schedules", json.dumps(schedules))
                try:
                    unregister_background_schedule(str(schedule.get("id", "")))
                except (OSError, RuntimeError, ValueError, subprocess.SubprocessError) as error:
                    scheduler_error = type(error).__name__
                    self._schedule_audit(schedule).append("scheduled_report_scheduler_failed", {"id": str(schedule.get("id", "")), "operation": "pause", "reason": scheduler_error})
        schedule["enabled"] = enable
        self.settings.setValue("automation/schedules", json.dumps(schedules))
        self._schedule_audit(schedule).append("scheduled_report_toggled", {"id": str(schedule.get("id", "")), "name": str(schedule.get("name", "")), "enabled": schedule["enabled"], "background": bool(schedule.get("background", False))})
        self.refresh_schedules(); self.refresh_audit()
        if scheduler_error:
            QMessageBox.warning(self, self.tr("Scheduled report"), self.tr("The report is paused and cannot generate output, but the operating-system job cleanup needs manual review."))

    def remove_selected_schedule(self):
        row, schedules = self._selected_schedule_row()
        if row < 0:
            return
        if QMessageBox.question(self, self.tr("Scheduled report"), self.tr("Remove the selected scheduled report?"), QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.Cancel, QMessageBox.StandardButton.Cancel) != QMessageBox.StandardButton.Yes:
            return
        removed = schedules.pop(row)
        scheduler_error = None
        if removed.get("background", False):
            try:
                unregister_background_schedule(str(removed.get("id", "")))
            except (OSError, RuntimeError, ValueError, subprocess.SubprocessError) as error:
                scheduler_error = type(error).__name__
        self.settings.setValue("automation/schedules", json.dumps(schedules))
        self._schedule_audit(removed).append("scheduled_report_removed", {"id": str(removed.get("id", "")), "name": str(removed.get("name", "")), "scheduler_error": scheduler_error})
        self.refresh_schedules(); self.refresh_audit()
        if scheduler_error:
            QMessageBox.warning(self, self.tr("Scheduled report"), self.tr("The report was removed, but the operating-system job could not be removed. It can no longer generate a report because its schedule ID is no longer active."))

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
        background = QMessageBox.question(
            self, self.tr("Scheduled report"), self.tr("Run this report even when ZS API Client is closed? This creates a user-level operating-system schedule and requires no administrator privileges."),
            QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.No, QMessageBox.StandardButton.No,
        ) == QMessageBox.StandardButton.Yes
        scope = self._scope_metadata()
        schedule = {
            "id": uuid.uuid4().hex, "name": name.strip(), "kind": self.report_type.currentData(), "cadence_seconds": cadence_seconds,
            "output_dir": output_dir, "enabled": True, "background": background, "created": now, "next_run": now + cadence_seconds,
            **scope,
        }
        if background:
            try:
                schedule["scheduler_backend"] = register_background_schedule(schedule, application_invocation())
            except (OSError, RuntimeError, ValueError, subprocess.SubprocessError) as error:
                self._schedule_audit(schedule).append("scheduled_report_scheduler_failed", {"id": schedule["id"], "operation": "create", "reason": type(error).__name__})
                QMessageBox.warning(self, self.tr("Scheduled report"), self.tr("The operating-system schedule could not be created. The report was not scheduled.")); return
        schedules = self.window._report_schedules()
        schedules.append(schedule)
        self.settings.setValue("automation/schedules", json.dumps(schedules))
        self._schedule_audit(schedule).append("scheduled_report_created", {
            "id": schedule["id"], "name": name.strip(), "kind": self.report_type.currentData(), "cadence_seconds": cadence_seconds, "background": background, "scheduler_backend": schedule.get("scheduler_backend", "application"),
        })
        self.refresh_dashboard(); self.refresh_audit(); self.refresh_schedules()
        message = self.tr("Scheduled report saved. It will run in the background even when the application is closed.") if background else self.tr("Scheduled report saved. It will run locally while the application is open.")
        QMessageBox.information(self, self.tr("Scheduled report"), message)

    def create_support_bundle(self):
        path, _ = QFileDialog.getSaveFileName(self, self.tr("Save support bundle"), "zs-api-client-support.zip", "ZIP (*.zip)")
        if path:
            diagnostics = {"version": __version__, "scope": self._scope_metadata(), "settings": {"language": self.settings.value("language", "system"), "mode": self.settings.value("ui/mode", "basic")}}
            support_bundle(path, privacy_safe(diagnostics, self.settings, "export"), privacy_safe(self._scoped_events(), self.settings, "export"))
            self._scope_audit().append("support_bundle_created", {"file": os.path.basename(path)})
            QMessageBox.information(self, self.tr("Support bundle"), self.tr("A redacted support bundle was created."))


class PacCodeEditor(QPlainTextEdit):
    """PAC editor that explains the code beneath the pointer without execution."""

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._line_help: dict[int, str] = {}
        self.setMouseTracking(True)
        self.viewport().setMouseTracking(True)

    def set_line_help(self, line_help: dict[int, str]):
        self._line_help = dict(line_help)

    def mouseMoveEvent(self, event):
        cursor = self.cursorForPosition(event.position().toPoint())
        line = cursor.blockNumber() + 1
        explanation = self._line_help.get(line)
        if explanation:
            QToolTip.showText(event.globalPosition().toPoint(), explanation, self)
        else:
            QToolTip.hideText()
        super().mouseMoveEvent(event)


class PacSyntaxHighlighter(QSyntaxHighlighter):
    """Use restrained colors to make PAC routing decisions reviewable."""
    def __init__(self, document):
        super().__init__(document)
        self.rules = []
        for expression, color, weight in (
            (r"//.*$", "#94a3b8", False),
            (r"\b(?:function|if|else|return)\b", "#7dd3fc", True),
            (r'"DIRECT"', "#fbbf24", True),
            (r'"(?:PROXY|SOCKS)[^"]*"', "#34d399", True),
            (r"\$\{[A-Za-z0-9_.-]+\}", "#c4b5fd", True),
            (r"\b(?:\d{1,3}\.){3}\d{1,3}(?:/\d{1,2})?\b", "#fb923c", True),
            (r"\b[a-z0-9][a-z0-9.-]*\.zscaler\.net\b", "#22d3ee", True),
            (r"\b(?:dnsResolve|isResolvable|isInNet)\b", "#fb7185", True),
        ):
            style = QTextCharFormat(); style.setForeground(QColor(color))
            if weight: style.setFontWeight(QFont.Weight.Bold)
            self.rules.append((re.compile(expression, re.IGNORECASE), style))

    def highlightBlock(self, text):
        for expression, style in self.rules:
            for match in expression.finditer(text):
                self.setFormat(match.start(), match.end() - match.start(), style)


class PacWorkspaceDialog(QDialog):
    """Create, validate and safely prepare ZIA/ZCC PAC updates."""

    ZIA_VALIDATE_URL = "https://api.zsapi.net/zia/api/v1/pacFiles/validate"
    ZIA_PAC_URL = "https://api.zsapi.net/zia/api/v1/pacFiles"
    ZCC_LIST_URL = "https://api.zsapi.net/zcc/papi/public/v1/webForwardingProfile/listByCompany"
    ZCC_EDIT_URL = "https://api.zsapi.net/zcc/papi/public/v1/webForwardingProfile/edit"

    def __init__(self, window: "MainWindow"):
        super().__init__(window)
        self.window = window
        self.settings = QSettings("Zscaler", "APIClient")
        try:
            self.cenr_index = load_cenr_index(Path(__file__).parent / "data" / "zscaler_config_cenr.json")
        except (OSError, ValueError, json.JSONDecodeError):
            self.cenr_index = {"source": CONFIG_SOURCE_URL, "data_centers": []}
        self.setWindowTitle(self.tr("PAC Workspace"))
        self.resize(1120, 760)

        layout = QVBoxLayout(self)
        intro = QLabel(self.tr("Create and verify PAC files locally. API operations are prepared in the request editor and are never sent or deployed automatically."))
        intro.setWordWrap(True)
        layout.addWidget(intro)

        mode_layout = QHBoxLayout()
        mode_layout.addWidget(QLabel(self.tr("PAC experience:")))
        self.pac_mode_combo = QComboBox()
        self.pac_mode_combo.addItem(self.tr("Guided (recommended)"), "guided")
        self.pac_mode_combo.addItem(self.tr("Advanced"), "advanced")
        saved_mode = self.settings.value("pac/workspace/mode", self.settings.value("ui/mode", "basic"))
        self.pac_mode_combo.setCurrentIndex(1 if saved_mode == "advanced" else 0)
        self.pac_mode_combo.currentIndexChanged.connect(self._set_pac_mode)
        mode_layout.addWidget(self.pac_mode_combo); mode_layout.addStretch()
        layout.addLayout(mode_layout)

        metadata = QFormLayout()
        self.name_input = QLineEdit(self.settings.value("pac/workspace/name", "custom-pac"))
        self.commit_input = QLineEdit(self.settings.value("pac/workspace/commit", ""))
        self.hosted_url_input = QLineEdit(self.settings.value("pac/workspace/hosted_url", ""))
        self.zia_pac_id_input = QLineEdit(self.settings.value("pac/workspace/zia_pac_id", ""))
        self.zia_version_input = QLineEdit(self.settings.value("pac/workspace/zia_version", ""))
        self.zia_action_combo = QComboBox()
        for action in ("DEPLOY", "STAGE", "UNSTAGE", "LKG", "REMOVE_LKG"):
            self.zia_action_combo.addItem(action)
        self.hosted_url_input.setPlaceholderText("https://example.zscaler.net/custom.pac")
        metadata.addRow(self.tr("PAC name:"), self.name_input)
        metadata.addRow(self.tr("Change note:"), self.commit_input)
        metadata.addRow(self.tr("Hosted PAC URL (optional for ZCC):"), self.hosted_url_input)
        metadata.addRow(self.tr("Existing ZIA PAC ID (for lifecycle actions):"), self.zia_pac_id_input)
        metadata.addRow(self.tr("ZIA PAC version:"), self.zia_version_input)
        metadata.addRow(self.tr("ZIA version action:"), self.zia_action_combo)
        self.advanced_metadata_widgets = tuple(widget for field in (self.zia_pac_id_input, self.zia_version_input, self.zia_action_combo) for widget in (field, metadata.labelForField(field)) if widget is not None)
        layout.addLayout(metadata)

        self.tabs = QTabWidget()
        layout.addWidget(self.tabs, 1)
        guided_tab = QWidget(); guided_layout = QVBoxLayout(guided_tab)
        guided_intro = QLabel(self.tr("Start with a safe baseline. Enter only internal destinations that must bypass Zscaler; all other traffic uses the selected gateway and failover."))
        guided_intro.setWordWrap(True); guided_layout.addWidget(guided_intro)
        guided_form = QFormLayout()
        self.guided_bypass_input = QPlainTextEdit(self.settings.value("pac/workspace/guided_bypass", "*.local\nintranet.example.com"))
        self.guided_bypass_input.setPlaceholderText("*.local\nintranet.example.com")
        self.guided_bypass_input.setMaximumHeight(110)
        self.guided_gateway_input = QLineEdit(self.settings.value("pac/workspace/guided_gateway", "${GATEWAY}"))
        self.guided_secondary_input = QLineEdit(self.settings.value("pac/workspace/guided_secondary", "${SECONDARY_GATEWAY}"))
        guided_form.addRow(self.tr("Direct-bypass host patterns (one per line):"), self.guided_bypass_input)
        guided_form.addRow(self.tr("Primary gateway:"), self.guided_gateway_input)
        guided_form.addRow(self.tr("Secondary gateway:"), self.guided_secondary_input)
        guided_layout.addLayout(guided_form)
        guided_buttons = QHBoxLayout()
        guided_build = QPushButton(self.tr("Create guided PAC")); guided_build.clicked.connect(self._build_guided_pac)
        guided_example = QPushButton(self.tr("Load safe example")); guided_example.clicked.connect(self._load_guided_example)
        guided_buttons.addWidget(guided_build); guided_buttons.addWidget(guided_example); guided_buttons.addStretch(); guided_layout.addLayout(guided_buttons)
        self.guided_status = QLabel(); self.guided_status.setWordWrap(True); guided_layout.addWidget(self.guided_status)
        guided_layout.addWidget(QLabel(self.tr("Generated PAC preview (read-only):")))
        self.guided_preview = PacCodeEditor(); self.guided_preview.setReadOnly(True); self.guided_preview.setFont(QFont("Monospace")); self.guided_preview.setMinimumHeight(220)
        self.guided_highlighter = PacSyntaxHighlighter(self.guided_preview.document())
        guided_layout.addWidget(self.guided_preview, 1)
        for field in (self.guided_bypass_input, self.guided_gateway_input, self.guided_secondary_input):
            signal = field.textChanged
            signal.connect(self._refresh_guided_preview)
        self.tabs.addTab(guided_tab, self.tr("Guided setup"))
        author_tab = QWidget(); author_layout = QVBoxLayout(author_tab)
        author_layout.addWidget(QLabel(self.tr("PAC JavaScript — include FindProxyForURL(url, host). Variables use ${NAME}.")))
        self.pac_editor = PacCodeEditor(self.settings.value("pac/workspace/draft", PAC_TEMPLATE))
        pac_font = QFont("Monospace"); pac_font.setStyleHint(QFont.StyleHint.Monospace); self.pac_editor.setFont(pac_font)
        self.pac_highlighter = PacSyntaxHighlighter(self.pac_editor.document())
        self.pac_editor.textChanged.connect(self._refresh_pac_line_help)
        legend = QLabel(self.tr("Color guide: blue = PAC structure, amber = DIRECT bypass, green = proxy route, purple = variable, cyan = Zscaler endpoint, orange = IP/network, red = performance-sensitive DNS helper."))
        legend.setObjectName("mutedLabel"); legend.setWordWrap(True); author_layout.addWidget(legend)
        author_layout.addWidget(self.pac_editor, 1)
        author_buttons = QHBoxLayout()
        load_button = QPushButton(self.tr("Load PAC…")); load_button.clicked.connect(self._load_pac)
        save_button = QPushButton(self.tr("Save PAC…")); save_button.clicked.connect(self._save_pac)
        draft_button = QPushButton(self.tr("Save local draft")); draft_button.clicked.connect(self._save_draft)
        author_buttons.addWidget(load_button); author_buttons.addWidget(save_button); author_buttons.addWidget(draft_button); author_buttons.addStretch()
        author_layout.addLayout(author_buttons)
        self.tabs.addTab(author_tab, self.tr("Author"))

        verify_tab = QWidget(); verify_layout = QVBoxLayout(verify_tab)
        verify_layout.addWidget(QLabel(self.tr("Variables (JSON). Standard Zscaler names: ") + ", ".join(PAC_VARIABLES)))
        self.variables_editor = QPlainTextEdit(self.settings.value("pac/workspace/variables", json.dumps({"GATEWAY": "gateway.<cloud>.net", "SECONDARY_GATEWAY": "secondary-gateway.<cloud>.net"}, indent=2)))
        self.variables_editor.setFont(pac_font); verify_layout.addWidget(self.variables_editor, 1)
        self.preview_url_input = QLineEdit("https://example.com")
        preview_form = QFormLayout(); preview_form.addRow(self.tr("Test URL:"), self.preview_url_input); verify_layout.addLayout(preview_form)
        verify_buttons = QHBoxLayout()
        apply_button = QPushButton(self.tr("Apply variables")); apply_button.clicked.connect(self._apply_variables)
        check_button = QPushButton(self.tr("Run static verification")); check_button.clicked.connect(self._verify)
        preview_button = QPushButton(self.tr("Preview decision")); preview_button.clicked.connect(self._preview)
        verify_buttons.addWidget(apply_button); verify_buttons.addWidget(check_button); verify_buttons.addWidget(preview_button); verify_buttons.addStretch(); verify_layout.addLayout(verify_buttons)
        self.result_output = QPlainTextEdit(); self.result_output.setReadOnly(True); self.result_output.setMinimumHeight(160); verify_layout.addWidget(self.result_output)
        self.tabs.addTab(verify_tab, self.tr("Verify"))

        help_tab = QWidget(); help_layout = QVBoxLayout(help_tab)
        help_layout.addWidget(QLabel(self.tr("PAC reference and review help. The verifier never executes JavaScript; validate in ZIA and test a pilot group before deployment.")))
        self.help_table = QTableWidget(0, 2); self.help_table.setHorizontalHeaderLabels((self.tr("Variable or function"), self.tr("Purpose / guidance")))
        self.help_table.horizontalHeader().setSectionResizeMode(0, QHeaderView.ResizeMode.ResizeToContents)
        self.help_table.horizontalHeader().setSectionResizeMode(1, QHeaderView.ResizeMode.Stretch)
        reference = self._localized_pac_reference()
        self.help_table.setRowCount(len(reference))
        for row, (name, explanation) in enumerate(reference):
            self.help_table.setItem(row, 0, QTableWidgetItem(name)); self.help_table.setItem(row, 1, QTableWidgetItem(explanation))
        help_layout.addWidget(self.help_table, 1)
        help_tips = QLabel(self.tr("Roll out in stages: validate, test representative URLs, stage to a small pilot group, then deploy. Prefer host-pattern checks; avoid DNS helpers in Client Connector PAC files where possible."))
        help_tips.setWordWrap(True); help_layout.addWidget(help_tips)
        self.tabs.addTab(help_tab, self.tr("Help and reference"))

        mapping_tab = QWidget(); mapping_layout = QVBoxLayout(mapping_tab)
        mapping_intro = QLabel(self.tr("Map supplied ZIA PAC metadata to ZCC forwarding-profile actions. Matches use hosted PAC URLs or an inline PAC content fingerprint; names alone are never treated as a match."))
        mapping_intro.setWordWrap(True); mapping_layout.addWidget(mapping_intro)
        mapping_inputs = QSplitter(Qt.Orientation.Horizontal)
        zia_mapping_group = QGroupBox(self.tr("ZIA PAC list JSON")); zia_mapping_layout = QVBoxLayout(zia_mapping_group)
        self.mapping_zia_input = QPlainTextEdit(); self.mapping_zia_input.setFont(pac_font); self.mapping_zia_input.setPlaceholderText('[{"id": 1, "name": "Corporate PAC", "pacUrl": "https://…"}]'); zia_mapping_layout.addWidget(self.mapping_zia_input)
        zcc_mapping_group = QGroupBox(self.tr("ZCC forwarding-profile list JSON")); zcc_mapping_layout = QVBoxLayout(zcc_mapping_group)
        self.mapping_zcc_input = QPlainTextEdit(); self.mapping_zcc_input.setFont(pac_font); self.mapping_zcc_input.setPlaceholderText('[{"id": "1", "name": "Remote users", "forwardingProfileActions": [...]}]'); zcc_mapping_layout.addWidget(self.mapping_zcc_input)
        mapping_inputs.addWidget(zia_mapping_group); mapping_inputs.addWidget(zcc_mapping_group); mapping_inputs.setSizes([500, 500]); mapping_layout.addWidget(mapping_inputs, 1)
        mapping_buttons = QHBoxLayout()
        map_button = QPushButton(self.tr("Build PAC mappings")); map_button.clicked.connect(self._build_pac_mappings)
        map_zia_request = QPushButton(self.tr("Prepare ZIA PAC list")); map_zia_request.clicked.connect(self._prepare_zia_list)
        map_zcc_request = QPushButton(self.tr("Prepare ZCC profile list")); map_zcc_request.clicked.connect(self._prepare_zcc_list)
        mapping_buttons.addWidget(map_button); mapping_buttons.addWidget(map_zia_request); mapping_buttons.addWidget(map_zcc_request); mapping_buttons.addStretch(); mapping_layout.addLayout(mapping_buttons)
        self.mapping_summary = QLabel(); self.mapping_summary.setWordWrap(True); mapping_layout.addWidget(self.mapping_summary)
        self.mapping_table = QTableWidget(0, 7); self.mapping_table.setHorizontalHeaderLabels((self.tr("ZCC profile"), self.tr("Action / network"), self.tr("PAC type"), self.tr("PAC reference"), self.tr("ZIA status"), self.tr("Mapping result"), self.tr("Profile ID")))
        self.mapping_table.horizontalHeader().setSectionResizeMode(QHeaderView.ResizeMode.ResizeToContents); self.mapping_table.horizontalHeader().setStretchLastSection(True)
        mapping_layout.addWidget(self.mapping_table, 1)
        self.tabs.addTab(mapping_tab, self.tr("PAC mappings"))

        config_tab = QWidget(); config_layout = QVBoxLayout(config_tab)
        config_intro = QLabel(self.tr("Search the bundled Zscaler Configuration Center index of Cloud Enforcement Node ranges, proxy/VPN hostnames, GRE and extranet virtual IP addresses. The PAC editor shows a help balloon when a line references an indexed endpoint."))
        config_intro.setWordWrap(True); config_layout.addWidget(config_intro)
        config_search = QHBoxLayout()
        self.cenr_search_input = QLineEdit("Stockholm")
        self.cenr_search_input.setPlaceholderText(self.tr("Search city, CIDR, hostname, GRE or VPN address"))
        cenr_search_button = QPushButton(self.tr("Search data centers")); cenr_search_button.clicked.connect(self._search_cenr)
        config_search.addWidget(self.cenr_search_input, 1); config_search.addWidget(cenr_search_button); config_layout.addLayout(config_search)
        self.cenr_summary = QLabel(); config_layout.addWidget(self.cenr_summary)
        self.cenr_table = QTableWidget(0, 8); self.cenr_table.setHorizontalHeaderLabels((self.tr("Continent"), self.tr("Data center"), self.tr("CIDR range"), self.tr("Proxy hostname"), self.tr("VPN hostname"), self.tr("GRE VIP"), self.tr("Extranet VIP"), self.tr("Coordinates")))
        self.cenr_table.horizontalHeader().setSectionResizeMode(QHeaderView.ResizeMode.ResizeToContents); self.cenr_table.horizontalHeader().setStretchLastSection(True)
        config_layout.addWidget(self.cenr_table, 1)
        self.tabs.addTab(config_tab, self.tr("Zscaler data centers"))

        zcc_tab = QWidget(); zcc_layout = QVBoxLayout(zcc_tab)
        zcc_layout.addWidget(QLabel(self.tr("Paste a forwarding profile returned by ZCC, or first prepare the profile-list request. Existing profile fields are preserved when PAC fields are updated.")))
        self.zcc_profile_editor = QPlainTextEdit(self.settings.value("pac/workspace/zcc_profile", "{}")); self.zcc_profile_editor.setFont(pac_font); zcc_layout.addWidget(self.zcc_profile_editor, 1)
        zcc_buttons = QHBoxLayout()
        zcc_list = QPushButton(self.tr("Prepare ZCC profile list")); zcc_list.clicked.connect(self._prepare_zcc_list)
        zcc_update = QPushButton(self.tr("Prepare ZCC update")); zcc_update.clicked.connect(self._prepare_zcc_update)
        zcc_buttons.addWidget(zcc_list); zcc_buttons.addWidget(zcc_update); zcc_buttons.addStretch(); zcc_layout.addLayout(zcc_buttons)
        self.tabs.addTab(zcc_tab, self.tr("ZCC / Mobile Portal"))

        actions = QHBoxLayout()
        zia_validate = QPushButton(self.tr("Prepare ZIA validation")); zia_validate.clicked.connect(self._prepare_zia_validate)
        zia_upload = QPushButton(self.tr("Prepare ZIA hosted PAC upload")); zia_upload.clicked.connect(self._prepare_zia_upload)
        zia_list = QPushButton(self.tr("Prepare ZIA PAC list")); zia_list.clicked.connect(self._prepare_zia_list)
        zia_action = QPushButton(self.tr("Prepare ZIA version action")); zia_action.clicked.connect(self._prepare_zia_action)
        close = QPushButton(self.tr("Close")); close.clicked.connect(self.accept)
        actions.addWidget(zia_validate); actions.addWidget(zia_upload); actions.addWidget(zia_list); actions.addWidget(zia_action); actions.addStretch(); actions.addWidget(close)
        layout.addLayout(actions)
        self._set_pac_mode()
        self._refresh_guided_preview()
        self._verify()
        self._search_cenr()

    def _set_pac_mode(self, *_unused):
        """Keep the beginner flow small while preserving advanced capabilities."""
        advanced = self.pac_mode_combo.currentData() == "advanced"
        self.tabs.setTabVisible(1, advanced)  # Author
        self.tabs.setTabVisible(4, advanced)  # PAC mappings
        self.tabs.setTabVisible(6, advanced)  # ZCC / Mobile Portal
        for widget in self.advanced_metadata_widgets:
            widget.setVisible(advanced)
        if not advanced and self.tabs.currentIndex() in {1, 4, 6}:
            self.tabs.setCurrentIndex(0)
        self.guided_status.setText(
            self.tr("Guided mode creates a minimal, reviewable PAC. Switch to Advanced to edit JavaScript, update ZCC profiles, or prepare ZIA lifecycle actions.")
            if not advanced else self.tr("Advanced mode exposes the PAC editor, ZCC profile patching, and ZIA version lifecycle actions. Every write remains explicit."))

    def _load_guided_example(self):
        self.guided_bypass_input.setPlainText("*.local\nintranet.example.com\n*.internal.example.com")
        self.guided_gateway_input.setText("${GATEWAY}")
        self.guided_secondary_input.setText("${SECONDARY_GATEWAY}")
        self._build_guided_pac()

    def _localized_pac_reference(self):
        """Keep PAC terms stable while translating their operator guidance."""
        variable_help = {
            "GATEWAY": self.tr("Primary Zscaler gateway."), "SECONDARY_GATEWAY": self.tr("Secondary Zscaler gateway."),
            "GATEWAY_FX": self.tr("Primary gateway with failover support."), "SECONDARY_GATEWAY_FX": self.tr("Secondary gateway with failover support."),
            "LOCATION": self.tr("Optional local deployment label."), "CLOUD": self.tr("Zscaler cloud name."),
            "GATEWAY.<subcloud>.<cloud>.net": self.tr("Primary gateway for an explicit subcloud."),
            "SECONDARY_GATEWAY.<subcloud>.<cloud>.net": self.tr("Secondary gateway for an explicit subcloud."),
        }
        function_help = {
            "FindProxyForURL(url, host)": self.tr("Required PAC entry point; returns DIRECT, PROXY, or SOCKS."),
            "isPlainHostName(host)": self.tr("Matches a host without a DNS suffix."),
            "dnsDomainIs(host, domain)": self.tr("Matches a DNS suffix."),
            "localHostOrDomainIs(host, hostdom)": self.tr("Matches a local host or fully qualified name."),
            "shExpMatch(value, pattern)": self.tr("Matches wildcard patterns such as *.example.com."),
            "dnsDomainLevels(host)": self.tr("Counts DNS labels in a host name."),
            "weekdayRange(...)": self.tr("Matches a weekday range."), "dateRange(...)": self.tr("Matches a date range."),
            "timeRange(...)": self.tr("Matches a time range."),
            "dnsResolve(host)": self.tr("Resolves DNS; avoid in Client Connector PAC files unless required."),
            "isResolvable(host)": self.tr("Tests DNS resolution; avoid in Client Connector PAC files unless required."),
            "isInNet(host, pattern, mask)": self.tr("Tests a network; avoid in Client Connector PAC files unless required."),
        }
        return [(f"${{{key}}}", variable_help.get(key, value)) for key, value in PAC_VARIABLES.items()] + [(key, function_help.get(key, value)) for key, value in PAC_FUNCTIONS.items()]

    def _refresh_guided_preview(self, *_unused):
        """Show the entire generated PAC before the user commits it to Author."""
        try:
            content = build_guided_pac(self.guided_bypass_input.toPlainText().splitlines(), self.guided_gateway_input.text().strip() or "${GATEWAY}", self.guided_secondary_input.text().strip() or "${SECONDARY_GATEWAY}")
        except ValueError as error:
            self.guided_preview.setPlainText(self.tr("Fix the guided input to generate a PAC preview: ") + str(error)); return
        self.guided_preview.setPlainText(content)
        references = pac_config_references(content, self.cenr_index)
        self.guided_preview.set_line_help({number: pac_line_explanation(line, references.get(number, ()), self.tr) for number, line in enumerate(content.splitlines(), 1)})

    def _build_guided_pac(self):
        patterns = self.guided_bypass_input.toPlainText().splitlines()
        try:
            content = build_guided_pac(patterns, self.guided_gateway_input.text().strip(), self.guided_secondary_input.text().strip())
        except ValueError as error:
            QMessageBox.warning(self, self.tr("Guided PAC"), str(error)); return
        self.pac_editor.setPlainText(content)
        self._refresh_guided_preview()
        self._verify()
        self.guided_status.setText(self.tr("Guided PAC created. Review the verification findings, test a URL, then prepare ZIA validation."))

    def _build_pac_mappings(self):
        """Render a read-only correlation table from explicitly supplied API JSON."""
        try:
            zia_pacs = json.loads(self.mapping_zia_input.toPlainText() or "[]")
            zcc_profiles = json.loads(self.mapping_zcc_input.toPlainText() or "[]")
        except ValueError as error:
            QMessageBox.warning(self, self.tr("PAC mappings"), self.tr("Both mapping inputs must be valid JSON: ") + str(error)); return
        mappings = pac_profile_mappings(zia_pacs, zcc_profiles)
        self.mapping_table.setRowCount(len(mappings))
        columns = ("profile", "action", "pac_type", "reference", "status", "relation", "profile_id")
        for row, mapping in enumerate(mappings):
            for column, key in enumerate(columns):
                self.mapping_table.setItem(row, column, QTableWidgetItem(mapping[key]))
        matched = sum(1 for item in mappings if "matched" in item["relation"].lower())
        unresolved = sum(1 for item in mappings if "not found" in item["relation"].lower())
        self.mapping_summary.setText(self.tr("Mapped actions: {total}; confirmed mappings: {matched}; unresolved hosted URLs: {unresolved}.").format(total=len(mappings), matched=matched, unresolved=unresolved))

    def _refresh_pac_line_help(self):
        """Explain every PAC line and enrich explicit Zscaler references locally."""
        content = self._content()
        references = pac_config_references(content, self.cenr_index)
        self.pac_editor.set_line_help({
            number: pac_line_explanation(line, references.get(number, ()), self.tr)
            for number, line in enumerate(content.splitlines(), 1)
        })

    def _search_cenr(self):
        records = search_cenr(self.cenr_index, self.cenr_search_input.text())
        self.cenr_table.setRowCount(len(records))
        columns = ("continent", "city", "range", "hostname", "vpn", "gre", "ext")
        for row, record in enumerate(records):
            for column, key in enumerate(columns):
                self.cenr_table.setItem(row, column, QTableWidgetItem(record.get(key, "")))
            coordinates = ", ".join(part for part in (record.get("latitude", ""), record.get("longitude", "")) if part)
            self.cenr_table.setItem(row, 7, QTableWidgetItem(coordinates))
        total = len(self.cenr_index.get("data_centers", []))
        self.cenr_summary.setText(self.tr("{matches} matching endpoint records from {total} indexed Zscaler data-center records. Source: {source}").format(matches=len(records), total=total, source=self.cenr_index.get("source", CONFIG_SOURCE_URL)))

    def _content(self) -> str:
        return self.pac_editor.toPlainText()

    def _values(self) -> dict[str, str] | None:
        try:
            values = json.loads(self.variables_editor.toPlainText() or "{}")
        except ValueError as error:
            QMessageBox.warning(self, self.tr("PAC variables"), self.tr("Variables must be valid JSON: ") + str(error)); return None
        if not isinstance(values, dict) or not all(isinstance(key, str) and isinstance(value, (str, int, float)) for key, value in values.items()):
            QMessageBox.warning(self, self.tr("PAC variables"), self.tr("Variables must be a JSON object with text or numeric values.")); return None
        return {key: str(value) for key, value in values.items()}

    def _findings(self) -> list:
        return lint_pac(self._content())

    def _verify(self) -> bool:
        self._refresh_pac_line_help()
        findings = self._findings()
        variables = ", ".join(sorted(pac_variables(self._content()))) or self.tr("none")
        lines = [self.tr("Detected variables: ") + variables, ""]
        for finding in findings:
            location = f" [line {finding.line}]" if finding.line else ""
            lines.append(f"{finding.severity.upper()}{location}: {finding.message}")
        lines.extend(["", self.tr("Improvement tips:")])
        lines.extend(f"• {tip}" for tip in pac_improvements(self._content()))
        self.result_output.setPlainText("\n".join(lines))
        return not any(finding.severity == "error" for finding in findings)

    def _apply_variables(self):
        values = self._values()
        if values is None:
            return
        content, missing = substitute_pac_variables(self._content(), values)
        self.pac_editor.setPlainText(content)
        self._verify()
        message = self.tr("Variables applied.") if not missing else self.tr("Variables applied; missing values were retained: ") + ", ".join(missing)
        QMessageBox.information(self, self.tr("PAC variables"), message)

    def _preview(self):
        result = preview_pac_decision(self._content(), self.preview_url_input.text().strip())
        self.result_output.appendPlainText("\n" + self.tr("Preview") + f": {result['host']} → {result['decision']}\n{result['reason']}")

    def _save_draft(self):
        self.settings.setValue("pac/workspace/name", self.name_input.text().strip())
        self.settings.setValue("pac/workspace/commit", self.commit_input.text().strip())
        self.settings.setValue("pac/workspace/hosted_url", self.hosted_url_input.text().strip())
        self.settings.setValue("pac/workspace/zia_pac_id", self.zia_pac_id_input.text().strip())
        self.settings.setValue("pac/workspace/zia_version", self.zia_version_input.text().strip())
        self.settings.setValue("pac/workspace/mode", self.pac_mode_combo.currentData())
        self.settings.setValue("pac/workspace/guided_bypass", self.guided_bypass_input.toPlainText())
        self.settings.setValue("pac/workspace/guided_gateway", self.guided_gateway_input.text().strip())
        self.settings.setValue("pac/workspace/guided_secondary", self.guided_secondary_input.text().strip())
        self.settings.setValue("pac/workspace/draft", self._content())
        self.settings.setValue("pac/workspace/variables", self.variables_editor.toPlainText())
        self.settings.setValue("pac/workspace/zcc_profile", self.zcc_profile_editor.toPlainText())
        QMessageBox.information(self, self.tr("PAC Workspace"), self.tr("PAC draft saved locally."))

    def _load_pac(self):
        path, _ = QFileDialog.getOpenFileName(self, self.tr("Load PAC"), "", "PAC files (*.pac);;All files (*)")
        if path:
            try:
                self.pac_editor.setPlainText(Path(path).read_text(encoding="utf-8")); self._verify()
            except OSError as error:
                QMessageBox.warning(self, self.tr("Load PAC"), str(error))

    def _save_pac(self):
        path, _ = QFileDialog.getSaveFileName(self, self.tr("Save PAC"), f"{self.name_input.text().strip() or 'custom-pac'}.pac", "PAC files (*.pac)")
        if path:
            try:
                Path(path).write_text(self._content(), encoding="utf-8")
            except OSError as error:
                QMessageBox.warning(self, self.tr("Save PAC"), str(error))

    def _prepare_request(self, method: str, url: str, payload: dict | None, label: str):
        self.window.body_mode.setCurrentIndex(0)
        self.window.method_combo.setCurrentText(f"● {method}")
        self.window.url_input.setText(url)
        self.window.body_input.setPlainText(json.dumps(payload, indent=2, ensure_ascii=False) if payload is not None else "")
        self.window._log_output(f"PAC Workspace prepared {label}; review and send it explicitly.", "info")
        QMessageBox.information(self, self.tr("PAC request prepared"), self.tr("The request was placed in the main editor. Review it and explicitly select Send Request; no deployment action has been performed."))

    def _ensure_valid(self) -> bool:
        if self._verify():
            return True
        QMessageBox.warning(self, self.tr("PAC verification"), self.tr("Resolve PAC errors before preparing an API write.")); return False

    def _prepare_zia_validate(self):
        if self._ensure_valid():
            self._prepare_request("POST", self.ZIA_VALIDATE_URL, zia_pac_payload(self.name_input.text(), self._content(), self.commit_input.text()), "ZIA PAC validation")

    def _prepare_zia_upload(self):
        if self._ensure_valid():
            self._prepare_request("POST", self.ZIA_PAC_URL, zia_pac_payload(self.name_input.text(), self._content(), self.commit_input.text()), "ZIA hosted PAC upload")

    def _prepare_zia_list(self):
        self._prepare_request("GET", self.ZIA_PAC_URL, None, "ZIA PAC list")

    def _prepare_zia_action(self):
        pac_id, version = self.zia_pac_id_input.text().strip(), self.zia_version_input.text().strip()
        if not pac_id.isdigit() or not version.isdigit():
            QMessageBox.warning(self, self.tr("ZIA PAC lifecycle"), self.tr("Enter a numeric PAC ID and version before preparing a lifecycle action.")); return
        action = self.zia_action_combo.currentText()
        url = f"{self.ZIA_PAC_URL}/{pac_id}/version/{version}/action/{action}"
        self._prepare_request("PUT", url, None, f"ZIA PAC version {action}")

    def _prepare_zcc_list(self):
        self._prepare_request("GET", self.ZCC_LIST_URL, None, "ZCC forwarding-profile list")

    def _prepare_zcc_update(self):
        if not self._ensure_valid():
            return
        try:
            profile = json.loads(self.zcc_profile_editor.toPlainText() or "{}")
        except ValueError as error:
            QMessageBox.warning(self, self.tr("ZCC forwarding profile"), self.tr("Profile must be valid JSON: ") + str(error)); return
        if not isinstance(profile, dict) or not profile.get("id"):
            QMessageBox.warning(self, self.tr("ZCC forwarding profile"), self.tr("Paste one ZCC forwarding profile object with its id before preparing an update.")); return
        payload = zcc_pac_patch(profile, self._content(), self.hosted_url_input.text().strip())
        self._prepare_request("POST", self.ZCC_EDIT_URL, payload, "ZCC forwarding-profile update")


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
        profile_settings = QSettings("Zscaler", "APIClient")
        profile = active_environment_profile(profile_settings)
        if profile_settings.value(_profile_data_key(profile["id"], "initialized"), "false") != "true":
            save_environment_profile_snapshot(profile_settings, profile["id"])
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
        self._binary_response: bytes | None = None
        self._binary_response_name = "response.bin"
        self._binary_response_type = "application/octet-stream"
        self._selected_endpoint_details: dict[str, Any] | None = None
        self._last_response_exchange: dict[str, Any] | None = None
        
        self._setup_ui()
        self._setup_menu()
        self._load_settings()
        self._load_history()
        self._refresh_environment_context()
        # App-only schedules are checked here. OS-backed schedules invoke the
        # same report engine in headless mode and are skipped by this timer.
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
        self.environment_shortcut = QPushButton(self.tr("Environment"))
        environment_shortcut = self.environment_shortcut
        environment_shortcut.setToolTip(self.tr("Select or create a tenant environment profile"))
        environment_shortcut.clicked.connect(self._manage_profiles)
        command_layout.addWidget(environment_shortcut)
        self.insight_shortcut = QPushButton(self.tr("Monitor"))
        self.insight_shortcut.setToolTip(self.tr("Open dashboards, alerts, audits, and response analysis"))
        self.insight_shortcut.clicked.connect(lambda: self._show_operations(0))
        command_layout.addWidget(self.insight_shortcut)
        self.change_shortcut = QPushButton(self.tr("Changes"))
        self.change_shortcut.setToolTip(self.tr("Open policy diff and policy-as-code export"))
        self.change_shortcut.clicked.connect(lambda: self._show_operations(1))
        command_layout.addWidget(self.change_shortcut)
        self.pac_shortcut = QPushButton(self.tr("PAC Workspace"))
        self.pac_shortcut.setToolTip(self.tr("Create, verify, map, and prepare PAC files (Ctrl+Shift+P)"))
        self.pac_shortcut.setShortcut("Ctrl+Shift+P")
        self.pac_shortcut.clicked.connect(self._show_pac_workspace)
        command_layout.addWidget(self.pac_shortcut)
        self.alert_shortcut = QPushButton(self.tr("Alerts"))
        self.alert_shortcut.setToolTip(self.tr("Open local operational alerts"))
        self.alert_shortcut.clicked.connect(lambda: self._show_operations_named("alert_tab_index"))
        command_layout.addWidget(self.alert_shortcut)
        recent_shortcut = QPushButton(self.tr("Recent"))
        recent_shortcut.setToolTip(self.tr("Open redacted request history"))
        recent_shortcut.clicked.connect(self._show_history)
        command_layout.addWidget(recent_shortcut)
        command_menu = QMenu(self)
        for label, callback in ((self.tr("API Explorer"), lambda: self.endpoint_tree.setFocus()), (self.tr("Monitor"), lambda: self._show_operations(0)), (self.tr("Changes"), lambda: self._show_operations(1)), (self.tr("PAC Workspace"), self._show_pac_workspace), (self.tr("Request History"), self._show_history), (self.tr("Favorites"), self._manage_favorites), (self.tr("Operations inbox"), self._show_operations_inbox)):
            action = command_menu.addAction(label); action.triggered.connect(callback)
        command_shortcut = QPushButton(self.tr("Quick actions"))
        command_shortcut.setToolTip(self.tr("Open common workspaces and actions"))
        command_shortcut.clicked.connect(lambda: command_menu.exec(command_shortcut.mapToGlobal(command_shortcut.rect().bottomLeft())))
        command_layout.addWidget(command_shortcut)
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
        self.url_input.textEdited.connect(self._detach_endpoint_contract)
        url_layout.addWidget(self.url_input)
        
        self.send_btn = QPushButton(self.tr("Send"))
        self.send_btn.setToolTip(self.tr("Send request (Ctrl+Return)"))
        self.send_btn.setShortcut("Ctrl+Return")
        self.send_btn.clicked.connect(self._send_request)
        url_layout.addWidget(self.send_btn)
        self.cancel_request_btn = QPushButton(self.tr("Cancel")); self.cancel_request_btn.setEnabled(False)
        self.cancel_request_btn.setToolTip(self.tr("Stop before the next page or chain step; the current HTTP request is allowed to finish safely."))
        self.cancel_request_btn.clicked.connect(self._cancel_request); url_layout.addWidget(self.cancel_request_btn)
        
        self.curl_btn = QPushButton(self.tr("cURL"))
        self.curl_btn.setToolTip(self.tr("Copy request as cURL command (Ctrl+Shift+C)"))
        self.curl_btn.setShortcut("Ctrl+Shift+C")
        self.curl_btn.clicked.connect(self._copy_as_curl)
        url_layout.addWidget(self.curl_btn)
        
        request_layout.addLayout(url_layout)
        self.graphql_mode = QCheckBox(self.tr("GraphQL request"))
        self.graphql_mode.setToolTip(self.tr("Send the request body as a GraphQL query and preserve data, errors, and extensions."))
        self.graphql_mode.toggled.connect(self._on_graphql_mode_toggled)
        request_layout.addWidget(self.graphql_mode)
        pagination_controls = QHBoxLayout()
        self.paginate_request = QCheckBox(self.tr("Fetch all pages"))
        self.paginate_request.setToolTip(self.tr("Follow only the pagination parameters documented for the selected read operation."))
        pagination_controls.addWidget(self.paginate_request)
        pagination_controls.addWidget(QLabel(self.tr("Page size:")))
        self.pagination_page_size = QComboBox(); self.pagination_page_size.setEditable(True)
        self.pagination_page_size.addItems(["20", "50", "100", "250", "500"]); self.pagination_page_size.setCurrentText("100")
        pagination_controls.addWidget(self.pagination_page_size)
        pagination_controls.addWidget(QLabel(self.tr("Maximum pages:")))
        self.pagination_max_pages = QComboBox(); self.pagination_max_pages.addItems(["2", "5", "10", "25", "50", "100"]); self.pagination_max_pages.setCurrentText("10")
        pagination_controls.addWidget(self.pagination_max_pages); pagination_controls.addStretch()
        self.pagination_controls_widget = QWidget(); self.pagination_controls_widget.setLayout(pagination_controls)
        self.pagination_controls_widget.setEnabled(False)
        request_layout.addWidget(self.pagination_controls_widget)
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
        body_controls = QHBoxLayout()
        body_controls.addWidget(QLabel(self.tr("Body type:")))
        self.body_mode = QComboBox()
        self.body_mode.addItem(self.tr("JSON"), "json")
        self.body_mode.addItem(self.tr("Raw text"), "raw")
        self.body_mode.addItem(self.tr("Form URL encoded"), "form")
        self.body_mode.addItem(self.tr("Multipart file upload"), "multipart")
        self.body_mode.currentIndexChanged.connect(self._on_body_mode_changed)
        body_controls.addWidget(self.body_mode)
        body_controls.addStretch()
        body_layout.addLayout(body_controls)
        self.multipart_controls = QWidget()
        multipart_layout = QHBoxLayout(self.multipart_controls)
        multipart_layout.setContentsMargins(0, 0, 0, 0)
        multipart_layout.addWidget(QLabel(self.tr("File field:")))
        self.multipart_file_field = QLineEdit("file")
        self.multipart_file_field.setMaximumWidth(140)
        multipart_layout.addWidget(self.multipart_file_field)
        multipart_layout.addWidget(QLabel(self.tr("Upload file:")))
        self.multipart_file_path = QLineEdit()
        self.multipart_file_path.setReadOnly(True)
        self.multipart_file_path.setPlaceholderText(self.tr("Select a local file; its path is never saved in history"))
        multipart_layout.addWidget(self.multipart_file_path, 1)
        browse_upload = QPushButton(self.tr("Browse…"))
        browse_upload.clicked.connect(self._browse_upload_file)
        multipart_layout.addWidget(browse_upload)
        body_layout.addWidget(self.multipart_controls)
        self.body_input = QPlainTextEdit()
        self.body_input.setPlaceholderText(self.tr("Request body (JSON)..."))
        font = QFont("Menlo, Monaco, Consolas, monospace", 11)
        self.body_input.setFont(font)
        body_layout.addWidget(self.body_input)
        self.request_tabs.addTab(body_widget, self.tr("Body"))
        self._on_body_mode_changed()

        graphql_variables_widget = QWidget()
        graphql_variables_layout = QVBoxLayout(graphql_variables_widget)
        graphql_variables_intro = QLabel(self.tr("Extract typed variables from the selected GraphQL operation. Values are inserted into the JSON request body, never into the URL.")); graphql_variables_intro.setWordWrap(True); graphql_variables_layout.addWidget(graphql_variables_intro)
        self.graphql_variables_table = QTableWidget(0, 5)
        self.graphql_variables_table.setHorizontalHeaderLabels([self.tr("Variable"), self.tr("Type"), self.tr("Required"), self.tr("Default"), self.tr("JSON value")])
        self.graphql_variables_table.horizontalHeader().setStretchLastSection(True)
        graphql_variables_layout.addWidget(self.graphql_variables_table)
        graphql_variable_controls = QHBoxLayout()
        extract_graphql_variables = QPushButton(self.tr("Extract variables from query")); extract_graphql_variables.clicked.connect(self._refresh_graphql_variables); graphql_variable_controls.addWidget(extract_graphql_variables)
        self.graphql_variables_status = QLabel(self.tr("No GraphQL variables extracted.")); graphql_variable_controls.addWidget(self.graphql_variables_status); graphql_variable_controls.addStretch(); graphql_variables_layout.addLayout(graphql_variable_controls)
        self.graphql_variables_tab_index = self.request_tabs.addTab(graphql_variables_widget, self.tr("GraphQL Variables"))

        # Path variables are extracted automatically from :name and {name}
        # placeholders in the selected Automation Hub endpoint.
        variables_widget = QWidget()
        variables_layout = QVBoxLayout(variables_widget)
        self.variables_table = QTableWidget(0, 2)
        self.variables_table.setHorizontalHeaderLabels([self.tr("Variable"), self.tr("Value")])
        self.variables_table.horizontalHeader().setStretchLastSection(True)
        variables_layout.addWidget(self.variables_table)
        self.path_variables_tab_index = self.request_tabs.addTab(variables_widget, self.tr("Path Variables"))

        guide_widget = QWidget()
        guide_layout = QVBoxLayout(guide_widget)
        self.request_guide_status = QLabel(self.tr("Select a documented endpoint to inspect its request contract."))
        self.request_guide_status.setWordWrap(True)
        guide_layout.addWidget(self.request_guide_status)
        self.request_guide_table = QTableWidget(0, 6)
        self.request_guide_table.setHorizontalHeaderLabels([
            self.tr("Location"), self.tr("Name"), self.tr("Type"), self.tr("Required"),
            self.tr("Default"), self.tr("Description"),
        ])
        self.request_guide_table.setEditTriggers(QTableWidget.EditTrigger.NoEditTriggers)
        self.request_guide_table.horizontalHeader().setStretchLastSection(True)
        guide_layout.addWidget(self.request_guide_table)
        self.api_guide_tab_index = self.request_tabs.addTab(guide_widget, self.tr("API Guide"))
        self._on_graphql_mode_toggled(False)
        
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
        open_export_btn = QPushButton(self.tr("Open export")); open_export_btn.clicked.connect(self._import_response_exchange); response_info_bar.addWidget(open_export_btn)
        compare_response_btn = QPushButton(self.tr("Compare drift")); compare_response_btn.clicked.connect(self._compare_response_drift); response_info_bar.addWidget(compare_response_btn)
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
        import_response_action = QAction(self.tr("Open response export…"), self); import_response_action.setShortcut("Ctrl+O"); import_response_action.triggered.connect(self._import_response_exchange); file_menu.addAction(import_response_action)
        compare_response_action = QAction(self.tr("Compare response drift…"), self); compare_response_action.triggered.connect(self._compare_response_drift); file_menu.addAction(compare_response_action)
        
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
        pac_action = QAction(self.tr("PAC &Workspace..."), self)
        pac_action.setShortcut("Ctrl+Shift+P")
        pac_action.triggered.connect(self._show_pac_workspace)
        operations_menu.addAction(pac_action)
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
        return stored_report_schedules(QSettings("Zscaler", "APIClient"))

    @staticmethod
    def _scheduled_report_filename(name, timestamp):
        """Create a traversal-safe, portable filename for a scheduled report."""
        return scheduled_report_filename(name, timestamp)

    @staticmethod
    def _write_new_report(directory, filename, content):
        """Write a new report atomically enough to avoid overwriting or following a collision."""
        return write_new_report(Path(directory), filename, content)

    def _run_due_report_schedules(self, now=None, selected_index=None):
        """Generate due redacted reports locally; never perform network activity."""
        return run_report_schedules(QSettings("Zscaler", "APIClient"), self.request_history, now=now, selected_index=selected_index)
    
    def _save_settings(self):
        settings = QSettings("Zscaler", "APIClient")
        settings.setValue("geometry", self.saveGeometry())
        settings.setValue("main_splitter_sizes", self.main_splitter.sizes())
        settings.setValue("editor_splitter_sizes", self.editor_splitter.sizes())
        save_environment_profile_snapshot(settings, workspace_api=self._current_api_type(), workspace_url=self.url_input.text())
    
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
        self._selected_endpoint_details = details
        
        # Update request
        self.graphql_mode.setChecked(False)
        self._set_body_mode("json")
        self.multipart_file_path.clear()
        self.graphql_variables_table.setRowCount(0)
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
            version = str(settings.value("zdx/api_version", "v2"))
            version = version if version in {"v1", "v2"} else "v2"
            if path.startswith(("/v1/", "/v2/")):
                path = f"/{version}/" + path.split("/", 2)[2]
        elif api_type == "ZCC":
            cloud = settings.value("zcc/cloud", "")
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
            content_type = str(details.get("request_content_type") or "application/json")
            if content_type == "application/x-www-form-urlencoded":
                self._set_body_mode("form")
            elif content_type == "multipart/form-data":
                self._set_body_mode("multipart")
            else:
                self._set_body_mode("json")
            self.request_tabs.setCurrentIndex(2)  # Body tab
        else:
            self.body_input.clear()
        
        # Populate only explicitly documented request parameters. Optional
        # defaults remain visible in the guide but are not sent implicitly.
        self.params_table.clearContents()
        self.headers_table.clearContents()
        parameters = details.get("parameters", []) if isinstance(details.get("parameters", []), list) else []
        query_parameters = [parameter for parameter in parameters if parameter.get("in") == "query"]
        header_parameters = [parameter for parameter in parameters if parameter.get("in") == "header"]
        self.params_table.setRowCount(max(12, len(query_parameters)))
        self.headers_table.setRowCount(max(12, len(header_parameters) + (1 if details.get("body") is not None else 0)))
        for row, parameter in enumerate(query_parameters):
            name_item = QTableWidgetItem(str(parameter.get("name", "")))
            name_item.setToolTip(str(parameter.get("description", "")))
            if parameter.get("required"):
                font = name_item.font(); font.setBold(True); name_item.setFont(font)
            self.params_table.setItem(row, 0, name_item)
            value_item = QTableWidgetItem("")
            value_item.setToolTip(self.tr("Required value") if parameter.get("required") else self.tr("Optional value"))
            self.params_table.setItem(row, 1, value_item)
        header_row = 0
        if details.get("body") is not None:
            self.headers_table.setItem(header_row, 0, QTableWidgetItem("Content-Type"))
            self.headers_table.setItem(header_row, 1, QTableWidgetItem(str(details.get("request_content_type") or "application/json")))
            header_row += 1
        for parameter in header_parameters:
            name_item = QTableWidgetItem(str(parameter.get("name", "")))
            name_item.setToolTip(str(parameter.get("description", "")))
            if parameter.get("required"):
                font = name_item.font(); font.setBold(True); name_item.setFont(font)
            self.headers_table.setItem(header_row, 0, name_item)
            value_item = QTableWidgetItem("")
            value_item.setToolTip(self.tr("Required value") if parameter.get("required") else self.tr("Optional value"))
            self.headers_table.setItem(header_row, 1, value_item)
            header_row += 1
        if not parameters and "params" in details:
            self._populate_table(self.params_table, details["params"])
        self._populate_api_guide(details)
        self._configure_documented_pagination(details)
        
        # Update help with documentation link
        doc_url = html.escape(str(details.get("doc_url", "")), quote=True)
        doc_link = f"<br><br><a href='{doc_url}'>📖 {self.tr('View Documentation')}</a>" if doc_url else ""
        response_codes = ", ".join(map(str, details.get("response_codes", [])))
        responses = f"<br><br><b>{self.tr('Documented response codes')}:</b> {html.escape(response_codes)}" if response_codes else ""
        self.help_text.setText(
            f"<b>{html.escape(item.text(0))}</b><br><br>"
            f"{html.escape(str(details.get('description', '')))}{responses}{doc_link}"
        )
        self.help_text.setOpenExternalLinks(True)

    def _populate_api_guide(self, details: dict):
        """Render the documentation-derived request contract without making guesses."""
        parameters = details.get("parameters", []) if isinstance(details.get("parameters", []), list) else []
        self.request_guide_table.setRowCount(len(parameters))
        for row, parameter in enumerate(parameters):
            values = (
                str(parameter.get("in", "")), str(parameter.get("name", "")),
                str(parameter.get("type", "")), self.tr("Yes") if parameter.get("required") else self.tr("No"),
                str(parameter.get("default", "")), str(parameter.get("description", "")),
            )
            for column, value in enumerate(values):
                self.request_guide_table.setItem(row, column, QTableWidgetItem(value))
        self.request_guide_table.resizeColumnsToContents()
        for column, maximum in enumerate((90, 220, 100, 90, 120)):
            self.request_guide_table.setColumnWidth(column, min(maximum, max(70, self.request_guide_table.columnWidth(column))))
        body_text = self.tr("body template available") if "body" in details else self.tr("no body template")
        codes = ", ".join(map(str, details.get("response_codes", []))) or self.tr("not listed")
        status = self.tr("{count} documented parameter(s) · {body} · responses: {codes}. Templates are examples; review every value before sending.").format(
            count=len(parameters), body=body_text, codes=codes,
        )
        if isinstance(details.get("pagination"), dict):
            status += " " + self.tr("Documented {mode} pagination is available as an explicit bounded option.").format(mode=details["pagination"].get("mode", ""))
        self.request_guide_status.setText(status)

    def _configure_documented_pagination(self, details: dict):
        """Expose bounded pagination only when the selected GET operation documents it."""
        pagination = details.get("pagination") if isinstance(details.get("pagination"), dict) else None
        available = bool(pagination) and str(details.get("method", "")).upper() == "GET" and not self.graphql_mode.isChecked()
        self.paginate_request.setChecked(False)
        self.pagination_controls_widget.setEnabled(available)
        if not available:
            return
        size_param = str(pagination.get("size_param", ""))
        documented = next((parameter for parameter in details.get("parameters", []) if parameter.get("name") == size_param), {})
        default = str(documented.get("default", ""))
        if default.isdigit() and 1 <= int(default) <= 1000:
            self.pagination_page_size.setCurrentText(default)
        else:
            self.pagination_page_size.setCurrentText("100")
        self.paginate_request.setToolTip(
            self.tr("Documented {mode} pagination using {parameter}. Results retain every page and stop at the configured maximum.").format(
                mode=str(pagination.get("mode", "")), parameter=str(pagination.get("position_param", "")),
            )
        )

    def _detach_endpoint_contract(self, text: str = ""):
        """Stop enforcing stale metadata after the user manually changes the URL."""
        if self._selected_endpoint_details is None:
            return
        self._selected_endpoint_details = None
        self.paginate_request.setChecked(False)
        self.pagination_controls_widget.setEnabled(False)
        self.request_guide_status.setText(self.tr("The URL was edited manually. Select an endpoint again to attach its documented request contract."))

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
            self.request_tabs.setCurrentIndex(self.path_variables_tab_index)
    
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

    def _show_operations_named(self, tab_attribute: str):
        """Open a named Operations Center workspace without duplicate header buttons."""
        dialog = OperationsDialog(self)
        dialog.tabs.setCurrentIndex(getattr(dialog, tab_attribute, 0))
        dialog.exec()

    def _show_pac_workspace(self):
        """Open local PAC authoring with explicit, reviewable API preparation."""
        PacWorkspaceDialog(self).exec()

    def _manage_profiles(self):
        """Open the isolated environment manager and apply an explicit selection."""
        settings = QSettings("Zscaler", "APIClient")
        save_environment_profile_snapshot(settings, workspace_api=self._current_api_type(), workspace_url=self.url_input.text())
        dialog = EnvironmentProfilesDialog(self)
        accepted = dialog.exec()
        if accepted and dialog.activated_profile_id:
            self._activate_environment_profile(dialog.activated_profile_id)
        else:
            self._refresh_environment_context()

    def _refresh_environment_context(self):
        """Keep the active tenant visibly anchored in the command bar."""
        profile = active_environment_profile(QSettings("Zscaler", "APIClient"))
        self.workspace_context.setText(self.tr("Active environment: {name}").format(name=environment_profile_display_name(self, profile)))
        if hasattr(self, "alert_shortcut"):
            try:
                threshold = max(1, int(QSettings("Zscaler", "APIClient").value("monitoring/error_threshold", "10")))
                count = len(operational_alerts(self.request_history, AuditTrail(QSettings("Zscaler", "APIClient")).verify(), threshold).get("alerts", []))
            except (TypeError, ValueError):
                count = 0
            self.alert_shortcut.setText(self.tr("Alerts ({count})").format(count=count) if count else self.tr("Alerts"))

    def _activate_environment_profile(self, profile_id: str) -> bool:
        """Switch tenant context after clearing every request and authentication artifact."""
        settings = QSettings("Zscaler", "APIClient")
        previous = active_environment_profile(settings)
        if profile_id == previous["id"]:
            self._refresh_environment_context()
            return True
        save_environment_profile_snapshot(settings, previous["id"], self._current_api_type(), self.url_input.text())
        target = activate_environment_profile_settings(settings, profile_id)
        if target is None:
            QMessageBox.warning(self, self.tr("Environment profiles"), self.tr("The selected environment profile is unavailable."))
            return False
        self._clear_sessions(record_audit=False)
        self._clear_request()
        self._update_api_list()
        if self.api_type.findText(target["api"]) >= 0:
            self.api_type.setCurrentText(target["api"])
        self._update_endpoint_tree(self._current_api_type())
        self.url_input.setText(target["url"])
        self._populate_path_variables(target["url"])
        self._refresh_environment_context()
        AuditTrail(settings).append("environment_profile_activated", {
            "previous_profile_id": previous["id"], "profile_id": target["id"], "sessions_cleared": True,
        })
        self.status_bar.showMessage(self.tr("Environment profile active: {name}. Sessions and request data were cleared.").format(name=environment_profile_display_name(self, target)))
        return True
    
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
        """Run reads quickly, but require a separate action for every write."""
        details = item.data(0, Qt.ItemDataRole.UserRole)
        if not details:
            return
        self._on_endpoint_selected(item, column)
        if str(details.get("method", "")).upper() in {"POST", "PUT", "PATCH", "DELETE"}:
            QMessageBox.information(
                self, self.tr("Write request prepared"),
                self.tr("The documented write template is ready. Review the API Guide, parameters, and body, then choose Send explicitly."),
            )
            return
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

    def _clear_auth_request_material(self):
        """Remove credentials from the editor immediately after successful authentication."""
        self.headers_table.clearContents()
        self.body_input.clear()
        self._set_body_mode("json")
        self.url_input.clear()

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
            "ZDX": ("zdx/cloud", "api.zdxcloud.net"), "ZCC": ("zcc/cloud", ""),
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
            self._set_body_mode("json")
            self.body_input.setPlainText(json.dumps(body, indent=2))
            self._send_request()
            
        elif api_type == "ZCC":
            cloud = str(settings.value("zcc/cloud", "")).strip()
            api_key = settings.value("zcc/client_id", "")
            api_secret = secure_get("zcc_client_secret")
            if not all([cloud, api_key, api_secret]):
                self._log_output("ZCC credentials not configured. Go to Settings.", "error")
                QMessageBox.warning(self, self.tr("Error"), self.tr("ZCC credentials not configured. Please go to Settings."))
                return
            self.url_input.setText(f"https://{cloud}/papi/auth/v1/login")
            self.method_combo.setCurrentText("● POST")
            self.headers_table.setItem(0, 0, QTableWidgetItem("Content-Type"))
            self.headers_table.setItem(0, 1, QTableWidgetItem("application/json"))
            self._set_body_mode("json")
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
                # ZDX tenants can be provisioned for API v1 or v2.
                version = str(settings.value("zdx/api_version", "v2"))
                version = version if version in {"v1", "v2"} else "v2"
                url = f"https://{cloud}/{version}/oauth/token"
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
                body = json.dumps({
                    "key_id": client_id,
                    "key_secret": client_secret
                }, indent=2)
                self._set_body_mode("json")
            else:
                # Other APIs use form-urlencoded
                self.headers_table.setItem(0, 0, QTableWidgetItem("Content-Type"))
                self.headers_table.setItem(0, 1, QTableWidgetItem("application/x-www-form-urlencoded"))
                form = {"client_id": client_id, "client_secret": client_secret}
                if api_type != "ZPA":
                    form["grant_type"] = "client_credentials"
                body = urllib.parse.urlencode(form)
                self._set_body_mode("form")
            
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
            self._set_body_mode("form")
            body = urllib.parse.urlencode({
                "client_id": client_id,
                "client_secret": client_secret,
                "grant_type": "client_credentials",
                "audience": "https://api.zscaler.com",
            })
            
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
        request_item = QTreeWidgetItem([f"{best['method']} {best['name']}"])
        request_item.setData(0, Qt.ItemDataRole.UserRole, _automation_entry_details(best))
        self._on_endpoint_selected(request_item, 0)
        summary = self.tr("Suggested request: {method} {name}. Review the attached API Guide and all template values before running.").format(method=best["method"], name=best["name"])
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
        documented_query = {
            str(parameter.get("name", "")).lower(): str(parameter.get("name", ""))
            for parameter in best.get("parameters", []) if parameter.get("in") == "query"
        }
        if any(token in words for token in {"all", "many", "page", "pagination", "limit"}):
            for candidate in ("pagesize", "page_size", "limit", "size"):
                if candidate in documented_query:
                    suggestions[documented_query[candidate]] = "100"
                    break
        if "filter" in words or "search" in words:
            for candidate in ("search", "filter", "query", "q"):
                if candidate in documented_query:
                    suggestions[documented_query[candidate]] = "<review-required>"
                    break
        preview = {
            "method": best["method"], "url": best["url"],
            "documented_parameters": best.get("parameters", []),
            "suggested_params": suggestions,
            "response_codes": best.get("response_codes", []),
        }
        if "request_body" in best:
            preview["body_template"] = best["request_body"]
        self.ai_preview.setPlainText(json.dumps(redact_sensitive(preview), indent=2))

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
        safe_answer = privacy_safe(answer, QSettings("Zscaler", "APIClient"), "display")
        self.ai_summary.setText(self.ai_summary.text().replace(self.tr("Asking configured LLM…"), safe_answer))

    def _on_llm_failed(self, error: str):
        fallback = self.tr("LLM unavailable; using the local catalog assistant.")
        safe_error = privacy_safe(error, QSettings("Zscaler", "APIClient"), "display")
        self.ai_summary.setText(self.ai_summary.text().replace(self.tr("Asking configured LLM…"), f"{fallback}: {safe_error}"))

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
        provider = str(settings.value("ai/provider", "catalog"))
        catalog = [{key: item[key] for key in ("product", "name", "method", "url", "description")} for item in candidates]
        safe_question = privacy_safe({"question": question}, settings, "external")["question"]
        safe_catalog = privacy_safe(catalog, settings, "external")
        prompt = (
            "You are a Zscaler OneAPI assistant. Use only the supplied API catalog candidates. "
            "Do not request, reveal, or include secrets. Explain the best safe request in concise plain text.\n"
            f"Question: {safe_question}\nCandidates: {json.dumps(safe_catalog)}"
        )
        headers = {"Content-Type": "application/json"}
        if provider == "anthropic":
            url = endpoint if endpoint.endswith("/messages") else f"{endpoint}/messages"
            if key: headers.update({"x-api-key": key, "anthropic-version": "2023-06-01"})
            payload = json.dumps({"model": model, "max_tokens": 700, "messages": [{"role": "user", "content": prompt}]}).encode("utf-8")
        else:
            url = endpoint if endpoint.endswith("/chat/completions") else f"{endpoint}/chat/completions"
            if key: headers["Authorization"] = f"Bearer {key}"
            payload = json.dumps({"model": model, "messages": [{"role": "user", "content": prompt}], "temperature": 0.1}).encode("utf-8")
        request = urllib.request.Request(url, data=payload, headers=headers, method="POST")
        with build_network_opener(QSettings("Zscaler", "APIClient")).open(request, timeout=30) as response:
            result = json.loads(response.read().decode("utf-8"))
        if provider == "anthropic":
            return str(result["content"][0]["text"]).strip()
        return str(result["choices"][0]["message"]["content"]).strip()

    def _export_full_response(self):
        if self._binary_response is not None:
            review = QMessageBox.question(
                self, self.tr("Save binary response"),
                self.tr("Binary content cannot be inspected or obfuscated as text. Save the original response only if you trust this endpoint and destination?"),
                QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.No, QMessageBox.StandardButton.No,
            )
            if review != QMessageBox.StandardButton.Yes:
                return
            path, _ = QFileDialog.getSaveFileName(self, self.tr("Save binary response"), self._binary_response_name, self.tr("All files (*)"))
            if path:
                Path(path).write_bytes(self._binary_response)
                self.status_bar.showMessage(self.tr("Original binary response saved"))
            return
        path, _ = QFileDialog.getSaveFileName(
            self, self.tr("Export response"), "response.zsapi.json",
            "ZS API Exchange (*.zsapi.json);;JSON (*.json);;YAML (*.yaml);;XML (*.xml);;CSV (*.csv);;Excel (*.xlsx);;NDJSON (*.jsonl);;Markdown (*.md);;HTML (*.html);;PDF (*.pdf);;HAR (*.har);;PNG chart (*.png);;SVG chart (*.svg)"
        )
        if not path:
            return
        payload = self._response_export_payload()
        lower_path = path.lower()
        suffix = Path(path).suffix.lower()
        if lower_path.endswith(".zsapi.json") or suffix == ".json":
            Path(path).write_text(json.dumps(payload, indent=2, ensure_ascii=False), encoding="utf-8")
        elif suffix == ".yaml":
            Path(path).write_text(self._yaml_text(payload), encoding="utf-8")
        elif suffix == ".xml":
            Path(path).write_text(self._xml_text(payload), encoding="utf-8")
        elif suffix == ".har":
            Path(path).write_text(json.dumps(self._response_har(payload), indent=2, ensure_ascii=False), encoding="utf-8")
        elif suffix in {".csv", ".xlsx", ".jsonl"}:
            headers, rows = self._response_export_table()
            if not headers:
                QMessageBox.information(self, self.tr("Export response"), self.tr("No tabular response data is available to export."))
                return
            Path(path).write_bytes(self._tabular_export_bytes(suffix, headers, rows))
        elif suffix == ".png":
            if not self.response_chart.values:
                QMessageBox.information(self, self.tr("Export response"), self.tr("No chart data is available to export."))
                return
            original_values = list(self.response_chart.values)
            self.response_chart.set_values(self._privacy_chart_values(original_values))
            self.response_chart.grab().save(path, "PNG")
            self.response_chart.set_values(original_values)
        elif suffix == ".svg":
            if not self.response_chart.values:
                QMessageBox.information(self, self.tr("Export response"), self.tr("No chart data is available to export."))
                return
            Path(path).write_text(self._chart_svg(self._privacy_chart_values(self.response_chart.values), self.response_chart.style), encoding="utf-8")
        elif suffix == ".md":
            content = "# ZS API Client response\n\n```json\n" + json.dumps(payload, indent=2, ensure_ascii=False) + "\n```\n"
            Path(path).write_text(content, encoding="utf-8")
        elif suffix == ".html":
            content = "<!doctype html><html><head><meta charset=\"utf-8\"><title>ZS API Client response</title></head><body><h1>ZS API Client response</h1><pre>" + html.escape(json.dumps(payload, indent=2, ensure_ascii=False)) + "</pre></body></html>"
            Path(path).write_text(content, encoding="utf-8")
        elif suffix == ".pdf":
            Path(path).write_bytes(self._pdf_bytes("ZS API Client response", json.dumps(payload, indent=2, ensure_ascii=False).splitlines()))
        else:
            Path(path).write_text(json.dumps(payload, indent=2, ensure_ascii=False), encoding="utf-8")
        AuditTrail(QSettings("Zscaler", "APIClient")).append("response_exported", {"format": suffix.lstrip("."), "file": os.path.basename(path)})
        self.status_bar.showMessage(self.tr("Masked response exported"))

    def _response_export_payload(self) -> dict[str, Any]:
        """Return a fresh, deeply masked exchange document for the active response."""
        if self._last_response_exchange:
            payload = dict(self._last_response_exchange)
        else:
            raw = self.response_body.toPlainText()
            try:
                body = json.loads(raw)
            except (TypeError, ValueError):
                body = raw
            headers = dict(line.split(": ", 1) for line in self.response_headers.toPlainText().splitlines() if ": " in line)
            payload = {
                "schema": RESPONSE_EXCHANGE_SCHEMA,
                "app_version": __version__,
                "request": {},
                "response": {"status": 0, "reason": "", "size_bytes": len(raw.encode("utf-8")), "headers": headers, "body": body},
            }
        payload["schema"] = RESPONSE_EXCHANGE_SCHEMA
        payload["app_version"] = __version__
        payload["exported_at"] = time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())
        safe = privacy_safe(payload, QSettings("Zscaler", "APIClient"), "export")
        request = safe.get("request", {}) if isinstance(safe, dict) else {}
        if isinstance(request, dict) and request.get("url"):
            request["url"] = redact_url(str(request["url"]))
        return safe

    def _response_export_table(self) -> tuple[list[str], list[list[str]]]:
        """Rebuild the selected table from the source response without the UI row cap."""
        payload = self._response_export_payload()
        body = payload.get("response", {}).get("body") if isinstance(payload.get("response"), dict) else None
        datasets = collect_record_datasets(body, maximum_rows=sys.maxsize)
        selected_path = None
        selected_index = self.response_dataset_choice.currentData()
        if isinstance(selected_index, int) and 0 <= selected_index < len(self._response_datasets):
            selected_path = self._response_datasets[selected_index][0]
        rows = next((items for path, items in datasets if path == selected_path), datasets[0][1] if datasets else [])
        headers = list(dict.fromkeys(str(key) for row in rows for key in row))
        output = [[json.dumps(row.get(key), ensure_ascii=False) if isinstance(row.get(key), (dict, list)) else str(row.get(key, "")) for key in headers] for row in rows]
        return headers, redact_sensitive(output)

    @staticmethod
    def _yaml_text(value: Any) -> str:
        """Serialize JSON-compatible exchange data as dependency-free YAML."""
        def render(item: Any, depth: int) -> list[str]:
            indent = "  " * depth
            if isinstance(item, dict):
                lines = []
                for key, child in item.items():
                    safe_key = json.dumps(str(key), ensure_ascii=False)
                    if isinstance(child, (dict, list)):
                        lines.append(f"{indent}{safe_key}:")
                        lines.extend(render(child, depth + 1))
                    else:
                        lines.append(f"{indent}{safe_key}: {json.dumps(child, ensure_ascii=False)}")
                return lines
            if isinstance(item, list):
                lines = []
                for child in item:
                    if isinstance(child, (dict, list)):
                        lines.append(f"{indent}-")
                        lines.extend(render(child, depth + 1))
                    else:
                        lines.append(f"{indent}- {json.dumps(child, ensure_ascii=False)}")
                return lines
            return [f"{indent}{json.dumps(item, ensure_ascii=False)}"]
        return "---\n" + "\n".join(render(value, 0)) + "\n"

    @staticmethod
    def _xml_text(value: Any) -> str:
        """Serialize exchange data to typed XML without unsafe element names."""
        def render(item: Any, name: str = "item") -> str:
            attr = f' name="{xml_escape(str(name), {chr(34): "&quot;"})}"'
            if isinstance(item, dict):
                return f"<field{attr} type=\"object\">" + "".join(render(child, str(key)) for key, child in item.items()) + "</field>"
            if isinstance(item, list):
                return f"<field{attr} type=\"array\">" + "".join(render(child) for child in item) + "</field>"
            kind = "null" if item is None else "boolean" if isinstance(item, bool) else "number" if isinstance(item, (int, float)) else "string"
            text_value = "" if item is None else str(item).lower() if isinstance(item, bool) else str(item)
            return f"<field{attr} type=\"{kind}\">{xml_escape(text_value)}</field>"
        return '<?xml version="1.0" encoding="UTF-8"?>\n<zs-api-exchange>' + render(value, "document") + "</zs-api-exchange>\n"

    @staticmethod
    def _response_har(payload: dict[str, Any]) -> dict[str, Any]:
        request = payload.get("request", {}) if isinstance(payload.get("request"), dict) else {}
        response = payload.get("response", {}) if isinstance(payload.get("response"), dict) else {}
        body = response.get("body")
        response_text = json.dumps(body, ensure_ascii=False) if isinstance(body, (dict, list)) else str(body or "")
        request_body = request.get("body", "")
        if isinstance(request_body, (dict, list)):
            request_body = json.dumps(request_body, ensure_ascii=False)
        return {"log": {"version": "1.2", "creator": {"name": "ZS API Client", "version": __version__}, "entries": [{
            "startedDateTime": payload.get("exported_at", ""), "time": int(response.get("duration_ms", 0) or 0),
            "request": {"method": str(request.get("method", "GET")), "url": str(request.get("url", "")), "httpVersion": "HTTP/1.1", "headers": [{"name": str(key), "value": str(value)} for key, value in request.get("headers", {}).items()], "queryString": [{"name": key, "value": value} for key, value in urllib.parse.parse_qsl(urllib.parse.urlsplit(str(request.get("url", ""))).query, keep_blank_values=True)], "postData": {"mimeType": "application/json", "text": str(request_body)}, "headersSize": -1, "bodySize": len(str(request_body).encode("utf-8"))},
            "response": {"status": int(response.get("status", 0) or 0), "statusText": str(response.get("reason", "")), "httpVersion": "HTTP/1.1", "headers": [{"name": str(key), "value": str(value)} for key, value in response.get("headers", {}).items()], "content": {"size": int(response.get("size_bytes", len(response_text.encode("utf-8"))) or 0), "mimeType": "application/json", "text": response_text}, "redirectURL": "", "headersSize": -1, "bodySize": int(response.get("size_bytes", len(response_text.encode("utf-8"))) or 0)},
            "cache": {}, "timings": {"send": 0, "wait": int(response.get("duration_ms", 0) or 0), "receive": 0}
        }]}}

    def _preview_response_export(self):
        """Show exactly what will leave the application, with secrets already masked."""
        if self._binary_response is not None:
            preview = json.dumps({
                "file_name": self._binary_response_name,
                "content_type": self._binary_response_type,
                "size_bytes": len(self._binary_response),
                "notice": self.tr("Binary content is not included in this preview."),
            }, indent=2)
            dialog = QDialog(self); dialog.setWindowTitle(self.tr("Export preview")); dialog.resize(620, 360)
            layout = QVBoxLayout(dialog); layout.addWidget(QLabel(self.tr("Original binary export requires a separate confirmation.")))
            text = QPlainTextEdit(preview); text.setReadOnly(True); layout.addWidget(text)
            buttons = QDialogButtonBox(QDialogButtonBox.StandardButton.Close); buttons.rejected.connect(dialog.reject); layout.addWidget(buttons)
            dialog.exec(); return
        preview = json.dumps(self._response_export_payload(), indent=2, ensure_ascii=False)
        dialog = QDialog(self); dialog.setWindowTitle(self.tr("Export preview")); dialog.resize(760, 520)
        layout = QVBoxLayout(dialog); note = QLabel(self.tr("Sensitive fields are masked in every export.")); layout.addWidget(note)
        text = QPlainTextEdit(preview); text.setReadOnly(True); layout.addWidget(text)
        buttons = QDialogButtonBox(QDialogButtonBox.StandardButton.Close); buttons.rejected.connect(dialog.reject); layout.addWidget(buttons)
        dialog.exec()

    def _import_response_exchange(self):
        """Open a masked exchange locally; never restore credentials or execute its request."""
        path, _ = QFileDialog.getOpenFileName(
            self, self.tr("Open response export"), "", "ZS API Exchange (*.zsapi.json *.json);;JSON (*.json)"
        )
        if not path:
            return
        candidate = Path(path)
        try:
            maximum_mb = max(1, min(1024, int(QSettings("Zscaler", "APIClient").value("advanced/max_transfer_mb", "100"))))
            safe_document, error_code = load_masked_response_exchange(candidate, maximum_mb * 1024 * 1024)
        except (TypeError, ValueError):
            safe_document, error_code = None, "unavailable"
        if safe_document is None:
            QMessageBox.warning(self, self.tr("Open response export"), response_exchange_error_message(self, error_code))
            return

        display_document = privacy_safe(safe_document, QSettings("Zscaler", "APIClient"), "display")
        safe_response = display_document["response"]
        self._last_response_exchange = safe_document
        self._binary_response = None
        body = safe_response.get("body")
        if isinstance(body, (dict, list)):
            self.response_body.setPlainText(json.dumps(body, indent=2, ensure_ascii=False))
        else:
            self.response_body.setPlainText(str(body if body is not None else ""))
        headers = safe_response.get("headers", {})
        self.response_headers.setPlainText("\n".join(f"{key}: {value}" for key, value in headers.items()))
        status = int(safe_response.get("status", 0) or 0)
        reason = str(safe_response.get("reason", ""))
        size = int(safe_response.get("size_bytes", len(self.response_body.toPlainText().encode("utf-8"))) or 0)
        self.response_info.setText(f"<span style='color: #1565c0; font-weight: bold;'>{self.tr('Imported')} · {status} {html.escape(reason)}</span> · {self._format_size(size)}")
        self._show_ai_visualization(body)
        self._render_response_visualization(body)
        if isinstance(body, dict) and any(key in body for key in ("data", "errors", "extensions")):
            self._show_graphql_output(body)
        AuditTrail(QSettings("Zscaler", "APIClient")).append("response_export_opened", {"file": candidate.name, "status": status})
        self.status_bar.showMessage(self.tr("Response export opened locally; no API request was sent."))

    def _compare_response_drift(self):
        """Open a local-only comparison against a masked response baseline."""
        if self._binary_response is not None:
            QMessageBox.information(self, self.tr("Response drift comparison"), self.tr("Binary responses cannot be structurally compared. Export and inspect the original file with an appropriate tool.")); return
        if not self.response_body.toPlainText() and not self._last_response_exchange:
            QMessageBox.information(self, self.tr("Response drift comparison"), self.tr("Send a request or open a response export before comparing drift.")); return
        ResponseComparisonDialog(self._response_export_payload(), self).exec()

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
            original_values = list(self.ai_chart.values)
            self.ai_chart.set_values(self._privacy_chart_values(original_values))
            self.ai_chart.grab().save(path, "PNG")
            self.ai_chart.set_values(original_values)
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
        def column_name(index: int) -> str:
            result = ""
            index += 1
            while index:
                index, remainder = divmod(index - 1, 26)
                result = chr(65 + remainder) + result
            return result

        def excel_text(value: Any) -> str:
            # XML 1.0 rejects most C0 control characters.
            return re.sub(r"[\x00-\x08\x0b\x0c\x0e-\x1f]", "", str(value))

        sheet_rows = []
        for row_number, row in enumerate([headers, *rows], 1):
            cells = "".join(
                f'<c r="{column_name(column)}{row_number}" t="inlineStr"><is><t>{xml_escape(excel_text(value))}</t></is></c>'
                for column, value in enumerate(row)
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
        """Write a multi-page portable PDF report without truncating masked data."""
        safe_lines = [title, ""]
        for line in lines:
            safe_lines.extend(textwrap.wrap(str(line), width=90, replace_whitespace=False, drop_whitespace=False) or [""])
        pages = [safe_lines[index:index + 54] for index in range(0, len(safe_lines), 54)] or [[]]
        escape_pdf = lambda value: value.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")
        page_count = len(pages)
        font_object = 3 + page_count * 2
        page_objects = [3 + index * 2 for index in range(page_count)]
        objects = ["<< /Type /Catalog /Pages 2 0 R >>", f"<< /Type /Pages /Kids [{' '.join(f'{number} 0 R' for number in page_objects)}] /Count {page_count} >>"]
        for index, page in enumerate(pages):
            page_object = 3 + index * 2
            content_object = page_object + 1
            stream = "BT\n/F1 9 Tf\n42 770 Td\n" + "\n".join(f"({escape_pdf(line)}) Tj\n0 -13 Td" for line in page) + "\nET"
            objects.append(f"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 {font_object} 0 R >> >> /Contents {content_object} 0 R >>")
            objects.append(f"<< /Length {len(stream.encode('latin-1', 'replace'))} >>\nstream\n{stream}\nendstream")
        objects.append("<< /Type /Font /Subtype /Type1 /BaseFont /Courier >>")
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
        records = [dict(zip(headers, row)) for row in rows]
        safe_records = privacy_safe(records, QSettings("Zscaler", "APIClient"), "export")
        return headers, [[str(record.get(header, "")) for header in headers] for record in safe_records]

    def _privacy_chart_values(self, values, target="export"):
        settings = QSettings("Zscaler", "APIClient")
        return [
            (privacy_safe({"name": str(label)}, settings, target)["name"], float(value))
            for label, value in values
        ]

    def _svg_chart(self) -> str:
        """Export the current masked chart as a portable, dependency-free SVG."""
        return self._chart_svg(self._privacy_chart_values(self.ai_chart.values), self.ai_chart.style)

    @staticmethod
    def _chart_svg(values: list[tuple[str, float]], style: str) -> str:
        """Export masked chart values as a portable, dependency-free SVG."""
        width, height = 800, 360
        maximum = max((value for _, value in values), default=1) or 1
        palette = ("#0078d4", "#2e7d32", "#e65100", "#6a1b9a", "#c62828")
        content = ['<rect width="800" height="360" fill="#252526"/>']
        if style == "pie":
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
        elif style == "line":
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
        body_mode = str(self.body_mode.currentData() or "json")
        url = redact_url(self.url_input.text())
        headers: dict[str, str] = {}
        for row in range(self.headers_table.rowCount()):
            key_item, value_item = self.headers_table.item(row, 0), self.headers_table.item(row, 1)
            if key_item and value_item and key_item.text().strip():
                key = key_item.text().strip()
                headers[key] = "***" if is_sensitive_name(key) else str(redact_sensitive(value_item.text()))
        raw_body = self.body_input.toPlainText().strip()
        try:
            body_value = redact_sensitive(json.loads(raw_body)) if raw_body and body_mode != "form" else ""
        except json.JSONDecodeError:
            body_value = str(redact_sensitive(raw_body))
        if raw_body and body_mode == "form":
            pairs = urllib.parse.parse_qsl(raw_body, keep_blank_values=True)
            safe_pairs = [
                privacy_safe({key: "***" if is_sensitive_name(key) else value}, QSettings("Zscaler", "APIClient"), "export")
                for key, value in pairs
            ]
            body_value = urllib.parse.urlencode([(key, item[key]) for (key, _), item in zip(pairs, safe_pairs)], safe="*")
        safe = privacy_safe({"url": url, "headers": headers, "body": body_value}, QSettings("Zscaler", "APIClient"), "export")
        body = json.dumps(safe["body"], indent=2, ensure_ascii=False) if isinstance(safe["body"], (dict, list)) else str(safe["body"])
        return method, str(safe["url"]), safe["headers"], body

    def _masked_curl_command(self) -> str:
        method, url, headers, body = self._masked_request_parts()
        body_mode = str(self.body_mode.currentData() or "json")
        parts = ["curl", "-X", method]
        for key, value in headers.items():
            # curl supplies the multipart boundary. Reusing a manually entered
            # Content-Type would create an invalid request without that boundary.
            if body_mode == "multipart" and key.lower() == "content-type":
                continue
            parts.extend(["-H", shlex.quote(f"{key}: {value}")])
        if method in {"POST", "PUT", "PATCH", "DELETE"}:
            if body_mode == "multipart":
                try:
                    fields = json.loads(body) if body else {}
                except (TypeError, ValueError):
                    fields = {}
                if isinstance(fields, dict):
                    for key, value in fields.items():
                        safe_value = "***" if is_sensitive_name(str(key)) else redact_sensitive(value)
                        rendered = json.dumps(safe_value, ensure_ascii=False) if isinstance(safe_value, (dict, list)) else str(safe_value)
                        parts.extend(["-F", shlex.quote(f"{key}={rendered}")])
                file_field = re.sub(r'[\r\n"]', "", self.multipart_file_field.text().strip()) or "file"
                parts.extend(["-F", shlex.quote(f"{file_field}=@<select-local-file>")])
            elif body:
                if not any(key.lower() == "content-type" for key in headers):
                    content_type = "application/x-www-form-urlencoded" if body_mode == "form" else "application/json" if body_mode == "json" else "text/plain"
                    parts.extend(["-H", shlex.quote(f"Content-Type: {content_type}")])
                parts.extend(["--data" if body_mode == "form" else "--data-raw", shlex.quote(body)])
        parts.append(shlex.quote(url))
        return " \\\n  ".join(parts)

    def _postman_collection(self) -> dict:
        method, url, headers, body = self._masked_request_parts()
        body_mode = str(self.body_mode.currentData() or "json")
        request: dict[str, Any] = {
            "method": method,
            "header": [
                {"key": key, "value": value, "type": "text"}
                for key, value in headers.items()
                if not (body_mode == "multipart" and key.lower() == "content-type")
            ],
            "url": url,
        }
        if method in {"POST", "PUT", "PATCH", "DELETE"}:
            if body_mode == "multipart":
                formdata = []
                try:
                    fields = json.loads(body) if body else {}
                except (TypeError, ValueError):
                    fields = {}
                if isinstance(fields, dict):
                    for key, value in fields.items():
                        safe_value = "***" if is_sensitive_name(str(key)) else redact_sensitive(value)
                        rendered = json.dumps(safe_value, ensure_ascii=False) if isinstance(safe_value, (dict, list)) else str(safe_value)
                        formdata.append({"key": str(key), "value": rendered, "type": "text"})
                file_field = re.sub(r'[\r\n"]', "", self.multipart_file_field.text().strip()) or "file"
                formdata.append({"key": file_field, "type": "file", "src": "<select-local-file>"})
                request["body"] = {"mode": "formdata", "formdata": formdata}
            elif body_mode == "form" and body:
                request["body"] = {
                    "mode": "urlencoded",
                    "urlencoded": [
                        {"key": key, "value": "***" if is_sensitive_name(key) else value, "type": "text"}
                        for key, value in urllib.parse.parse_qsl(body, keep_blank_values=True)
                    ],
                }
            elif body:
                options = {"raw": {"language": "json"}} if body_mode == "json" else {}
                request["body"] = {"mode": "raw", "raw": body, "options": options}
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

    def _set_body_mode(self, mode: str):
        index = self.body_mode.findData(mode)
        self.body_mode.setCurrentIndex(max(0, index))

    def _on_body_mode_changed(self, index=None):
        mode = self.body_mode.currentData() if hasattr(self, "body_mode") else "json"
        if hasattr(self, "multipart_controls"):
            self.multipart_controls.setVisible(mode == "multipart")
        placeholders = {
            "json": self.tr("Request body (JSON)..."),
            "raw": self.tr("Raw request body..."),
            "form": self.tr("Form fields as JSON or an encoded key=value string..."),
            "multipart": self.tr("Optional multipart fields as a JSON object..."),
        }
        if hasattr(self, "body_input"):
            self.body_input.setPlaceholderText(placeholders.get(mode, placeholders["json"]))

    def _browse_upload_file(self):
        path, _ = QFileDialog.getOpenFileName(self, self.tr("Select upload file"))
        if path:
            self.multipart_file_path.setText(path)

    def _on_graphql_mode_toggled(self, enabled):
        if enabled:
            self.method_combo.setCurrentText("● POST")
            if hasattr(self, "body_mode"):
                self._set_body_mode("json")
                self.body_mode.setEnabled(False)
        elif hasattr(self, "body_mode"):
            self.body_mode.setEnabled(True)
        if hasattr(self, "pagination_controls_widget"):
            available = bool(self._selected_endpoint_details and self._selected_endpoint_details.get("pagination")) and not enabled
            self.pagination_controls_widget.setEnabled(available)
            if enabled:
                self.paginate_request.setChecked(False)
        if hasattr(self, "request_tabs") and hasattr(self, "graphql_variables_tab_index"):
            self.request_tabs.setTabVisible(self.graphql_variables_tab_index, bool(enabled))

    @staticmethod
    def _graphql_display_value(value):
        return json.dumps(value, ensure_ascii=False, separators=(",", ":"))

    def _graphql_variable_editor_texts(self):
        values = {}
        for row in range(self.graphql_variables_table.rowCount()):
            name = self.graphql_variables_table.item(row, 0)
            value = self.graphql_variables_table.item(row, 4)
            if name:
                values[name.text()] = value.text() if value else ""
        return values

    def _refresh_graphql_variables(self, checked=False, query=None, editor_values=None):
        """Populate a typed editor from the selected GraphQL operation."""
        if isinstance(checked, str) and query is None:
            query = checked
        try:
            payload = json.loads(self.body_input.toPlainText() or "{}")
        except (TypeError, ValueError):
            payload = {}
        query = str(query if query is not None else payload.get("query", ""))
        definitions = graphql_variable_definitions(query, str(payload.get("operationName") or "") or None)
        previous = self._graphql_variable_editor_texts()
        body_values = payload.get("variables", {}) if isinstance(payload.get("variables", {}), dict) else {}
        self.graphql_variables_table.setRowCount(len(definitions))
        missing = 0
        for row, definition in enumerate(definitions):
            default = definition.get("default")
            columns = (definition["name"], definition["type"], self.tr("Yes") if definition["required"] else self.tr("No"), str(default) if default is not None else "—")
            for column, value in enumerate(columns):
                item = QTableWidgetItem(str(value)); item.setFlags(item.flags() & ~Qt.ItemFlag.ItemIsEditable)
                if column == 2 and definition["required"]:
                    item.setForeground(QColor("#ef4444")); font = item.font(); font.setBold(True); item.setFont(font)
                self.graphql_variables_table.setItem(row, column, item)
            if editor_values is not None and definition["name"] in editor_values:
                text = str(editor_values[definition["name"]])
            elif definition["name"] in previous:
                text = previous[definition["name"]]
            elif definition["name"] in body_values:
                text = self._graphql_display_value(body_values[definition["name"]])
            else:
                text = ""
            self.graphql_variables_table.setItem(row, 4, QTableWidgetItem(text))
            if definition["required"] and not text.strip():
                missing += 1
        if definitions:
            self.graphql_variables_status.setText(self.tr("{count} variable(s) extracted · {missing} required value(s) missing").format(count=len(definitions), missing=missing))
        else:
            self.graphql_variables_status.setText(self.tr("No GraphQL variables extracted."))
        return definitions

    def _validated_graphql_body(self, payload):
        if not isinstance(payload, dict) or not isinstance(payload.get("query"), str):
            return None, [self.tr("GraphQL body must be a JSON object containing a query string.")]
        operation_name = str(payload.get("operationName") or "") or None
        operation_names = graphql_operation_names(payload["query"]); errors = []
        if len(operation_names) > 1 and not operation_name:
            errors.append(self.tr("Choose operationName because the document contains multiple GraphQL operations."))
        elif operation_name and operation_name not in operation_names:
            errors.append(self.tr("GraphQL operationName does not match a named operation in the query."))
        definitions = graphql_variable_definitions(payload["query"], operation_name)
        current_names = [self.graphql_variables_table.item(row, 0).text() for row in range(self.graphql_variables_table.rowCount()) if self.graphql_variables_table.item(row, 0)]
        if current_names != [definition["name"] for definition in definitions]:
            self.graphql_variables_table.setRowCount(0)
            self._refresh_graphql_variables(query=payload["query"])
        values = {}
        for row, definition in enumerate(definitions):
            item = self.graphql_variables_table.item(row, 4); text = item.text().strip() if item else ""
            if not text:
                if definition["required"]:
                    errors.append(self.tr("Variable ${name} is required.").format(name=definition["name"]))
                continue
            value, error = parse_graphql_variable_value(text, definition["type"])
            if error:
                errors.append(self.tr("Variable ${name} must be valid for type {type}.").format(name=definition["name"], type=definition["type"]))
            else:
                values[definition["name"]] = value
        existing = payload.get("variables", {})
        if isinstance(existing, dict):
            extra = sorted(set(existing) - {definition["name"] for definition in definitions})
            if extra:
                errors.append(self.tr("Remove undeclared GraphQL variables: {names}").format(names=", ".join(extra)))
        result = dict(payload); result["variables"] = values
        return result, errors

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
        self.graphql_variables_table.setRowCount(0)
        definitions = self._refresh_graphql_variables(query=query, editor_values={})
        self.request_tabs.setCurrentIndex(self.graphql_variables_tab_index if definitions else 2)
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
        payload = {"url": self.url_input.text().strip(), "body": self.body_input.toPlainText(), "params": self._table_values(self.params_table), "graphql_variables": self._graphql_variable_editor_texts()}
        if not secure_store(f"graphql_preset_{name}", json.dumps(payload)):
            QMessageBox.warning(self, self.tr("Secure storage"), self.tr("The system keychain could not save the GraphQL query.")); return
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
        params = dict(payload.get("params", {})) if isinstance(payload.get("params", {}), dict) else {}
        editor_values = payload.get("graphql_variables")
        if not isinstance(editor_values, dict):
            try:
                saved_body = json.loads(payload.get("body", "{}"))
            except (TypeError, ValueError):
                saved_body = {}
            names = {item["name"] for item in graphql_variable_definitions(str(saved_body.get("query", "")), str(saved_body.get("operationName") or "") or None)}
            editor_values = {name: params.pop(name) for name in list(params) if name in names}
        self._populate_table(self.params_table, params)
        self.graphql_variables_table.setRowCount(0)
        self._refresh_graphql_variables(editor_values=editor_values)
        self.graphql_preset_name.setText(name)

    def _rename_graphql_query(self):
        old_name = self.graphql_preset_choice.currentText()
        new_name = self.graphql_preset_name.text().strip()
        if not old_name or not new_name or old_name == new_name:
            return
        raw = secure_get(f"graphql_preset_{old_name}")
        if not raw:
            return
        if not secure_store_many({f"graphql_preset_{new_name}": raw, f"graphql_preset_{old_name}": ""}):
            QMessageBox.warning(self, self.tr("Secure storage"), self.tr("The system keychain could not rename the GraphQL query."))
            return
        settings = QSettings("Zscaler", "APIClient")
        names = settings.value("graphql/presets", [], type=list)
        settings.setValue("graphql/presets", sorted(set((new_name if name == old_name else name) for name in names)))
        self._refresh_graphql_presets()
        self.graphql_preset_choice.setCurrentText(new_name)

    def _delete_graphql_query(self):
        name = self.graphql_preset_choice.currentText()
        if not name:
            return
        if not secure_delete(f"graphql_preset_{name}"):
            QMessageBox.warning(self, self.tr("Secure storage"), self.tr("The system keychain could not delete the GraphQL query."))
            return
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
        if not secure_store(self._graphql_schema_key(url), json.dumps(payload)):
            QMessageBox.warning(self, self.tr("Secure storage"), self.tr("The system keychain could not save the GraphQL schema."))
            return
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
            self.request_tabs.setCurrentIndex(self.path_variables_tab_index)
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
            headers["auth-token"] = self.zcc_token
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

        details = self._selected_endpoint_details or {}
        documented = details.get("parameters", []) if isinstance(details.get("parameters", []), list) else []
        required_query = [str(item.get("name", "")) for item in documented if item.get("in") == "query" and item.get("required")]
        required_headers = [str(item.get("name", "")) for item in documented if item.get("in") == "header" and item.get("required")]
        missing_query = [name for name in required_query if not str(params.get(name, "")).strip()]
        header_names = {str(key).lower(): value for key, value in headers.items()}
        missing_headers = [name for name in required_headers if not str(header_names.get(name.lower(), "")).strip()]
        if missing_query or missing_headers:
            self.request_tabs.setCurrentIndex(0 if missing_query else 1)
            QMessageBox.warning(
                self, self.tr("Missing documented parameters"),
                self.tr("Enter required values for: {names}").format(names=", ".join(missing_query + missing_headers)),
            )
            return
        
        if params:
            url += "?" + urllib.parse.urlencode(params)
        
        # Get body
        body = None
        history_body = None
        body_mode = "json" if self.graphql_mode.isChecked() else str(self.body_mode.currentData() or "json")
        body_text = self.body_input.toPlainText().strip()
        if self.graphql_mode.isChecked() and not body_text:
            self.request_tabs.setCurrentIndex(2)
            QMessageBox.warning(self, self.tr("GraphQL Variables"), self.tr("GraphQL body must be a JSON object containing a query string.")); return
        if method in ["POST", "PUT", "PATCH", "DELETE"] and (body_text or body_mode == "multipart"):
            content_type = http_header_value(headers, "Content-Type").split(";", 1)[0].strip().lower()
            if content_type == "application/x-www-form-urlencoded" and body_mode == "json":
                body_mode = "form"
            if body_mode == "multipart":
                file_path = Path(self.multipart_file_path.text().strip())
                if not file_path.is_file():
                    self.request_tabs.setCurrentIndex(2)
                    QMessageBox.warning(self, self.tr("Multipart file upload"), self.tr("Select an available local file before sending."))
                    return
                try:
                    fields = json.loads(body_text) if body_text else {}
                except json.JSONDecodeError as error:
                    QMessageBox.warning(self, self.tr("Error"), self.tr("Multipart fields must be a JSON object: {error}").format(error=error))
                    return
                if not isinstance(fields, dict):
                    QMessageBox.warning(self, self.tr("Error"), self.tr("Multipart fields must be a JSON object."))
                    return
                file_field = self.multipart_file_field.text().strip() or "file"
                body = {"_multipart": {"file_path": str(file_path), "file_field": file_field, "fields": fields}}
                history_body = {"multipart": {"file_name": file_path.name, "file_field": file_field, "fields": fields}}
                for key in list(headers):
                    if key.lower() == "content-type":
                        headers.pop(key)
            elif body_mode == "raw":
                body = body_text
                history_body = body
            elif body_mode == "form":
                try:
                    form_fields = json.loads(body_text)
                except json.JSONDecodeError:
                    form_fields = None
                if isinstance(form_fields, dict):
                    body = urllib.parse.urlencode(form_fields, doseq=True)
                else:
                    body = body_text
                history_body = body
                if not content_type:
                    set_http_header(headers, "Content-Type", "application/x-www-form-urlencoded")
            else:
                try:
                    body = json.loads(body_text)
                except json.JSONDecodeError as e:
                    QMessageBox.warning(self, self.tr("Error"), f"Invalid JSON: {e}")
                    return
                if self.graphql_mode.isChecked():
                    body, variable_errors = self._validated_graphql_body(body)
                    if variable_errors:
                        self.request_tabs.setCurrentIndex(self.graphql_variables_tab_index)
                        QMessageBox.warning(self, self.tr("GraphQL Variables"), "\n".join(variable_errors))
                        return
                    self.body_input.setPlainText(json.dumps(body, indent=2, ensure_ascii=False))
                history_body = body
        
        # Send request
        self.status_bar.showMessage(self.tr("Sending request..."))
        self.send_btn.setEnabled(False)
        self.cancel_request_btn.setEnabled(True)
        
        # Log the request
        self._log_output(f"{method} {url[:60]}{'...' if len(url) > 60 else ''}")
        
        request = {
            "url": url,
            "method": method,
            "headers": headers,
            "body": body,
            "body_mode": body_mode,
        }
        
        # Store request info for history
        self._pending_request = {
            "method": method,
            "url": url,
            "headers": headers,
            "body": history_body,
            "body_mode": body_mode,
            "start_time": time.time(),
        }

        pagination = details.get("pagination") if isinstance(details.get("pagination"), dict) else None
        if self.paginate_request.isChecked():
            if method != "GET" or not pagination:
                self.send_btn.setEnabled(True)
                self.cancel_request_btn.setEnabled(False)
                self._pending_request = None
                QMessageBox.warning(self, self.tr("Pagination unavailable"), self.tr("Select a documented paginated GET operation before fetching all pages."))
                return
            try:
                page_size = max(1, min(1000, int(self.pagination_page_size.currentText())))
            except ValueError:
                page_size = 100
            pagination = {**pagination, "page_size": page_size, "max_pages": int(self.pagination_max_pages.currentText())}
            self._pending_request["pagination"] = pagination
            self.worker = PaginatedApiWorker(request, pagination)
            self.worker.progress.connect(self._on_pagination_progress)
        else:
            self.worker = ApiWorker([request])
        self.worker.retrying.connect(self._on_request_retrying)
        self.worker.finished.connect(self._on_request_finished)
        self.worker.start()

    def _on_pagination_progress(self, completed: int, maximum: int):
        self.status_bar.showMessage(
            self.tr("Fetching page {page} of at most {maximum}…").format(page=completed, maximum=maximum)
        )

    def _on_request_retrying(self, attempt: int, maximum: int, seconds: int):
        message = self.tr("Safe read retry {attempt} of {maximum} in {seconds} second(s)…").format(attempt=attempt, maximum=maximum, seconds=seconds)
        self.status_bar.showMessage(message)
        self._log_output(message, "warning")

    def _cancel_request(self):
        worker = getattr(self, "worker", None)
        if worker is not None and worker.isRunning():
            worker.requestInterruption()
            self.cancel_request_btn.setEnabled(False)
            self.status_bar.showMessage(self.tr("Cancellation requested; waiting for the current HTTP request to finish safely…"))
    
    def _on_request_finished(self, result: Dict):
        self.send_btn.setEnabled(True)
        self.cancel_request_btn.setEnabled(False)
        
        # Calculate duration
        duration_ms = None
        if hasattr(self, "_pending_request") and self._pending_request:
            duration_ms = int((time.time() - self._pending_request["start_time"]) * 1000)
        
        if not result.get("results") and result.get("cancelled"):
            self.response_info.setText(f"<span style='color: #e65100; font-weight: bold;'>{self.tr('Request cancelled')}</span>")
            self.status_bar.showMessage(self.tr("Request cancelled before completion"))
            pending = getattr(self, "_pending_request", None)
            if pending:
                self._add_to_history(pending["method"], pending["url"], pending["headers"], pending["body"], status=0, duration_ms=duration_ms, body_mode=pending.get("body_mode", "json"))
            self._pending_request = None
            return

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
                retry_count = int(response_data.pop("_retry_count", 0) or 0) if isinstance(response_data, dict) else 0
                response_headers = response_data.pop("_headers", {}) if isinstance(response_data, dict) else {}
                raw_text = response_data.pop("_raw_text", None) if isinstance(response_data, dict) else None
                binary_base64 = response_data.pop("_binary_base64", None) if isinstance(response_data, dict) else None
                binary_name = response_data.pop("_download_filename", "response.bin") if isinstance(response_data, dict) else "response.bin"
                binary_type = response_data.pop("_content_type", "application/octet-stream") if isinstance(response_data, dict) else "application/octet-stream"
                payload = response_data.pop("_payload", response_data) if isinstance(response_data, dict) else response_data
                size_str = self._format_size(resp_size)
                safe_response_headers = privacy_safe({
                    key: "***" if is_sensitive_name(key) else redact_sensitive(value)
                    for key, value in response_headers.items()
                }, QSettings("Zscaler", "APIClient"), "display")
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
                    + (" · " + self.tr("Safe read retries: {count}").format(count=retry_count) if retry_count else "")
                )
                
                # Get indent setting
                settings = QSettings("Zscaler", "APIClient")
                indent = settings.value("display/json_indent", "2")
                indent_val = None if indent == "Tab" else int(indent)
                
                # Keep response values available only in memory for the active
                # request flow.  The UI, visualizations and later exports must
                # never expose credential-like fields from auth or API replies.
                self._binary_response = base64.b64decode(binary_base64, validate=True) if binary_base64 is not None else None
                self._binary_response_name = safe_download_filename({}, str(binary_name), str(binary_type))
                self._binary_response_type = str(binary_type)
                display_data = privacy_safe(payload, settings, "display")
                if self._binary_response is not None:
                    display_data = {
                        "file_name": self._binary_response_name,
                        "content_type": self._binary_response_type,
                        "size_bytes": len(self._binary_response),
                    }
                    self.response_body.setPlainText(self.tr("Binary response ready to save.\nFile: {name}\nType: {type}\nSize: {size}").format(
                        name=self._binary_response_name, type=self._binary_response_type, size=size_str,
                    ))
                elif raw_text is not None:
                    display_data = privacy_safe(raw_text, settings, "display")
                    self.response_body.setPlainText(str(display_data))
                elif self.pretty_print_enabled:
                    self.response_body.setPlainText(json.dumps(display_data, indent=indent_val))
                else:
                    self.response_body.setPlainText(json.dumps(display_data, separators=(',', ':')))
                pending_exchange = getattr(self, "_pending_request", None) or {}
                safe_request = redact_sensitive({
                    key: pending_exchange.get(key)
                    for key in ("method", "url", "headers", "body", "body_mode", "pagination")
                    if key in pending_exchange
                })
                if isinstance(safe_request, dict) and safe_request.get("url"):
                    safe_request["url"] = redact_url(str(safe_request["url"]))
                self._last_response_exchange = redact_sensitive({
                    "schema": RESPONSE_EXCHANGE_SCHEMA,
                    "app_version": __version__,
                    "request": safe_request,
                    "response": {
                        "status": status_code, "reason": reason, "duration_ms": duration_ms,
                        "size_bytes": resp_size, "retry_count": retry_count,
                        "headers": redact_sensitive(response_headers), "body": redact_sensitive(payload),
                    },
                })
                self._show_ai_visualization(display_data)
                self._render_response_visualization(display_data)
                if self.graphql_mode.isChecked() and isinstance(payload, dict):
                    self._show_graphql_output(display_data)
                    if getattr(self, "_graphql_introspection_pending", False):
                        self._save_graphql_introspection(self.url_input.text().strip(), display_data)
                        self._populate_graphql_schema_tree(display_data)
                        self._graphql_introspection_pending = False
                pagination_info = payload.get("_pagination") if isinstance(payload, dict) and isinstance(payload.get("_pagination"), dict) else None
                if pagination_info:
                    if pagination_info.get("complete"):
                        self.status_bar.showMessage(
                            self.tr("Pagination complete: {pages} page(s), {records} record(s)").format(
                                pages=pagination_info.get("pages_fetched", 0), records=pagination_info.get("records_fetched", 0),
                            )
                        )
                    else:
                        self.response_info.setText(self.response_info.text() + f" · <span style='color: #e65100; font-weight: bold;'>{self.tr('Partial pagination result')}</span>")
                        self.status_bar.showMessage(
                            self.tr("Pagination stopped before completion: {pages} page(s), {records} record(s)").format(
                                pages=pagination_info.get("pages_fetched", 0), records=pagination_info.get("records_fetched", 0),
                            )
                        )
                else:
                    self.status_bar.showMessage(self.tr("Request successful") + f" ({duration_ms}ms · {size_str})")
                
                # Check for session token in response
                api_type = self._current_api_type()
                pending = getattr(self, "_pending_request", None) or {}
                auth_response = is_authentication_request(api_type, pending.get("url", ""), pending.get("method", ""))
                if isinstance(payload, dict) and auth_response:
                    zia_cookie = response_cookie(response_headers, "JSESSIONID") if api_type == "ZIA" else ""
                    if zia_cookie or "authCookie" in payload:
                        self.zia_session = zia_cookie or payload["authCookie"]
                        self.status_bar.showMessage(self.tr("ZIA authenticated successfully"))
                        self._log_output("ZIA session established", "success")
                        self._update_auth_indicators()
                        self._clear_auth_request_material()
                    elif "access_token" in payload or "token" in payload or "jwtToken" in payload:
                        token = payload.get("access_token") or payload.get("token") or payload.get("jwtToken")
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
                        self._clear_auth_request_material()
                
                # Log success
                self._log_output(f"Response: {duration_ms}ms", "success")
            else:
                self._binary_response = None
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
                pending_exchange = getattr(self, "_pending_request", None) or {}
                safe_request = redact_sensitive({
                    key: pending_exchange.get(key)
                    for key in ("method", "url", "headers", "body", "body_mode", "pagination")
                    if key in pending_exchange
                })
                if isinstance(safe_request, dict) and safe_request.get("url"):
                    safe_request["url"] = redact_url(str(safe_request["url"]))
                self._last_response_exchange = redact_sensitive({
                    "schema": RESPONSE_EXCHANGE_SCHEMA,
                    "app_version": __version__,
                    "request": safe_request,
                    "response": {
                        "status": status, "reason": self.tr("Request failed"), "duration_ms": duration_ms,
                        "size_bytes": len(str(safe_error).encode("utf-8")), "headers": safe_response_headers, "body": safe_error,
                    },
                })
                self._show_ai_visualization(safe_error)
                self._render_response_visualization(safe_error)
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
                    body_mode=self._pending_request.get("body_mode", "json"),
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
        dialog = HistoryDialog(self.request_history, self, active_environment_profile(QSettings("Zscaler", "APIClient")))
        dialog.request_selected.connect(self._load_from_history)
        dialog.exec()
        self._save_history()

    def _favorites_key(self) -> str:
        return _profile_data_key(active_environment_profile(QSettings("Zscaler", "APIClient"))["id"], "favorites")

    def _favorites(self) -> list[dict[str, str]]:
        try:
            data = json.loads(str(QSettings("Zscaler", "APIClient").value(self._favorites_key(), "[]")))
            return [item for item in data if isinstance(item, dict)]
        except (TypeError, ValueError):
            return []

    def _save_favorites(self, items: list[dict[str, str]]):
        QSettings("Zscaler", "APIClient").setValue(self._favorites_key(), json.dumps(items[:50], ensure_ascii=False))

    def _manage_favorites(self):
        dialog = QDialog(self); dialog.setWindowTitle(self.tr("Favorites")); dialog.resize(720, 380)
        layout = QVBoxLayout(dialog)
        layout.addWidget(QLabel(self.tr("Favorites are local to the active environment and never include credentials or request bodies.")))
        table = QTableWidget(0, 4); table.setHorizontalHeaderLabels([self.tr("Name"), self.tr("Product"), self.tr("Method"), self.tr("URL")]); table.horizontalHeader().setStretchLastSection(True); table.setSelectionBehavior(QTableWidget.SelectionBehavior.SelectRows); table.setEditTriggers(QTableWidget.EditTrigger.NoEditTriggers); layout.addWidget(table, 1)
        items = self._favorites()
        def refresh():
            table.setRowCount(len(items))
            for row, item in enumerate(items):
                for col, key in enumerate(("name", "api", "method", "url")):
                    table.setItem(row, col, QTableWidgetItem(str(item.get(key, ""))))
        def add_current():
            name, accepted = QInputDialog.getText(dialog, self.tr("Save favorite"), self.tr("Favorite name:"), text=self.url_input.text().strip() or self.tr("New request"))
            if accepted and name.strip() and self.url_input.text().strip():
                items.append({"name": name.strip(), "api": self._current_api_type(), "method": self.method_combo.currentText().replace("● ", ""), "url": self.url_input.text().strip()}); self._save_favorites(items); refresh()
        def load_selected():
            row = table.currentRow()
            if 0 <= row < len(items):
                item = items[row]; self.api_type.setCurrentText(item.get("api", self._current_api_type())); self.method_combo.setCurrentText("● " + item.get("method", "GET")); self.url_input.setText(item.get("url", "")); dialog.accept()
        def remove_selected():
            row = table.currentRow()
            if 0 <= row < len(items): items.pop(row); self._save_favorites(items); refresh()
        actions = QHBoxLayout(); add = QPushButton(self.tr("Save current request")); add.clicked.connect(add_current); load = QPushButton(self.tr("Load selected")); load.clicked.connect(load_selected); remove = QPushButton(self.tr("Remove favorite")); remove.clicked.connect(remove_selected); close = QPushButton(self.tr("Close")); close.clicked.connect(dialog.accept)
        for button in (add, load, remove): actions.addWidget(button)
        actions.addStretch(); actions.addWidget(close); layout.addLayout(actions); refresh(); dialog.exec()

    def _show_operations_inbox(self):
        dialog = QDialog(self); dialog.setWindowTitle(self.tr("Operations inbox")); dialog.resize(820, 460)
        layout = QVBoxLayout(dialog); layout.addWidget(QLabel(self.tr("Local items requiring attention. This inbox is scoped to the active environment and never sends changes.")))
        table = QTableWidget(0, 3); table.setHorizontalHeaderLabels([self.tr("Priority"), self.tr("Source"), self.tr("Details")]); table.horizontalHeader().setStretchLastSection(True); table.setEditTriggers(QTableWidget.EditTrigger.NoEditTriggers); layout.addWidget(table, 1)
        profile = active_environment_profile(QSettings("Zscaler", "APIClient")); scoped = [item for item in self.request_history if str(item.get("environment_id") or "default") == profile["id"]]
        try: alerts = operational_alerts(scoped, AuditTrail(QSettings("Zscaler", "APIClient")).verify(), max(1, int(QSettings("Zscaler", "APIClient").value("monitoring/error_threshold", "10")))).get("alerts", [])
        except (TypeError, ValueError): alerts = []
        rows = [(str(item.get("severity", "medium")).title(), self.tr("Alert"), str(item.get("code", ""))) for item in alerts]
        rows += [(self.tr("High"), self.tr("Failed request"), f"{item.get('method', '')} {item.get('url', '')}") for item in scoped[-20:] if int(item.get("status", 0) or 0) >= 400]
        rows += [(self.tr("Info"), self.tr("Scheduled report"), str(item.get("name", ""))) for item in self._report_schedules() if item.get("environment_id", profile["id"]) == profile["id"] and not item.get("enabled", True)]
        table.setRowCount(len(rows))
        for row, values in enumerate(rows):
            for column, value in enumerate(values): table.setItem(row, column, QTableWidgetItem(value))
        actions = QHBoxLayout(); alerts_btn = QPushButton(self.tr("Open Alerts")); alerts_btn.clicked.connect(lambda: (dialog.accept(), self._show_operations_named("alert_tab_index"))); history_btn = QPushButton(self.tr("Open Recent")); history_btn.clicked.connect(lambda: (dialog.accept(), self._show_history())); close = QPushButton(self.tr("Close")); close.clicked.connect(dialog.accept); actions.addWidget(alerts_btn); actions.addWidget(history_btn); actions.addStretch(); actions.addWidget(close); layout.addLayout(actions); dialog.exec()
    
    def _load_from_history(self, entry: Dict):
        """Load a request from history."""
        active = active_environment_profile(QSettings("Zscaler", "APIClient"))
        if str(entry.get("environment_id") or "default") != active["id"]:
            QMessageBox.warning(
                self, self.tr("Request History"),
                self.tr("This request belongs to another environment. Activate that environment profile before loading it."),
            )
            return
        self.method_combo.setCurrentText(f"● {entry.get('method', 'GET')}")
        self.url_input.setText(entry.get("url", ""))
        body_mode = str(entry.get("body_mode") or "json")
        self._set_body_mode(body_mode)
        self.multipart_file_path.clear()
        body = entry.get("body")
        if body_mode == "multipart" and isinstance(body, dict) and isinstance(body.get("multipart"), dict):
            multipart = body["multipart"]
            self.multipart_file_field.setText(str(multipart.get("file_field") or "file"))
            self.body_input.setPlainText(json.dumps(multipart.get("fields") or {}, indent=2, ensure_ascii=False))
            self.status_bar.showMessage(self.tr("Multipart request loaded. Select the local file again before sending."))
        elif body:
            self.body_input.setPlainText(body if isinstance(body, str) else json.dumps(body, indent=2))
            self.request_tabs.setCurrentIndex(2)
        graphql_body = body if isinstance(body, dict) else {}
        is_graphql = isinstance(graphql_body.get("query"), str)
        self.graphql_mode.setChecked(is_graphql)
        self.graphql_variables_table.setRowCount(0)
        if is_graphql:
            self._refresh_graphql_variables()
        
        # Load headers
        self.headers_table.clearContents()
        for row, (key, value) in enumerate(entry.get("headers", {}).items()):
            if row < self.headers_table.rowCount():
                self.headers_table.setItem(row, 0, QTableWidgetItem(key))
                self.headers_table.setItem(row, 1, QTableWidgetItem(value))
        
        if body_mode == "multipart":
            self.status_bar.showMessage(self.tr("Multipart request loaded. Select the local file again before sending."))
        else:
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
                        status: int = None, duration_ms: int = None, response_headers: Dict | None = None,
                        body_mode: str = "json"):
        """Add a request to history."""
        from datetime import datetime
        
        entry = {
            "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
            "method": method,
            "url": redact_url(url),
            "headers": redact_sensitive(headers),
            "response_headers": redact_sensitive(response_headers or {}),
            "body": redact_sensitive(body),
            "body_mode": body_mode if body_mode in {"json", "raw", "form", "multipart"} else "json",
            "status": status,
            "duration_ms": duration_ms,
        }
        profile = active_environment_profile(QSettings("Zscaler", "APIClient"))
        entry["environment_id"] = profile["id"]
        entry["environment"] = profile["name"]
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
        if self._binary_response is not None:
            QMessageBox.information(self, self.tr("Binary response"), self.tr("Binary response content is not copied to the clipboard. Use Export to save the original file."))
            return
        raw = self.response_body.toPlainText()
        if raw:
            try:
                text = json.dumps(privacy_safe(json.loads(raw), QSettings("Zscaler", "APIClient"), "clipboard"), indent=2)
            except json.JSONDecodeError:
                text = str(privacy_safe(raw, QSettings("Zscaler", "APIClient"), "clipboard"))
            QApplication.clipboard().setText(text)
            self.status_bar.showMessage(self.tr("Masked response copied to clipboard"))
        else:
            QMessageBox.warning(self, self.tr("Warning"), self.tr("No response to copy"))
    
    def _clear_request(self):
        """Clear request input and every response-derived view as one unit."""
        self.url_input.clear()
        self.body_input.clear()
        self._set_body_mode("json")
        self.multipart_file_path.clear()
        self._binary_response = None
        self._last_response_exchange = None
        self.params_table.clearContents()
        self.headers_table.clearContents()
        self.variables_table.setRowCount(0)
        self.graphql_variables_table.setRowCount(0)
        self.graphql_variables_status.setText(self.tr("No GraphQL variables extracted."))
        self._selected_endpoint_details = None
        self.paginate_request.setChecked(False)
        self.pagination_controls_widget.setEnabled(False)
        self.request_guide_table.setRowCount(0)
        self.request_guide_status.setText(self.tr("Select a documented endpoint to inspect its request contract."))
        self.graphql_mode.setChecked(False)
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
        self._set_body_mode("json")
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
        self.headers_table.setItem(0, 0, QTableWidgetItem("Content-Type"))
        self.headers_table.setItem(0, 1, QTableWidgetItem("application/x-www-form-urlencoded"))
        self.body_input.setPlainText(urllib.parse.urlencode({"client_id": client_id, "client_secret": client_secret}))
        self._set_body_mode("form")
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
    if "--run-scheduled-report" in sys.argv:
        try:
            index = sys.argv.index("--run-scheduled-report")
            schedule_id = sys.argv[index + 1]
        except (ValueError, IndexError):
            raise SystemExit(2)
        if not re.fullmatch(r"[A-Za-z0-9_-]{1,64}", schedule_id):
            raise SystemExit(2)
        settings = QSettings("Zscaler", "APIClient")
        generated = run_report_schedules(settings, persisted_request_history(), selected_id=schedule_id)
        raise SystemExit(0 if generated else 1)

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
    # Resolve System default on every launch, including a bundled macOS app.
    # An explicit language selected in Settings remains an intentional override.
    lang = resolve_startup_language(settings.value("language", "system"))
    
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
    app.setLayoutDirection(language_layout_direction(app_lang))
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
