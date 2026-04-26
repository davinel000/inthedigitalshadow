# Data Directory

This directory separates temporary source material from the clean research corpus.

## Folders

```text
curated/   Files intentionally selected for the reproducible corpus.
derived/   Generated inventories, summaries, extracts, timelines, and tables.
inbox/     Temporary staging area for copied exports. Ignored by git.
private/   Sensitive source material that should not be committed. Ignored by git.
```

## Rule

Only `curated/`, `derived/`, and `manifest.csv` are candidates for git tracking. `inbox/` and `private/` are local working areas.

Before moving anything from `inbox/` to `curated/`, add a row to `manifest.csv` and check privacy status.

