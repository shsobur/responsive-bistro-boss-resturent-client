import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
  const location = useLocation();
  const noNavAndFooterSingInPage = location.pathname.includes("singin");
  const noNavAndFooterSingUpPage = location.pathname.includes("singup");

  return (
    <div>
      {noNavAndFooterSingInPage || noNavAndFooterSingUpPage || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noNavAndFooterSingInPage || noNavAndFooterSingUpPage || <Footer></Footer>}
    </div>
  );
};

export default Main;