import React, { useEffect, useState } from "react";
import axios from "axios";
export default function TodoList() {
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("/todos");
      console.log("results:", data);
    }

    fetchData();
  }, []);
  return <div>TodoList</div>;
}
