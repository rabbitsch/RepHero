import React from 'react';
import thunk from 'redux-thunk';


const {API_BASE_URL} = require('../config');

export const fetchGetAll = dispatch => {
    fetch(`${API_BASE_URL}/api/crm`).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(getAll => {
        dispatch(fetchUserProfileSuccess(getAll));
    }).catch(err => dispatch(fetchUserProfileError(err)));
};

const crmData = () => {
  return fetch('api/crm',{
    method:'GET',
    header:{
      'Content-Type':'application/JSON'
    }
  }).then(results=> results.data.map(item => item.name))

  .catch(error=>{
    console.log(error)
    // res.status(400)
  })
}


export {crmData};
