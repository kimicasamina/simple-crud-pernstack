import React from "react";

export default function TodoInput() {
  return (
    <div className="w-full flex gap-x-2">
      <input
        type="text"
        className="rounded-sm p-2 w-full border outline-none"
        placeholder="Enter new todo..."
      />
      <button className="btn btn-primary ">
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
    </div>
  );
}
