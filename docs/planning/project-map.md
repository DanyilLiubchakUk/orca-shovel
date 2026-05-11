# Project Map

## Repository Shape

The TanStack Start app now lives in `apps/web`. The root package coordinates Bun workspaces and deployment commands.

```text
orca-shovel/
  apps/
    web/                    # TanStack React Start app and thin BFF
  convex/                   # Convex schema, queries, mutations, internal functions
  trigger/                  # Trigger.dev tasks, scheduled jobs, workflow entrypoints
  packages/
    ai/                     # AI SDK wrappers, model router, prompts, structured outputs
    auth/                   # Clerk identity helpers and user-scoping contracts
    config/                 # centralized constants, limits, feature gates, settings defaults
    email/                  # Resend outbound/inbound helpers, reply tokens
    memory/                 # Qdrant provider, retrieval, chunking, memory services
    policy/                 # Tool registry, capability registry, approvals, risk rules
    schemas/                # Shared Zod/Valibot schemas and domain DTOs
    ui/                     # shadcn/ui components and app design primitives
  docs/
    adr/                    # Architecture decision records
    architecture/           # System, data, AI, memory, deployment design
    flows/                  # End-to-end product and technical flows
    planning/               # MVP, roadmap, questions, implementation sequence
    product/                # public docs and SEO planning
    security/               # Threat model, privacy, permissions, audit rules
```

## Deployable Targets

| Target | Folder | Responsibility |
| --- | --- | --- |
| Web app/BFF | `apps/web` | UI, authenticated server functions, webhooks, streaming chat routes |
| Convex backend | `convex` | Source-of-truth data, reactive queries, mutations, internal DB functions |
| Trigger.dev | `trigger` | Slow jobs, retries, extraction, indexing, schedules, reminders, automations |

Shared packages are imported by deployable targets. They are not deployed alone.

## Dependency Direction

```text
apps/web
  -> packages/ui
  -> packages/schemas
  -> packages/auth
  -> packages/config
  -> packages/policy
  -> packages/ai
  -> packages/email
  -> packages/memory

trigger
  -> packages/schemas
  -> packages/config
  -> packages/ai
  -> packages/email
  -> packages/memory
  -> packages/policy
  -> convex generated API/client

convex
  -> packages/schemas where safe
  -> packages/config where safe
  -> no browser-only packages

packages/ai
  -> packages/schemas
  -> packages/config
  -> packages/policy for tool definitions/risk metadata

packages/memory
  -> packages/schemas
  -> packages/config
  -> Qdrant client
```

## Boundary Rules

- `apps/web` routes and server functions stay thin.
- `trigger` owns long-running work and retryable workflows.
- `convex` owns validated persistent state and user-scoped reads/writes.
- `packages/ai` owns AI SDK calls and model selection.
- `packages/config` owns constants, plan limits, and tunable defaults.
- `packages/policy` decides whether tools/actions are allowed.
- `packages/memory` owns Qdrant access and never exposes unscoped search.
- Secrets never enter `packages/ui` or browser bundles.
- Tenant and user scope travel together through app, Convex, Trigger.dev, Qdrant, email, audit, and AI run paths.
