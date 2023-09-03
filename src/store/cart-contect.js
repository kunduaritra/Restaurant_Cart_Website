import React from "react";

const CartContext = React.createContext({
  items: [],
  addItem: (item) => {},
  deleteItem: (id) => {},
  updateItem: (id, newQuantity) => {},
});

export default CartContext;
