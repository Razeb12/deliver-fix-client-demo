import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LANDING_PAGE } from "./routes";
import { OnboardingScreen } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={LANDING_PAGE} element={<OnboardingScreen />} />
      </Routes>
    </div>
  );
}

export default App;
