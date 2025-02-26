import { render, screen, fireEvent } from "@testing-library/react";
import TaskItem from "./TaskItem";

test("TaskItem toggles completion status", () => {
  const task = { id: "1", title: "Test Task", isCompleted: false };
  const onToggle = jest.fn();
  render(<TaskItem task={task} onDelete={() => {}} onToggle={onToggle} />);

  const taskText = screen.getByText("Test Task");
  fireEvent.click(taskText);

  expect(onToggle).toHaveBeenCalledWith("1");
});