import "../UpdateItem/UpdateItem.css";
import "../../../../../componentes/AllDashboardPageStyle/AllDashboardPageStyle.css";
import SectionTitle from "../../../../../componentes/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../../../Hook/useAxiosPublic/useAxiosPublic";
import useAxios from "../../../../../Hook/useAxios/useAxios";
import Swal from "sweetalert2";

const UpdateItem = () => {
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_API_KEY;
  const image_hostion_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

  const axiosSecure = useAxios();
  const axiosPublic = useAxiosPublic();
  const {name, price, category, recipe, _id} = useLoaderData();

  const { register, reset, handleSubmit, formState: { errors }, } = useForm();

  const onSubmit = async (data) => {
    const recipeName = data.recipeName;
    const category = data.category;
    const price = data.price;
    const recipeDetails = data.recipeDetails;

    const imageFile = {image: data.image[0]};
    const res = await axiosPublic.post(image_hostion_api, imageFile, {
      headers: {
        "content-type" : "multipart/form-data"
      }
    })

    console.log(res.data);

    if(res.data.success) {
      const menuItem = {
        name: recipeName,
        recipe: recipeDetails,
        image: res.data.data.display_url,
        category: category,
        price: parseFloat(price)
      }

      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      if(menuRes.data.modifiedCount > 0) {
        reset();

        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: `${data.recipeName} added successfully`
        });
      }
    }
  }

  return (
    <div className="main_dashboard_page_outer_container">
      <div className="main_dashboard_page_inner_container">
        <SectionTitle
          heading={"UPDATE ITEM"}
          subHeading={"---Lets Chsnge---"}
        ></SectionTitle>

        <div className="main_update_outer_container">
          <div className="main_update_inner_container">
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="add_item_single_input_container">
                  <p>Recipe name*</p>
                  <input
                    type="text"
                    name="recipeName"
                    placeholder="Recipe name"
                    defaultValue={name}
                    {...register("recipeName", { required: true })}
                  />
                  <div>
                    {errors.recipeName && (
                      <span className="text-red-500 font-medium">
                        Name is required
                      </span>
                    )}
                  </div>
                </div>

                <div className="add_item_second_input_outer_container">
                  <div className="dropdown add_item_single_input_container">
                    <p>Category*</p>

                    <select
                      defaultValue={category}
                      className="dropdown-select"
                      {...register("category", { required: true })}
                    >
                      <option value="default" disabled selected>
                        Category
                      </option>
                      <option value="salad">Salad</option>
                      <option value="soup">Soup</option>
                      <option value="dessert">Dessert</option>
                      <option value="pizza">Pizza</option>
                      <option value="drinks">Drinks</option>
                    </select>

                    <div>
                      {errors.category && (
                        <span className="text-red-500 font-medium">
                          Category is required
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="add_item_second_input_inner_container">
                    <p>Price*</p>
                    <input
                      type="text"
                      name="price"
                      placeholder="Price"
                      defaultValue={price}
                      {...register("price", { required: true })}
                    />
                    <div>
                      {errors.price && (
                        <span className="text-red-500 font-medium">
                          Price is required
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="add_item_single_input_container">
                  <p>Recipe Details*</p>
                  <textarea
                    name="recipeDetails"
                    placeholder="Recipe Details"
                    defaultValue={recipe}
                    {...register("recipeDetails", { required: true })}
                  ></textarea>
                  <div>
                    {errors.recipeDetails && (
                      <span className="text-red-500 font-medium">
                        Recipe Details is required
                      </span>
                    )}
                  </div>
                </div>

              <div>
                <input
                  type="file"
                  name="image"
                  className="bg-transparent text-[#3743e3] file-input-md w-full max-w-xs"
                  {...register("image", { required: true })}
                />
                <div>
                  {errors.image && (
                    <span className="text-red-500 font-medium">
                      Image is required<br/> 
                      <span className="text-[#151515] font-normal text-xs">( if you dont went to change then re-upload the same image again )</span>
                    </span>
                  )}
                </div>
              </div>

                <div className="message_sub_container">
                  <input type="submit" value="Update Recipe Details" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateItem;
