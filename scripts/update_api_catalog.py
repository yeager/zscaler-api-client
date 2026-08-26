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
PREVIEW_PARAMETER = re.compile(
    r"([A-Za-z][A-Za-z0-9_.\[\]-]*)\s+—\s+(query|path|header|cookie)\b",
    re.IGNORECASE,
)
PARAMETER_TYPE = re.compile(
    r"\b(string|boolean|integer|number|object|array|int32|int64|float|double|date|date-time|binary)(\[\])?\b",
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
    endpoint = {
        "product": document.get("product") or "other",
        "category": category_from(document),
        "name": document.get("title") or document.get("description") or url,
        "method": method.upper(),
        "url": url.rstrip(".,;"),
        "description": document.get("description") or "",
        "doc_url": document.get("url") or "",
    }
    endpoint.update(request_metadata_from(document))
    return endpoint


def _json_value_after(text: str, marker: str) -> object | None:
    """Decode the first balanced JSON value after the final preview marker."""
    marker_at = text.rfind(marker)
    if marker_at < 0:
        return None
    tail = text[marker_at + len(marker):].lstrip()
    decoder = json.JSONDecoder()
    for position, character in enumerate(tail):
        if character not in "[{":
            continue
        try:
            value, _ = decoder.raw_decode(tail[position:])
            return value
        except json.JSONDecodeError:
            continue
    return None


def request_metadata_from(document: dict) -> dict:
    """Extract only explicit Automation Hub request-preview metadata.

    Operation pages expose a flattened, interactive ``CURL Request`` preview.
    Its location labels and balanced JSON example are substantially safer than
    guessing parameters from prose or response schemas.
    """
    content = str(document.get("content") or "")
    result = {"parameters": [], "response_codes": []}
    if document.get("updated_at"):
        result["documentation_updated_at"] = document["updated_at"]

    response_section = content.split("Responses", 1)[1][:180] if "Responses" in content else ""
    result["response_codes"] = list(dict.fromkeys(re.findall(r"\b[1-5]\d\d\b", response_section)))
    if "CURL Request" not in content:
        return result

    preview = content.rsplit("CURL Request", 1)[1]
    request_section = content.split("Request", 1)[1].split("Responses", 1)[0] if "Request" in content else ""
    preview_parameters = list(PREVIEW_PARAMETER.finditer(preview))
    for index, match in enumerate(preview_parameters):
        name, location = match.group(1), match.group(2).lower()
        definition = re.search(rf"\b{re.escape(name)}\s+", request_section)
        parameter_type, required, default, description = "", False, "", ""
        if definition:
            next_definition = len(request_section)
            for later in preview_parameters[index + 1:]:
                candidate = re.search(rf"\b{re.escape(later.group(1))}\s+", request_section[definition.end():])
                if candidate:
                    next_definition = definition.end() + candidate.start()
                    break
            fragment = request_section[definition.end():next_definition]
            type_match = PARAMETER_TYPE.match(fragment.strip())
            if type_match:
                parameter_type = type_match.group(1).lower() + (type_match.group(2) or "")
                details = fragment.strip()[type_match.end():].strip()
                required = bool(re.match(r"required\b", details, re.IGNORECASE))
                if required:
                    details = re.sub(r"^required\b", "", details, flags=re.IGNORECASE).strip()
                default_match = re.search(r"\bDefault value:\s*([^\s]+)", details, re.IGNORECASE)
                if default_match:
                    default = default_match.group(1).strip(".,")
                    details = details[:default_match.start()].strip()
                description = re.sub(r"\s+", " ", details).strip()[:600]
        result["parameters"].append({
            "name": name,
            "in": location,
            "type": parameter_type,
            "required": required or location == "path",
            "default": default,
            "description": description,
        })

    query_names = {
        str(parameter["name"]).lower(): str(parameter["name"])
        for parameter in result["parameters"] if parameter["in"] == "query"
    }
    pagination = None
    if "page" in query_names and any(name in query_names for name in ("pagesize", "page_size", "size", "limit")):
        size_key = next(name for name in ("pagesize", "page_size", "size", "limit") if name in query_names)
        pagination = {"mode": "page", "position_param": query_names["page"], "size_param": query_names[size_key], "start": 1}
    elif "offset" in query_names and "limit" in query_names:
        pagination = {"mode": "offset", "position_param": query_names["offset"], "size_param": query_names["limit"], "start": 0}
    else:
        cursor_key = next((name for name in ("pageid", "cursor", "pagetoken", "page_token") if name in query_names), None)
        response_section = content.split("Responses", 1)[1] if "Responses" in content else ""
        next_field = next((field for field in ("nextPage", "nextPageId", "nextCursor", "next_page", "next_cursor") if re.search(rf"\b{field}\b", response_section)), None)
        if cursor_key and next_field:
            size_key = next((name for name in ("pagesize", "page_size", "size", "limit") if name in query_names), None)
            pagination = {"mode": "cursor", "position_param": query_names[cursor_key], "next_field": next_field}
            if size_key:
                pagination["size_param"] = query_names[size_key]
    if pagination:
        result["pagination"] = pagination

    body = _json_value_after(preview, " Body ")
    if body is not None:
        result["request_body"] = body
        request_lower = request_section.lower()
        if "multipart/form-data" in request_lower:
            result["request_content_type"] = "multipart/form-data"
        elif "application/x-www-form-urlencoded" in request_lower:
            result["request_content_type"] = "application/x-www-form-urlencoded"
        else:
            result["request_content_type"] = "application/json"
    return result


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
