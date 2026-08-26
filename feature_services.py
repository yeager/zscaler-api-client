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
import hmac
import io
import ipaddress
import json
import re
import time
import urllib.parse
import zipfile
from collections import Counter, deque
from dataclasses import dataclass, asdict
from typing import Any, Iterable


SENSITIVE_NAMES = {
    "authorization", "cookie", "password", "secret", "token", "api_key", "apikey",
    "client_secret", "key_secret", "access_token", "refresh_token",
}
EMAIL_PATTERN = re.compile(r"(?<![\w.+-])([A-Z0-9._%+-]+)@([A-Z0-9.-]+\.[A-Z]{2,})(?![\w.-])", re.IGNORECASE)
IP_PATTERN = re.compile(r"(?<![\w:])(?:\d{1,3}\.){3}\d{1,3}(?![\w:])|(?<![\w:])(?:[0-9A-F]{1,4}:){2,7}[0-9A-F]{0,4}(?![\w:])", re.IGNORECASE)


def _identifier_token(kind: str, value: Any, salt: str) -> str:
    digest = hmac.new(str(salt).encode("utf-8"), str(value).casefold().encode("utf-8"), hashlib.sha256).hexdigest()[:16]
    return f"{kind}-{digest}"


def _obfuscated_ip(value: str, salt: str) -> str:
    try:
        address = ipaddress.ip_address(value)
    except ValueError:
        return value
    number = int(hmac.new(str(salt).encode(), str(address).encode(), hashlib.sha256).hexdigest()[:8], 16)
    if address.version == 4:
        number %= 131_072
        return f"198.{18 + number // 65_536}.{number // 256 % 256}.{number % 256}"
    return f"2001:db8::{1 + number % 65534:x}"


def obfuscate_identifiers(value: Any, salt: str, categories: dict[str, bool] | None = None, field: str = "") -> Any:
    """Create stable local pseudonyms without retaining a source-to-value map."""
    enabled = {"users": True, "addresses": True, "hosts": True, "tenants": True, "ids": True, "labels": True}
    enabled.update(categories or {})
    normalized = "".join(character for character in str(field).casefold() if character.isalnum())
    tenant_field = any(part in normalized for part in ("tenant", "customer", "organization", "environment"))
    user_field = normalized in {"user", "username", "email", "mail", "login", "upn", "userprincipalname", "displayname", "owner", "createdby", "modifiedby", "actor", "principal", "subject"} or normalized.endswith(("userid", "username", "useremail"))
    host_field = normalized in {"url", "uri", "host", "hostname", "domain", "fqdn", "endpoint", "cloud", "origin", "devicename", "computername", "machinename", "servername", "dnsname"} or normalized.endswith(("host", "hostname", "domain", "fqdn"))
    label_field = normalized in {"name", "label", "displaylabel", "policyname", "rulename", "applicationname", "appname", "groupname", "segmentname", "locationname", "department"}
    if isinstance(value, dict):
        return {key: obfuscate_identifiers(item, salt, enabled, str(key)) for key, item in value.items()}
    if isinstance(value, list):
        return [obfuscate_identifiers(item, salt, enabled, field) for item in value]
    if not isinstance(value, str):
        if tenant_field and value is not None:
            return _identifier_token("tenant", value, salt) if enabled["tenants"] else value
        if user_field and value is not None:
            return _identifier_token("user", value, salt) if enabled["users"] else value
        if label_field and value is not None:
            return _identifier_token("label", value, salt) if enabled["labels"] else value
        if enabled["ids"] and normalized.endswith(("id", "ids", "uuid", "uuids", "guid", "guids", "identifier", "identifiers")) and value is not None:
            return _identifier_token("id", value, salt)
        return value
    text = value
    stripped = text.strip()
    if stripped.startswith(("{", "[")):
        try:
            parsed = json.loads(stripped)
            return json.dumps(obfuscate_identifiers(parsed, salt, enabled, field), ensure_ascii=False)
        except (TypeError, ValueError):
            pass
    if tenant_field:
        return _identifier_token("tenant", text, salt) if enabled["tenants"] else text
    if user_field:
        return _identifier_token("user", text, salt) if enabled["users"] else text
    if label_field:
        return _identifier_token("label", text, salt) if enabled["labels"] else text
    if enabled["ids"] and (normalized.endswith(("id", "ids", "uuid", "uuids", "guid", "guids", "identifier", "identifiers")) or normalized in {"keyid", "resourcekey"}):
        return _identifier_token("id", text, salt)
    if host_field and enabled["hosts"]:
        parsed = urllib.parse.urlsplit(text)
        if parsed.scheme and parsed.hostname:
            try:
                port_number = parsed.port
            except ValueError:
                port_number = None
            port = f":{port_number}" if port_number else ""
            hostname = _identifier_token("host", parsed.hostname, salt) + ".invalid"
            path = "/".join(
                _identifier_token("id", segment, salt)
                if enabled["ids"] and (segment.isdigit() or re.fullmatch(r"[0-9a-fA-F-]{16,}", segment)) else segment
                for segment in parsed.path.split("/")
            )
            query = urllib.parse.urlencode([
                (key, obfuscate_identifiers(item, salt, enabled, key))
                for key, item in urllib.parse.parse_qsl(parsed.query, keep_blank_values=True)
            ], doseq=True)
            text = urllib.parse.urlunsplit((parsed.scheme, hostname + port, path, query, parsed.fragment))
        elif text:
            text = _identifier_token("host", text, salt) + ".invalid"
    if enabled["users"]:
        text = EMAIL_PATTERN.sub(lambda match: _identifier_token("user", match.group(0), salt) + "@redacted.invalid", text)
    if enabled["addresses"]:
        text = IP_PATTERN.sub(lambda match: _obfuscated_ip(match.group(0), salt), text)
    return text


def is_sensitive_name(value: Any) -> bool:
    """Recognise credential-like JSON keys, query parameters, and HTTP headers."""
    normalized = "".join(character for character in str(value).lower() if character.isalnum())
    return normalized in {"authorization", "proxyauthorization", "cookie", "setcookie", "password", "secret",
                          "token", "jwttoken", "authtoken", "authcookie", "sessionid", "jsessionid", "apikey",
                          "clientsecret", "keysecret", "accesstoken", "refreshtoken"} or normalized.startswith(("xapikey", "xauthtoken"))


def safe_url(value: Any) -> str:
    """Mask sensitive URL query values before including an endpoint in evidence."""
    parts = urllib.parse.urlsplit(str(value or ""))
    query = urllib.parse.parse_qsl(parts.query, keep_blank_values=True)
    safe_query = urllib.parse.urlencode([(key, "***" if is_sensitive_name(key) else item) for key, item in query], safe="*")
    hostname = parts.hostname or ""
    if ":" in hostname and not hostname.startswith("["):
        hostname = f"[{hostname}]"
    try:
        port = parts.port
    except ValueError:
        port = None
    netloc = hostname + (f":{port}" if port else "")
    return urllib.parse.urlunsplit((parts.scheme, netloc, parts.path, safe_query, "***" if parts.fragment else ""))


def environment_scope(records: Iterable[dict[str, Any]], environment_id: str | None) -> list[dict[str, Any]]:
    """Return records for one tenant; legacy unlabelled records belong to default."""
    items = [item for item in records if isinstance(item, dict)]
    if environment_id in {None, "", "*"}:
        return items
    wanted = str(environment_id)
    return [item for item in items if str(item.get("environment_id") or "default") == wanted]


def environment_scope_metadata(environment_id: str | None, environment_name: str = "") -> dict[str, str]:
    """Create stable, non-secret scope metadata for exports and integrations."""
    if environment_id in {None, "", "*"}:
        return {"environment_id": "*", "environment": environment_name or "All environments"}
    return {"environment_id": str(environment_id), "environment": environment_name or ("Default" if environment_id == "default" else "")}


