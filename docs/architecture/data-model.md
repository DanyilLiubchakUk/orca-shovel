# Data Model Plan

Convex is the source of truth. This file describes planned tables/collections and relationships, not final schema code.

## Identity

### `tenants`

- `name`
- `plan`: `personal_free | personal_paid | admin_internal`
- `status`: `active | past_due | suspended | deleted`
- `billingCustomerId`
- `billingProvider`: `none | stripe`
- `billingReady`: boolean flag for future Stripe integration
- `limitsProfile`
- `createdAt`, `updatedAt`

Indexes:

- `by_billingCustomerId`

### `users`

- `tenantId`
- `clerkUserId`
- `primaryEmail`
- `mainOutboundEmail`
- `allowedInboundEmails`
- `displayName`
- `timezone`
- `role`: `user | admin`
- `locale`
- `quietHours`
- `recentContextDays`
- `createdAt`, `updatedAt`

Indexes:

- `by_clerkUserId`
- `by_primaryEmail`
- `by_tenantId`

### `userEmailAddresses`

- `tenantId`
- `userId`
- `email`
- `kind`: `account | additional`
- `verified`
- `isMainOutbound`
- `createdAt`, `updatedAt`

Rules:

- User can receive/reply from account email plus up to two additional verified emails.
- New assistant-initiated emails default to the user's main outbound email.
- Replies should go back to the email address used in that thread.

## Raw Sources

### `journalEntries`

- `userId`
- `tenantId`
- `body`
- `tags`
- `namespaceTags`
- `capturedAt`
- `source`: `web | email | import`
- `visibility`
- `memoryMode`: `remembered | reference_only | locked_private`
- `processingStatus`
- `createdAt`, `updatedAt`

Memory mode names:

- `remembered`: raw source can be extracted, indexed, and retrieved by AI.
- `reference_only`: raw source is visible/searchable manually in the dashboard but does not create vectors.
- `locked_private`: raw source is stored but excluded from AI retrieval until explicitly re-enabled.

### `sourceVersions`

- `tenantId`
- `userId`
- `sourceType`
- `sourceId`
- `body`
- `capturedAt`
- `version`
- `createdAt`

Purpose:

- Preserve source history when a user edits source text or source date.
- Keep both user-edited source date and immutable creation date.

### `emailThreads`

- `userId`
- `tenantId`
- `resendThreadId`
- `subject`
- `status`
- `lastMessageAt`
- `createdAt`, `updatedAt`

### `emailMessages`

- `userId`
- `tenantId`
- `threadId`
- `sentToUserEmail`
- `direction`: `outbound | inbound`
- `from`, `to`, `cc`, `bcc`
- `subject`
- `textBody`
- `htmlBodyRef` only if sanitized HTML storage is intentionally enabled later
- `resendEmailId`, `messageId`, `inReplyTo`
- `replyTokenId`
- `processingStatus`
- `createdAt`

## Memory

### `memoryFacts`

- `userId`
- `tenantId`
- `type`: `person | preference | event | task | project | relationship | style | work | life | health | finance | legal | other`
- `status`: `candidate | active | archived | deleted | rejected`
- `sensitivity`: `low | medium | high`
- `scope`: `global | work | project | person | relationship | namespace | source_limited`
- `namespaceTags`
- `confidence`
- `title`
- `content`
- `structured`
- `sourceRefs`
- `qdrantPointIds`
- `visibility`
- `expiresAt`
- `expiryReviewAt`
- `expiryExtensionCount`
- `lastUsedAt`
- `createdAt`, `updatedAt`

### `memoryEvents`

- `userId`
- `tenantId`
- `memoryFactId`
- `eventType`: `created | approved | edited | archived | deleted | restored | used`
- `actor`: `user | assistant | admin | system`
- `reason`
- `createdAt`

### `profiles`

- `userId`
- `tenantId`
- `profileType`: `style | preferences | lifeContext | workContext | recentContext`
- `version`
- `content`
- `sourceRefs`
- `updatedByRunId`
- `createdAt`, `updatedAt`

Profiles are system-managed personalization summaries. They are separate from user-managed namespace tags such as `@home` or `@work`.

### `namespaceTags`

- `tenantId`
- `userId`
- `name`
- `description`
- `createdBy`: `user | assistant`
- `createdAt`, `updatedAt`

Purpose:

- Folder-like user-managed groupings for memories and sources.
- Chat can add, move, merge, and retrieve data by namespace when policy allows.

## Tasks, Events, and Automations

### `reminders`

- `userId`
- `tenantId`
- `status`: `proposed | scheduled | sent | canceled | failed`
- `sourceRefs`
- `title`
- `scheduledFor`
- `channel`: `email | web`
- `messageIntent`
- `triggerRunId`
- `createdAt`, `updatedAt`

### `automationPolicies`

- `userId`
- `tenantId`
- `name`
- `status`: `draft | pending_admin | active | paused | rejected`
- `riskLevel`: `low | medium | high`
- `channel`
- `schedule`
- `quietHours`
- `frequencyLimit`
- `sentReceivedLimit`
- `graceWindow`
- `sendMissedAfterGrace`
- `userPrompt`
- `persona`
- `prompt`
- `approval`
- `templateId` when cloned from built-in automation template
- `createdAt`, `updatedAt`

