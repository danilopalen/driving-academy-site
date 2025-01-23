// app/api/cancel/route.ts
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
  return {
    subject: `Booking Cancellation - ${booking.service}`,
    text: `
      Dear ${booking.name},

      This is to confirm that your scheduled lesson has been cancelled as requested.

      A refund will be processed shortly. Depending on your payment method, it may take 2-3 business days for the funds to appear in your account.

      Lesson: ${booking.service}
      Date: ${booking.date}

      If you have any questions, please don't hesitate to reach out.

      Best regards,
      Yuta
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Booking Cancellation</h2>
        <p>Dear ${booking.name},</p>

        <p>This is to confirm that your scheduled lesson has been cancelled as requested.</p>

        <p>A refund will be processed shortly. Depending on your payment method, it may take 2-3 business days for the funds to appear in your account.</p>

        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px;">
          <p><strong>Lesson:</strong> ${booking.service}</p>
          <p><strong>Date:</strong> ${booking.date}</p>
        </div>

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

    // Generate and send email
    const emailContent = generateEmailContent(booking);

    const info = await transporter.sendMail({
      from: `"${process.env.NEXT_PUBLIC_EMAIL_FROM_NAME}" <${process.env.NEXT_PUBLIC_EMAIL_FROM_ADDRESS}>`,
      to: booking.email,
      cc: process.env.NEXT_PUBLIC_EMAIL_FROM_ADDRESS,
      subject: emailContent.subject,
      text: emailContent.text,
      html: emailContent.html,
    });

    return NextResponse.json({
      message: "Booking cancellation email sent",
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
