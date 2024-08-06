/* eslint-disable no-unused-vars */
import MenuItemList from "../../../componentes/MenuItemList/MenuItemList";
import SectionButton from "../../../componentes/SectionButton/SectionButton";
import SectionTitle from "../../../componentes/SectionTitle/SectionTitle";
import useMenu from "../../../Hook/Hook";
import "../FromOurMenu/FromOurMenu.css";

const FromOurMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === "popular");

  return (
    <div>
      <div>
        <SectionTitle
          heading={"FROM OUR MENU"}
          subHeading={"---Check it out---"}
        ></SectionTitle>
      </div>

      <div className="main_menu_item_container">
        <div className="main_menu_item_list_container">
          {
            popular.map(item => <MenuItemList key={item._id} item={item}></MenuItemList>)
          }
        </div>

        <div>
          <SectionButton
            btnName={"View Full  Menu"} 
          ></SectionButton>
        </div>
      </div>
    </div>
  );
};

export default FromOurMenu;