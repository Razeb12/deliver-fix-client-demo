import "./style.scss";
import OrderCard from "./order-cards/OrderCard";
import { PizzaMenu } from "./data";
const PizzaPage = () => {
  const logToConsole = (e) => {
    console.log(`${e} added to cart`);
  };
  return (
    <div className="container food_order">
      {PizzaMenu.map((item, index) => (
        <OrderCard
          key={index}
          name={item.name}
          minorName={item.minorName}
          price={item.price}
          rating={item.rating}
          reviews={item.reviews}
          image={item.image}
          description={item.description}
          discount={item.discount}
          duration={item.duration}
          onClick={() => logToConsole(item.name)}
        />
      ))}
    </div>
  );
};

export default PizzaPage;
