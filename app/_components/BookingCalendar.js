import React, { useState } from "react";

const BookingCalendar = ({
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const timeSlots = [
    { time: "09:00", disabled: true },
    { time: "10:00", disabled: false },
    { time: "11:00", disabled: false },
    { time: "13:00", disabled: false },
    { time: "14:00", disabled: true },
    { time: "15:00", disabled: true },
  ];

  const daysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const firstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const isValidDay = (date) => {
    console.log("🚀 ~ isValidDay ~ date:", date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Check if date is in the past
    if (date < today) {
      return false;
    }

    // Check if it's Monday-Thursday
    const day = date.getDay();
    return day >= 1 && day <= 4;
  };

  const generateCalendar = () => {
    const days = daysInMonth(currentMonth);
    const firstDay = firstDayOfMonth(currentMonth);
    const calendar = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      calendar.push(null);
    }

    // Add the days of the month
    for (let day = 1; day <= days; day++) {
      const date = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        day
      );
      calendar.push(date);
    }

    return calendar;
  };

  const handleDateSelect = (date) => {
    if (date && isValidDay(date)) {
      setSelectedDate(date);
      setSelectedTime(null);
      setBookingConfirmed(false);
    }
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setBookingConfirmed(false);
  };

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      setBookingConfirmed(true);
    }
  };

  const changeMonth = (increment) => {
    const newDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + increment,
      1
    );
    const today = new Date();

    // Don't allow navigation to past months
    if (
      increment < 0 &&
      newDate < new Date(today.getFullYear(), today.getMonth(), 1)
    ) {
      return;
    }

    setCurrentMonth(newDate);
    setSelectedDate(null);
    setSelectedTime(null);
    setBookingConfirmed(false);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const styles = {
    container: {
      maxWidth: "800px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
    },
    button: {
      padding: "8px 16px",
      backgroundColor: "#007bff",
      color: "white",
      borderWidth: "0",
      borderStyle: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    disabledButton: {
      padding: "8px 16px",
      backgroundColor: "#cccccc",
      color: "white",
      borderWidth: "0",
      borderStyle: "none",
      borderRadius: "4px",
      cursor: "not-allowed",
    },
    calendar: {
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
      gap: "8px",
      marginBottom: "20px",
    },
    dayHeader: {
      textAlign: "center",
      padding: "8px",
      backgroundColor: "#f0f0f0",
      fontWeight: "bold",
    },
    day: {
      padding: "8px",
      textAlign: "center",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "#ddd",
      cursor: "pointer",
      backgroundColor: "white",
    },
    selectedDay: {
      backgroundColor: "#007bff",
      color: "white",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "#007bff",
    },
    invalidDay: {
      backgroundColor: "#f8f9fa",
      color: "#ccc",
      cursor: "not-allowed",
    },
    timeGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "8px",
      marginTop: "20px",
    },
    timeSlot: {
      padding: "8px",
      textAlign: "center",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "#e0e0e0",
      borderRadius: "4px",
      cursor: "pointer",
      backgroundColor: "#fff",
      color: "#333",
      transition: "all 0.2s ease",
    },
    timeSlotHover: {
      backgroundColor: "#e3f2fd",
      borderColor: "#90caf9",
    },
    selectedTime: {
      backgroundColor: "#bbdefb",
      borderColor: "#64b5f6",
      color: "#1565c0",
    },
    confirmation: {
      marginTop: "20px",
      padding: "16px",
      backgroundColor: "#d4edda",
      color: "#155724",
      borderRadius: "4px",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "#c3e6cb",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button
          style={
            new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1) <=
            new Date(new Date().getFullYear(), new Date().getMonth(), 1)
              ? styles.disabledButton
              : styles.button
          }
          onClick={() => changeMonth(-1)}
          disabled={
            new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1) <=
            new Date(new Date().getFullYear(), new Date().getMonth(), 1)
          }
        >
          Previous Month
        </button>
        <h2>
          {currentMonth.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </h2>
        <button style={styles.button} onClick={() => changeMonth(1)}>
          Next Month
        </button>
      </div>

      <div style={styles.calendar}>
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} style={styles.dayHeader}>
            {day}
          </div>
        ))}

        {generateCalendar().map((date, index) => {
          if (!date) {
            return <div key={`empty-${index}`} style={styles.day}></div>;
          }

          const isSelected =
            selectedDate && date.toDateString() === selectedDate.toDateString();
          const isValid = isValidDay(date);

          return (
            <div
              key={date.toDateString()}
              style={{
                ...styles.day,
                ...(isSelected ? styles.selectedDay : {}),
                ...(!isValid ? styles.invalidDay : {}),
              }}
              onClick={() => handleDateSelect(date)}
            >
              {date.getDate()}
            </div>
          );
        })}
      </div>

      {selectedDate && (
        <div>
          <h3>Select Time</h3>
          <div style={styles.timeGrid}>
            {timeSlots.map(({ time, disabled }) => (
              <button
                disabled={disabled}
                key={time}
                style={
                  disabled
                    ? styles.disabledButton
                    : {
                        ...styles.timeSlot,
                        ...(selectedTime === time ? styles.selectedTime : {}),
                      }
                }
                onClick={() => handleTimeSelect(time)}
                onMouseOver={(e) => {
                  if (disabled) return;
                  if (selectedTime !== time) {
                    Object.assign(e.target.style, styles.timeSlotHover);
                  }
                }}
                onMouseOut={(e) => {
                  if (disabled) return;
                  if (selectedTime !== time) {
                    Object.assign(e.target.style, styles.timeSlot);
                  }
                }}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingCalendar;
