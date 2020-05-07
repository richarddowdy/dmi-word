import { fork, call, put ,takeEvery} from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import axios from 'axios';
import request from 'utils/request';

import { receiveApiStrings } from './actions';
import { REQUEST_API_STRINGS } from './constraints';


import fetchStrings from './api';

export function* getApiStrings() {
  console.log("saga fired")
  try {
    const strings = yield fork(fetchStrings);
    console.log("strings in saga", strings);
    yield put(receiveApiStrings([1,2,3,4,5]));
  } catch (e) {
    console.log(e);
  }
}

export default function* rootSaga() {
  console.log("saga heard this request");
  console.log(REQUEST_API_STRINGS)
  yield takeLatest(REQUEST_API_STRINGS, getApiStrings);
}

// export default function* serverTest() {
//   yield takeEvery(receive, getApiStrings);
//   console.log(REQUEST_API_STRINGS)
//   console.log("saga heard this request");
// }
