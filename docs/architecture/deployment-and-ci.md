# Deployment and CI Plan

## Deployments

| Target | Platform | Notes |
| --- | --- | --- |
| TanStack Start app | Netlify | Current deployed target. Cloudflare remains a later candidate for cost and edge deployment. |
| Convex | Convex Cloud | Source of truth and reactive backend. |
| Trigger.dev | Trigger.dev Cloud | Background jobs, schedules, retries, observability. |
| Qdrant | Qdrant Cloud or managed/self-hosted later | Selected vector database. |

## Netlify vs Cloudflare Decision

Decision: start with Netlify unless Cloudflare-specific cost or edge constraints become urgent.

Reason:

- user is frontend-first
- simpler initial deploy experience matters
- Convex and Trigger.dev already externalize most backend complexity
- the BFF should remain thin

The current repo uses `@netlify/vite-plugin-tanstack-start` in `apps/web`. Root `netlify.toml` builds `@orca-shovel/web` and publishes `apps/web/dist/client`.

Keep hosting adapter boundaries clean so Cloudflare can be adopted later.

## Path-Filtered CI

Planned workflows:

- `deploy-web`: `apps/web/**`, `packages/ui/**`, `packages/schemas/**`, `packages/auth/**`, `packages/config/**`, BFF-used packages
- `deploy-convex`: `convex/**`, `packages/schemas/**`, `packages/config/**` where Convex-safe
- `deploy-trigger`: `trigger/**`, `packages/ai/**`, `packages/email/**`, `packages/memory/**`, `packages/policy/**`, `packages/schemas/**`, `packages/config/**`
- `typecheck-test`: all TypeScript packages on PRs

## Local Development

Run these processes:

- TanStack Start dev server
- Convex dev
- Trigger.dev dev
- local tunnel for Resend webhooks when testing inbound email

Secrets:

- Clerk keys
- Convex deployment URL/key
- Trigger.dev key
- OpenRouter key
- Resend key and webhook signing secret
- Qdrant URL/API key
