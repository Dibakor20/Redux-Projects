import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchTodo from "../../redux/thunk/FetchTodo";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Todo from "./Todo";
import TodoList from "./TodoList";

const TodoLayout = () => {
  const todoTask = useSelector((state) => state?.TODO);
  const dispatch = useDispatch();
  const todoList = todoTask?.todo;
  const status = todoTask.status;
  const colors = todoTask.colors;

  useEffect(() => {
    dispatch(fetchTodo);
  }, [dispatch]);

  const statusFilter = (todo) => {
      return todo.completed  
  };

  const colorFilter = (todo) => {
    if (colors?.length > 0) {
      return colors.includes(todo?.color);
    }
    return true;
  };


  return (
    <>
      <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
        <Navbar />
        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          <Header />
          <hr className="mt-4" />
          <TodoList />
          <hr className="mt-4" />
          <Footer />

          <hr className="mt-5" />
          <h1 className="mt-5">Completed</h1>
          <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {todoList
              .filter(statusFilter)
              .filter(colorFilter)
              .map((todo) => (
                <Todo todo={todo} key={todo.id} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoLayout;
