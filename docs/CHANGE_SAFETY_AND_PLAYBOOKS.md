# Change safety, playbooks and API planning

## Change safety

The Advanced-mode Change control workspace calculates a transparent 0–100
local risk score from change volume, removals, policy findings, conflicts and
shadowing. It displays explicit gates for a change reference, owner, independent
review, maintenance window, simulation, rollback and approval. Gate requirements
increase with risk. A green state means only that the local review gates have
evidence; it never authorizes or applies a tenant change.

Rollback export uses the strict `zs-api-client/rollback/v1` envelope. The
payload includes the masked rollback policy, reference and proposed-policy hash,
plus an integrity digest over the complete payload. Offline verification rejects
unexpected fields, schema changes and payload tampering. This digest detects
modification but is not a digital signature or an authorization to apply.

## Response playbooks

Basic and Advanced modes provide guided checklists for API disruption, high-risk
policy changes, digital-experience degradation, possible credential exposure and
ransomware containment support. Marking a step complete records operator intent
in the tenant-scoped, hash-linked local audit trail. It performs no remote action
and does not close an incident in an authoritative system.

## Smart API planner

The Advanced-mode planner tokenizes an operator goal and deterministically ranks
the bundled Automation Hub catalog. Documented read operations receive a small
preference. The planner does not call an LLM, authenticate, infer tenant values,
or execute requests. Safe reads can be copied to API Chains, where the existing
host restriction, template validation and explicit approval still apply.
