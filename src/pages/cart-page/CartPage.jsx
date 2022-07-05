import "./style.scss";
import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ORDER_PAGE } from "../../routes";
import BurgerPic from "../../assets/images/burger_sandwich.png";
import { extrasFood, softDrinks, regularDrinks } from "./data";
import Extras from "./extras/Extras";
import SelectInput from "../../components/inputs/select-input/SelectInput";
import NormalInput from "../../components/inputs/normal-input/NormalInput";
const CartPage = () => {
  const [count, setCount] = useState(1);
  const [drink, setDrinks] = useState("");
  const [regular, setRegular] = useState("");
  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count === 1) return;
    setCount(count - 1);
  };

  const logToConsole = (e) => {
    console.log(`${e} added to cart as extras`);
  };
  return (
    <div className="cart_page">
      <div className="cart_page_container container">
        <div className="cart_page_top">
          <Link to={ORDER_PAGE}>
            <AiOutlineArrowLeft /> Back to Dashboard
          </Link>
        </div>
        <div className="cart_summary">
          <div className="cart_summary_left">
            <img src={BurgerPic} alt="" />
          </div>
          <div className="cart_summary_center">
            <h2>Beef Burger</h2>
            <p>Cheesy Mozarella</p>
            <h3>
              <span>€</span>7.49
            </h3>
          </div>
          <div className="cart_summary_right">
            <div className="count_container">
              <div className="control_icon" onClick={increase}>
                +
              </div>
              <div className="count">{count}</div>
              <div className="control_icon" onClick={decrease}>
                -
              </div>
            </div>
          </div>
        </div>
        <div className="extras_container_section">
          {extrasFood.map((item, idx) => (
            <Extras
              name={item.name}
              amount={item.price}
              key={idx}
              imgUrl={item.imgUrl}
              onChange={() => logToConsole(item.name)}
            />
          ))}
        </div>
        <div className="cart_selection">
          <SelectInput
            value={softDrinks}
            label="Add Soft Drinks"
            placeholder="Add Soft Drinks"
            onChange={(value) => setDrinks(value)}
          />
          <SelectInput
            value={regularDrinks}
            label="Add Regular Drinks"
            placeholder="Add Regular Drinks"
            onChange={(value) => setRegular(value)}
          />
          <NormalInput
            label="Additional Information"
            type="text"
            minorText="e.g. extra sauce less spicy etc."
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
        <div className="cart_checkout_div">
          <div className="checkout_container">
            <div className="checkout_left">
              <p>4 Item</p>
            </div>
            <div className="checkout_center">
              <h3>ADD TO CART</h3>
            </div>
            <div className="checkout_right">
              <p>€56.49</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
