/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { take, call, put, select } from 'redux-saga/effects';
import homeSaga, { getApiStrings } from '../saga';
import { REQUEST_API_STRINGS, DELETE_STRING, LOAD_STRINGS_SUCCESS } from '../constants';
import { stringsLoaded } from '../actions';
import { stringFailed } from '../../FormPage/actions';

// const generator = homeSaga();

// describe('homeSaga Saga', () => {
//   it('Expect to have unit tests specified', () => {
//     expect(true).toEqual(false);
//   });
// });

const strings = ['one', 'two', 'three'];

describe('getApiStrings Saga', () => {
  let getApiStringsGenerator;

  beforeEach(() => {
    getApiStringsGenerator = getApiStrings();

    const selectDescriptor = getApiStringsGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = getApiStringsGenerator.next(strings).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should call the stringFailed action if the response errors', () => {
    const response = new Error('Error');
    const putDescriptor = getApiStringsGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(stringFailed(response)));
  });
});