def mask(value: Any) -> Any:
    """Return a deep copy suitable for local history, exports and support files."""
    if isinstance(value, dict):
        return {k: "***" if is_sensitive_name(k) else mask(v) for k, v in value.items()}
    if isinstance(value, list):
        return [mask(item) for item in value]
    if isinstance(value, str):
        stripped = value.strip()
        if stripped.startswith(("{", "[")):
            try:
                return json.dumps(mask(json.loads(stripped)), ensure_ascii=False)
            except (TypeError, ValueError):
                pass
        if re.match(r"^https?://", value.strip(), re.IGNORECASE):
            value = safe_url(value)
        return re.sub(
            r"(?i)(\b(?:authorization|proxy-?authorization|set-?cookie|cookie|password|(?:client_)?secret|(?:access|refresh)_token|token|jwt-?token|auth-?token|session-?id|j-?session-?id|x-?api-?key|api_?key)\s*[:=]\s*)(?:[\"'])?[^\r\n,;&}\]]+",
            r"\1***", value,
        )
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


DRIFT_IDENTITY_FIELDS = ("id", "uuid", "resourceId", "key", "name")
DRIFT_HIGH_IMPACT_FIELDS = frozenset({
    "action", "allow", "block", "conditions", "enabled", "enforcement", "permissions",
    "policy", "role", "roles", "status", "trust", "authentication", "authorization",
})


def response_drift(before: Any, after: Any, ignored_fields: Iterable[str] = (), maximum_changes: int = 5000) -> dict[str, Any]:
    """Compare masked API data structurally, matching record lists by stable identities."""
    ignored = {str(field).strip().casefold() for field in ignored_fields if str(field).strip()}
    limit = max(1, min(50_000, int(maximum_changes)))
    safe_before, safe_after = mask(before), mask(after)
    changes: list[dict[str, Any]] = []
    truncated = False

    def pointer(value: Any) -> str:
        return str(value).replace("~", "~0").replace("/", "~1")

    def impact(path: str, change: str) -> str:
        segments = {segment.split("=", 1)[0].casefold() for segment in re.split(r"[/\[\].]+", path) if segment}
        if change in {"changed", "removed"} and segments & DRIFT_HIGH_IMPACT_FIELDS:
            return "high"
        if change in {"added", "removed"}:
            return "medium"
        return "low"

    def add(path: str, change: str, old: Any, new: Any, identity: str = ""):
        nonlocal truncated
        if len(changes) >= limit:
            truncated = True
            return
        changes.append({"path": path, "change": change, "impact": impact(path, change),
                        "identity": identity, "before": old, "after": new})

    def identity_maps(old: list, new: list):
        combined = old + new
        if not combined or not all(isinstance(item, dict) for item in combined):
            return None
        for field in DRIFT_IDENTITY_FIELDS:
            if field.casefold() in ignored or is_sensitive_name(field):
                continue
            values = [item.get(field) for item in combined]
            if all(value is not None and not isinstance(value, (dict, list)) for value in values):
                old_map = {str(item[field]): item for item in old}
                new_map = {str(item[field]): item for item in new}
                if len(old_map) == len(old) and len(new_map) == len(new):
                    return field, old_map, new_map
        return None

    def visit(old: Any, new: Any, path: str):
        if truncated:
            return
        if type(old) is not type(new):
            add(path, "changed", old, new); return
        if isinstance(old, dict):
            for key in sorted(set(old) | set(new), key=str):
                if str(key).casefold() in ignored:
                    continue
                child = path + "/" + pointer(key)
                if key not in old:
                    add(child, "added", None, new[key])
                elif key not in new:
                    add(child, "removed", old[key], None)
                else:
                    visit(old[key], new[key], child)
            return
        if isinstance(old, list):
            maps = identity_maps(old, new)
            if maps:
                field, old_map, new_map = maps
                for value in sorted(set(old_map) | set(new_map)):
                    child = f"{path}[{field}={pointer(value)}]"
                    if value not in old_map:
                        add(child, "added", None, new_map[value], f"{field}={value}")
                    elif value not in new_map:
                        add(child, "removed", old_map[value], None, f"{field}={value}")
                    else:
                        visit(old_map[value], new_map[value], child)
                return
            old_values, new_values = Counter(canonical(value) for value in old), Counter(canonical(value) for value in new)
            for value in sorted(set(old_values) | set(new_values)):
                parsed = json.loads(value)
                for _ in range(max(0, old_values[value] - new_values[value])):
                    add(path + "/[]", "removed", parsed, None)
                for _ in range(max(0, new_values[value] - old_values[value])):
                    add(path + "/[]", "added", None, parsed)
            return
        if old != new:
            add(path, "changed", old, new)

    visit(safe_before, safe_after, "$")
    def comparison_scope(value: Any) -> Any:
        if isinstance(value, dict):
            return {key: comparison_scope(item) for key, item in value.items() if str(key).casefold() not in ignored}
        if isinstance(value, list):
            scoped_items = [comparison_scope(item) for item in value]
            return sorted(scoped_items, key=canonical)
        return value
    scoped_before, scoped_after = comparison_scope(safe_before), comparison_scope(safe_after)
    summary = {kind: sum(1 for item in changes if item["change"] == kind) for kind in ("added", "removed", "changed")}
    impacts = {level: sum(1 for item in changes if item["impact"] == level) for level in ("high", "medium", "low")}
    return {
        "unchanged": not changes and not truncated, "summary": summary, "impacts": impacts,
        "changes": changes, "truncated": truncated, "maximum_changes": limit,
        "ignored_fields": sorted(ignored),
        "baseline_sha256": hashlib.sha256(canonical(scoped_before).encode("utf-8")).hexdigest(),
        "current_sha256": hashlib.sha256(canonical(scoped_after).encode("utf-8")).hexdigest(),
    }


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


