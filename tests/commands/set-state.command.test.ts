import { updateTaskState } from "../../src/commands/set-state.command";
import { TaskState } from "../../src/enum/task-state.enum";
import { Task } from "../../src/interfaces/task.interface";

describe('set-state.command.ts', () => {
  describe('updateTaskState()', () => {
    it('should correctly update a task\'s state', () => {
      const STACK: Task[] = [
        { name: 'Some task', id: 0, state: TaskState.TBD },
        { name: 'Some other task', id: 1, state: TaskState.DONE },
        { name: 'An other task', id: 2, state: TaskState.BLANK }
      ];
      
      const actual = updateTaskState(2, TaskState.DONE, STACK)[2].state;
      const expected = TaskState.DONE;

      expect(actual).toStrictEqual(expected);
    });

    it('should skip nonexistant ID', () => {
      const STACK: Task[] = [
        { name: 'Some task', id: 0, state: TaskState.TBD },
        { name: 'Some other task', id: 1, state: TaskState.DONE },
        { name: 'An other task', id: 2, state: TaskState.BLANK }
      ];
      
      const actual = updateTaskState(3, TaskState.DONE, STACK);
      const expected = STACK;

      expect(actual).toStrictEqual(expected);
    });

    it('should skip empty stack', () => {
      const STACK: Task[] = [];
      
      const actual = updateTaskState(2, TaskState.DONE, STACK);
      const expected = STACK;

      expect(actual).toStrictEqual(expected);
    });
  });
});