import express from "express";
import cors from "cors";
import { pool } from "./db.js";
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes

// create a todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );
    console.log(newTodo.rows[0]);

    res.json(newTodo);
  } catch (error) {
    console.log(error.message);
  }
});

// get all todo
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (error) {
    console.log(error.message);
  }
});

// get a todo
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]);
    console.log(todo.rows[0]);
    res.json(todo.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

// update a todo
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updatedTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );

    res.json({ message: "todo was updated." });
  } catch (error) {
    console.log(error.message);
  }
});

// delete a todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await pool.query(
      "DELETE FROM todo WHERE todo_id = $1",
      [id]
    );

    res.json({ message: "todo was deleted." });
  } catch (error) {
    console.log(error.message);
  }
});

// delete all todo
app.delete("/todos/", async (req, res) => {
  try {
    const deletedTodos = await pool.query("DELETE FROM todo ");

    res.json({ message: "todos was deleted." });
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(8000, () => {
  console.log("server has started on port 8000:");
});
