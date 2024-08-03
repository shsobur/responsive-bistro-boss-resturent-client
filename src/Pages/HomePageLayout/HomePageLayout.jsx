import Baner from "./Baner/Baner";
import OrderImageSlider from "./OrderImageSlider/OrderImageSlider";

const HomePageLayout = () => {
  return (
    <div className="main_home_page_container">
      <Baner></Baner>
      <OrderImageSlider></OrderImageSlider>
    </div>
  );
};

export default HomePageLayout;