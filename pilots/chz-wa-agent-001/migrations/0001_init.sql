CREATE TABLE IF NOT EXISTS jobs (
  id TEXT PRIMARY KEY,
  sender TEXT NOT NULL,
  request TEXT NOT NULL,
  status TEXT NOT NULL,
  result TEXT,
  lock_until INTEGER NOT NULL DEFAULT 0,
  updated_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_jobs_sender_updated ON jobs(sender, updated_at DESC);
