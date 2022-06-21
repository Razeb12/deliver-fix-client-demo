import "./style.scss";
import { Button } from "antd";

const PrimaryButton = ({ buttonText }) => {
  return (
    <div className="loading_container">
      <Button htmlType="button" className="loading_btn" loading>
        {buttonText}
      </Button>
    </div>
  );
};

export default PrimaryButton;
