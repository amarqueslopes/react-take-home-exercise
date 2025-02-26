import React, { useEffect, useState } from "react";

import TaskItem from "./TaskItem";
import TaskList from "./TaskList";
import TaskFilter from "./TaskFilter";
import TaskForm from "./TaskForm";
import { v4 as uuidv4 } from "uuid";
import { Task } from "../interfaces/Task";

const saveTasksToLocalStorage = (tasks: Task[]) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const getTasksFromLocalStorage = (): Task[] => {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
};

const TaskManager = () => {
  const [tasks, setTasks] = useState<any[]>(getTasksFromLocalStorage());
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    saveTasksToLocalStorage(tasks);
  }, [tasks]);

  // Intentional bug: The filter conditions are reversed.
  const filteredTasks = tasks.filter((task: Task) => {
    if (filter === "completed") return task.isCompleted === true;
    if (filter === "pending") return task.isCompleted === false;
    return true;
  });

  const handleAddTask = (title: string) => {
    if (title === "") return;
    const newTaskObj = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTasks([...tasks, newTaskObj]);
  };

  // Intentional bug: Directly mutating the tasks array when deleting.
  const handleDeleteTask = (id: string) => {
    const task = tasks.find((task) => task.id !== id);
    if (task && window.confirm(`Confirm deletion of task "${task.name}"?`)) {
      const remainingTasks = tasks.filter((task) => task.id !== id);
      setTasks(remainingTasks);
    }
  };

  const toggleTaskCompletion = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  return (
    <div className="container mx-auto bg-white p-4 rounded shadow">
      <TaskForm onAddTask={handleAddTask} />
      <TaskFilter filter={filter} setFilter={setFilter} />
      <TaskList
        tasks={filteredTasks}
        onDelete={handleDeleteTask}
        onToggle={toggleTaskCompletion}
      />
    </div>
  );
};

export default TaskManager;
