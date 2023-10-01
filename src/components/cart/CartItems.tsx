import React from "react";
import { data } from "../../data/data";
import Currency from "../../utilities/CurrencyFormatter";
import { useShoppingCart } from "../../context/ShoppingCartContext";

type CartItemProps = {
  id: number;
  quantity: number;
};

export default function CartItems({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const items = data?.find((item) => item?.id === id);
  if (items == null) return null;

  return (
    <>
      <div className="mb-3">
        <img src={items.image} alt="" width={30} height={30} />
      </div>
      <div className="mb-3 flex flex-col gap-4 justify-center w-full">
        <p>{items.name} {quantity > 1 && (
            <span className="text-sm">
            x {quantity} 
            </span>
        )}</p>
        <p>{Currency(items.price * quantity)}</p>
        <div className="flex flex-1 w-full justify-end items-end gap-10">
          <button
            className="bg-red-500 text-white px-4 py-1"
            onClick={() => removeFromCart(items.id)}
          >
            X
          </button>
        </div>
      </div>
    </>
  );
}
