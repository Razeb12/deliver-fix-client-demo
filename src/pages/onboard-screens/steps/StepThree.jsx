import "./style.scss";
import VegePic from "../../../assets/images/vege_pic.png";

const StepThree = () => {
  return (
    <div className="step_container">
      <div className="step_hero">
        <img src={VegePic} alt="crips" />
      </div>
      <div className="step_body container">
        <h1>In 30 Minutes</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.readable
          English.
        </p>
      </div>
    </div>
  );
};

export default StepThree;
