# Web App

TanStack React Start app and thin BFF.

This is the deployed Netlify web target for OrcaShovel.

## Commands

From the repo root:

```bash
bun run dev
bun run build
bun run test
```

From this directory:

```bash
bun run dev
bun run build
bun run test
```

Responsibilities:

- authenticated UI
- dashboard routes
- journal capture
- chat UI
- chat-powered settings/data management
- memory dashboard
- admin dashboard
- server functions for browser-initiated calls
- server routes for Resend webhooks
- streaming AI responses when interactive

Non-responsibilities:

- long AI extraction
- reminder scheduling work
- broad business logic
- direct raw Qdrant access from components

UX rule: mobile-first web, full functionality on phone-sized screens.
