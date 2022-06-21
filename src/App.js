import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LANDING_PAGE, SIGNUP_PAGE, SIGNIN_PAGE } from "./routes";
import { OnboardingScreen, SignUpPage, SignInPage } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={LANDING_PAGE} element={<OnboardingScreen />} />
        <Route path={SIGNUP_PAGE} element={<SignUpPage />} />
        <Route path={SIGNIN_PAGE} element={<SignInPage />} />
      </Routes>
    </div>
  );
}

export default App;
