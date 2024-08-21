import "../ManageItem/ManageItem.css";
import "../../../../../componentes/AllDashboardPageStyle/AllDashboardPageStyle.css";
import SectionTitle from "../../../../../componentes/SectionTitle/SectionTitle";
import useMenu from "../../../../../Hook/Hook";

import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxios from "../../../../../Hook/useAxios/useAxios";
import { Link } from "react-router-dom";

const ManageItem = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxios();

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`)
        console.log(res.data);
        if(res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      }
    });
  }

  return (
    <div className="main_dashboard_page_outer_container">
      <div className="main_dashboard_page_inner_container">

        <SectionTitle
          heading={"MANAGE ALL ITEMS"}
          subHeading={"---Hurry Up!---"}
        ></SectionTitle>

        <div className="main_manage_item_outer_container">
          <div className="main_manage_item_inner_container">

            <div className="total_manege_item_container">
              <h2>TOTAL ITEM: {menu.length}</h2>
            </div>

            <div>
            <div className="rounded-lg overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead className="cart_list_heaser_container">
                    <tr>
                      <th>#</th>
                      <th>ITEM IMAGE</th>
                      <th>ITEM NAME</th>
                      <th>PRICE</th>
                      <th className="text-center">ACTION</th>
                      <th className="text-center">ACTION</th>
                    </tr>
                  </thead>

                  {menu.map((item, index) => (
                    <tbody key={item._id}>
                      {/* row 1 */}
                      <tr>
                        <th className="text-xl ">{index + 1}</th>

                        <td className="h-12 w-12">
                          <img src={item.image} alt="item image" />
                        </td>

                        <td className="text-base text-[#737373] font-[Inter]">
                          {item.name}
                          <br />
                          <span className="text-xs font-semibold text-[#000000]">{item.category}</span>
                        </td>

                        <th className="text-base text-[#737373] font-[Inter]">
                          $ {item.price}
                        </th>

                        <Link to={`/dashboard/updateItem/${item._id}`}>
                          <th title=" Update" className="text-center">
                            <button
                              className="text-xl bg-[#d1a054] p-4 rounded-lg text-[#ffffff]"
                            >
                              <FiEdit />
                            </button>
                          </th>
                        </Link>

                        <th title="Delete" className="text-center">
                          <button
                            onClick={() => handleDeleteItem(item)}
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
    </div>
  );
};

export default ManageItem;