import React, { useState } from "react";
import { ReactNode, createContext, useContext } from "react";
import ShoppingCartSlider from "../components/shoppingCartSlider/ShoppingCartSlider";
import { useLocalStorage } from "../hooks/useLocalStorage";

type ShoppingCartContext = {
  openCart: () => void;
  closeCart: () => void;
  getQuantity: (id: number) => number;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartArray[];
};

type CartArray = {
  id: number;
  quantity: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

type ShoppingCartProviderProps = {
  children: ReactNode;
};

export default function ShoppingCartProvider({
  children,
}: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartArray[]>(
    "shopping-cart",
    []
  );
  const [isOpen, setIsOpen] = useState(false);

  const cartQuantity = cartItems?.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const openCart = () => {
    setIsOpen(true);
  };

  const closeCart = () => {
    setIsOpen(false);
  };

  const getQuantity = (id: number) => {
    return cartItems?.find((item) => item?.id === id)?.quantity || 0;
  };

  const increaseQuantity = (id: number) => {
    setCartItems((currItems) => {
      if (currItems?.find((item) => item?.id === id) == null) {
        return [
          ...currItems,
          {
            id,
            quantity: 1,
          },
        ];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseQuantity = (id: number) => {
    setCartItems((currItems) => {
      if (currItems?.find((item) => item?.id === id)?.quantity === 1) {
        return currItems?.filter((item) => item?.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((currItems) => {
      return currItems?.filter((item) => item?.id !== id);
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        getQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
        openCart,
        closeCart,
      }}
    >
      {children}
      <ShoppingCartSlider isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}
