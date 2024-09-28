import React, { useState } from "react";
import axios from "axios";
import TodoModal from "./todoModal";
import Todo from "./todo";

export default function TodoList({ todos, setTodos }) {
  const [editMode, setEditMode] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState(null);

  async function handleDelete(todo_id) {
    const { data } = await axios.delete(`/api/todos/${todo_id}`);
    console.log("DELETED TODO:", data);
    const newTodos = todos.filter((todo) => todo.todo_id !== todo_id);
    setTodos((prevState) => [...newTodos]);
  }

  async function handleUpdate(todo_id, description) {
    const { data } = await axios.put(`/api/todos/${todo_id}`, {
      description,
    });
    console.log("Updated todo", data);
    const newTodos = todos.map((todo) => {
      if (todo.todo_id === todo_id) {
        return {
          description,
          todo_id,
        };
      }
      return todo;
    });
    setTodos((prevState) => [...newTodos]);
  }

  return (
    <div className="py-14 w-full">
      {todos && todos.length > 0
        ? todos.map((todo) => (
            <div className="my-4 flex flex-col " key={todo.todo_id}>
              <Todo
                todo={todo}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
              />
            </div>
          ))
        : null}
    </div>
  );
}
