import {
  SEARCH_PRACTICE_ERROR,
  SEARCH_PRACTICE_REQUEST,
  SEARCH_PRACTICE_SUCCESS
} from './actions/actions-doc';

const initialState = {
  practice: [],
  loading: false,
  error: null
};

export const practiceReducer = (state = initialState, action)=>{
  console.log(action, 'this is my practice reducer talking')

  if(action.type === SEARCH_PRACTICE_REQUEST){
    return Object.assign({},state,{
      loading:true,
      error:null
    })
  }
  else if(action.type === SEARCH_PRACTICE_SUCCESS){
    return Object.assign({},state,{
      practice: action.practice,
      loading:false,
      error:null
    })
  }
  else if(action.type === SEARCH_PRACTICE_ERROR){
    return Object.assign({},state,{
      error: action.error,
      loading:false
    })
  }
  return state;
}
