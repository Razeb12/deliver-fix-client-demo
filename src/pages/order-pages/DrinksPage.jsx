import "./style.scss";
import OrderCard from "./order-cards/OrderCard";
import { DrinksMenu } from "./data";
import { useEffect, useContext } from "react";
import BurgerIcon from "../../assets/svgs/burger.svg";
import GeneralContext from "../../context/general-context/GeneralContext";
const DrinksPage = ({ catId }) => {
  const { categories, getProductByCategory } = useContext(GeneralContext);
  const logToConsole = (e) => {
    console.log(`${e} added to cart`);
  };

  useEffect(() => {
    getProductByCategory(catId);
  }, [catId]);

  return (
    <>
      <div className="food_order">
        {categories?.products?.map((item, index) => (
          <OrderCard
            key={index}
            image={item?.image || BurgerIcon}
            name={item?.articleTextLong}
            price={item?.externalSellingPrice || 0}
            description={item.description || "No description"}
            discount={item?.discount || false}
            duration={item?.duration || "20-30mins"}
            rating={item?.externalRating || 0}
            reviews={item?.externalRating?.length || 0}
          />
        ))}
      </div>
      <div className="order-food__pagination">
        {/*        <Pagination
          defaultCurrent={1}
          total={categories[1]}
          onChange={handlePagination}
        /> */}
      </div>
    </>
  );
};

export default DrinksPage;
