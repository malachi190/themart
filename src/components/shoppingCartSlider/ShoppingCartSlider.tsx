import React from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import CartItems from "../cart/CartItems";
import Currency from "../../utilities/CurrencyFormatter";
import { data } from "../../data/data";

export default function ShoppingCartSlider({ isOpen }) {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <>
      <main
        className={
          " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
          (isOpen
            ? " transition-opacity opacity-100 duration-500 translate-x-0  "
            : " transition-all delay-500 opacity-0 translate-x-full  ")
        }
      >
        <section
          className={
            " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
            (isOpen ? " translate-x-0 " : " translate-x-full ")
          }
        >
          <article className="relative w-screen max-w-lg flex flex-col space-y-2 overflow-y-auto h-[100vh] top-[6rem] py-3 px-4 pb-[10rem]">
            <h1 className="text-2xl leading-3 text-slate-800">Your Cart</h1>
            {cartItems?.map((item, index) => (
              <div
                className="relative top-5 flex flex-1 justify-start items-start gap-3 flex-col"
                key={index}
              >
                <CartItems {...item} />
              </div>
            ))}
            <div className="mt-10 p-3 w-full flex justify-end items-end gap-5">
              <h2 className="font-semibold text-base">
                Total:{" "}
                {Currency(
                  cartItems?.reduce((total, cartItem) => {
                    const items = data?.find(
                      (item) => item?.id === cartItem.id
                    );
                    return total + (items?.price || 0) * cartItem.quantity;
                  }, 0)
                )}
              </h2>
              {cartItems?.length > 0 && (
                <button className="bg-slate-800 text-white px-4 py-1">
                  Complete Order
                </button>
              )}
            </div>
          </article>
        </section>
        <section
          className=" w-screen h-full cursor-pointer "
          onClick={() => {
            closeCart();
          }}
        >
          X
        </section>
      </main>
    </>
  );
}
