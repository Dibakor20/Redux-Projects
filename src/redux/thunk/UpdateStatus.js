import { toggleTodo } from "../todo/TodoAction"

const updateStatus = (todoId,currentStatus) => {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
            method: "PATCH",
            body: JSON.stringify({
                completed:!currentStatus
            }),
            headers: {
                "Content-type":"application/json"
            }
            
        } )
        const todo = await response.json()
    
        dispatch(toggleTodo(todo.id))
    
    }
}

export default updateStatus;