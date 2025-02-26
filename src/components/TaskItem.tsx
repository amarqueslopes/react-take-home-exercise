import React, {useState} from "react";
import { Task } from "../interfaces/Task";

interface TaskItemProps {
  task: Task;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

const getClassName = (isCompleted: boolean): string => {
  return `cursor-pointer flex-grow ${
    isCompleted ? "line-through text-gray-500" : "text-black"
  }`
};

const TaskItem = ({ task, onDelete, onToggle }: TaskItemProps) => {
  const [filter, setFilter] = useState("all");

  return (
    <li className="flex items-center justify-between border-b py-2 hover:bg-gray-50 transition-colors">
      <span
        onClick={() => onToggle(task.id)}
        className={getClassName(task.isCompleted)}
      >
        {task.title}
      </span>
      <button
        onClick={() => onDelete(task.id)}
        className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded transition-colors"
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
