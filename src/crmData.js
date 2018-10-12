import React from "react";
import thunk from "redux-thunk";
import axios from "axios";
import { getCrmSuccess } from "./actions/actions-crm";
import store from "./store";

const { API_BASE_URL } = require("./config");

const url = `${API_BASE_URL}`;

const crmData = event => {
  return axios
    .get(`${API_BASE_URL}/api/visits`)
    .then(res => res.data)
    .then(crm => store.dispatch(getCrmSuccess(crm)));
};

const postData = data => {
  return axios.post(`${API_BASE_URL}/api/visits`, data).then(res => res.data);
};

export { crmData, postData };
