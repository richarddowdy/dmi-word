import { take, call, put, select, takeLatest, takeEvery} from 'redux-saga/effects';
import axios from 'axios';

import { stringsLoaded } from './actions';
import { REQUEST_API_STRINGS } from './constants';

import fetchStrings from './api';


export function* getApiStrings() {
  console.log("saga fire")
  try {
    const strings = yield call(fetchStrings);
    console.log("strings in saga", strings);
    yield put(stringsLoaded(strings));
  } catch (e) {
    console.log(e);
  }
}

// Individual exports for testing
export default function* homeSaga() {
  // See example in containers/HomePage/saga.js
  yield takeEvery(REQUEST_API_STRINGS, getApiStrings);
}
