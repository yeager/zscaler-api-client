# Continuous assurance and signed evidence

ZS API Client evaluates a small, transparent local evidence baseline. It does
not claim certification, audit coverage, or authoritative tenant state. Each
control shows the exact retained facts used, its status, a recommendation, and
navigational mappings to:

- [NIST Cybersecurity Framework 2.0](https://www.nist.gov/publications/nist-cybersecurity-framework-csf-20)
- [CISA Zero Trust Maturity Model 2.0](https://www.cisa.gov/resources-tools/resources/zero-trust-maturity-model)

The mappings identify relevant functions or pillars. They are not a substitute
for an organization-specific profile, legal interpretation, auditor judgment,
or evidence from authoritative Zscaler product telemetry.

## Evidence lifecycle

1. Evaluations run locally from the selected environment's retained request and
   audit history and, optionally, the proposed policy in Policy diff.
2. Explicitly saved baselines remain tenant-scoped in local application
   settings. Cross-tenant baselines cannot be saved.
3. External exports use the configured identifier pseudonymization boundary.
4. Signed exports use Ed25519. The private key is created and retained only in
   the operating-system keychain. The package contains the masked payload,
   digest, signature, creation time, algorithm, schema, and public key.
5. Verification is offline and requires no credential, tenant connection, or
   private key. Payload or signed-metadata changes invalidate the package.

Rotating the signing key changes the identity used for future packages.
Previously exported packages remain verifiable because each contains its public
key. Trust in that public key or fingerprint must still be established through
an organizational process outside the application.
