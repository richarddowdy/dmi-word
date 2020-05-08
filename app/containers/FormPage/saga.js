import { call, put, select, takeLatest } from 'redux-saga/effects';
import { addNewStringsApi } from './api';
import { stringAdded } from './actions';
import makeSelectForm from './selectors';
import { ADD_NEW_STRING } from './constants';

export function* addString() {
  const newString = yield select(makeSelectForm());
  try {
    const response = yield call(addNewStringsApi, newString);
    yield put(stringAdded(response.data));
  } catch (err) {
    console.log(err);
  }
}

// Individual exports for testing
export default function* formSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(ADD_NEW_STRING, addString);
}
