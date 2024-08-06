import { Helmet } from "react-helmet-async";
import ScrollToTop from "../../componentes/ScrollToTop/ScrollToTop";
import Baner from "./Baner/Baner";
import BistroService from "./BistroService/BistroService";
import CallUs from "./CallUs/CallUs";
import ChackOutMenu from "./ChackOutMenu/ChackOutMenu";
import FromOurMenu from "./FromOurMenu/FromOurMenu";
import OrderImageSlider from "./OrderImageSlider/OrderImageSlider";
import Reviews from "./Reviews/Reviews";

const HomePageLayout = () => {
  return (
    <div className="main_home_page_container">
      <Helmet>
        <title>Bistro Boss Restaurant | Home</title>
      </Helmet>

      <ScrollToTop></ScrollToTop>

      <Baner></Baner>
      <OrderImageSlider></OrderImageSlider>
      <BistroService></BistroService>
      <FromOurMenu></FromOurMenu>
      <CallUs></CallUs>
      <ChackOutMenu></ChackOutMenu>
      <Reviews></Reviews>
    </div>
  );
};

export default HomePageLayout;