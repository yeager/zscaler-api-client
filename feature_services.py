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
from collections import Counter
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
        if enabled["ids"] and normalized.endswith(("id", "uuid", "guid", "identifier")) and value is not None:
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
    if enabled["ids"] and (normalized.endswith(("id", "uuid", "guid", "identifier")) or normalized in {"keyid", "resourcekey"}):
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
    return {
        "kind": kind, "posture": posture, "incident_summary": evidence["summary"],
        "audit_valid": audit_valid, "audit_events": len(audit_list),
        "recent_events": evidence["timeline"][:10], "scope": mask(scope or environment_scope_metadata("default", "Default")),
    }


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
