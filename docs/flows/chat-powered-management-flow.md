# Flow: Chat-Powered Management

## Goal

The user can manage OrcaShovel from chat, not only by clicking through dashboard pages.

## Flow

```text
User asks to change/query/manage something
  -> classify intent
  -> load settings/tool registry
  -> verify user and tenant scope
  -> validate requested change
  -> check policy, plan, limits, and risk
  -> ask for confirmation if needed
  -> execute typed tool
  -> write audit log
  -> explain result in chat
```

## Examples

### Show Settings

User:

> Give me all settings that I can tweak with you.

Assistant:

- returns grouped settings
- can filter by domain, such as email/automation
- does not expose admin-only settings

### Change Grace Window

User:

> Make the grace period if you missed automation email to be 5 hours.

System:

- validates setting exists
- validates range from constants
- updates user settings
- audits change

### Move Memory Namespace

User:

> Get all data related to cleaning and engineering and move it to @work.

System:

- searches only user-scoped memory
- previews affected items
- asks confirmation
- updates namespace tags
- audits old/new namespace state

### Force Namespace/Profile Use

User:

> /home summarize what you know about repairs

System:

- must retrieve from `@home`
- may use other context only if the user asks or policy requires it

User:

> @profile:preferences remember that I prefer direct email drafts

System:

- creates a profile update candidate or profile refresh task
- audits the requested profile target

## Hard Rule

Chat is not a bypass. It is another UI for the same typed tools and policies.
