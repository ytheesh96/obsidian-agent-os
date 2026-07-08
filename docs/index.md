# Obsidian Agent OS Tools

A public hub for local-first Obsidian tools that turn notes, tasks, context, and rendered artifacts into an inspectable AI workspace.

## Overview

The Obsidian Agent OS toolchain is organized as separate, focused projects. This repository is the index: it explains how the tools fit together and links to their public source repositories.

## Tools index

| Area | Tool | Link | What it provides |
| --- | --- | --- | --- |
| Planning substrate | TaskNotes | https://github.com/ytheesh96/tasknotes | Note-native task and time tracking in Obsidian, with tasks stored as Markdown notes and structured frontmatter |
| Agent execution panes | Agent Shell | https://github.com/ytheesh96/agent-shell | Local CLI profile launch/continue flows, embedded terminal panes, and prompt transfer inside Obsidian |
| Live workspace context | Context API | https://github.com/ytheesh96/context-api | Local routes for active note, editor selection, cursor state, linked notes, open workspace surfaces, and pinned context |
| Rendered artifact views | HTML View | https://github.com/ytheesh96/html-view | Vault-local HTML/HTM rendering inside Obsidian with constrained navigation for dashboards and generated artifacts |
| Toolchain hub | Obsidian Agent OS | https://github.com/ytheesh96/obsidian-agent-os | Public index for the Obsidian OS tools and the local-first agent workspace pattern |

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

## Boundary

This hub does not include a starter vault, private workspace notes, live task data, or unpublished research content. Each linked tool owns its own installation and usage documentation.
