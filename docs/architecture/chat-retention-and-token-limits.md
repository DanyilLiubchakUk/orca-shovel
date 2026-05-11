# Chat Retention and Token Limits

Chat limits are token-based. Users should see token allowance/remaining budget, not implementation details such as message counts.

## Chat Types

### Temporary Chat

Purpose:

- quick questions
- low-friction exploration
- not retained after close

Rules:

- temporary chats have a token budget
- default temporary budget is a multiplier of permanent chat budget, such as `4x`, stored in `packages/config`
- when closed, temporary chat history is not retained
- temporary chat can still retrieve memory while open
- extracted memories are saved only if the user's chat memory setting allows it

### Permanent Chat

Purpose:

- longer-running context
- named threads
- explicit memory relationship

Rules:

- permanent chats have token budgets, not visible message limits
- age-based decay reduces available new-token budget over time
- user sees remaining tokens and renewal/expiration timing
- permanent chat history can be retained according to policy/settings
- extracted memories are saved only if the user's chat memory setting allows it

## Chat Memory Setting

Users can control whether chat thoughts can become memories.

Setting:

- `chatMemoryCapture`: `off | explicit_only | on`

Meanings:

- `off`: never extract memories from chat.
- `explicit_only`: only extract when user uses save syntax like `@home remember...`.
- `on`: allow policy-controlled extraction from both temporary and permanent chats.

This setting applies to both temporary and permanent chats.

## Constants

All chat limits live in `packages/config`.

Examples:

- `PERMANENT_CHAT_TOKEN_BUDGET`
- `TEMPORARY_CHAT_TOKEN_MULTIPLIER`
- `CHAT_TOKEN_DECAY_DAYS`
- `CHAT_TOKEN_RENEWAL_WINDOW`
- `CHAT_MEMORY_CAPTURE_DEFAULT`

