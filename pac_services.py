"""Offline-safe PAC authoring, validation and test helpers.

This module deliberately does not execute PAC JavaScript.  Browsers evaluate
PAC files differently, so the verifier provides deterministic static checks
and an explainable rule preview before any Zscaler write is prepared.
"""

from __future__ import annotations

from dataclasses import dataclass
import re


PAC_VARIABLES = {
    "GATEWAY": "Primary Zscaler gateway",
    "SECONDARY_GATEWAY": "Secondary Zscaler gateway",
    "GATEWAY_FX": "Primary gateway (failover-aware)",
    "SECONDARY_GATEWAY_FX": "Secondary gateway (failover-aware)",
    "LOCATION": "Optional local deployment label",
    "CLOUD": "Zscaler cloud name",
    "GATEWAY.<subcloud>.<cloud>.net": "Primary gateway for an explicit subcloud",
    "SECONDARY_GATEWAY.<subcloud>.<cloud>.net": "Secondary gateway for an explicit subcloud",
}
PAC_FUNCTIONS = {
    "FindProxyForURL(url, host)": "Required PAC entry point; return DIRECT, PROXY, or SOCKS.",
    "isPlainHostName(host)": "Matches a host without a DNS suffix.",
    "dnsDomainIs(host, domain)": "Matches a DNS suffix.",
    "localHostOrDomainIs(host, hostdom)": "Matches a local host or fully qualified name.",
    "shExpMatch(value, pattern)": "Matches shell-style wildcard patterns such as *.example.com.",
    "dnsDomainLevels(host)": "Counts DNS labels in a host name.",
    "weekdayRange(...)": "Matches a weekday range.",
    "dateRange(...)": "Matches a date range.",
    "timeRange(...)": "Matches a time range.",
    "dnsResolve(host)": "Resolves DNS; avoid for Client Connector performance unless required.",
    "isResolvable(host)": "Tests DNS resolution; avoid for Client Connector performance unless required.",
    "isInNet(host, pattern, mask)": "Tests a network; avoid for Client Connector performance unless required.",
}
PAC_TEMPLATE = '''function FindProxyForURL(url, host) {
  // Keep direct/private destinations local; customize the patterns below.
  if (isPlainHostName(host) || shExpMatch(host, "*.local")) return "DIRECT";
  return "PROXY ${GATEWAY}:80; PROXY ${SECONDARY_GATEWAY}:80; DIRECT";
}
'''


@dataclass(frozen=True)
class PacFinding:
    severity: str
    message: str
    line: int = 0


def pac_variables(text: str) -> set[str]:
    """Return ${VARIABLE} names, including Zscaler subcloud gateway variants."""
    return set(re.findall(r"\$\{([A-Za-z0-9_.-]+)\}", text or ""))


def substitute_pac_variables(text: str, values: dict[str, object]) -> tuple[str, list[str]]:
    """Safely substitute explicit PAC variables without evaluating expressions."""
    missing: list[str] = []

    def replace(match: re.Match[str]) -> str:
        name = match.group(1)
        value = values.get(name)
        if value is None or str(value).strip() == "":
            missing.append(name)
            return match.group(0)
        return str(value).strip()

    return re.sub(r"\$\{([A-Za-z0-9_.-]+)\}", replace, text or ""), sorted(set(missing))


def build_guided_pac(bypass_domains: list[str], gateway: str = "${GATEWAY}", secondary_gateway: str = "${SECONDARY_GATEWAY}") -> str:
    """Create a conservative PAC from simple host-bypass inputs only."""
    patterns: list[str] = []
    for domain in bypass_domains:
        value = str(domain).strip().lower()
        if not value:
            continue
        if not re.fullmatch(r"(?:\*\.)?[a-z0-9][a-z0-9.-]*", value):
            raise ValueError(f"Invalid host pattern: {domain}")
        patterns.append(value)
    bypass = " || ".join(["isPlainHostName(host)"] + [f'shExpMatch(host, "{item}")' for item in dict.fromkeys(patterns)])
    return "\n".join((
        "function FindProxyForURL(url, host) {",
        "  // Guided PAC: direct only for explicitly listed internal destinations.",
        f'  if ({bypass}) return "DIRECT";',
        f'  return "PROXY {gateway}:80; PROXY {secondary_gateway}:80; DIRECT";',
        "}",
        "",
    ))


def pac_improvements(text: str) -> list[str]:
    """Return safe, explainable simplification suggestions without changing code."""
    source = text or ""
    suggestions: list[str] = []
    if re.search(r"\b(?:dnsResolve|isResolvable|isInNet)\s*\(", source):
        suggestions.append("Replace DNS/network helper calls with host-pattern rules where possible; they can slow PAC evaluation.")
    if source.count("return ") > 3:
        suggestions.append("Group related host conditions before a return statement to make rule order easier to review.")
    if "${GATEWAY" in source and "${SECONDARY_GATEWAY" not in source:
        suggestions.append("Add a secondary gateway followed by DIRECT so clients retain a bounded failover path.")
    if not re.search(r"\bisPlainHostName\s*\(", source):
        suggestions.append("Consider handling plain internal host names explicitly before proxying external traffic.")
    if not suggestions:
        suggestions.append("PAC structure is already compact. Test representative internal, SaaS, and internet URLs before rollout.")
    return suggestions


