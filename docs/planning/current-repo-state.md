# Current Repo State

The repository currently contains a Bun workspace root and a clean TanStack Start web app in `apps/web`.

The current structure matches the intended top-level production layout:

- `apps/web` for the TanStack Start web app and BFF
- `convex` for source-of-truth data functions and schema
- `trigger` for background workflows
- `packages/*` for shared AI, memory, email, auth, config, policy, schemas, and UI code

`convex`, `trigger`, and `packages/*` currently contain README files only where implementation has not started yet. They are documentation anchors for the planned boundaries, not finished runtime packages.

Root `package.json` coordinates workspace commands. Netlify builds the `@orca-shovel/web` workspace and publishes `apps/web/dist/client`.
