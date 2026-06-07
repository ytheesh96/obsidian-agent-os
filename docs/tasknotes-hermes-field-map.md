# TaskNotes ↔ Hermes Field Map

| TaskNote field | Purpose |
|---|---|
| `status` | Human-facing TaskNote status. |
| `priority` | Task priority used for sorting and Hermes payload priority. |
| `task_kind` | Demo/workflow type, such as `research-packet`. |
| `hermes_profile` | Hermes worker profile requested for execution. |
| `hermes_id` | Hermes Kanban task id once submitted. |
| `hermes_board` | Hermes Kanban board/tenant namespace. |
| `hermes_status` | Mirrored Hermes task status. |
| `hermes_artifacts` | Artifact paths or URLs safe for the starter vault. |
| `review_required` | Boolean gate for human approval. |
| `tasknotes_last_synced_at` | ISO timestamp for last bridge writeback. |
