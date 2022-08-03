import { useReducer } from "react";
import AuthReducer from "./AuthReducer";
import AuthContext from "./AuthContext";
import { SIGNIN, SIGNUP } from "../types";
import { BASE_URL } from "../../utils/baseUrl";
import axios from "axios";

const AuthState = ({ children }) => {
  const initialState = {
    userToken: localStorage.getItem("userToken") || null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        userToken: state.userToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
