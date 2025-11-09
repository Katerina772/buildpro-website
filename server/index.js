require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

// ====== ROUTES ======

// 1. Контактна форма
app.post('/api/contact', (req, res) => {
  const { name, email, phone, message } = req.body;
  try {
    const stmt = db.prepare(`
      INSERT INTO messages (name, email, phone, message)
      VALUES (?, ?, ?, ?)
    `);
    stmt.run(name, email, phone, message);
    res.status(201).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Database error' });
  }
});

// 2. Отримати всі повідомлення (наприклад, для адміністратора)
app.get('/api/messages', (req, res) => {
  try {
    const rows = db.prepare(`SELECT * FROM messages ORDER BY created_at DESC`).all();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Database error' });
  }
});

// 3. Портфоліо — отримати всі проєкти
app.get('/api/projects', (req, res) => {
  const rows = db.prepare(`SELECT * FROM projects`).all();
  res.json(rows);
});

// 4. Додати проєкт (опціонально для адмінки)
app.post('/api/projects', (req, res) => {
  const { title, description, image } = req.body;
  try {
    db.prepare(`INSERT INTO projects (title, description, image) VALUES (?, ?, ?)`)
      .run(title, description, image);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Database error' });
  }
});

// ====== START SERVER ======
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
