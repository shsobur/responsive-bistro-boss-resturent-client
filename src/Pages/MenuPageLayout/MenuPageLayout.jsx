import ScrollToTop from "../../componentes/ScrollToTop/ScrollToTop";
import DessertBaner from "./DessertBaner/DessertBaner";
import MenuBaner from "./MenuBaner/MenuBaner";
import TodaysOffered from "./TodaysOffered/TodaysOffered";

const MenuPageLayout = () => {
  return (
    <div>
      <ScrollToTop></ScrollToTop>

      <MenuBaner></MenuBaner>
      <TodaysOffered></TodaysOffered>
      <DessertBaner></DessertBaner>
    </div>
  );
};

export default MenuPageLayout;