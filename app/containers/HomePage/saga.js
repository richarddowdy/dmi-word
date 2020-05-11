import { all, call, put, takeLatest } from 'redux-saga/effects';

import { stringsLoaded, deleteSuccess, deleteFailed } from './actions';
import { REQUEST_API_STRINGS, DELETE_STRING } from './constants';

import { fetchStrings, deleteString } from './api';
import { stringFailed } from '../FormPage/actions';

export function* getApiStrings() {
  try {
    const strings = yield call(fetchStrings); // calls API
    yield put(stringsLoaded(strings)); // send action with strings array
  } catch (err) {
    yield put(stringFailed(err)); // send action with error message
  }
}

export function* deleteApiString(action) {
  try {
    // calls API to delete specific string
    const remainingStrings = yield call(deleteString, action.string);
    yield put(deleteSuccess(remainingStrings)); // sends action with remaining strings
  } catch (err) {
    yield put(deleteFailed(err)); // sends action with error message
  }
}

// Individual exports for testing
export default function* homeSaga() {
  // Listens for actions with type REQUEST_API_STRINGS or DELETE_STRING
  // then calls getApiStrings or deleteApiStrings respectively
  yield all([
    takeLatest(REQUEST_API_STRINGS, getApiStrings),
    takeLatest(DELETE_STRING, deleteApiString),
  ]);
}
