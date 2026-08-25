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
import zipfile
from dataclasses import dataclass, asdict
from typing import Any, Iterable


SENSITIVE_NAMES = {"authorization", "cookie", "password", "secret", "token", "api_key", "apikey"}


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
