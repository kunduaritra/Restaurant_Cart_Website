import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-contect";

const Cart = (props) => {
  const cartCntx = useContext(CartContext);
  //
  const groupedItems = cartCntx.items.reduce((acc, item) => {
    const existingItem = acc.find(
      (groupedItem) => groupedItem.name === item.name
    );
    console.log("existingItem -->", existingItem);
    if (existingItem) {
      existingItem.quantity += parseInt(item.quantity);
      existingItem.price += parseInt(item.price);
    } else {
      acc.push({ ...item });
    }

    return acc;
  }, []);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {groupedItems.map((groupedItem) => (
        <li key={groupedItem.id}>
          Name: {groupedItem.name} Price: {groupedItem.price} Quantity:{" "}
          {groupedItem.quantity}
        </li>
      ))}
    </ul>
  );
  const totalPrice = cartCntx.items.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>₹{totalPrice}</span>
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
