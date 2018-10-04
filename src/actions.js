import {doctorData} from './doctorData';





export const SEARCH_PRACTICE_REQUEST = 'SEARCH_PRACTICE_REQUEST';
export const searchPracticeRequest = () => ({
  type: SEARCH_PRACTICE_REQUEST
});

export const SEARCH_PRACTICE_SUCCESS = 'SEARCH_PRACTICE_SUCCESS';
export const searchPracticeSuccess = practice => ({
  type: SEARCH_PRACTICE_SUCCESS,
  practice
});

export const SEARCH_PRACTICE_ERROR = 'SEARCH_PRACTICE_ERROR'
export const searchPracticeError = error => ({
  type: SEARCH_PRACTICE_ERROR,
  error
});

export const searchPractice = practice => dispatch => {
  dispatch(searchPracticeRequest())
  doctorData(practice)
  .then(info => searchPracticeSuccess(info))
  .catch(error => searchPracticeError(error))
}

// export const FETCH_CRM_SUCCESS = 'FETCH_CRM_SUCCESS'
// export const fetchCrmSuccess = crm => ({
//   type: FETCH_CRM_SUCCESS,
//   crm
// });
//
// export const fetchCRM = () => dispatch => {
//   fetch(`${API_BASE_URL}/crm`)
//     .then(res => {
//       if(!res.ok){
//         return Promise.reject(res.statusText);
//       }
//       return res.json();
//     })
//     .then(crm => {
//       dispatch
//     })
// }
