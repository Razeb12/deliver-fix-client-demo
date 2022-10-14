import { GET_ALL_PRODUCTS, GET_PRODUCT_BY_CATEGORY } from "../types";

const GeneralReducer = (prevState, { type, payload }) => {
  switch (type) {
    case GET_ALL_PRODUCTS:
      return {
        ...prevState,
        products: payload,
      };
    case GET_PRODUCT_BY_CATEGORY:
      return {
        ...prevState,
        categories: payload,
      };
    default:
      return prevState;
  }
};

export default GeneralReducer;
