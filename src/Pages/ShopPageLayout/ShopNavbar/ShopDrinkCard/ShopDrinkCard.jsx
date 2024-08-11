import RecommendedItemCard from "../../../../componentes/RecommendedItemCard/RecommendedItemCard";
import useMenu from "../../../../Hook/Hook";

const ShopDrinkCard = () => {
  const [menu] = useMenu();
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div className="main_food_card_container">
      <div className="main_food_card_inner_container">
        <div className="chef_recommend_card_box_container">
          <div className="chef_recommend_card_box_inner_container">
            {drinks.map((drink) => (
              <RecommendedItemCard
                key={drink._id}
                cardItem={drink}
              ></RecommendedItemCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDrinkCard;
