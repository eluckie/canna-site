import newCannaVisibleReducer from "./new-canna-visible-reducer";
import inStockListReducer from "./in-stock-list-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  newCannaVisible: newCannaVisibleReducer,
  inStockList: inStockListReducer
});

export default rootReducer;