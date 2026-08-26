#!/usr/bin/env python3
# SPDX-License-Identifier: GPL-3.0-or-later
"""Local, privacy-preserving services used by the ZS API Client workspace.

These services deliberately contain no credentials and make no network calls.
They make operational features testable and keep all persistent state in the
application settings store controlled by the user.
"""

from __future__ import annotations

import csv
import hashlib
import io
import json
import time
import urllib.parse
import zipfile
from dataclasses import dataclass, asdict
from typing import Any, Iterable


SENSITIVE_NAMES = {
    "authorization", "cookie", "password", "secret", "token", "api_key", "apikey",
    "client_secret", "key_secret", "access_token", "refresh_token",
}


def mask(value: Any) -> Any:
    """Return a deep copy suitable for local history, exports and support files."""
    if isinstance(value, dict):
        return {k: "***" if k.lower() in SENSITIVE_NAMES else mask(v) for k, v in value.items()}
    if isinstance(value, list):
        return [mask(item) for item in value]
    return value


def canonical(value: Any) -> str:
    return json.dumps(value, sort_keys=True, ensure_ascii=False, separators=(",", ":"))


def policy_diff(before: Any, after: Any, path: str = "$") -> list[dict[str, Any]]:
    """Produce a compact structural diff usable for policy previews."""
    sensitive_value = path.rsplit(".", 1)[-1].lower() in SENSITIVE_NAMES
    safe_before = "***" if sensitive_value else mask(before)
    safe_after = "***" if sensitive_value else mask(after)
    if type(before) is not type(after):
        return [{"path": path, "change": "changed", "before": safe_before, "after": safe_after}]
    if isinstance(before, dict):
        changes: list[dict[str, Any]] = []
        for key in sorted(set(before) | set(after)):
            child = f"{path}.{key}"
            if key not in before:
                changes.append({"path": child, "change": "added", "before": None, "after": "***" if key.lower() in SENSITIVE_NAMES else mask(after[key])})
            elif key not in after:
                changes.append({"path": child, "change": "removed", "before": "***" if key.lower() in SENSITIVE_NAMES else mask(before[key]), "after": None})
            else:
                changes.extend(policy_diff(before[key], after[key], child))
        return changes
    if isinstance(before, list):
        old, new = {canonical(mask(v)) for v in before}, {canonical(mask(v)) for v in after}
        return ([{"path": path, "change": "removed", "before": json.loads(v), "after": None} for v in sorted(old - new)] +
                [{"path": path, "change": "added", "before": None, "after": json.loads(v)} for v in sorted(new - old)])
    return [] if before == after else [{"path": path, "change": "changed", "before": safe_before, "after": safe_after}]


def simulate_policy(rules: Iterable[dict[str, Any]], context: dict[str, Any]) -> dict[str, Any]:
    """Evaluate simple local policy conditions without changing any tenant state."""
    for position, rule in enumerate(rules, 1):
        conditions = rule.get("conditions", {})
        if all(str(context.get(key, "")).lower() == str(expected).lower() for key, expected in conditions.items()):
            return {"matched": True, "position": position, "name": rule.get("name", f"Rule {position}"),
                    "action": rule.get("action", "allow"), "rule": mask(rule)}
    return {"matched": False, "position": None, "name": None, "action": "no-match"}


def validate_bulk_csv(payload: str, required: Iterable[str]) -> dict[str, Any]:
    reader = csv.DictReader(io.StringIO(payload))
    headers = reader.fieldnames or []
    missing = [name for name in required if name not in headers]
    rows = list(reader)
    errors = []
    for index, row in enumerate(rows, 2):
        blank = [name for name in required if not str(row.get(name, "")).strip()]
        if blank:
            errors.append({"row": index, "missing": blank})
    return {"headers": headers, "rows": len(rows), "missing_headers": missing, "errors": errors,
            "valid": not missing and not errors}


BATCH_OPERATIONS: dict[str, dict[str, Any]] = {
    "zia_create_users": {"api": "ZIA", "method": "POST", "path": "/api/v1/users", "required": ("name", "email")},
    "zia_update_users": {"api": "ZIA", "method": "PUT", "path": "/api/v1/users/{id}", "required": ("id",), "require_body": True},
    "zia_delete_users": {"api": "ZIA", "method": "DELETE", "path": "/api/v1/users/{id}", "required": ("id",)},
    "zia_url_lookup": {"api": "ZIA", "method": "GET", "path": "/api/v1/urlLookup", "required": ("url",)},
    "zia_create_locations": {"api": "ZIA", "method": "POST", "path": "/api/v1/locations", "required": ("name",)},
    "zpa_create_app_segments": {"api": "ZPA", "method": "POST", "path": "/mgmtconfig/v1/admin/customers/{customerId}/applicationSegments", "required": ("customerId", "name")},
}


