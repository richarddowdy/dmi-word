import { createSelector } from 'reselect';
import { initialState } from './reducer';

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
