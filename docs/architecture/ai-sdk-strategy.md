# AI SDK Strategy

## Current Direction

Use Vercel AI SDK v6 as the TypeScript AI framework and OpenRouter as the primary model gateway.

Key current AI SDK v6 implication: prefer `generateText` and `streamText`. For structured outputs, use `output: Output.object(...)`, `Output.array(...)`, or similar output specifications instead of older `generateObject` patterns.

## Model Router

All model choices go through `packages/ai/model-router`.

Model IDs, budget classes, free-model fallbacks, token limits, retry limits, step caps, and task defaults must live in centralized config/constants. Do not scatter model strings or numeric limits through routes/tasks/components.

Planned task mapping:

| Task | Call Pattern | Model Class |
| --- | --- | --- |
| request classification | `generateText` + structured output | cheap structured model |
| memory extraction | `generateText` + `Output.array` | cheap structured model |
| reminder extraction | `generateText` + `Output.object` | cheap structured model |
| factual answer | retrieval + `streamText` | cheap/medium model |
| personalized draft | retrieval + style profile + `generateText` or `streamText` | stronger writing model |
| weekly summary | `generateText` | cheap/medium summarizer |
| capability proposal | `generateText` + structured output | stronger reasoning model |
| admin review summary | `generateText` | stronger reasoning model |

## Provider Rules

- OpenRouter provider lives in `packages/ai`.
- Raw model IDs are centralized.
- Model settings include max steps, max tokens, privacy routing, and budget class.
- Provider metadata and AI SDK usage are captured into `aiRuns`.
- Inputs/outputs should not be recorded in telemetry by default because user content is private.
- Personal free users use preselected free or zero-cost model routes per task, not one random free model for everything.
- Free users can store high-sensitivity memories. High-sensitivity tasks are not blocked; they route to an approved privacy-safe model/provider path and never to unapproved free providers/models.
- Personal paid users can use regular cheap/needed models by task.
- Admin is operationally unlimited but should still default to the same cheap model strategy unless explicitly configured.
- Free model availability is unstable, so the model router must support fallbacks and admin review of model health.

## Tool Calling Rules

Use AI SDK tools only behind a project tool registry.

Tool categories:

- Read-only: memory search, profile read, source lookup.
- Proposal-only: create reminder proposal, create automation proposal, create capability request, generate unsupported-action explanation.
- Mutating low-risk: create candidate memory, mark task complete.
- Mutating high-risk: send email, enable automation, delete data, export data.

High-risk tools require explicit user or admin approval.

Tool design rules:

- Keep each tool narrow.
- Use simple schemas.
- Prefer five or fewer tools in a single model call.
- Use `stopWhen` for multi-step loops.
- Cap steps and cost.
- Separate read-only chat tools from mutating workflow tools.

## Observability

Each AI call should log:

- task name
- model ID
- provider
- start/end time
- status
- token usage
- total usage across steps
- estimated cost
- tool calls
- source references
- privacy mode

Use AI SDK callbacks such as `onFinish` and streaming lifecycle hooks. Use OpenTelemetry only with `recordInputs: false` and `recordOutputs: false` unless a redacted/debug mode is explicitly enabled.

## Prompt Structure

Prompts should be split by task:

- assistant conversational behavior
- memory extraction
- reminder extraction
- source chunk classification
- sensitivity classification
- retrieval answer
- personalized drafting
- profile update
- capability request planning
- admin review summary

Retrieved journal, email, and chat contents are untrusted context, never instructions.

The assistant system prompt must explain that OrcaShovel is not medical, legal, financial, or HIPAA-compliant professional advice. Health-related memories can be stored as sensitive personal notes, but the assistant must not present itself as a compliant medical system.
