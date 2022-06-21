import "./style.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { BsFillBellFill } from "react-icons/bs";
import { Drawer, Badge } from "antd";
import ProfileIcon from "../../../assets/svgs/profile_icon.svg";
import PaymentIcon from "../../../assets/svgs/payment_icon.svg";
import NotificationIcon from "../../../assets/svgs/notification_icon.svg";
import SettingsIcon from "../../../assets/svgs/settings_icon.svg";
import DeleteIcon from "../../../assets/svgs/delete_icon.svg";
import LogoutIcon from "../../../assets/svgs/exit_icon.svg";

const TopNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    {
      name: "Profile",
      linkUrl: "/",
      imgUrl: ProfileIcon,
    },
    {
      name: "Payment Details",
      linkUrl: "/",
      imgUrl: PaymentIcon,
    },
    {
      name: "Notifications",
      linkUrl: "/",
      imgUrl: NotificationIcon,
    },
    {
      name: "App Settings",
      linkUrl: "/",
      imgUrl: SettingsIcon,
    },
    {
      name: "Delete Account",
      linkUrl: "/",
      imgUrl: DeleteIcon,
    },
  ];
  return (
    <div className="container top_navigation_container">
      <div className="hamburger_menu">
        <div className="drawer_menu">
          <GiHamburgerMenu onClick={toggleDrawer} size={20} />
        </div>
        <Drawer
          className="mobile_drawer"
          placement="left"
          closable={false}
          onClose={toggleDrawer}
          visible={isOpen}
        >
          <div className="drawer_header">
            <GiHamburgerMenu onClick={toggleDrawer} size={20} />
          </div>
          {navLinks.map((item, index) => (
            <div className="nav_links">
              <Link to={item.linkUrl} key={index}>
                <img src={item.imgUrl} alt="icon" /> {item.name}
              </Link>
            </div>
          ))}

          <div className="logout_link">
            <p>
              <img src={LogoutIcon} alt="" /> Log Out
            </p>
          </div>
        </Drawer>
      </div>
      <div className="search_container">
        <AiOutlineSearch color="#ff5c00" />
        <input type="text" placeholder="Search Food" />
      </div>
      <div className="notification_icon">
        <Badge count={2}>
          <BsFillBellFill size={20} />
        </Badge>
      </div>
      <div className="user_icon">
        <AiOutlineUser size={20} />
      </div>
    </div>
  );
};

export default TopNavigation;
