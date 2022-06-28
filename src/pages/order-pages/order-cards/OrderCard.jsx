import "./style.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { Rate } from "antd";
const OrderCard = ({
  name,
  minorName,
  price,
  rating,
  reviews,
  image,
  description,
  onClick,
  discount,
  duration,
}) => {
  return (
    <div className="order_card">
      <div className="order_card_left">
        <div
          className="order_card_img"
          style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "110px",
            height: "113px",
          }}
        >
          <div className={discount ? "order_discount" : undefined}>
            <p>{discount}</p>
          </div>
          <div className="order_time">
            <p>{duration}</p>
          </div>
        </div>
      </div>
      <div className="order_card_center">
        <div className="order_card_header">
          <h1>{name}</h1>
          <p>{minorName}</p>
        </div>
        <div className="order_card_body">
          <p>{description}</p>
        </div>
      </div>
      <div className="order_card_right">
        <div className="order_card_right_top">
          <AiOutlinePlus onClick={onClick} />
        </div>
        <div className="order_card_right_bottom">
          <h2>
            <span>€</span> {price}
          </h2>
          <div className="ratings">
            <Rate allowHalf value={rating} />
            <p>({reviews})</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
