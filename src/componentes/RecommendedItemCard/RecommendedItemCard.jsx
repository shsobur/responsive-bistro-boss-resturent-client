import CardButton from "../CardButton/CardButton";
import "../RecommendedItemCard/RecommendedItemCard.css";

const RecommendedItemCard = ({ offer }) => {
  const { name, image, recipe } = offer;

  return (
    <div>

      <div className="card rounded-none bg-base-200">

        <div className="main_offered_card_container">
          <img
            className="px-0"
            src={image}
            alt="offered item"
          />
        </div>

        <div className="mani_offered_content_contaienr">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>

          <div className="card-actions">
            <CardButton
              cardName={"ADD TO CART"}
            ></CardButton>
          </div>

        </div>

      </div>

    </div>
  );
};

export default RecommendedItemCard;
