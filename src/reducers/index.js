import {combineReducers} from "redux";
import productReducers from "./productReducers.js";
import cartReducers from "./cartReducers.js";
 
const rootReducer = combineReducers({
	user: productReducers,
	cart: cartReducers
});

export default rootReducer;
