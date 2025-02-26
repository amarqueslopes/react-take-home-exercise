import React from "react";

const TaskFilter = ({
    filter,
    setFilter,
  }: {
    filter: string;
    setFilter: (filter: "all" | "completed" | "pending") => void;
  }) => {
    return (
      <div className="flex justify-around mb-4">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded ${
            filter === "all" ? "font-bold" : "font-normal"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`px-4 py-2 rounded ${
            filter === "completed" ? "font-bold" : "font-normal"
          }`}
        >
          Completed
        </button>
        <button
          onClick={() => setFilter("pending")}
          className={`px-4 py-2 rounded ${
            filter === "pending" ? "font-bold" : "font-normal"
          }`}
        >
          Pending
        </button>
      </div>
    );
  };

  export default TaskFilter;