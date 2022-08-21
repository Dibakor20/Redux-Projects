import { createStore } from "redux";
import counterReducer from './counter/CounterReducer';

const store = createStore(counterReducer)

export default store;