# packages/config

Central config and constants package.

Responsibilities:

- plan names and feature gates
- model routing defaults
- chat limits and message decay constants
- email limits, quiet hours, grace windows
- memory retrieval and expiry constants
- usage-event TTL constants
- automation schedule/frequency limits
- settings registry defaults

Rule: no magic numbers in app routes, Convex functions, Trigger.dev tasks, UI components, or AI prompts. Tunable values come from this package.
