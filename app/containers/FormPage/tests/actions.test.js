import { changeInput } from '../actions';
import { CHANGE_INPUT } from '../constants';

describe('Form actions', () => {
  describe('Change Input Action', () => {
    it('has a type of CHANGE_INPUT', () => {
      const expected = {
        type: CHANGE_INPUT,
      };
      expect(changeInput()).toEqual(expected);
    });
  });
});
