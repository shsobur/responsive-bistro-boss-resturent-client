import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "../CheckoutForm/CheckoutForm.css";
import { useContext, useEffect, useState } from "react";
import useCart from "../../../../../Hook/useCart/useCart";
import { AuthContext } from "../../../../../componentes/AuthProvider/AuthProvider";
import useAxios from "../../../../../Hook/useAxios/useAxios";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxios();
  const {user} = useContext(AuthContext);
  const [cart] = useCart();
  const [error, setError] = useState(null);
  const [clientSecret, setClientSecret] = useState();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  console.log(clientSecret);

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", {price: totalPrice})
    .then(res => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    })
  }, [axiosSecure, totalPrice]);

  const handleSubmite = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: "card",
      card,
    })

    if(error) {
      setError(error.message);
      console.log("Payment error", error);
    }
    else {
      setError("");
      console.log("Payment method", paymentMethod);
    }

    // conform payment
    const { paymentIntent, error:confirmErro } = stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: user?.displayName || "anonymous",
          email: user?.email || "anonymous"
        }
      }
    })

    if(confirmErro) {
      console.log("confirmError");
    }
    else{
      console.log("payment intent", paymentIntent);
    }

  };

  return (
    <>
      <div className="main_form_outer_container">
        <div className="main_form_inner_container">
          <form onSubmit={handleSubmite}>
            <CardElement>
              option=
              {{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            </CardElement>

            <div  className="pay_button">
              <button type="submit" disabled={!stripe || !clientSecret}>
                Pay
              </button>
            </div>
            <p className="text-red-600 text-center mt-3">{error}</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;
