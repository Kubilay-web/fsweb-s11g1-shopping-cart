import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Item from "./ShoppingCartItem";

const ShoppingCart = () => {
  const { cart, removeItem } = useContext(CartContext);

  const getCartTotal = () => {
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    return total.toFixed(2);
  };

  return (
    <div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <Item
              key={`${item.id}-${index}`}
              {...item}
              removeByOrder={() => removeItem(index)}
            />
          ))}

          <div>
            <p>Total: ${getCartTotal()}</p>
            <button>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
