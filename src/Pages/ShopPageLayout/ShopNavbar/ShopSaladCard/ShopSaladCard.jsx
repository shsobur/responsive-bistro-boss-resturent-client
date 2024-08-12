import RecommendedItemCard from "../../../../componentes/RecommendedItemCard/RecommendedItemCard";
import useMenu from "../../../../Hook/Hook";

const ShopSaladCard = () => {
  const [menu] = useMenu();
  const salads = menu.filter((item) => item.category === "salad");

  return (
    <div className="main_food_card_container">
      <div className="main_food_card_inner_container">
        <div className="chef_recommend_card_box_container">
          <div className="chef_recommend_card_box_inner_container">
            {salads.map((salad) => (<RecommendedItemCard key={salad._id}cardItem={salad}></RecommendedItemCard>))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSaladCard;
