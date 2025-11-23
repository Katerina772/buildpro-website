const Database = require("better-sqlite3");
const db = new Database("database.sqlite");

// Створимо таблиці, якщо їх ще немає
db.prepare(`
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`).run();

db.prepare(`
  CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    cat TEXT,
    area TEXT,
    duration TEXT,
    type TEXT,
    description TEXT,
    image TEXT
  )
`).run();



module.exports = db;
