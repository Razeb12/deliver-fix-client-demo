import "./style.scss";
import { Checkbox } from "antd";

const Extras = ({ imgUrl, name, amount, onChange }) => {
  return (
    <div className="extras_container">
      <div className="extras_check">
        <Checkbox onChange={onChange} />
        <div className="extra_package">
          <img src={imgUrl} alt="" />
          <p>{name}</p>
        </div>
      </div>
      <div className="extra_price">
        <p>
          <span>+ €</span>
          {amount}
        </p>
      </div>
    </div>
  );
};

export default Extras;
