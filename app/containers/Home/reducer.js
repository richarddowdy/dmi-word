/*
 *
 * Home reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, REQUEST_API_STRINGS, RECEIVE_API_STRINGS, LOAD_STRINGS_SUCCESS } from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_STRINGS_SUCCESS:
        draft.strings = action.strings;
        break;
    }
  });

export default homeReducer;
