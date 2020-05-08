/*
 *
 * Form reducer
 *
 */
import produce from 'immer';
import { CHANGE_INPUT, ADD_NEW_STRING } from './constants';

export const initialState = { newString: ""};

/* eslint-disable default-case, no-param-reassign */
const formReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_INPUT:
        draft.newString = action.newString;
        break;
    }
  });

export default formReducer;