Automation policies can be app-built or user-created. Built-in automations are templates. Users can opt out of built-ins and clone templates into custom automations with editable prompts, schedule, quiet-hour behavior, grace windows, and limits.

### `automationTemplates`

- `name`
- `description`
- `defaultSchedule`
- `defaultPrompt`
- `defaultPersona`
- `riskLevel`
- `enabled`
- `createdAt`, `updatedAt`

Rules:

- Built-in templates are not edited directly by users.
- Users clone templates into `automationPolicies`.

### `capabilityRequests`

- `userId`
- `tenantId`
- `requestedByRunId`
- `status`: `pending | approved | rejected | implemented | closed`
- `userRequest`
- `proposedCapability`
- `requiredTools`
- `risks`
- `saferAlternative`
- `adminNotes`
- `createdAt`, `updatedAt`

## AI and Audit

### `aiRuns`

- `userId`
- `tenantId`
- `taskName`
- `model`
- `provider`
- `status`
- `inputKind`
- `outputKind`
- `sourceRefs`
- `toolCalls`
- `usage`
- `estimatedCost`
- `privacyMode`
- `ttlExpiresAt`
- `startedAt`, `finishedAt`

### `auditLogs`

- `userId`
- `tenantId`
- `actor`
- `action`
- `targetType`
- `targetId`
- `metadata`
- `ttlExpiresAt`
- `createdAt`

### `usageEvents`

- `tenantId`
- `userId`
- `eventType`
- `feature`
- `channel`
- `model`
- `provider`
- `usage`
- `estimatedCost`
- `metadata`
- `ttlExpiresAt`
- `createdAt`

Rules:

- Store detailed usage events even if the admin UI does not display all of them yet.
- Default TTL target is six months unless a legal/privacy policy requires shorter retention.
- Tunable TTL values live in centralized config/constants.
- After account deletion, user-owned content is hard-deleted, but non-identifying aggregate metrics may remain.

### `publicDocs`

- `slug`
- `title`
- `body`
- `status`: `draft | published | archived`
- `metaTitle`
- `metaDescription`
- `canonicalPath`
- `updatedBy`
- `publishedAt`
- `createdAt`, `updatedAt`

Purpose:

- Public SEO/user/AI-readable documentation.
- Dynamic docs pages are rendered from records rather than one code file per docs page.

### `chatThreads`

- `tenantId`
- `userId`
- `type`: `temporary | permanent`
- `status`: `active | archived | expired | deleted`
- `title`
- `tokenBudget`
- `remainingTokens`
- `tokenDecayStartedAt`
- `tokenRenewalAt`
- `renewalAt`
- `createdAt`, `updatedAt`

### `chatMessages`

- `tenantId`
- `userId`
- `threadId`
- `role`
- `content`
- `tokenEstimate`
- `tags`
- `namespaceTags`
- `memoryIntent`: `temporary | remembered | reference_only | locked_private`
- `createdAt`

Rules:

- Chat limits are token-based and user-visible as token budget, not message count.
- Temporary chats have a configurable multiple of permanent chat token budget, such as 4x.
- Temporary chat history is deleted when the chat closes.
- Both temporary and permanent chats can create extracted memories only if the user's chat memory capture setting allows it.
- Permanent chat token allowance decays over time after thread creation; users can see remaining tokens and renewal/expiration timing.

### `deletionJobs`

- `tenantId`
- `userId`
- `status`: `pending | running | complete | failed`
- `targets`: `convex | qdrant | email | logs | all`
- `startedAt`, `completedAt`
- `createdAt`, `updatedAt`

Deletion jobs hard-delete user content. Non-identifying aggregate metrics may remain for platform analytics.

## Qdrant Payload Contract

Every Qdrant point must include:

- `tenantId`
- `userId`
- `sourceType`
- `sourceId`
- `memoryFactId` when applicable
- `chunkId` when applicable
- `memoryType`
- `visibility`
- `status`
- `sensitivity`
- `confidence`
- `createdAt`
- `capturedAt` when different from `createdAt`
- `expiresAt` when relevant
- `namespaceTags`
- `tags`

Every Qdrant query must use a centrally built filter. App code must not assemble ad hoc Qdrant filters. The base filter always includes hard required constraints before any optional semantic filters:

```json
{
  "must": [
    { "key": "tenantId", "match": { "value": "tenant-id" } },
    { "key": "userId", "match": { "value": "internal-user-id" } },
    { "key": "status", "match": { "value": "active" } },
    { "key": "visibility", "match": { "value": "enabled" } },
    { "key": "createdAt", "range": { "gte": "time-window-start-when-known" } }
  ]
}
```

Time filters should be included whenever the task has a natural time window, such as "this week", "recent", "after the interview", or "last month". If no natural time window exists, retrieval should still apply tenant/user/status/visibility filters and then rely on semantic ranking plus result limits.
