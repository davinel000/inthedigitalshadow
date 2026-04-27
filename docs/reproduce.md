# Reproduce

This repository can be reused as a starting structure for studying your own traces with an agent such as Codex or Claude Code.

## Minimal Path

1. Pick one analytical block:
   - `project mass`
   - `allocate`
   - `delegate`
   - `overload`
2. Keep your raw data local.
3. Start from the closest table in [data/templates](../data/templates).
4. Ask your agent to adapt that structure to your export format.
5. Generate derived tables or figures in the same shape.
6. Compare your outputs to the public examples and notes in this repository.

## Good Starting Points

- `project mass`
  - use [project_mass_daily_template.csv](../data/templates/project_mass_daily_template.csv)
- `allocate`
  - use [allocate_budget_weekly_template.csv](../data/templates/allocate_budget_weekly_template.csv)
  - use [allocate_timeline_dataset_template.csv](../data/templates/allocate_timeline_dataset_template.csv)
  - use [allocate_event_markers_template.csv](../data/templates/allocate_event_markers_template.csv)

## Source Formats Used Here

- Telegram
  - exported chat packages with `result.json` and companion HTML/media folders
- ChatGPT
  - full export centered on `conversations.json`
- Mi Fitness
  - data-copy package distributed as a zipped folder with CSV tables

## Minimal Export Notes

- Telegram
  - export the chat with JSON included so that `result.json` is preserved
  - keep the media folders only if they are part of the analysis
- Mi Fitness
  - keep the original zipped data copy and an extracted working folder
  - work from derived phase or weekly tables rather than publishing raw health files
- ChatGPT
  - keep `conversations.json`
  - if project grouping matters, preserve the project page or another stable project index

Current public reference outputs:

- [data/derived/project_mass](../data/derived/project_mass)
- [data/derived/allocate](../data/derived/allocate)
- [data/derived/delegate](../data/derived/delegate)
- [data/derived/overload](../data/derived/overload)
- [data/derived/figures](../data/derived/figures)

## Local Processing For Private Corpora

For text-bearing private datasets, the safe default is:

1. parse and normalize locally with scripts
2. anonymize or reduce locally
3. run any LLM-based classification on a local model or local OpenAI-compatible server
4. publish only reduced tables and figures

This is especially relevant for:

- Telegram exports
- ChatGPT exports that include sensitive files or notes
- Mi Fitness exports

## Local LLM Recommendation

Two practical routes:

- LM Studio with its local OpenAI-compatible server
- Ollama with a local Qwen model

Official references:

- [LM Studio local server docs](https://lmstudio.ai/docs/developer/core/server)
- [LM Studio OpenAI-compatible API](https://lmstudio.ai/docs/app/api/endpoints/openai//)
- [Ollama docs](https://docs.ollama.com/index)
- [Qwen3 quickstart](https://github.com/QwenLM/Qwen3/blob/main/docs/source/getting_started/quickstart.md)

For Qwen 3, non-thinking mode is the useful default for structured annotation and classification. The official Qwen docs describe both `enable_thinking=False` and the soft switch `/no_think`.

## Minimal Prompt Pattern

For private analytical work, keep prompts structured and bounded.

```text
You are annotating one row from a private research corpus.
Classify only the requested fields.
Return valid JSON only.
Do not quote or repeat the source text.

Task:
- decide whether this message contains a request
- if yes, assign one primary task type
- if relevant, assign uptake category

Allowed labels:
- request_presence: yes | no | unclear
- task_type: analysis | coding | writing | planning | coordination | technical_setup | research | creative | admin_legal | other
- uptake_label: accept | clarify | modify | challenge | defer | reject | none | result_report | unknown

Message:
{{message_text}}

Context:
{{previous_message_summary}}
```

For Qwen 3, append `/no_think` in the final user turn or configure non-thinking mode in the serving layer when available.

## What To Ask An Agent

Short prompts are enough:

- "Explain the structure of `project_mass_daily_template.csv`."
- "Map my budget export to `allocate_budget_weekly_template.csv`."
- "Turn my schedule notes into the shape of `allocate_timeline_dataset_template.csv`."
- "Help me derive event markers from my notes and calendar."

## Principle

Use the repository structure, not the project-specific private data. The goal is to reuse the method and table shapes with your own material.
