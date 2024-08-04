import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <div className="main_footer_container">
      <div className="main_footer_content_container">

        <div className="footer_conatact_container">

          <div className="footer_contact_inner_container">
            <h2
              data-aos="flip-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              CONTACT US
            </h2>
            <p>123 ABS Street, Uni 21, Bangladesh</p>
            <p>+88 123456789</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>

        </div>

        <div className="footer_follow_container">

          <div className="footer_follow_inner_container">
            <h2
              data-aos="flip-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              Follow US
            </h2>
            <p>Join us on social media</p>

            <div className="footer_social_icons">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>

        </div>

      </div>

      <div className="main_copyright_container">
        <h1>Copyright © CulinaryCloud. All rights reserved.</h1>
      </div>

    </div>
  );
};

export default Footer;
