export const REQUEST_API_STRINGS = 'REQUEST_API_STRINGS';
export const RECEIVE_API_STRINGS = 'RECEIVE_API_STRINGS';

export const requestApiStrings = () => ({ type: REQUEST_API_STRINGS });
export const receiveApiStrings = strings => ({
  type: RECEIVE_API_STRINGS,
  strings,
});
