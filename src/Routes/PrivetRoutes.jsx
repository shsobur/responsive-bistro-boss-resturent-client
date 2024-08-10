import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../componentes/AuthProvider/AuthProvider";

const PrivetRoutes = ({children}) => {
  const {user, loding} = useContext(AuthContext);
  const location = useLocation();

  if (loding) {
    return (
      <div className="h-screen flex items-center flex-col justify-center">
        <div className="loading loading-dots loading-lg"></div>
        <p>Loading Please wait...</p>
      </div>
    )
  }

  if (user) {
    return children
  }

  return <Navigate to="/singin" state={{from: location}} replace ></Navigate>
};

export default PrivetRoutes;