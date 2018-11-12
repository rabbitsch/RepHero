import React from "react";
import thunk from "redux-thunk";
import axios from "axios";
import store from "./store";

const { API_BASE_URL } = require("./config");

const doctorData = ({ name, location }) => {
  console.log("doctorData:", { name, location });

  const searchParams = {
    name: name,
    location: location
  };

  return axios
    .get(`${API_BASE_URL}/doc`, {
      params: searchParams
    })
    .then(payload => payload.data);
};

export { doctorData };
