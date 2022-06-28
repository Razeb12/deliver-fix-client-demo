import "./style.scss";
import { NavLink } from "react-router-dom";
import BurgerIcon from "../../../assets/svgs/burger.svg";
import PizzaIcon from "../../../assets/svgs/pizza.svg";
import DrinksIcon from "../../../assets/svgs/drinks.svg";

const OrderFoodMenu = () => {
  const MenuList = [
    {
      name: "Burger",
      icon: BurgerIcon,
      link: "/order-burger",
    },
    {
      name: "Pizza",
      icon: PizzaIcon,
      link: "/pizza",
    },
    {
      name: "Drinks",
      icon: DrinksIcon,
      link: "/drinks",
    },
  ];
  const activeMenu = {
    backgroundColor: "#A9B021",
  };

  return (
    <div className="order-food-menu container">
      <div className="order_food">
        {MenuList.map((menu, index) => (
          <NavLink
            to={menu.link}
            key={index}
            style={({ isActive }) => (isActive ? activeMenu : undefined)}
          >
            <span>
              <img src={menu.icon} alt={menu.name} />
            </span>
            {menu.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default OrderFoodMenu;
