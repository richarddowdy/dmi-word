import produce from 'immer';
import homeReducer from '../reducer';
import { stringsLoaded, stringsFailed, deleteFailed } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      strings: false,
      deleteError: false,
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle stringsLoaded correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.strings = ['one', 'two', 'three'];
      draft.deleteError = false;
    });

    expect(homeReducer(state, stringsLoaded(['one', 'two', 'three']))).toEqual(expectedResult);
  });

  it('should handle stringsFailed correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.strings = false;
      draft.deleteError = 'Error';
    });
    expect(homeReducer(state, stringsFailed('Error'))).toEqual(expectedResult);
  });

  it('should handle deleteFailed correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.strings = false;
      draft.deleteError = 'Something went wrong. Unable to delete. Please try refreshing the page.';
    });

    expect(homeReducer(state, deleteFailed())).toEqual(expectedResult);
  });
});
