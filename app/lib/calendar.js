// lib/calendar.ts
import ical from "ical-generator";

export function generateICSFile(booking) {
  const calendar = ical({ name: "Lesson Booking" });
  const dateAndTime = booking.date.replace("00:00:00", `${booking.time}:00`);
  const startDate = new Date(`${dateAndTime}`);
  const endDate = new Date(
    startDate.getTime() + (booking.duration || 60) * 60000
  );

  calendar.createEvent({
    start: startDate,
    end: endDate,
    summary: `${booking.service} with Yuta`,
    description: `Lesson booking for ${booking.name}`,
    location: booking.location,
    timezone: "Pacific/Auckland", // Key point for NZ timezone
    organizer: {
      name: "Learning Center",
      email: process.env.NEXT_PUBLIC_EMAIL_FROM_ADDRESS,
    },
  });

  return calendar.toString();
}
