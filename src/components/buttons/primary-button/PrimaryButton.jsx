import "./style.scss";
import { Button } from "antd";

const PrimaryButton = ({ buttonText, htmlType }) => {
  return (
    <div className="primary_container">
      <Button htmlType={htmlType} className="primary_btn">
        {buttonText}
      </Button>
    </div>
  );
};

export default PrimaryButton;
