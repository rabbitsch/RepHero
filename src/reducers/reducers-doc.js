import {
  SEARCH_PRACTICE_ERROR,
  SEARCH_PRACTICE_REQUEST,
  SEARCH_PRACTICE_SUCCESS
} from "../actions/actions-doc";

import {
  GET_CRM_SUCCESS,
  UPDATE_CRM,
  DELETE_CRM
} from "../actions/actions-crm";

const initialState = {
  practice: [],
  crm: [],
  loading: false,
  error: null
};

export const practiceReducer = (state = initialState, action) => {
  if (action.type === SEARCH_PRACTICE_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  } else if (action.type === SEARCH_PRACTICE_SUCCESS) {
    return Object.assign({}, state, {
      practice: action.practice,
      loading: false,
      error: null
    });
  } else if (action.type === SEARCH_PRACTICE_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  } else if (action.type === GET_CRM_SUCCESS) {
    return Object.assign({}, state, {
      crm: action.crm,
      loading: false,
      error: null
    });
  } else if (action.type === UPDATE_CRM) {
    return Object.assign({}, state, {
      crm: action.crm,
      loading: false,
      error: null
    });
  } else if (action.type === DELETE_CRM) {
    return Object.assign({}, state, {
      crm: action.crm,
      loading: false,
      error: null
    });
  }

  return state;
};
