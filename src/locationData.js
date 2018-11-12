import React from "react";
import thunk from "redux-thunk";

const { API_BASE_URL } = require("./config");

const locationData = search => {
  console.log({ search });

  console.log(search, "this is my location data search result");

  const url = new URL(`${API_BASE_URL}/geo`);
  const searchParams = {
    name: search
  };
  Object.keys(searchParams).forEach(key => {
    url.searchParams.append(key, searchParams[key]);
  });

  return fetch(url, {
    method: "GET",
    query: search,
    headers: {
      "Content-Type": "application/JSON"
    }
  }).then(res => {
    return res.json(); //THIS is what brought in the DATA
  });
};

export { locationData };
