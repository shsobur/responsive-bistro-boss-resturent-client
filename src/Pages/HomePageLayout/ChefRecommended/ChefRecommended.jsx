import SectionTitle from "../../../componentes/SectionTitle/SectionTitle";
import useMenu from "../../../Hook/Hook";
import RecommendedItemCard from "../../../componentes/RecommendedItemCard/RecommendedItemCard";
import "../ChefRecommended/ChefRecommended";
import "../../../componentes/RecommendedItemCard/RecommendedItemCard.css";  

const ChefRecommended = () => {
  const [menu] = useMenu();
  const offered = menu.filter(item => item.category === "offered");

  return (
    <div>
      <div>
        <SectionTitle
          heading={"CHEF RECOMMENDS"}
          subHeading={"---Should Try---"}
        ></SectionTitle>
      </div>

      <div className="chef_recommend_card_box_container">
        <div className="chef_recommend_card_box_inner_container">

          {
            offered.map(offer => <RecommendedItemCard key={offer._id} cardItem={offer}></RecommendedItemCard>)
          }

        </div>
      </div>
    </div>
  );
};

export default ChefRecommended;