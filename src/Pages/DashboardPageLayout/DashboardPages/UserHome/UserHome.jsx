import "../UserHome/UserHome.css";
import "../../../../componentes/AllDashboardPageStyle/AllDashboardPageStyle.css";
import { useContext } from "react";
import { AuthContext } from "../../../../componentes/AuthProvider/AuthProvider";
const UserHome = () => {
  const {user} = useContext(AuthContext);
  const name =  user?.displayName;


  return (
    <div className="main_dashboard_page_outer_container">
      <div className="main_dashboard_page_inner_container">

        <div>
          {
            name ? <span className="font-semibold text-4xl text-center mt-52">Hello {name}, Wellcome back</span> : "Wellcome back"
          }
        </div>

      </div>
    </div>
  );
};

export default UserHome;