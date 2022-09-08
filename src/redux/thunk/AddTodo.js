import { addTodo } from "../todo/TodoAction"


const addNewTodo = (todoText) => {
    return async (dispatch) => {
        const response = await fetch('http://localhost:9000/todos', {
            method: "post",
            body: JSON.stringify({
                text: todoText,
                completed:false
            }),
            headers: {
                "Content-type":"application/json"
            }
            
        } )
        const todo = await response.json()
    
        dispatch(addTodo(todo.text))
    
    }
}

export default addNewTodo;