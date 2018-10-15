export const GET_CRM_REQUEST = "GET_CRM_REQUEST";
export const getCrmRequest = () => ({
  type: GET_CRM_REQUEST,
  loading: true
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
