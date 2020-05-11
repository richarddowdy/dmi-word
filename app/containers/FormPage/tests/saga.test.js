/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { takeLatest } from 'redux-saga/effects';

import { ADD_NEW_STRING } from '../constants';

import formSaga, { addString } from '../saga';

describe('form saga', () => {
  const testFormSaga = formSaga();

  it('should watch for ADD_NEW_STRING action', () => {
    const takeLatestDescriptor = testFormSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(ADD_NEW_STRING, addString));
  });
});
