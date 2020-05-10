/*
 *
 * Home reducer
 *
 */
import produce from 'immer';
import {
  LOAD_STRINGS_SUCCESS,
  DELETE_SUCCESS,
  DELETE_FAIL,
  RESET_SUCCESS,
} from './constants';
import { LOAD_STRINGS_FAIL } from '../FormPage/constants';

export const initialState = {
  strings: false,
  deleteError: false,
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_STRINGS_SUCCESS:
        draft.strings = action.strings;
        break;

      case LOAD_STRINGS_FAIL:
        draft.error = action.error;
        break;

      case DELETE_SUCCESS:
        draft.strings = action.strings;
        break;

      case DELETE_FAIL:
        draft.error = 'Something went wrong. Unable to delete. Please try refreshing the page.';
        break;
    }
  });

export default homeReducer;
