# Exposure, access and investigation notebook

The Exposure & access workspace recursively reads the complete current REST or
GraphQL body. It highlights only explicit evidence such as internet-facing flags,
high/critical risk fields, vulnerability/threat fields and broad or write-capable
roles, scopes and permissions. Records, depth and displayed results are bounded.
These are schema-tolerant investigation hints, not an authoritative exposure or
entitlement inventory.

Deception opportunities are recommendations only. The client never creates a
decoy, canary identity, honey permission, policy or alert. Each recommendation
requires authoritative product design plus legal, privacy, security and change
review, and must not reuse production identities or secrets.

Advanced mode provides a tenant-isolated local investigation notebook. Entries
are bounded, credential patterns are masked before persistence, and only the
latest 100 notes are retained. Cross-tenant viewing remains explicit. Notebook
exports pass through the configured identifier-obfuscation policy.
