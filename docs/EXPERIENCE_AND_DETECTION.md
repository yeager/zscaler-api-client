# Experience journey and Detection Lab

## Experience journey

Operations Center's **Experience journey** accepts the complete body of the most
recent imported or executed REST/GraphQL response. It recursively recognizes
common score, latency, loss, jitter, DNS, connect, fetch, availability, CPU and
memory fields and arranges observed values into five stages:

1. User
2. Device
3. Network
4. Service edge
5. Application

The parser is schema-tolerant and bounded. It never invents a value for an
unobserved stage, and its visible thresholds are operational hints—not an SLA,
Zscaler health verdict, or substitute for authoritative product telemetry.
JSON, long-form CSV metrics, and a PNG journey graphic can be exported. Every
external export passes through the configured privacy and obfuscation policy.

## Detection Lab

Detection Lab is available in Advanced mode. Rules are JSON objects containing
one to twenty conditions, joined with `all` or `any`. Only the following fields
and operators are accepted:

- Fields: `status`, `duration_ms`, `method`, `url`, `environment_id`, `error`,
  `timestamp`, and a named `response_headers.<header>` value.
- Operators: `eq`, `ne`, `gt`, `gte`, `lt`, `lte`, `contains`, `starts_with`,
  `exists`, and `in`.

There is no expression evaluator, regular-expression engine, Python execution,
network access, tenant write, or remediation hook in the rule engine. Included
templates cover server errors, rate limits, slow requests, write activity, and
authentication failures.

Adaptive analysis groups retained events by scheme, host and path and compares
the latest duration with a transparent median absolute deviation (MAD)
baseline. The selected sensitivity changes only the documented multiplier.
Results are retrospective local hints and should be validated before escalation.
