# Requirements Traceability

## Core Requirement Links

| Requirement | Docs | Packages/Targets |
| --- | --- | --- |
| Web journal capture | `docs/flows/journal-entry-flow.md` | `apps/web`, `convex`, `trigger`, `packages/schemas` |
| Email back-and-forth | `docs/flows/email-loop-flow.md` | `apps/web`, `trigger`, `packages/email`, `convex` |
| Chat-powered management | `docs/flows/chat-powered-management-flow.md` | `apps/web`, `packages/policy`, `packages/config`, `convex` |
| Factual memory answers | `docs/flows/factual-memory-question-flow.md` | `apps/web`, `packages/memory`, `packages/ai`, `convex` |
| Personalized drafts | `docs/flows/personalized-draft-flow.md` | `apps/web`, `packages/ai`, `packages/memory`, `convex` |
| Profiles vs namespaces | `docs/architecture/profiles-vs-namespaces.md` | `apps/web`, `packages/memory`, `packages/policy`, `convex` |
| Chat token limits and retention | `docs/architecture/chat-retention-and-token-limits.md` | `apps/web`, `packages/config`, `convex` |
| Candidate memory review | `docs/architecture/memory-architecture.md` | `apps/web`, `convex`, `trigger` |
| Transparent memory dashboard | `docs/architecture/ui-information-architecture.md` | `apps/web`, `packages/ui`, `convex` |
| Agent policy/tool registry | `docs/architecture/agent-policy.md` | `packages/policy`, `packages/ai`, `trigger`, `apps/web` |
| Capability requests | `docs/architecture/agent-policy.md` | `packages/policy`, `convex`, `apps/web`, `trigger` |
| Qdrant semantic memory | `docs/architecture/memory-architecture.md` | `packages/memory`, `trigger` |
| AI model routing | `docs/architecture/ai-sdk-strategy.md` | `packages/ai` |
| User isolation/security | `docs/security/security-and-privacy.md` | all targets |
| Deployment and CI | `docs/architecture/deployment-and-ci.md` | root workflows later |
| Constants and limits | `docs/architecture/configuration-and-constants.md` | `packages/config` |
| Billing readiness | `docs/architecture/billing-plans-and-limits.md` | `convex`, `packages/config`, admin UI later |

## Use Case Coverage

### Interview Follow-Up

Covered by:

- journal entry flow
- reminder data model
- Trigger.dev scheduling
- Resend outbound email
- Resend inbound reply processing
- memory extraction

Open:

- auto-schedule vs ask confirmation
- default follow-up timing

### Team Lead Message

Covered by:

- personalized draft flow
- profile model
- work context memory facts
- source citation UX

Open:

- how user identifies team lead initially
- whether draft can be emailed directly in future

### Email Reply as Journal

Covered by:

- email loop flow
- raw source model
- prompt injection policy
- memory pipeline

Open:

- auto-reply scope

### Deferred File Ingestion

Covered by:

- `docs/planning/deferred-file-ingestion.md`

Decision:

- not MVP; no runtime package/routes/scaffold now
