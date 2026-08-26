# Secure integration handoffs

The Operations Center integration workspace can export retained, tenant-scoped
local request evidence as JSON Lines, CEF, or LEEF. Every record is normalized,
bounded to the latest 5,000 local events, masked, and processed by the configured
identifier-obfuscation policy before it is written. Export does not transmit it.

The Terraform review handoff is deliberately non-executable. Its ZIP archive
contains a README, a masked source-policy snapshot and a manifest with
`apply_enabled: false` plus an integrity hash. An administrator must separately
run an official/reviewed terraformer, compare output, scan generated material for
secrets, review `terraform plan`, and approve any external apply.

The MCP manifest describes only local catalog search, operation details, masked
response inspection and masked evidence export. Tenant requests, credentials,
shell execution, writes and remediation are disabled. The manifest neither
installs nor starts an MCP server; the selected implementation and its actual
permissions must be reviewed independently.
