#!/usr/bin/env python3
# SPDX-License-Identifier: GPL-3.0-or-later
"""Offline Ed25519 evidence packages; private keys are supplied by the keychain layer."""

from __future__ import annotations

import base64
import hashlib
import json
from datetime import datetime, timezone
from typing import Any

from cryptography.exceptions import InvalidSignature
from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PrivateKey, Ed25519PublicKey
from cryptography.hazmat.primitives.serialization import Encoding, NoEncryption, PrivateFormat, PublicFormat


EVIDENCE_SCHEMA = "https://github.com/yeager/zscaler-api-client/schemas/signed-evidence/v1"


def canonical_bytes(value: Any) -> bytes:
    return json.dumps(value, sort_keys=True, separators=(",", ":"), ensure_ascii=False).encode("utf-8")


def generate_private_key() -> str:
    raw = Ed25519PrivateKey.generate().private_bytes(Encoding.Raw, PrivateFormat.Raw, NoEncryption())
    return base64.b64encode(raw).decode("ascii")


def public_key(private_key: str) -> str:
    key = Ed25519PrivateKey.from_private_bytes(base64.b64decode(private_key, validate=True))
    raw = key.public_key().public_bytes(Encoding.Raw, PublicFormat.Raw)
    return base64.b64encode(raw).decode("ascii")


def sign_evidence(payload: Any, private_key: str, created: str | None = None) -> dict[str, Any]:
    """Create a portable package whose payload and metadata verify offline."""
    created_at = created or datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z")
    payload_hash = hashlib.sha256(canonical_bytes(payload)).hexdigest()
    signed = {
        "schema": EVIDENCE_SCHEMA,
        "algorithm": "Ed25519",
        "created": created_at,
        "payload_sha256": payload_hash,
        "public_key": public_key(private_key),
        "payload": payload,
    }
    key = Ed25519PrivateKey.from_private_bytes(base64.b64decode(private_key, validate=True))
    signed["signature"] = base64.b64encode(key.sign(canonical_bytes(signed))).decode("ascii")
    return signed


def verify_evidence(package: Any) -> dict[str, Any]:
    """Verify schema, payload digest, public key, and Ed25519 signature."""
    if not isinstance(package, dict):
        return {"valid": False, "reason": "package_not_object"}
    required = {"schema", "algorithm", "created", "payload_sha256", "public_key", "payload", "signature"}
    if set(package) != required or package.get("schema") != EVIDENCE_SCHEMA or package.get("algorithm") != "Ed25519":
        return {"valid": False, "reason": "unsupported_package"}
    if hashlib.sha256(canonical_bytes(package["payload"])).hexdigest() != package["payload_sha256"]:
        return {"valid": False, "reason": "payload_digest_mismatch"}
    signed = {key: package[key] for key in ("schema", "algorithm", "created", "payload_sha256", "public_key", "payload")}
    try:
        key = Ed25519PublicKey.from_public_bytes(base64.b64decode(package["public_key"], validate=True))
        key.verify(base64.b64decode(package["signature"], validate=True), canonical_bytes(signed))
    except (ValueError, TypeError, InvalidSignature):
        return {"valid": False, "reason": "signature_invalid"}
    return {"valid": True, "reason": "verified", "created": package["created"], "payload_sha256": package["payload_sha256"], "public_key": package["public_key"]}
