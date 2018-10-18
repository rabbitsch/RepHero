export const SET_AUTH_TOKEN = "SET_AUTH_TOKEN";
export const setAuthToken = authToken => ({
  type: SET_AUTH_TOKEN,
  authToken
});

export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const authSuccess = currentUser => ({
  type: AUTH_SUCCESS,
  currentUser
});
