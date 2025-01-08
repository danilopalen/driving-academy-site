"use client";

import React, { useState } from "react";
import BookingCalendar from "../_components/BookingCalendar";
import { writeUserData } from "../firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutPage from "../_components/CeckoutPage";
import convertToSubcurrency from "../lib/convertToSubcurrency";
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
// Color palette with better contrast ratios
const colors = {
  primary: "#1a56db", // Darker blue for better contrast
  primaryLight: "#e6eeff",
  primaryHover: "#1e429f",
  text: "#1a1a1a", // Near black for main text
  textSecondary: "#4a4a4a", // Dark gray for secondary text
  border: "#d1d1d1",
  borderDark: "#737373",
  background: "#ffffff",
  backgroundSecondary: "#f5f5f5",
  success: "#166534", // Dark green for success text
  successLight: "#ecfdf5", // Light green background
  disabled: "#9ca3af",
  error: "#dc2626",
};

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f8fafc",
    color: "#1f2937",
    padding: "4rem",
  },
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    backgroundColor: colors.background,
    border: `1px solid ${colors.border}`,
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
  },
  header: {
    textAlign: "center",
    marginBottom: "24px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "8px",
    color: colors.text,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: "16px",
  },
  progressBar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    borderBottom: `1px solid ${colors.border}`,
  },
  progressStep: {
    display: "flex",
    alignItems: "center",
  },
  stepCircle: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid",
    fontSize: "14px",
    fontWeight: "bold",
    transition: "all 0.3s ease",
  },
  stepLine: {
    height: "2px",
    width: "100px",
    margin: "0 8px",
    transition: "background-color 0.3s ease",
  },
  content: {
    padding: "24px",
  },
  serviceCard: {
    border: `1px solid ${colors.border}`,
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "16px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    backgroundColor: colors.background,
    ":hover": {
      borderColor: colors.primary,
    },
  },
  serviceCardSelected: {
    border: `2px solid ${colors.primary}`,
    backgroundColor: colors.primaryLight,
  },
  serviceHeader: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  serviceInfo: {
    flex: 1,
  },
  serviceName: {
    fontWeight: "bold",
    color: colors.text,
    marginBottom: "4px",
  },
  serviceDescription: {
    color: colors.textSecondary,
    fontSize: "14px",
  },
  servicePrice: {
    fontWeight: "bold",
    fontSize: "18px",
    color: colors.text,
  },
  inputGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontWeight: "600",
    color: colors.text,
  },
  input: {
    width: "100%",
    padding: "12px",
    border: `1px solid ${colors.border}`,
    borderRadius: "4px",
    fontSize: "16px",
    transition: "border-color 0.3s ease",
    color: colors.text,
    backgroundColor: colors.background,
    ":focus": {
      borderColor: colors.primary,
      outline: "none",
    },
  },
  timeGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
    gap: "8px",
    marginBottom: "24px",
  },
  timeButton: {
    padding: "12px",
    border: `1px solid ${colors.border}`,
    borderRadius: "4px",
    backgroundColor: colors.background,
    cursor: "pointer",
    transition: "all 0.3s ease",
    color: colors.text,
    ":hover": {
      borderColor: colors.primary,
    },
  },
  timeButtonSelected: {
    backgroundColor: colors.primary,
    color: colors.background,
    border: `1px solid ${colors.primary}`,
  },
  navigation: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    borderTop: `1px solid ${colors.border}`,
  },
  button: {
    padding: "12px 24px",
    borderRadius: "4px",
    cursor: "pointer",
    border: "none",
    fontSize: "16px",
    fontWeight: "500",
    transition: "all 0.3s ease",
  },
  backButton: {
    backgroundColor: colors.background,
    border: `1px solid ${colors.border}`,
    color: colors.text,
    ":hover": {
      borderColor: colors.borderDark,
    },
  },
  nextButton: {
    backgroundColor: colors.primary,
    color: colors.background,
    ":hover": {
      backgroundColor: colors.primaryHover,
    },
  },
  disabledButton: {
    backgroundColor: colors.disabled,
    cursor: "not-allowed",
    color: colors.background,
  },
  confirmationBox: {
    backgroundColor: colors.successLight,
    border: `1px solid ${colors.success}`,
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "24px",
    color: colors.success,
  },
  bookingDetails: {
    backgroundColor: colors.backgroundSecondary,
    padding: "20px",
    borderRadius: "8px",
    marginTop: "24px",
    color: colors.text,
  },
  errorText: {
    color: colors.error,
    fontSize: "14px",
    marginTop: "4px",
  },
};

