# ADR 0005: Use Qdrant for Vector Memory

## Status

Accepted

## Context

Semantic memory retrieval is core to the product. The vector store needs metadata filtering, future retrieval quality tuning, and strict per-user filtering.

## Decision

Use Qdrant as the vector database.

## Consequences

- Qdrant queries must include `userId` filtering at query time.
- The app uses a provider interface in `packages/memory`; app code does not import Qdrant directly.
- Convex remains the source of truth.

