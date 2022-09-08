import React from "react";
import Todo from "./Todo";
import { useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import fetchTodo from "../../redux/thunk/FetchTodo";

const TodoList = () => {
  const todoTask = useSelector((state) => state?.TODO);
  const dispatch = useDispatch();
  const todoList = todoTask?.todo;
  const status = todoTask.status; 
  const colors = todoTask.colors;

  useEffect(() => {
    dispatch(fetchTodo)
  },[dispatch])

  const statusFilter = (todo) => {  
    switch (status) {
        case "Complete":
            return todo.completed;

        case "Incomplete":
            return !todo.completed;

        default:
            return true;
    }
  }

  const colorFilter = (todo) => {
    if (colors?.length > 0) {
      return colors.includes(todo?.color)
    }
    return true
  }

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todoList
        .filter(statusFilter)
        .filter(colorFilter) 
        .map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
