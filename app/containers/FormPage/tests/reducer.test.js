import produce from 'immer';
import formReducer from '../reducer';
import { changeInput, stringFailed, stringSuccess } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('formReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      newString: '',
      error: false,
      success: false,
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(formReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle changeInput correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.newString = 'testing';
      draft.error = false;
      draft.success = false;
    });

    expect(formReducer(state, changeInput('testing'))).toEqual(expectedResult);
  });

  it('should handle stringFailed correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.newString = '';
      draft.error = 'String Failed';
      draft.success = false;
    });

    expect(formReducer(state, stringFailed('String Failed'))).toEqual(expectedResult);
  });

  it('should handle stringSuccess correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.newString = '';
      draft.error = false;
      draft.success = 'Success';
    });

    expect(formReducer(state, stringSuccess('Success'))).toEqual(expectedResult);
  });
});
