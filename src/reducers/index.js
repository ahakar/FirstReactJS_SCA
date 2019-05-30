import {combineReducers} from "redux";
import productReducers from "./productReducers.js";
 
const rootReducer = combineReducers({
	user: productReducers
});

export default rootReducer;
