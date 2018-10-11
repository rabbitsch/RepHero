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

// axios
//   .get(`${API_BASE_URL}/api/crm`)
//   .then(res => {
//     res.json(res.data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

export { crmData };
