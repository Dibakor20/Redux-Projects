import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementQuantity,
  decrementQuantity,
} from "../../redux/shopingCart/CartAction.js";

const Cart = () => {
  let cartItemData = useSelector((state) => state.cart);
  let cartData = cartItemData.carts;
  const dispatch = useDispatch();

  const incrementHandler = (id) => {
    dispatch(increment(id));
    dispatch(decrementQuantity(id));
  };
  const decrementHandler = (id) => {
    dispatch(decrement(id));
    dispatch(incrementQuantity(id));
  };

  return (
    <>
      {cartData.map((item) => (
        <div className="flex justify-between border-b-2 mb-2">
          <div className="text-lg py-2">
            <p>{item.title}</p>
          </div>
          <div className="text-lg py-2">
            <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
              <button
                onClick={() => decrementHandler(item.id)}
                className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M18 12H6"
                  />
                </svg>
              </button>
              <p>{item.value}</p>
              <button
                onClick={() => incrementHandler(item.id)}
                className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cart;
