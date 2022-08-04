import "./style.scss";
import DeliverfixLogo from "../../assets/images/new_logo.png";
import PrimaryButton from "../../components/buttons/primary-button/PrimaryButton";
import { Link } from "react-router-dom";
import { SIGNIN_PAGE } from "../../routes";

const PasswordSuccess = () => {
  return (
    <div className="sign_container">
      <div className="sign_body  container">
        <div className="sign_header">
          <img src={DeliverfixLogo} alt="logo" />
          <h1>Thank You Very Much</h1>
        </div>
        <div className="sign_success_form">
          <p>Your account has been changed successfully.</p>
          <Link to={SIGNIN_PAGE}>
            <PrimaryButton
              buttonText="Login to Main System"
              htmlType="button"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PasswordSuccess;
