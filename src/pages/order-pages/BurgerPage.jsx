import OrderCard from "./order-cards/OrderCard";
import { Pagination } from "antd";
import { useContext, useEffect } from "react";
import "./style.scss";
import { BurgerMenu } from "./data";
import GeneralContext from "../../context/general-context/GeneralContext";

const BurgerPage = () => {
  const { products, getAllProducts } = useContext(GeneralContext);

  useEffect(() => {
    getAllProducts(1, 6);
  }, []);

  const handlePagination = (page) => {
    getAllProducts(page, 6);
  };

  console.log(products);

  return (
    <div className="food_order">
      <div className="order-food__list">
        {products.data &&
          products.data.map((item, index) => (
            <OrderCard
              key={index}
              image={item.image}
              name={item.name}
              price={item.price}
              description={item.description}
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
    </div>
  );
};

/*  return (
    <div className="food_order">
      {BurgerMenu.map((item, index) => (
        <OrderCard
          key={index}
          name={item.name}
          minorName={item.minorName}
          price={item.price}
          rating={item.rating}
          reviews={item.reviews}
          image={item.image}
          description={item.description}
          discount={item.discount}
          duration={item.duration}
          onClick={() => logToConsole(item.name)}
        />
      ))}
      <div
        className="food_pagination"
        style={{ marginTop: "10px", textAlign: "center" }}
      >
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  );
}; */

export default BurgerPage;
