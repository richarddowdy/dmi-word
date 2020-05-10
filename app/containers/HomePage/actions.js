/*
 *
 * Home actions
 *
 */

import {
  REQUEST_API_STRINGS,
  LOAD_STRINGS_SUCCESS,
  DELETE_STRING,
  DELETE_FAIL,
  DELETE_SUCCESS,
} from './constants';

import { LOAD_STRINGS_FAIL } from '../FormPage/constants';

export function loadStrings() {
  return {
    type: REQUEST_API_STRINGS,
  };
}

export function stringsLoaded(strings) {
  return {
    type: LOAD_STRINGS_SUCCESS,
    strings,
  };
}

export function stringsFailed(error) {
  return {
    type: LOAD_STRINGS_FAIL,
    error,
  };
}

export function deleteString(string) {
  return {
    type: DELETE_STRING,
    string,
  };
}

export function deleteFailed(error) {
  return {
    type: DELETE_FAIL,
    error,
  };
}

export function deleteSuccess(strings) {
  return {
    type: DELETE_SUCCESS,
    strings,
  };
}
