import "../CardButton/CardButton.css";

const CardButton = ({cardName}) => {
  return (
    <div className="main_cardName_container">
      <button>
        {cardName}
      </button>
    </div>
  );
};

export default CardButton;