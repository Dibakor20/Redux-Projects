import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { colorChange, statusChange } from "../../redux/todo/TodoAction";

const Footer = () => {
  const todoTask = useSelector((state) => state?.TODO);
  const taskRemaing = todoTask?.todo.filter((todo)=>!todo.completed).length;
  const status = todoTask.status;
  const colors = todoTask.colors;
  const dispatch = useDispatch();

  const statusHandler = (status) => {
    dispatch(statusChange(status));
  };

  const colorChangeHandler = (color) => {
    if (colors.includes(color)) {
      dispatch(colorChange(color, "Removed"));
    } else {
      dispatch(colorChange(color, "Added"));
    }
  };

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{taskRemaing} tasks left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          className={`cursor-pointer ${status === "All" &&  'font-bold'}`}
          onClick={() => statusHandler("All")}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "Incomplete" &&  'font-bold'}`}
          onClick={() => statusHandler("Incomplete")}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "Complete" &&  'font-bold'}`}
          onClick={() => statusHandler("Complete")}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            colors?.includes("green") && "bg-green-500"
          }`}
          onClick={() => colorChangeHandler("green")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            colors?.includes("red") && "bg-red-500"
          }`}
          onClick={() => colorChangeHandler("red")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            colors?.includes("yellow") && "bg-yellow-500"
          }`}
          onClick={() => colorChangeHandler("yellow")}
        ></li>
      </ul>
    </div>
  );
};

export default Footer;
