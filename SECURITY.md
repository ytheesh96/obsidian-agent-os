# Security Policy

Obsidian Agent OS is local-first and should never require publishing private vault material.

## Reporting a vulnerability

Please open a private security advisory or contact the maintainers before publishing details for issues involving credential exposure, unsafe workspace export, command execution, or TaskNote writeback behavior.

## Secret and privacy boundaries

Do not commit:

- `.env` files, API keys, OAuth tokens, bearer tokens, cookies, SSH keys, or browser session state.
- Hermes runtime databases, live workspace files, raw transcripts, or logs.
- Obsidian plugin `data.json` files or local REST tokens.
- Private notes, unpublished research, Gmail/calendar-derived content, or source-machine paths.

Run `node scripts/secret-scan.js` before sharing any starter-pack changes.
