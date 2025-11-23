
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

// =======================
//     CONTACT FORM
// =======================
app.post("/api/contact", (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    db.prepare(
      `INSERT INTO messages (name, email, phone, message)
       VALUES (?, ?, ?, ?)`
    ).run(name, email, phone, message);

    res.status(201).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "DB error" });
  }
});

// Отримати всі повідомлення
app.get("/api/messages", (req, res) => {
  try {
    const rows = db.prepare("SELECT * FROM messages ORDER BY created_at DESC").all();
    res.json(rows);
  } catch {
    res.status(500).json({ error: "DB error" });
  }
});


// =======================
//     SIMPLE ADMIN LOGIN
// =======================
app.post("/api/admin/login", (req, res) => {
  const { username, password } = req.body;

  if (
    username === process.env.ADMIN_USER &&
    password === process.env.ADMIN_PASS
  ) {
    return res.json({ success: true });
  }

  res.status(401).json({ error: "Invalid credentials" });
});

// =======================
//  SERVE ADMIN PANEL FILES
// =======================

app.use("/admin", express.static(__dirname + "/admin"));
// Оновити проєкт
app.put("/api/projects/:id", (req, res) => {
  const { title, cat, area, duration, type, description, image } = req.body;
  const id = req.params.id;

  try {
    db.prepare(`
      UPDATE projects SET
        title = ?, cat = ?, area = ?, duration = ?, type = ?, description = ?, image = ?
      WHERE id = ?
    `).run(title, cat, area, duration, type, description, image, id);

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "DB error" });
  }
});




app.get("/api/projects", (req, res) => {
  const rows = db.prepare("SELECT * FROM projects").all();
  res.json(rows);
});

app.post("/api/projects", (req, res) => {
  const { title, cat, area, duration, type, description, image } = req.body;

  try {
    db.prepare(`
      INSERT INTO projects (title, cat, area, duration, type, description, image)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(title, cat, area, duration, type, description, image);

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "DB error" });
  }
});
app.put("/api/projects/:id", (req, res) => {
  const { title, cat, area, duration, type, description, image } = req.body;
  const id = req.params.id;

  try {
    db.prepare(`
      UPDATE projects
      SET title = ?, cat = ?, area = ?, duration = ?, type = ?, description = ?, image = ?
      WHERE id = ?
    `).run(title, cat, area, duration, type, description, image, id);

    res.json({ success: true });
  } catch {
    res.status(500).json({ error: "DB error" });
  }
});
app.delete("/api/projects/:id", (req, res) => {
  try {
    db.prepare("DELETE FROM projects WHERE id = ?").run(req.params.id);
    res.json({ success: true });
  } catch {
    res.status(500).json({ error: "DB error" });
  }
});



// =======================
//        START SERVER
// =======================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
///////////////////////////////////////////////////////////////////////////////////////////////////////
