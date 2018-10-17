import React from "react";
import thunk from "redux-thunk";
import axios from "axios";
import { getCrmSuccess } from "./actions/actions-crm";
import store from "./store";
import { saveAuthToken } from "./localStorage";
import { setAuthToken } from "./actions/actions-auth";

const { API_BASE_URL } = require("./config");

const storeAuthInfo = (authToken, dispatch) => {
  console.log(authToken, "this is my authToken");
  store.dispatch(setAuthToken(authToken));
  saveAuthToken(authToken);
};

const url = `${API_BASE_URL}`;

//Get Api Client
const crmData = event => {
  return axios
    .get(`${API_BASE_URL}/api/visits`)
    .then(res => res.data)
    .then(crm => store.dispatch(getCrmSuccess(crm)));
};

//Post Api Client

const postData = data => {
  return axios.post(`${API_BASE_URL}/api/visits`, data).then(res => res.data);
};

//Delete Api Client
export const deleteData = data => {
  return axios
    .delete(`${API_BASE_URL}/api/visits/${data}`)
    .then(res => res.data);
};

//Put Api Client
const putData = data => {
  return axios
    .put(`${API_BASE_URL}/api/visits/${data}`, data)
    .then(res => res.data);
};

//Post Login info
const postLoginData = data => {
  console.log(data, "this is my post login data");
  return (
    axios
      .post(`${API_BASE_URL}/api/login`, data)
      // .then(res => res.data) //Set auth token here
      .then(({ authToken }) => store.dispatch(setAuthToken(authToken)))
      .then(res => res.json())
      .catch(error => {
        console.log(error);
      })
  );
};

//Post Registration info
const postRegData = data => {
  return axios.post(`${API_BASE_URL}/api/users`, data).then(res => res.data);
};

export { crmData, postData, postLoginData, postRegData };
