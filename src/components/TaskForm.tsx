import React, { useState } from "react";

const TaskForm = ({ onAddTask }: { onAddTask: (title: string) => void }) => {
    const [newTitle, setNewTitle] = useState<string>("");
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (newTitle.trim() === "") return;
      onAddTask(newTitle);
      setNewTitle("");
    };
  
    return (
      <form onSubmit={handleSubmit} className="mb-4 flex">
        <input
          type="text"
          placeholder="New task..."
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="flex-grow border rounded-l py-2 px-3"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 rounded-r">
          Add
        </button>
      </form>
    );
  };

  export default TaskForm;