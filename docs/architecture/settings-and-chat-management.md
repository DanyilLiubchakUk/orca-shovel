# Settings and Chat-Powered Management

## Principle

Every important user setting should be manageable from both:

- dashboard/settings UI
- chat, through typed policy-checked tools

Chat management must use the same validation, limits, audit logs, and permission checks as the dashboard.

## Settings Registry

Create a settings registry that defines:

- setting key
- display label
- domain
- type/schema
- default value from config
- user-editable
- chat-editable
- requires confirmation
- plan requirements
- risk level
- audit behavior

Example domains:

- profile
- timezone
- quiet hours
- email
- automations
- personalization
- recent context
- memory
- chat threads
- account deletion/export

## Chat Examples

Supported:

- "Show me all settings I can tweak with you."
- "Show all email and automation preferences."
- "Set quiet hours to 10pm to 7am."
- "Make the missed automation email grace period 5 hours."
- "Turn off personalization."
- "Use 10 days for recent context."
- "Move all memories about cleaning and engineering into @work."

Unsupported or risky:

- "Send this email to my boss."
- "Email me every five minutes forever."
- "Ignore quiet hours."

For unsupported requests, the assistant explains the OrcaShovel product limit and offers a safe alternative.

## Audit

Every chat-powered setting/data mutation creates an audit log:

- actor
- chat thread/message source
- setting or record changed
- old value when safe
- new value
- confirmation status

## Confirmation

Require confirmation for:

- deletion
- export
- disabling personalization globally
- creating recurring automations
- changing email addresses
- changing high-frequency automation limits
