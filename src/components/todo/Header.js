import React, { useState } from "react";
import noteImage from "../../assets/images/notes.png";
import plusImage from "../../assets/images/plus.png";
import tickImage from "../../assets/images/double-tick.png";
import { useDispatch, useSelector } from "react-redux/";
import {
  allClearTask,
  allCompleteTask,
  findTodoId,
  isTodoUpdate,
} from "../../redux/todo/TodoAction";
import addNewTodo from "../../redux/thunk/AddTodo";
import { useEffect } from "react";
import updateTodo from "../../redux/thunk/UpdateTodo";

const Header = () => {
  const todoData = useSelector((state) => state);
  const todoTask = todoData.TODO;
  const todoId = todoTask.editedId;
  const isUpdate = todoTask.isUpdate;

  const todo = todoTask?.todo?.find((item) => item.id === todoId);
  const dispatch = useDispatch();

  const [newText, setNewText] = useState(todo?.text || "");

  useEffect(() => {
    if (todoId) {
      setNewText(todo?.text);
    }
  }, [todoId]);

  const handleChange = (e) => {
    setNewText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUpdate) {
      dispatch(updateTodo(todo.id, newText));
      setNewText("");
      dispatch(isTodoUpdate(false));
    }
    else {
      dispatch(addNewTodo(newText));
      setNewText("");
    }
    dispatch(findTodoId(0));
  };

  const completeHandler = () => {
    dispatch(allCompleteTask());
  };

  const clearHandler = () => {
    dispatch(allClearTask());
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
      >
        <img src={noteImage} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          value={newText}
          onChange={handleChange}
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer" onClick={completeHandler}>
          <img className="w-4 h-4" src={tickImage} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={clearHandler}>
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default Header;
