import "../AddItem/AddItem.css";
import "../../../../../componentes/AllDashboardPageStyle/AllDashboardPageStyle.css";
import SectionTitle from "../../../../../componentes/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    const recipeName = data.recipeName;
    const category = data.category;
    const price = data.price;
    const recipeDetails = data.recipeDetails;

    const cardItem = {
      recipeName,
      category,
      price,
      recipeDetails
    }

    console.log(cardItem);
  }


  return (
    <div className="main_dashboard_page_outer_container">
      <div className="main_dashboard_page_inner_container">
        <div>
          <SectionTitle
            heading={"ADD AN ITEM"}
            subHeading={"---What's new?---"}
          ></SectionTitle>
        </div>

        <div className="main_add_item_outer_container">
          <div className="main_add_item_inner_container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="add_itrm_single_input_container">
                <p>Recipe name*</p>
                <input
                  type="text"
                  name="recipeName"
                  placeholder="Recipe name"
                  {...register("recipeName")}
                />
              </div>

              <div className="add_item_second_input_outer_container">

                <div className="dropdown">
                  <select className="dropdown-select" {...register("category")}>
                    <option value="" disabled selected>
                      Category
                    </option>
                    <option value="salad">Salad</option>
                    <option value="soup">Soup</option>
                    <option value="dessert">Dessert</option>
                    <option value="pizza">Pizza</option>
                    <option value="drinks">Drinks</option>
                  </select>
                </div>

                <div className="add_item_second_input_inner_container">
                  <p>Price*</p>
                  <input type="text" name="price" placeholder="Price" {...register("price")}/>
                </div>
              </div>

              <div className="add_itrm_single_input_container">
                <p>Recipe Details*</p>
                <textarea
                  name="recipeDetails"
                  placeholder="Recipe Details"
                  {...register("recipeDetails")}
                ></textarea>
              </div>

              <div className="message_sub_container">
                <input type="submit" value="Add Item" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
