import "../SingIn/SingIn.css";
import "../../../componentes/AllAuthentication/AllAuthentication.css";

// React icons
import { Link, useLocation, useNavigate } from "react-router-dom";

import authImage from "../../../assets/others/authentication2.png";
import { IoHomeOutline } from "react-icons/io5";
import ScrollToTop from "../../../componentes/ScrollToTop/ScrollToTop";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../../componentes/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../../../componentes/SocialLogin/SocialLogin";

const SingIn = () => {
  const { singInUser } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [pass, setPass] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/"

  const handelShowPass = () => {
    setPass(!pass);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    singInUser(email, password)
      .then((result) => {
        const singInUser = result.user;
        console.log(singInUser);

        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });

        navigate(from, {replace: true});
      })

      .catch((error) => {
        console.log(error);
        setError("invalid! username or password, please try again");
      });

  };

  return (
    <>
      <ScrollToTop></ScrollToTop>

      <Helmet>
        <title>Bistro Boss Restaurant | Sing In</title>
      </Helmet>

      <div className="main_authentication_section_container">
        <div className="main_authentication_section_bg_container">
          <div id="main_sing_in_section_container">
            <div className="home_icon_in">
              <Link to="/">
                <IoHomeOutline />
              </Link>
            </div>

            <div className="main_authentication_form_container">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="authentication_box_container">
                  <div className="authentication_title_container">
                    <h2>SING IN</h2>
                  </div>

                  <div className="main_authentication_input_section_container">
                    <div className="authentication_input_section_container">
                      <p>Email</p>
                      <input
                        type="email"
                        name="email"
                        placeholder="Type hear"
                        {...register("email", { required: true })}
                      />
                      <div>
                        {errors.email && (
                          <span className="text-red-500 font-medium">
                            Email is required
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="authentication_input_section_container">
                      <p>Password</p>
                      <input
                        type={pass ? "text" : "password"}
                        name="password"
                        placeholder="Enter your password"
                        {...register("password", { required: true })}
                      />
                      <div>
                        {errors.password && (
                          <span className="text-red-500 font-medium">
                            Password is required
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="password_cheackbox">
                      <input onClick={handelShowPass} type="checkbox" name="checkbox" id="103" value="value"/>
                      <label htmlFor="103">Show Password</label>
                    </div>

                  </div>

                  <label htmlFor="102">
                    <div className="submite_button" id="102">
                      <input type="submit" value="Sing In" id="102" />
                    </div>
                  </label>

                  <div>
                    <span className="mt-2 text-red-600">{error}</span>
                  </div>

                  <div className="authentication_form_text_and_icon_container">
                    <h3>
                      Already registered? Go to{" "}
                      <Link to="/singup">
                        <span className="underline">Sing Up</span>
                      </Link>
                    </h3>
                    <p>Or sign up with</p>
                    <SocialLogin></SocialLogin>
                  </div>
                </div>
              </form>
            </div>

            <div className="main_authentication_image_container">
              <div className="main_authentication_image_inner_container">
                <img src={authImage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingIn;
