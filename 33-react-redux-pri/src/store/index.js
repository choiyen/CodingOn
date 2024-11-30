import { combineReducers } from "redux";
import MoneyReducer from "./MoneyReducer";

const rootReducer = combineReducers({
  //key : value 값
  moneyCount: MoneyReducer,
}); //여러개의 reducer를 한데 모아놓는 곳

export default rootReducer;
