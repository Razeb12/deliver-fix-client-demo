import "./style.scss";
import { Link } from "react-router-dom";

const Circle = ({ bgImg, title, linkUrl }) => {
  return (
    <Link to={linkUrl}>
      <div className="circle_container">
        <div
          className="circle_bg"
          style={{
            backgroundImage: `url(${bgImg})`,
            boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.66)",
            height: "70px",
            width: "70px",
            borderRadius: "50%",
            border: "3px solid #ff0000",
          }}
        >
          <p>{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default Circle;
