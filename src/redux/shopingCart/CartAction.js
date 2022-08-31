import {INCREMENT,DECREMENT, ADD_TO_CART, INCREMENT_QUANTITY,DECREMENT_QUANTITY} from './CartActionType'

export const increment = (id)=>{
    return {
        type: INCREMENT,
        id: id
    }
}
export const decrement = (id) =>{
    return {
        type: DECREMENT,
        id: id
    }
}

export const addToCart = (item)=>{
return {
    type: ADD_TO_CART,
    payload: item
}
}

export const incrementQuantity = (id) => {
    return {
        type: INCREMENT_QUANTITY,
        id:id
    }
}

export const decrementQuantity = (id) => {
    return {
        type: DECREMENT_QUANTITY,
        id:id
    }
}