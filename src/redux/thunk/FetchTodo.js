import { loadedTodo } from "../todo/TodoAction";

const fetchTodo = async (dispatch) => {
    const response = await fetch('http://localhost:9000/todos')
    const todo = await response.json()

    dispatch(loadedTodo(todo))

}

export default fetchTodo;