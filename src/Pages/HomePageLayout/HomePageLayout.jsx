import Baner from "./Baner/Baner";
import BistroService from "./BistroService/BistroService";
import OrderImageSlider from "./OrderImageSlider/OrderImageSlider";

const HomePageLayout = () => {
  return (
    <div className="main_home_page_container">
      <Baner></Baner>
      <OrderImageSlider></OrderImageSlider>
      <BistroService></BistroService>
    </div>
  );
};

export default HomePageLayout;