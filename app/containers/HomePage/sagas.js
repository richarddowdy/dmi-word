import { call, put, select, takeLatest } from 'redux-saga/effects';

import { REQUEST_API_DATA, receiveApiData, REQUEST_API_STRINGS } from './actions';
import { fetchStrings } from './api';

function* getApiStrings(action) {
  try {
    const strings = yield call(fetchStrings);
    yeild put(receiveApiData(strings))
  } catch(e) {
    console.log(e);
  }
}

export default function* serverStrings() {
  yeild takeLatest(REQUEST_API_STRINGS, getApiStrings);
}