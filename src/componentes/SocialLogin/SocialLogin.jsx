import { useContext } from "react";
import { PiFacebookLogoBold, PiGoogleLogoBold } from "react-icons/pi";
import { TbBrandGithub } from "react-icons/tb";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosPublic from "../../Hook/useAxiosPublic/useAxiosPublic";

const SocialLogin = () => {
  const {googleSingUp,} = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic()

  const from = location.state?.from?.pathname || "/";

  const handelGoogleSingUp = () => {
    googleSingUp()
    .then(result => {
      const googleSingUpUser = result.user
      console.log(googleSingUpUser);

      const userInfo = {
        name: result.user?.displayName,
        email: result.user?.email
      }

      axiosPublic.post("/user", userInfo)
      .then(res => {
        console.log(res.data)
        navigate(from, {replace: true});
      })

    })
    .catch(error => {
      console.log(error);
    })

  }

  return (
    <div className="social_icons">
      <div onClick={handelGoogleSingUp}>
        <PiGoogleLogoBold />
      </div>
      <PiFacebookLogoBold />
      <TbBrandGithub />
    </div>
  );
};

export default SocialLogin;
