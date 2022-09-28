import { useReducer } from "react";
import AuthReducer from "./AuthReducer";
import AuthContext from "./AuthContext";
import { SIGNIN, SIGNUP, VERIFY_OTP } from "../types";
import { BASE_URL } from "../../utils/baseUrl";
import axios from "axios";

const AuthState = ({ children }) => {
  const initialState = {
    userToken: localStorage.getItem("userToken") || null,
    response: "",
    user: "",
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const signUp = async (fullName, email, phone, password) => {
    try {
      const res = await axios.post(`${BASE_URL}/api/v1/auth/presignup`, {
        fullName,
        email,
        phone,
        password,
      });
      dispatch({
        type: SIGNUP,
        payload: res.data.message,
      });
      return true;
    } catch (err) {
      if (err.response.status === false) {
        return false;
      }
      return false;
    }
  };

  //signin
  const signIn = async (email, password) => {
    try {
      const returnedData = await axios.post(
        `${BASE_URL}/api/v1/auth/signin?q=customer`,
        {
          email: email,
          password: password,
        }
      );
      dispatch({
        type: SIGNIN,
        payload: returnedData.data.data,
      });
      localStorage.setItem("userToken", returnedData.data.data);
      return true;
    } catch (error) {
      if (error.response.status === false) {
        return false;
      }
      return false;
    }
  };

  //verify OTP
  const verifyOTP = async (email, otp) => {
    try {
      const returnedData = await axios.post(
        `${BASE_URL}/api/v1/auth/signup?q=customer`,
        {
          email: email,
          otp: otp,
        }
      );
      dispatch({
        type: VERIFY_OTP,
        payload: returnedData.data.data,
      });
      return true;
    } catch (error) {
      if (error.response.status === false) {
        return false;
      }
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        userToken: state.userToken,
        signUp,
        signIn,
        verifyOTP,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
