import CartContext from "../../store/cart-contect";
import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {items.map((item) => (
        <li key={item.id}>
          Name: {item.name} Price: {item.price} Quantity: {item.quantity}
          <div className={classes.actions}>
            <button
              className={classes.button}
              onClick={() => cartCtx.updateItem(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button
              className={classes["button--alt"]}
              onClick={() =>
                item.quantity === 1
                  ? cartCtx.removeItem(item.id)
                  : cartCtx.updateItem(item.id, item.quantity - 1)
              }
            >
              -
            </button>
          </div>
        </li>
      ))}
    </ul>
  );

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>₹{totalPrice.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
