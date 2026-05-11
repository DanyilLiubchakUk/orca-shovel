# Deferred File Ingestion

File upload/storage is not part of the OrcaShovel MVP.

## Decision

Do not build file upload, file storage, OCR, PDF parsing, image reading, audio/video processing, or AI-based file memory in MVP.

Reason:

- the current product loop can work through journal, chat, and email
- free/cheap model support for files is not good enough to justify MVP complexity
- file processing can become expensive quickly
- adding visible file UI before AI usefulness would distract from the core memory loop

## Future Integration Path

When file ingestion becomes worth building, add it behind plan limits and explicit user/admin controls.

Future file work should stay behind an abstraction so the storage/upload provider can be selected later without changing product flows.

Likely future responsibilities:

- upload flow
- object storage for binaries
- Convex metadata
- Trigger.dev for parsing/indexing jobs
- Qdrant vectors only after explicit processing
- candidate memories only, never auto-active from bulk files

Future file work should create:

- a dedicated shared package for file/storage contracts
- an authenticated upload route in the web app
- file metadata tables
- file storage limits in `packages/config`
- admin usage dashboards
- hard-delete cleanup across storage, Convex, and Qdrant
