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
        <div id="box-1">
          <p>Name*</p>
          <input type="text" name="name" />
        </div>

        <div id="box-2">
          <p>Email*</p>
          <input type="email" name="email" />
        </div>

        <div id="box-3">
          <p>Phone*</p>
          <input type="text" name="phone" />
        </div>

        <div id="box-4">
          <p>Message*</p>
          <input type="text" name="message" />
        </div>

      </div>
    </div>
  );
};

export default ContactMessage;