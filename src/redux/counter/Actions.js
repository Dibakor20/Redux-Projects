import { INCREMENT, DECREMENT } from './ActionType';

const increment = (value) => {
    return {
        type: INCREMENT,
        payload: value,
    }
}

const decrement = (value) => {
    return {
        type: DECREMENT,
        payload: value,
    }
}