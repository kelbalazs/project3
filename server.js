const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const path = require("path");
const app = express();
const port = 3000;

// Middleware
app.use(express.static('public'))
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "parcels",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to database");
});

// Allow requests from localhost:3000 and localhost:3001
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
  })
);

// Routes
app.get("/apartments/:apartmentId/deliveries", (req, res) => {
  const apartmentId = req.params.apartmentId;
  db.query(
    "SELECT * FROM deliveries WHERE apartment_id = ?",
    apartmentId,
    (err, results) => {
      if (err) {
        console.error("Error retrieving deliveries:", err);
        return res.status(500).json({ error: "Internal server error" });
      }
      res.json(results);
    }
  );
});

app.get("/apartments", (req, res) => {
  db.query("SELECT * FROM apartments", (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });
});

app.post("/deliveries", (req, res) => {
  const delivery = req.body;
  db.query("INSERT INTO deliveries SET ?", delivery, (err, result) => {
    if (err) {
      throw err;
    }
    res.send("Delivery added to the database");
  });
});

app.patch("/deliveries/:id", (req, res) => {
  const id = req.params.id;
  const newStatus = req.body.status;
  db.query(
    "UPDATE deliveries SET status = ? WHERE id = ?",
    [newStatus, id],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.send("Delivery status updated");
    }
  );
});

app.delete("/deliveries/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM deliveries WHERE id = ?", id, (err, result) => {
    if (err) {
      throw err;
    }
    res.send("Delivery deleted from the database");
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});