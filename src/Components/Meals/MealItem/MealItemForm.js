import React, { useContext, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import CartContext from "../../../store/cart-contect";

const MealItemForm = (props) => {
  const [amount, setAmount] = useState(1);
  const cartCtx = useContext(CartContext);

  const addItemToCart = (e) => {
    e.preventDefault();
    const item = {
      id: props.id,
      name: props.name,
      price: props.price,
      amount: +amount,
    };
    cartCtx.addItem(item);
  };

  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          value: amount,
          onChange: (e) => {
            setAmount(e.target.value);
          },
        }}
      />
      <button onClick={addItemToCart}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
