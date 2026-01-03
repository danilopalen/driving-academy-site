"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import BookingCalendar from "../_components/BookingCalendar";
import { writeUserData } from "../firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import AreaModal from "../_components/AreaModal";
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
    borderRadius: "8px",
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
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  label: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#374151",
  },
  input: {
    padding: "8px 16px",
    border: "1px solid #d1d5db",
    borderRadius: "4px",
    fontSize: "14px",
    width: "100%",
    boxSizing: "border-box",
  },
  termsContainer: {
    backgroundColor: "#f9fafb",
    padding: "16px",
    borderRadius: "4px",
    border: "1px solid #e5e7eb",
    marginTop: "24px",
  },
  termsTitle: {
    fontSize: "16px",
    fontWeight: "500",
    color: "#1f2937",
    marginBottom: "8px",
  },
  termsText: {
    height: "128px",
    overflowY: "auto",
    padding: "8px",
    backgroundColor: "white",
    border: "1px solid #e5e7eb",
    borderRadius: "4px",
    fontSize: "14px",
    color: "#4b5563",
    marginBottom: "16px",
    resize: "vertical",
    overflow: "auto",
  },
  termsList: {
    paddingLeft: "20px",
    margin: "8px 0",
  },
  termsItem: {
    marginBottom: "8px",
  },
  checkboxContainer: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  checkbox: {
    width: "16px",
    height: "16px",
  },
  checkboxLabel: {
    fontSize: "14px",
    color: "#374151",
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

const SERVICES = [
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
    name: "Class 3 License (With Your Own Truck)",
    description: "For medium combination truck and trailer",
    price: "$95 (1hour) including GST",
    amount: 95,
  },
  {
    id: "class-4",
    name: "Class 4 License",
    description: "For vehicles with double axles at the rear or a truck",
    price: "$130 (1hour) including GST",
    amount: 130,
  },
  {
    id: "class-4-with-own-truck",
    name: "Class 4 License (With Your Own Truck)",
    description: "For vehicles with double axles at the rear or a truck",
    price: "$100 (1hour) including GST",
    amount: 100,
  },
  {
    id: "class-5",
    name: "Class 5 License (With Your Own Truck)",
    description: "For semi-trailer or full trailer truck",
    price: "$110 (1hour) including GST",
    amount: 110,
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
    name: "Class 1 (2 Hours Lesson)",
    description: "2 Hours Lesson",
    price: "$140 (1hour) including GST",
    amount: 140,
  },
  {
    id: "class-1-5hours",
    name: "Class 1 (5 Hours Package)",
    description: "5 Hours Package",
    price: "$340 (5hours) including GST",
    amount: 340,
  },
  {
    id: "class-2-mock",
    name: "Class 2 Mock Test",
    description: "Class 2 Full license mock test",
    price: "$120 per hour including GST",
    amount: 120,
  },
  {
    id: "class-2-mock-with-truck",
    name: "Class 2 Mock Test (With Your Own Truck)",
    description: "Class 2 Full license mock test  (With Your Own Truck)",
    price: "$90 per hour including GST",
    amount: 90,
  },
  {
    id: "class-2-5hours",
    name: "Class 2 (5 Hours Package)",
    description: "5 lesson package (Class 2. Total of 5 hours)",
    price: "$500 (5hours) including GST",
    amount: 500,
  },
  {
    id: "class-3-mock",
    name: "Class 3 Mock Test (With Your Own Truck)",
    description: "Class 3 Full license mock test (With Your Own Truck)",
    price: "$95 per hour including GST",
    amount: 95,
  },
  {
    id: "class-4-mock",
    name: "Class 4 Mock Test",
    description: "Class 4 Full license mock test",
    price: "$130 per hour including GST",
    amount: 130,
  },
  {
    id: "class-4-mock-with-truck",
    name: "Class 4 Mock Test (With Your Own Truck)",
    description: "Class 4 Full license mock test  (With Your Own Truck)",
    price: "$100 per hour including GST",
    amount: 100,
  },
  {
    id: "class-5-mock",
    name: "Class 5 Mock Test (With Your Own Truck)",
    description: "Class 5 Full license mock test  (With Your Own Truck)",
    price: "$110 per hour including GST",
    amount: 110,
  },
];

