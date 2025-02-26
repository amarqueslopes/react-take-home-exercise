import { render, screen, fireEvent } from "@testing-library/react";
import TaskManager from "./TaskManager";

test("TaskManager adds and deletes tasks", () => {
  render(<TaskManager />);

  const input = screen.getByPlaceholderText("New task...");
  const addButton = screen.getByText("Add");

  // Add a task
  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(addButton);

  const taskText = screen.getByText("New Task");
  expect(taskText).toBeDefined();

  // Delete the task
  const deleteButton = screen.getByText("Delete");
  fireEvent.click(deleteButton);

  expect(taskText).not.toBeDefined();
});