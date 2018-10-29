import axios from "axios";
const { API_BASE_URL } = require("../config");

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

export const USER_LOGIN_ATTEMPT = "USER_LOGIN_ATTEMPT";
export const loginAttempt = ({ username, password }) => ({
  type: USER_LOGIN_ATTEMPT,
  username,
  password
});

export const USER_LOGIN_ATTEMPT_FAILURE = "USER_LOGIN_ATTEMPT_FAILURE";
export const loginFailure = error => ({
  type: USER_LOGIN_ATTEMPT_FAILURE,
  error
});

export const USER_LOGIN_ATTEMPT_SUCCESS = "USER_LOGIN_ATTEMPT_SUCCESS";
export const loginSuccess = success => ({
  type: USER_LOGIN_ATTEMPT_SUCCESS
});

export const LOGIN_ATTEMPT = "LOGIN_ATTEMPT";
export const loginAttemptAction = ({ username, password }) => dispatch => {
  console.log("Login Attempt action!!");
  axios
    .get(`${API_BASE_URL}/api/login`, { username, password })
    // .then(res => ({ data: { authToken } }))
    .then(res => res.data)
    .then(({ authToken }) => {
      !authToken
        ? dispatch(loginAttemptFailure({ message: "Login failure" }))
        : dispatch(loginAttemptSuccess({ authToken }));
    });
};

export const LOGIN_ATTEMPT_FAILURE = "LOGIN_ATTEMPT_FAILURE";
export const loginAttemptFailure = error => ({
  type: LOGIN_ATTEMPT_FAILURE,
  error
});

export const LOGIN_ATTEMPT_SUCCESS = "LOGIN_ATTEMPT_SUCCESS";
export const loginAttemptSuccess = authToken => ({
  type: LOGIN_ATTEMPT_SUCCESS,
  authToken
});
