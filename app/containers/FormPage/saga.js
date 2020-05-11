import { call, put, select, takeLatest } from 'redux-saga/effects';
import { addNewStringsApi } from './api';
import { stringAdd, stringFailed, stringSuccess } from './actions';
import { makeSelectForm } from './selectors';
import { ADD_NEW_STRING } from './constants';

export function* addString() {
  const newString = yield select(makeSelectForm());
  if (newString.length === 0) {
    yield put(stringFailed("Looks like you forgot to type something before submitting!"))
    return;
  }
  try {
    const response = yield call(addNewStringsApi, newString);
    if (response.status === 201) { // if new string created successfully
      yield put(stringAdd(response.data)); // send action with response.data
      yield put(stringSuccess('String added Successfully')); // send action with success message
    } else {
      throw new Error("Oops! Something went wrong. Please try refreshing the page.")
    }
  } catch (err) {
    yield put(stringFailed(err.message)); // send action with error message to alert user
  }
}

// Individual exports for testing
export default function* formSaga() {
  // Listenes for all an action with type: ADD_NEW_STRING, then calls addString
  yield takeLatest(ADD_NEW_STRING, addString);
}
