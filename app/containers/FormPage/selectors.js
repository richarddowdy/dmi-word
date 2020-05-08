import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the form state domain
 */

const selectForm = state => state.form || initialState;

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

export default makeSelectForm;
export { selectForm };
