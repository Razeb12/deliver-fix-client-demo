import { useState } from "react";
import "./style.scss";
import BurgerPic from "../../assets/images/burger_sandwich.png";
import SuggestionCard from "./suggestion-card/SuggestionCard";
import { suggestionList } from "./data";

const ConfirmOrder = () => {
  const [count, setCount] = useState(1);
  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count === 1) return;
    setCount(count - 1);
  };
  return (
    <div className="confirm_container">
      <div className="confirm">
        <div className="confirm_header">
          <h1>Order Confirmation</h1>
        </div>
        <div className="container confirm_cart">
          <div className="cart_title">
            <h2>Your Cart</h2>
          </div>
          <div className="confirm_items">
            <img src={BurgerPic} alt="" />
            <div className="confirm_center">
              <h3>Beef Burger</h3>
              <p>Cheesy Mozarella</p>
              <p>Cheese + Crisp Patty</p>
            </div>
            <div className="confirm_right">
              <h2>
                <span>€</span>102.49
              </h2>
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
        </div>
        <div className="full_width"></div>
        <div className="suggestion_part">
          <div className="suggestion_title container">
            <h2>You may also like</h2>
          </div>
          <div className="suggestion_layout">
            {suggestionList.map((item, index) => (
              <SuggestionCard
                header={item.title}
                content={item.content}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="full_width"></div>
      </div>
    </div>
  );
};

export default ConfirmOrder;
