# ADR 0001: Use a Single Bun Monorepo

## Status

Accepted

## Context

The project has multiple deployable targets but should remain easy for a frontend-first developer and AI coding agents to understand. Separate repos would create coordination overhead and duplicated schemas.

## Decision

Use one Bun monorepo containing:

- `apps/web`
- `convex`
- `trigger`
- `packages/*`

## Consequences

- Shared packages keep schemas, AI wrappers, and policy definitions consistent.
- CI must use path filters so every change does not deploy every target.
- Package boundaries must be clear to avoid browser/server secret leakage.

