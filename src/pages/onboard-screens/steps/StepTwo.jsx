import "./style.scss";
import CrispPic from "../../../assets/images/crips_pic.png";

const StepTwo = () => {
  return (
    <div className="step_container">
      <div className="step_hero">
        <img src={CrispPic} alt="crips" />
      </div>
      <div className="step_body container">
        <h1>Fast Delivery</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.readable
          English.
        </p>
      </div>
    </div>
  );
};

export default StepTwo;
