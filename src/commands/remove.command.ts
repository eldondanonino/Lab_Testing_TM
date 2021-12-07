import { Task } from "../interfaces/task.interface";

/**
 * Removes the specified Task from the stack
 * @param taskId number - the ID of the Task to remove
 * @param stack {@link Task} - the stack
 * @returns The stack with the specified Task removed
 */
export function removeTaskFromStack(taskId: number, stack: Task[]): Task[] {
  return stack
    .filter(task => task.id !== taskId)
    .map((task, index) => {
      return { ...task, id: index };
    });
}