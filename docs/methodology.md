# Methodology

## Embodied Debrief

Embodied Debrief is the working method for returning to a completed production through its residues: chats, schedules, self-tracking exports, notes, budgets, technical snapshots, material leftovers, and installation logic.

The central shift of the thesis is a move from finished outcome to process residue. What usually stays at the edge of documentation becomes the main material of interpretation.

## Source Families

The research worked with several trace families at once:

- ChatGPT exports centered on `conversations.json`
- Telegram exports centered on `result.json`
- Mi Fitness data-copy exports
- schedules, budget tables, and red-mark self-tracking
- TouchDesigner system states
- notes, diary fragments, planning material, and project remnants

## Analytical Modes

### Collect

Collect reads accumulation across digital, communicative, financial, material, and bodily layers.

### Allocate

Allocate reads how time, money, attention, and technical capacity were distributed under growing project density.

### Delegate

Delegate reads how work, uncertainty, coordination, and responsibility were redistributed across humans, AI systems, software, and infrastructure.

### Overload

Overload reads the point where accumulated pressure exceeds available capacity and leaves traces in time structure, self-tracking, recovery, and repeated repair cycles.

## Analytical Units In `delegate-analysis`

The main analytical units used in the local message-analysis pipeline were:

1. `message`
2. `delegation event`
3. `loop` as `request -> response -> uptake`
4. `analysis request` as a request-centric row for figures and comparison views

The pipeline also preserved two text layers:

- `text_raw`
- `text_analysis`

`text_analysis` compresses large code and data blocks into structural markers so that technical payloads remain legible without dominating the analysis.

## Message Pipeline

The main message-analysis sequence was:

1. import ChatGPT and Telegram exports
2. normalize them into one message table
3. anonymize identifiers and redact PII
4. build project and actor registries
5. filter by project and date
6. extract delegation events
7. build `request -> response -> uptake` loops
8. classify uptake and derive request-centric views
9. export aggregates, figures, and audit tables

Key methodological decisions:

- manual labels remain authoritative
- rule-based and transparent methods remain primary
- LLM use is secondary and targeted
- local filtering is required for text-bearing private corpora

## Project Mass

`project mass` was used when the unit of interest was not only communication but the growth of the project folder itself.

The main public outputs here are:

- [project_mass_summary.csv](../data/derived/project_mass/project_mass_summary.csv)
- [project_mass_daily.csv](../data/derived/project_mass/project_mass_daily.csv)
- [project_mass_toe_daily.csv](../data/derived/project_mass/project_mass_toe_daily.csv)

Important limit:

- this is a reconstruction from the current filesystem snapshot
- it shows observed accumulation, not full historical truth

## Overload Reading

The overload chapter does not treat physiology as diagnostic proof. Wearable data is used as one trace family among others.

The working overload scaffold was phase-based:

- Early Destabilization
- Dense Accumulation
- Threshold Crisis
- Salvage Concentration
- Terminal Push
- Afterimage

This is why the public overload layer is organized as phase summaries and timeline contrasts rather than as one continuous stress curve.

## Technical Components

The main technical systems behind the project were:

- TouchDesigner logic states preserved in [data/curated/system](../data/curated/system)
- `delegate-analysis` for message, project-mass, allocation, and overload analysis
- `OpenCV_red` for red-mark detection at the allocation station
- `SVG_tracer` for selected tracing and SVG output steps

