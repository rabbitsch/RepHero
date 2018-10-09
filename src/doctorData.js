import React from "react";
import thunk from "redux-thunk";

const { API_BASE_URL } = require("./config");

// dispatch(searchPracticeRequest())
// doctorData(practice)
// .then(info => searchPracticeSuccess(info))
// .catch(error => searchPracticeError(error))
//
//
// const doctorData = (search) => dispatch => {
//     dispatch(fetchBoardRequest());
//     fetch(`${API_BASE_URL}/doc`).then(res => {
//         if (!res.ok) {
//             return Promise.reject(res.statusText);
//         }
//         return res.json();
//     }).then(board => {
//         console.log(board,'this is my doctor data')
//         dispatch(fetchBoardSuccess(board));
//     }).catch(err => {
//         dispatch(fetchBoardError(err));
//     });
// };

const doctorData = search => {
  console.log({ search });

  console.log(search, "this is my doctor data search result");

  const url = new URL(`${API_BASE_URL}/doc`);
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
    },
    reponse: function(data1) {
      console.log(data1);
    }
  }).then(res => {
    return res.json(); //THIS is what brought in the DATA
  });
};

export { doctorData };
