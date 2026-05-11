# Implementation Sequence

Status: provisional. The project is still in requirements planning, so this is not an approved build order yet.

## Phase 0: Repo Foundation

- Initialize Bun workspace.
- Add TanStack Start app in `apps/web`.
- Add Convex project in `convex`.
- Add Trigger.dev project in `trigger`.
- Add shared package build/typecheck setup.
- Add `packages/config` for constants, limits, settings defaults, and plan gates.
- Add environment documentation.

## Phase 1: Identity and Data Boundary

- Clerk auth in TanStack Start.
- Convex auth integration.
- Internal `users` table.
- User-scoped Convex helper functions.
- Audit log foundation.

## Phase 2: Journal Core

- Journal UI.
- `createJournalEntry` server function.
- Convex raw journal entry storage.
- Trigger.dev `processJournalEntry`.
- AI extraction skeleton.
- Candidate memory review UI.

## Phase 3: Qdrant Memory Retrieval

- `packages/memory` Qdrant provider.
- Embedding generation path.
- Qdrant point payload contract.
- User-scoped semantic search.
- Factual memory chat route.

## Phase 4: AI SDK Model Layer

- OpenRouter provider setup.
- model router by task type.
- structured output wrappers.
- AI run logging.
- privacy-safe telemetry config.

## Phase 5: Email Loop

- Resend outbound helper.
- signed reply tokens.
- inbound webhook route with verification.
- inbound email processing task.
- interview follow-up flow.

## Phase 6: Agent Policy and Capability Requests

- tool registry.
- capability registry.
- policy evaluator.
- settings registry and chat-powered management tools.
- capability request records.
- admin review UI.
- admin email notification.

## Phase 7: Automation Policies

- automation policy records.
- Trigger.dev schedule integration.
- quiet hours/frequency limits.
- pause/disable controls.
- weekly summary and wellbeing check-in as admin-approved examples.
- custom automation clone flow.

## Phase 8: Trust and Data Controls

- export JSON.
- delete account workflow.
- memory disable/delete semantics.
- source-to-memory trace UI.
- cost and job failure dashboard.

## Future: File Ingestion

- deferred from MVP
- see `docs/planning/deferred-file-ingestion.md`
- do not scaffold runtime packages/routes until this is actively built
