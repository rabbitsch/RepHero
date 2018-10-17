import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { reducer as formReducer } from "redux-form";
import { practiceReducer } from "./reducers/reducers-doc";
import { authReducer } from "./reducers/reducers-auth";

export default createStore(
  combineReducers({
    form: formReducer,
    reducer: practiceReducer,
    auth: authReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
