import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import TodoList from "./TodoList";

const TodoLayout = () => {
  return (
    <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
      <Navbar />
      <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
        <Header />
        <hr className="mt-4" />
        <TodoList />
        <hr className="mt-4" />
        <Footer />
      </div>
    </div>
  );
};

export default TodoLayout;
