import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  LANDING_PAGE,
  SIGNUP_PAGE,
  SIGNIN_PAGE,
  FORGOT_PASSWORD_PAGE,
  RESET_PASSWORD_PAGE,
  MAIN_PAGE,
} from "./routes";
import {
  OnboardingScreen,
  SignUpPage,
  SignInPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  MainPage,
} from "./pages";
import DashboardLayout from "./layout/dashboard-layout/DashboardLayout";

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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
