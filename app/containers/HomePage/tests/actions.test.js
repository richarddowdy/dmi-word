import { loadStrings, stringsLoaded, deleteString, deleteFailed, deleteSuccess } from '../actions';
import {
  REQUEST_API_STRINGS,
  LOAD_STRINGS_SUCCESS,
  DELETE_STRING,
  DELETE_FAIL,
  DELETE_SUCCESS,
} from '../constants';

describe('Home actions', () => {
  describe('Request Api Action', () => {
    it('has a type of REQUEST_API_STRINGS', () => {
      const expected = {
        type: REQUEST_API_STRINGS,
      };
      expect(loadStrings()).toEqual(expected);
    });
  });

  describe('Load Strings Success', () => {
    it('has a type of LOAD_STRINGS_SUCCESS', () => {
      const expected = {
        type: LOAD_STRINGS_SUCCESS,
      };
      expect(stringsLoaded()).toEqual(expected);
    });
  });

  describe('Delete String', () => {
    it('has a type of DELETE_STRING', () => {
      const expected = {
        type: DELETE_STRING,
      };
      expect(deleteString()).toEqual(expected);
    });
  });

  describe('Delete Fail', () => {
    it('has a type of DELETE_FAIL', () => {
      const expected = {
        type: DELETE_FAIL,
      };
      expect(deleteFailed()).toEqual(expected);
    });
  });

  describe('Delete Success', () => {
    it('has a type of DELETE_SUCCESS', () => {
      const expected = {
        type: DELETE_SUCCESS,
      };
      expect(deleteSuccess()).toEqual(expected);
    });
  });
});
