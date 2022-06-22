import "./style.scss";
import InviteIcon from "../../../assets/images/invite.png";
import { Input } from "antd";
import { FaRegCopy } from "react-icons/fa";
const InviteCard = () => {
  return (
    <div className="invite_container">
      <div className="invite_image">
        <img src={InviteIcon} alt="invite" />
      </div>
      <div className="invite_body">
        <h2>Invite your friends</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <Input
          value="ADDFRIENDS25%"
          readOnly
          suffix={<FaRegCopy />}
          className="invite_input"
          onClick={() => navigator.clipboard.writeText("Copied invite link")}
        />
        <div className="btns">
          <button className="invite_btn">Invite</button>
          <button className="invite_details">Details</button>
        </div>
      </div>
    </div>
  );
};

export default InviteCard;
