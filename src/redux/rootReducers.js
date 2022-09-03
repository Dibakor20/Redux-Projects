import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counter/CounterReducer";
import cartReducers from "./shopingCart/CartReducers";
import todoReducers from "./todo/TodoReducers";


const rootReducers = combineReducers({
    // counter: counterReducer,
    // cart: cartReducers,
    TODO:todoReducers
})

export default rootReducers;