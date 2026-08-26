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
RELATIVE_METHOD_URL = re.compile(
    r'\b(GET|POST|PUT|DELETE|PATCH|HEAD|OPTIONS)\s+(/[^\s<>"]+)',
    re.IGNORECASE,
)

# Some Automation Hub operation pages expose only the path in their searchable
# content. These are the documented OneAPI prefixes for those products; keeping
# the mapping explicit prevents a relative path from ever becoming an arbitrary
# host request.
ONEAPI_PRODUCT_BASES = {
    "bi": "https://api.zsapi.net/bi",
    "easm": "https://api.zsapi.net/easm/easm-ui/v1",
    "zcc": "https://api.zsapi.net/zcc",
    "zcell": "https://api.zsapi.net/zcell/config",
    "zcloudconnector": "https://api.zsapi.net/ztw/api/v1",
    "zdx": "https://api.zsapi.net/zdx",
    "zia": "https://api.zsapi.net/zia/api/v1",
    "zid": "https://api.zsapi.net/ziam/admin/api/v1",
    "zpa": "https://api.zsapi.net/zpa",
}
GRAPHQL_ENDPOINT = "https://api.zsapi.net/zins/graphql"
GRAPHQL_QUERY = re.compile(r"\bQUERY\s+(query\b.+?)\s+RESPONSE\b", re.IGNORECASE | re.DOTALL)


def fetch_page(page: int) -> dict:
    params = {**QUERY, "page": str(page)}
    request = urllib.request.Request(
        f"{SEARCH_URL}?{urllib.parse.urlencode(params)}",
        headers={"User-Agent": "ZS-API-Client catalog builder"},
    )
    with urllib.request.urlopen(request, timeout=60) as response:
        return json.load(response)


def endpoint_from(document: dict) -> dict | None:
    # The search index occasionally contains generated category pages under a
    # duplicated /docs/docs/ path. They repeat a child operation and are not
    # executable reference pages themselves.
    if "/docs/docs/" in str(document.get("url", "")):
        return None
    content = document.get("content", "")
    match = METHOD_URL.search(content)
    if match:
        method, url = match.groups()
    else:
        relative = RELATIVE_METHOD_URL.search(content)
        base = product_base(document)
        if not relative or not base:
            return None
        method, path = relative.groups()
        url = base.rstrip("/") + "/" + path.lstrip("/")
    return {
        "product": document.get("product") or "other",
        "category": category_from(document),
        "name": document.get("title") or document.get("description") or url,
        "method": method.upper(),
        "url": url.rstrip(".,;"),
        "description": document.get("description") or "",
        "doc_url": document.get("url") or "",
    }


def product_base(document: dict) -> str:
    product = document.get("product") or ""
    if product == "ai-security":
        path = str(document.get("file_path", "")).lower()
        return "https://api.zsapi.net/aisecurity/aispm/v1" if "aispm" in path else "https://api.zsapi.net/aisecurity/airt"
    return ONEAPI_PRODUCT_BASES.get(product, "")


def graphql_entry_from(document: dict) -> dict | None:
    """Extract a documented ZInsights query or schema type without inventing fields."""
    path = str(document.get("file_path", ""))
    if document.get("product") != "zinsights" or "/graphql-api-references/zinsights/" not in path:
        return None
    if "/domains/" in path and "/queries/" in path:
        kind = "query"
        domain = path.split("/domains/", 1)[1].split("/", 1)[0].replace("-", " ").title()
    elif "/types/" in path:
        kind = "type"
        domain = "Schema"
    else:
        return None
    content = str(document.get("content", ""))
    query_match = GRAPHQL_QUERY.search(content) if kind == "query" else None
    details = "" if content.startswith("Start automating with Zscaler") else content
    title = str(document.get("title") or "")
    name = path.rsplit("/", 1)[-1] if not title or title == "Zscaler Automation Hub" else title
    return {
        "product": "zinsights",
        "kind": kind,
        "domain": domain,
        "name": name,
        "description": document.get("description") or "",
        "details": details,
        "query": query_match.group(1).strip() if query_match else "",
        "endpoint": GRAPHQL_ENDPOINT,
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

    candidates = [endpoint for doc in documents if (endpoint := endpoint_from(doc))]
    endpoints_by_operation = {}
    for endpoint in candidates:
        key = (endpoint["method"], endpoint["url"])
        current = endpoints_by_operation.get(key)
        if current is None or len(endpoint["name"]) > len(current["name"]):
            endpoints_by_operation[key] = endpoint
    endpoints = list(endpoints_by_operation.values())
    endpoints.sort(key=lambda item: (item["product"], item["category"], item["name"], item["method"]))
    output = Path(__file__).resolve().parents[1] / "data" / "zscaler_api_catalog.json"
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(json.dumps(endpoints, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Wrote {len(endpoints)} endpoints from {len(documents)} API reference pages to {output}")
    if len(endpoints) < 1000:
        print("Refusing an unexpectedly incomplete catalog", file=sys.stderr)
        return 1
    graphql_entries = [entry for document in documents if (entry := graphql_entry_from(document))]
    graphql_entries.sort(key=lambda item: (item["kind"], item["domain"], item["name"]))
    graphql_output = output.with_name("zscaler_graphql_catalog.json")
    graphql_output.write_text(json.dumps(graphql_entries, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    executable_queries = sum(bool(entry["query"]) for entry in graphql_entries if entry["kind"] == "query")
    print(f"Wrote {len(graphql_entries)} ZInsights GraphQL entries ({executable_queries} documented query examples) to {graphql_output}")
    if len(graphql_entries) < 100 or sum(entry["kind"] == "query" for entry in graphql_entries) < 28:
        print("Refusing an unexpectedly incomplete GraphQL catalog", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
