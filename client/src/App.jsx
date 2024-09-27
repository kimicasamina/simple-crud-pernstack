import React from "react";
import TodoInput from "./components/todoInput";
import TodoList from "./components/todoList";
import "./index.css";

export default function App() {
  return (
    <div className="w-full h-screen bg-gray-50">
      <div className="w-full sm:max-w-[70%] mx-auto h-full flex flex-col justify-start items-center py-12">
        <h1 className="text-4xl mb-8">Todolist CRUD using PERNtack</h1>
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
}
