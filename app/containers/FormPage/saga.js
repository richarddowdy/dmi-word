import { call, put, select, takeLatest } from 'redux-saga/effects';
import { addNewStringsApi } from './api';
import { stringAdd, stringFailed, stringSuccess } from './actions';
import { makeSelectForm } from './selectors';
import { ADD_NEW_STRING } from './constants';

export function* addString() {
  const newString = yield select(makeSelectForm());
  if(newString.length === 0){
    yield put(stringFailed("Looks like you forgot to type something before submitting!"))
    return;
  }
  try {
    const response = yield call(addNewStringsApi, newString);
    yield put(stringAdd(response.data));
    yield put(stringSuccess('String added Successfully'));
  } catch (err) {
    yield put(stringFailed(err));
  }
}

// Individual exports for testing
export default function* formSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(ADD_NEW_STRING, addString);
}
