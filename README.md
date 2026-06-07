# Obsidian Agent OS

Obsidian Agent OS is a local-first AI task workspace for Obsidian + Hermes.

Promise: turn an Obsidian TaskNote into Hermes-executed work with visible progress, a durable artifact, and a human review gate.

This repository is a sanitized open-source starter/reference implementation. It does not contain a copy of any live vault, private notes, raw transcripts, runtime databases, browser state, OAuth tokens, plugin `data.json`, or machine-specific paths. The included starter vault is intentionally small and uses invented sample content only.

## What is included in this increment

- A repo skeleton for the public `obsidian-agent-os` project.
- A deterministic starter-vault TaskNote template for Hermes-backed tasks.
- One fake research-packet sample TaskNote showing the intended shape.
- Documentation placeholders for the Obsidian Agent OS architecture language, privacy model, first task loop, review gate, and demo workflows.
- Local verification scripts for structure and privacy-oriented scans.

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
  packages/tasknotes-hermes-bridge/
  packages/shared/
  starter-vault/
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

This is an OSS MVP skeleton, not a production bridge implementation. The working public name is Obsidian Agent OS, with Obsidian as the local task workspace and Hermes as the execution layer.
