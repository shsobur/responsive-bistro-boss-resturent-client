import { Helmet } from "react-helmet-async";
import ShopBaner from "./ShopBaner/ShopBaner";
// import ScrollToTop from "../../componentes/ScrollToTop/ScrollToTop";
import ShopNavbar from "./ShopNavbar/ShopNavbar";
import { Outlet } from "react-router-dom";

const ShopPageLayout = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss Restaurant | Our Shop</title>
      </Helmet>

      {/* <ScrollToTop></ScrollToTop> */}

      <ShopBaner></ShopBaner>
      <ShopNavbar></ShopNavbar>
      <Outlet></Outlet>
    </div>
  );
};

export default ShopPageLayout;