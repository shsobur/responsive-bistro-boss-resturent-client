import RecommendedItemCard from "../../../../componentes/RecommendedItemCard/RecommendedItemCard";
import useMenu from "../../../../Hook/Hook";

const ShopPizzaCard = () => {
  const [menu] = useMenu();
  const pizzas = menu.filter(item => item.category === "pizza");

  return (
    <div className="main_food_card_container">
      <div className="main_food_card_inner_container">

        <div className="chef_recommend_card_box_container">
          <div className="chef_recommend_card_box_inner_container">
            {
              pizzas.map(pizza => <RecommendedItemCard key={pizza._id} cardItem={pizza}></RecommendedItemCard>)
            }
          </div>
        </div>

      </div>
    </div>
  );
};

export default ShopPizzaCard;
