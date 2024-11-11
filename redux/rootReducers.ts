import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import welcomeReducer from "./slice/welcomeSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  welcome: welcomeReducer
});

export default rootReducer;
