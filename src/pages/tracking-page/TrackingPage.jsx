import "./style.scss";
import { Steps } from "antd";
import { Link } from "react-router-dom";
import { MAIN_PAGE } from "../../routes";

const { Step } = Steps;

const TrackingPage = () => {
  return (
    <div className="tracking_order_container">
      <div className="container tracking_order">
        <h1>Your Order is Being Processed</h1>
        <Steps current={4} progressDot className="steps_pattern">
          <Step
            title="Your Food is Being Processed"
            description="30.00 min left"
          />
          <Step
            title="Someone picked up your order"
            description="22:30 min left"
          />
          <Step title="Food is on the way" description="19:30 min left" />
          <Step
            title="Your Food arrived at your door"
            description="0:00 min left"
          />
          <Step title="Food is delivered" />
          <Step title="Payment is done and order complete" />
        </Steps>

        <div className="another_order">
          <Link to={MAIN_PAGE}>
            <button>Process Another Order</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrackingPage;
