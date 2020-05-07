import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the home state domain
 */

// const selectHomeDomain = state => state.home || initialState;

/**
 * Other specific selectors
 */

const selectState = state => state.home || initialState;

/**
 * Default selector used by Home
 */

// const makeSelectHome = () =>
//   createSelector(
//     selectHomeDomain,
//     substate => substate,
//   );

const makeSelectStrings = () =>
  createSelector(
    selectState,
    homeState => homeState.strings,
  );

export { makeSelectStrings };
