import PizzaCard from "../PizzaCard/PizzaCard";
// import burgerImage from "../../public/FoodImages/burger1.svg";
import burgerImage from "../../../public/FoodImages/burger1.svg";
import fries from "../../../public/FoodImages/fries.svg";
import pizzaImage1 from "../../../public/FoodImages/pizza.svg";
import tacos from "../../../public/FoodImages/tacos.svg";
import Heading from "../../core/Heading/Heading";

const cardData = [
  {
    id: 1,
    image: pizzaImage1,
    title: "Pizza",
    price: 20,
  },
  {
    id: 2,
    image: burgerImage,
    title: "Burger",
    price: 30,
  },
  {
    id: 3,
    image: fries,
    title: "Fries",
    price: 10,
  },
  {
    id: 4,
    image: tacos,
    title: "Tacos",
    price: 50,
  },
];

const Pizza = () => {
  return (
    <div>
      <Heading>Here are our popular Foods</Heading>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 grid-cols-1">
        {cardData.map((card) => (
          <PizzaCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Pizza;
