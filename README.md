# Obsidian Agent OS

[![Verify starter pack](https://github.com/ytheesh96/obsidian-agent-os/actions/workflows/verify.yml/badge.svg)](https://github.com/ytheesh96/obsidian-agent-os/actions/workflows/verify.yml)

## Agentic Workspace and Execution Platform

Obsidian Agent OS is a local-first workspace for turning human-planned work into reviewable agent execution. It connects Obsidian notes, TaskNotes planning, Hermes Kanban orchestration, local CLI agents, live workspace context, and rendered artifact views into one system where every agent task has visible status, source context, durable outputs, and a human approval gate.

It remains a local-first AI task workspace for Obsidian + Hermes: an operating model with visible progress, a durable artifact, and a human review gate before anything moves downstream.

The project is designed around a simple principle: agents should not be hidden in disposable chat windows. They should run from explicit tasks, leave inspectable artifacts, and wait for a person before changing source-of-truth work. That makes the system useful for research, writing, software delivery, and scientific workflows where provenance, privacy, and review matter as much as speed.

This repository is a sanitized open-source starter/reference implementation. It does **not** contain a copy of any live vault, private notes, raw transcripts, runtime databases, browser state, OAuth tokens, plugin `data.json`, or machine-specific paths. The included starter vault is intentionally small and uses invented sample content only.

```text
TaskNotes in Obsidian
        ↓
Hermes Kanban / Loop task graph
        ↓
Local agent execution through terminal profiles
        ↓
Context API + pinned workspace evidence
        ↓
HTML/artifact review surfaces
        ↓
Human approval, revision, or archive
```

### What this demonstrates

- A local-first agent operating model: source tasks and review artifacts stay in the user's workspace instead of being scattered across provider dashboards.
- A task-to-execution bridge: Obsidian TaskNotes become durable Hermes Kanban cards with status, comments, artifacts, and review gates.
- A componentized plugin architecture: task management, agent terminals, context capture, and HTML review surfaces are separated into focused repos.
- Public-safety boundaries: the starter hub is designed to exclude live vaults, raw transcripts, runtime databases, OAuth tokens, browser state, plugin data files, and machine-specific configuration.

## Architecture at a glance

| Layer | Responsibility | Repository | Public status |
|---|---|---|---|
| Planning substrate | Note-native task and time tracking in Obsidian; each task is a Markdown note with structured frontmatter and Bases-powered views. | [tasknotes](https://github.com/ytheesh96/tasknotes) | Public fork; safe to reference as the mature task-management layer. |
| Portfolio hub / starter pack | Sanitized reference workspace showing the TaskNotes → Hermes → artifact review loop. | [obsidian-agent-os](https://github.com/ytheesh96/obsidian-agent-os) | Recommended public hub after explicit visibility approval. |
| Agent terminal layer | Embedded local CLI-agent panes, profile launch/resume, prompt handoff, and Context API environment wiring. | [agent-shell](https://github.com/ytheesh96/agent-shell) | Keep private until machine-specific configuration is sanitized. |
| Workspace context layer | Current note, selection, cursor, backlinks, open notes/pages, and pinned-context capture via Obsidian Local REST API routes. | [context-api](https://github.com/ytheesh96/context-api) | Candidate for public release after a final scrub/review. |
| Artifact view layer | Rendered HTML/HTM dashboards inside Obsidian with a constrained bridge for approved vault-relative actions. | [html-view](https://github.com/ytheesh96/html-view) | Candidate for public release after a final scrub/review. |

## Component map

### tasknotes

URL: https://github.com/ytheesh96/tasknotes

TaskNotes is the note-native planning layer. It keeps tasks as Markdown files with frontmatter, which makes the task graph portable, inspectable, and easy for agents and scripts to reason about. In this portfolio story, TaskNotes supplies the human-authored work items that later become agent-executable cards.

Public note: already public. Reference it as the task substrate rather than the umbrella hub.

### obsidian-agent-os

URL: https://github.com/ytheesh96/obsidian-agent-os

Obsidian Agent OS is the recommended portfolio hub. It packages the agentic workspace story into a sanitized starter/reference implementation: example TaskNotes templates, bridge field maps, privacy boundaries, review-gate documentation, and verification scripts.

Public note: best resume landing page once Vaitheesh approves making the repo public. Until then, use this README content as the prepared local landing page, not as a remote visibility change.

### agent-shell

URL: https://github.com/ytheesh96/agent-shell

Agent Shell is the execution-pane layer: an Obsidian plugin for launching and resuming local CLI agents through configurable profiles. It owns embedded terminal panes, prompt handoff, focus/restart behavior, and Context API environment wiring.

Public note: keep private for now. The audit found machine-specific configuration that should be moved behind user-configurable defaults before any public release.

### context-api

URL: https://github.com/ytheesh96/context-api

Context API is the live workspace-context layer. It exposes active-note context, editor selection, cursor state, linked notes, open workspace surfaces, and pinned context through constrained Local REST API routes. It intentionally does not own vault writes, arbitrary command execution, generic file operations, or MCP tools.

Public note: candidate for public release after a final scrub and README review.

### html-view

URL: https://github.com/ytheesh96/html-view

HTML View is the artifact-review layer. It opens vault-local HTML and HTM files in rendered or editor views, supports vault-relative navigation, and provides a constrained dashboard bridge for approved read/open/query actions.

Public note: candidate for public release after a final scrub and README review.

## What is included

- A minimal starter vault with portable TaskNotes templates.
- A TaskNotes → Hermes field-map skeleton.
- A fake research-packet sample task showing the intended shape.
- Architecture, privacy, demo, and review-gate documentation.
- Dependency-free verification scripts for structure and privacy-oriented scans.
- GitHub Actions CI that runs the starter-pack verifier and secret scan.

## First task loop

1. Create a TaskNote in Obsidian from `starter-vault/Templates/Hermes Task.md`.
2. Submit the note to Hermes through the TaskNotes-Hermes bridge.
3. Watch status and comments sync back to the TaskNote.
4. Open the artifact from `hermes_artifacts`.
5. Move through a `review-required` gate before approval, revision, or archive.

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

## Quick verification

```bash
node scripts/verify-starter-pack.js
node scripts/secret-scan.js
```

These checks are intentionally dependency-free so the starter pack can be inspected before any package install.

## Suggested resume link targets

Use one primary link, then optional deep links if the resume or portfolio page supports multiple anchors.

Primary, after `obsidian-agent-os` is approved public:

- `https://github.com/ytheesh96/obsidian-agent-os#agentic-workspace-and-execution-platform`

Optional deep links:

- `https://github.com/ytheesh96/obsidian-agent-os#architecture-at-a-glance`
- `https://github.com/ytheesh96/obsidian-agent-os#component-map`
- `https://github.com/ytheesh96/obsidian-agent-os#what-this-demonstrates`
- `https://github.com/ytheesh96/obsidian-agent-os#public-release-and-approval-gates`

If the hub remains private, use a public-safe portfolio page or gist containing this README section instead of linking to a private GitHub repo.

## Suggested repository descriptions

These are suggested GitHub descriptions only. Do not apply them remotely without approval.

| Repository | Suggested description |
|---|---|
| `obsidian-agent-os` | Local-first Obsidian workspace for orchestrating AI agents through TaskNotes, Hermes Kanban, and reviewable artifacts. |
| `tasknotes` | Note-native task and time tracking for Obsidian, used as the planning substrate for local-first agent workflows. |
| `agent-shell` | Obsidian plugin for running local CLI agents in embedded terminal panes with profile launch, resume, and context handoff. |
| `context-api` | Obsidian plugin exposing constrained live workspace context and pinned evidence through Local REST API routes. |
| `html-view` | Obsidian plugin for rendered HTML artifacts and constrained dashboard interactions inside the vault. |

## Public release and approval gates

No publication action is implied by this draft. The following gates should remain explicit:

1. Do not push README changes, change repository visibility, or update GitHub descriptions until Vaitheesh approves the exact diff and public/private split.
2. Make `obsidian-agent-os` public only after approval, even though the audit recommended it as the hub.
3. Keep `agent-shell` private until machine-specific configuration is removed or converted into safe, documented user settings.
4. Run a final scrub on `context-api` and `html-view` before publishing either repo.
5. Keep live vaults, raw transcripts, runtime databases, OAuth tokens, browser state, plugin data files, machine-specific paths, and private notes out of all public repos.

## Status

This is an OSS MVP skeleton, not a production bridge implementation. The working public name is **Obsidian Agent OS**, with Obsidian as the local task workspace and Hermes as the execution layer.

## License

MIT.