def build_batch_plan(operation: str, rows: Iterable[dict[str, Any]]) -> dict[str, Any]:
    """Build a validated, credential-free batch request plan without sending it."""
    if operation not in BATCH_OPERATIONS:
        raise ValueError("Unknown batch operation")
    spec = BATCH_OPERATIONS[operation]
    plan, errors = [], []
    for number, raw_row in enumerate(rows, 2):
        row = {str(key): str(value).strip() for key, value in raw_row.items() if key is not None}
        missing = [field for field in spec["required"] if not row.get(field)]
        if missing:
            errors.append({"row": number, "missing": missing})
            continue
        path = spec["path"]
        for field in ("id", "customerId"):
            path = path.replace("{" + field + "}", urllib.parse.quote(row.get(field, ""), safe=""))
        body = {key: value for key, value in row.items() if key not in {"id", "customerId", "url"}}
        if spec.get("require_body") and not body:
            errors.append({"row": number, "missing": ["update data"]})
            continue
        if operation == "zia_url_lookup":
            path += "?" + urllib.parse.urlencode({"url": row["url"]})
        plan.append({"row": number, "method": spec["method"], "path": path,
                     "body": body or None})
    return {"api": spec["api"], "operation": operation, "requests": plan,
            "errors": errors, "valid": bool(plan) and not errors}


@dataclass
class AuditEvent:
    timestamp: int
    action: str
    details: dict[str, Any]
    previous_hash: str = ""
    digest: str = ""


class AuditTrail:
    """Append-only, hash-linked user audit trail stored in QSettings-compatible storage."""
    def __init__(self, settings: Any, key: str = "audit/events"):
        self.settings, self.key = settings, key

    def events(self) -> list[dict[str, Any]]:
        raw = self.settings.value(self.key, "[]")
        try:
            return json.loads(raw) if isinstance(raw, str) else list(raw)
        except (TypeError, ValueError):
            return []

    def append(self, action: str, details: dict[str, Any] | None = None) -> dict[str, Any]:
        events = self.events()
        previous = events[-1].get("digest", "") if events else ""
        event = asdict(AuditEvent(int(time.time()), action, mask(details or {}), previous))
        event["digest"] = hashlib.sha256(canonical({k: v for k, v in event.items() if k != "digest"}).encode()).hexdigest()
        events.append(event)
        self.settings.setValue(self.key, canonical(events[-1000:]))
        return event

    def verify(self) -> bool:
        previous = ""
        for event in self.events():
            expected = hashlib.sha256(canonical({k: v for k, v in event.items() if k != "digest"}).encode()).hexdigest()
            if event.get("previous_hash") != previous or event.get("digest") != expected:
                return False
            previous = event["digest"]
        return True


def support_bundle(path: str, diagnostics: dict[str, Any], audit_events: list[dict[str, Any]]) -> None:
    """Create a portable redacted diagnostic bundle; never include credentials."""
    with zipfile.ZipFile(path, "w", zipfile.ZIP_DEFLATED) as archive:
        archive.writestr("diagnostics.json", json.dumps(mask(diagnostics), indent=2, ensure_ascii=False))
        archive.writestr("audit.json", json.dumps(mask(audit_events), indent=2, ensure_ascii=False))
        archive.writestr("README.txt", "ZS API Client support bundle. Credentials and sensitive fields are redacted.\n")


def policy_as_code(policy: Any, format_name: str = "json") -> str:
    """Export a redacted policy document for Git review; YAML is dependency-free."""
    safe = mask(policy)
    if format_name == "json":
        return json.dumps(safe, indent=2, ensure_ascii=False) + "\n"
    if format_name == "yaml":
        def emit(value: Any, indent: int = 0) -> list[str]:
            pad = "  " * indent
            if isinstance(value, dict):
                return sum(([f"{pad}{key}:"] + emit(item, indent + 1) for key, item in value.items()), [])
            if isinstance(value, list):
                return sum(([f"{pad}-"] + emit(item, indent + 1) for item in value), [])
            return [f"{pad}{json.dumps(value, ensure_ascii=False)}"]
        return "\n".join(emit(safe)) + "\n"
    raise ValueError("format_name must be json or yaml")


def compliance_findings(policy: Any) -> list[dict[str, str]]:
    """Small transparent baseline, suitable for local review rather than enforcement."""
    findings: list[dict[str, str]] = []
    rules = policy if isinstance(policy, list) else policy.get("rules", []) if isinstance(policy, dict) else []
    for index, rule in enumerate(rules, 1):
        if not isinstance(rule, dict):
            continue
        action = str(rule.get("action", "")).lower()
        conditions = rule.get("conditions", {})
        if action in {"allow", "permit"} and not conditions:
            findings.append({"severity": "high", "rule": str(rule.get("name", index)), "message": "Allow rule has no conditions"})
        if rule.get("enabled") is False:
            findings.append({"severity": "info", "rule": str(rule.get("name", index)), "message": "Rule is disabled"})
    return findings
