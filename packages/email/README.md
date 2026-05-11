# packages/email

Resend email integration.

Responsibilities:

- outbound email helper
- inbound payload parsing
- webhook signature verification helpers
- signed reply token creation/verification
- email template primitives
- allowed sender verification for account email plus additional verified emails
- main outbound email resolution

Rule: inbound email content is untrusted context.

Rule: assistant-initiated emails go to the user's main outbound email by default; replies stay with the same thread/address context when possible.
