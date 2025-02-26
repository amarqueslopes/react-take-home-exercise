import { render, screen, fireEvent } from "@testing-library/react";
import TaskForm from "./TaskForm";

test("TaskForm adds a new task", () => {
  const onAddTask = jest.fn();
  render(<TaskForm onAddTask={() => onAddTask} />);

  const input = screen.getByPlaceholderText("New task...");
  const button = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(button);

  expect(onAddTask).toHaveBeenCalledWith("New Task");
});