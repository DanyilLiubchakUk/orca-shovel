# OrcaShovel Docs

This directory contains the product, architecture, security, and planning source of truth for OrcaShovel.

## Start Here

1. [Project Context](../CONTEXT.md)
2. [Current Repo State](planning/current-repo-state.md)
3. [Project Map](planning/project-map.md)
4. [MVP Scope](planning/mvp-scope.md)
5. [System Overview](architecture/system-overview.md)
6. [Requirements Traceability](planning/requirements-traceability.md)
7. [Decision Log](planning/decision-log.md)

## Architecture

- [System Overview](architecture/system-overview.md)
- [Data Model](architecture/data-model.md)
- [Memory Architecture](architecture/memory-architecture.md)
- [Agent Policy](architecture/agent-policy.md)
- [AI SDK Strategy](architecture/ai-sdk-strategy.md)
- [Settings and Chat Management](architecture/settings-and-chat-management.md)
- [Profiles vs Namespaces](architecture/profiles-vs-namespaces.md)
- [Billing Plans and Limits](architecture/billing-plans-and-limits.md)
- [Configuration and Constants](architecture/configuration-and-constants.md)
- [Deployment and CI](architecture/deployment-and-ci.md)
- [External Integrations](architecture/external-integrations.md)
- [Package Contracts](architecture/package-contracts.md)
- [UI Information Architecture](architecture/ui-information-architecture.md)

## Flows

- [Journal Entry Flow](flows/journal-entry-flow.md)
- [Email Loop Flow](flows/email-loop-flow.md)
- [Factual Memory Question Flow](flows/factual-memory-question-flow.md)
- [Personalized Draft Flow](flows/personalized-draft-flow.md)
- [Chat-Powered Management Flow](flows/chat-powered-management-flow.md)

## Planning

- [Grill Questions](planning/grill-questions.md)
- [Follow-Up Grill](planning/follow-up-grill.md)
- [Grill Answer Template](planning/grill-answer-template.md)
- [Implementation Sequence](planning/implementation-sequence.md)
- [Deferred File Ingestion](planning/deferred-file-ingestion.md)
- [Development Environment](planning/dev-environment.md)
- [Research Notes](planning/research-notes.md)

## Product And Security

- [Public Docs and SEO](product/public-docs-and-seo.md)
- [Security and Privacy](security/security-and-privacy.md)

## ADRs

- [0001: Use Single Bun Monorepo](adr/0001-use-single-bun-monorepo.md)
- [0002: Use TanStack Start as BFF](adr/0002-use-tanstack-start-as-bff.md)
- [0003: Use Convex as Source of Truth](adr/0003-use-convex-as-source-of-truth.md)
- [0004: Use Trigger.dev for Background Work](adr/0004-use-triggerdev-for-background-work.md)
- [0005: Use Qdrant for Vector Memory](adr/0005-use-qdrant-for-vector-memory.md)
- [0006: Use AI SDK with OpenRouter](adr/0006-use-ai-sdk-with-openrouter.md)

## Planned Code Boundary Notes

- [Web App](../apps/web/README.md)
- [Convex](../convex/README.md)
- [Trigger.dev](../trigger/README.md)
- [AI Package](../packages/ai/README.md)
- [Auth Package](../packages/auth/README.md)
- [Config Package](../packages/config/README.md)
- [Email Package](../packages/email/README.md)
- [Memory Package](../packages/memory/README.md)
- [Policy Package](../packages/policy/README.md)
- [Schemas Package](../packages/schemas/README.md)
- [UI Package](../packages/ui/README.md)
