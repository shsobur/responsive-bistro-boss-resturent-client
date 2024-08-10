import SectionTitle from "../../../componentes/SectionTitle/SectionTitle";
import "../ContactMessage/ContactMessage.css";

const ContactMessage = () => {
  return (
    <div className="main_contact_message_container">
      <SectionTitle
        heading={"CONTACT FORM"}
        subHeading={"---Send Us a Message---"}
      ></SectionTitle>

      <div className="main_massage_container">
        <div className="massage_box_container" id="box-1">
          <p>Name*</p>
          <input type="text" name="name" placeholder="Enter your name" />
        </div>

        <div className="massage_box_container" id="box-2">
          <p>Email*</p>
          <input type="email" name="email" placeholder="Enter your email" />
        </div>

        <div className="massage_box_container" id="box-3">
          <p>Phone*</p>
          <input type="text" name="phone" placeholder="Enter your phone" />
        </div>

        <div className="massage_box_container" id="box-4">
          <p>Message*</p>
          <textarea placeholder="Write your message here"></textarea>
        </div>

        <div className="message_sub_container">
          <input type="submit" value="Send Message" />
        </div>

      </div>
    </div>
  );
};

export default ContactMessage;
