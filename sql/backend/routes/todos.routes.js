import express from "express";
import db from "../config/db.js"; // mysql2/promise pool

const router = express.Router();

/* ======================
   GET ALL TODOS
   ====================== */
router.get("/", async (req, res) => {
  const [todos] = await db.query("SELECT * FROM todos");
  res.json(todos);
});

/* ======================
   CREATE TODO
   ====================== */
router.post("/", async (req, res) => {
  let { title, userId } = req.body;
  let query = "Insert into todos (title, userId) values(?,?)";
  const result = await db.query(query, [title, userId]);

  console.log("res return ==>", result);

  res.json({ message: "Todo created ✅", todo: result[0] });
});

// get todo by userId
router.get("/user/:userId", async (req, res) => {
  const { userId } = req.params;
  const [todos] = await db.query("SELECT * FROM todos WHERE userId = ?", [
    userId,
  ]);
  res.json(todos);
});

// update todo status
router.put("/:id", async (req, res) => {
  const { id } = req.params;

  console.log("ID ==>", id);

  const { completed } = req.body;

  const [result] = await db.query("UPDATE todos SET status = ? WHERE id = ?", [
    completed,
    id,
  ]);
  res.json({ message: "Todo updated ✅", todo: result });
});

// delte todo
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const [result] = await db.query("DELETE FROM todos WHERE id = ?", [id]);
  res.json({ message: "Todo deleted ✅", todo: result });
});

export default router;
