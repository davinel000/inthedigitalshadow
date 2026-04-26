# Collection Protocol

This protocol is for gathering project traces from external machines and drives into a clean, reviewable research corpus.

## 1. Inventory Before Copying

Do not begin by copying everything. First create an inventory for each source location:

```powershell
.\scripts\build-inventory.ps1 -Source "D:\SOURCE_FOLDER" -Output ".\data\derived\inventory-source-name.csv"
```

Use `-Hash` when the folder is not too large or when file identity matters:

```powershell
.\scripts\build-inventory.ps1 -Source "D:\SOURCE_FOLDER" -Output ".\data\derived\inventory-source-name.csv" -Hash
```

The inventory gives the first research overview: file names, extensions, sizes, dates, and paths. It helps separate evidence from production clutter.

## 2. Classify Source Material

Use these categories when reviewing inventories:

| Category | Meaning | Typical files |
| --- | --- | --- |
| `source_trace` | Original trace from the production process | chats, notes, logs, exports |
| `system_snapshot` | Technical state of the installation or software | `.toe`, `.tox`, mappings, config files |
| `planning` | Allocation and coordination material | schedules, budgets, plans |
| `self_tracking` | Body, time, health, attention, or affective records | Mi Fitness exports, notes, diary-like logs |
| `reference` | External material used for thinking | PDFs, articles, book notes |
| `media_documentation` | Photo, video, audio, installation documentation | `.jpg`, `.mp4`, `.wav` |
| `derived` | A generated summary or extract | CSV summaries, timelines, redacted excerpts |
| `exclude` | Not useful or not suitable for the corpus | installers, caches, duplicates, private raw data |

## 3. Decide Privacy Level

Every curated item should have one privacy level:

| Level | Meaning |
| --- | --- |
| `public` | Safe to publish with the repository |
| `restricted` | Can be described and analyzed, but not published raw |
| `private` | Should stay outside git; only derived/redacted summaries may enter |

When uncertain, use `restricted` or `private`.

## 4. Normalize and Redact

Before moving anything into `data/curated/`:

- remove passwords, phone numbers, addresses, tokens, and unrelated personal details;
- split huge exports into meaningful excerpts when possible;
- keep original filenames when they carry evidence, but add a clear prefix if needed;
- prefer open formats: `.csv`, `.json`, `.txt`, `.md`, `.png`, `.pdf`;
- document transformations in `data/manifest.csv`.

## 5. Map to Analytical Modes

Each curated item should connect to one or more modes:

- `collect`
- `allocate`
- `delegate`
- `overload`

This mapping is interpretive. The same item can belong to several modes.

## 6. Minimum Metadata

For every curated file, fill one row in `data/manifest.csv`:

- stable item id;
- relative repository path;
- original source path or source description;
- date range;
- category;
- mode tags;
- privacy level;
- processing status;
- short research note.

## 7. Suggested First Pass

Start with these blocks because they are likely to connect directly to the thesis:

1. `Chat_exports`: delegation, coordination, overload, AI/human communication.
2. `LOGIC`: system snapshots and evolution of installation logic.
3. `NARRATIVES`: conceptual material and research references.
4. `PLAN_OVERLOAD`: direct material for overload and allocation.
5. `DELEGATION_SCHEDULE` and `ALLOCATE_MACHINE`: allocation/delegation evidence.
6. `BUDGET`: allocation and constraints.
7. `INSTALLATION`, `LED CUBE`, `LED STRIP`, `OSC`, `LIGHT`, `SOUND`: rematerialisation and system infrastructure.
8. `Chat_exports\mifit`: self-tracking, only after privacy review.

