import { useState } from "react";
import "./style.scss";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import Loading from "../../components/ui/loading/Loading";
import { Link } from "react-router-dom";

const OnboardingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(1);
  const gotoNextPage = () => {
    setPageCount(pageCount + 1);
  };
  setTimeout(() => setLoading(false), 3000);
  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <div className="onboarding_container">
          {pageCount === 1 && <StepOne />}
          {pageCount === 2 && <StepTwo />}
          {pageCount === 3 && <StepThree />}
          <div className="btn_control container">
            <div className="active_counts">
              <div
                className={
                  pageCount === 1 ? "active_status" : "inactive_status"
                }
              ></div>
              <div
                className={
                  pageCount === 2 ? "active_status" : "inactive_status"
                }
              ></div>
              <div
                className={
                  pageCount === 3 ? "active_status" : "inactive_status"
                }
              ></div>
            </div>
            {pageCount === 3 ? (
              <Link to="/hello">
                <button className="next_btn">Next</button>
              </Link>
            ) : (
              <button className="next_btn" onClick={gotoNextPage}>
                Next
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default OnboardingScreen;
