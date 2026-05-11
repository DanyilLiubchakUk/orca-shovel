# ADR 0004: Use Trigger.dev for Background Work

## Status

Accepted

## Context

The product has many slow, retryable, scheduled, and long-running workflows: extraction, embeddings, email follow-ups, summaries, profile refreshes, and admin review notifications.

## Decision

Use Trigger.dev as the only background and scheduling system.

## Consequences

- TanStack Start routes/functions return quickly.
- Convex actions are not used as the main workflow engine.
- Trigger tasks must be idempotent and include `tenantId` and `userId`.
- Dynamic schedules must use external IDs/deduplication to avoid duplicate per-user jobs.
