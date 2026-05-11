# Package Contracts

These are planned public contracts. Final code may adjust names, but the boundaries should remain.

## `packages/ai`

Exports:

- `selectModel(taskType, policy)`
- `generateStructured(task, schema, input, options)`
- `generateTextForTask(task, input, options)`
- `streamAssistantResponse(input, options)`
- `logAiRunStart(...)`
- `logAiRunFinish(...)`

Does not export:

- raw provider clients to UI code
- raw API keys

Reads task defaults, model IDs, budget classes, and step/token limits from `packages/config`.

## `packages/config`

Exports:

- plan constants and feature gates
- model routing constants
- memory/retrieval constants
- chat thread/message limits
- email quiet-hour and send/receive limits
- automation frequency and grace-window limits
- settings defaults and ranges
- TTL values for usage/audit retention

Does not export:

- secrets
- user-specific mutable settings

## `packages/memory`

Exports:

- `searchMemory({ tenantId, userId, query, filters, timeWindow, limit })`
- `upsertMemoryVector({ tenantId, userId, point })`
- `deleteMemoryVector({ tenantId, userId, pointId })`
- `rebuildUserMemoryIndex({ tenantId, userId })`
- `chunkText({ text, sourceType, sourceId })`
- `buildQdrantFilter({ tenantId, userId, filters, timeWindow, policy })`

Does not export:

- unscoped Qdrant search
- caller-built Qdrant filters that skip required tenant/user/status/visibility constraints
- direct cross-user collection scan

## `packages/policy`

Exports:

- `getToolRegistry()`
- `getCapabilityRegistry()`
- `evaluateActionPlan(plan, context)`
- `requiresUserApproval(action)`
- `requiresAdminApproval(action)`
- `createCapabilityRequestDraft(request, context)`
- `enforceAutomationPolicy(policy, proposedRun)`
- `evaluateSettingChange(request, context)`
- `listChatManageableSettings(context)`

Does not export:

- arbitrary "execute anything" tool

## `packages/email`

Exports:

- `sendAssistantEmail(input)`
- `createReplyToken({ userId, threadId, purpose, expiresAt })`
- `verifyReplyToken(token)`
- `verifyResendWebhook(rawBody, headers)`
- `parseInboundEmailEvent(event)`
- `resolveOutboundRecipient({ tenantId, userId, threadId })`
- `verifyAllowedInboundSender({ tenantId, userId, email })`

Does not export:

- generic unaudited email send function for AI tools

## `packages/auth`

Exports:

- `requireClerkUser(request/context)`
- `getOrCreateInternalUser(clerkIdentity)`
- `assertUserScope(userId, record)`

Does not export:

- client-side secret helpers

## `packages/schemas`

Exports:

- DTO schemas
- tool input schemas
- AI output schemas
- shared enums
- external webhook payload normalization schemas

Does not export:

- functions that call external services

## `packages/ui`

Exports:

- reusable UI components
- dashboard layout components
- memory/source/reminder display components

Does not export:

- server functions
- Convex mutations
- AI provider code
