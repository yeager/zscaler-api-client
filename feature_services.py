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


def is_sensitive_name(value: Any) -> bool:
    """Recognise credential-like JSON keys, query parameters, and HTTP headers."""
    normalized = "".join(character for character in str(value).lower() if character.isalnum())
    return normalized in {"authorization", "proxyauthorization", "cookie", "setcookie", "password", "secret",
                          "token", "apikey", "clientsecret", "keysecret", "accesstoken", "refreshtoken"} or normalized.startswith(("xapikey", "xauthtoken"))


def safe_url(value: Any) -> str:
    """Mask sensitive URL query values before including an endpoint in evidence."""
    parts = urllib.parse.urlsplit(str(value or ""))
    query = urllib.parse.parse_qsl(parts.query, keep_blank_values=True)
    safe_query = urllib.parse.urlencode([(key, "***" if is_sensitive_name(key) else item) for key, item in query])
    return urllib.parse.urlunsplit((parts.scheme, parts.netloc, parts.path, safe_query, parts.fragment))


def mask(value: Any) -> Any:
    """Return a deep copy suitable for local history, exports and support files."""
    if isinstance(value, dict):
        return {k: "***" if is_sensitive_name(k) else mask(v) for k, v in value.items()}
    if isinstance(value, list):
        return [mask(item) for item in value]
    return value


def canonical(value: Any) -> str:
    return json.dumps(value, sort_keys=True, ensure_ascii=False, separators=(",", ":"))


def policy_diff(before: Any, after: Any, path: str = "$") -> list[dict[str, Any]]:
    """Produce a compact structural diff usable for policy previews."""
    sensitive_value = is_sensitive_name(path.rsplit(".", 1)[-1])
    safe_before = "***" if sensitive_value else mask(before)
    safe_after = "***" if sensitive_value else mask(after)
    if type(before) is not type(after):
        return [{"path": path, "change": "changed", "before": safe_before, "after": safe_after}]
    if isinstance(before, dict):
        changes: list[dict[str, Any]] = []
        for key in sorted(set(before) | set(after)):
            child = f"{path}.{key}"
            if key not in before:
                changes.append({"path": child, "change": "added", "before": None, "after": "***" if is_sensitive_name(key) else mask(after[key])})
            elif key not in after:
                changes.append({"path": child, "change": "removed", "before": "***" if is_sensitive_name(key) else mask(before[key]), "after": None})
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
        matched = all(str(context.get(key, "")).lower() == str(expected).lower() for key, expected in conditions.items())
        trace_item = {"position": position, "name": rule.get("name", f"Rule {position}"),
                      "action": rule.get("action", "allow"), "conditions": mask(conditions), "matched": matched}
        if matched:
            return {"matched": True, "position": position, "name": rule.get("name", f"Rule {position}"),
                    "action": rule.get("action", "allow"), "rule": mask(rule), "trace": [trace_item]}
    return {"matched": False, "position": None, "name": None, "action": "no-match", "trace": []}


def simulate_policy_trace(rules: Iterable[dict[str, Any]], context: dict[str, Any]) -> dict[str, Any]:
    """Return a transparent rule-by-rule local decision path for the simulator."""
    rule_list = list(rules)
    trace: list[dict[str, Any]] = []
    for position, rule in enumerate(rule_list, 1):
        conditions = rule.get("conditions", {}) if isinstance(rule, dict) else {}
        matched = isinstance(rule, dict) and all(str(context.get(key, "")).lower() == str(expected).lower() for key, expected in conditions.items())
        trace.append({"position": position, "name": rule.get("name", f"Rule {position}") if isinstance(rule, dict) else f"Rule {position}",
                      "action": rule.get("action", "allow") if isinstance(rule, dict) else "unknown",
                      "conditions": mask(conditions), "matched": matched})
        if matched:
            break
    result = simulate_policy(rule_list, context)
    result["trace"] = trace
    return result


def policy_overview(policy: Any) -> dict[str, Any]:
    """Summarise a policy locally for rule visualisation and review."""
    rules = policy if isinstance(policy, list) else policy.get("rules", []) if isinstance(policy, dict) else []
    rows, actions = [], {}
    for position, rule in enumerate(rules, 1):
        if not isinstance(rule, dict):
            continue
        action = str(rule.get("action", "unspecified")).lower() or "unspecified"
        actions[action] = actions.get(action, 0) + 1
        conditions = rule.get("conditions", {})
        rows.append({"position": position, "name": str(rule.get("name", f"Rule {position}")), "action": action,
                     "conditions": len(conditions) if isinstance(conditions, dict) else 0,
                     "enabled": rule.get("enabled", True) is not False})
    return {"rules": rows, "actions": actions, "total": len(rows),
            "enabled": sum(1 for row in rows if row["enabled"]), "conditional": sum(1 for row in rows if row["conditions"])}


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
    seen_names: set[str] = set()
    for index, rule in enumerate(rules, 1):
        if not isinstance(rule, dict):
            continue
        action = str(rule.get("action", "")).lower()
        conditions = rule.get("conditions", {})
        if action in {"allow", "permit"} and not conditions:
            findings.append({"severity": "high", "rule": str(rule.get("name", index)), "message": "Allow rule has no conditions"})
        if rule.get("enabled") is False:
            findings.append({"severity": "info", "rule": str(rule.get("name", index)), "message": "Rule is disabled"})
        name = str(rule.get("name", "")).strip()
        if name and name.lower() in seen_names:
            findings.append({"severity": "medium", "rule": name, "message": "Rule name is duplicated"})
        seen_names.add(name.lower())
        if not action:
            findings.append({"severity": "medium", "rule": str(rule.get("name", index)), "message": "Rule action is unspecified"})
    return findings