def policy_twin(policy: Any, baseline: Any | None = None) -> dict[str, Any]:
    """Build a transparent local policy graph with overlap and blast-radius analysis."""
    safe_policy = mask(policy)
    rules = safe_policy if isinstance(safe_policy, list) else safe_policy.get("rules", []) if isinstance(safe_policy, dict) else []
    rules = [rule for rule in rules if isinstance(rule, dict)]

    def conditions(rule: dict[str, Any]) -> dict[str, Any]:
        value = rule.get("conditions", {})
        return value if isinstance(value, dict) else {}

    def allowed(value: Any) -> set[str]:
        values = value if isinstance(value, list) else [value]
        return {canonical(item).casefold() for item in values}

    def overlaps(left: dict[str, Any], right: dict[str, Any]) -> bool:
        return all(allowed(left[key]) & allowed(right[key]) for key in set(left) & set(right))

    def covers(earlier: dict[str, Any], later: dict[str, Any]) -> bool:
        """True when every context matching later must also match earlier."""
        return all(key in later and allowed(later[key]) <= allowed(value) for key, value in earlier.items())

    nodes, edges, findings = [], [], []
    for index, rule in enumerate(rules):
        position = index + 1
        name = str(rule.get("name") or f"Rule {position}")
        action = str(rule.get("action") or "unspecified").casefold()
        enabled = rule.get("enabled", True) is not False
        nodes.append({"id": f"rule-{position}", "position": position, "name": name, "action": action,
                      "conditions": len(conditions(rule)), "enabled": enabled, "risk": "normal"})
        if index:
            edges.append({"source": f"rule-{index}", "target": f"rule-{position}", "relation": "next"})
        if enabled and not conditions(rule) and action in {"allow", "permit"}:
            findings.append({"severity": "high", "kind": "unconditional_allow", "earlier": name, "later": "*",
                             "detail": "An unconditional allow rule can expose every later matching scope."})

    enabled_rules = [(index, rule) for index, rule in enumerate(rules) if rule.get("enabled", True) is not False]
    for right_offset, (right_index, right) in enumerate(enabled_rules):
        right_conditions, right_action = conditions(right), str(right.get("action") or "unspecified").casefold()
        right_name = str(right.get("name") or f"Rule {right_index + 1}")
        for left_index, left in enabled_rules[:right_offset]:
            left_conditions, left_action = conditions(left), str(left.get("action") or "unspecified").casefold()
            if not overlaps(left_conditions, right_conditions):
                continue
            left_name = str(left.get("name") or f"Rule {left_index + 1}")
            fully_shadowed = covers(left_conditions, right_conditions)
            if fully_shadowed:
                different_action = left_action != right_action
                kind = "shadowed_conflict" if different_action else "redundant_shadow"
                severity = "high" if different_action else "medium"
                detail = "The later rule can never decide because an earlier rule covers all of its matches."
            elif left_action != right_action:
                kind, severity = "overlap_conflict", "medium"
                detail = "The rules can match the same context but have different actions; order decides the outcome."
            else:
                continue
            findings.append({"severity": severity, "kind": kind, "earlier": left_name, "later": right_name, "detail": detail})
            edges.append({"source": f"rule-{left_index + 1}", "target": f"rule-{right_index + 1}", "relation": kind})
            nodes[right_index]["risk"] = severity

    names: dict[str, list[int]] = {}
    for index, node in enumerate(nodes):
        names.setdefault(node["name"].casefold(), []).append(index)
    for indexes in names.values():
        if len(indexes) > 1:
            duplicated = nodes[indexes[0]]["name"]
            findings.append({"severity": "medium", "kind": "duplicate_name", "earlier": duplicated, "later": duplicated,
                             "detail": "Duplicate rule names make reviews, evidence, and rollback ambiguous."})
            for index in indexes:
                if nodes[index]["risk"] == "normal": nodes[index]["risk"] = "medium"

    baseline_rules = baseline if isinstance(baseline, list) else baseline.get("rules", []) if isinstance(baseline, dict) else []
    baseline_rules = [mask(rule) for rule in baseline_rules if isinstance(rule, dict)]
    old_by_name = {str(rule.get("name") or f"Rule {index + 1}").casefold(): canonical(rule) for index, rule in enumerate(baseline_rules)}
    new_by_name = {node["name"].casefold(): canonical(rules[index]) for index, node in enumerate(nodes)}
    changed_names = [] if baseline is None else sorted({*old_by_name, *new_by_name} - {name for name in old_by_name.keys() & new_by_name if old_by_name[name] == new_by_name[name]})
    affected_dimensions = sorted({str(key) for rule in rules for key in conditions(rule)})
    high = sum(1 for item in findings if item["severity"] == "high")
    medium = sum(1 for item in findings if item["severity"] == "medium")
    score = min(100, high * 25 + medium * 10 + min(30, len(changed_names) * 5))
    return {
        "nodes": nodes, "edges": edges, "findings": findings,
        "summary": {"rules": len(nodes), "enabled": sum(1 for node in nodes if node["enabled"]),
                    "conflicts": sum(1 for item in findings if "conflict" in item["kind"]),
                    "shadowed": sum(1 for item in findings if "shadow" in item["kind"]),
                    "changed_rules": len(changed_names), "blast_radius": score},
        "blast_radius": {"score": score, "changed_rules": changed_names, "affected_dimensions": affected_dimensions,
                         "explanation": "Local heuristic based on rule conflicts, shadowing, unconditional allows, and baseline changes."},
    }


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
    def __init__(self, settings: Any, key: str = "audit/events", environment_id: str | None = None, environment_name: str | None = None):
        self.settings, self.key = settings, key
        self.anchor_key = (key.rsplit("/", 1)[0] + "/anchor") if "/" in key else key + "_anchor"
        self.environment_id = str(environment_id if environment_id is not None else settings.value("profiles/active_id", "default") or "default")
        self.environment_name = str(environment_name if environment_name is not None else settings.value("profiles/active", "Default") or "Default")

    def _read_events(self) -> tuple[list[dict[str, Any]], bool]:
        raw = self.settings.value(self.key, "[]")
        try:
            parsed = json.loads(raw) if isinstance(raw, str) else list(raw)
        except (TypeError, ValueError):
            return [], False
        if not isinstance(parsed, list) or any(not isinstance(event, dict) for event in parsed):
            return [], False
        return parsed, True

    def events(self) -> list[dict[str, Any]]:
        return self._read_events()[0]

    def append(self, action: str, details: dict[str, Any] | None = None) -> dict[str, Any]:
        events, valid = self._read_events()
        if not valid:
            return {"timestamp": int(time.time()), "action": action, "details": mask(details or {}), "digest": "", "persisted": False}
        if not events:
            self.settings.setValue(self.anchor_key, "")
        previous = events[-1].get("digest", "") if events else ""
        event = asdict(AuditEvent(int(time.time()), action, mask(details or {}), previous))
        event.update(environment_scope_metadata(self.environment_id, self.environment_name))
        event["digest"] = hashlib.sha256(canonical({k: v for k, v in event.items() if k != "digest"}).encode()).hexdigest()
        events.append(event)
        if len(events) > 1000:
            retained = events[-1000:]
            self.settings.setValue(self.anchor_key, str(retained[0].get("previous_hash", "")))
        else:
            retained = events
        self.settings.setValue(self.key, canonical(retained))
        return event

    def verify(self) -> bool:
        events, valid = self._read_events()
        if not valid:
            return False
        previous = str(self.settings.value(self.anchor_key, "") or "")
        for event in events:
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
    for anomaly in endpoint_anomalies(events):
        alerts.append({"severity": anomaly["severity"], "code": anomaly["code"], "count": anomaly["count"],
                       "evidence": {"endpoint": anomaly["endpoint"], **anomaly["evidence"]}})
    severity_rank = {"critical": 0, "high": 1, "medium": 2, "low": 3}
    alerts.sort(key=lambda alert: severity_rank[alert["severity"]])
    return {"alerts": alerts, "threshold": threshold, "requests": len(events), "failed": len(failures)}


def request_latency_trend(history: Iterable[dict[str, Any]], limit: int = 240) -> list[tuple[str, float]]:
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


def endpoint_anomalies(history: Iterable[dict[str, Any]]) -> list[dict[str, Any]]:
    """Detect explainable local regressions using only retained request history."""
    grouped: dict[str, list[dict[str, Any]]] = {}
    for event in history:
        endpoint = safe_url(event.get("url", ""))
        grouped.setdefault(endpoint, []).append(event)
    anomalies: list[dict[str, Any]] = []
    for endpoint, events in grouped.items():
        if len(events) < 3:
            continue
        latest, baseline = events[-1], events[:-1]
        latest_failed = not str(latest.get("status", "")).startswith("2")
        baseline_successful = any(str(event.get("status", "")).startswith("2") for event in baseline)
        if latest_failed and baseline_successful:
            anomalies.append({"severity": "high", "code": "endpoint_failure_regression", "endpoint": endpoint,
                              "count": len(events), "evidence": {"latest_status": latest.get("status"), "baseline_requests": len(baseline)}})
        durations = []
        for event in baseline:
            try:
                duration = float(event.get("duration_ms") or 0)
                if duration > 0:
                    durations.append(duration)
            except (TypeError, ValueError):
                continue
        try:
            latest_duration = float(latest.get("duration_ms") or 0)
        except (TypeError, ValueError):
            latest_duration = 0
        if len(durations) >= 2 and latest_duration >= max(2000, sum(durations) / len(durations) * 3):
            anomalies.append({"severity": "medium", "code": "endpoint_latency_anomaly", "endpoint": endpoint,
                              "count": len(events), "evidence": {"latest_ms": latest_duration, "baseline_ms": round(sum(durations) / len(durations), 1)}})
    return anomalies


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


