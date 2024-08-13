import CardButton from "../CardButton/CardButton";
import "../RecommendedItemCard/RecommendedItemCard.css";

const RecommendedItemCard = ({ cardItem }) => {
  const { name, image, recipe, _id, price} = cardItem;

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
            <CardButton
              cardName={"ADD TO CART"}
              foodItem={cardItem}
              itemId={_id}
              itemName={name}
              itemImage={image}
              itemPrice={price}
            ></CardButton>
          </div>

        </div>

      </div>
    </div>
  );
};

export default RecommendedItemCard;
