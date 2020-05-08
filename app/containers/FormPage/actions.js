/*
 *
 * Form actions
 *
 */

import { CHANGE_INPUT, ADD_NEW_STRING, LOAD_STRINGS_SUCCESS } from './constants';

export function changeInput(newString) {
  return {
    type: CHANGE_INPUT,
    newString,
  };
}

export function addNewString(newString) {
  return {
    type: ADD_NEW_STRING,
    newString,
  };
}

export function stringAdded(stringsArray) {
  return {
    type: LOAD_STRINGS_SUCCESS,
    stringsArray,
  };
}
