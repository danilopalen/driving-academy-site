"use client";

// pages/checkout.js
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutPage from "../_components/CeckoutPage";
import convertToSubcurrency from "../lib/convertToSubcurrency";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function Checkout() {
  const amount = 49.99;
  //   const handleCheckout = async () => {
  //     const stripe = await stripePromise;
  //     const response = await fetch("/api/checkout-session/route", {
  //       method: "POST",
  //     });
  //     const session = await response.json();
  //     await stripe.redirectToCheckout({ sessionId: session.id });
  //   };

  return (
    <div className="page">
      <style>
        {`
          .page {
            min-height: 100vh;
            background-color: #f8fafc;
            color: #1f2937;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
          }
          .header {
            margin-bottom: 2rem;
        }`}
      </style>
      <div className="container">
        <Elements
          stripe={stripePromise}
          options={{
            mode: "payment",
            amount: convertToSubcurrency(amount),
            currency: "usd",
          }}
        >
          <CheckoutPage amount={amount} />
        </Elements>
      </div>
    </div>
  );
}
