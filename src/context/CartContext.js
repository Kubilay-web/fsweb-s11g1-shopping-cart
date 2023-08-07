import React, { useState } from "react";
import { createContext } from "react";

import useLocalStorage from "../hooks/useLocalStorage";

const CartContextProvider = (props) => {
  const [cart, setCart] = useLocalStorage("wit-cart", []);
  const [cartCount, setCartCount] = useLocalStorage("witCartCount", 0);

  const addItem = (item) => {
    const theCart = [...cart, item];
    setCart(theCart);
    setCartCount(theCart.length);
  };

  const removeItem = (itemIndex) => {
    console.log("removeItem", itemIndex);
    const newCart = [...cart];
    newCart.splice(itemIndex, 1);
    setCart(newCart);
    setCartCount(newCart.length);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {props.children}
    </CartContext.Provider>
  );
};

export const CartContext = createContext();
export default CartContextProvider;
