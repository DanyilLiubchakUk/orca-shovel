# OrcaShovel

OrcaShovel is a private AI journal and personal memory assistant.

The product is not a generic chatbot. It is a memory-backed personal operating layer where web journal entries, email replies, and assistant conversations become transparent, editable memory sources.

The first usable version should work for the creator personally, but the architecture is planned as a production multi-user SaaS from the beginning.

## Start Here

1. [Project Context](CONTEXT.md)
2. [Documentation Index](docs/README.md)
3. [Project Map](docs/planning/project-map.md)
4. [MVP Scope](docs/planning/mvp-scope.md)
5. [System Overview](docs/architecture/system-overview.md)
6. [Current Repo State](docs/planning/current-repo-state.md)

## Confirmed Stack

- Web app/BFF: TanStack React Start
- Package manager: Bun
- UI: Tailwind CSS and shadcn/ui
- Auth: Clerk
- Database/source of truth: Convex
- Background jobs/schedules: Trigger.dev
- Vector database: Qdrant
- AI calls: Vercel AI SDK with OpenRouter
- Email: Resend
- Hosting: Netlify first

## Commands

Run the app locally:

```bash
bun --bun run dev
```

Build for production:

```bash
bun --bun run build
```

Run tests:

```bash
bun --bun run test
```

## Core Safety Rule

Every record, vector, email, reminder, automation, AI run, and tool execution is scoped to an authenticated user. Global search then filter is not allowed. Scope first, always.
