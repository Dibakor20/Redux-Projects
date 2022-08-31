import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementQuantity, incrementQuantity } from "../../redux/shopingCart/CartAction";
import Cart from "./Cart";


const Product = () => {
    let cartItem = useSelector((state) => state.cart);
    let data = cartItem.products;
    console.log(data)
  const totalItems = cartItem.carts.reduce(
    (prev, curr) => prev + curr.value,
    0
  );
  const totalPrice = cartItem.carts.reduce(
    (prev, curr) => prev + curr.value * curr.price,
    0
  );
  const dispatch = useDispatch();

  const addCart = ({data,id}) => {
      dispatch(addToCart(data));
      dispatch(decrementQuantity(id))
  };

  return (
    <>
      <div class="bg-gray-50 h-full md:h-screen">
        <div class="grid place-items-center">
          <h1 class="text-gray-900 font-bold text-3xl p-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4">
            Shopping Cart
          </h1>
        </div>

        <div class="grid grid-cols-12 gap-6">
          <div class="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
            {data.map((item) => (
              <>
                <div class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
                  <div class="flex justify-between px-4 items-center">
                    <div class="text-lg font-semibold">
                      <p>
                        {item.title} <span>({item?.quantity})</span>
                      </p>
                      <p class="text-gray-400 text-base">Tk {item.price}</p>
                    </div>
                    <div class="text-lg font-semibold">
                      <button
                        onClick={() => addCart({data:item,id:item.id})}
                        class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
            <div class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
              <Cart />
            </div>

            <div class="flex justify-center items-center text-center">
              <div class="text-xl font-semibold">
                <p>Total Item</p>
                <p class="text-5xl">{totalItems}</p>
              </div>
            </div>

            <div class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
              <div class="flex justify-center items-center text-center">
                <div class="text-xl font-semibold">
                  <p>Total Price</p>
                  <p class="text-5xl">{totalPrice}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
