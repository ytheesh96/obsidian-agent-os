export const REQUIRED_TASKNOTE_FIELDS = [
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
] as const;

export type RequiredTaskNoteField = typeof REQUIRED_TASKNOTE_FIELDS[number];

export type HermesTaskNoteFrontmatter = {
  status: string;
  priority: 'low' | 'normal' | 'high';
  task_kind: string;
  hermes_profile: string;
  hermes_id: string | null;
  hermes_board: string;
  hermes_status: string;
  hermes_artifacts: string[];
  review_required: boolean;
  tasknotes_last_synced_at: string | null;
};
