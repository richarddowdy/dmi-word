import produce from 'immer';

export const initialState = {
  loading: true,
  error: false,
  strings: false,
};

// const appReducer = (state = initialState, action) =>
//   produce(state, draft => {
//     switch(action.type) {
//       case 
//     }
//   })