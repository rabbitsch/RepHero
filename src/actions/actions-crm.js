import { crmData } from "../crmData";

export const GET_CRM_REQUEST = "GET_CRM_REQUEST";
export const getCrmRequest = () => ({
  type: GET_CRM_REQUEST
});

export const GET_CRM_SUCCESS = "GET_CRM_SUCCESS";
export const getCrmSuccess = crm => ({
  type: GET_CRM_SUCCESS,
  crm
});

export const GET_CRM_ERROR = "SEARCH_CRM_ERROR";
export const getCrmError = error => ({
  type: GET_CRM_ERROR,
  error
});

// export const crmAction = response => dispatch => {
//   crmData(response)
//     .then(info => {
//       console.log(info, "this is my CRM info");
//       dispatch(getCrmSuccess(info));
//     })
//     .catch(error => getCrmError(error));
// };
// export const searchPractice = practice => dispatch => {
//   dispatch(searchPracticeRequest())
//   doctorData(practice)
//   .then(info => searchPracticeSuccess(info))
//   .catch(error => searchPracticeError(error))
// }
