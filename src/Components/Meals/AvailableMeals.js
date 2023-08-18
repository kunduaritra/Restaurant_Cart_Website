import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Royal Mutton Chaap",
    description:
      "Beaten pieces of mutton are marinated in special spices and then shallow fried in oil on an iron tawa (serves 1).",
    price: 350,
  },
  {
    id: "m2",
    name: "Royal Mutton Biryani",
    description: "Beaten pieces of mutton are marinated in special spices!",
    price: 400,
  },
  {
    id: "m3",
    name: "Royal Chicken Chaap",
    description:
      "Beaten pieces of chicken are marinated in special spices and then shallow fried in oil on an iron tawa (serves 1).",
    price: 320,
  },
  {
    id: "m4",
    name: "Chicken Reshmi Malai Kabab",
    description:
      "Chicken marinated in juicy mixture of curd, cream, cashew nuts and spices and then cooked in tandoor.",
    price: 290,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
