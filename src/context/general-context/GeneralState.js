import { useReducer, useContext } from "react";
import GeneralContext from "./GeneralContext";
import GeneralReducer from "./GeneralReducer";
import { GET_ALL_PRODUCTS } from "../types";
import { BASE_URL } from "../../utils/baseUrl";
import AuthContext from "../auth-context/AuthContext";
import axios from "axios";

const GeneralState = ({ children }) => {
  const initialState = {
    products: {},
  };

  const { userToken } = useContext(AuthContext);
  const [state, dispatch] = useReducer(GeneralReducer, initialState);

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

  return (
    <GeneralContext.Provider
      value={{
        products: state.products,
        getAllProducts,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralState;
