import "../SingIn/SingIn.css";
import "../../../componentes/AllAuthentication/AllAuthentication.css";
import { IoLogoGoogle } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";
import { TiSocialGithubCircular } from "react-icons/ti";
import { Link } from "react-router-dom";

import authImage from "../../../assets/others/authentication2.png";
import { IoHomeOutline } from "react-icons/io5";
import ScrollToTop from "../../../componentes/ScrollToTop/ScrollToTop";

const SingIn = () => {
  return (
    <>
      <ScrollToTop></ScrollToTop>

      <div className="main_authentication_section_container">
      <div className="main_authentication_section_bg_container">
        <div id="main_sing_in_section_container">

        <div className="home_icon_in">
            <Link to="/"><IoHomeOutline /></Link>
          </div>

          <div className="main_authentication_form_container">
            <form>
              <div className="authentication_box_container">
                <div className="authentication_title_container">
                  <h2>SING IN</h2>
                </div>

                <div className="main_authentication_input_section_container">
                  <div className="authentication_input_section_container">
                    <p>Name</p>
                    <input type="text" name="name" placeholder="Type hear" />
                  </div>

                  <div className="authentication_input_section_container">
                    <p>Email</p>
                    <input type="email" name="email" placeholder="Type hear" />
                  </div>

                  <div className="authentication_input_section_container">
                    <p>Password</p>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>

                <label htmlFor="102">
                  <div className="submite_button" id="102">
                    <input type="submit" value="Sing In" id="102" />
                  </div>
                </label>

                <div className="authentication_form_text_and_icon_container">
                  <h3>
                    Already registered? Go to <Link to="/singup"><span className="underline">Sing Up</span></Link>
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
              <img src={authImage}/>
            </div>

          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SingIn;
