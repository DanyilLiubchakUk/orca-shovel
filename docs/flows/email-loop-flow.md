# Flow: Email Back-and-Forth

## Outbound Email

```text
Trigger.dev reminder/automation task
  -> build email content with packages/email
  -> create signed reply token
  -> choose recipient email from account email + verified additional emails
  -> send via Resend to user's main outbound email unless thread/settings override
  -> store emailMessages outbound
  -> log audit and aiRun
```

Outbound emails should include a secure way to match replies:

- signed reply address, or
- reply token in headers/body metadata, or
- both

Do not rely only on sender email address.

New assistant-initiated emails go to the user's main outbound email by default. The main outbound email can be the account email or one of up to two verified additional emails. Replies stay on the same thread/address context when possible.

## Inbound Email

```text
Resend email.received webhook
  -> TanStack Start server route
  -> verify raw body signature
  -> parse metadata
  -> match signed reply token or verified allowed sender flow
  -> verify sender is account email or one of up to two verified additional emails
  -> create inbound emailMessage
  -> trigger processInboundEmail task
  -> return 2xx

processInboundEmail
  -> fetch full email text from Resend if webhook only contains metadata
  -> ignore/reject attachments in MVP
  -> sanitize and store raw text content
  -> classify reply intent
  -> process as raw source
  -> extract candidate memories
  -> update reminder/thread state
  -> optionally send next response if allowed by policy
```

## Prompt Injection Rule

Email content is untrusted user-provided data. It may be stored and summarized, but it cannot override system, developer, or policy instructions.

## User-Managed Email Settings

The user can manage these from settings/dashboard and chat:

- main outbound email
- up to two additional verified inbound/reply emails
- quiet hours
- sent/received limits
- custom automation schedules
- pause/disable email follow-ups
- missed-send grace window

If the user asks for an impossible setting, the assistant should explain the exact product constraint. Example: if the account email plus two additional emails are already configured, the user must remove one before adding another.

## Custom Email Automations

Users can create custom scheduled email automations with:

- schedule, such as every Thursday at 5pm
- prompt, such as "summarize what I cooked in the last 7 days and draft a message for my mom"
- source/retrieval scope
- quiet-hour behavior
- grace window
- send/receive limits
- opt-out controls

These automations are still policy-checked and limited by plan.
Custom email automations are allowed for all users, including free users, within configured plan limits.

## Product Decisions

- Assistant can send emails to the user through allowed reminder/follow-up/automation flows.
- Assistant cannot send emails to third parties in MVP; it can draft messages instead.
- Assistant should explain unsupported email actions as OrcaShovel limitations.
- Every outbound assistant email should include pause/disable controls for that automation/channel where applicable.
