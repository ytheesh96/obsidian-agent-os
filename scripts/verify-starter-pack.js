import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const requiredPaths = [
  'README.md',
  'SECURITY.md',
  'CONTRIBUTING.md',
  'docs/philosophy.md',
  'docs/architecture.md',
  'docs/privacy-and-sanitization.md',
  'docs/first-task-loop.md',
  'docs/tasknotes-hermes-field-map.md',
  'docs/review-and-approval.md',
  'docs/demo-workflows.md',
  'packages/tasknotes-hermes-bridge/package.json',
  'packages/tasknotes-hermes-bridge/src/fieldMap.ts',
  'packages/shared/package.json',
  'starter-vault/Templates/Hermes Task.md',
  'starter-vault/Templates/Review Decision.md',
  'starter-vault/TaskNotes/obsidian-agent-os/research-packet-civic-library-hours.md',
  'starter-vault/TaskNotes/Views/review-required.base',
  'examples/example-research-packet.md',
  'scripts/secret-scan.js',
];

const requiredFields = [
  'status',
  'priority',
  'task_kind',
  'hermes_profile',
  'hermes_id',
  'hermes_board',
  'hermes_status',
  'hermes_artifacts',
  'review_required',
  'tasknotes_last_synced_at',
];

const missing = requiredPaths.filter((rel) => !fs.existsSync(path.join(root, rel)));
if (missing.length) {
  console.error(`Missing required paths:\n${missing.join('\n')}`);
  process.exit(1);
}

for (const rel of [
  'packages/tasknotes-hermes-bridge/package.json',
  'packages/shared/package.json',
]) {
  JSON.parse(fs.readFileSync(path.join(root, rel), 'utf8'));
}

const template = fs.readFileSync(path.join(root, 'starter-vault/Templates/Hermes Task.md'), 'utf8');
const sample = fs.readFileSync(path.join(root, 'starter-vault/TaskNotes/obsidian-agent-os/research-packet-civic-library-hours.md'), 'utf8');
const missingTemplateFields = requiredFields.filter((field) => !new RegExp(`^${field}:`, 'm').test(template));
const missingSampleFields = requiredFields.filter((field) => !new RegExp(`^${field}:`, 'm').test(sample));
if (missingTemplateFields.length || missingSampleFields.length) {
  console.error('Missing TaskNote fields:', { missingTemplateFields, missingSampleFields });
  process.exit(1);
}

const readme = fs.readFileSync(path.join(root, 'README.md'), 'utf8');
const readmeRequired = [
  'local-first AI task workspace for Obsidian + Hermes',
  'visible progress',
  'durable artifacts',
  'human review checkpoints',
];
const missingReadme = readmeRequired.filter((text) => !readme.includes(text));
if (missingReadme.length) {
  console.error('README missing required promise text:', missingReadme);
  process.exit(1);
}

console.log(`verify-starter-pack: ok (${requiredPaths.length} required paths, ${requiredFields.length} TaskNote fields)`);
