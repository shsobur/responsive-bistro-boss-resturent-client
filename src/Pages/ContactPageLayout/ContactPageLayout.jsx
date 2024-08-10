import { Helmet } from "react-helmet-async";
import ContactBaner from "./ContactBaner/ContactBaner";
import Location from "./Location/Location";
import ScrollToTop from "../../componentes/ScrollToTop/ScrollToTop";
import ContactMessage from "./ContactMessage/ContactMessage";

const ContactPageLayout = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss Restaurant | Contact</title>
      </Helmet>

      <ScrollToTop></ScrollToTop>

      <ContactBaner></ContactBaner>
      <Location></Location>
      <ContactMessage></ContactMessage>
    </div>
  );
};

export default ContactPageLayout;