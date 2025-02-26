import React from "react";
import TaskItem from "./TaskItem";
import { Task } from "../interfaces/Task";

const TaskList = ({
    tasks,
    onDelete,
    onToggle,
  }: {
    tasks: Task[];
    onDelete: (id: string) => void;
    onToggle: (id: string) => void;
  }) => {
    return (
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </ul>
    );
  };

export default TaskList;
