# In the Digital Shadow

Repository for Slava Romanov's master's thesis and research project **In the Digital Shadow: An Embodied Debrief**.

The repository is intended to hold the clean, reproducible layer of the project: thesis text, methodology, curated research traces, inventories, and scripts that make the corpus reviewable without depending on a single working machine.

## Current State

- `romanov_in_the_digital_shadow.pdf` is the submitted thesis PDF.
- The broader production folder currently exists outside the repository at `P:\DIGITAL MEDIA\MASTER THESIS`.
- Some datasets and project traces are still on another computer and should be inventoried before copying.

## Research Frame

The thesis reads the production process through four operational modes:

- **Collect**: accumulation of traces, references, logs, notes, and source material.
- **Allocate**: distribution of time, attention, money, space, and tasks.
- **Delegate**: work externalised to collaborators, software, automation, AI systems, and technical infrastructure.
- **Overload**: points where coordination, expectation, and embodied capacity exceed a workable limit.

The practical goal of this repository is to make those traces legible as a reproducible research corpus, not just as a storage dump.

## Repository Layout

```text
docs/
  collection-protocol.md    How to collect and decide what enters the repo
  methodology.md            Methodological notes for Embodied Debrief
data/
  README.md                 Data policy and folder meanings
  manifest.csv              Main catalog of curated research traces
  curated/                  Clean files selected for the corpus
  derived/                  Generated summaries, extracts, tables, timelines
  inbox/                    Temporary local staging area, ignored by git
  private/                  Sensitive source material, ignored by git
scripts/
  build-inventory.ps1       Creates file inventories from external drives/folders
```

## Collection Workflow

1. On each machine, run `scripts/build-inventory.ps1` against the relevant source folder.
2. Review the generated inventory before copying files.
3. Copy only relevant material into `data/inbox/`.
4. Clean, redact, normalize, and document selected items.
5. Move approved files into `data/curated/` or generated outputs into `data/derived/`.
6. Add every curated item to `data/manifest.csv`.

Example inventory command:

```powershell
.\scripts\build-inventory.ps1 -Source "P:\DIGITAL MEDIA\MASTER THESIS" -Output ".\data\derived\inventory-master-thesis.csv"
```

For stronger reproducibility, include hashes:

```powershell
.\scripts\build-inventory.ps1 -Source "D:\path\to\datasets" -Output ".\data\derived\inventory-datasets.csv" -Hash
```

## What Belongs Here

Good candidates for the clean corpus:

- exported chats or chat excerpts relevant to Collect, Allocate, Delegate, or Overload;
- schedules, budgets, task plans, production logs, and delegation records;
- self-tracking summaries, not necessarily raw private data;
- TouchDesigner/technical configuration snapshots that document system logic;
- installation diagrams, mappings, cards, scripts, and reproducible generated tables;
- short README notes explaining each research block.

Avoid committing:

- full software installers, cracks, caches, and duplicated binaries;
- private messages or personal health data before review/redaction;
- large videos/audio unless they are essential and intentionally tracked;
- raw exports whose structure has not yet been documented.

