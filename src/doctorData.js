import React from 'react';
import thunk from 'redux-thunk';

const {API_BASE_URL} = require('./config');



// export const doctorData = (search) => dispatch => {
//     dispatch(fetchBoardRequest());
//     fetch('/board').then(res => {
//         if (!res.ok) {
//             return Promise.reject(res.statusText);
//         }
//         return res.json();
//     }).then(board => {
//         dispatch(fetchBoardSuccess(board));
//     }).catch(err => {
//         dispatch(fetchBoardError(err));
//     });
// };


const doctorData = (search) =>{
  console.log(search,'this is my doctor data search result')
  return fetch(`${API_BASE_URL}/doc`,{
    method:'GET',
    query: search,
    header:{
      'Content-Type':'application/JSON'
    }


  })
  .then(results => results.data)


  .catch(error=>{
    console.log(error)
    // res.status(400)
  })
}


export {doctorData};
