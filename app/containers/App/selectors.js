import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;

const makeSelectStrings = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.strings,
  );

// const makeSelectError = () =>
//   createSelector(
//     selectGlobal,
//     globalState => globalState.error,
//   );

// const makeSelectSuccess = () =>
//   createSelector(
//     selectGlobal,
//     globalState => globalState.success,
//   );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export { makeSelectStrings, makeSelectLocation };
// export { makeSelectStrings, makeSelectError, makeSelectSuccess, makeSelectLocation };
