import { createStore } from 'react-redux';
import counterReducer from './counter/CounterReducer';

const store = createStore(counterReducer)

export default store;