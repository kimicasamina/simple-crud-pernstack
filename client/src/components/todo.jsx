import React, { useState } from "react";
import { cancel, check, pencil, trash } from "../assets";

export default function Todo({ todo, onDelete, onUpdate }) {
  const [updatedTodo, setUpdatedTodo] = useState(todo.description);
  const [editMode, setEditMode] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="w-full flex flex-col gap-y-2">
      {editMode ? (
        <input
          type="text"
          className="w-full outline-none bg-white border-2  focus:bg-gray-50 p-2 rounded-sm"
          value={updatedTodo}
          onChange={(e) => setUpdatedTodo(e.target.value)}
        />
      ) : (
        <p className="w-full p-2 rounded-sm">{todo.description}</p>
      )}

      <div className="w-full flex flex-row gap-x-2">
        {editMode ? (
          <div className="flex gap-x-2">
            <button
              className="btn btn-success"
              onClick={(e) => {
                setEditMode(false);
                onUpdate(todo.todo_id, updatedTodo);
              }}
            >
              Save
            </button>
            <button
              className="btn btn-secondary"
              onClick={(e) => setEditMode(false)}
            >
              Cancel
            </button>
          </div>
        ) : (
          <button className="btn btn-info" onClick={(e) => setEditMode(true)}>
            Edit
          </button>
        )}

        <button
          className="btn btn-destructive"
          onClick={(e) => onDelete(todo.todo_id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
