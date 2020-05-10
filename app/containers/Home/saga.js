import { all, call, put, takeLatest } from 'redux-saga/effects';

import { stringsLoaded, deleteSuccess, deleteFailed } from './actions';
import { REQUEST_API_STRINGS, DELETE_STRING } from './constants';

import { fetchStrings, deleteString } from './api';
import { stringFailed } from '../FormPage/actions';

export function* getApiStrings() {
  try {
    const strings = yield call(fetchStrings);
    yield put(stringsLoaded(strings));
  } catch (err) {
    yield put(stringFailed(err));
  }
}

export function* deleteApiString(action) {
  try {
    const remainingStrings = yield call(deleteString, action.string);
    yield put(deleteSuccess(remainingStrings));
  } catch (err) {
    yield put(deleteFailed(err));
  }
}

// Individual exports for testing
export default function* homeSaga() {
  yield all([
    takeLatest(REQUEST_API_STRINGS, getApiStrings),
    takeLatest(DELETE_STRING, deleteApiString),
  ]);
}
