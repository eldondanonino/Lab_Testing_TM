import { newTaskFromLine } from '../../src/commands/add.command';
import { TaskState } from '../../src/enum/task-state.enum';
import { Task } from '../../src/interfaces/task.interface';

describe('add.command.ts', () => {
  describe('newTaskFromLine()', () => {
    it('should correctly read a command and return a Task', () => {
      const CURATED_LINE_TO_TEST = 'Manger';

      const actual = newTaskFromLine(CURATED_LINE_TO_TEST, 0);
      const expected: Task = {
        name: 'Manger',
        state: TaskState.BLANK,
        id: 0,
      };

      expect(actual).toStrictEqual(expected);
    });

    it('should return `null`', () => {
      const EMPTY_LINE = '';

      const actual = newTaskFromLine(EMPTY_LINE, 0);
      const expected = null;

      expect(actual).toBe(expected);
    });
  });
});
