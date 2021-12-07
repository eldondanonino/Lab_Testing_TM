import { Task } from "../interfaces/task.interface";

/**
 * Removes the specified Task from the stack
 * @param taskId number - the ID of the Task to remove
 * @param stack {@link Task} - the stack
 * @returns The stack with the specified Task removed
 */
export function removeTaskFromStack(taskId: number, stack: Task[]): Task[] {
  if (stack.length <= 1 || !stack.some(task => task.id === taskId)) {
    return stack;
  }

  return stack.filter(task => task.id !== taskId);
}