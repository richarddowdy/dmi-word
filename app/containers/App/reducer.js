import produce from 'immer';
import { ADD_STRINGS_FAIL, ADD_STRINGS_SUCCESS } from './constants';


export const initialState = {
  strings: [],
  error: false,
  success: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_STRINGS_FAIL:
        draft.error = action.error;
        break;

      case ADD_STRINGS_SUCCESS:
        draft.success = action.success;
        break;

      case FETCH_STRINGS:
        draft.strings = action.strings;
        break;
    }
  });

export default appReducer;
