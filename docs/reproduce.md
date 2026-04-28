# Reproduce

This repository is meant to be reused with an agent such as Codex or Claude Code. The useful path is to start from one analytical block, reconstruct a reduced local dataset, and only then build public-safe tables or figures.

## Source Types

### Exported Sources

- ChatGPT export centered on `conversations.json`
- Telegram desktop export with `result.json`
- Mi Fitness data-copy package with CSV tables

### Windows File System Sources

- a selected project folder on Windows
- optional `.toe` subset
- optional backup-heavy folders such as `/Backup/*.toe`

This source works relatively well when the project accumulates files over time and older versions remain in the folder structure instead of being fully overwritten.

### Structured Local Source Tables

- recognized schedule CSV
- recognized project schedule from a Gantt-like planning image
- structured budget CSV
- recovered project timeline CSV

### Observed Manual Source Layers

- FigJam revision-history observations turned into an event log
- manually reduced red-mark counts
- overload-event recovery tables

### Human-Guided Narrative Sources

- dictation
- calendar comments
- reviewed notes
- recalled chat episodes
- psychological notes
- reviewed phone photos

The important point is not the source object by itself, but the structured output produced from it: recognized schedules, recovered timelines, dated event logs, reduced markers, and other stable local tables that can be aggregated in the same way as the project datasets here.

## Minimal Path

1. Pick one block:
   - `filesystem project mass`
   - `expanded collect`
   - `allocate`
   - `delegate`
   - `overload`
2. Keep raw and text-bearing sources local.
3. Reconstruct one stable local source table first.
4. Map that table to the nearest public output or template.
5. Build reduced aggregates before building figures.

## Block By Block

### Filesystem Project Mass

Use this when you want a lower-bound chronology of project accumulation from a surviving folder.

Source data:

- a selected project folder on Windows
- file timestamps
- file sizes
- extensions
- optionally `.toe` files
- optionally backup-heavy folders that preserve older states

How it was obtained:

- local scan of the surviving project folder

Local processing:

1. scan the folder snapshot
2. read `created`, `modified`, `size`, and `extension`
3. derive file-created and file-modified events
4. aggregate them into daily growth tables
5. split out `.toe` as a separate curve when useful

Reference script and tool:

- `delegate-analysis/src/delegation_log/project_mass.py`
  - Purpose: scan one or more folders and build file-growth tables
  - Useful for: all-files project mass, `.toe` subset, backup-like file detection, optional git activity
  - Limit: reconstructs from the current surviving snapshot
  - Quick run on Windows: from `delegate-analysis`, run `project_mass.cmd`

Public outputs:

- [project_mass_summary.csv](../data/derived/project_mass/project_mass_summary.csv)
- [project_mass_daily.csv](../data/derived/project_mass/project_mass_daily.csv)
- [project_mass_toe_daily.csv](../data/derived/project_mass/project_mass_toe_daily.csv)

Public explanation:

- this is a filesystem reconstruction from surviving files
- cumulative values are observed lower bounds
- the method works best when files accumulate and earlier versions remain visible in the folder structure

### Expanded Collect

Use this when you want the thesis-facing `Collect` layer rather than folder chronology alone.

Source data:

- filesystem daily tables
- filtered message counts
- request tables
- structured budget CSV
- budget-derived physical-item layer
- FigJam revision-history observations
- project timeline markers

How it was obtained:

- some layers came from exports and scripts
- some were manually observed and turned into stable local tables

Local processing:

1. derive filesystem mass tables
2. reduce messages and requests to countable time-based layers
3. structure budget into a stable CSV
4. derive physical items from budget where relevant
5. turn FigJam revision observations into an observed event log
6. align layers by day or week
7. assemble a composite mass table for figure work

Reference script and tool:

- `delegate-analysis/src/delegation_log/collect_mass.py`
  - Purpose: merge several trace layers into a thesis-facing `Collect` composition
  - Useful for: combined digital, communicative, financial, material, and shared-documentation accumulation
  - Limit: depends on prior local structuring of several inputs

Public explanation:

- this is a composite accumulation layer, not just a folder scan
- the shared-documentation layer comes from observed FigJam revision history

### Allocate

Use this when you want to reconstruct intended allocation, spending rhythm, and occupied time.

Source data:

- recognized schedule CSV
- structured budget CSV
- recovered project timeline CSV
- manually reduced red-mark counts

How it was obtained:

- the schedule was already a recognized and cleaned source table
- the project schedule was digitized from a Gantt-like planning artifact into a stable schedule table
- the budget was structured from the workbook into CSV
- the timeline was recovered into a separate project table
- red marks were manually reduced from local material

Local processing:

1. normalize schedule blocks
2. aggregate budget by week and source
3. reduce project timeline to readable markers
4. align timeline, budget, and schedule layers
5. add red-mark counts where needed

Reference script and tool:

- `delegate-analysis/src/delegation_log/allocate_viz.py`
  - Purpose: assemble the public allocation layer from schedule, budget, and recovered timeline tables
  - Useful for: timeline dataset, weekly budget, event markers, figure outputs
  - Limit: depends on already structured local source tables

