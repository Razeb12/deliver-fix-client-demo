import { Link } from "react-router-dom";
import "./style.scss";
import HomeIcon from "../../../assets/svgs/home.svg";
import OfficeIcon from "../../../assets/svgs/workspace.svg";

const DeliveryCard = () => {
  return (
    <div className="delivery_container">
      <Link to="/home">
        <div className="delivery_left delivery">
          <div className="icon_borders">
            <img src={HomeIcon} alt="" />
          </div>
          <div className="delivery_texts">
            <h2>Home</h2>
            <p>R Pinhão 62,2925.....</p>
          </div>
        </div>
      </Link>
      <Link to="/office">
        <div className="delivery_right delivery">
          <div className="icon_borders">
            <img src={OfficeIcon} alt="" />
          </div>
          <div className="delivery_texts">
            <h2>Office</h2>
            <p>Quinta Fontainhas 49.......</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DeliveryCard;
