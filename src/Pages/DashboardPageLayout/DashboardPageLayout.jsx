import { Outlet } from "react-router-dom";
import DashBoardNavbar from "./DashBoardNavbar/DashBoardNavbar";
import ScrollToTop from "../../componentes/ScrollToTop/ScrollToTop";
import { Helmet } from "react-helmet-async";

const DashboardPageLayout = () => {
  return (
    <div className="main_dashboard_container flex">
      <Helmet>
        <title>Bistro Boss Restaurant | Dashboard</title>
      </Helmet>

      <ScrollToTop></ScrollToTop>

      <div>
        <DashBoardNavbar></DashBoardNavbar>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>

    </div>
  );
};

export default DashboardPageLayout;