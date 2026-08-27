#!/usr/bin/env python3
"""Fetch and normalize the public Zscaler Cloud Enforcement Node catalog."""

from __future__ import annotations

import json
from datetime import datetime, timezone
from pathlib import Path
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
SOURCE = "https://config.zscaler.com/api/zscaler.net/cenr/json"


def flatten(payload: dict) -> list[dict[str, str]]:
    records: list[dict[str, str]] = []
    for continent_key, cities in payload.get("zscaler.net", {}).items():
        if not isinstance(cities, dict):
            continue
        for city_key, endpoints in cities.items():
            for endpoint in endpoints if isinstance(endpoints, list) else []:
                if isinstance(endpoint, dict):
                    records.append({"continent": str(continent_key).replace("continent : ", "", 1), "city": str(city_key).replace("city : ", "", 1), **{key: str(endpoint.get(key) or "") for key in ("range", "hostname", "vpn", "gre", "ext", "latitude", "longitude")}})
    return records


def main() -> None:
    request = Request(SOURCE, headers={"User-Agent": "ZS-API-Client catalog updater"})
    with urlopen(request, timeout=30) as response:
        payload = json.load(response)
    index = {"source": SOURCE, "retrieved_at": datetime.now(timezone.utc).isoformat(), "data_centers": flatten(payload), "svpn_ips": payload.get("svpnIPs", [])}
    destination = ROOT / "data" / "zscaler_config_cenr.json"
    destination.write_text(json.dumps(index, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Wrote {len(index['data_centers'])} data-center endpoint records to {destination}")


if __name__ == "__main__":
    main()
