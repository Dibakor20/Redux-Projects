import { editTask } from "../todo/TodoAction";

const updateTodo = (todoId, text) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        text: text,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const todo = await response.json();

    dispatch(editTask(todo.id, todo.text));
  };
};

export default updateTodo;
