# Research Notes

Research date: 2026-05-08.

## TanStack Start

Findings:

- Server functions support type-safe server-only logic callable from client routes/components.
- Server routes support raw HTTP endpoints, useful for webhooks.
- Hosting supports Netlify and Cloudflare paths.

Sources:

- [TanStack Start Server Functions](https://tanstack.com/start/latest/docs/framework/react/guide/server-functions)
- [TanStack Start Server Routes](https://tanstack.com/start/latest/docs/framework/react/guide/server-routes)
- [TanStack Start Hosting](https://tanstack.com/start/latest/docs/framework/react/guide/hosting)

## AI SDK

Findings:

- AI SDK is provider-agnostic and supports text, structured output, tools, streaming, telemetry, and provider/model management.
- Current v6 direction favors `generateText`/`streamText` with `Output.*` for structured outputs.
- Tool approval exists and maps well to user/admin approval flows.
- Telemetry can record lifecycle/cost metadata, but inputs/outputs should be disabled by default for privacy.

Sources:

- [AI SDK Introduction](https://ai-sdk.dev/docs/introduction)
- [Providers and Models](https://ai-sdk.dev/docs/foundations/providers-and-models)
- [Provider and Model Management](https://ai-sdk.dev/docs/ai-sdk-core/provider-management)
- [Generating Text](https://ai-sdk.dev/docs/ai-sdk-core/generating-text)
- [Generating Structured Data](https://ai-sdk.dev/docs/ai-sdk-core/generating-structured-data)
- [Output Reference](https://ai-sdk.dev/docs/reference/ai-sdk-core/output)
- [Tool Calling](https://ai-sdk.dev/docs/ai-sdk-core/tools-and-tool-calling)
- [Telemetry](https://ai-sdk.dev/docs/ai-sdk-core/telemetry)
- [TanStack Start Quickstart](https://ai-sdk.dev/docs/getting-started/tanstack-start)

## OpenRouter

Findings:

- OpenRouter has an AI SDK provider integration.
- Provider routing can control order, fallbacks, price, data collection, and zero data retention behavior depending on provider support.
- Provider privacy/logging varies and must be treated as a policy input.
- OpenRouter has a Free Models Router (`openrouter/free`) that can route to available free models and filter by needed capabilities, but free model availability, latency, rate limits, and exact model choice can vary.
- Specific free variants can be selected with a `:free` suffix when available.

Sources:

- [OpenRouter Vercel AI SDK Integration](https://openrouter.ai/docs/guides/community/vercel-ai-sdk)
- [OpenRouter Provider Routing](https://openrouter.ai/docs/guides/routing/provider-selection)
- [OpenRouter Provider Logging](https://openrouter.ai/docs/guides/privacy/provider-logging)
- [OpenRouter Free Models Router](https://openrouter.ai/docs/guides/routing/routers/free-models-router)
- [OpenRouter Free Variant](https://openrouter.ai/docs/guides/routing/model-variants/free)
- [OpenRouter Models API](https://openrouter.ai/docs/api/api-reference/models/get-models)

## Convex

Findings:

- Convex supports Clerk auth and `ctx.auth.getUserIdentity()` inside functions.
- Actions can call third-party services, but Convex actions are not the preferred long-running workflow engine here.
- Schema and validation should be added as the model stabilizes.

Sources:

- [Convex Clerk Auth](https://docs.convex.dev/auth/clerk)
- [Convex Schemas](https://docs.convex.dev/database/schemas)
- [Convex Actions](https://docs.convex.dev/functions/actions)

## Trigger.dev

Findings:

- Tasks support long-running background work.
- Scheduled tasks are for recurring schedules; one-off future work should use delay options.
- Schedules support timezone, external ID, and deduplication key.

Sources:

- [Trigger.dev Overview](https://trigger.dev/docs)
- [Trigger.dev Tasks](https://trigger.dev/docs/tasks/overview)
- [Trigger.dev Scheduled Tasks](https://trigger.dev/docs/tasks/scheduled)

## Resend

Findings:

- Resend supports inbound email via `email.received` webhooks.
- Webhook signature verification requires raw request body.
- Inbound webhooks may only include metadata in some guide patterns; full email content may require API retrieval.

Sources:

- [Resend Receiving Emails](https://resend.com/docs/dashboard/receiving/introduction)
- [Resend Verify Webhooks](https://resend.com/docs/webhooks/verify-webhooks-requests)
- [Resend Inbound Feature](https://resend.com/features/inbound)

## Qdrant

Findings:

- Payloads store JSON metadata alongside vectors.
- Filtering supports `must`, `should`, `must_not`, nested filters, and payload filtering.
- Search can return payloads for citations.

Sources:

- [Qdrant Payload](https://qdrant.tech/documentation/concepts/payload/)
- [Qdrant Filtering](https://qdrant.tech/documentation/search/filtering/)
- [Qdrant Search](https://qdrant.tech/documentation/search/search/)
