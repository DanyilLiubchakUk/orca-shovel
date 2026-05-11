# Flow: Personalized Draft

## Scenario

User asks:

> Give me a text that I can send to my team lead and ask how I did this week.

## Flow

```text
Browser chat
  -> BFF chat route/server function
  -> classify as personalized draft
  -> retrieve recent work memories
  -> retrieve relationship context for team lead if known
  -> load style profile
  -> generate draft with AI SDK
  -> stream or return draft
  -> show source context used
  -> log aiRun
```

## Context Needed

- recent work facts
- current active projects
- accomplishments
- blockers
- team lead relationship details
- style profile
- user preferences about tone/length

## Context Not Needed

- unrelated life facts
- full raw journal history
- sensitive categories unless directly relevant and user-authorized

## UX Requirement

Show a compact "used context" panel, for example:

- Monday journal entry about fixing X
- Wednesday note about helping with Y
- Friday update about finishing Z
- style profile version 4

