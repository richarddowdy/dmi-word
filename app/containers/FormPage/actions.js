/*
 *
 * Form actions
 *
 */

import {
  CHANGE_INPUT,
  ADD_NEW_STRING,
  LOAD_STRINGS_SUCCESS,
  ADD_STRINGS_SUCCESS,
  ADD_STRINGS_FAIL,
} from './constants';

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

export function stringAdd(stringsArray) {
  return {
    type: LOAD_STRINGS_SUCCESS,
    stringsArray,
  };
}

export function stringFailed(error) {
  return {
    type: ADD_STRINGS_FAIL,
    error,
  };
}

export function stringSuccess(success) {
  return {
    type: ADD_STRINGS_SUCCESS,
    success,
  };
}
