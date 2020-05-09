import produce from 'immer';
import formReducer from '../reducer';
import { changeInput, stringFailed, stringSuccess } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('formReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      // default state params here
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
      draft.success = "Success";
    });

    expect(formReducer(state, stringSuccess('Success'))).toEqual(expectedResult);
  });

  /**
   * Example state change comparison
   *
   * it('should handle the someAction action correctly', () => {
   *   const expectedResult = produce(state, draft => {
   *     draft.loading = true;
   *     draft.error = false;
   *     draft.userData.nested = false;
   *   });
   *
   *   expect(appReducer(state, someAction())).toEqual(expectedResult);
   * });
   */
});
