import "../RecommendedItemCard/RecommendedItemCard.css";

const RecommendedItemCard = ({ offer }) => {
  const { name, image, recipe } = offer;

  return (
    <div className="main_chef_recommend_container">
      <div className="chef_recommend_inner_container">

        <div className="main_recommend_card_container">

          <div className="main_recommend_img_container">
            <img src={image}/>
          </div>
          <div className="main_recommend_title_container">
            <h2>{name}</h2>
            <p>{recipe}</p>
          </div>

          <div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default RecommendedItemCard;
