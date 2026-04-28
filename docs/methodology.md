# Methodology

## Embodied Debrief

Embodied Debrief is the working method of the thesis: a retrospective rereading of a completed production through its residues. The main material is process residue and its aftereffects.

The research works across several trace families at once:

- ChatGPT exports centered on `conversations.json`
- Telegram exports centered on `result.json`
- Mi Fitness data-copy exports
- Windows project folders and surviving file structures
- FigJam revision-history observations turned into an event log
- structured budget and schedule tables
- recovered project timeline tables
- dictated recollections, calendar comments, reviewed notes, and other human-guided timeline material
- TouchDesigner system states

## Four Modes

The thesis reads the project through four operational modes:

These four modes were selected as working analytical lenses rather than as a total taxonomy of the project. Together they make it possible to read the production process across accumulation, distribution, externalization, and limit conditions. Each mode isolates one aspect of the same system while remaining connected to the others.

- `Collect`
- `Allocate`
- `Delegate`
- `Overload`

These four modes structure the rereading of the same production process.

## Collect

`Collect` was built in two layers.

### 1. Filesystem Project Mass

The first layer reads project accumulation from the surviving folder structure.

Its basic source is a selected project folder on Windows, optionally with a separate `.toe` subset. The folder is scanned as a current snapshot. From that snapshot, the method derives:

- file-level inventory
- file-created and file-modified events
- daily growth tables
- optional `.toe`-only growth tables

Core public outputs:

- [project_mass_summary.csv](../data/derived/project_mass/project_mass_summary.csv)
- [project_mass_daily.csv](../data/derived/project_mass/project_mass_daily.csv)
- [project_mass_toe_daily.csv](../data/derived/project_mass/project_mass_toe_daily.csv)

Method limit:

- filesystem chronology is a reconstruction from the current surviving snapshot
- `cumulative_known_files` and `cumulative_known_bytes` should be read as observed lower-bound project mass
- this layer works best when files accumulate over time and older versions remain in the folder structure

### 2. Expanded Collect Layer

The second layer is the thesis-facing `Collect` composition. It extends folder chronology with additional trace layers:

- filtered project messages
- request tables
- structured budget data
- budget-derived physical-item counts
- FigJam revision-history observations
- project timeline markers

This is the layer that supports the final `Collect` figure logic. It treats accumulation as a composite load across digital, communicative, financial, material, and shared-documentation layers.

Important note:

- the shared-documentation layer comes from manually observed FigJam revision history turned into an event log and then aggregated by day or week

## Allocate

`Allocate` reads how time, money, attention, and technical capacity were distributed under scarcity.

Its public layer is assembled from already structured local source tables:

- recognized schedule CSV
- structured budget CSV
- recovered project timeline CSV
- manually reduced red-mark counts

Schedules function here as orienting structures. They preserve intended sequence and visible distribution of effort, but they do not fully reconstruct lived work, revision, interruption, or drift.

This is why the public `allocate` layer combines:

- schedule blocks
- budget rhythm
- event markers
- occupied-time traces

The red mark was an important self-reflective and presentation layer. In the current research contour it covers only the two densest weeks of work and did not enter the final publication as a full visualization layer.

Core public outputs:

- [allocate_budget_weekly.csv](../data/derived/allocate/allocate_budget_weekly.csv)
- [allocate_timeline_dataset.csv](../data/derived/allocate/allocate_timeline_dataset.csv)
- [allocate_event_markers.csv](../data/derived/allocate/allocate_event_markers.csv)

## Delegate

`Delegate` studies how work, uncertainty, revision, and responsibility move across humans, AI systems, software, and infrastructure.

Its confirmed source layer includes:

- ChatGPT `conversations.json`
- Telegram `result.json`
- ChatGPT project membership HTML
- actor and chat registries

The early analytical spine used four units:

1. `message`
2. `delegation event`
3. `loop` as `request -> response -> uptake`
4. `analysis request` as a request-centric row used for figures

The pipeline preserved two text layers:

- `text_raw`
- `text_analysis`

`text_analysis` compresses long code and data blocks into structural markers so that technical payloads remain legible without dominating the analysis.

The base message-analysis sequence was:

1. import ChatGPT and Telegram exports
2. normalize them into one message table
3. anonymize identifiers and redact PII
4. build project and actor registries
5. filter by project and date
6. extract delegation events
7. build `request -> response -> uptake` loops
8. classify uptake and derive request-centric views
9. export aggregates, figures, and audit tables

Coding logic:

- task categories came from an explicit codebook
- uptake categories also came from an explicit coding scheme
- rules, manual audit, and targeted model assistance were used to fill and correct those layers
- manual adjudication remained authoritative

Important method note:

- the early spine was loop-based
- later analysis also worked with a broader relation-oriented self-message layer
- public outputs reduce those private analytical layers to compact comparison tables

The public layer keeps only reduced outputs such as:

- [delegate_task_type_comparison.csv](../data/derived/delegate/delegate_task_type_comparison.csv)
- [delegate_uptake_comparison.csv](../data/derived/delegate/delegate_uptake_comparison.csv)

## Overload

`Overload` reads the point where accumulated pressure exceeds workable capacity and becomes legible through chronology, notes, self-tracking, repeated repair, and recovery cycles.

Its confirmed source layer includes:

- Mi Fitness raw export
- recovered project timeline
- overload-event recovery tables
- dictation, calendar traces, chat review, and other locally structured recovery material

The overload chapter uses a phase scaffold:

- Early Destabilization
- Dense Accumulation
- Threshold Crisis
- Salvage Concentration
- Terminal Push
- Afterimage

Important method note:

- phases were not discovered by physiology
- reconstructed chronology and interpretive phase framing came first
- physiological data was then aligned and aggregated against that phase scaffold

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
- `delegate-analysis` for message, project-mass, collect, allocate, and overload analysis
- `OpenCV_red` as a real-time recognition and OSC transmission component used in the installation environment
- `SVG_tracer` for selected tracing and SVG-output steps

## Public Layer

In this repository the method appears in two reduced forms:

- thesis-facing outputs
- reproducibility-facing notes and templates
