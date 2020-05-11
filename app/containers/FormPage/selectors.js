import { createSelector } from 'reselect';
import { initialState } from './reducer';

// Allows for access to form key in the state tree
const selectForm = state => state.form || initialState;

const makeSelectForm = () =>
  createSelector(
    selectForm,
    formState => formState.newString,
  );

const makeSelectSuccess = () =>
  createSelector(
    selectForm,
    formState => formState.success,
  );

const makeSelectError = () =>
  createSelector(
    selectForm,
    formState => formState.error,
  );

export { selectForm, makeSelectError, makeSelectForm, makeSelectSuccess };
