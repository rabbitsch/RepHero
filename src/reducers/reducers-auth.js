import {
  SET_AUTH_TOKEN,
  AUTH_SUCCESS,
  USER_LOGIN_ATTEMPT_FAILURE
} from "../actions/actions-auth";

const initialState = {
  authToken: null,
  currentUser: null,
  loading: false,
  error: null
};

export const authReducer = (state = initialState, action) => {
  if (action.type === SET_AUTH_TOKEN) {
    return Object.assign({}, state, {
      authToken: action.authToken
    });
  } else if (action.type === AUTH_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      currentUser: action.currentUser
    });
  } else if (action.type === USER_LOGIN_ATTEMPT_FAILURE) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  }
  return state;
  console.log(state, "this is current state bra.. from auth reducer");
};

//
// else if (action.type === USER_LOGIN_ATTEMPT_SUCCESS) {
//   return Object.assign({}, state, {
//     loading: false,
//
//   });
// }