def soc_investigation_graph(
    history: Iterable[dict[str, Any]],
    audit_events: Iterable[dict[str, Any]],
    response: Any = None,
    scope: dict[str, str] | None = None,
    maximum_nodes: int = 120,
) -> dict[str, Any]:
    """Correlate local evidence into an explainable entity and path graph.

    This is deliberately schema-tolerant so REST and complete GraphQL response
    trees can be inspected without product-specific assumptions. Relationships
    represent observed co-occurrence, not verified exploitability.
    """
    limit = max(20, min(500, int(maximum_nodes)))
    rank = {"normal": 0, "low": 1, "medium": 2, "high": 3, "critical": 4}
    nodes: dict[str, dict[str, Any]] = {}
    edges: dict[tuple[str, str, str], dict[str, Any]] = {}
    truncated = False

    def node_id(kind: str, label: Any) -> str:
        digest = hashlib.sha256(f"{kind}\0{str(label).casefold()}".encode("utf-8")).hexdigest()[:16]
        return f"{kind}-{digest}"

    def add_node(kind: str, label: Any, risk: str = "normal", source: str = "response") -> str:
        nonlocal truncated
        text = str(label or "").strip()
        if not text:
            return ""
        identifier = node_id(kind, text)
        if identifier not in nodes:
            if len(nodes) >= limit:
                truncated = True
                return ""
            nodes[identifier] = {"id": identifier, "type": kind, "label": text[:160], "risk": risk, "evidence_count": 0, "sources": []}
        item = nodes[identifier]
        item["evidence_count"] += 1
        if source not in item["sources"]:
            item["sources"].append(source)
        if rank.get(risk, 0) > rank.get(item["risk"], 0):
            item["risk"] = risk
        return identifier

    def add_edge(source: str, target: str, relation: str, evidence: str) -> None:
        if not source or not target or source == target:
            return
        key = (source, target, relation)
        item = edges.setdefault(key, {"source_id": source, "target_id": target, "relation": relation, "evidence_count": 0, "evidence": []})
        item["evidence_count"] += 1
        if evidence not in item["evidence"] and len(item["evidence"]) < 5:
            item["evidence"].append(evidence)

    scope_data = mask(scope or environment_scope_metadata("default", "Default"))
    environment = add_node("environment", scope_data.get("environment", "Default"), source="scope")
    history_list, audit_list = list(history), list(audit_events)
    failed_endpoints: set[str] = set()
    request_payloads: list[tuple[Any, str]] = []
    audit_payloads: list[tuple[Any, str, str]] = []
    for event in history_list[-1000:]:
        safe_event = mask(event)
        endpoint_label = safe_url(safe_event.get("url", ""))
        status = str(safe_event.get("status", ""))
        risk = "high" if status == "0" or status.startswith("5") else "medium" if status.startswith(("4", "429")) else "normal"
        endpoint = add_node("endpoint", endpoint_label, risk, "request_history")
        add_edge(environment, endpoint, "requested", f"{safe_event.get('method', 'GET')} · {status or 'unknown'}")
        if isinstance(safe_event.get("body"), (dict, list)):
            request_payloads.append((safe_event["body"], endpoint or environment))
        if risk in {"high", "critical"} and endpoint:
            failed_endpoints.add(endpoint)
    for event in audit_list[-1000:]:
        safe_event = mask(event)
        action = str(safe_event.get("action", "audit event"))
        risk = "medium" if any(word in action.casefold() for word in ("change", "policy", "delete", "approval", "webhook")) else "normal"
        activity = add_node("activity", action, risk, "audit")
        add_edge(environment, activity, "recorded", "audit")
        if isinstance(safe_event.get("details"), (dict, list)):
            audit_payloads.append((safe_event["details"], activity or environment, action))

    path_kinds = {
        "user": "identity", "users": "identity", "identity": "identity", "identities": "identity",
        "device": "device", "devices": "device", "endpointdevices": "device",
        "application": "application", "applications": "application", "apps": "application", "segments": "application", "applicationsegments": "application",
        "policy": "policy", "policies": "policy", "rules": "policy",
        "location": "location", "locations": "location", "sites": "location",
        "connector": "infrastructure", "connectors": "infrastructure", "serviceedges": "infrastructure", "servers": "infrastructure",
        "threat": "indicator", "threats": "indicator", "malware": "indicator", "indicators": "indicator", "vulnerabilities": "indicator", "exposures": "indicator",
    }
    scalar_kinds = {
        "email": "identity", "mail": "identity", "upn": "identity", "username": "identity", "userprincipalname": "identity", "actor": "identity", "principal": "identity",
        "sourceip": "address", "srcip": "address", "destinationip": "address", "dstip": "address", "clientip": "address", "ipaddress": "address",
        "hostname": "device", "devicename": "device", "computername": "device",
        "applicationname": "application", "appname": "application", "segmentname": "application",
        "policyname": "policy", "rulename": "policy", "locationname": "location",
        "connectorname": "infrastructure", "serviceedgename": "infrastructure",
        "url": "service", "domain": "service", "fqdn": "service",
        "threatname": "indicator", "malwarename": "indicator", "indicator": "indicator",
    }

    def normalized(value: Any) -> str:
        return "".join(character for character in str(value).casefold() if character.isalnum())

    def scalar_kind_for(token: str) -> str | None:
        return scalar_kinds.get(token) or ("address" if token.endswith("ip") else None)

    def inferred_kind(path: tuple[str, ...], record: dict[str, Any]) -> str:
        for part in reversed(path):
            token = normalized(part)
            if token in path_kinds:
                return path_kinds[token]
        keys = {normalized(key) for key in record}
        if keys & {"email", "upn", "username", "userprincipalname"}: return "identity"
        if keys & {"deviceid", "devicename", "hostname"}: return "device"
        if keys & {"applicationid", "applicationname", "appid", "appname", "segmentid"}: return "application"
        if keys & {"policyid", "policyname", "ruleid", "rulename"}: return "policy"
        if keys & {"threatid", "threatname", "malware", "cve", "severity"}: return "indicator"
        return "resource"

    visited = 0
    def walk(value: Any, path: tuple[str, ...] = (), parent: str = "") -> None:
        nonlocal visited, truncated
        if visited >= 5000 or len(path) > 10:
            truncated = True
            return
        visited += 1
        if isinstance(value, list):
            for item in value[:1000]:
                walk(item, path, parent)
            if len(value) > 1000:
                truncated = True
            return
        if not isinstance(value, dict):
            token = normalized(path[-1]) if path else ""
            scalar_kind = scalar_kind_for(token)
            if scalar_kind and value not in (None, ""):
                scalar_label = safe_url(value) if scalar_kind == "service" and token == "url" else value
                related = add_node(scalar_kind, scalar_label, "high" if scalar_kind == "indicator" else "normal", "api_response")
                add_edge(parent or environment, related, f"has_{scalar_kind}", path[-1] if path else "value")
            return
        safe_record = mask(value)
        kind = inferred_kind(path, safe_record)
        lookup = {normalized(key): item for key, item in safe_record.items()}
        label = next((lookup[key] for key in ("displayname", "name", "email", "username", "hostname", "url", "fqdn", "id", "uuid") if key in lookup and not isinstance(lookup[key], (dict, list))), "")
        severity = str(lookup.get("severity", lookup.get("risk", ""))).casefold()
        risk = "critical" if severity == "critical" else "high" if kind == "indicator" or severity == "high" else "medium" if severity in {"medium", "warning"} else "normal"
        primary = add_node(kind, label, risk, "api_response") if label else parent
        if primary and parent and primary != parent:
            add_edge(parent, primary, "contains", "/".join(path[-3:]) or "response")
        if primary and primary != environment and parent == environment:
            add_edge(environment, primary, "observed", "API/GraphQL response")
        for key, item in safe_record.items():
            token = normalized(key)
            if isinstance(item, (dict, list)):
                walk(item, path + (str(key),), primary or parent)
                continue
            scalar_kind = scalar_kind_for(token)
            if scalar_kind is None or item in (None, ""):
                continue
            scalar_label = safe_url(item) if scalar_kind == "service" and token == "url" else item
            related = add_node(scalar_kind, scalar_label, "high" if scalar_kind == "indicator" else "normal", "api_response")
            add_edge(primary or environment, related, f"has_{scalar_kind}", str(key))

    if response is not None:
        walk(mask(response), ("response",), environment)
    for payload, parent in request_payloads:
        walk(payload, ("request", "body"), parent)
    for payload, parent, action in audit_payloads:
        walk(payload, ("audit", action, "details"), parent)

    edge_list = list(edges.values())
    adjacency: dict[str, set[str]] = {identifier: set() for identifier in nodes}
    for edge in edge_list:
        adjacency.setdefault(edge["source_id"], set()).add(edge["target_id"])
        adjacency.setdefault(edge["target_id"], set()).add(edge["source_id"])
    degree = {identifier: len(neighbors) for identifier, neighbors in adjacency.items()}
    origins = [identifier for identifier, item in nodes.items() if item["type"] in {"identity", "address", "device"}]
    target_types = {"indicator", "application", "policy", "service", "infrastructure", "endpoint"}
    paths: list[dict[str, Any]] = []
    seen_pairs: set[tuple[str, str]] = set()
    for origin in origins[:30]:
        queue = deque([(origin, [origin])]); visited_nodes = {origin}
        origin_paths = 0
        while queue and len(paths) < 20:
            current, route = queue.popleft()
            if len(route) > 5:
                continue
            if current != origin and nodes[current]["type"] in target_types:
                pair = (origin, current)
                if pair not in seen_pairs:
                    seen_pairs.add(pair)
                    route_risk = max((rank.get(nodes[item]["risk"], 0) for item in route), default=0)
                    severity_name = "high" if nodes[current]["type"] == "indicator" or route_risk >= 3 else "medium"
                    paths.append({"severity": severity_name, "source_id": origin, "target_id": current, "node_ids": route,
                                  "explanation": "Observed relationship chain across local evidence; validate before treating it as an exploitable attack path."})
                    origin_paths += 1
                if origin_paths >= 5:
                    break
            for neighbor in sorted(adjacency.get(current, ())):
                if neighbor not in visited_nodes and nodes[neighbor]["type"] != "environment":
                    visited_nodes.add(neighbor); queue.append((neighbor, route + [neighbor]))
    anomalies = []
    for identifier in failed_endpoints:
        anomalies.append({"severity": "high", "code": "endpoint_failure_evidence", "entity_id": identifier,
                          "explanation": "The endpoint has locally retained server or network failure evidence."})
    for identifier, item in nodes.items():
        if item["type"] in {"identity", "device"} and degree.get(identifier, 0) >= 4:
            anomalies.append({"severity": "medium", "code": "relationship_concentration", "entity_id": identifier,
                              "explanation": "The entity is connected to an unusually broad set of locally observed relationships."})
        if item["type"] == "indicator":
            anomalies.append({"severity": item["risk"], "code": "security_indicator_observed", "entity_id": identifier,
                              "explanation": "A threat, exposure, vulnerability, or indicator-like object was present in the response."})
    ordered_nodes = sorted(nodes.values(), key=lambda item: (-rank.get(item["risk"], 0), -degree.get(item["id"], 0), item["label"].casefold()))
    return {
        "nodes": ordered_nodes, "edges": edge_list, "paths": paths, "anomalies": anomalies,
        "summary": {"entities": len(nodes), "relationships": len(edge_list), "attack_paths": len(paths),
                    "high_risk": sum(1 for item in nodes.values() if rank.get(item["risk"], 0) >= 3),
                    "response_included": response is not None, "truncated": truncated},
        "scope": scope_data,
        "disclaimer": "Relationships are local correlations and potential investigation paths, not proof of compromise or exploitability.",
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


def security_report_data(kind: str, history: Iterable[dict[str, Any]], audit_events: Iterable[dict[str, Any]], audit_valid: bool, scope: dict[str, str] | None = None) -> dict[str, Any]:
    """Create local, redacted facts for CISO, SOC, or operations reports."""
    if kind not in {"ciso", "soc", "operations"}:
        raise ValueError("Unknown report type")
    history_list, audit_list = list(history), list(audit_events)
    posture = security_posture(history_list, audit_valid)
    evidence = incident_evidence(history_list, audit_list)
    assurance = compliance_assessment(history_list, audit_list, audit_valid, scope=scope)
    return {
        "kind": kind, "posture": posture, "incident_summary": evidence["summary"],
        "audit_valid": audit_valid, "audit_events": len(audit_list),
        "recent_events": evidence["timeline"][:10], "scope": mask(scope or environment_scope_metadata("default", "Default")),
        "assurance": assurance, "executive_narrative": executive_security_narrative(assurance, posture),
    }


def compliance_assessment(
    history: Iterable[dict[str, Any]],
    audit_events: Iterable[dict[str, Any]],
    audit_valid: bool,
    policy: Any = None,
    previous: dict[str, Any] | None = None,
    scope: dict[str, str] | None = None,
) -> dict[str, Any]:
    """Evaluate a transparent local baseline; this is not certification."""
    events, audits = list(history), list(audit_events)
    writes = [item for item in events if str(item.get("method", "")).upper() in {"POST", "PUT", "PATCH", "DELETE"}]
    failures = [item for item in events if not str(item.get("status", "")).startswith("2")]
    audit_actions = {str(item.get("action", "")) for item in audits}
    policy_available = isinstance(policy, (dict, list))
    policy_findings = compliance_findings(policy) if policy_available else []
    open_allow = [item for item in policy_findings if item["message"] == "Allow rule has no conditions"]

    def control(identifier, title, status, severity, evidence, mappings, recommendation):
        return {"code": identifier, "title": title, "status": status, "severity": severity, "evidence": mask(evidence),
                "mappings": mappings, "recommendation": recommendation}

    controls = [
        control("LOCAL-GV-01", "Audit evidence integrity", "pass" if audit_valid else "fail", "critical",
                {"audit_events": len(audits), "chain_valid": audit_valid}, ["NIST CSF 2.0 · GOVERN"], "Review and restore the local hash-linked audit trail."),
        control("LOCAL-ID-01", "Operational evidence available", "pass" if events else "not_evaluated", "medium",
                {"retained_requests": len(events)}, ["NIST CSF 2.0 · IDENTIFY", "CISA Zero Trust · Visibility and Analytics"], "Collect or import masked read-only evidence for the selected environment."),
        control("LOCAL-DE-01", "API health and anomaly monitoring", "pass" if events and len(failures) / len(events) <= 0.1 else "fail" if events else "not_evaluated", "high",
                {"requests": len(events), "failures": len(failures)}, ["NIST CSF 2.0 · DETECT", "CISA Zero Trust · Visibility and Analytics"], "Investigate repeated failures, latency regressions, and rate limiting."),
        control("LOCAL-PR-01", "Least-privilege policy baseline", "fail" if open_allow else "pass" if policy_available else "not_evaluated", "high",
                {"policy_loaded": policy_available, "unconditional_allow_rules": len(open_allow)}, ["NIST CSF 2.0 · PROTECT", "CISA Zero Trust · Applications and Workloads"], "Constrain unconditional allow rules and validate order in Policy Twin."),
        control("LOCAL-GV-02", "Reviewed write activity", "pass" if writes and "change_review_approved" in audit_actions else "fail" if writes else "not_evaluated", "high",
                {"write_requests": len(writes), "approval_recorded": "change_review_approved" in audit_actions}, ["NIST CSF 2.0 · GOVERN"], "Require a recorded review and rollback artifact for write activity."),
        control("LOCAL-RS-01", "Incident evidence readiness", "pass" if not failures or bool(audit_actions & {"incident_evidence_exported", "incident_chain_prepared", "soc_entities_correlated"}) else "fail", "medium",
                {"failures": len(failures), "investigation_evidence_prepared": bool(audit_actions & {"incident_evidence_exported", "incident_chain_prepared", "soc_entities_correlated"})}, ["NIST CSF 2.0 · RESPOND"], "Prepare and export masked investigation evidence for unresolved failures."),
        control("LOCAL-RC-01", "Recovery evidence available", "pass" if bool(audit_actions & {"policy_snapshot_saved", "change_review_exported"}) else "not_evaluated", "medium",
                {"snapshot_or_rollback_recorded": bool(audit_actions & {"policy_snapshot_saved", "change_review_exported"})}, ["NIST CSF 2.0 · RECOVER"], "Save a policy snapshot or reviewed rollback artifact before change."),
    ]
    evaluated = [item for item in controls if item["status"] != "not_evaluated"]
    passed = sum(1 for item in evaluated if item["status"] == "pass")
    score = round(100 * passed / len(evaluated)) if evaluated else 0
    previous_score = previous.get("summary", {}).get("score") if isinstance(previous, dict) else None
    delta = score - int(previous_score) if isinstance(previous_score, (int, float)) else None
    summary = {"score": score, "passed": passed, "failed": sum(1 for item in evaluated if item["status"] == "fail"),
               "not_evaluated": len(controls) - len(evaluated), "coverage_percent": round(100 * len(evaluated) / len(controls)), "delta": delta}
    body = {"generated_at": int(time.time()), "scope": mask(scope or environment_scope_metadata("default", "Default")), "summary": summary,
            "controls": controls, "frameworks": ["Local evidence baseline", "NIST CSF 2.0 functions", "CISA Zero Trust Maturity Model pillars"],
            "disclaimer": "Local evidence assessment only; it is not an audit, certification, or proof of framework compliance."}
    body["assessment_id"] = hashlib.sha256(canonical(body).encode("utf-8")).hexdigest()
    return body


def executive_security_narrative(assessment: dict[str, Any], posture: dict[str, Any]) -> dict[str, Any]:
    """Create a deterministic leadership narrative from explicit local facts."""
    summary = assessment.get("summary", {})
    failed = [item for item in assessment.get("controls", []) if item.get("status") == "fail"]
    score = int(summary.get("score", 0))
    headline = "Local assurance requires attention" if failed else "No failing controls in the evaluated local scope"
    observations = [f"{summary.get('passed', 0)} evaluated controls passed and {summary.get('failed', 0)} failed.",
                    f"Evidence coverage is {summary.get('coverage_percent', 0)}% and local posture is {posture.get('score', 0)}/100."]
    if summary.get("delta") is not None:
        observations.append(f"The assurance score changed by {int(summary['delta']):+d} points versus the selected baseline.")
    risks = [{"control": item["code"], "title": item["title"], "severity": item["severity"], "evidence": item["evidence"]} for item in failed]
    actions = [{"control": item["code"], "action": item["recommendation"]} for item in failed[:5]]
    if not actions:
        actions.append({"control": "LOCAL", "action": "Maintain evidence collection and review not-evaluated controls."})
    return {"headline": headline, "observations": observations, "business_risks": risks, "recommended_actions": actions,
            "confidence": "Derived deterministically from retained local evidence; validate against authoritative tenant and governance records."}


ZDX_METRICS = {
    "overall_score": ("user", {"zdxscore", "overallexperiencescore", "experiencescore", "score"}),
    "device_score": ("device", {"devicescore", "endpointscore"}),
    "application_score": ("application", {"applicationscore", "appscore", "webprobescore"}),
    "service_edge_score": ("service_edge", {"cloudpathscore", "serviceedgescore", "ziascore", "zpascore"}),
    "latency_ms": ("network", {"latency", "latencyms", "roundtriptime", "rtt", "rttms"}),
    "packet_loss_percent": ("network", {"packetloss", "packetlosspercent", "loss", "losspercent"}),
    "jitter_ms": ("network", {"jitter", "jitterms"}),
    "dns_ms": ("network", {"dnstime", "dnstimems", "dnsresponsetime"}),
    "tcp_connect_ms": ("network", {"tcpconnecttime", "tcpconnecttimems", "connecttime"}),
    "page_fetch_ms": ("application", {"pagefetchtime", "pagefetchtimems", "pageloadtime", "responsetime"}),
    "availability_percent": ("application", {"availability", "availabilitypercent", "uptime"}),
    "cpu_percent": ("device", {"cpu", "cpupercent", "cpuutilization"}),
    "memory_percent": ("device", {"memory", "memorypercent", "memoryutilization"}),
}


def _field_token(value: Any) -> str:
    return "".join(character for character in str(value).casefold() if character.isalnum())


def _median(values: Iterable[float]) -> float:
    ordered = sorted(float(item) for item in values)
    if not ordered:
        return 0.0
    middle = len(ordered) // 2
    return ordered[middle] if len(ordered) % 2 else (ordered[middle - 1] + ordered[middle]) / 2


def zdx_experience_journey(response: Any, maximum_records: int = 5000) -> dict[str, Any]:
    """Extract an explainable user-to-application journey from complete API trees.

    Field aliases are intentionally tolerant across REST and GraphQL envelopes.
    Values are observations only; missing stages are never synthesized.
    """
    lookup = {alias: (name, stage) for name, (stage, aliases) in ZDX_METRICS.items() for alias in aliases}
    timestamp_names = {"timestamp", "time", "datetime", "observedat", "createdat", "eventtime", "epochtime", "epochtimestamp"}
    samples: list[dict[str, Any]] = []
    counts: Counter[str] = Counter()
    visited = 0
    truncated = False

    def walk(value: Any, path: tuple[str, ...] = ()) -> None:
        nonlocal visited, truncated
        if visited >= max(100, min(20000, int(maximum_records))) or len(path) > 12:
            truncated = True
            return
        visited += 1
        if isinstance(value, list):
            for item in value[:2000]:
                walk(item, path)
            if len(value) > 2000: truncated = True
            return
        if not isinstance(value, dict):
            return
        safe_record = mask(value)
        timestamp = next((item for key, item in safe_record.items() if _field_token(key) in timestamp_names and not isinstance(item, (dict, list))), "")
        record_metrics: dict[str, float] = {}
        record_stages: set[str] = set()
        for key, item in safe_record.items():
            matched = lookup.get(_field_token(key))
            if matched and isinstance(item, (int, float)) and not isinstance(item, bool):
                metric, stage = matched
                number = float(item)
                if abs(number) <= 10_000_000:
                    record_metrics[metric] = number; record_stages.add(stage); counts[metric] += 1
            if isinstance(item, (dict, list)):
                walk(item, path + (str(key),))
        if record_metrics:
            samples.append({"timestamp": str(timestamp or len(samples) + 1), "path": "/".join(path[-4:]), "metrics": record_metrics, "stages": sorted(record_stages)})

    walk(response, ("response",))
    latest: dict[str, float] = {}
    series: dict[str, list[dict[str, Any]]] = {}
    for sample in samples:
        for metric, value in sample["metrics"].items():
            latest[metric] = value
            series.setdefault(metric, []).append({"label": sample["timestamp"], "value": value})
    stage_order = ("user", "device", "network", "service_edge", "application")
    stage_labels = {"user": "User", "device": "Device", "network": "Network", "service_edge": "Service edge", "application": "Application"}
    stage_metrics = {stage: sorted(metric for metric, (_, aliases) in ZDX_METRICS.items() if ZDX_METRICS[metric][0] == stage and metric in latest) for stage in stage_order}
    stages = [{"id": stage, "label": stage_labels[stage], "status": "observed" if stage_metrics[stage] else "no_data",
               "metrics": {metric: latest[metric] for metric in stage_metrics[stage]}} for stage in stage_order]
    issues: list[dict[str, Any]] = []
    thresholds = {
        "overall_score": ("below", 70, "Overall experience score is below 70"),
        "device_score": ("below", 70, "Device score is below 70"),
        "application_score": ("below", 70, "Application score is below 70"),
        "service_edge_score": ("below", 70, "Service-edge score is below 70"),
        "latency_ms": ("above", 250, "Observed latency exceeds 250 ms"),
        "packet_loss_percent": ("above", 2, "Observed packet loss exceeds 2%"),
        "jitter_ms": ("above", 40, "Observed jitter exceeds 40 ms"),
        "availability_percent": ("below", 99, "Observed availability is below 99%"),
    }
    for metric, (direction, threshold, explanation) in thresholds.items():
        if metric not in latest: continue
        breached = latest[metric] < threshold if direction == "below" else latest[metric] > threshold
        if breached:
            stage = ZDX_METRICS[metric][0]
            issues.append({"stage": stage, "metric": metric, "value": latest[metric], "threshold": threshold, "severity": "high" if metric in {"overall_score", "packet_loss_percent", "availability_percent"} else "medium", "explanation": explanation})
    return {
        "summary": {"observed_stages": sum(1 for item in stages if item["status"] == "observed"), "samples": len(samples), "issues": len(issues),
                    "overall_score": latest.get("overall_score"), "latency_ms": latest.get("latency_ms"), "packet_loss_percent": latest.get("packet_loss_percent")},
        "stages": stages, "issues": issues, "latest": latest, "series": series,
        "field_counts": dict(counts), "truncated": truncated,
        "disclaimer": "Schema-tolerant local interpretation of observed API fields. Thresholds are transparent operational hints, not Zscaler health verdicts or SLA determinations.",
    }


def adaptive_anomalies(history: Iterable[dict[str, Any]], sensitivity: str = "balanced", minimum_samples: int = 5) -> dict[str, Any]:
    """Detect endpoint regressions with transparent median/MAD thresholds."""
    factors = {"relaxed": 8.0, "balanced": 5.0, "sensitive": 3.5}
    selected = sensitivity if sensitivity in factors else "balanced"
    required = max(3, min(50, int(minimum_samples)))
    groups: dict[str, list[dict[str, Any]]] = {}
    for raw in list(history)[-5000:]:
        if not isinstance(raw, dict): continue
        event = mask(raw)
        safe_endpoint = safe_url(event.get("url", ""))
        endpoint_parts = urllib.parse.urlsplit(safe_endpoint)
        endpoint = urllib.parse.urlunsplit((endpoint_parts.scheme, endpoint_parts.netloc, endpoint_parts.path, "", "")) or "unknown"
        groups.setdefault(endpoint, []).append(event)
    findings: list[dict[str, Any]] = []
    baselines: list[dict[str, Any]] = []
    for endpoint, events in groups.items():
        durations = [float(item["duration_ms"]) for item in events if isinstance(item.get("duration_ms"), (int, float)) and not isinstance(item.get("duration_ms"), bool)]
        if len(durations) < required: continue
        baseline_values, current = durations[:-1], durations[-1]
        if len(baseline_values) < required - 1: continue
        median = _median(baseline_values)
        mad = _median(abs(value - median) for value in baseline_values)
        noise = max(mad * 1.4826, max(10.0, median * 0.10))
        threshold = median + factors[selected] * noise
        baselines.append({"endpoint": endpoint, "samples": len(durations), "median_ms": round(median, 2), "mad_ms": round(mad, 2), "threshold_ms": round(threshold, 2), "current_ms": round(current, 2)})
        if current > threshold:
            findings.append({"code": "adaptive_latency_regression", "severity": "high" if current > threshold * 1.5 else "medium", "endpoint": endpoint,
                             "observed": round(current, 2), "threshold": round(threshold, 2), "explanation": f"Latest duration exceeds the {selected} median/MAD threshold."})
        latest_status = str(events[-1].get("status", ""))
        previous_failures = sum(1 for item in events[:-1] if str(item.get("status", "")).startswith(("4", "5")) or str(item.get("status", "")) == "0")
        if (latest_status.startswith(("4", "5")) or latest_status == "0") and previous_failures / max(1, len(events) - 1) < 0.2:
            findings.append({"code": "adaptive_status_regression", "severity": "high", "endpoint": endpoint, "observed": latest_status,
                             "threshold": "historical failure rate <20%", "explanation": "Latest request failed although the retained endpoint baseline was predominantly successful."})
    return {"sensitivity": selected, "method": "Median absolute deviation (MAD), scaled by 1.4826 with a 10%/10 ms noise floor",
            "minimum_samples": required, "baselines": baselines, "findings": findings,
            "summary": {"endpoints_evaluated": len(baselines), "findings": len(findings)},
            "disclaimer": "Local explainable anomaly hints only; validate timing, sampling and tenant context before escalation."}


DETECTION_TEMPLATES = {
    "server_errors": {"name": "Server errors", "match": "all", "conditions": [{"field": "status", "operator": "gte", "value": 500}]},
    "rate_limits": {"name": "Rate-limit responses", "match": "all", "conditions": [{"field": "status", "operator": "eq", "value": 429}]},
    "high_latency": {"name": "High request latency", "match": "all", "conditions": [{"field": "duration_ms", "operator": "gt", "value": 2000}]},
    "write_activity": {"name": "Write activity", "match": "all", "conditions": [{"field": "method", "operator": "in", "value": ["POST", "PUT", "PATCH", "DELETE"]}]},
    "authentication_failures": {"name": "Authentication failures", "match": "all", "conditions": [{"field": "status", "operator": "in", "value": [401, 403]}]},
}
DETECTION_FIELDS = {"status", "duration_ms", "method", "url", "environment_id", "error", "timestamp"}
DETECTION_OPERATORS = {"eq", "ne", "gt", "gte", "lt", "lte", "contains", "starts_with", "exists", "in"}


def validate_detection_rule(rule: Any) -> dict[str, Any]:
    """Validate a small declarative rule language; arbitrary code is impossible."""
    errors: list[str] = []
    if not isinstance(rule, dict):
        return {"valid": False, "errors": ["Rule must be an object"], "rule": {}}
    conditions = rule.get("conditions")
    mode = str(rule.get("match", "all"))
    if mode not in {"all", "any"}: errors.append("match must be all or any")
    if not isinstance(conditions, list) or not conditions or len(conditions) > 20:
        errors.append("conditions must contain between 1 and 20 items"); conditions = []
    normalized = {"name": str(rule.get("name", "Custom detection"))[:120], "match": mode, "conditions": []}
    for index, condition in enumerate(conditions, 1):
        if not isinstance(condition, dict): errors.append(f"Condition {index} must be an object"); continue
        field, operator = str(condition.get("field", "")), str(condition.get("operator", ""))
        allowed_field = field in DETECTION_FIELDS or (field.startswith("response_headers.") and len(field) <= 100 and re.fullmatch(r"response_headers\.[A-Za-z0-9_-]+", field))
        if not allowed_field: errors.append(f"Condition {index} has an unsupported field")
        if operator not in DETECTION_OPERATORS: errors.append(f"Condition {index} has an unsupported operator")
        value = condition.get("value")
        if operator == "in" and (not isinstance(value, list) or len(value) > 100): errors.append(f"Condition {index} in value must be a list of at most 100 items")
        if isinstance(value, (dict, list)) and operator != "in": errors.append(f"Condition {index} value must be scalar")
        normalized["conditions"].append({"field": field, "operator": operator, "value": mask(value)})
    return {"valid": not errors, "errors": errors, "rule": normalized}


def evaluate_detection_rule(rule: Any, events: Iterable[dict[str, Any]]) -> dict[str, Any]:
    """Evaluate a validated declarative detection against masked local events."""
    validation = validate_detection_rule(rule)
    if not validation["valid"]:
        return {"valid": False, "errors": validation["errors"], "matches": [], "summary": {"examined": 0, "matched": 0}}
    normalized = validation["rule"]

    def field_value(event: dict[str, Any], field: str) -> Any:
        if field.startswith("response_headers."):
            name = field.split(".", 1)[1].casefold()
            headers = event.get("response_headers", {})
            return next((value for key, value in headers.items() if str(key).casefold() == name), None) if isinstance(headers, dict) else None
        return event.get(field)

    def condition_matches(actual: Any, condition: dict[str, Any]) -> bool:
        operator, expected = condition["operator"], condition.get("value")
        if operator == "exists": return (actual is not None) == bool(expected)
        if operator == "in": return actual in expected or str(actual) in {str(item) for item in expected}
        if operator == "contains": return str(expected).casefold() in str(actual or "").casefold()
        if operator == "starts_with": return str(actual or "").casefold().startswith(str(expected).casefold())
        if operator in {"gt", "gte", "lt", "lte"}:
            try: first, second = float(actual), float(expected)
            except (TypeError, ValueError): return False
            return {"gt": first > second, "gte": first >= second, "lt": first < second, "lte": first <= second}[operator]
        equal = actual == expected or str(actual) == str(expected)
        return equal if operator == "eq" else not equal

    source = [mask(item) for item in list(events)[-5000:] if isinstance(item, dict)]
    matches = []
    for event in source:
        results = [condition_matches(field_value(event, item["field"]), item) for item in normalized["conditions"]]
        if (all(results) if normalized["match"] == "all" else any(results)):
            matches.append({key: event.get(key) for key in ("timestamp", "environment_id", "method", "url", "status", "duration_ms", "error") if key in event})
    return {"valid": True, "errors": [], "rule": normalized, "matches": matches,
            "summary": {"examined": len(source), "matched": len(matches)},
            "explanation": f"Matched events where {normalized['match']} of {len(normalized['conditions'])} declarative conditions were true.",
            "disclaimer": "Local retrospective detection only. It does not execute code, contact a tenant, or trigger remediation."}


def validate_request_chain(steps: Any, maximum: int = 20) -> dict[str, Any]:
    """Validate an explicit API chain before the UI considers execution."""
    if not isinstance(steps, list) or not steps:
        return {"valid": False, "errors": ["Chain must contain at least one step"], "steps": []}
    if len(steps) > maximum:
        return {"valid": False, "errors": [f"Chain is limited to {maximum} steps"], "steps": []}
    valid_steps, errors, known_ids = [], [], set()
    for index, raw in enumerate(steps, 1):
        if not isinstance(raw, dict):
            errors.append(f"Step {index} must be an object")
            continue
        step_id = str(raw.get("id") or f"step{index}").strip()
        if not re.fullmatch(r"[A-Za-z][A-Za-z0-9_-]{0,63}", step_id):
            errors.append(f"Step {index} has an invalid id")
        elif step_id in known_ids:
            errors.append(f"Step {index} has a duplicate id")
        method, url = str(raw.get("method", "GET")).upper(), str(raw.get("url", "")).strip()
        if method not in {"GET", "POST", "PUT", "PATCH", "DELETE"}:
            errors.append(f"Step {index} has an unsupported method")
        parsed = urllib.parse.urlsplit(url)
        if not url or (not url.startswith("/") and parsed.scheme != "https"):
            errors.append(f"Step {index} must use an HTTPS URL or a relative API path")
        body = raw.get("body")
        if body is not None and not isinstance(body, (dict, list, str)):
            errors.append(f"Step {index} body must be JSON data or text")
        body_mode = str(raw.get("body_mode", "json"))
        if body_mode not in {"json", "raw", "form"}:
            errors.append(f"Step {index} has an unsupported body mode")
        headers = raw.get("headers", {})
        if not isinstance(headers, dict) or any(not isinstance(value, str) for value in headers.values()):
            errors.append(f"Step {index} headers must be string values")
            headers = {}
        if any(is_sensitive_name(name) for name in headers):
            errors.append(f"Step {index} must not contain credential headers")
        references = chain_references({"url": url, "body": body, "headers": headers})
        unknown = sorted({reference.split(".", 1)[0] for reference in references} - known_ids)
        if unknown:
            errors.append(f"Step {index} references unavailable steps: {', '.join(unknown)}")
        if chain_has_invalid_template({"url": url, "body": body, "headers": headers}):
            errors.append(f"Step {index} has an invalid template")
        if not errors or not any(error.startswith(f"Step {index} ") for error in errors):
            # Keep the original body for the explicitly approved request.  Callers
            # must use mask() when previewing, persisting or auditing this plan.
            valid_steps.append({"id": step_id, "method": method, "url": url, "body": body, "body_mode": body_mode, "headers": headers})
            known_ids.add(step_id)
    return {"valid": not errors, "errors": errors, "steps": valid_steps}


CHAIN_REFERENCE = re.compile(r"\{\{\s*([A-Za-z][A-Za-z0-9_-]*(?:\.(?:[A-Za-z_][A-Za-z0-9_-]*|\d+))+)\s*\}\}")


def chain_references(value: Any) -> list[str]:
    """Collect declarative references without evaluating arbitrary expressions."""
    if isinstance(value, dict):
        return sum((chain_references(item) for item in value.values()), [])
    if isinstance(value, list):
        return sum((chain_references(item) for item in value), [])
    return CHAIN_REFERENCE.findall(value) if isinstance(value, str) else []


def chain_has_invalid_template(value: Any) -> bool:
    if isinstance(value, dict):
        return any(chain_has_invalid_template(item) for item in value.values())
    if isinstance(value, list):
        return any(chain_has_invalid_template(item) for item in value)
    if not isinstance(value, str):
        return False
    return "{{" in CHAIN_REFERENCE.sub("", value) or "}}" in CHAIN_REFERENCE.sub("", value)


def chain_lookup(context: dict[str, Any], reference: str) -> Any:
    """Resolve a key/index path from completed chain steps only."""
    segments = reference.split(".")
    value: Any = context[segments[0]]
    for segment in segments[1:]:
        if isinstance(value, dict) and segment in value:
            value = value[segment]
        elif isinstance(value, list) and segment.isdigit() and int(segment) < len(value):
            value = value[int(segment)]
        else:
            raise ValueError(f"Reference is unavailable: {reference}")
    return value


def resolve_chain_templates(value: Any, context: dict[str, Any], url_value: bool = False) -> Any:
    """Resolve safe references recursively; URL substitutions are always encoded."""
    if isinstance(value, dict):
        return {key: resolve_chain_templates(item, context, url_value=False) for key, item in value.items()}
    if isinstance(value, list):
        return [resolve_chain_templates(item, context, url_value=False) for item in value]
    if not isinstance(value, str):
        return value
    exact = CHAIN_REFERENCE.fullmatch(value)
    if exact and not url_value:
        return chain_lookup(context, exact.group(1))
    def replacement(match):
        resolved = chain_lookup(context, match.group(1))
        rendered = canonical(resolved) if isinstance(resolved, (dict, list)) else str(resolved)
        return urllib.parse.quote(rendered, safe="") if url_value else rendered
    return CHAIN_REFERENCE.sub(replacement, value)
