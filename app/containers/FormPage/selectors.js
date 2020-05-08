import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the form state domain
 */

const selectForm = state => state.form || initialState;
const selectError = state => state.form || initialState;
const selectSuccess = state => state.form || initialState;
/**
 * Other specific selectors
 */

/**
 * Default selector used by Form
 */

const makeSelectForm = () =>
  createSelector(
    selectForm,
    formState => formState.newString,
  );

const makeSelectError = () =>
  createSelector(
    selectError,
    formState => formState.error,
  );

const makeSelectSuccess = () =>
  createSelector(
    selectSuccess,
    formState => formState.success,
  );

// export default makeSelectForm;
export { selectForm, selectError, makeSelectError, makeSelectForm, makeSelectSuccess };
