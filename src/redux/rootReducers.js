import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counter/CounterReducer";


const rootReducers = combineReducers({
    counter:counterReducer,
})

export default rootReducers;