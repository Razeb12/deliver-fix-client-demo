import "./style.scss";
import SuccessPic from "../../../assets/svgs/thankyou.svg";
import { Link } from "react-router-dom";
import { PROCESS_PAGE } from "../../../routes";

const SuccessPage = () => {
  return (
    <div className="success_container">
      <div className="success_body">
        <h1>Thank You</h1>
        <h4>We place your order successfully</h4>
        <img src={SuccessPic} alt="success" />
        <p>Your Order No- GRE2584751548</p>
        <Link to={PROCESS_PAGE}>
          <button>Track your Order</button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
