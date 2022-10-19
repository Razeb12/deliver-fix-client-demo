import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT_BY_CATEGORY,
  GET_CATEGORIES,
  GET_PRODUCT_BY_ID,
} from "../types";

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
    case GET_CATEGORIES:
      return {
        ...prevState,
        categoriestypes: payload,
      };
    case GET_PRODUCT_BY_ID:
      return {
        ...prevState,
        singleProduct: payload,
      };
    default:
      return prevState;
  }
};

export default GeneralReducer;
