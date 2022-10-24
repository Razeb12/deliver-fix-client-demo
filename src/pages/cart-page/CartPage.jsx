import "./style.scss";
import { useState, useContext, useEffect } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ORDER_PAGE } from "../../routes";
import BurgerPic from "../../assets/images/burger_sandwich.png";
import { softDrinks, regularDrinks } from "./data";
import Extras from "./extras/Extras";
import SelectInput from "../../components/inputs/select-input/SelectInput";
import NormalInput from "../../components/inputs/normal-input/NormalInput";
import AuthContext from "../../context/auth-context/AuthContext";
import GeneralContext from "../../context/general-context/GeneralContext";
import { BASE_URL } from "../../utils/baseUrl";
import axios from "axios";
import Spinner from "../../components/spinner/Spinner";
import { message } from "antd";

const CartPage = () => {
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [addingcart, setAddingcart] = useState(false);
  const [drink, setDrinks] = useState("");
  const [regular, setRegular] = useState("");
  const [singleproduct, setSingleProduct] = useState({});
  const { userToken } = useContext(AuthContext);
  const { addItemToCart } = useContext(GeneralContext);
  const navigate = useNavigate();
  const increase = () => {
    setCount(count + 1);
  };

  const { id } = useParams();

  const getSingleProduct = async () => {
    setLoading(true);
    try {
      const returnedData = await axios.get(
        `${BASE_URL}/api/v1/customer/products/${id}`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
            "x-api-key": "teecee",
          },
        }
      );
      if (returnedData.status === 200) {
        setLoading(false);
        setSingleProduct(returnedData?.data?.data?.product[0]);
      }
      return true;
    } catch (err) {
      return false;
    }
  };
  useEffect(() => {
    getSingleProduct();
  }, []);

  const decrease = () => {
    if (count === 1) return;
    setCount(count - 1);
  };

  //multiply the count and food price
  const totalprice = count * singleproduct?.externalSellingPrice;

  const handleCartUpdate = async () => {
    setAddingcart(true);
    const cart = {
      productId: singleproduct?.id,
      quantity: count,
      /*       price: totalprice,
      extras: [], */
    };
    try {
      const returnedData = await addItemToCart(cart);
      if (returnedData) {
        message.success("Item added to cart");
        navigate("/confirm");
        setAddingcart(false);
      }
      setAddingcart(false);
      return true;
    } catch (err) {
      setAddingcart(false);
      return false;
    }
  };
  const logToConsole = (e) => {
    console.log(`${e} added to cart as extras`);
  };
  return (
    <>
      {loading && (
        <div className="loader">
          <Spinner />
        </div>
      )}
      {!loading && (
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
                <h2>{singleproduct?.articleTextLong}</h2>
                {/* <p>Cheesy Mozarella</p> */}
                <h3>
                  <span>€</span>
                  {singleproduct?.externalSellingPrice}
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
              {singleproduct?.subProducts?.map((item, idx) => (
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
                  <p>1 Item</p>
                </div>
                <div className="checkout_center">
                  {addingcart && (
                    <h3 onClick={handleCartUpdate}>ADDING ....</h3>
                  )}
                  {!addingcart && (
                    <h3 onClick={handleCartUpdate}>ADD TO CART</h3>
                  )}
                </div>
                <div className="checkout_right">
                  <p>€{totalprice}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;
