# UI Information Architecture

## Top-Level App Sections

The app is mobile-first. The first screen should show only the information required to act: capture, pending follow-ups, relevant memory, and current assistant/email state. Desktop can expose more dashboard density, but mobile cannot be a reduced product.

### Today

Purpose:

- fast journal capture
- current reminders
- recent assistant follow-ups
- quick context summary
- current local day based on user timezone
- quiet-hours and email-send awareness

Primary actions:

- write journal entry
- answer pending follow-up
- review today's extracted memories

### Chat

Purpose:

- ask factual questions from memory
- request drafts
- plan with assistant
- manage settings and preferences
- manage memories, namespaces, email preferences, and automations through safe tools

Primary actions:

- ask question
- view used sources
- approve requested actions
- create capability request when unsupported
- inspect "what settings can I tweak?"
- filter settings by domain, such as email or automations

### Memory

Purpose:

- inspect what the system knows
- edit/delete/disable memories
- review candidate memories

Views:

- memory facts
- raw sources
- people
- projects
- preferences
- profiles
- namespace tags/folders such as `@home`
- soon-expiring memories
- candidate review queue

### Email

Purpose:

- show assistant email threads
- show inbound replies as memory sources
- pause email follow-ups

Views:

- threads
- messages
- reply-token status
- delivery events
- allowed inbound sender emails
- sent/received limits
- pause/disable controls

### Automations

Purpose:

- inspect and control recurring/event-triggered assistant behavior

Views:

- active automations
- proposed automations
- quiet hours
- frequency limits
- pause/disable controls
- custom prompt and cron-style schedule editor
- missed-send grace window settings
- built-in automation opt-out and custom clone controls

### Settings

Purpose:

- privacy and account controls

Views:

- profile/timezone
- do-not-disturb/quiet hours
- email preferences
- personalization controls
- recent context days slider/range
- chat and permanent-thread limits
- export data
- delete data

### Admin

Purpose:

- product-owner operations

Views:

- capability requests
- risky automation proposals
- failed jobs
- cost spikes
- AI run logs
- usage by feature/channel/model/task
- retained usage events with TTL
- Qdrant index health
- user lookup and account deletion state

## First-Run Onboarding

Recommended steps:

1. Confirm timezone.
2. Ask preferred quiet hours, defaulting to a configurable value such as 10pm-7am.
3. Explain raw sources vs memories.
4. Ask whether email follow-ups are enabled.
5. Set up personalization preferences.
6. Offer an optional data dump/import step that can be skipped.
7. Invite first journal entry.

## UX Trust Requirements

- AI answers can show sources.
- Memory records show source, confidence, status, last used, and controls.
- Automations show why they exist and how to disable them.
- Candidate memories can be approved, edited, rejected, or archived.
- Sensitive memories are never hidden in an opaque backend-only state.
- Users can edit captured/source dates while creation dates remain visible.
- Users can manage important data and settings from chat or dashboard.
