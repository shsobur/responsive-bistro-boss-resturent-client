import "../SingUp/SingUp.css";
import "../../../componentes/AllAuthentication/AllAuthentication.css";
import authImage from "../../../assets/others/authentication2.png";
import ScrollToTop from "../../../componentes/ScrollToTop/ScrollToTop";
import { AuthContext } from "../../../componentes/AuthProvider/AuthProvider";


import { Link, useNavigate } from "react-router-dom";

// React icons
import { CiFacebook } from "react-icons/ci";
import { TiSocialGithubCircular } from "react-icons/ti";
import { IoLogoGoogle } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";

import { useForm } from "react-hook-form";
import { useContext } from "react";
import Swal from "sweetalert2";

const SingUp = () => {
  const {singUpUser} = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    singUpUser(email, password)
    .then(result => {
      const singUpUser = result.user
      console.log (singUpUser);

      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Signed Up successfully"
      });

      navigate("/");
    })
  };

  return (
    <>
      <ScrollToTop></ScrollToTop>

      <div className="main_authentication_section_container">
        <div className="main_authentication_section_bg_container">
          <div id="main_sing_up_section_container">
            <div className="home_icon_up">
              <Link to="/">
                <IoHomeOutline />
              </Link>
            </div>

            <div className="main_authentication_form_container">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="authentication_box_container">
                  <div className="authentication_title_container">
                    <h2>SING UP</h2>
                  </div>

                  <div className="main_authentication_input_section_container">
                    <div className="authentication_input_section_container">
                      <p>Name</p>
                      <input
                        type="text"
                        name="name"
                        placeholder="Type hear"
                        {...register("name", { required: true })}
                      />

                      <div>
                        {errors.name && (
                          <span className="text-red-500 font-medium">
                            Name is required
                          </span>
                        )}
                      </div>
                    </div>

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
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        {...register("password", { required: true })}
                      />

                      <div>
                        {errors.password?.type === "required" && (
                          <span className="text-red-500 font-medium">
                            Password is required
                          </span>
                        )}

                        {errors.password?.type === "minLength" && (
                          <span className="text-red-500 font-medium">
                            Password must be at least 6 characters
                          </span>
                        )}

                        {errors.password?.type === "maxLength" && (
                          <span className="text-red-500 font-medium">
                            Password must be less than 20 characters -_-
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <label htmlFor="101">
                    <div className="submite_button" id="101">
                      <input type="submit" value="Sing Up" id="101" />
                    </div>
                  </label>

                  <div className="authentication_form_text_and_icon_container">
                    <h3>
                      Already registered? Go to{" "}
                      <Link to="/singin">
                        <span className="underline">Sing In</span>
                      </Link>
                    </h3>
                    <p>Or sign up with</p>

                    <div className="social_icons">
                      <IoLogoGoogle />
                      <CiFacebook />
                      <TiSocialGithubCircular />
                    </div>
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

export default SingUp;