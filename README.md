# Obsidian Agent OS

A public hub for the Obsidian OS toolchain: local-first plugins and workflows for turning notes, task plans, live context, and generated artifacts into an inspectable AI workspace.

This repository is no longer a starter vault. It is an index for the tools that make up the Obsidian Agent OS pattern.

## Tools page

GitHub Pages index:

<https://ytheesh96.github.io/obsidian-agent-os/>

## What this collection is

Obsidian Agent OS is a local-first workspace pattern for AI-assisted work in Obsidian. The goal is to keep planning, execution context, artifacts, and review checkpoints visible instead of trapping work inside disposable chat sessions.

The toolchain is split into focused repositories:

- note-native task planning
- local agent execution panes
- live workspace context capture
- rendered artifact views
- human review inside the vault

## Tools index

| Area | Tool | What it provides |
| --- | --- | --- |
| Planning substrate | [TaskNotes](https://github.com/ytheesh96/tasknotes) | Note-native task and time tracking in Obsidian, with tasks stored as Markdown notes and structured frontmatter |
| Agent execution panes | [Agent Shell](https://github.com/ytheesh96/agent-shell) | Local CLI profile launch/continue flows, embedded terminal panes, and prompt transfer inside Obsidian |
| Live workspace context | [Context API](https://github.com/ytheesh96/context-api) | Local routes for active note, editor selection, cursor state, linked notes, open workspace surfaces, and pinned context |
| Rendered artifact views | [HTML View](https://github.com/ytheesh96/html-view) | Vault-local HTML/HTM rendering inside Obsidian with constrained navigation for dashboards and generated artifacts |
| Toolchain hub | [Obsidian Agent OS](https://github.com/ytheesh96/obsidian-agent-os) | Public index for the Obsidian OS tools and the local-first agent workspace pattern |

## Workflow shape

```text
TaskNotes planning
        ↓
Agent Shell execution
        ↓
Context API evidence
        ↓
HTML View artifacts
        ↓
Human review in Obsidian
```

## Repository structure

```text
README.md      # repository overview
docs/index.md  # GitHub Pages tools index
```

## Public/private boundary

This hub does not include a starter vault, private workspace notes, live task data, unpublished research content, or hidden agent outputs. Each linked tool owns its own installation, usage, and development documentation.

## Maintaining the hub

When adding or renaming Obsidian OS tools, update both:

1. `README.md` for the GitHub repository view.
2. `docs/index.md` for the GitHub Pages index.

## License

MIT.
