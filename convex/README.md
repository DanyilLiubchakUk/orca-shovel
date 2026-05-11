# convex

Convex source-of-truth backend.

Responsibilities:

- schema
- user records linked to Clerk
- user-scoped queries and mutations
- raw sources
- memory facts
- profiles
- email records
- settings and preferences
- namespace tags
- reminders and automations
- capability requests
- AI run logs
- usage events with TTL target
- audit logs

Rule: every user-owned query/mutation must enforce user scope.

Rule: hard delete must be able to remove user data across Convex records and coordinate Qdrant/email-derived cleanup. Non-identifying aggregate metrics may remain.
