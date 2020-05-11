/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { put } from 'redux-saga/effects';
import { getApiStrings } from '../saga';
import { stringFailed } from '../../FormPage/actions';

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
