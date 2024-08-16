import "../AllUser/AllUser.css";
import "../../../../../componentes/AllDashboardPageStyle/AllDashboardPageStyle.css";
import SectionTitle from "../../../../../componentes/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../../../Hook/useAxios/useAxios";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUser = () => {
  const axiosSecure = useAxios();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/user");
      return res.data;
    },
  });

  const handelUseDelete = (id) => {
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
        axiosSecure.delete(`/user/${id}`).then((res) => {
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

  const handeMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You wen't to make admin!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Admin",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/user/admin/${user._id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Done",
              text: `${user.name} admin now`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="main_dashboard_page_outer_container">
      <div className="main_dashboard_page_inner_container">
        <SectionTitle
          heading={"MANAGE ALL USERS"}
          subHeading={"---How many??---"}
        ></SectionTitle>

        <div className="main_user_List_outer_container">
          <div className="main_user_List_inner_container">
            <div className="user_list_title_container">
              <h2>TOTAL USER: {users.length}</h2>
            </div>

            <div>
              <div className="rounded-lg overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead className="cart_list_heaser_container">
                    <tr>
                      <th></th>
                      <th>NAME</th>
                      <th>EMAIL</th>
                      <th>ROLL</th>
                      <th>ACTION</th>
                    </tr>
                  </thead>

                  {users.map((user, index) => (
                    <tbody key={user._id}>
                      {/* row 1 */}
                      <tr>
                        <th className="text-xl ">{index + 1}</th>

                        <td className="text-base text-[#737373] font-[Inter]">
                          {user.name}
                        </td>

                        <td className="text-base text-[#737373] font-[Inter]">
                          {user.email}
                        </td>

                        <th>
                          {user.role === "admin" ? (
                            <span className="text-lg text-[#2cb235]">Admin</span>
                          ) : (
                            <button
                              onClick={() => handeMakeAdmin(user)}
                              className="text-xl bg-[#d1a054] p-4 rounded-lg text-[#ffffff]"
                            >
                              <FaUsers />
                            </button>
                          )}
                        </th>

                        <th>
                          <button
                            onClick={() => handelUseDelete(user._id)}
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

export default AllUser;
