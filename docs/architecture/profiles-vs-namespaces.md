# Profiles vs Namespaces

Profiles and namespaces are separate systems.

## Profiles

Profiles are compact system-managed summaries used to personalize AI behavior.

Examples:

- `style`: how the user writes
- `preferences`: user preferences and defaults
- `lifeContext`: stable personal context
- `workContext`: current work/project context
- `recentContext`: rolling recent summary

Profiles are not folders. They are summaries. The assistant updates them carefully from sources, memory facts, and user edits.

## Namespaces

Namespaces are user-managed memory folders/scopes.

Examples:

- `@home`
- `@work`
- `@kitchen`
- `@interviews`

Namespaces help the user explicitly organize and retrieve memory.

## Retrieval Syntax

Namespace retrieval:

```text
/home what do you remember about the kitchen remodel?
/work summarize my last week
```

Rule: when a prompt starts with `/home`, OrcaShovel must include the `@home` namespace in retrieval filters. It can retrieve other context only if the user asks or if policy says it is required for the task.

Profile retrieval:

```text
/profile:style rewrite this like me
/profile:work draft an update for my lead
/profile:recent what has been happening lately?
```

Rule: profile syntax guarantees that the named profile is loaded if it exists and the user has not disabled personalization.

## Saving Syntax

Namespace save:

```text
@home remember that the spare key is in the blue drawer
@work this belongs with my engineering cleanup notes
```

Rule: explicit `@home` save syntax guarantees the raw source and any extracted memory candidates are tagged with `@home`.

Profile save:

```text
@profile:preferences remember that I prefer short direct emails
@profile:style learn that I usually write in a casual direct tone
```

Rule: explicit profile syntax creates a profile update candidate or profile refresh task. It does not blindly overwrite a profile summary without validation/audit.

## Relationship

Profiles can use namespace data as input. Namespaces can be searched without loading profiles.

Examples:

- A work draft may use `/work` namespace plus `workContext` and `style` profiles.
- A factual question about `/home` should not load `style` unless the user asks for writing help.

