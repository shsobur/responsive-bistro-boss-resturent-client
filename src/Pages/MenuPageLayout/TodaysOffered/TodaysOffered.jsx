import useMenu from "../../../Hook/Hook";
import SectionTitle from "../../../componentes/SectionTitle/SectionTitle";
import MenuItemList from "../../../componentes/MenuItemList/MenuItemList";
import SectionButton from "../../../componentes/SectionButton/SectionButton";


const TodaysOffered = () => {
  const [menu] = useMenu();
  const offered = menu.filter(offer => offer.category === "offered");

  return (
    <div className="main_today_offeref_container">

      <div>
        <SectionTitle
          heading={"TODAY'S OFFER"}
          subHeading={"---Don't miss---"}
        ></SectionTitle>
      </div>

      <div className="main_menu_item_container">
        <div className="main_menu_item_list_container">
          {
            offered.map(item=> <MenuItemList key={item._id} menuItem={item}></MenuItemList>)
          }
        </div>
      </div>

      <div>
        <SectionButton btnName={"ORDER YOUR FAVOURITE FOOD"}></SectionButton>
      </div>

    </div>
  );
};

export default TodaysOffered; 