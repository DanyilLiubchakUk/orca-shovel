# Context Format

Use `CONTEXT.md` for domain language and product concepts that future contributors must understand before changing the system.

## Structure

```md
# Project Context

## Product Definition

Short description of what the product is and what it is not.

## Domain Glossary

**Canonical Term**
Definition in product language. Include boundaries when the term can be confused with another term.

## Product Principles

- Stable rules that should shape product and engineering decisions.
```

## Rules

- Keep implementation details out unless they define a domain boundary.
- Prefer one canonical term over multiple synonyms.
- Update existing terms instead of duplicating near-matches.
- Add concrete boundaries when a term can be misread.
