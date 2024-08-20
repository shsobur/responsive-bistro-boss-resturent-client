import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../componentes/AuthProvider/AuthProvider";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000"
})

const useAxios = () => {
  const navigate = useNavigate();
  const {logOut} = useContext(AuthContext);

  axiosSecure.interceptors.request.use(function (config) {

    const token = localStorage.getItem("access-token");
    config.headers.authorization = `Bearer ${token}`
    return config;
  }, function (error ) {
    return Promise.reject(error);
  })

  // Intercdptors for 401 and 403__
  axiosSecure.interceptors.response.use(function (response) {
    return response;
  }, async (error) => {
    const status = error.response.status;
    if(status === 401 || status === 403) {
      await logOut();
      navigate("/singin")
    }

    return Promise.reject(error);
  })

  return axiosSecure;
};

export default useAxios;