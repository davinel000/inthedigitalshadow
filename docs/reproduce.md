# Reproduce

This repository is meant to be reused with an agent such as Codex or Claude Code. Use the analytical shapes with your own local material.

## Minimal Path

1. Pick one block:
   - `project mass`
   - `allocate`
   - `delegate`
   - `overload`
2. Keep your raw exports local.
3. Start from the closest public table or template.
4. Ask your agent to map your data into that structure.
5. Generate reduced derived tables first.
6. Build figures only after the tables stabilize.

## Block By Block

### Project Mass

Use this when you want to reconstruct how a project accumulated across time.

Start from:

- [project_mass_daily_template.csv](../data/templates/project_mass_daily_template.csv)
- [project_mass_daily.csv](../data/derived/project_mass/project_mass_daily.csv)
- [project_mass_toe_daily.csv](../data/derived/project_mass/project_mass_toe_daily.csv)

Minimum useful inputs:

- one project folder
- file timestamps
- file sizes
- optionally a `.toe` subset

Good agent ask:

- "Map my project folder chronology to `project_mass_daily_template.csv` and keep `.toe` as a separate curve."

### Allocate

Use this when you want to reread planning, scarcity, occupied time, and budget rhythm.

Start from:

- [allocate_budget_weekly_template.csv](../data/templates/allocate_budget_weekly_template.csv)
- [allocate_timeline_dataset_template.csv](../data/templates/allocate_timeline_dataset_template.csv)
- [allocate_event_markers_template.csv](../data/templates/allocate_event_markers_template.csv)

Public reference outputs:

- [allocate_budget_weekly.csv](../data/derived/allocate/allocate_budget_weekly.csv)
- [allocate_timeline_dataset.csv](../data/derived/allocate/allocate_timeline_dataset.csv)
- [allocate_event_markers.csv](../data/derived/allocate/allocate_event_markers.csv)

Minimum useful inputs:

- a schedule or working timeline
- a budget or expense log
- dated notes about shifts, deadlines, rehearsals, failures, or repairs

Good agent asks:

- "Turn my budget export into the structure of `allocate_budget_weekly_template.csv`."
- "Turn my schedule notes into `allocate_timeline_dataset_template.csv`."
- "Derive event markers from my notes and calendar."

### Delegate

Use this when your material includes work requests, responses, and follow-up turns across chats.

Public reference outputs:

- [delegate_task_type_comparison.csv](../data/derived/delegate/delegate_task_type_comparison.csv)
- [delegate_uptake_comparison.csv](../data/derived/delegate/delegate_uptake_comparison.csv)

Minimum useful inputs:

- a normalized chat export
- sender roles
- timestamps
- enough local context to read a request and its continuation

Minimal local logic:

1. normalize messages into one table
2. preserve one raw text layer
3. create one reduced analysis text layer
4. identify request-bearing messages
5. assign one primary task type
6. classify uptake after the response
7. aggregate by target channel

Source formats used here:

- Telegram exports with `result.json`
- ChatGPT exports with `conversations.json`

### Overload

Use this when you want to compare project chronology against embodied or self-tracking traces.

Public reference outputs:

- [overload_phase_summary_fitness.csv](../data/derived/overload/overload_phase_summary_fitness.csv)
- [overload_timeline_weekly.csv](../data/derived/overload/overload_timeline_weekly.csv)

Minimum useful inputs:

- one dated project timeline
- one dated self-tracking source
- one list of significant project events

Recommended logic:

1. build a dated project timeline
2. derive weekly or phase-level summaries from the self-tracking export
3. compare chronology and embodied traces through phases rather than isolated days

## Source Formats Used Here

- Telegram
  - exported chat packages with `result.json`
- ChatGPT
  - full export centered on `conversations.json`
- Mi Fitness
  - zipped data-copy package with CSV tables

## Keep Private Data Local

For text-bearing or health-bearing corpora, the working rule is simple:

1. parse locally
2. reduce locally
3. anonymize locally where needed
4. run LLM steps locally or on a local OpenAI-compatible server
5. publish only reduced tables and figures

This is especially important for:

- third-party chat messages
- private notes
- raw health exports

## Local LLM Workflow

Two practical routes:

- LM Studio with local OpenAI-compatible server
- Ollama with a local Qwen model

Official references:

- [LM Studio local server docs](https://lmstudio.ai/docs/developer/core/server)
- [LM Studio OpenAI-compatible API](https://lmstudio.ai/docs/app/api/endpoints/openai//)
- [Ollama docs](https://docs.ollama.com/index)
- [Qwen3 quickstart](https://github.com/QwenLM/Qwen3/blob/main/docs/source/getting_started/quickstart.md)

For Qwen 3, non-thinking mode is the useful default for structured annotation. The official docs describe both `enable_thinking=False` and `/no_think`.

## Minimal Prompt Pattern

For local message annotation, keep the request bounded.

```text
You are annotating one row from a private research corpus.
Classify only the current message.
Use the surrounding messages only as context.
Return valid JSON only.
Do not quote the source text.

Task:
- decide whether the current message contains a request
- if yes, assign one primary task type
- if relevant, assign uptake category

Allowed labels:
- request_presence: yes | no | unclear
- task_type: analysis | coding | writing | planning | coordination | technical_setup | research | creative | admin_legal | other
- uptake_label: accept | clarify | modify | challenge | defer | reject | none | result_report | unknown

Previous message:
{{previous_message_summary}}

Current message:
{{message_text}}

Next message:
{{next_message_summary}}
```

For Qwen 3, append `/no_think` in the final user turn or configure non-thinking mode in the serving layer.

## Principle

Reuse the structure. Start with one block, one reduced dataset, and one stable figure-ready table.
