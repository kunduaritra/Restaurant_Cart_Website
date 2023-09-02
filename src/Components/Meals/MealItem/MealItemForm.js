import React, { useContext } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import CartContext from "../../../store/cart-contect";

const MealItemForm = (props) => {
  // const [amount, setAmount] = useState(1);
  const cartCtx = useContext(CartContext);

  const addItemToCart = (e) => {
    e.preventDefault();
    const quantity = document.getElementById("amount_" + props.id).value;
    cartCtx.addItem({ ...props.item, quantity: parseInt(quantity) });
    console.log("after addItemToCart", cartCtx);
  };

  return (
    <form className={classes.form}>
      {console.log("inside render", cartCtx.items)}
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={addItemToCart}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
