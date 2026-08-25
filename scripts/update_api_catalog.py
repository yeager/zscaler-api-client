#!/usr/bin/env python3
"""Build the bundled endpoint catalog from Zscaler Automation Hub."""

import json
import re
import sys
import urllib.parse
import urllib.request
from pathlib import Path


SEARCH_URL = (
    "https://automate.zscaler.com/api/collections/"
    "automation-hub-search-docs-prod/documents/search"
)
QUERY = {
    "q": "*",
    "query_by": "title,description,content,headings,search_keywords,api_endpoint",
    "filter_by": "category:=`API Reference`",
    "per_page": "250",
}
METHOD_URL = re.compile(
    r"\b(GET|POST|PUT|DELETE|PATCH|HEAD|OPTIONS)\s+"
    r"(https://[^\s<>\"]+)",
    re.IGNORECASE,
)


def fetch_page(page: int) -> dict:
    params = {**QUERY, "page": str(page)}
    request = urllib.request.Request(
        f"{SEARCH_URL}?{urllib.parse.urlencode(params)}",
        headers={"User-Agent": "ZS-API-Client catalog builder"},
    )
    with urllib.request.urlopen(request, timeout=60) as response:
        return json.load(response)


def endpoint_from(document: dict) -> dict | None:
    content = document.get("content", "")
    match = METHOD_URL.search(content)
    if not match:
        return None
    method, url = match.groups()
    return {
        "product": document.get("product") or "other",
        "category": category_from(document),
        "name": document.get("title") or document.get("description") or url,
        "method": method.upper(),
        "url": url.rstrip(".,;"),
        "description": document.get("description") or "",
        "doc_url": document.get("url") or "",
    }


def category_from(document: dict) -> str:
    path = document.get("file_path", "").strip("/").split("/")
    try:
        product_index = path.index(document.get("product", ""))
    except ValueError:
        return "Other"
    if product_index + 1 < len(path) - 1:
        return path[product_index + 1].replace("-", " ").title()
    return "Other"


def main() -> int:
    first = fetch_page(1)
    found = int(first.get("found", 0))
    pages = (found + int(QUERY["per_page"]) - 1) // int(QUERY["per_page"])
    documents = [hit["document"] for hit in first.get("hits", [])]
    for page in range(2, pages + 1):
        documents.extend(hit["document"] for hit in fetch_page(page).get("hits", []))

    endpoints = [endpoint for doc in documents if (endpoint := endpoint_from(doc))]
    endpoints.sort(key=lambda item: (item["product"], item["category"], item["name"], item["method"]))
    output = Path(__file__).resolve().parents[1] / "data" / "zscaler_api_catalog.json"
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(json.dumps(endpoints, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Wrote {len(endpoints)} endpoints from {len(documents)} API reference pages to {output}")
    if len(endpoints) < 900:
        print("Refusing an unexpectedly incomplete catalog", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
