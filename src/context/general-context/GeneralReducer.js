import { GET_ALL_PRODUCTS } from "../types";

const GeneralReducer = (prevState, { type, payload }) => {
  switch (type) {
    case GET_ALL_PRODUCTS:
      return {
        ...prevState,
        products: payload,
      };
    default:
      return prevState;
  }
};

export default GeneralReducer;
