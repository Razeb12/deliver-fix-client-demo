import "./style.scss";
import OrderCard from "./order-cards/OrderCard";
import { useEffect, useContext, useState } from "react";
import BurgerIcon from "../../assets/svgs/burger.svg";
import GeneralContext from "../../context/general-context/GeneralContext";
import Spinner from "../../components/spinner/Spinner";
const GroupedFoodPanel = ({ catId }) => {
  const [loading, setLoading] = useState(false);
  const { categories, getProductByCategory, isLoading } =
    useContext(GeneralContext);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      await getProductByCategory(catId);
      setLoading(false);
    };
    getProducts();
  }, [catId]);

  /*   useEffect(() => {
    if (categories?.length >= 1) {
      setLoading(false);
    }
  }, [categories?.length]); */

  return (
    <>
      {loading && (
        <div className="loader">
          <Spinner />
        </div>
      )}
      {!loading && (
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
                idx={item?.id}
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
      )}
    </>
  );
};

export default GroupedFoodPanel;
