import "./style.scss";
import RiderLogo from "../../../assets/images/loading_icon.png";

const Loading = () => {
  return (
    <div className="loading_container">
      <img src={RiderLogo} alt="loading..." />
    </div>
  );
};

export default Loading;