const BookingSystem = () => {
  const [step, setStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const services = [
    {
      id: "class-1",
      name: "Class 1 License",
      description: "For cars and light vehicles",
      price: "$75 (1hour) including GST",
      amount: 75,
    },
    {
      id: "class-2",
      name: "Class 2 License",
      description: "For 2-axle truck or small looking truck or 2T or 4T truck",
      price: "$120 (1hour) including GST",
      amount: 120,
    },
    {
      id: "class-3",
      name: "Class 3 License",
      description: "For medium combination truck and trailer",
      price: "$125 (1hour) including GST",
      amount: 125,
    },
    {
      id: "class-4",
      name: "Class 4 License",
      description: "For vehicles with double axles at the rear or a truck",
      price: "$130 (1hour) including GST",
      amount: 130,
    },
    {
      id: "class-5",
      name: "Class 5 License",
      description: "For semi-trailer or full trailer truck",
      price: "$140 (1hour) including GST",
      amount: 140,
    },
    {
      id: "class-1-mock",
      name: "Class 1 Mock Test",
      description: "Restricted or Full license mock test",
      price: "$75 per hour including GST",
      amount: 75,
    },
    {
      id: "class-1-2hours",
      name: "Class 1 - 2 Hours Lesson",
      description: "2 Hours Lesson",
      price: "$140 (1hour) including GST",
      amount: 140,
    },
    {
      id: "class-1-5hours",
      name: "Class 1 - 5 Hours Package",
      description: "5 Hours Package",
      price: "$340 (1hour) including GST",
      amount: 340,
    },
    {
      id: "class-2-5-mock",
      name: "Class 2 - 5 Mock Test",
      description: "Full license mock test",
      price: "$120 - $140 including GST",
      amount: 140,
    },
    {
      id: "class-2-5hours",
      name: "Class 2 - 5 Hours Package",
      description: "5 lesson package (Class 2. Total of 5 hours)",
      price: "$500 including GST",
      amount: 500,
    },
  ];

  const timeSlots = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  const handleServiceSelect = (value) => {
    setSelectedOption(value);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const bookingData = {
      service: selectedOption,
      date: selectedDate.toString(),
      time: selectedTime,
      ...formData,
    };
    console.log("Booking submitted:", bookingData);
    writeUserData(bookingData);
    setStep(5);
  };

  const renderStep1 = () => (
    <div>
      <div style={styles.header}>
        <h2 style={styles.title}>Select Service</h2>
        <p style={styles.subtitle}>
          Choose the type of service you want to book
        </p>
      </div>
      <div>
        {services.map((service) => (
          <div
            key={service.id}
            style={{
              ...styles.serviceCard,
              ...(selectedOption === service.id && styles.serviceCardSelected),
            }}
            onClick={() => handleServiceSelect(service.id)}
          >
            <div style={styles.serviceHeader}>
              <input
                type="radio"
                checked={selectedOption === service.id}
                onChange={() => handleServiceSelect(service.id)}
              />
              <div style={styles.serviceInfo}>
                <div style={styles.serviceName}>{service.name}</div>
                <div style={styles.serviceDescription}>
                  {service.description}
                </div>
              </div>
              <div style={styles.servicePrice}>{service.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div>
      <style>
        {`::-webkit-calendar-picker-indicator {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 24 24"><path fill="%23bbbbbb" d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"/></svg>');
}`}
      </style>
      <div style={styles.header}>
        <h2 style={styles.title}>Select Date</h2>
        <p style={styles.subtitle}>Choose your preferred date</p>
      </div>
      <div style={styles.inputGroup}>
        <BookingCalendar
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          setSelectedDate={setSelectedDate}
        />
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div>
      <div style={styles.header}>
        <h2 style={styles.title}>Enter Details</h2>
        <p style={styles.subtitle}>Provide your information</p>
      </div>
      <div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Enter your address"
            style={styles.input}
          />
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div>
      <div style={styles.header}>
        <h2 style={styles.title}>Payment Details</h2>
      </div>
      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(
            services.find((s) => s.id === selectedOption)?.amount
          ),
          currency: "nzd",
        }}
      >
        <CheckoutPage
          amount={services.find((s) => s.id === selectedOption)?.amount}
          handleSubmit={handleSubmit}
        />
      </Elements>
    </div>
  );

  const renderStep5 = () => (
    <div>
      <div style={styles.header}>
        <h2 style={styles.title}>Booking Confirmed!</h2>
        <p style={styles.subtitle}>
          Your booking has been successfully confirmed
        </p>
      </div>

      <div style={styles.confirmationBox}>
        Thank you for your booking. We have sent a confirmation email with all
        the details.
      </div>

      <div style={styles.bookingDetails}>
        <h3 style={{ fontWeight: "bold", marginBottom: "12px" }}>
          Booking Details:
        </h3>
        <p>Service: {services.find((s) => s.id === selectedOption)?.name}</p>
        <p>Date: {selectedDate.toString()}</p>
        <p>Time: {selectedTime}</p>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
      </div>
    </div>
  );

  const canProceed = () => {
    switch (step) {
      case 1:
        return selectedOption !== "";
      case 2:
        return selectedDate !== "" && selectedTime !== "";
      case 3:
        return (
          formData.name !== "" &&
          formData.email !== "" &&
          formData.phone !== "" &&
          formData.address !== ""
        );
      default:
        return false;
    }
  };

  const getStepStyle = (stepNumber) => ({
    ...styles.stepCircle,
    borderColor: step >= stepNumber ? "#3b82f6" : "#e0e0e0",
    backgroundColor: step >= stepNumber ? "#f0f7ff" : "white",
    color: step >= stepNumber ? "#3b82f6" : "#666",
  });

  const getLineStyle = (stepNumber) => ({
    ...styles.stepLine,
    backgroundColor: step > stepNumber ? "#3b82f6" : "#e0e0e0",
  });

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Progress indicator */}
        <div style={styles.progressBar}>
          {[1, 2, 3, 4].map((number) => (
            <div key={number} style={styles.progressStep}>
              <div style={getStepStyle(number)}>{number}</div>
              {number < 4 && <div style={getLineStyle(number)} />}
            </div>
          ))}
        </div>

        {/* Step content */}
        <div style={styles.content}>
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
          {step === 4 && renderStep4()}
          {step === 5 && renderStep5()}
        </div>

        {/* Navigation buttons */}
        {step < 5 && (
          <div style={styles.navigation}>
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                style={{ ...styles.button, ...styles.backButton }}
              >
                Back
              </button>
            )}
            <div style={{ flex: 1 }} />
            {
              step < 4 ? (
                <button
                  onClick={() => setStep(step + 1)}
                  disabled={!canProceed()}
                  style={{
                    ...styles.button,
                    ...(canProceed()
                      ? styles.nextButton
                      : styles.disabledButton),
                  }}
                >
                  Next
                </button>
              ) : null
              // step === 4 && (
              //   <button
              //     onClick={handleSubmit}
              //     disabled={!canProceed()}
              //     style={{
              //       ...styles.button,
              //       ...(canProceed()
              //         ? styles.nextButton
              //         : styles.disabledButton),
              //     }}
              //   >
              //     Confirm Booking
              //   </button>
              // )
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingSystem;
