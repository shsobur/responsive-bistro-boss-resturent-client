import { FaLocationDot } from "react-icons/fa6";
import SectionTitle from "../../../componentes/SectionTitle/SectionTitle";
import "../Location/Location.css";
import { MdPhoneInTalk } from "react-icons/md";
import { IoMdClock } from "react-icons/io";

const Location = () => {
  return (
    <div className="main_contact_location_container">
      <SectionTitle
        heading={"OUR LOCATION"}
        subHeading={"---Visit Us---"}
      ></SectionTitle>

      <div className="main_contact_location_card_info_container">

        <div className="main_location_single_cart_container">
          <div className="main_location_single_cart_inner_container">

            <div className="location_card_top_icon_container">
              <p><MdPhoneInTalk /></p>
            </div>
            <div className="location_card_bottom_border_container">
              <div className="location_card_inner_text_container">
                <h3>PHONE</h3>
                <p>+880 1787592274</p>
              </div>
            </div>

          </div>
        </div>

        <div className="main_location_single_cart_container">
          <div className="main_location_single_cart_inner_container">

            <div className="location_card_top_icon_container">
              <p><FaLocationDot /></p>
            </div>
            <div className="location_card_bottom_border_container">
              <div className="location_card_inner_text_container">
                <h3>ADDRESS</h3>
                <p>Sodor-road, Bhola-Sodor, Bhola</p>
              </div>
            </div>

          </div>
        </div>

        <div className="main_location_single_cart_container">
          <div className="main_location_single_cart_inner_container">

            <div className="location_card_top_icon_container">
              <p><IoMdClock /></p>
            </div>
            <div className="location_card_bottom_border_container">
              <div className="location_card_inner_text_container">
                <h3>WORKING HOURS</h3>
                <p>Mon - Fri: 08:00 - 22:00</p>
                <p>Sat - Sun: 10:00 - 23:00</p>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};

export default Location;