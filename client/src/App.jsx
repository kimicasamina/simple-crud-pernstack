import React, { useState, useEffect } from "react";
import TodoInput from "./components/todoInput";
import TodoList from "./components/todoList";
import axios from "axios";
import "./index.css";

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("/api/todos");
      console.log("results:", data);
      setTodos([...data]);
    }

    fetchData();
  }, []);

  return (
    <div className="w-full h-screen bg-gray-50">
      <div className="w-full sm:max-w-[70%] mx-auto h-full flex flex-col justify-start items-center py-12">
        <h1 className="text-4xl mb-8">Todolist CRUD using PERNtack</h1>
        <TodoInput setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}
