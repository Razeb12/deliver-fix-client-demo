import OrderCard from "./order-cards/OrderCard";
import { Pagination } from "antd";
import { useContext, useEffect, useState } from "react";
import "./style.scss";
import BurgerOne from "../../assets/images/burgerone.png";
import GeneralContext from "../../context/general-context/GeneralContext";
import Spinner from "../../components/spinner/Spinner";
const AllFoodPanel = () => {
  const [loading, setLoading] = useState(true);
  const { products, getAllProducts } = useContext(GeneralContext);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      await getAllProducts(1, 10);
      setLoading(false);
    };
    getProducts();
  }, []);

  const handlePagination = (page) => {
    getAllProducts(page, 6);
  };

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
            {products &&
              products[0]?.map((item, index) => (
                <OrderCard
                  key={index}
                  image={item?.image || BurgerOne}
                  name={item?.articleTextLong}
                  price={item?.externalSellingPrice || 0}
                  description={item.description || "No description"}
                  discount={item?.discount || false}
                  duration={item?.duration || "20-30mins"}
                  rating={item?.externalRating || 0}
                  reviews={item?.externalRating?.length || 0}
                  id={item?.id}
                />
              ))}
          </div>
          <div className="order-food__pagination">
            <Pagination
              defaultCurrent={1}
              total={products[1]}
              onChange={handlePagination}
            />
          </div>
        </>
      )}
    </>
  );
};

export default AllFoodPanel;
