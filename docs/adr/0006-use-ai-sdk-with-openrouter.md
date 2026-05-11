# ADR 0006: Use AI SDK with OpenRouter

## Status

Accepted

## Context

The project needs model flexibility, structured outputs, tool calling, streaming, and cheap-first routing. The user does not want OpenAI-only lock-in.

## Decision

Use Vercel AI SDK as the TypeScript AI framework and OpenRouter as the primary model gateway.

## Consequences

- Model choices are centralized in `packages/ai`.
- AI SDK usage/cost metadata is logged into Convex.
- Provider privacy settings and model capabilities must be treated as part of the policy layer.
- Older `generateObject` patterns should be avoided in favor of AI SDK v6 output specifications.

