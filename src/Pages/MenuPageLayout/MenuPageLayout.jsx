import ScrollToTop from "../../componentes/ScrollToTop/ScrollToTop";
import DessertBaner from "./DessertBaner/DessertBaner";
import DessertMenuList from "./DessertMenuList/DessertMenuList";
import MenuBaner from "./MenuBaner/MenuBaner";
import PizzaBaner from "./PizzaBaner/PizzaBaner";
import PizzaMenuList from "./PizzaMenuList/PizzaMenuList";
import SaladBaner from "./SaladBaner/SaladBaner";
import SaladMenuList from "./SaladMenuList/SaladMenuList";
import SoupBaner from "./SoupBaner/SoupBaner";
import SoupMenuList from "./SoupMenuList/SoupMenuList";
import TodaysOffered from "./TodaysOffered/TodaysOffered";

const MenuPageLayout = () => {
  return (
    <div>
      <ScrollToTop></ScrollToTop>

      <MenuBaner></MenuBaner>
      <TodaysOffered></TodaysOffered>

      <DessertBaner></DessertBaner>
      <DessertMenuList></DessertMenuList>

      <PizzaBaner></PizzaBaner>
      <PizzaMenuList></PizzaMenuList>

      <SaladBaner></SaladBaner>
      <SaladMenuList></SaladMenuList>

      <SoupBaner></SoupBaner>
      <SoupMenuList></SoupMenuList>
    </div>
  );
};

export default MenuPageLayout;