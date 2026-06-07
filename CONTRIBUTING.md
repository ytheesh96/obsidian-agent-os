# Contributing

Thank you for helping with LumiBench OS.

## Development principles

- Keep the starter vault invented, minimal, and safe to publish.
- Prefer deterministic examples over live exports.
- Treat every Hermes-produced artifact as review-required until a human approves it.
- Keep bridge behavior idempotent: repeat submissions should not create duplicate work.

## Before opening a change

Run:

```bash
node scripts/verify-starter-pack.js
node scripts/secret-scan.js
```

If you add package code, also run that package's lint and test scripts.
