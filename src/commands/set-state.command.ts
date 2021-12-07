import { TaskState } from "../enum/task-state.enum";
import { Task } from "../interfaces/task.interface";

/**
 * Updates the state of a given task
 * @param taskId number - the ID of the task
 * @param newState {@link TaskState} - the new state
 * @param stack {@link Task}[] - the stack
 * @returns The stack with updated values
 */
export function updateTaskState(taskId: number, newState: TaskState, stack: Task[]): Task[] {
  if (!stack.some(task => task.id === taskId)
    || stack[taskId].state === newState) {
    return stack;
  }

  stack[taskId].state = newState;

  return stack;
}