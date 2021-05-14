import { combineReducers } from "redux";

import userReducer from "../Reducers/userReducer";

const rootReducer = combineReducers({
  loggedUser: userReducer,
});

export default rootReducer;
