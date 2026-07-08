# Obsidian Agent OS

[![Verify starter pack](https://github.com/ytheesh96/obsidian-agent-os/actions/workflows/verify.yml/badge.svg)](https://github.com/ytheesh96/obsidian-agent-os/actions/workflows/verify.yml)

## Agentic Workspace and Execution Platform

Obsidian Agent OS is a local-first AI task workspace for Obsidian + Hermes. It turns human-planned work into visible progress, durable artifacts, and explicit human review checkpoints.

The project connects Obsidian notes, TaskNotes planning, Hermes Kanban/Loop orchestration, local CLI execution, live workspace context, and rendered artifact views. Instead of leaving work inside disposable chat windows, each task starts from an explicit note, carries source context, produces inspectable output, and returns to the workspace for review.

```text
TaskNotes in Obsidian
        ↓
Hermes Kanban / Loop task graph
        ↓
Local execution profiles
        ↓
Context API + pinned workspace evidence
        ↓
HTML/artifact views
        ↓
Human review, revision, or archive
```

### What this demonstrates

- A local-first workspace model where planning notes, task state, and artifacts remain inspectable.
- A task-to-execution bridge from Obsidian TaskNotes into durable Hermes Kanban cards with status, comments, artifacts, and review checkpoints.
- A componentized plugin architecture for task management, execution panes, context capture, and rendered artifact views.
- A starter vault with invented sample content, templates, and examples for testing the workflow shape without exposing a live vault.

## Architecture at a glance

| Layer | Responsibility | Related project |
|---|---|---|
| Planning substrate | Note-native task and time tracking in Obsidian; each task is a Markdown note with structured frontmatter and Bases-powered views. | [tasknotes](https://github.com/ytheesh96/tasknotes) |
| Workspace starter | Reference workspace showing the TaskNotes → Hermes → artifact review loop. | [obsidian-agent-os](https://github.com/ytheesh96/obsidian-agent-os) |
| Execution panes | Local CLI profile launch/continue flows, embedded terminal panes, prompt transfer, and context-aware environment wiring. | Agent Shell |
| Workspace context | Active-note context, editor selection, cursor state, linked notes, open workspace surfaces, and pinned evidence. | Context API |
| Artifact views | Rendered HTML/HTM dashboards inside Obsidian with constrained vault-relative navigation. | HTML View |

## Component map

### tasknotes

URL: https://github.com/ytheesh96/tasknotes

TaskNotes is the note-native planning layer. It keeps tasks as Markdown files with frontmatter, which makes the task graph portable, inspectable, and easy for local automation to reason about. In this workspace, TaskNotes supplies the human-authored work items that later become executable cards.

### obsidian-agent-os

URL: https://github.com/ytheesh96/obsidian-agent-os

Obsidian Agent OS packages the workspace story into a starter implementation: example TaskNotes templates, bridge field maps, privacy-oriented docs, review workflow examples, and verification scripts.

### Agent Shell

Agent Shell is the execution-pane layer for launching and continuing local CLI sessions through configurable profiles. It owns embedded terminal panes, prompt transfer, focus/restart behavior, and Context API environment wiring.

### Context API

Context API is the live workspace-context layer. It exposes active-note context, editor selection, cursor state, linked notes, open workspace surfaces, and pinned context through constrained local routes.

### HTML View

HTML View is the artifact-view layer. It opens vault-local HTML and HTM files in rendered or editor views, supports vault-relative navigation, and provides constrained dashboard interactions inside Obsidian.

## What is included

- A minimal starter vault with portable TaskNotes templates.
- A TaskNotes → Hermes field-map skeleton.
- A fake research-packet sample task showing the intended shape.
- Architecture, privacy, demo, and review workflow documentation.
- Dependency-free verification scripts for structure and privacy-oriented scans.
- GitHub Actions CI that runs the starter-pack verifier and secret scan.

## First task loop

1. Create a TaskNote in Obsidian from `starter-vault/Templates/Hermes Task.md`.
2. Submit the note to Hermes through the TaskNotes-Hermes bridge.
3. Watch status and comments sync back to the TaskNote.
4. Open the artifact from `hermes_artifacts`.
5. Review the result, request changes, or archive the task.

## Repository layout

```text
obsidian-agent-os/
  README.md
  LICENSE
  SECURITY.md
  CONTRIBUTING.md
  docs/
  packages/
    shared/
    tasknotes-hermes-bridge/
  starter-vault/
    Templates/
    TaskNotes/
  examples/
  scripts/
```

## Quick check

```bash
node scripts/verify-starter-pack.js
node scripts/secret-scan.js
```

## Status

This is an OSS starter skeleton for a local-first Obsidian + Hermes workflow, not a packaged production bridge.

## License

MIT.
