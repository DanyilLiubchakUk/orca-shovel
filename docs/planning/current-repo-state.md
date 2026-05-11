# Current Repo State

The repository currently contains a clean TanStack Start web app scaffold at the repo root.

The planning documents describe the intended production structure:

- `apps/web` for the TanStack Start web app and BFF
- `convex` for source-of-truth data functions and schema
- `trigger` for background workflows
- `packages/*` for shared AI, memory, email, auth, config, policy, schemas, and UI code

Those directories currently contain README files only where implementation has not started yet. They are documentation anchors for the planned boundaries, not finished runtime packages.

When the project moves from the clean deployed scaffold into the full monorepo buildout, move the existing root TanStack Start app into `apps/web` and update workspace/package configuration in the same change.
