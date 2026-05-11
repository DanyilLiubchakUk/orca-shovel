# Public Docs and SEO Plan

OrcaShovel should have public documentation that users and search engines can read.

## Purpose

- explain what OrcaShovel does
- explain how memory works
- explain privacy and user control
- explain limits and plans
- explain email behavior
- explain chat-powered settings
- reduce user confusion before signup

## Public Docs System

Public docs should be updated at every development stage.

Do not create a new application code file for every docs page. Use a dynamic docs route and a content source.

This is possible with TanStack Start and Convex, but there are two modes:

- **SSR from Convex:** docs are stored in Convex and rendered by TanStack Start on request. Google and AI crawlers still receive server-rendered HTML. Edits publish immediately, with caching.
- **Build-time prerender from Convex:** the build reads published docs from Convex and prerenders static `/docs/$slug` HTML. This is fastest at runtime, but admin edits require a rebuild/redeploy or a build webhook.

Target architecture: hybrid. Use Convex as the docs source of truth, SSR for instant publishing during development/admin edits, and optional build-time prerender for published stable docs when SEO/performance matters.

Recommended architecture:

- `publicDocs` records in Convex or another managed content store
- dynamic TanStack Start route such as `/docs/$slug`
- server-rendered HTML for Google and AI crawlers
- optional prerender job that turns published docs into static HTML
- admin publish action can trigger a deploy/build hook later
- generated sitemap
- canonical URLs
- structured metadata
- admin/editor UI for adding and editing docs
- version/status fields so draft docs do not publish accidentally

This keeps docs easy to update while still being readable by users, Google, and AI tools.

## MVP Public Docs

Recommended pages:

- What is OrcaShovel?
- How memory works
- Raw sources vs memories
- How email replies work
- How chat-powered settings work
- Profiles vs namespaces
- Chat syntax
- Privacy and deletion
- Plan limits
- What OrcaShovel cannot do

## Product Positioning

OrcaShovel is the assistant/journal/product. It may use different AI models behind the scenes, but users should not experience it as "talking to OpenAI" or any other provider.

When something is unsupported, the assistant should explain the OrcaShovel product limitation and offer the closest safe supported workflow.
