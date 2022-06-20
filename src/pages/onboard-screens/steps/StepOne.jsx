import "./style.scss";
import PizzaPic from "../../../assets/images/pizza_pic.png";

const StepOne = () => {
  return (
    <div className="step_container">
      <div className="step_hero">
        <img src={PizzaPic} alt="pizza" />
      </div>
      <div className="step_body container">
        <h1>Favourite Food</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.readable
          English.
        </p>
      </div>
    </div>
  );
};

export default StepOne;
