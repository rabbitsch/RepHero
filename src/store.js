import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { reducer as formReducer } from "redux-form";
import { practiceReducer } from "./reducers/reducers-doc";

export default createStore(
  combineReducers({
    form: formReducer,
    reducer: practiceReducer
  }),
  applyMiddleware(thunk)
);
