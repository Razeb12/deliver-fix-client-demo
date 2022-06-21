import "./style.scss";
import ChefLogo from "../../assets/svgs/chefsvg.svg";
import PrimaryButton from "../../components/buttons/primary-button/PrimaryButton";
import { Link } from "react-router-dom";
import { SIGNIN_PAGE } from "../../routes";

const PasswordSuccess = () => {
  return (
    <div className="sign_container">
      <div className="sign_body  container">
        <div className="sign_header">
          <img src={ChefLogo} alt="logo" />
          <h1>Password Changed</h1>
        </div>
        <div className="sign_success_form">
          <p>Your password has been changed successfully.</p>
          <Link to={SIGNIN_PAGE}>
            <PrimaryButton buttonText="Back to Login Page" htmlType="button" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PasswordSuccess;
