import React, { useState } from "react";
import CartContext from "./cart-contect";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCartHandler = (item) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find(
        (prevItem) => prevItem.id === item.id
      );

      if (existingItem) {
        return prevItems.map((prevItem) =>
          prevItem.id === item.id
            ? { ...prevItem, quantity: prevItem.quantity + item.quantity }
            : prevItem
        );
      } else {
        return [...prevItems, item];
      }
    });
  };

  const removeItemFromCartHandler = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateItemInCartHandler = (id, newQuantity) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    updateItem: updateItemInCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
