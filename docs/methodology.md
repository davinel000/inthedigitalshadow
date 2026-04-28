# Methodology

## Embodied Debrief

Embodied Debrief is the working method of the thesis: a retrospective rereading of a completed production through its residues. The main material is process residue and its aftereffects.

The research works across several trace families at once:

- ChatGPT exports centered on `conversations.json`
- Telegram exports centered on `result.json`
- Mi Fitness data-copy exports
- schedules, budget tables, and red-mark tracking
- TouchDesigner system states
- notes, planning material, technical remnants, and installation logic

## Four Modes

The thesis reads the project through four operational modes:

- `Collect`
- `Allocate`
- `Delegate`
- `Overload`

These four modes structure the rereading of the same production process.

## Collect

`Collect` was operationalized through project mass: the accumulated load of the project across financial, communicative, digital, material, and shared-documentation layers.

In this method, accumulation matters twice:

- it expands what the project can do
- it increases storage, revision, orientation, and coordination burden

The public `project mass` layer uses a small number of readable curves and keeps file-family detail in supporting tables. The core public outputs are:

- [project_mass_summary.csv](../data/derived/project_mass/project_mass_summary.csv)
- [project_mass_daily.csv](../data/derived/project_mass/project_mass_daily.csv)
- [project_mass_toe_daily.csv](../data/derived/project_mass/project_mass_toe_daily.csv)

Method limit:

- filesystem chronology is a reconstruction from the current surviving snapshot
- `cumulative_known_files` and `cumulative_known_bytes` should be read as observed lower-bound project mass

## Allocate

`Allocate` reads how time, money, attention, and technical capacity were distributed under scarcity.

In the thesis, schedules function as orienting structures. They preserve intended sequence and visible distribution of effort, but they do not fully reconstruct lived work, doubt, drift, revision, or interruption.

This is why the public `allocate` layer combines:

- schedule blocks
- budget rhythm
- event markers
- red-mark logic

The red mark is important here as a trace of occupied time. It registers directed effort and makes the slot visible after the fact.

Core public outputs:

- [allocate_budget_weekly.csv](../data/derived/allocate/allocate_budget_weekly.csv)
- [allocate_timeline_dataset.csv](../data/derived/allocate/allocate_timeline_dataset.csv)
- [allocate_event_markers.csv](../data/derived/allocate/allocate_event_markers.csv)

## Delegate

`Delegate` studies how work, uncertainty, revision, and responsibility move across humans, AI systems, software, and infrastructure.

The local analytical spine in `delegate-analysis` used four units:

1. `message`
2. `delegation event`
3. `loop` as `request -> response -> uptake`
4. `analysis request` as a request-centric row used for figures

The pipeline preserved two text layers:

- `text_raw`
- `text_analysis`

`text_analysis` compresses long code and data blocks into structural markers so that technical payloads remain legible without dominating the analysis.

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

Important method decisions:

- manual labels remain authoritative
- rule-based methods remain primary
- LLM use is secondary and targeted
- private text corpora are filtered and reduced locally before any public layer is prepared

The public layer keeps only compact outputs such as:

- [delegate_task_type_comparison.csv](../data/derived/delegate/delegate_task_type_comparison.csv)
- [delegate_uptake_comparison.csv](../data/derived/delegate/delegate_uptake_comparison.csv)

## Overload

`Overload` reads the point where accumulated pressure exceeds workable capacity and becomes legible through chronology, notes, self-tracking, repeated repair, and recovery cycles.

The overload chapter uses a phase scaffold:

- Early Destabilization
- Dense Accumulation
- Threshold Crisis
- Salvage Concentration
- Terminal Push
- Afterimage

This phase logic keeps visible the difference between structural density, crisis, rescue concentration, late push, and delayed residue after the event.

Physiological data enters this layer as embodied overlay:

- heart-rate activation
- sleep duration
- elevated-activation episodes
- wear coverage

These traces support rereading. Chronology, notes, and marked project events remain the primary frame.

Core public outputs:

- [overload_phase_summary_fitness.csv](../data/derived/overload/overload_phase_summary_fitness.csv)
- [overload_timeline_weekly.csv](../data/derived/overload/overload_timeline_weekly.csv)

## Technical Components

The main technical systems behind the public layer are:

- final TouchDesigner logic states in [data/curated/system](../data/curated/system)
- `delegate-analysis` for message, project-mass, allocation, and overload analysis
- `OpenCV_red` for red-mark detection at the allocation station
- `SVG_tracer` for selected tracing and SVG-output steps

## Public Layer

In this repository the method appears in two reduced forms:

- thesis-facing outputs
- reproducibility-facing notes and templates
