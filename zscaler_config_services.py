"""Offline index helpers for Zscaler Configuration Center data."""

from __future__ import annotations

import ipaddress
import json
import re
from pathlib import Path
from typing import Iterable


CONFIG_SOURCE_URL = "https://config.zscaler.com/api/zscaler.net/cenr/json"
_IP_OR_CIDR = re.compile(r"(?<![\w.:])(?:\d{1,3}\.){3}\d{1,3}(?:/\d{1,2})?(?![\w.])")
_HOSTNAME = re.compile(r"\b[a-z0-9][a-z0-9.-]*\.zscaler\.net\b", re.IGNORECASE)


def flatten_cenr(payload: dict) -> list[dict[str, str]]:
    """Flatten the official cloud/continent/city structure into searchable rows."""
    cloud = payload.get("zscaler.net", {}) if isinstance(payload, dict) else {}
    records: list[dict[str, str]] = []
    for continent_key, cities in cloud.items():
        if not isinstance(cities, dict):
            continue
        continent = str(continent_key).replace("continent : ", "", 1)
        for city_key, endpoints in cities.items():
            if not isinstance(endpoints, list):
                continue
            city = str(city_key).replace("city : ", "", 1)
            for endpoint in endpoints:
                if not isinstance(endpoint, dict):
                    continue
                records.append({
                    "continent": continent, "city": city,
                    "range": str(endpoint.get("range") or ""),
                    "hostname": str(endpoint.get("hostname") or ""),
                    "vpn": str(endpoint.get("vpn") or ""),
                    "gre": str(endpoint.get("gre") or ""),
                    "ext": str(endpoint.get("ext") or ""),
                    "latitude": str(endpoint.get("latitude") or ""),
                    "longitude": str(endpoint.get("longitude") or ""),
                })
    return records


def load_cenr_index(path: str | Path) -> dict:
    """Load a generated index and tolerate the raw official payload for recovery."""
    payload = json.loads(Path(path).read_text(encoding="utf-8"))
    if isinstance(payload, dict) and isinstance(payload.get("data_centers"), list):
        return payload
    return {"source": CONFIG_SOURCE_URL, "data_centers": flatten_cenr(payload)}


def search_cenr(index: dict, query: str) -> list[dict[str, str]]:
    """Search all indexed location, hostname, CIDR and virtual-IP fields."""
    needle = str(query or "").strip().lower()
    records = index.get("data_centers", []) if isinstance(index, dict) else []
    if not needle:
        return list(records)
    return [row for row in records if isinstance(row, dict) and needle in " ".join(str(row.get(key, "")) for key in ("continent", "city", "range", "hostname", "vpn", "gre", "ext")).lower()]


def _ip_matches(value: str, row: dict[str, str]) -> bool:
    try:
        candidate = ipaddress.ip_address(value)
        network = ipaddress.ip_network(row.get("range", ""), strict=False)
        return candidate in network
    except ValueError:
        return False


def pac_config_references(text: str, index: dict) -> dict[int, list[dict[str, str]]]:
    """Map explicit Zscaler endpoint names or IPs in PAC code to index records."""
    by_line: dict[int, list[dict[str, str]]] = {}
    records = index.get("data_centers", []) if isinstance(index, dict) else []
    for number, line in enumerate((text or "").splitlines(), 1):
        needles = set(_HOSTNAME.findall(line)) | set(_IP_OR_CIDR.findall(line))
        matches: list[dict[str, str]] = []
        for needle in needles:
            normalized = needle.lower()
            for row in records:
                if not isinstance(row, dict):
                    continue
                fields = (str(row.get("hostname", "")).lower(), str(row.get("vpn", "")).lower())
                if normalized in fields or _ip_matches(needle.split("/", 1)[0], row):
                    if row not in matches:
                        matches.append(row)
        if matches:
            by_line[number] = matches
    return by_line


def pac_line_explanation(line: str, records: Iterable[dict[str, str]] = ()) -> str:
    """Create a concise help balloon for a PAC source line."""
    text = str(line or "").strip()
    if not text:
        explanation = "Blank line: use it to separate rule groups for review."
    elif text.startswith("//"):
        explanation = "Comment: documents intent and is ignored by PAC execution."
    elif "FindProxyForURL" in text:
        explanation = "Required PAC entry point. Browsers call it with the URL and host and expect a proxy decision."
    elif "shExpMatch" in text:
        explanation = "Wildcard host comparison. Keep patterns specific so unintended destinations are not bypassed."
    elif "isPlainHostName" in text:
        explanation = "Matches single-label internal host names. This is commonly evaluated before external proxy rules."
    elif "DIRECT" in text and "return" in text:
        explanation = "DIRECT bypasses Zscaler for this matching destination. Confirm that bypass is intentional and scoped."
    elif "PROXY" in text and "return" in text:
        explanation = "PROXY sends matching traffic to the listed service edge. A secondary gateway and DIRECT provide controlled fallback."
    elif "return" in text:
        explanation = "PAC return decision. Return values must be quoted and rule order determines which decision wins."
    elif "if" in text:
        explanation = "Conditional PAC rule. Earlier matching conditions take precedence over later rules."
    else:
        explanation = "PAC JavaScript. Keep expressions deterministic and avoid slow DNS helpers unless specifically required."
    locations = list(records)
    if locations:
        names = ", ".join(f"{row.get('city', 'Unknown')} ({row.get('continent', '')})" for row in locations[:3])
        explanation += f" Zscaler Configuration match: {names}."
    return explanation
