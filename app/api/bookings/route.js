// app/api/bookings/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { generateICSFile } from "../../lib/calendar";

// Email transport configuration
const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: process.env.NEXT_PUBLIC_SMTP_HOST,
  port: 587,
  secure: true,
  auth: {
    user: process.env.NEXT_PUBLIC_SMTP_USER,
    pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
  },
});

// Email template function
function generateEmailContent(booking) {
  const formattedDate = new Intl.DateTimeFormat("en-NZ", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  }).format(new Date(booking.date.replace("00:00:00", `${booking.time}:00`)));
  const [date, time] = formattedDate.split(", ");
  return {
    subject: `Booking Confirmation - ${booking.service}`,
    text: `
      Dear ${booking.name},

      Thank you for booking a lesson with us! Here are your booking details:

      Lesson: ${booking.service}
      Date: ${date}
      Time: ${time}
      Location: ${booking.address}

      Please arrive 5 minutes before your lesson start time.

      Need to reschedule? Please contact us at least 24 hours before your lesson.

      If you have any questions, please don't hesitate to reach out.

      Best regards,
      Yuta
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Booking Confirmation</h2>
        <p>Dear ${booking.name},</p>

        <p>Thank you for booking a lesson with us! Here are your booking details:</p>

        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px;">
          <p><strong>Lesson:</strong> ${booking.service}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Time:</strong> ${time}</p>
          <p><strong>Location:</strong> ${booking.address}</p>
        </div>

        <p><em>Please arrive 5 minutes before your lesson start time.</em></p>

        <p>Need to reschedule? Please contact us at least 24 hours before your lesson.</p>

        <p>If you have any questions, please don't hesitate to reach out.</p>

        <p>Best regards,<br>Yuta</p>
      </div>
    `,
  };
}

// API route handler for booking
export async function POST(request) {
  try {
    const booking = await request.json();

    // Here you would typically validate the booking data
    // and save it to your database

    // Generate calendar invite
    const icsContent = generateICSFile(booking);

    // Generate and send email
    const emailContent = generateEmailContent(booking);

    const info = await transporter.sendMail({
      from: `"${process.env.NEXT_PUBLIC_EMAIL_FROM_NAME}" <${process.env.NEXT_PUBLIC_EMAIL_FROM_ADDRESS}>`,
      to: booking.email,
      cc: process.env.NEXT_PUBLIC_EMAIL_FROM_ADDRESS,
      subject: emailContent.subject,
      text: emailContent.text,
      html: emailContent.html,
      attachments: [
        {
          filename: "lesson-booking.ics",
          content: icsContent,
          contentType: "text/calendar",
        },
      ],
      alternatives: [
        {
          contentType: "text/calendar; method=REQUEST",
          content: icsContent,
        },
      ],
    });

    return NextResponse.json({
      message: "Booking confirmed and confirmation email sent",
      success: true,
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json(
      { message: "Failed to process booking", error: error.message },
      { status: 500 }
    );
  }
}
