# Flow: Factual Memory Question

## Scenario

User asks:

> When did I wear the red hat on the hike in the forest?

## Flow

```text
Browser chat
  -> BFF chat route/server function
  -> classify as factual retrieval
  -> detect namespace/time hints such as /home or "last week"
  -> search Qdrant with central tenantId/userId/status/visibility/time filter
  -> fetch source records from Convex
  -> rank/corroborate results
  -> answer with citations/source cards
  -> log aiRun and memory usage
```

## Context Needed

- semantic chunks
- source records
- memory facts
- date metadata
- namespace tags when user scopes retrieval

## Context Not Needed

- style profile
- broad life profile
- unrelated preferences

## Required Behavior

If evidence is weak, say so. Do not invent a date.
