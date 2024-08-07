import MenuItemList from "../../../componentes/MenuItemList/MenuItemList";
import SectionButton from "../../../componentes/SectionButton/SectionButton";
import useMenu from "../../../Hook/Hook";

const DessertMenuList = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((dessert) => dessert.category === "dessert");

  return (
    <div>

      <div className="main_menu_item_container">
        <div className="main_menu_item_list_container">
          {desserts.map((item) => (
            <MenuItemList key={item._id} menuItem={item}></MenuItemList>
          ))}
        </div>
      </div>


      <div>
        <SectionButton
          btnName={"ORDER YOUR FAVOURITE FOOD"}
        ></SectionButton>
      </div>
    </div>
  );
};

export default DessertMenuList;
