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
6. Close and reopen the app without a crash.

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
