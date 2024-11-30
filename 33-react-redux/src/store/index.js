import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import isVisibleReducer from "./isVisibleReducer";

const rootReducer = combineReducers({
  //key : value 값
  counter: counterReducer,
  isVisible: isVisibleReducer,
}); //여러개의 reducer를 한데 모아놓는 곳

export default rootReducer;
