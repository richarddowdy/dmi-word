import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectStrings = () =>
  createSelector(
    selectHome,
    homeState => homeState.strings,
  );

const makeSelectDeleteError = () =>
  createSelector(
    selectHome,
    homeState => homeState.error,
  );

export { selectHome, makeSelectStrings, makeSelectDeleteError };
