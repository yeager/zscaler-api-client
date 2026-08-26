# Release smoke tests

Run these checks against the exact archive attached to the GitHub release. Do
not enter production secrets while testing; use a dedicated least-privilege
tenant or the bundled catalog-only mode.

## Before opening the application

1. Download the archive and verify its SHA-256 value against `SHA256SUMS`.
2. Verify the GitHub build attestation:

   ```bash
   gh attestation verify ARCHIVE -R yeager/zscaler-api-client
   ```

3. Keep the matching `*.spdx.json` SBOM with the test record.

## Windows

1. Extract `ZS-API-Client-windows-x64.zip` and start `ZS API Client.exe`.
2. Confirm the welcome wizard follows the system language and switches between
   Basic and Advanced modes.
3. Load a guided AI example and confirm it stops at request preview rather
   than issuing a request.
4. Open Settings, test local AI mode, and confirm **Clear AI key** clears its
   field.
5. In Advanced network settings, confirm safe-read retries, maximum retry
   count, and maximum wait can be changed. Confirm no retry option enables
   automatic write retries.
6. Open Privacy settings and confirm external obfuscation is selected by
   default. Verify the synthetic preview hides the example user, IP, host,
   tenant, object ID, and secret. Export a response as JSON and PNG and confirm
   neither contains the original identifiers. Rotate the pseudonym key only
   with synthetic data and confirm the preview changes.
7. Create a second environment without entering credentials. Confirm it has
   no copied keychain secrets, switching environments clears request/response
   data, and history from the first environment cannot be loaded.
8. Open Operations Center in Basic mode and confirm only the active environment
   is available. In Advanced mode, select the explicit cross-tenant overview
   and confirm reports and alert exports identify their data scope.
9. In Policy Twin, analyze the bundled example and confirm the graph, decision
   explanation, conflict findings, and blast-radius cards agree. In Advanced
   mode, save a synthetic snapshot, change one rule, select the snapshot as the
   baseline, and verify the changed-rule count. Export JSON and PNG and confirm
   synthetic rule/resource names are pseudonymized.
10. Open a synthetic REST or GraphQL response containing users, devices,
    applications, and indicators. In Incident investigation, include the current
    response and confirm the entity graph, filters, potential-path highlighting,
    and correlated signals agree with the source tree. Export incident evidence
    and confirm all labels, identities, addresses, hosts, and IDs are pseudonymized.
11. In Continuous assurance, evaluate a synthetic failure and unconditional
    allow policy, save a tenant-scoped baseline, correct both inputs, and confirm
    the score delta. Export signed evidence, verify it offline, alter one payload
    value, and confirm verification fails. Confirm the private Ed25519 key is
    present only in the system keychain and never in the package or settings.
12. Create a local scheduled report for one environment and confirm its JSON
   contains only that environment's retained history and a stable pseudonymized
   scope ID.
13. Close and reopen the app without a crash.

## macOS

1. Extract `ZS-API-Client-macos-x64.zip`, move the app to Applications, and
   open it through Finder.
2. Record Gatekeeper behavior for the release's signing state.
3. Repeat the wizard, guided-AI-preview, Settings, and restart checks above.
4. Confirm the selected system/app language is applied.

## Record

For each platform, record the release tag, archive SHA-256, operating-system
version, test date, tester, pass/fail result, and any crash or console output.
Do not include API tokens, tenant names, or client secrets in the record.
