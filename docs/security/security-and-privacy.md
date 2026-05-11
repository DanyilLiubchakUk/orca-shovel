# Security and Privacy Plan

## Non-Negotiable Rules

- Every user-owned record includes `userId`.
- Every paid-user-ready record includes `tenantId` where relevant.
- Every user query is scoped by `userId`.
- Every Qdrant query filters by centrally enforced `tenantId`, `userId`, status, visibility, and relevant time bounds at query time.
- Webhooks are signature verified.
- Email reply matching uses signed tokens.
- Secrets never enter browser code.
- Retrieved user content is untrusted context, not instructions.
- Sensitive memories require careful review.
- Users can edit, disable, export, and delete their data.
- User account deletion hard-deletes user data from all app-controlled stores and indexes.
- OrcaShovel is not a medical, HIPAA-compliant, legal, or financial compliance product.

## Threats

### Cross-User Data Leakage

Mitigations:

- internal user ID linked to Clerk
- tenant ID used as a billing/isolation boundary
- Convex indexes by user
- helpers that require `tenantId` and `userId`
- Qdrant provider API does not allow unscoped search
- Qdrant filter builder owns hard constraints; callers can only add optional narrowing filters
- tests for user isolation

### Prompt Injection

Sources:

- inbound emails
- copied notes
- journal entries
- retrieved memories

Mitigations:

- prompts label retrieved content as untrusted
- tools are policy-checked
- AI cannot directly execute arbitrary actions
- mutating tools require approval where needed

### Email Spoofing / Thread Hijacking

Mitigations:

- verify Resend webhook signature
- use signed or hashed reply tokens
- match token to `userId` and thread
- reject expired/reused invalid tokens

### Cost Runaway

Mitigations:

- model router budget classes
- plan-specific model pools and limits
- max steps
- max tokens
- per-user rate limits
- per-tenant rate limits
- centralized config/constants for all limits
- Trigger.dev concurrency queues
- aiRun cost logging
- six-month usage-event TTL target
- admin alerts for spikes

### Sensitive Data Exposure to Models

Mitigations:

- task-specific retrieval
- provider data policy controls
- redact or omit unnecessary sensitive fields
- prefer privacy-safe providers/models for sensitive tasks
- disable telemetry input/output recording by default
- do not send high-sensitivity memories to unapproved free providers/models

### Admin Raw Data Exposure

Policy:

- app admin can see operational dashboards, metrics, usage, costs, failed jobs, feature state, and account status
- app admin does not see other users' raw private content by default
- users see and manage their own raw data through normal user surfaces

## User Controls

MVP should include:

- delete raw source
- delete/disable memory fact
- approve/reject candidate memory
- pause automation
- disable email follow-ups
- export data
- hard delete account data
- manage quiet hours and personalization
- manage allowed inbound/reply emails
- manage settings from dashboard and chat where safe

## Medical/Compliance Disclaimer

The assistant system prompt must make clear that OrcaShovel is a personal journal/memory assistant, not a medical compliance system or professional medical advisor. Health-related notes are treated as sensitive memories and are stored/processed only under strict user control and policy limits.
