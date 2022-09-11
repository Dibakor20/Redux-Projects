import { colorSelect } from "../todo/TodoAction"

const updateColor = (todoId,color) => {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
            method: "PATCH",
            body: JSON.stringify({
                color:color
            }),
            headers: {
                "Content-type":"application/json"
            }
            
        } )
        const todo = await response.json()
    
        dispatch(colorSelect(todo.id,todo.color))
    
    }
}

export default updateColor;