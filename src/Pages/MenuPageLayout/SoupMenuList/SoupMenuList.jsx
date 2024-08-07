import MenuItemList from "../../../componentes/MenuItemList/MenuItemList";
import SectionButton from "../../../componentes/SectionButton/SectionButton";
import useMenu from "../../../Hook/Hook";


const SoupMenuList = () => {
  const [menu] = useMenu();
  const soups = menu.filter(soup => soup.category === "soup");

  return (
    <div>

    <div className="main_menu_item_container">
      <div className="main_menu_item_list_container">
        {
          soups.map(item => <MenuItemList key={item._id} menuItem={item}></MenuItemList>)
        }
      </div>
    </div>

    <div className="mb-28">
      <SectionButton
        btnName={"ORDER YOUR FAVOURITE FOOD"}
      ></SectionButton>
    </div>

    </div>
  );
};

export default SoupMenuList;