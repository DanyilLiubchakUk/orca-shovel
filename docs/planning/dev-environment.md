# Development Environment Plan

## Required CLIs

- Bun
- Convex CLI
- Trigger.dev CLI
- Netlify CLI for web deploy/dev parity
- Qdrant local Docker image or Qdrant Cloud credentials

## Local Processes

Current scaffold:

```text
bun install
bun --bun run dev
```

Planned full system:

```text
bun install
bun --filter web dev
convex dev
trigger.dev dev
```

The planned commands should be finalized when the repo is moved into the full Bun workspace structure.

## Local Webhook Testing

Use a tunnel for:

- Resend inbound webhooks
- Resend delivery webhooks

## Environment Variables

Root documentation should eventually define:

- `CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `CONVEX_DEPLOYMENT`
- `VITE_CONVEX_URL`
- `TRIGGER_SECRET_KEY`
- `OPENROUTER_API_KEY`
- `RESEND_API_KEY`
- `RESEND_WEBHOOK_SECRET`
- `QDRANT_URL`
- `QDRANT_API_KEY`
- `APP_BASE_URL`
- `ADMIN_EMAIL`
- `REPLY_TOKEN_SECRET`

## Secret Boundary

Frontend-safe:

- Clerk publishable key
- Convex public URL where required

Server-only:

- Clerk secret key
- Trigger key
- OpenRouter key
- Resend key
- webhook secrets
- Qdrant key
- reply token secret
