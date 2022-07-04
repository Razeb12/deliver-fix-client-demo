import "./style.scss";
import MapBox from "../../assets/images/mapbox.png";
import Rider from "../../assets/svgs/ridericon.svg";
import OfferOne from "../../assets/images/offerone.png";
import OfferTwo from "../../assets/images/offertwo.png";
import { Link } from "react-router-dom";
import { TRACKING_PAGE } from "../../routes";

const OrderProcess = () => {
  return (
    <div className="order_process_container">
      <div className="container order_container">
        <div className="order_map">
          <img src={MapBox} alt="" />
          <img src={Rider} alt="" className="rider" />
        </div>
        <div className="order_process_details">
          <h2>Eric Johnson</h2>
          <p>
            I am on the way to deliver your orders now. It will take about{" "}
            <span>19 minutes</span>. Thank you for your patience.
          </p>
          <Link to={TRACKING_PAGE}>
            <button>Live Tracking</button>
          </Link>
        </div>
        <div className="order_offers">
          <h1>Offers</h1>
          <div className="order_offers_banners">
            <img src={OfferOne} alt="" />
            <img src={OfferTwo} alt="" />
            <img src={OfferOne} alt="" />
            <img src={OfferOne} alt="" />
            <img src={OfferTwo} alt="" />
            <img src={OfferOne} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderProcess;
