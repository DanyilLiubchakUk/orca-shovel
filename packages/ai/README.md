# packages/ai

AI SDK integration layer.

Responsibilities:

- OpenRouter provider setup
- model router
- `generateText` wrappers
- `streamText` wrappers
- structured output helpers using AI SDK `Output.*`
- prompts
- task-specific AI functions
- usage/cost logging hooks
- privacy-safe telemetry defaults

Rule: raw model IDs do not appear outside this package except in tests or config.

Free/paid/admin model routing is task-specific. Free users should not use one generic random model for every task; the router should select preapproved free/cheap models by task capability and privacy policy.
