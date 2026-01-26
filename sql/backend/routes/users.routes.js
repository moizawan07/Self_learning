import express from "express";
import db from "../config/db.js"; // mysql2/promise pool

const router = express.Router();

/* ======================
   GET ALL USERS
   ====================== */
router.get("/", async (req, res) => {
  try {
    const [users] = await db.query("SELECT * FROM users");
    
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/* ======================
   GET SINGLE USER
   ====================== */
router.get("/:id", async (req, res) => {
  try {
    const [user] = await db.query(
      "SELECT * FROM users WHERE id = ?",
      [req.params.id]
    );

    res.json(user[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/* ======================
   CREATE USER
   ====================== */
router.post("/", async (req, res) => {
  try {
    const { name, email } = req.body;

    await db.query(
      "INSERT INTO users (name, email) VALUES (?, ?)",
      [name, email]
    );

    res.json({ message: "User created ✅" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/* ======================
   UPDATE USER
   ====================== */
router.put("/:id", async (req, res) => {
  try {
    const { name, email } = req.body;

    await db.query(
      "UPDATE users SET name = ?, email = ? WHERE id = ?",
      [name, email, req.params.id]
    );

    res.json({ message: "User updated ✨" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/* ======================
   DELETE USER
   ====================== */
router.delete("/:id", async (req, res) => {
  try {
    await db.query(
      "DELETE FROM users WHERE id = ?",
      [req.params.id]
    );

    res.json({ message: "User deleted ❌" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
