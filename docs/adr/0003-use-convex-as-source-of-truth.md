# ADR 0003: Use Convex as Source of Truth

## Status

Accepted

## Context

The app needs TypeScript-first data access, reactive frontend sync, Clerk integration, and simple backend ergonomics. The user does not want Postgres for this project.

## Decision

Use Convex for raw sources, memory facts, users, profiles, email records, reminders, automations, AI runs, capability requests, and audit logs.

## Consequences

- Qdrant stores retrieval vectors, not canonical memory.
- Every Convex function must enforce user scope.
- Convex actions should not become the primary long-running workflow system; Trigger.dev owns that.

