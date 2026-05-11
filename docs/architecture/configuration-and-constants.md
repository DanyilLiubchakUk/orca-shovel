# Configuration and Constants

Tunable values must live in centralized config/constants files. Do not hardcode limits in routes, tasks, UI components, prompts, or Convex functions.

## Package

Use `packages/config` for shared constants and config schemas.

Planned modules:

- `plans`: plan names, model access, feature gates, free-user limits.
- `ai`: model IDs, free-model fallbacks, budget classes, token limits, step caps, retry policy.
- `memory`: retrieval limits, default recent window, Qdrant payload indexes, expiry review windows.
- `chat`: temporary/permanent chat limits, message decay formulas, renewal windows.
- `email`: quiet-hour defaults, send/receive limits, verified-email limits, grace windows.
- `automations`: default frequencies, schedule limits, missed-send behavior.
- `usage`: telemetry retention TTL, admin aggregation intervals.
- `security`: rate limits, webhook dedupe TTL, reply token TTL.

## Default Values From Current Decisions

These are planning defaults and should become constants:

- `ADDITIONAL_VERIFIED_EMAIL_LIMIT = 2`
- `DEFAULT_RECENT_CONTEXT_DAYS = 14`
- `MIN_RECENT_CONTEXT_DAYS = 1`
- `MAX_RECENT_CONTEXT_DAYS = 20`
- `DEFAULT_EVENT_FOLLOWUP_DELAY_MINUTES = 30`
- `USAGE_EVENT_TTL_DAYS = 180`
- `DEFAULT_QUIET_HOURS_START = "22:00"`
- `DEFAULT_QUIET_HOURS_END = "07:00"`
- `DEFAULT_DAILY_ASSISTANT_EMAIL_LIMIT = 7`
- `TEMPORARY_CHAT_TOKEN_MULTIPLIER = 4`
- `CHAT_MEMORY_CAPTURE_DEFAULT = "explicit_only"`

## Constants Rule

Every tunable value must be referenced by symbolic name. Examples:

- Good: `EMAIL_LIMITS.ADDITIONAL_VERIFIED_EMAILS`
- Bad: `if (emails.length >= 3)`

## Admin Visibility

Admin dashboards should display current config values and usage against limits, even if editing those values remains code/config-only at MVP.
