# in the digital shadow

![Thesis cover](docs/assets/thesis-cover.png)

Public research repository for Slava Romanov's master's thesis and artistic research project **in the digital shadow: An Embodied Debrief**. It brings together the thesis PDF, the methodological frame, selected public data, key analytical diagrams, and the minimum technical context needed to understand how the research was built.

## Research Frame

The thesis reads the production process through four operational modes:

- **Collect**: accumulation of traces, references, logs, notes, source material, and leftovers.
- **Allocate**: distribution of time, money, attention, space, and technical capacity.
- **Delegate**: work externalized to collaborators, software, AI systems, hardware, interfaces, and infrastructure.
- **Overload**: moments when density, coordination, expectation, and embodied capacity exceed a workable limit.

These modes organize both the installation logic and the research corpus.

## Read

- [Key Findings](docs/key-findings.md)
- [Methodology](docs/methodology.md)
- [Data Policy](docs/data-policy.md)
- [Thesis PDF](romanov_in_the_digital_shadow.pdf)

## Reuse

- [Reproduce](docs/reproduce.md)
- [Templates](data/templates)

## Public Corpus

- thesis PDF and concise methodological notes;
- a curated public layer of findings and depersonalized data;
- selected system snapshots, especially final TouchDesigner logic states;
- derived tables and final diagrams.

Current material:

- [system snapshots](data/curated/system)
- [project_mass](data/derived/project_mass)
- [allocate](data/derived/allocate)
- [delegate](data/derived/delegate)
- [overload](data/derived/overload)
- [figures](data/derived/figures)

## Analytical Blocks

The repository is being organized around the main analytical blocks used in the thesis:

- `project mass`: accumulation across files, physical items, spending, and other production layers;
- `allocate`: working schedule, budget strip, and time allocation views;
- `delegate`: delegation volume, task type comparisons, and human/AI request patterns;
- `overload`: phase timelines with physiological and self-tracking overlays;
- installation logic diagrams and final thesis figures derived from these layers.

Current files already included:

- [project_mass_daily.csv](data/derived/project_mass/project_mass_daily.csv)
- [project_mass_toe_daily.csv](data/derived/project_mass/project_mass_toe_daily.csv)
- [allocate_budget_weekly.csv](data/derived/allocate/allocate_budget_weekly.csv)
- [allocate_timeline_dataset.csv](data/derived/allocate/allocate_timeline_dataset.csv)
- [allocate_event_markers.csv](data/derived/allocate/allocate_event_markers.csv)
- [LOGIC.toe](data/curated/system/LOGIC.toe)
- [LOGIC.AUDIO.toe](data/curated/system/LOGIC.AUDIO.toe)
- [delegate_task_type_comparison.csv](data/derived/delegate/delegate_task_type_comparison.csv)
- [delegate_uptake_comparison.csv](data/derived/delegate/delegate_uptake_comparison.csv)
- [overload_phase_summary_fitness.csv](data/derived/overload/overload_phase_summary_fitness.csv)
- [overload_timeline_weekly.csv](data/derived/overload/overload_timeline_weekly.csv)
- [collect.svg](data/derived/figures/collect.svg)
- [allocate.svg](data/derived/figures/allocate.svg)
- [delegate_request.svg](data/derived/figures/delegate_request.svg)
- [delegate_uptake.svg](data/derived/figures/delegate_uptake.svg)
- [overload_timeline.svg](data/derived/figures/overload_timeline.svg)

## Related Project Links

- Project page: [slavaromanov.art/2026/in-the-digital-shadow](https://www.slavaromanov.art/2026/in-the-digital-shadow)
- Thesis PDF in this repository: [romanov_in_the_digital_shadow.pdf](romanov_in_the_digital_shadow.pdf)

The project page provides the artistic and installation-facing overview. This repository provides the documentary, methodological, and data-facing layer.

## Privacy And Exclusions

Public material in this repository is curated, reduced, and in some cases depersonalized or derived.

In particular:

- third-party messages were filtered locally before any public layer was prepared;
- privacy-sensitive corpora and raw health exports are not published here as-is;
- only selected author-controlled or privacy-safe outputs should enter `data/curated/` or `data/derived/`.

See [data-policy.md](docs/data-policy.md) for details.

## AI-Assisted Workflow

Parts of the repository documentation, scripting, editorial restructuring, and selected analysis support were developed with assistance from GPT Codex and other local or hosted language models. Curation, interpretation, selection, redaction, and final responsibility remain with the author.

