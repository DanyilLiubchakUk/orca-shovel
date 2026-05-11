# Project Context

## Product Definition

OrcaShovel is a smart personal AI journal and private memory assistant.

It lets a user capture personal context through the web app, chat, and email replies. The system stores raw sources, extracts editable memory facts, builds a Qdrant semantic index, and later uses that context to answer questions, draft messages, summarize periods, follow up after events, and propose automations.

The first product milestone is creator-useful, but the system must be designed as a production multi-user SaaS from the start, including admin operations, paid-user readiness, strict isolation, and cost controls.

## Domain Glossary

**User**
The authenticated person using the product. Clerk is the identity source. In code and data, user ownership should be represented with a stable internal user record linked to Clerk identity.

**Tenant**
A billing and isolation boundary. MVP can use one tenant per individual user, but the data model should include tenant-aware records so paid multi-user operation does not require a later security rewrite.

**Admin**
The product owner or trusted operator who reviews risky capability requests, failed jobs, high-cost workflows, and proposed new automations.

**App Admin**
The platform-level admin for OrcaShovel. MVP has normal users and app admins only. Paid users and teams are future product layers.

**Raw Source**
Original user-provided content. Examples: journal entry, inbound email body, chat message, or data dump. Raw sources are preserved separately from AI-created memories.

**Memory Fact**
An AI-extracted or user-created structured fact about the user, their life, preferences, work, relationships, tasks, events, or patterns. Memory facts are editable, archivable, deletable, and linked back to raw sources.

**Candidate Memory**
A proposed memory fact that has not yet been accepted as active memory. Sensitive or uncertain facts should become candidate memories by default.

**Semantic Chunk**
A chunk of raw or derived text embedded into Qdrant for semantic retrieval. Convex remains the source of truth; Qdrant is the retrieval index.

**Profile**
A compact, periodically updated personalization summary. Profiles do not replace raw sources or memory facts. Profile types include style, preference, life context, work context, and recent context.

**Namespace Tag**
A user-managed memory grouping such as `@home`, `@work`, or `@kitchen`. Users can add content to a namespace explicitly and retrieve from it in chat with slash-style commands such as `/home`.

**Assistant Run**
A logged AI operation with task type, model, provider, inputs/outputs metadata, usage, cost estimate, status, source links, and safety decisions.

**Tool**
A typed server-side capability the AI can request, such as searching memory, creating a reminder proposal, sending an email draft, or creating a capability request.

**Capability**
A product-level ability available to the assistant. A capability may be implemented by one or more tools and governed by policy.

**Capability Request**
A structured admin-review item created when a user asks for a reasonable workflow that is not currently supported or requires higher-risk permission.

**Automation Policy**
A database record describing a recurring or event-triggered behavior: owner, frequency limits, quiet hours, channel, prompt/persona, risk level, approval status, and enabled state.

**Chat-Powered Management**
The requirement that most user-manageable settings and data operations can be done through chat as well as the dashboard. The assistant can explain unavailable actions as OrcaShovel product limits, not as generic model limitations.

**BFF**
Backend For Frontend. In this project the BFF is TanStack Start server functions and server routes. It verifies auth, validates input, receives webhooks, calls Convex, triggers Trigger.dev, and streams AI responses when needed.

## Product Principles

- Raw data and AI interpretation are separate.
- Users can inspect, edit, disable, export, and delete what the assistant knows.
- The assistant may plan creatively but execution is allowlisted, policy-checked, logged, and permission-based.
- Background and long-running work belongs in Trigger.dev, not request handlers.
- Convex is the source of truth. Qdrant is the semantic index.
- Personalization is task-specific. Do not include style/profile context when the task only needs factual retrieval.
- Sensitive memory should be explicit, reviewable, and reversible.
- Multi-user safety is not deferred. Every layer is built as if paid users exist.
- Mobile web is the primary UX target. Native apps are not MVP.
- User-facing model details and cost are hidden by default; admin dashboards expose usage, cost, model, job, and feature metrics.
- Hardcoded magic numbers are not allowed. Defaults and limits live in centralized config/constants.
