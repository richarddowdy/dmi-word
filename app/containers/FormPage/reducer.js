/*
 *
 * Form reducer
 *
 */
import produce from 'immer';
import { CHANGE_INPUT, ADD_STRINGS_FAIL, ADD_STRINGS_SUCCESS } from './constants';

export const initialState = {
  newString: '',
  error: false,
  success: false,
};

/* eslint-disable default-case, no-param-reassign */
const formReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_INPUT:
        draft.newString = action.newString;
        break;

      case ADD_STRINGS_FAIL:
        draft.error = action.error;
        break;

      case ADD_STRINGS_SUCCESS:
        draft.success = action.success;
        break;
    }
  });

export default formReducer;
