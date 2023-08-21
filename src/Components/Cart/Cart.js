import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-contect";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const increaseItemHandler = (item) => {
    cartCtx.addItem({ ...item, quantity: 1 });
  };

  const decreaseItemHandler = (item) => {
    cartCtx.removeItem(item.id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li key={item.id}>
          {item.name}
          <div className={classes.actions}>
            <button
              className={classes.button}
              onClick={() => increaseItemHandler(item)}
            >
              +
            </button>
            <button
              className={classes["button--alt"]}
              onClick={() => decreaseItemHandler(item)}
            >
              -
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
  const subTotalCartAmount = cartCtx.items.reduce((total, item) => {
    const numericPrice = parseInt(item.price.replace("₹", "").trim());
    console.log("Item Price:", item.price);
    console.log("Numeric Price:", numericPrice);
    return total + numericPrice;
  }, 0);

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>₹{subTotalCartAmount}</span>
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
