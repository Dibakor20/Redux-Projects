import { removeTask } from "../todo/TodoAction"

const deleteTodo = (todoId) => {
    return async (dispatch) => {
    await fetch(`http://localhost:9000/todos/${todoId}`, {
            method: "DELETE",            
    })
        
        dispatch(removeTask(todoId))
    
    }
}

export default deleteTodo;