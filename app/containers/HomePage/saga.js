import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';

import { receiveApiStrings } from './actions';
import { REQUEST_API_STRINGS } from './constraints';

import fetchStrings from './api';

export function* getApiStrings(action) {
  console.log("saga fired")
  try {
    const strings = yield call(fetchStrings());
    console.log("strings in saga", strings);
    yield put(receiveApiStrings([1,2,3,4,5]));
  } catch (e) {
    console.log(e);
  }
}

export default function* serverStrings() {
  console.log("saga heard this request");
  console.log(REQUEST_API_STRINGS)
  yield takeLatest(REQUEST_API_STRINGS, getApiStrings);
}
