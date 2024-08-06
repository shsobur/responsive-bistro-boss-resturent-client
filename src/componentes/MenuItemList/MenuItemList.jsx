import "../MenuItemList/MenuItemList.css";

const MenuItemList = ({ item }) => {
  const { name, image, recipe, price } = item;

  return (
    <div className="mani_menu_item_list_inner_container">

      <div className="main_menu_content_list_container">

        <div className="menu_list_image_container">
          <img src={image} alt="popular menu" />
        </div>

        <div className="main_list_title_content_container">
          <div>
            <h2>{name}----------------</h2>
            <p>{recipe}</p>
          </div>

          <div className="addtional_menu_price_container">
            <p>${price}</p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default MenuItemList;
