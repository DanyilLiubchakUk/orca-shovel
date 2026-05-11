# Billing, Plans, and Limits

## Current Scope

MVP has two practical roles:

- normal user
- app admin

Paid plans and teams are future product layers, but the architecture must be ready for per-user paid plans and Stripe.

## Plan Model

Initial plan values:

- `personal_free`
- `personal_paid`
- `admin_internal`

Future:

- `team`

## Billing Integration

Stripe is not implemented in MVP, but the data model should preserve:

- billing provider
- customer ID
- subscription status
- plan
- limits profile
- usage events

This avoids a later rewrite when paid users are added.

## Model Access

### `personal_free`

- uses free or zero-cost OpenRouter routes where privacy policy allows
- has strict limits for AI calls, chat, email, and automations once billing is active
- uses preselected free models per task, not one generic model for everything
- can store high-sensitivity memories, but high-sensitivity content never goes to unapproved free providers/models
- high-sensitivity tasks are not blocked; they route to an approved privacy-safe model/provider path when needed
- default assistant-initiated email cap comes from `packages/config`, with a planning default of 7 per day

### `personal_paid`

- uses regular cheap/needed models selected by task
- higher limits
- still cost-controlled

### `admin_internal`

- operationally unlimited
- uses the same free/cheap model strategy by default unless explicitly configured

## Usage Events

Store detailed usage events for future dashboards and billing, even before all metrics are shown in UI.

Examples:

- AI calls by task/model/provider
- token usage and estimated cost
- emails sent/received
- Qdrant vector count/upserts/deletes
- automation runs
- failed jobs
- capability requests

Default usage-event TTL target: six months.

When a user deletes an account, user-identifying content and records are hard-deleted. Non-identifying aggregate metrics can remain for platform analytics and product/business reporting.

All TTL and limit values live in `packages/config`.
