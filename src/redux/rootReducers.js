import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counter/CounterReducer";
import cartReducers from "./shopingCart/CartReducers";


const rootReducers = combineReducers({
    counter: counterReducer,
    cart:cartReducers,
})

export default rootReducers;