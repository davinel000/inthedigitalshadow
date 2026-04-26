# Source Map

This is a working map of known external source locations and likely research value.

## Current External Folder

Source:

```text
P:\DIGITAL MEDIA\MASTER THESIS
```

Inventory:

```text
data/derived/inventory-master-thesis.csv
data/derived/inventory-master-thesis-extension-summary.csv
```

Current inventory size: 3542 files.

Most frequent file types in the first inventory:

| Extension | Count | Likely meaning |
| --- | ---: | --- |
| `.toe` | 1069 | TouchDesigner project states and system snapshots |
| `.jpg` | 875 | photo documentation, screenshots, exported images |
| `.png` | 565 | screenshots, design exports, documentation |
| `.bak` | 178 | backups, usually not curated directly |
| `.webp` | 173 | image exports or references |
| `.pdf` | 76 | thesis/reference/design documents |
| `.wav` | 68 | sound material |
| `.py` | 55 | scripts and technical logic |
| `.csv` | 50 | structured data, possible research traces |
| `.json` | 25 | exported structured data, likely important for chat/tool traces |

## First-Pass Folder Reading

| Folder | Likely role in corpus | Priority |
| --- | --- | --- |
| `Chat_exports` | AI/chat, Telegram, Mi Fitness, coordination and self-tracking traces | high |
| `LOGIC` | TouchDesigner evolution, scripts, mapping, system snapshots | high |
| `NARRATIVES` | conceptual research, references, written framing | high |
| `PLAN_OVERLOAD` | direct overload/planning evidence | high |
| `ALLOCATE_MACHINE` | allocation model and machine logic | high |
| `DELEGATION_SCHEDULE` | delegation and scheduling evidence | high |
| `BUDGET` | resource allocation and constraints | medium |
| `INSTALLATION` | rematerialisation, presets, technical installation state | medium |
| `PERFOCARDS` | performance cards and generated/visual system material | medium |
| `SOUND`, `LIGHT`, `LED CUBE`, `LED STRIP`, `OSC` | installation infrastructure and delegated technical agency | medium |
| `THESIS_TEXT`, `DOCUMENTS`, `POSTERS`, `TO PRINT` | final and near-final presentation layers | medium |
| `SOFT` | software dependencies; document but do not commit installers or binaries | low |

## Known Missing Source

Some datasets are on another computer. When available, run:

```powershell
.\scripts\build-inventory.ps1 -Source "D:\PATH\TO\DATASETS" -Output ".\data\derived\inventory-other-computer-datasets.csv" -Hash
```

If hashing is too slow, run without `-Hash` first and hash only selected folders later.

