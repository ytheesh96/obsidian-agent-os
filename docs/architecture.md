# Architecture

LumiBench OS uses Obsidian Agent OS as descriptive architecture language: Obsidian is the local-first workspace and Hermes is the execution layer.

The bridge boundary is intentionally narrow:

- TaskNotes provide human-readable task state.
- The TaskNotes-Hermes bridge maps safe frontmatter fields into Hermes Kanban cards.
- Hermes runs work and emits statuses, comments, summaries, and artifact metadata.
- The bridge writes back compact receipts without mirroring raw transcripts.
