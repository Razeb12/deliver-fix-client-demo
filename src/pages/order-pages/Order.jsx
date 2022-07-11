import { useState } from "react";
import BurgerIcon from "../../assets/svgs/burger.svg";
import PizzaIcon from "../../assets/svgs/pizza.svg";
import DrinksIcon from "../../assets/svgs/drinks.svg";
import BurgerPage from "./BurgerPage";
import PizzaPage from "./PizzaPage";
import DrinksPage from "./DrinksPage";
const Order = () => {
  const [tab, setTab] = useState(1);

  const handleTab = (index) => {
    setTab(index);
  };
  return (
    <div className="order-layout">
      <div className="order-food-menu container">
        <div className="order_food">
          <div
            className="order-food-menu__item"
            onClick={() => handleTab(1)}
            style={{ backgroundColor: tab === 1 ? "#A9B021" : undefined }}
          >
            <span>
              <img src={BurgerIcon} alt="tab-one" />
            </span>
            Burger
          </div>
          <div
            className="order-food-menu__item"
            onClick={() => handleTab(2)}
            style={{ backgroundColor: tab === 2 ? "#A9B021" : undefined }}
          >
            <span>
              <img src={PizzaIcon} alt="tab-two" />
            </span>
            Pizza
          </div>
          <div
            className="order-food-menu__item"
            onClick={() => handleTab(3)}
            style={{ backgroundColor: tab === 3 ? "#A9B021" : undefined }}
          >
            <span>
              <img src={DrinksIcon} alt="tab-three" />
            </span>
            Drinks
          </div>
        </div>
      </div>
      <div className="container cards_list_item">
        {tab === 1 && <BurgerPage />}
        {tab === 2 && <PizzaPage />}
        {tab === 3 && <DrinksPage />}
      </div>
    </div>
  );
};

export default Order;
