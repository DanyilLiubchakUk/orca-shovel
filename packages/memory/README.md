# packages/memory

Memory and retrieval package.

Responsibilities:

- Qdrant provider
- vector point payload contract
- user-scoped search
- chunking helpers
- embedding upserts/deletes
- memory result ranking
- rebuild user memory index
- raw source to vector linkage
- namespace tag retrieval such as `/home` -> `@home`

Rule: this package must not expose an API that allows unscoped vector search.

Rule: deleting a raw source must be able to find and delete all linked Qdrant points.
