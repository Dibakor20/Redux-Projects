import { ADD_TODO, ALL_CLEAR_TASK, ALL_COMPLETE_TASK, COLOR_CHANGE, COLOR_SELECT, LOADED_TODO, REMOVE_TASK, STATUS_CHANGE, TOGGLE_TODO } from "./TodoActionType";

const todoState = {
  todo: [],
  status: "ALL",
  colors: [],
};

const todoReducers = (state = todoState, action) => {
  switch (action.type) {

    case LOADED_TODO:
      return {
        ...state,
        todo:action.payload
      }

    case ADD_TODO:

      let task = {
        id: Math.round(Math.random() * 10000),
        text: action.payload,
        completed: false,
      };
      return {
        ...state,
        todo: state.todo.concat(task),
      };
    
    case TOGGLE_TODO:

      return {
        ...state,
       todo:state.todo.map((item, id) => {
          if (item.id !== action.payload) {
            return item
          }
          return {
            ...item,
            completed: !item.completed,
          };
        })
      }
   
    
    case COLOR_SELECT:

      const { todoId } = action.payload;
      return {
        ...state,
        todo:state.todo.map((item, id) => {
           if (item.id !== todoId) {
             return item
           }
           return {
             ...item,
             color:action.payload.color,
           };
         })
      }
    
    case STATUS_CHANGE:
      return {
        ...state,
        status:action.payload
      }

    case COLOR_CHANGE:
      const { color, changeType } = action.payload
      switch (changeType) {
        case "Added":
          return {
            ...state,
            colors:[...state.colors,color]
          }
        case "Removed":
          return {
            ...state,
            colors: state.colors.filter((existingColor)=>existingColor !== color)
          }
        default:
          return state
      }

    case REMOVE_TASK:
      return {
          todo:state.todo.filter((todo) => todo.id !== action.payload)
      }
    
    case ALL_COMPLETE_TASK:
      return {
        ...state,
        todo: state.todo.map((todo) => {
          return {
            ...todo,
            completed:true
          }
        })
      }
    
    case ALL_CLEAR_TASK:
      return {
        todo:state.todo.filter((todo)=>!todo.completed)
      }

    default:
      return state;
  }
};

export default todoReducers;
