// export const REQUEST_API_STRINGS = 'REQUEST_API_STRINGS';
// export const RECEIVE_API_STRINGS = 'RECEIVE_API_STRINGS';
import { REQUEST_API_STRINGS, RECEIVE_API_STRINGS } from './constraints';

export const requestApiStrings = () => {
  console.log("action");
  console.log({type: REQUEST_API_STRINGS})
  return { type: REQUEST_API_STRINGS };
};
export const receiveApiStrings = strings => ({
  type: RECEIVE_API_STRINGS,
  strings,
});
