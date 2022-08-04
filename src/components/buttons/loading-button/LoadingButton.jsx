import "./style.scss";
import { Button } from "antd";

const PrimaryButton = ({ buttonText }) => {
  return (
    <div className="loading_button">
      <Button htmlType="button" className="loading_btn" loading>
        {buttonText}
      </Button>
    </div>
  );
};

export default PrimaryButton;
