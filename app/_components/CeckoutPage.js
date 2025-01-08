"use client";

import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import convertToSubcurrency from "../lib/convertToSubcurrency";

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "4rem 0 0 0",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  loaderContainer: {
    display: "flex",
    alignItems: "center",
    padding: "4rem 0 0 0",
    justifyContent: "center",
  },
  loader: {
    display: "inline-block",
    width: "2rem",
    height: "2rem",
    border: "4px solid currentColor",
    borderRightColor: "transparent",
    borderRadius: "50%",
    animation: "spin 1.5s linear infinite",
    color: "#000",
  },
  loaderText: {
    position: "absolute",
    margin: "-1px",
    height: "1px",
    width: "1px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    border: 0,
    padding: 0,
    clip: "rect(0, 0, 0, 0)",
  },
  checkoutForm: {
    backgroundColor: "white",
    padding: "0.5rem",
    borderRadius: "0.375rem",
    width: "100%",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
  },
  errorMessage: {
    marginTop: "0.5rem",
    color: "#ef4444",
  },
  submitButton: {
    width: "100%",
    padding: "1.25rem",
    marginTop: "0.5rem",
    backgroundColor: "black",
    color: "white",
    borderRadius: "0.375rem",
    fontWeight: 700,
    border: "none",
    cursor: "pointer",
  },
  submitButtonDisabled: {
    opacity: 0.5,
    cursor: "not-allowed",
  },
  submitButtonProcessing: {
    animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
  },
};

// Add keyframe animations to the document
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = `
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
  `;
  document.head.appendChild(styleSheet);
}

const CheckoutPage = ({ amount, handleSubmit }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [amount]);

  const handleSubmitPayment = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${window.location.origin}/book?amount=${amount}`,
      },
      redirect: "if_required",
    });

    if (error) {
      setErrorMessage(error.message);
    }

    setLoading(false);
    handleSubmit();
  };

  if (!clientSecret || !stripe || !elements) {
    return (
      <div style={styles.loaderContainer}>
        <div style={styles.loader} role="status">
          <span style={styles.loaderText}>Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <form onSubmit={handleSubmitPayment} style={styles.checkoutForm}>
          {clientSecret && <PaymentElement />}

          {errorMessage && (
            <div style={styles.errorMessage}>{errorMessage}</div>
          )}

          <button
            disabled={!stripe || loading}
            style={{
              ...styles.submitButton,
              ...((!stripe || loading) && styles.submitButtonDisabled),
              ...(loading && styles.submitButtonProcessing),
            }}
          >
            {!loading ? `Pay $${amount}` : "Processing..."}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