const BookingSystem = () => {
  const searchParams = useSearchParams();
  const service = searchParams.get("service");
  const region = searchParams.get("region");
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

  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => router.push(`/`);
  const handleContinue = (region) => {
    setIsOpen(false);
    router.push(`/book?region=${region}`);
  };

  const [services, setServices] = useState(SERVICES);
  const [validDays, setValidDays] = useState([0, 6]);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [formattedDate, setFormattedDate] = useState(undefined);

  useEffect(() => {
    if (selectedDate && selectedTime) {
      const dateTime = new Date(
        selectedDate.toString().replace("00:00:00", `${selectedTime}:00`)
      );
      const localeString = dateTime.toLocaleString("en-NZ", {
        timeZone: "Pacific/Auckland",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
      });
      setFormattedDate(localeString);
    }
  }, [selectedDate, selectedTime]);

  // useEffect(() => {
  // if (region?.trim() === "Auckland Central") {
  //   setServices(SERVICES.filter(({ id }) => id === "class-1"));
  //   setSelectedOption("class-1");
  //   setValidDays([3]);
  // } else {
  //   console.log("🚀 ~ useEffect ~ region?.trim:", region?.trim());
  //   setServices(SERVICES);
  //   if (region?.trim() === "Auckland Central West") {
  //     setValidDays([1, 2, 6]);
  //   } else if (region?.trim() === "Auckland Central East") {
  //     setValidDays([4, 5]);
  //   } else if (region?.trim() === "North Shore") {
  //     setValidDays([4]);
  //   } else if (region?.trim() === "East and South Auckland") {
  //     setValidDays([3, 5, 0]);
  //   } else {
  //     setValidDays([0, 6]);
  //   }
  // }
  // }, [region]);

  useEffect(() => {
    if (service) {
      setSelectedOption(service);
    } else {
      setIsOpen(true);
    }
  }, [service]);

  const handleServiceSelect = (value) => {
    setSelectedOption(value);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    const bookingData = {
      service: services.find((s) => s.id === selectedOption)?.name,
      date: selectedDate.toString(),
      time: selectedTime,
      ...formData,
    };
    const transaction_id = Date.now();
    writeUserData(bookingData, transaction_id);
    setStep(5);

    console.log("window.gtag", window.gtag);
    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-11554448291/6iAYCMjkpYMaEKPHy4Ur",
        transaction_id,
        value: services.find((s) => s.id === selectedOption)?.amount,
        currency: "NZD",
      });
    }
    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const data = await response.json();

      if (response.ok) {
        setEmailSent(true);
      } else {
        throw new Error(data.message || "Failed to process booking");
      }
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error.message);
    }
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
          validDays={validDays}
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          setSelectedDate={setSelectedDate}
        />
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Enter Details</h2>
        <p style={styles.subtitle}>Provide your information</p>
      </div>

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

      <div style={styles.termsContainer}>
        <h3 style={styles.termsTitle}>Terms and Conditions</h3>
        <div style={styles.termsText}>
          <p style={{ fontWeight: 700 }}>Cancellation and Change Policy</p>
          <ul style={styles.termsList}>
            <li style={styles.termsItem}>
              2 or more working days prior to the driving lesson: No
              Cancellation Fee/Full refund if pre-paid. *Please note that the
              booking fee and or any other service fee, including the processing
              fee, will be deducted from your pre-paid amount when issuing a
              refund.
            </li>
            <li style={styles.termsItem}>
              1 working day prior to the driving lesson (Including less than 24
              hours notice): 100% Cancellation Fee/No refund if pre-paid.
            </li>
          </ul>
          <p>
            JDM Driving Academy enforces this policy to ensure that the
            instructor’s time is respected and that the school can fill the time
            slot with another student, preventing lost income.
          </p>
          <p style={{ marginTop: "5px" }}>
            Refunds will not be given for lessons cancelled one working day
            prior to the driving lesson (Including less than 24 hours' notice)
            or for no-shows. Students must arrive on time for each lesson and
            are expected to respect the instructor’s time and efforts. If you
            arrive within 10 minutes of your scheduled booking time, the Driving
            Lesson will be shortened by that amount of time at the driving
            instructor's discretion. E.g., If you arrive at your booking 5
            minutes late, your booking will be shortened to 55 minutes long. If
            you arrive more than 10 minutes late to your agreed booking time, it
            will result in a lesson cancellation and incur a cancellation fee
            equal to the lesson fee.
          </p>
          <p style={{ marginTop: "5px", fontWeight: 700 }}>
            Booking Errors and Cancellations
          </p>
          <p style={{ marginTop: "5px" }}>
            If a student books a lesson on the wrong date, immediately requests
            a refund or cancels multiple lessons, JDM Driving Academy may issue
            a refund after deducting the booking fee and/or any other payment
            processing service fee. This deduction covers the non-refundable
            transaction fee incurred by the school.
          </p>
          <p style={{ marginTop: "5px", fontWeight: 700 }}>Code of Conduct</p>
          <p style={{ marginTop: "5px" }}>
            Students are expected to adhere to a code of conduct during lessons,
            which includes the following:
          </p>
          <ul style={styles.termsList}>
            <li style={styles.termsItem}>
              Punctuality: Students must arrive on time for each lesson.
            </li>
            <li style={styles.termsItem}>
              Respect: Students are expected to respect the instructor and
              follow their instructions.
            </li>
            <li style={styles.termsItem}>
              Adherence to Traffic Laws: Students must follow all traffic laws
              and signs.
            </li>
            <li style={styles.termsItem}>
              Responsible Driving Practices: Students must demonstrate safe and
              responsible driving practices at all times.
            </li>
          </ul>
          <p style={{ marginTop: "5px", fontWeight: 700 }}>
            Lesson Requirements
          </p>
          <p style={{ marginTop: "5px" }}>
            To take lessons with JDM Driving Academy, students must meet the
            following requirements:
          </p>
          <ul style={styles.termsList}>
            <li style={styles.termsItem}>
              Have a valid New Zealand driver’s license.
            </li>
            <li style={styles.termsItem}>Be a minimum of 16 years of age.</li>
          </ul>
          <p style={{ marginTop: "5px" }}>
            JDM Driving Academy reserves the right to refuse to teach students
            who appear to be under the influence of drugs or alcohol. In such
            cases, any lesson fees charged will not be waived.
          </p>
          <p style={{ marginTop: "5px" }}>
            The student will be liable for any costs arising from any traffic or
            speed camera infringements resulting from failing to follow
            instructions from the instructor.
          </p>
          <p style={{ marginTop: "5px", fontWeight: 700 }}>
            Vehicle Provision and Use
          </p>
          <p style={{ marginTop: "5px" }}>
            For instruction, JDM Driving Academy will provide the student with
            an automatic transmission car fitted with dual foot controls that
            meet current Warrant of Fitness and New Zealand Transport Agency
            requirements. The car will be insured for students under
            instruction.
          </p>
          <p style={{ marginTop: "5px" }}>
            If the student wishes to be taught in their own or family car, it
            must meet the Warrant of Fitness and registration requirements and
            have appropriate insurance cover. If the student is not the
            registered owner, then written permission must be obtained from the
            registered owner and given to the instructor before the lesson
            commences. Note: JDM Driving Academy or JDM Driving Academy’s
            instructor in the student’s vehicle will not be liable for any
            damage, costs, fuel, excess insurance fees, or fines resulting from
            any accident or traffic offence that might occur during the period
            of instruction whilst the student is driving the vehicle.
          </p>
          <p style={{ marginTop: "5px", fontWeight: 700 }}>
            Instructor Credentials
          </p>
          <p style={{ marginTop: "5px" }}>
            The instructor will be registered with the New Zealand Transport
            Agency and will have a driving instructor endorsement (I) on their
            driving license for the vehicle class being taught. Students are
            welcome to inspect the instructor’s driving license prior to taking
            lessons.
          </p>
          <p style={{ marginTop: "5px", fontWeight: 700 }}>
            Privacy Requirements
          </p>
          <p style={{ marginTop: "5px" }}>
            For auditing purposes, the New Zealand Transport Agency requires
            that student records be held on file for 12 months after instruction
            was provided. All student information held by JDM Driving Academy
            remains confidential and will not be disclosed to unauthorised
            parties.
          </p>
          <p style={{ marginTop: "5px", fontWeight: 700 }}>Minor Students</p>
          <p style={{ marginTop: "5px" }}>
            If the student is less than 18 years of age, these Terms and
            Conditions will be between the parent/caregiver of the student and
            JDM Driving Academy, and the student will additionally be required
            to agree to these Terms and Conditions.
          </p>
          <p style={{ marginTop: "5px", fontWeight: 700 }}>
            Termination of Agreement
          </p>
          <p style={{ marginTop: "5px" }}>
            Either party may terminate this agreement with written notice if the
            other party breaches the terms and conditions of this agreement. JDM
            Driving Academy may terminate the agreement if the student
            repeatedly fails to show up for lessons or demonstrates unsafe
            driving practices. The student may terminate the agreement if they
            are dissatisfied with the quality of instruction.
          </p>
          <p style={{ marginTop: "5px" }}>
            By signing up for lessons with JDM Driving Academy, you agree to
            abide by these terms and conditions.
          </p>
        </div>
        <div style={styles.checkboxContainer}>
          <input
            type="checkbox"
            name="acceptTerms"
            id="acceptTerms"
            checked={acceptTerms}
            onChange={() => setAcceptTerms((prev) => !prev)}
            style={styles.checkbox}
          />
          <label htmlFor="acceptTerms" style={styles.checkboxLabel}>
            I accept the terms and conditions
          </label>
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
        {`Thank you for your booking. We ${
          emailSent ? "have sent" : "will send"
        } a confirmation email with all
        the details.`}
      </div>

      <div style={styles.bookingDetails}>
        <h3 style={{ fontWeight: "bold", marginBottom: "12px" }}>
          Booking Details:
        </h3>
        <p>Lesson: {services.find((s) => s.id === selectedOption)?.name}</p>
        <p>Date: {formattedDate?.split(", ")?.[0]}</p>
        <p>Time: {formattedDate?.split(", ")?.[1]}</p>
        <p>Location: {formData.address}</p>
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
          formData.address !== "" &&
          acceptTerms
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
      {isOpen ? (
        <AreaModal
          isOpen={isOpen}
          onClose={handleClose}
          onContinue={(region) => handleContinue(region)}
        />
      ) : (
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
                    {step === 3 ? "Proceed to payment" : "Next"}
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
      )}
    </div>
  );
};

const Book = () => {
  return (
    <Suspense>
      <BookingSystem />
    </Suspense>
  );
};
export default Book;
