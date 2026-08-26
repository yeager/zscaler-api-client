import copy
import unittest

from evidence_signing import EVIDENCE_SCHEMA, generate_private_key, public_key, sign_evidence, verify_evidence


class EvidenceSigningTests(unittest.TestCase):
    def test_ed25519_package_verifies_without_private_key(self):
        private = generate_private_key()
        package = sign_evidence({"score": 92, "controls": [{"code": "LOCAL-GV-01", "status": "pass"}]}, private, "2026-08-26T20:00:00Z")
        self.assertEqual(EVIDENCE_SCHEMA, package["schema"])
        self.assertEqual(public_key(private), package["public_key"])
        self.assertNotIn(private, str(package))
        result = verify_evidence(package)
        self.assertTrue(result["valid"]); self.assertEqual("verified", result["reason"])

    def test_payload_and_metadata_tampering_are_rejected(self):
        package = sign_evidence({"score": 92}, generate_private_key(), "2026-08-26T20:00:00Z")
        changed_payload = copy.deepcopy(package); changed_payload["payload"]["score"] = 100
        self.assertEqual("payload_digest_mismatch", verify_evidence(changed_payload)["reason"])
        changed_metadata = copy.deepcopy(package); changed_metadata["created"] = "2027-01-01T00:00:00Z"
        self.assertEqual("signature_invalid", verify_evidence(changed_metadata)["reason"])
        unsigned_metadata = copy.deepcopy(package); unsigned_metadata["trusted"] = True
        self.assertEqual("unsupported_package", verify_evidence(unsigned_metadata)["reason"])
        changed_signature = copy.deepcopy(package); changed_signature["signature"] = changed_signature["signature"][:-2] + "AA"
        self.assertFalse(verify_evidence(changed_signature)["valid"])


if __name__ == "__main__":
    unittest.main()
