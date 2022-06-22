import "./style.scss";
import { Link } from "react-router-dom";

const CardMenu = ({ linkUrl, imgUrl, cardTitle }) => {
  return (
    <Link to={linkUrl}>
      <div className="card_container">
        <img src={imgUrl} alt={cardTitle} />
        <p>{cardTitle}</p>
      </div>
    </Link>
  );
};

export default CardMenu;
