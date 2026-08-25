#!/usr/bin/env python3
"""Generate a compact SPDX 2.3 SBOM for a packaged desktop artifact."""

from __future__ import annotations

import argparse
import hashlib
import json
import subprocess
import sys
from importlib.metadata import distributions
from datetime import datetime, timezone
from pathlib import Path


def installed_packages() -> list[dict[str, str]]:
    """Return the exact Python packages installed by the build environment."""
    try:
        result = subprocess.run(
            [sys.executable, "-m", "pip", "list", "--format=json"],
            check=True, capture_output=True, text=True,
        )
        packages = json.loads(result.stdout)
    except (OSError, subprocess.CalledProcessError, json.JSONDecodeError):
        packages = [
            {"name": distribution.metadata["Name"], "version": distribution.version}
            for distribution in distributions()
            if distribution.metadata.get("Name")
        ]
    return sorted(({"name": item["name"], "version": item["version"]} for item in packages), key=lambda item: item["name"].lower())


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as artifact:
        for block in iter(lambda: artifact.read(1024 * 1024), b""):
            digest.update(block)
    return digest.hexdigest()


def build_document(artifact: Path) -> dict:
    artifact_hash = sha256(artifact)
    package_id = "SPDXRef-ZS-API-Client"
    packages = [{
        "SPDXID": package_id,
        "name": "ZS API Client",
        "versionInfo": "NOASSERTION",
        "downloadLocation": "NOASSERTION",
        "filesAnalyzed": False,
        "checksums": [{"algorithm": "SHA256", "checksumValue": artifact_hash}],
        "licenseConcluded": "GPL-3.0-or-later",
        "licenseDeclared": "GPL-3.0-or-later",
        "copyrightText": "Copyright (C) 2026 Daniel Nylander",
    }]
    relationships = []
    for index, dependency in enumerate(installed_packages(), 1):
        dependency_id = f"SPDXRef-Python-{index}"
        packages.append({
            "SPDXID": dependency_id,
            "name": dependency["name"],
            "versionInfo": dependency["version"],
            "downloadLocation": "NOASSERTION",
            "filesAnalyzed": False,
            "licenseConcluded": "NOASSERTION",
            "licenseDeclared": "NOASSERTION",
            "copyrightText": "NOASSERTION",
        })
        relationships.append({"spdxElementId": package_id, "relationshipType": "DEPENDS_ON", "relatedSpdxElement": dependency_id})
    return {
        "spdxVersion": "SPDX-2.3",
        "dataLicense": "CC0-1.0",
        "SPDXID": "SPDXRef-DOCUMENT",
        "name": f"ZS API Client {artifact.name}",
        "documentNamespace": f"https://github.com/yeager/zscaler-api-client/sbom/{artifact_hash}",
        "creationInfo": {
            "created": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
            "creators": ["Tool: scripts/generate_spdx_sbom.py"],
        },
        "packages": packages,
        "relationships": relationships,
    }


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--artifact", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    args = parser.parse_args()
    if not args.artifact.is_file():
        parser.error(f"artifact does not exist: {args.artifact}")
    args.output.write_text(json.dumps(build_document(args.artifact), indent=2) + "\n", encoding="utf-8")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
