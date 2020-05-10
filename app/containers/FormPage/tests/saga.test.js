/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { take, call, put, select, takeLatest } from 'redux-saga/effects';
// import formSaga from '../saga';

import { ADD_NEW_STRING, LOAD_STRINGS_SUCCESS } from '../constants';
import { addNewString, stringAdd, stringFailed, stringSuccess } from '../actions';

import formSaga, { addString } from '../saga';

// const generator = formSaga();

const string = ['testing'];

describe('formSaga Saga', () => {
  let addStringGenerator;

  beforeEach(() => {
    addStringGenerator = addString();

    const selectDescriptor = addStringGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = addStringGenerator.next(string).value;
    expect(selectDescriptor).toMatchSnapshot();
  });

  it('should dispatch the loadStringsSuccess action if the request is successfull', () => {
    const newString = 'testing';
    const response = ['testing'];
    let putDescriptor = addStringGenerator.next().value;
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", putDescriptor);
    expect(putDescriptor).toEqual(put(stringAdd(string)));
  });

});

describe('form saga', () => {
  const testFormSaga = formSaga();

  it('should watch for ADD_NEW_STRING action', () => {
    const takeLatestDescriptor = testFormSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(ADD_NEW_STRING, addString));
  });
})
