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

export const GET_CONTENT_SUCCESS = "GET_CONTENT_SUCCESS";
export const getContentSuccess = content => ({
  type: GET_CONTENT_SUCCESS,
  content
});

export const GET_CRM_ERROR = "SEARCH_CRM_ERROR";
export const getCrmError = error => ({
  type: GET_CRM_ERROR,
  error
});

//Write the update and Delete CRM Action

export const UPDATE_CRM = "UPDATE_CRM";
export const update_Crm = crm => ({
  type: UPDATE_CRM,
  crm
});

export const DELETE_CRM = "DELETE_CRM";
export const delete_Crm = crm => ({
  type: DELETE_CRM,
  crm
});
