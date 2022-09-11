import { combineReducers } from "redux";
import wines from "./wineReducer";

const rootReducer = combineReducers({
  wines,
});

export default rootReducer;
