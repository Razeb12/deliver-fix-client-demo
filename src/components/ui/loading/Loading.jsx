import "./style.scss";
import ChefLogo from "../../../assets/svgs/chefsvg.svg";

const Loading = () => {
  return (
    <div className="loading_container">
      <img src={ChefLogo} alt="loading..." />
    </div>
  );
};

export default Loading;
