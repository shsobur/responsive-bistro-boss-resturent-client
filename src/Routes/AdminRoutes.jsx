import { useContext } from "react";
import useAdmin from "../Hook/useAdmin/useAdmin";
import { AuthContext } from "../componentes/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoutes = (children) => {
  const [isAdmin, isAdminLoading] = useAdmin();
  const {user, loding} = useContext(AuthContext);
  const location = useLocation();

  if (loding || isAdminLoading) {
    return (
      <div className="h-screen flex items-center flex-col justify-center">
        <div className="loading loading-dots loading-lg"></div>
        <p>Loading Please wait...</p>
      </div>
    )
  }

  if (user && isAdmin) {
    return children
  }

  return <Navigate to="/singin" state={{from: location}} replace ></Navigate>;
};

export default AdminRoutes;