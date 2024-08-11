import RecommendedItemCard from "../../../../componentes/RecommendedItemCard/RecommendedItemCard";
import useMenu from "../../../../Hook/Hook";

const ShopSoupCard = () => {
  const [menu] = useMenu();
  const sopus = menu.filter(item => item.category === "soup");

  return (
    <div className="main_food_card_container">
      <div className="main_food_card_inner_container">

      <div className="chef_recommend_card_box_container">
          <div className="chef_recommend_card_box_inner_container">
            {
              sopus.map(sopu => <RecommendedItemCard key={sopu._id} cardItem={sopu}></RecommendedItemCard>)
            }
          </div>
        </div>

      </div>
    </div>
  );
};

export default ShopSoupCard;