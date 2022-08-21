/* eslint-disable default-case */
import { INCREMENT, DECREMENT } from './ActionType';

const initialState = {
    value: 0,
}

const counterReducer = (state = initialState, action) => {

    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                value:state.value + 1,
            }
        case DECREMENT:
            return {
                ...state,
                value:state.value - 1,
            }
    }
}

export default counterReducer;