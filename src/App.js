import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  LANDING_PAGE,
  SIGNUP_PAGE,
  SIGNIN_PAGE,
  FORGOT_PASSWORD_PAGE,
  RESET_PASSWORD_PAGE,
  MAIN_PAGE,
  BURGER_PAGE,
  PIZZA_PAGE,
  DRINKS_PAGE,
} from "./routes";
import {
  OnboardingScreen,
  SignUpPage,
  SignInPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  MainPage,
  BurgerPage,
  PizzaPage,
  DrinksPage,
} from "./pages";
import DashboardLayout from "./layout/dashboard-layout/DashboardLayout";
import MainLayout from "./layout/main-layout/MainLayout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={LANDING_PAGE} element={<OnboardingScreen />} />
        <Route path={SIGNUP_PAGE} element={<SignUpPage />} />
        <Route path={SIGNIN_PAGE} element={<SignInPage />} />
        <Route path={FORGOT_PASSWORD_PAGE} element={<ForgotPasswordPage />} />
        <Route path={RESET_PASSWORD_PAGE} element={<ResetPasswordPage />} />
        <Route element={<DashboardLayout />}>
          <Route path={MAIN_PAGE} element={<MainPage />} />
          <Route element={<MainLayout />}>
            <Route path={BURGER_PAGE} element={<BurgerPage />} />
            <Route path={PIZZA_PAGE} element={<PizzaPage />} />
            <Route path={DRINKS_PAGE} element={<DrinksPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
