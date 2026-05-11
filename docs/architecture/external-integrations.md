# External Integrations

## Clerk

Purpose:

- authentication
- sessions
- identity provider
- login UI

Project rule:

- Clerk identifies the user at the edge/BFF/client.
- Convex stores the internal user record.
- App data uses internal `userId`, with `clerkUserId` as the identity link.

## Convex

Purpose:

- source of truth
- reactive reads
- typed queries/mutations
- user-scoped app data

Project rule:

- Public Convex functions validate inputs and auth.
- Internal functions can be called from trusted server/task code but must still receive explicit `userId`.

## Trigger.dev

Purpose:

- slow jobs
- retryable workflows
- schedules
- long-running AI work
- event follow-ups

Project rule:

- BFF and webhooks trigger tasks.
- Tasks read/write Convex and call Qdrant/AI/Resend.
- Task payloads stay small and reference Convex IDs instead of embedding full documents.

## Qdrant

Purpose:

- semantic vector search
- memory chunk retrieval
- metadata-filtered recall

Project rule:

- one provider abstraction in `packages/memory`
- mandatory `userId` filter
- payload indexes for frequently filtered fields as data grows

## OpenRouter

Purpose:

- model gateway
- cheap-first model choice
- multi-provider access

Project rule:

- use through AI SDK provider/wrapper only
- central model router maps task type to model and privacy policy
- do not send sensitive private data to providers/models with unacceptable training or retention behavior
- free model routes can be used only through approved task-specific allowlists

## AI SDK

Purpose:

- streaming responses
- structured outputs
- tool calling
- model/provider abstraction
- usage metadata

Project rule:

- use `streamText` for interactive chat
- use `generateText` with `Output.*` for structured background extraction/planning
- log usage via callbacks
- cap steps for tool loops

## Resend

Purpose:

- outbound assistant emails
- inbound user replies
- delivery webhooks

Project rule:

- verify webhook signatures from raw request body
- dedupe webhook events
- match inbound replies with signed reply tokens
- store email content as untrusted raw source
