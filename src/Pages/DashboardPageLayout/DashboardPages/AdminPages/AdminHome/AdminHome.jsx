import "../AdminHome/AdminHome.css";
import "../../../../../componentes/AllDashboardPageStyle/AllDashboardPageStyle.css";
import { useContext } from "react";
import { AuthContext } from "../../../../../componentes/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../../../Hook/useAxios/useAxios";
import { GiWallet } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { LuChefHat } from "react-icons/lu";
import { FaTruckFast } from "react-icons/fa6";

const AdminHome = () => {

  const { user } = useContext(AuthContext);
  const axiosSecure = useAxios();
  const name = user?.displayName;

  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  return (
    <div className="main_dashboard_page_outer_container">
      <div className="main_dashboard_page_inner_container">
        <div className="main_admin_dashboard_titel_container">
          {name ? <span>Hi, Wellcome back {name}</span> : "Hi, Wellcome back"}
        </div>

        <div className="main_stats_bar_outer_container">
          <div className="main_singel_stats_box_container" id="stats_box-1">
            <div className="stats_icon_container">
              <GiWallet />
            </div>
            <div className="stats_info_container">
              <p>1200</p>
              <span>Revenue</span>
            </div>
          </div>

          <div className="main_singel_stats_box_container" id="stats_box-2">
            <div className="stats_icon_container">
              <FaUsers />
            </div>
            <div className="stats_info_container">
              <p>00{stats?.user}</p>
              <span>Customers</span>
            </div>
          </div>

          <div className="main_singel_stats_box_container" id="stats_box-3">
            <div className="stats_icon_container">
              <LuChefHat />
            </div>
            <div className="stats_info_container">
              <p>00{stats?.menu}</p>
              <span>Products</span>
            </div>
          </div>

          <div className="main_singel_stats_box_container" id="stats_box-4">
            <div className="stats_icon_container">
              <FaTruckFast />
            </div>
            <div className="stats_info_container">
              <p>93</p>
              <span>Orders</span>
            </div>
          </div>
        </div>

        <div className="admin_chart_outer_container">

          <div className="admin_bar_chart_container">
            Working on prosece...
          </div>
          <div className="admin_bar_pai_container"></div>

        </div>
      </div>
    </div>
  );
};

export default AdminHome;
