import { parseLine } from "../../src/services/line-parsing.service";

describe('file-parsing.service.ts', () => {
  describe('parseLine()', () => {
    it('should return null for wrong args count', () => {
      const WRONG_ARGC_NOARGS = 'o ';
      const WRONG_ARGC_TOOMANYARGS = 'x 1 deded';

      const actual_noargs = parseLine(WRONG_ARGC_NOARGS);
      const actual_toomanyargs = parseLine(WRONG_ARGC_TOOMANYARGS);
      const expected = null;

      expect(actual_noargs).toBe(expected);
      expect(actual_toomanyargs).toBe(expected);
    });
  });
});