# MVP Scope

## MVP Goal

Ship the smallest trustworthy OrcaShovel loop:

1. User signs in with Clerk.
2. User writes journal entries in the web app.
3. User receives and replies to assistant emails.
4. Raw sources are stored in Convex.
5. Trigger.dev extracts candidate memories and semantic chunks from supported sources.
6. Qdrant indexes user-scoped vectors for journal/email/chat memory sources.
7. User can chat with the assistant using retrieved memory and manage settings/data through chat.
8. User can inspect/edit/delete memory and raw sources.
9. System logs AI runs, actions, and usage events for admin dashboards.

Although the first live use is creator-first, this MVP is not a throwaway single-user app. It must be ready for paid multi-user operation at the architecture level: tenant/user isolation, admin controls, cost/rate limits, and safe data deletion/export paths.

## MVP Included

- TanStack Start app shell with authenticated dashboard.
- Journal capture.
- Memory dashboard with raw sources, memory facts, candidate review, profiles, reminders, automations, AI run logs.
- Resend outbound follow-up email and inbound reply ingestion.
- Qdrant semantic search with mandatory `userId` filter.
- Trigger.dev tasks for journal processing, email processing, reminders, and weekly summaries.
- AI SDK model router with OpenRouter.
- Policy-checked tool registry for read-only memory search and low-risk proposals.
- Capability request creation for unsupported/risky workflows.
- Admin surface for capability requests, risky automation proposals, failed jobs, and cost visibility.
- Tenant/user-ready data model and access patterns.
- Mobile-first responsive web UX.
- Chat-powered settings, email, memory, automation, and personalization management.
- Centralized constants/config package for limits and defaults.
- Usage-event storage with six-month TTL target for future admin charts and billing readiness.

## MVP Excluded

- WhatsApp, Telegram, Slack, Discord, calendar, contacts, and MCP integrations.
- Separate Express/Nest/Fastify/Hono backend.
- LangChain.
- Team workspaces with shared memory.
- Unrestricted autonomous actions.
- Global vector search.
- Automatic permanent memory creation for sensitive categories without review.
- Deferred ingestion features that are outside the journal/chat/email memory loop.
- Third-party email sending.

## MVP Success Criteria

- The assistant can answer factual memory questions with source links.
- The assistant can draft a personalized message using recent work context and style profile.
- The interview follow-up flow works from journal entry to scheduled email to inbound reply to memory update.
- Users can see and control what was remembered.
- Admin can review unsupported/risky capability requests.
- AI usage and approximate cost are logged.
- User can hard delete all data everywhere.
