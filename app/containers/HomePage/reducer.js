import { RECEIVE_API_STRINGS } from './constraints';

export const initialState = {
  strings: [],
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_API_STRINGS:
      return [...action.strings]

    default:
      return state;
  }
}