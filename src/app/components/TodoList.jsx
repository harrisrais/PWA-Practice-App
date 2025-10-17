"use client";
import { useState, useEffect } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // Load tasks from localStorage when app starts
  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) setTasks(JSON.parse(stored));
  }, []);

  // Save tasks to localStorage when changed
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input.trim() }]);
    setInput("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="w-full max-w-md mx-auto bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md p-6 xs:p-3">
      <h1 className="text-2xl font-bold mb-4 text-center text-purple-600 xs:text-xl">
        📝 My To-Do List
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-2 mb-4">
        <input
          type="text"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none w-full xs:text-sm xs:px-2"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <button
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 w-full sm:w-auto xs:py-1 xs:text-sm"
          onClick={addTask}
        >
          Add
        </button>
      </div>

      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center text-sm xs:text-xs">No tasks yet</p>
      ) : (
        <ul className="space-y-2">
          {tasks.map((t) => (
            <li
              key={t.id}
              className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 rounded px-3 py-2 xs:px-2 xs:py-1"
            >
              <span className="truncate text-sm xs:text-xs">{t.text}</span>
              <button
                className="text-red-500 hover:text-red-700 text-lg xs:text-base"
                onClick={() => deleteTask(t.id)}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
