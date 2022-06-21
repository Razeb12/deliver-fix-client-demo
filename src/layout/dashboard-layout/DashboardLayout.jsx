import { Outlet } from "react-router-dom";
import TopNavigation from "../../components/ui/top-navigation/TopNavigation";

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <TopNavigation />
      <>
        <Outlet />
      </>
    </div>
  );
};

export default DashboardLayout;
