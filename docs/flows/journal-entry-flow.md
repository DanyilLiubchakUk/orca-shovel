# Flow: Journal Entry to Memory

## Scenario

User writes:

> I have an interview at 11am and it might be an hour.

## Flow

```text
Browser
  -> createJournalEntry server function
  -> Clerk auth
  -> validate journal schema
  -> attach tenantId, userId, capturedAt, namespace tags, and memory mode
  -> Convex insert journalEntries
  -> Trigger.dev processJournalEntry task
  -> return success quickly

processJournalEntry
  -> read journal entry from Convex
  -> classify source
  -> extract event/reminder candidates with AI SDK
  -> create candidate/active memory facts
  -> create reminder proposal or scheduled reminder
  -> chunk and embed source
  -> upsert Qdrant vectors with tenantId/userId scoped payload
  -> update recent/work/life profile if useful
  -> log aiRuns and auditLogs
```

## Event Follow-Up Rule

If an entry implies an event with expected end time:

- infer end time only when confidence is acceptable
- schedule follow-up after a reasonable buffer, such as 30 minutes
- if date/time ambiguity exists, ask user or create a reminder proposal instead of scheduling

## Open Product Decisions

- Should the interview follow-up auto-schedule for MVP, or require confirmation first?
- What confidence threshold allows auto-scheduling?
- What is the default follow-up channel: email only, web notification, or both?

## Editing and Deletion

Users can edit source/captured dates after the fact, such as adding memories for a five-day vacation after returning home. The original creation date remains visible for audit/trust.

If a user deletes a raw source, OrcaShovel shows a confirmation explaining that linked memories and Qdrant vectors will be removed too. Confirmed deletion removes linked raw data, derived memory facts where applicable, and Qdrant points.
