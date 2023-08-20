import { useState } from "react";
import CartContext from "./cart-contect";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const addItemTOCartHandler = (item) => {
    setCartItems((prevItem) => [...prevItem, item]);
  };

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: cartItems,
    totalAmount: 0,
    addItem: addItemTOCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
