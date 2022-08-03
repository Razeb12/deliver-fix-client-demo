import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import AuthContext from "./context/auth-context/AuthContext";
import { SIGNIN_PAGE } from "./routes";

const PrivateRoute = () => {
  const { userToken } = useContext(AuthContext);
  return userToken ? <Outlet /> : <Navigate to={SIGNIN_PAGE} />;
};

export default PrivateRoute;
