import { combineReducers } from "redux";
import { cartData } from "./reducer";
import { productData } from "./productReducers";

export default combineReducers({ cartData, productData })