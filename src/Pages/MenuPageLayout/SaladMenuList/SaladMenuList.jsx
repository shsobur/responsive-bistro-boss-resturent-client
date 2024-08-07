import MenuItemList from "../../../componentes/MenuItemList/MenuItemList";
import SectionButton from "../../../componentes/SectionButton/SectionButton";
import useMenu from "../../../Hook/Hook";

const SaladMenuList = () => {
  const [menu] = useMenu();
  const salads = menu.filter(salad => salad.category === "salad");

  return (
    <div>

    <div className="main_menu_item_container">
      <div className="main_menu_item_list_container">
        {
          salads.map(item => <MenuItemList key={item._id} menuItem={item}></MenuItemList>)
        }
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

export default SaladMenuList;