# Data Directory

This directory separates temporary source material from the clean research corpus.

## Folders

```text
curated/   Files intentionally selected for the reproducible corpus.
derived/   Generated summaries, extracts, timelines, figures, and tables.
templates/ Reusable table structures based on the analytical datasets.
inbox/     Temporary staging area for copied exports. Ignored by git.
private/   Sensitive source material that should not be committed. Ignored by git.
```

## Rule

Only `curated/`, `derived/`, and `templates/` are candidates for git tracking. `inbox/` and `private/` are local working areas.

`templates/` is for minimal reusable structures derived from the analytical datasets and figures.

Current public derived blocks:

- `curated/system/`
- `derived/project_mass/`
- `derived/allocate/`
- `derived/delegate/`
- `derived/overload/`
- `derived/figures/`

