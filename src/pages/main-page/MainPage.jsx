import "./style.scss";
import CardMenu from "../../components/card/card-menu/CardMenu";
import OrderFoodIcon from "../../assets/svgs/order_food.svg";
import OffersIcon from "../../assets/svgs/offers.svg";
import EventIcon from "../../assets/svgs/events.svg";
import BeverageIcon from "../../assets/svgs/beverage.svg";
import PreOrderIcon from "../../assets/svgs/pre_order.svg";
import LiveIcon from "../../assets/svgs/daily_live.svg";
import LocationIcon from "../../assets/images/location.png";
import RatingsIcon from "../../assets/images/rating.png";
import MenuIcon from "../../assets/images/menu.png";
import ReservationIcon from "../../assets/images/reservation.png";
import Circle from "../../components/circles/Circle";

const menuItems = [
  {
    name: "Order Food",
    link: "/order",
    imgUrl: OrderFoodIcon,
  },
  {
    name: "Offers",
    link: "/offer",
    imgUrl: OffersIcon,
  },
  {
    name: "Events",
    link: "/offer",
    imgUrl: EventIcon,
  },
  {
    name: "Beverage",
    link: "/beverage",
    imgUrl: BeverageIcon,
  },
  {
    name: "Pre Order",
    link: "/preoffer",
    imgUrl: PreOrderIcon,
  },
  {
    name: "Daily Live",
    link: "/live",
    imgUrl: LiveIcon,
  },
  {
    name: "Restaurant",
    link: "/restaurant",
    imgUrl: LiveIcon,
  },
];

const informationItems = [
  {
    name: "Location",
    linkUrl: "/location",
    imgUrl: LocationIcon,
  },
  {
    name: "Ratings",
    linkUrl: "/rating",
    imgUrl: RatingsIcon,
  },
  {
    name: "Menu",
    linkUrl: "/menu",
    imgUrl: MenuIcon,
  },
  {
    name: "Reservation",
    linkUrl: "/reservation",
    imgUrl: ReservationIcon,
  },
];
const MainPage = () => {
  return (
    <div className="mainpage container">
      <div className="mainpage_top">
        {menuItems.map((item, index) => (
          <CardMenu
            key={index}
            linkUrl={item.link}
            imgUrl={item.imgUrl}
            cardTitle={item.name}
          />
        ))}
      </div>
      <div className="mainpage_info">
        <h2>Information about the retaurant</h2>
        <div className="mainpage_circles">
          {informationItems.map((item, index) => (
            <Circle
              key={index}
              linkUrl={item.linkUrl}
              bgImg={item.imgUrl}
              title={item.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
