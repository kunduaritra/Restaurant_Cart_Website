import { useState } from "react";
import CartContext from "./cart-contect";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCartHandler = (item) => {
    setItems([...items, item]);
    console.log("inside addItemToCartHandler", cartContext);
  };

  const removeItemFromCartHandler = (id) => {
    // setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {console.log("inside cartcontext.provider", cartContext)}
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
