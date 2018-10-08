





export const GET_CRM_REQUEST = 'SEARCH_PRACTICE_REQUEST';
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