def security_posture(history: Iterable[dict[str, Any]], audit_valid: bool) -> dict[str, Any]:
    """Summarize local request history into transparent posture findings.

    This deliberately relies on the client-side, already-redacted history.  It
    is an operational signal for review, not a claim about tenant security.
    """
    events = list(history)
    failed = [item for item in events if not str(item.get("status", "")).startswith("2")]
    writes = [item for item in events if str(item.get("method", "")).upper() in {"POST", "PUT", "PATCH", "DELETE"}]
    slow = [item for item in events if int(item.get("duration_ms") or 0) >= 10_000]
    findings: list[dict[str, Any]] = []
    if not audit_valid:
        findings.append({"severity": "critical", "code": "audit_integrity", "count": 0})
    if len(failed) >= 3:
        findings.append({"severity": "high", "code": "repeated_failures", "count": len(failed)})
    elif failed:
        findings.append({"severity": "medium", "code": "api_failures", "count": len(failed)})
    if len(writes) >= 5:
        findings.append({"severity": "medium", "code": "change_burst", "count": len(writes)})
    if slow:
        findings.append({"severity": "low", "code": "slow_responses", "count": len(slow)})
    if not events:
        findings.append({"severity": "info", "code": "no_telemetry", "count": 0})
    penalties = min(45, len(failed) * 10) + min(20, max(0, len(writes) - 4) * 4) + min(10, len(slow) * 2)
    if not audit_valid:
        penalties += 25
    score = max(0, 100 - penalties)
    severity_counts = {level: sum(1 for finding in findings if finding["severity"] == level)
                       for level in ("critical", "high", "medium", "low", "info")}
    return {
        "score": score,
        "findings": findings,
        "severity_counts": severity_counts,
        "metrics": {"requests": len(events), "failed": len(failed), "writes": len(writes), "slow": len(slow)},
    }


def operational_alerts(history: Iterable[dict[str, Any]], audit_valid: bool, error_threshold: int = 10) -> dict[str, Any]:
    """Create transparent, local-only alerts from already-redacted activity.

    The threshold is evaluated against the retained local request history.  It
    deliberately does not claim real-time tenant monitoring or send anything
    to a webhook/SIEM.
    """
    events = list(history)
    threshold = max(1, int(error_threshold))
    failures = [item for item in events if not str(item.get("status", "")).startswith("2")]
    throttled = [item for item in events if str(item.get("status", "")) == "429"]
    slow = [item for item in events if int(item.get("duration_ms") or 0) >= 10_000]
    exhausted = []
    for item in events:
        headers = item.get("response_headers", {})
        if not isinstance(headers, dict):
            continue
        normalized = {"".join(char for char in str(key).lower() if char.isalnum()): value for key, value in headers.items()}
        remaining = normalized.get("xratelimitremaining") or normalized.get("ratelimitremaining")
        try:
            if remaining is not None and int(str(remaining)) <= 0:
                exhausted.append(item)
        except ValueError:
            continue
    alerts: list[dict[str, Any]] = []
    if not audit_valid:
        alerts.append({"severity": "critical", "code": "audit_integrity", "count": 1,
                       "evidence": {"audit_integrity": "needs_review"}})
    if len(failures) >= threshold:
        alerts.append({"severity": "high", "code": "error_threshold", "count": len(failures),
                       "evidence": {"threshold": threshold, "recent_endpoints": [safe_url(item.get("url", "")) for item in failures[-5:]]}})
    if throttled:
        alerts.append({"severity": "medium", "code": "rate_limited", "count": len(throttled),
                       "evidence": {"recent_endpoints": [safe_url(item.get("url", "")) for item in throttled[-5:]]}})
    if exhausted:
        alerts.append({"severity": "medium", "code": "rate_limit_exhausted", "count": len(exhausted),
                       "evidence": {"recent_endpoints": [safe_url(item.get("url", "")) for item in exhausted[-5:]], "signal": "remaining=0"}})
    if len(slow) >= 3:
        alerts.append({"severity": "low", "code": "slow_requests", "count": len(slow),
                       "evidence": {"recent_endpoints": [safe_url(item.get("url", "")) for item in slow[-5:]]}})
    severity_rank = {"critical": 0, "high": 1, "medium": 2, "low": 3}
    alerts.sort(key=lambda alert: severity_rank[alert["severity"]])
    return {"alerts": alerts, "threshold": threshold, "requests": len(events), "failed": len(failures)}


