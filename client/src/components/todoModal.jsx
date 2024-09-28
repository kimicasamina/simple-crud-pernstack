import React from "react";

export default function TodoModal({ todo }) {
  return (
    <div className="w-full bg-gray-600">
      <div className="">{todo.description}</div>
    </div>
  );
}
