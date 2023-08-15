import { Fragment } from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <Fragment>
      <section className={classes.summary}>
        <h2>Delicious Foods, Delivered to You!</h2>
        <p>
          Choose your favourite meal from our board selection available meals
          and enjoy your deliciois lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </section>
    </Fragment>
  );
};

export default MealsSummary;
