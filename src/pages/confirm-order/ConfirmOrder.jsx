import { useState, useContext, useEffect } from "react";
import "./style.scss";
import BurgerPic from "../../assets/images/burger_sandwich.png";
import SuggestionCard from "./suggestion-card/SuggestionCard";
import { suggestionList } from "./data";
import { FaGreaterThan } from "react-icons/fa";
import { Checkbox } from "antd";
import SuccessPage from "./success-page/SuccessPage";
import GeneralContext from "../../context/general-context/GeneralContext";
import Spinner from "../../components/spinner/Spinner";

const ConfirmOrder = () => {
  /* const [count, setCount] = useState(1); */
  const [isOk, setIsOk] = useState(false);
  const [loading, setLoading] = useState(true);
  const { getCart, cart } = useContext(GeneralContext);
  /*   const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count === 1) return;
    setCount(count - 1);
  }; */

  useEffect(() => {
    const getCartData = async () => {
      setLoading(true);
      const returnedData = await getCart();
      if (returnedData) {
        setLoading(false);
      } else {
        setLoading(false);
      }
    };
    getCartData();
  }, []);

  console.log(cart);

  const handleSubmit = () => {
    setIsOk(true);
  };
  return (
    <>
      {loading && (
        <div className="loader">
          <Spinner />
        </div>
      )}
      {isOk && !loading && <SuccessPage />}
      {!isOk && !loading && (
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
                    <span>???</span>102.49
                  </h2>
                  {/* <div className="count_container">
                    <div className="control_icon" onClick={increase}>
                      +
                    </div>
                    <div className="count">{count}</div>
                    <div className="control_icon" onClick={decrease}>
                      -
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="full_width"></div>
            <div className="suggestion_part">
              <div className="suggestion_title container">
                <h2>You may also like</h2>
              </div>
              <div className="suggestion_layout container">
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
            <div className="receipt_section container">
              <h2>Receipt</h2>
              <div className="receipt_items">
                <div className="item_lists">
                  <h3>Subtotal (include VAT+)</h3>
                  <p>???285.25</p>
                </div>
                <div className="item_lists">
                  <h3>Delivery</h3>
                  <p>???1.00</p>
                </div>
                <div className="item_lists">
                  <h3>Total Bill</h3>
                  <p>???286.25</p>
                </div>
              </div>
            </div>
            <div className="full_width"></div>
            <div className="promo_code container">
              <h3>Apply Promo Code (%)</h3>
              <FaGreaterThan color="#699334" size={18} />
            </div>
            <div className="full_width"></div>
            <div className="payment_method container">
              <h2>Payment Method</h2>
              <p>
                <Checkbox />
                Cash on Delivery
              </p>
              <p>
                <Checkbox />
                Card/Itopup Banking
              </p>
              <p>
                <Checkbox />
                Paypal
              </p>
              <p>
                <Checkbox />
                Visa/Mastercard
              </p>
            </div>

            <div className="checkout_btn container">
              <button onClick={handleSubmit}>Confirm Order</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmOrder;
