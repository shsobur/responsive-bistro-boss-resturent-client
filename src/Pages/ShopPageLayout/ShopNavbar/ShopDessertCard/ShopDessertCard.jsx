import RecommendedItemCard from "../../../../componentes/RecommendedItemCard/RecommendedItemCard";
import useMenu from "../../../../Hook/Hook";

const ShopDessertCard = () => {
  const [menu] = useMenu();
  const desserts = menu.filter(item => item.category === "dessert");

  return (
    <div className="main_food_card_container">
      <div className="main_food_card_inner_container">

      <div className="chef_recommend_card_box_container">
          <div className="chef_recommend_card_box_inner_container">
            {
              desserts.map(dessert => <RecommendedItemCard key={dessert._id} cardItem={dessert}></RecommendedItemCard>)
            }
          </div>
        </div>

      </div>
    </div>
  );
};

export default ShopDessertCard;