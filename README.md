# Obsidian Agent OS

[![Verify starter pack](https://github.com/ytheesh96/obsidian-agent-os/actions/workflows/verify.yml/badge.svg)](https://github.com/ytheesh96/obsidian-agent-os/actions/workflows/verify.yml)

Obsidian Agent OS is a **local-first AI task workspace for Obsidian + Hermes**. It turns an Obsidian TaskNote into agent-executed work with **visible progress**, a **durable artifact**, and a **human review gate** before anything moves downstream.

This repository is a sanitized open-source starter/reference implementation. It does **not** contain a copy of any live vault, private notes, raw transcripts, runtime databases, browser state, OAuth tokens, plugin `data.json`, or machine-specific paths. The included starter vault is intentionally small and uses invented sample content only.

## Why this exists

AI agents are powerful, but most workflows still hide the work in chats, terminal logs, or provider dashboards. Obsidian Agent OS makes agent work inspectable in the same place where planning and review already happen:

```text
Obsidian TaskNote
     ↓
Hermes Kanban card
     ↓
Agent execution
     ↓
Artifact / diff / summary
     ↓
Human review decision
     ↓
Archive or next task
```

The goal is not to replace Obsidian, TaskNotes, or Hermes. The goal is to provide a practical operating pattern for local, reviewable, multi-agent work — especially for research, writing, software, and scientific workflows where provenance and approval matter.

## What is included

- A public `obsidian-agent-os` starter repository.
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

## Status

This is an OSS MVP skeleton, not a production bridge implementation. The working public name is **Obsidian Agent OS**, with Obsidian as the local task workspace and Hermes as the execution layer.

## License

MIT.
