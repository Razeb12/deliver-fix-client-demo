import { useReducer, useContext } from "react";
import GeneralContext from "./GeneralContext";
import GeneralReducer from "./GeneralReducer";
import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT_BY_CATEGORY,
  GET_CATEGORIES,
  ADD_TO_CART,
  GET_CART,
} from "../types";
import { BASE_URL } from "../../utils/baseUrl";
import AuthContext from "../auth-context/AuthContext";
import axios from "axios";

const GeneralState = ({ children }) => {
  const initialState = {
    products: {},
    categories: {},
    categoriestypes: {},
    singleProduct: {},
    addTocart: {},
    cart: {},
    isLoading: true,
  };

  const { userToken } = useContext(AuthContext);
  const [state, dispatch] = useReducer(GeneralReducer, initialState);

  //set loading to true on all api calls
  const getAllProducts = async (page, limit) => {
    try {
      const returnedData = await axios.get(
        `${BASE_URL}/api/v1/customer/products?page=${page}&limit=${limit}`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
            "x-api-key": "teecee",
          },
        }
      );
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: returnedData.data.data,
      });
      return true;
    } catch (err) {
      if (err.response.status === false) {
        return false;
      }
      return false;
    }
  };

  const getCategories = async () => {
    try {
      const returnedData = await axios.get(
        `${BASE_URL}/api/v1/customer/categories`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
            "x-api-key": "teecee",
          },
        }
      );
      dispatch({
        type: GET_CATEGORIES,
        payload: returnedData.data.data,
      });
      return true;
    } catch (err) {
      if (err.response.status === false) {
        return false;
      }
      return false;
    }
  };

  const getProductByCategory = async (id) => {
    try {
      const returnedData = await axios.get(
        `${BASE_URL}/api/v1/customer/categories/${id}`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
            "x-api-key": "teecee",
          },
        }
      );
      dispatch({
        type: GET_PRODUCT_BY_CATEGORY,
        payload: returnedData.data.data,
      });
      return true;
    } catch (err) {
      if (err.response.status === false) {
        return false;
      }
      return false;
    }
  };

  /* const getProductById = async (id) => {
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
      dispatch({
        type: GET_PRODUCT_BY_ID,
        payload: returnedData.data.data,
      });
      return true;
    } catch (err) {
      if (err.response.status === false) {
        return false;
      }
      return false;
    }
  }; */

  //add to cart
  const addItemToCart = async (id, quantity) => {
    try {
      const returnedData = await axios.post(
        `${BASE_URL}/api/v1/customer/cart`,
        {
          cartItems: [
            {
              productId: id,
              quantity: quantity,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
            "x-api-key": "teecee",
          },
        }
      );
      dispatch({
        type: ADD_TO_CART,
        payload: returnedData.data.message,
      });
      return true;
    } catch (err) {
      if (err.response.status === false) {
        return false;
      }
      return false;
    }
  };

  //get cart
  const getCart = async () => {
    try {
      const returnedData = await axios.get(`${BASE_URL}/api/v1/customer/cart`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
          "x-api-key": "teecee",
        },
      });
      console.log(returnedData);
      dispatch({
        type: GET_CART,
        payload: returnedData.data.data,
      });
      return true;
    } catch (err) {
      if (err.response.status === false) {
        return false;
      }
      return false;
    }
  };

  return (
    <GeneralContext.Provider
      value={{
        products: state.products,
        categoriestypes: state.categoriestypes,
        categories: state.categories,
        singleProduct: state.singleProduct,
        isLoading: state.isLoading,
        addTocart: state.addTocart,
        cart: state.cart,
        getCategories,
        getAllProducts,
        getProductByCategory,
        addItemToCart,
        getCart,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralState;
