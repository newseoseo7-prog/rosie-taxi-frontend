/**
 * SQLite-backed page storage has been disabled.
 * This stub remains so existing imports keep working without reworking callers.
 */

// import Database from 'better-sqlite3';
// import path from 'path';
// const dbPath = path.join(process.cwd(), 'pages.db');
// const db = new Database(dbPath);
// db.pragma('journal_mode = WAL');
// function initializeDB() {
//     db.exec(`
//     CREATE TABLE IF NOT EXISTS pages (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       title TEXT NOT NULL,
//       path TEXT NOT NULL UNIQUE,
//       html TEXT NOT NULL,
//       metadata TEXT,
//       js TEXT,
//       created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
//       updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
//     );
//     
//     CREATE TRIGGER IF NOT EXISTS update_page_timestamp
//     AFTER UPDATE ON pages
//     BEGIN
//       UPDATE pages SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
//     END;
//   `);
// }
// initializeDB();

const db = null as const;

export default db;