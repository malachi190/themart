import React from "react";
import Currency from "../../utilities/CurrencyFormatter";
import { useShoppingCart } from "../../context/ShoppingCartContext";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function StoreItems({ id, name, price, image }: StoreItemProps) {
  const { getQuantity, increaseQuantity, decreaseQuantity, removeFromCart } =
    useShoppingCart();

  const quantity = getQuantity(id);

 

  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg w-[50%] h-[50%]" src={image} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {Currency(price)}
          </p>

          {quantity === 0 ? (
            <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-800 rounded-none hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800" onClick={() => increaseQuantity(id)}>
              Add to cart
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          ) : (
            <div className="flex flex-col justify-center items-center gap-4 px-5 py-3 w-full">
              <div className="flex flex-1 justify-between items-center gap-2">
                <button className="bg-slate-800 text-white px-3 rounded-none" onClick={() => increaseQuantity(id)}>
                  +
                </button>
                <div className="p-1">
                  <span className="text-slate-800 text-lg">{quantity}</span> in
                  Cart
                </div>

                <button className="bg-slate-800 text-white px-3 rounded-none" onClick={() => decreaseQuantity(id)}>
                  -
                </button>
              </div>
              <div className="mt-2">
                <button className="bg-red-600 text-white px-3 py-1 text-center rounded-none" onClick={() => removeFromCart(id)}>
                  Remove
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
