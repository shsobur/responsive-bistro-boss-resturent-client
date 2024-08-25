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

        <div className="w-full text-center pt-10">
          {
            name ? <span className="font-semibold text-4xl text-center ">Hello, {name} Wellcome back</span> : "Wellcome back"
          }
        </div>

        <div>
          <h2 className="text-3xl text-center mt-80">Working on process...</h2>
        </div>

      </div>
    </div>
  );
};

export default UserHome;