def lint_pac(text: str, *, max_bytes: int = 256 * 1024) -> list[PacFinding]:
    """Perform bounded static validation using PAC/Zscaler authoring guidance."""
    source = text or ""
    findings: list[PacFinding] = []
    size = len(source.encode("utf-8"))
    if size > max_bytes:
        findings.append(PacFinding("error", f"PAC is {size:,} bytes; ZIA's default upload limit is {max_bytes:,} bytes."))
    if not re.search(r"\bfunction\s+FindProxyForURL\s*\(\s*url\s*,\s*host\s*\)", source):
        findings.append(PacFinding("error", "Missing required FindProxyForURL(url, host) function."))
    if source.count("{") != source.count("}"):
        findings.append(PacFinding("error", "Unbalanced braces in PAC JavaScript."))
    if not re.search(r"\breturn\s+[\"'](?:PROXY|DIRECT|SOCKS)", source):
        findings.append(PacFinding("error", "No quoted PAC return statement was found."))
    for line, value in enumerate(source.splitlines(), 1):
        if re.search(r"\breturn\s+(?:PROXY|DIRECT|SOCKS)\b", value):
            findings.append(PacFinding("error", "PAC return values must be enclosed in double quotes.", line))
        if re.search(r"\b(?:dnsResolve|isResolvable|isInNet)\s*\(", value):
            findings.append(PacFinding("warning", "DNS/network PAC helper can delay Client Connector; avoid it unless required.", line))
        if re.search(r"\breturn\s+[\"']DIRECT[\"']\s*;?\s*$", value) and line < len(source.splitlines()):
            findings.append(PacFinding("warning", "An early unconditional DIRECT return makes later rules unreachable.", line))
    if "${GATEWAY" in source and "${SECONDARY_GATEWAY" not in source:
        findings.append(PacFinding("warning", "Primary gateway is configured without a secondary gateway fallback."))
    for variable in pac_variables(source):
        if variable not in PAC_VARIABLES and not variable.startswith(("GATEWAY.", "SECONDARY_GATEWAY.")):
            findings.append(PacFinding("info", f"Custom variable ${{{variable}}} requires a value before deployment."))
    if not findings:
        findings.append(PacFinding("success", "Static PAC checks passed."))
    return findings


def preview_pac_decision(text: str, url: str, host: str | None = None) -> dict[str, str]:
    """Preview common shExpMatch(host, pattern) rules; never executes JavaScript."""
    from fnmatch import fnmatchcase
    from urllib.parse import urlparse

    source = text or ""
    parsed = urlparse(url if "://" in url else f"https://{url}")
    resolved_host = (host or parsed.hostname or "").lower()
    for match in re.finditer(r"shExpMatch\s*\(\s*host\s*,\s*[\"']([^\"']+)[\"']\s*\)\s*\)?\s*(?:\|\|\s*shExpMatch\s*\(\s*host\s*,\s*[\"']([^\"']+)[\"']\s*\)\s*\)?\s*)*\{?\s*return\s+[\"']([^\"']+)[\"']", source):
        patterns = [pattern for pattern in match.groups()[:-1] if pattern]
        if any(fnmatchcase(resolved_host, pattern.lower()) for pattern in patterns):
            return {"host": resolved_host, "decision": match.group(3), "reason": f"Matched host pattern: {', '.join(patterns)}"}
    returns = re.findall(r"\breturn\s+[\"']([^\"']+)[\"']", source)
    return {"host": resolved_host, "decision": returns[-1] if returns else "UNRESOLVED", "reason": "Default return preview; JavaScript execution is intentionally disabled."}


def zia_pac_payload(name: str, content: str, commit_message: str = "") -> dict[str, str]:
    """Build the documented ZIA custom PAC payload without sending it."""
    return {"name": str(name).strip(), "pacContent": content, "pacCommitMessage": str(commit_message).strip()}


def zcc_pac_patch(profile: dict, content: str, pac_url: str = "") -> dict:
    """Return a copy of a documented forwarding-profile payload with PAC updated."""
    payload = dict(profile or {})
    actions = [dict(item) for item in payload.get("forwardingProfileActions", [])]
    if not actions:
        actions = [{}]
    for action in actions:
        action["customPac"] = content
        proxy = dict(action.get("systemProxyData", {}))
        proxy["enablePAC"] = 1
        if pac_url:
            proxy["pacURL"] = pac_url
        action["systemProxyData"] = proxy
    payload["forwardingProfileActions"] = actions
    return payload
