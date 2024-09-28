import React, { useState } from "react";
import axios from "axios";
export default function TodoInput({ setTodos }) {
  const [input, setInput] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const { data } = await axios.post("/api/todos/", { description: input });
    setTodos((prevState) => [...prevState, data]);
    setInput("");
  }

  return (
    <div className="w-full ">
      <form className="w-full flex gap-x-2" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          className="rounded-sm p-2 w-full border outline-none"
          placeholder="Enter new todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="btn btn-primary ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <span className="">ADD</span>
        </button>
      </form>
    </div>
  );
}
