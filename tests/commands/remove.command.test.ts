import { removeTaskFromStack } from "../../src/commands/remove.command";
import { TaskState } from "../../src/enum/task-state.enum";
import { Task } from "../../src/interfaces/task.interface";

describe('remove.command.ts', () => {
  describe('removeTaskFromStack()', () => {
    it('should remove the given task from the stack', () => {
      const TASK_TO_REMOVE: Task = {
        name: 'Manger',
        id: 0,
        state: TaskState.DONE,
      };

      const EXISTING_STACK = [
        TASK_TO_REMOVE,
        { name: 'Other task', id: 1, state: TaskState.TBD } as Task
      ]

      const actual = removeTaskFromStack(TASK_TO_REMOVE.id, EXISTING_STACK);

      expect(actual).not.toContain(TASK_TO_REMOVE);
    });

    it('should return the same stack - nonexistent ID', () => {
      const ID_TO_FIND = 4;

      const STACK: Task[] = [
        { name: 'Some task', id: 0, state: TaskState.TBD },
        { name: 'Some other task', id: 1, state: TaskState.DONE },
        { name: 'An other task', id: 35, state: TaskState.BLANK }
      ];

      const actual = removeTaskFromStack(ID_TO_FIND, STACK);

      expect(actual).toBe(STACK);
    });
  })
});