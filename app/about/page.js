"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Clock, Shield, Heart, Phone, Award, Car, Mail } from "lucide-react";
import Image from "next/image";
import Yuta from "../../public/images/Yutanew.jpeg";

const AboutPage = () => {
  const router = useRouter();

  return (
    <div className="page">
      <style>
        {`
          .page {
            min-height: 100vh;
            background-color: #f8fafc;
            color: #1f2937;
          }

          .hero {
            background: linear-gradient(135deg, #ffffff, #f3f4f6);
            padding: 4rem 0;
            text-align: center;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
          }

          .title {
            font-size: 2.5rem;
            font-weight: bold;
            color: #1f2937;
            margin-bottom: 1.5rem;
          }

          .subtitle {
            font-size: 1.25rem;
            color: #4b5563;
            max-width: 800px;
            margin: 0 auto 2rem;
            line-height: 1.6;
          }

          .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            padding: 4rem 0;
          }

          .feature-card {
            background: white;
            padding: 2rem;
            border-radius: 1rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            text-align: center;
          }

          .feature-icon {
            color: #2563eb;
            margin-bottom: 1rem;
            padding: 1rem;
            background: #f0f7ff;
            border-radius: 1rem;
            display: inline-block;
          }

          .feature-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 0.5rem;
          }

          .feature-text {
            color: #4b5563;
            line-height: 1.6;
          }

          .instructor-section {
            background: white;
            padding: 4rem 0;
          }

          .instructor-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          @media (min-width: 768px) {
            .instructor-grid {
              grid-template-columns: 1fr 2fr;
            }
          }

          .instructor-image {
            width: 100%;
            aspect-ratio: 1;
            object-fit: cover;
            border-radius: 1rem;
          }

          .instructor-content {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }

          .instructor-name {
            font-size: 2rem;
            font-weight: bold;
            color: #1f2937;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .japanese-name {
            font-size: 1.25rem;
            color: #4b5563;
          }

          .qualification-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            margin-top: 1rem;
          }

          .qualification-item {
            background: #f8fafc;
            padding: 0.75rem;
            border-radius: 0.5rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: #4b5563;
          }

          .hours-card {
            background: #f0f7ff;
            border-radius: 1rem;
            padding: 2rem;
            margin-top: 2rem;
            display: flex;
            gap: 2rem
          }

          .hours-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .contact-section {
            text-align: center;
            padding: 4rem 0;
          }

          .contact-button {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: #2563eb;
            color: white;
            padding: 1rem 2rem;
            border-radius: 0.5rem;
            font-weight: 600;
            border: none;
            cursor: pointer;
            transition: all 0.3s;
            text-decoration: none;
          }

          .contact-button:hover {
            background: #1d4ed8;
            transform: translateY(-1px);
            box-shadow: 0 4px 6px rgba(37, 99, 235, 0.2);
          }
        `}
      </style>

      <section className="hero">
        <div className="container">
          <h1 className="title">Welcome to JDM Driving Academy</h1>
          <p className="subtitle">
            A New Zealand-based driving school offering a wide range of lessons
            at affordable prices. Our mission is to provide quality lessons that
            equip drivers with the skills to drive safely on New Zealand's
            roads.
          </p>
        </div>
      </section>

      <section className="container">
        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">
              <Shield size={32} />
            </div>
            <h3 className="feature-title">Professional & Accredited</h3>
            <p className="feature-text">
              Fully accredited, insured, and national police checked instructors
              ensuring your safety and peace of mind.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Car size={32} />
            </div>
            <h3 className="feature-title">Door-to-Door Service</h3>
            <p className="feature-text">
              One of the few driving schools in Auckland offering convenient
              door-to-door service for our students.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Heart size={32} />
            </div>
            <h3 className="feature-title">Student-Focused Approach</h3>
            <p className="feature-text">
              Friendly, calm, and patient instructors who treat every student
              with respect and understanding. We will ensure you receive all the
              help and support needed to achieve your driving goals.
            </p>
          </div>
        </div>
      </section>

      <section className="instructor-section">
        <div className="container">
          <div className="instructor-grid">
            <Image
              src={Yuta}
              alt="Instructor Yuta"
              className="instructor-image"
              width="500"
              height="500"
            />
            <div className="instructor-content">
              <div>
                <h2 className="instructor-name">
                  Yuta
                  <span className="japanese-name">(優太)</span>
                </h2>
                <p style={{ color: "#4b5563", marginTop: "0.5rem" }}>
                  "Kind-hearted" in English, reflecting my approach to teaching
                </p>
              </div>

              <p className="feature-text">
                As a Japanese Kiwi with extensive experience in driving various
                vehicles, I bring a unique perspective to driving instruction.
                My student-focused training style ensures that you'll learn in a
                way that suits you best.
              </p>

              <div>
                <h3 className="feature-title">Qualifications & Endorsements</h3>
                <div className="qualification-list">
                  <div className="qualification-item">
                    <Award size={16} />
                    <span>Class 1 to 6 Full Licenses</span>
                  </div>
                  <div className="qualification-item">
                    <Award size={16} />
                    <span>Wheels and Trucks Endorsement</span>
                  </div>
                  <div className="qualification-item">
                    <Award size={16} />
                    <span>Rollers and Forklifts Endorsement</span>
                  </div>
                  <div className="qualification-item">
                    <Award size={16} />
                    <span>Dangerous Goods Endorsement</span>
                  </div>
                  <div className="qualification-item">
                    <Award size={16} />
                    <span>Instructor Endorsement</span>
                  </div>
                  <div className="qualification-item">
                    <Award size={16} />
                    <span>Vehicle Recovery Endorsement</span>
                  </div>
                  <div className="qualification-item">
                    <Award size={16} />
                    <span>Passenger Endorsement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hours-card">
            <div>
              <h3 className="hours-title">
                <Clock size={24} />
                Operating Hours
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="feature-text">Weekdays: 7 AM - 8 PM</p>
                  <p className="feature-text">Weekends: 9 AM - 8 PM</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="hours-title">
                <Mail size={24} />
                Email
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="feature-text">
                    jdmdrivingschoolauckland@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <h2 className="title">Ready for Your Driving Journey?</h2>
          <p className="subtitle">
            Let's work together to achieve your driving goals!
          </p>
          <div
            style={{ display: "flex", gap: "1rem", justifyContent: "center" }}
          >
            <a href="tel:02041753791" className="contact-button">
              <Phone size={20} />
              Contact: 02041753791
            </a>
            <button
              className="contact-button"
              onClick={() => router.push("/book")}
            >
              Book Now
              <Car size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
