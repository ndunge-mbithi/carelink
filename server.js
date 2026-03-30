const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// MIDDLEWARE
app.use(cors());
app.use(bodyParser.json());

// Serve frontend files (IMPORTANT for Render)
app.use(express.static(path.join(__dirname)));

// DATABASE
const db = new sqlite3.Database("./database.db");

// TABLES
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    password TEXT,
    role TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS patients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    age INTEGER,
    gender TEXT,
    location TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS visits (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    patient_id INTEGER,
    notes TEXT,
    date TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS referrals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    patient_id INTEGER,
    status TEXT
  )`);

  // DEFAULT USER
  db.run(`INSERT INTO users (username, password, role)
    SELECT 'admin', '1234', 'CHW'
    WHERE NOT EXISTS (SELECT 1 FROM users WHERE username='admin')`);
});

// ROUTES

// ROOT (important for deployment)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// LOGIN
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  db.get(
    "SELECT * FROM users WHERE username=? AND password=?",
    [username, password],
    (err, user) => {
      if (user) res.json({ success: true, role: user.role });
      else res.json({ success: false });
    }
  );
});

// PATIENTS
app.post("/patients", (req, res) => {
  const { name, age, gender, location } = req.body;

  db.run(
    "INSERT INTO patients (name, age, gender, location) VALUES (?, ?, ?, ?)",
    [name, age, gender, location],
    function () {
      res.json({ id: this.lastID });
    }
  );
});

app.get("/patients", (req, res) => {
  db.all("SELECT * FROM patients", [], (err, rows) => {
    res.json(rows);
  });
});

// VISITS
app.post("/visits", (req, res) => {
  const { patient_id, notes, date } = req.body;

  db.run(
    "INSERT INTO visits (patient_id, notes, date) VALUES (?, ?, ?)",
    [patient_id, notes, date],
    () => res.json({ success: true })
  );
});

// REFERRALS
app.post("/referrals", (req, res) => {
  const { patient_id } = req.body;

  db.run(
    "INSERT INTO referrals (patient_id, status) VALUES (?, 'Pending')",
    [patient_id],
    () => res.json({ success: true })
  );
});

app.get("/referrals", (req, res) => {
  db.all("SELECT * FROM referrals", [], (err, rows) => {
    res.json(rows);
  });
});

// START SERVER
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});