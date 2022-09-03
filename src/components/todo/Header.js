import React, { useState } from "react";
import noteImage from "../../assets/images/notes.png";
import plusImage from "../../assets/images/plus.png";
import tickImage from "../../assets/images/double-tick.png";
import { useDispatch } from "react-redux/";
import { addTodo,allClearTask,allCompleteTask} from "../../redux/todo/TodoAction";

const Header = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
     e.preventDefault()
    dispatch(addTodo(input));
    setInput("");
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
              className="flex items-center bg-gray-100 px-4 py-4 rounded-md">
        <img src={noteImage} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
                  placeholder="Type your todo"
                  value={input}
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
        <li className="cursor-pointer" onClick={clearHandler}>Clear completed</li>
      </ul>
    </div>
  );
};

export default Header;
