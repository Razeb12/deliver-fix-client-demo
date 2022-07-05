import "./style.scss";
import { NavLink } from "react-router-dom";
import BurgerIcon from "../../../assets/svgs/burger.svg";
import PizzaIcon from "../../../assets/svgs/pizza.svg";
import DrinksIcon from "../../../assets/svgs/drinks.svg";

const OrderFoodMenu = () => {
  const activeMenu = {
    backgroundColor: "#A9B021",
  };

  return (
    <div className="order-food-menu container">
      <div className="order_food">
        <div className="order-food-menu__item">
          <span>
            <img src={BurgerIcon} alt="tab-one" />
          </span>
          Burger
        </div>
        <div className="order-food-menu__item">
          <span>
            <img src={PizzaIcon} alt="tab-two" />
          </span>
          Pizza
        </div>
        <div className="order-food-menu__item">
          <span>
            <img src={DrinksIcon} alt="tab-three" />
          </span>
          Drinks
        </div>
      </div>
    </div>
  );
};

export default OrderFoodMenu;
