import {TaskState} from '../enums/task-state.enum';
import {Task} from '../interfaces/task.interface';

/**
 * Reads a command line and return a new task with state BLANK
 * @param commandLine string - the given command
 * @param nbrTasks number - the current number of tasks
 * @returns Task object or `null` if malformed
 */
export function newTaskFromLine(
  commandLine: string,
  nbrTasks: number
): Task | null {
  return commandLine === ''
    ? null
    : {
        name: commandLine,
        state: TaskState.BLANK,
        id: nbrTasks,
      };
}
