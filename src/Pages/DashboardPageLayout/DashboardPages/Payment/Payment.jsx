import "../Payment/Payment.css";
import "../../../../componentes/AllDashboardPageStyle/AllDashboardPageStyle.css";
import SectionTitle from "../../../../componentes/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm/CheckoutForm";

const Payment = () => {
  // To do__
  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

  return (
    <div className="main_dashboard_page_outer_container">
      <div className="main_dashboard_page_inner_container">

        <SectionTitle
          heading={"PAYMENT"}
          subHeading={"---Let's do---"}
        ></SectionTitle>

        <div>
          <Elements stripe={stripePromise}>
            <CheckoutForm/>
          </Elements>
        </div>

      </div>
    </div>
  );
};

export default Payment;