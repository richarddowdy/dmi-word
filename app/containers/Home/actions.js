/*
 *
 * Home actions
 *
 */

import { DEFAULT_ACTION, REQUEST_API_STRINGS, LOAD_STRINGS_SUCCESS } from './constants';

export function loadStrings() {
  return {
    type: REQUEST_API_STRINGS,
  };
}

export function stringsLoaded(strings) {
  console.log("pushing to redux", strings)
  return {
    type: LOAD_STRINGS_SUCCESS,
    strings,
  };
}