def request_latency_trend(history: Iterable[dict[str, Any]], limit: int = 12) -> list[tuple[str, float]]:
    """Return a compact local latency series for dashboard visualization."""
    events = list(history)[-max(1, limit):]
    trend: list[tuple[str, float]] = []
    for index, event in enumerate(events, 1):
        timestamp = str(event.get("timestamp", ""))
        label = timestamp[-8:] if len(timestamp) >= 8 else str(index)
        try:
            duration = max(0.0, float(event.get("duration_ms") or 0))
        except (TypeError, ValueError):
            duration = 0.0
        trend.append((label, duration))
    return trend


def incident_evidence(history: Iterable[dict[str, Any]], audit_events: Iterable[dict[str, Any]]) -> dict[str, Any]:
    """Build a portable, redacted local incident timeline for human review."""
    timeline: list[dict[str, Any]] = []
    for item in history:
        status = str(item.get("status", ""))
        severity = "high" if status == "0" or status.startswith("5") else "medium" if status.startswith("4") else "info"
        timeline.append({
            "time": item.get("timestamp", ""), "source": "request", "severity": severity,
            "summary": f"{item.get('method', 'GET')} {safe_url(item.get('url', ''))} · {status or 'unknown'}",
            "evidence": mask({key: item.get(key) for key in ("status", "duration_ms", "headers", "response_headers", "body")}),
        })
    for item in audit_events:
        timeline.append({
            "time": item.get("timestamp", ""), "source": "audit", "severity": "info",
            "summary": str(item.get("action", "audit event")), "evidence": mask(item.get("details", {})),
        })
    timeline.sort(key=lambda item: str(item["time"]), reverse=True)
    return {
        "timeline": timeline[:200],
        "summary": {
            "events": len(timeline),
            "high": sum(1 for item in timeline if item["severity"] == "high"),
            "medium": sum(1 for item in timeline if item["severity"] == "medium"),
        },
    }


def change_control_plan(before: Any, after: Any) -> dict[str, Any]:
    """Prepare a local policy change review and rollback artifact; never apply it."""
    changes = policy_diff(before, after)
    findings = compliance_findings(after)
    severity_rank = {"info": 0, "low": 1, "medium": 2, "high": 3, "critical": 4}
    highest = max((severity_rank.get(item.get("severity", "info"), 0) for item in findings), default=0)
    risk = "high" if highest >= 3 or len(changes) >= 20 else "medium" if findings or len(changes) >= 5 else "low"
    counts = {kind: sum(1 for item in changes if item["change"] == kind) for kind in ("added", "removed", "changed")}
    return {
        "risk": risk,
        "changes": changes,
        "change_counts": counts,
        "compliance_findings": findings,
        "proposed_policy": mask(after),
        "rollback_policy": mask(before),
    }


def security_report_data(kind: str, history: Iterable[dict[str, Any]], audit_events: Iterable[dict[str, Any]], audit_valid: bool) -> dict[str, Any]:
    """Create local, redacted facts for CISO, SOC, or operations reports."""
    if kind not in {"ciso", "soc", "operations"}:
        raise ValueError("Unknown report type")
    history_list, audit_list = list(history), list(audit_events)
    posture = security_posture(history_list, audit_valid)
    evidence = incident_evidence(history_list, audit_list)
    return {
        "kind": kind, "posture": posture, "incident_summary": evidence["summary"],
        "audit_valid": audit_valid, "audit_events": len(audit_list),
        "recent_events": evidence["timeline"][:10],
    }


def validate_request_chain(steps: Any, maximum: int = 20) -> dict[str, Any]:
    """Validate an explicit API chain before the UI considers execution."""
    if not isinstance(steps, list) or not steps:
        return {"valid": False, "errors": ["Chain must contain at least one step"], "steps": []}
    if len(steps) > maximum:
        return {"valid": False, "errors": [f"Chain is limited to {maximum} steps"], "steps": []}
    valid_steps, errors = [], []
    for index, raw in enumerate(steps, 1):
        if not isinstance(raw, dict):
            errors.append(f"Step {index} must be an object")
            continue
        method, url = str(raw.get("method", "GET")).upper(), str(raw.get("url", "")).strip()
        if method not in {"GET", "POST", "PUT", "PATCH", "DELETE"}:
            errors.append(f"Step {index} has an unsupported method")
        parsed = urllib.parse.urlsplit(url)
        if not url or (not url.startswith("/") and parsed.scheme != "https"):
            errors.append(f"Step {index} must use an HTTPS URL or a relative API path")
        body = raw.get("body")
        if body is not None and not isinstance(body, (dict, list, str)):
            errors.append(f"Step {index} body must be JSON data or text")
        if not errors or not any(error.startswith(f"Step {index} ") for error in errors):
            # Keep the original body for the explicitly approved request.  Callers
            # must use mask() when previewing, persisting or auditing this plan.
            valid_steps.append({"method": method, "url": url, "body": body})
    return {"valid": not errors, "errors": errors, "steps": valid_steps}
