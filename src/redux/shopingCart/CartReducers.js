import { ADD_TO_CART, DECREMENT, INCREMENT, INCREMENT_QUANTITY,DECREMENT_QUANTITY} from "./CartActionType";

let initialState = {
    products: [
        {
            id: 1,
            title: "Asus Vivobook X515MA",
            price: 35500,
            quantity: 20
        },
        {
            id: 2,
            title: "Dell E1916HV 18.5 Inch",
            price: 9300,
            quantity: 35
        },
        {
            id: 3,
            title: "Canon Eos 4000D 18MP",
            price: 36500,
            quantity: 72
        }
  ] , 
  carts: [],
}

const cartReducer = (state=initialState, action) =>{

  switch(action.type){
      case ADD_TO_CART:
         
          const { id, title, price, quantity } = action.payload;
          const data = {
              id,
              title,
              price,
              quantity: quantity - 1,
              value: 1,
          }
          const check = state.carts.find((item) => item.id === action.payload.id);
          if (check) {
              state.carts.map((item, id) => {
                  if (item.id === action.payload.id) {
                      return {
                          value: state.carts[id].value++,
                          quantity:state.carts[id].quantity--,
                      }     
                  }
              });
          }
          if (!check) {
              return {
                ...state, carts: state.carts.concat(data)
              }
          }
          return { ...state}
       

      case INCREMENT:      
        state.carts.filter((item, id) => {
            if (item.id === action.id) {
                if (item.quantity > 1) {
                    return {
                        value: state.carts[id].value++,
                    }  
                }   
            }
        });
          
        return state

      case DECREMENT:
            state.carts.filter((item, id) => {
                if (item.id === action.id) {
                    if (item.value<=1) {
                        return state.carts.splice(id,1)
                    }
                    return {
                        value: state.carts[id].value--,
                    }     
                }
                
            });
            
          return { ...state }
      
      case INCREMENT_QUANTITY:
          
        state.products.filter((item, id) => {
            if (item.id === action.id) {
                if (item.quantity > 0) {
                    return {
                        value: state.products[id].quantity++,
                    }  
                }   
            }
        });
          return state
      
          case DECREMENT_QUANTITY:
          
            let pdIndex=state.products.findIndex(item=>item.id ===action.id);
            let pdtItem = state.products[pdIndex]
    
            if(pdtItem.quantity>1){
                pdtItem.quantity = pdtItem.quantity-1
                state.products[pdIndex] = pdtItem
                return {...state}
            }

            return state
          
           
      default:
          return state;
  }

}
export default cartReducer

