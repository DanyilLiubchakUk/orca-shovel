# trigger

Trigger.dev background workflows.

Responsibilities:

- process journal entries
- process inbound emails
- store usage/job metrics for admin dashboards
- extract memory facts
- generate embeddings
- upsert Qdrant vectors
- send reminder emails
- run weekly summaries
- refresh profiles
- create admin review notifications
- rebuild memory indexes

Rule: every task payload includes `tenantId`, `userId`, source IDs, idempotency keys where needed, and logs status back to Convex.
