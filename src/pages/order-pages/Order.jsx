import { useState, useContext, useEffect } from "react";
import BurgerIcon from "../../assets/svgs/burger.svg";
import BurgerPage from "./AllFoodPanel";
import GeneralContext from "../../context/general-context/GeneralContext";
import DrinksPage from "./GroupedFoodPanel";
const Order = () => {
  const [tab, setTab] = useState(1);
  const { getCategories, categoriestypes } = useContext(GeneralContext);
  const [catId, setCatId] = useState("");

  useEffect(() => {
    getCategories();
  }, []);

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
            Foods
          </div>
          {categoriestypes &&
            categoriestypes[0]?.map((item, index) => (
              <div
                className="order-food-menu__item"
                key={index}
                onClick={() => {
                  handleTab(index + 2);
                  setCatId(item.id);
                }}
                style={{
                  backgroundColor: tab === index + 2 ? "#A9B021" : undefined,
                }}
              >
                <span>
                  <img src={BurgerIcon} alt="tab-one" />
                </span>
                {item?.externalCategoryText}
              </div>
            ))}
        </div>
      </div>
      <div className="container cards_list_item">
        {tab === 1 ? <BurgerPage /> : <DrinksPage catId={catId} />}
      </div>
    </div>
  );
};

export default Order;
