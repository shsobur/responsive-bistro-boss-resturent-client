/* eslint-disable no-unused-vars */
import { useContext } from "react";
import "../CardButton/CardButton.css";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxios from "../../Hook/useAxios/useAxios";
import useCart from "../../Hook/useCart/useCart";

const CardButton = ({cardName, foodItem, itemId, itemName, itemImage, itemPrice}) => {
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxios();
  const [, refetch] = useCart();

  const handleAddToCart = (foodItem) => {
    if(user?.email) {

      const menuItem = {
        menuItemId: itemId,
        email: user?.email,
        name: itemName,
        image :itemImage,
        price: itemPrice,
      }

      axiosSecure.post("/carts", menuItem)
      .then(res => {
        if(res.data.insertedId) {
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
            title: "Cart added successfully"
          });

          refetch();
        }
      })
    }
    else{
      Swal.fire({
        title: "Opps",
        text: "Please login to add to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/singin", {state: {from: location}});
        }
      });
    }
  }

  return (
    <div className="main_cardName_container">
      <button onClick={() => handleAddToCart(foodItem)}>
        {cardName}
      </button>
    </div>
  );
};

export default CardButton;