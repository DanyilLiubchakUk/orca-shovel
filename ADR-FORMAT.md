# ADR Format

Use ADRs for decisions that are hard to reverse, surprising without context, and based on a real trade-off.

## Template

```md
# ADR 0000: Decision Title

## Status

Accepted

## Context

What problem forced the decision, including meaningful constraints and alternatives.

## Decision

The chosen approach.

## Consequences

- What becomes easier.
- What becomes harder.
- What future work or guardrails this creates.
```

## Rules

- Keep titles short and specific.
- Explain why, not just what.
- Do not create ADRs for obvious or easily reversible choices.
- If a decision is replaced later, keep the old ADR and mark it superseded.
