import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  LANDING_PAGE,
  SIGNUP_PAGE,
  SIGNIN_PAGE,
  FORGOT_PASSWORD_PAGE,
  RESET_PASSWORD_PAGE,
  MAIN_PAGE,
  CART_PAGE,
  CONFIRM_PAGE,
  PROCESS_PAGE,
  TRACKING_PAGE,
  ORDER_PAGE,
} from "./routes";
import {
  OnboardingScreen,
  SignUpPage,
  SignInPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  MainPage,
  CartPage,
  ConfirmOrder,
  OrderProcess,
  TrackingPage,
  OrderPage,
} from "./pages";
import DashboardLayout from "./layout/dashboard-layout/DashboardLayout";
import PrivateRoute from "./PrivateRoutes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={LANDING_PAGE} element={<OnboardingScreen />} />
        <Route path={SIGNUP_PAGE} element={<SignUpPage />} />
        <Route path={SIGNIN_PAGE} element={<SignInPage />} />
        <Route path={FORGOT_PASSWORD_PAGE} element={<ForgotPasswordPage />} />
        <Route path={RESET_PASSWORD_PAGE} element={<ResetPasswordPage />} />
        <Route element={<PrivateRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path={MAIN_PAGE} element={<MainPage />} />
            <Route path={CART_PAGE} element={<CartPage />} />
            <Route path={PROCESS_PAGE} element={<OrderProcess />} />
            <Route path={TRACKING_PAGE} element={<TrackingPage />} />
            <Route path={ORDER_PAGE} element={<OrderPage />} />
          </Route>
          <Route path={CONFIRM_PAGE} element={<ConfirmOrder />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
