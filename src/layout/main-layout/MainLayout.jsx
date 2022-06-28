import { Outlet } from "react-router-dom";
import OrderFoodMenu from "../../components/ui/order-food-menu/OrderFoodMenu";

const MainLayout = () => {
  return (
    <div className="dashboard-layout">
      <OrderFoodMenu />
      <>
        <Outlet />
      </>
    </div>
  );
};

export default MainLayout;
