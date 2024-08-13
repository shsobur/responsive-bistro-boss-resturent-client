import Swal from "sweetalert2";
import SectionTitle from "../../../../componentes/SectionTitle/SectionTitle";
import useCart from "../../../../Hook/useCart/useCart";
import "../MyCart/MyCart.css";
import { RiDeleteBinLine } from "react-icons/ri";
import useAxios from "../../../../Hook/useAxios/useAxios";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxios();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="main_cart_box_container">
      <SectionTitle
        heading={"WANNA ADD MORE?"}
        subHeading={"---My Cart---"}
      ></SectionTitle>

      <div className="main_cart_list_out_container">
        <div className="main_cart_list_inner_container">
          <div className="main_cart_list_header_container">
            <div className="list_header_title_container">
              <h2>Total orders: {cart.length}</h2>
            </div>

            <div className="list_header_title_container">
              <h2>total price: $ {totalPrice}</h2>
            </div>

            <button>PAY</button>
          </div>

          <div>
            <div className="rounded-lg overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead className="cart_list_heaser_container">
                  <tr>
                    <th></th>
                    <th>ITEM IMAGE</th>
                    <th>ITEM NAME</th>
                    <th>PRICE</th>
                    <th>ACTION</th>
                  </tr>
                </thead>

                {cart.map((item, index) => (
                  <tbody key={item._id}>
                    {/* row 1 */}
                    <tr>
                      <th className="text-xl ">{index + 1}</th>

                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-16 w-16">
                              <img src={item.image} alt="Item Image" />
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="cart_list_item_name_price">{item.name}</td>

                      <td className="cart_list_item_name_price">
                        $ {item.price}
                      </td>

                      <th>
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="text-xl bg-[#B91C1C] p-4 rounded-lg text-[#ffffff]"
                        >
                          <RiDeleteBinLine />
                        </button>
                      </th>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
