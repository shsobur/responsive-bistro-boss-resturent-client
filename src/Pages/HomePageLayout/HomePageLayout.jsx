import Baner from "./Baner/Baner";
import BistroService from "./BistroService/BistroService";
import CallUs from "./CallUs/CallUs";
import OrderImageSlider from "./OrderImageSlider/OrderImageSlider";

const HomePageLayout = () => {
  return (
    <div className="main_home_page_container">
      <Baner></Baner>
      <OrderImageSlider></OrderImageSlider>
      <BistroService></BistroService>
      <CallUs></CallUs>
    </div>
  );
};

export default HomePageLayout;