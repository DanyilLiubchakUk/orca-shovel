# ADR 0002: Use TanStack Start as the Thin BFF

## Status

Accepted

## Context

The project needs frontend UI, authenticated server functions, webhook routes, and streaming AI responses. A separate backend server would add complexity before the product needs it.

## Decision

Use TanStack React Start for the web app and BFF layer.

Server functions handle authenticated app calls. Server routes handle external HTTP webhooks.

## Consequences

- No Express, NestJS, Fastify, or Hono app in MVP.
- Request handlers stay thin and delegate long work to Trigger.dev.
- Hosting choice must support TanStack Start server runtime needs.