Important note:

- red marks were an important self-reflective and presentation layer
- they covered only the two densest weeks of work
- they did not enter the final publication visualizations as a full figure layer

Public outputs:

- [allocate_budget_weekly.csv](../data/derived/allocate/allocate_budget_weekly.csv)
- [allocate_timeline_dataset.csv](../data/derived/allocate/allocate_timeline_dataset.csv)
- [allocate_event_markers.csv](../data/derived/allocate/allocate_event_markers.csv)

### Delegate

Use this when your material includes requests, responses, and continued work across chats.

Source data:

- ChatGPT `conversations.json`
- Telegram `result.json`
- ChatGPT project membership HTML
- actor and chat registries

How it was obtained:

- platform exports plus local registries

Local processing:

1. import exports
2. normalize messages into one schema
3. preserve `text_raw`
4. derive `text_analysis` as a compressed analytical text layer
5. anonymize identifiers and redact PII
6. assign project and actor labels
7. filter by project and date
8. extract request or delegation events
9. build `request -> response -> uptake` structures
10. enrich with task and uptake coding
11. export reduced comparison tables

Coding logic:

- task categories came from an explicit codebook
- uptake categories also came from an explicit coding scheme
- these categories were filled through rules, manual audit, and targeted model assistance
- manual adjudication remained authoritative

Important method note:

- the early spine was loop-based
- later work also used a broader relation-oriented self-message layer

Reference scripts and tools:

- `delegate-analysis/src/delegation_log/importers.py`
  - Purpose: parse Telegram and ChatGPT exports into one message table
- `delegate-analysis/src/delegation_log/normalize.py`
  - Purpose: standardize fields and build `text_raw` / `text_analysis`
- `delegate-analysis` CLI pipeline
  - Purpose: import, normalize, anonymize, filter, extract events, build loops, classify uptake, export aggregates
  - Limit: private corpora, registries, and manual audit layers remain local

Public outputs:

- [delegate_task_type_comparison.csv](../data/derived/delegate/delegate_task_type_comparison.csv)
- [delegate_uptake_comparison.csv](../data/derived/delegate/delegate_uptake_comparison.csv)

Public explanation:

- public `delegate_*` files are reduced aggregates built from private annotated communication corpora

### Overload

Use this when you want to align reconstructed project chronology with embodied traces.

Source data:

- Mi Fitness raw export
- recovered project timeline
- overload-event recovery tables
- dictation, calendar traces, chat review, and notes used in chronology recovery

How it was obtained:

- Mi Fitness came from exported raw tables
- chronology and overload events were reconstructed locally from multiple sources

Local processing:

1. parse heart-rate, sleep, activity, and summary tables
2. reconstruct project chronology
3. define project phases from chronology and interpretive framing
4. align physiological traces to those phases
5. aggregate by day, week, and phase
6. export summary and figure-ready tables

Important method note:

- phases were not discovered by physiology
- chronology and interpretive phase logic came first
- physiology was aggregated against that phase scaffold afterward

Reference scripts and tools:

- `delegate-analysis/src/delegation_log/fitness.py`
  - Purpose: parse Mi Fitness raw CSV into heart-rate, activity, sleep, and daily-summary tables
- `delegate-analysis/src/delegation_log/overload_phase_analysis.py`
  - Purpose: phase-level aggregation and comparison
  - Limit: depends on a recovered chronology and locally assembled event frame

Public outputs:

- [overload_phase_summary_fitness.csv](../data/derived/overload/overload_phase_summary_fitness.csv)
- [overload_timeline_weekly.csv](../data/derived/overload/overload_timeline_weekly.csv)

Public explanation:

- this is a phase-based embodied overlay aligned to reconstructed project chronology

## Keep Private Data Local

For text-bearing, health-bearing, or strongly identifying corpora, the working rule is simple:

1. parse locally
2. reduce locally
3. anonymize locally where needed
4. run model-assisted steps only on safe local subsets or local infrastructure
5. publish only reduced tables and figures

This is especially important for:

- third-party chat messages
- private notes
- raw health exports
- personal photo collections
- dictated recollections and memory notes
- raw filesystem inventories with sensitive paths

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

For bounded local message annotation:

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

## Human-Guided Sources

Some project traces did not start as clean exports. They were turned into structured inputs through a human-guided step first.

Typical cases:

- FigJam revision-history observations
- project schedule images or Gantt-like planning views
- calendar comments or schedule remarks
- recalled chat episodes
- dictated memory notes
- reviewed phone photos

Working pattern:

1. describe the material locally in plain language
2. have the agent structure it into dated rows, schedule blocks, or event markers
3. correct names, dates, and sequence manually
4. merge the cleaned result with the closest block

Good agent asks:

- "Turn this dictated recollection into dated event markers."
- "Turn this project schedule image into a structured schedule table."
- "Convert these calendar comments into a timeline table."
- "Structure these manually observed FigJam revision events into a daily log."
- "Review these photo notes and extract project-relevant dated events only."

## Principle

Reuse the structure. Start with one block, one stable local source table, and one reduced public-safe output.
