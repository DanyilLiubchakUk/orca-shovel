# Decision Log

## Accepted

- Product name: OrcaShovel.
- Repo/package namespace: `orca-shovel`.
- Single Bun monorepo.
- TanStack React Start for app and BFF.
- Clerk only for auth.
- Convex as source of truth.
- Trigger.dev as background/scheduling system.
- Qdrant as vector database.
- OpenRouter with AI SDK for AI layer.
- Resend for email.
- Netlify first for TanStack Start hosting.
- No separate traditional backend app in MVP.
- No LangChain in MVP.
- Web, chat, and email are MVP channels.
- First usable version should work for the creator personally, but the architecture must be production multi-user and paid-user ready from the beginning.
- Admin side exists from the start.
- Qdrant access must use central hard required filters, including tenant/user scope, status/visibility, and relevant time constraints.
- First paid unit is per individual user; workspaces/teams are future.
- Stripe is not MVP, but billing readiness and Stripe integration path must be preserved.
- Free users use free/preselected very cheap model routes with strong limits once billing exists.
- Personal paid users can use regular cheap/needed models.
- Admin is unlimited operationally but still uses the same free/cheap model strategy by default.
- User deletion hard-deletes all user data from Convex, Qdrant, email metadata, logs where legally/product-wise possible, and derived indexes; non-identifying aggregate metrics may remain.
- Mobile-first responsive web is MVP; native mobile is not.
- Chat is a primary control surface for settings, memory, email, automations, and dashboard data operations.
- Deferred file ingestion is not in MVP and should not have runtime packages/routes now.
- Assistant cannot send email to third parties in MVP and must explain this as an OrcaShovel product limit.
- Memory/source modes are `remembered`, `reference_only`, and `locked_private`.
- Profiles and namespace tags are separate systems.
- Chat limits are token-based; users see tokens, not message counts.
- Temporary chats have a configurable token multiplier, such as 4x permanent chats, and closed temporary chat history is not retained.
- Chat memory capture is user-controlled for both temporary and permanent chats.
- Free users can store high-sensitivity memories; high-sensitivity tasks are not blocked and route to an approved privacy-safe model/provider path.
- Custom email automations are allowed for all users within plan/policy limits.
- App admin sees metrics and operational dashboards, not other users' raw private content.
- Account deletion hard-deletes user-owned data while non-identifying aggregate metrics may remain.
- Public docs should be dynamic SEO-friendly content records/routes, not one code file per docs page.
- Built-in automations are templates; users clone them into custom automations instead of editing built-ins directly.
- Important numeric limits live in `packages/config`; assistant-initiated email cap defaults to exactly 7 per day.
- High-sensitivity tasks are not blocked; they route away from unapproved free models/providers to an approved privacy-safe model/provider path.
- Build order is intentionally not decided at the requirements stage.

## Recommended But Not Yet Confirmed

- Low-risk memories can auto-activate; sensitive memories require review.
- User data export is MVP.
- Default quiet hours should be configurable; current planning default is 10pm to 7am local time.

## Open

See [Grill Questions](grill-questions.md).
