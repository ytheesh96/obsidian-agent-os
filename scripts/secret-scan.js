import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const forbiddenNames = new Set([
  '.env',
  'data.json',
  'workspace.json',
  'cookies.sqlite',
  'History',
  'Login Data',
]);
const forbiddenContent = [
  { name: 'absolute macOS user path', pattern: /\/Users\/[A-Za-z0-9._-]+\// },
  { name: 'generic API key assignment', pattern: /(api[_-]?key|secret|token|bearer)\s*[:=]\s*['"][A-Za-z0-9_./+=-]{12,}/i },
  { name: 'private key block', pattern: /-----BEGIN [A-Z ]*PRIVATE KEY-----/ },
  { name: 'OAuth refresh token', pattern: /refresh[_-]?token\s*[:=]/i },
  { name: 'live transcript marker', pattern: /(^|\n)\s*(BEGIN TRANSCRIPT|TRANSCRIPT:|VERBATIM LOG:)\b/i },
];
const skipDirs = new Set(['.git', 'node_modules']);
const findings = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skipDirs.has(entry.name)) continue;
    const abs = path.join(dir, entry.name);
    const rel = path.relative(root, abs);
    if (forbiddenNames.has(entry.name)) findings.push(`${rel}: forbidden filename`);
    if (entry.isDirectory()) {
      walk(abs);
    } else {
      const stat = fs.statSync(abs);
      if (stat.size > 1_000_000) continue;
      const text = fs.readFileSync(abs, 'utf8');
      for (const rule of forbiddenContent) {
        if (rule.pattern.test(text)) findings.push(`${rel}: ${rule.name}`);
      }
    }
  }
}

walk(root);
if (findings.length) {
  console.error(`secret-scan: failed\n${findings.join('\n')}`);
  process.exit(1);
}
console.log('secret-scan: ok');
