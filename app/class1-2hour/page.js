"use client";
import React, { useState } from "react";
import AreaModal from "../_components/AreaModal";
import { Clock, CheckCircle, AlertCircle, Car, Compass } from "lucide-react";

const Class1TwoHour = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const handleContinue = () => {
    setIsOpen(false);
  };
  const handleBookNow = () => {
    setIsOpen(true);
  };

  return (
    <div className="page">
      <style>
        {`
          .page {
            min-height: 100vh;
            background-color: #f8fafc;
            color: #1f2937;
            padding: 2rem;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
          }

          .header {
            margin-bottom: 2rem;
          }

          .title {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;
            gap: 1rem;
            color: #1f2937;
          }

          .title-icon {
            color: #2563eb;
          }

          .description {
            font-size: 1.25rem;
            color: #4b5563;
            margin-bottom: 2rem;
            line-height: 1.6;
          }

          .highlight {
            background: #f0f7ff;
            padding: 1rem;
            border-radius: 0.5rem;
            color: #1e40af;
            font-weight: 500;
            margin: 1rem 0;
          }

          .content-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          @media (min-width: 768px) {
            .content-grid {
              grid-template-columns: 1fr 1fr;
            }
          }

          .card {
            background: white;
            border-radius: 1rem;
            padding: 2rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          }

          .pricing-card {
            background: #f8fafc;
            border-radius: 0.75rem;
            padding: 1.5rem;
            margin-bottom: 2rem;
          }

          .warning-notice {
            background: #fef2f2;
            border-left: 4px solid #ef4444;
            padding: 1rem;
            margin: 1rem 0;
            border-radius: 0.5rem;
            color: #991b1b;
            font-weight: 500;
          }

          .info-notice {
            background: #f0f7ff;
            border-left: 4px solid #2563eb;
            padding: 1rem;
            margin: 1rem 0;
            border-radius: 0.5rem;
            color: #1e40af;
          }

          .price-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.5rem;
            padding: 0.75rem;
            background: white;
            border-radius: 0.5rem;
          }

          .price {
            font-size: 2rem;
            font-weight: bold;
            color: #2563eb;
          }

          .practice-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            margin-top: 1rem;
          }

          .practice-item {
            background: white;
            padding: 0.75rem;
            border-radius: 0.5rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: #4b5563;
          }

          .lesson-parts {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }

          .lesson-card {
            background: #f8fafc;
            border-radius: 0.75rem;
            padding: 1.5rem;
          }

          .lesson-header {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: #1f2937;
          }

          .lesson-icon {
            color: #2563eb;
          }

          .lesson-list {
            list-style: none;
            padding: 0;
            margin: 0;
            color: #4b5563;
          }

          .lesson-list li {
            margin-bottom: 0.5rem;
            padding-left: 1.5rem;
            position: relative;
          }

          .lesson-list li::before {
            content: "•";
            position: absolute;
            left: 0;
            color: #2563eb;
          }

          .book-button {
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
            margin-top: 2rem;
          }

          .book-button:hover {
            background: #1d4ed8;
            transform: translateY(-1px);
            box-shadow: 0 4px 6px rgba(37, 99, 235, 0.2);
          }
        `}
      </style>

      <div className="container">
        {isOpen && (
          <AreaModal
            isOpen={isOpen}
            onClose={handleClose}
            onContinue={handleContinue}
          />
        )}
        <header className="header">
          <h1 className="title">
            <Clock className="title-icon" size={32} />
            2-Hour Class 1 Driving Lesson
          </h1>
          <p className="description">
            Our 2-hour Class 1 lessons are for learner, restricted and full
            licence holders. Our 2-hour driving lesson has proven to be the most
            productive time period for a driving lesson. The lessons are adapted
            to each driver's needs and are for developing skills, preparing for
            driver's licence tests and staying safe on the road.
          </p>
          <div className="highlight">
            Extended practical driving time allows for comprehensive skill
            development and practice of all essential maneuvers.
          </div>
        </header>

        <div className="content-grid">
          <div className="card">
            <div className="pricing-card">
              <h3 className="lesson-header">
                <Car className="lesson-icon" size={20} />
                Pricing
              </h3>
              <div className="price-info">
                <span>2-Hour Lesson</span>
                <span className="price">$140</span>
              </div>
              <p className="info-notice">
                Door-to-door service included to meet your needs.
              </p>
            </div>

            <div className="warning-notice">
              <p>WE DO NOT HAVE A MANUAL DRIVING SCHOOL CAR</p>
              <p style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}>
                Manual lessons can be taken in students' vehicles.
              </p>
            </div>

            <div style={{ marginTop: "2rem" }}>
              <h3 className="lesson-header">
                <CheckCircle className="lesson-icon" size={20} />
                Prerequisites
              </h3>
              <p style={{ color: "#4b5563" }}>
                The person who is taking this lesson must have a Class 1 learner
                licence or above.
              </p>
            </div>
          </div>

          <div className="card">
            <h2 className="lesson-header">Lesson Structure</h2>
            <div className="lesson-parts">
              <div className="lesson-card">
                <h3 className="lesson-header">
                  <Clock className="lesson-icon" size={20} />
                  Briefing (10 minutes)
                </h3>
                <ul className="lesson-list">
                  <li>Review of your driving history and recent practice</li>
                  <li>Areas you want to improve</li>
                  <li>Plans for the day's lesson</li>
                </ul>
              </div>

              <div className="lesson-card">
                <h3 className="lesson-header">
                  <Car className="lesson-icon" size={20} />
                  Practical Driving (100 minutes)
                </h3>
                <p style={{ color: "#4b5563", marginBottom: "1rem" }}>
                  Progressive skill improvement through practice and repetition:
                </p>
                <div className="practice-list">
                  <div className="practice-item">
                    <Compass size={16} />
                    <span>Parallel Parking</span>
                  </div>
                  <div className="practice-item">
                    <Compass size={16} />
                    <span>90° Angle Parking</span>
                  </div>
                  <div className="practice-item">
                    <Compass size={16} />
                    <span>3-Point Turn</span>
                  </div>
                  <div className="practice-item">
                    <Compass size={16} />
                    <span>U-Turn</span>
                  </div>
                  <div className="practice-item">
                    <Compass size={16} />
                    <span>Hill Starts</span>
                  </div>
                  <div className="practice-item">
                    <Compass size={16} />
                    <span>Lane Changing</span>
                  </div>
                  <div className="practice-item">
                    <Compass size={16} />
                    <span>Roundabouts</span>
                  </div>
                  <div className="practice-item">
                    <Compass size={16} />
                    <span>School Zones</span>
                  </div>
                </div>
              </div>

              <div className="lesson-card">
                <h3 className="lesson-header">
                  <CheckCircle className="lesson-icon" size={20} />
                  Debrief (10 minutes)
                </h3>
                <ul className="lesson-list">
                  <li>Open-ended, student-centered feedback</li>
                  <li>Session highlights and areas to work on</li>
                  <li>Planning your lesson programme</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <button className="book-button" onClick={handleBookNow}>
            Book Now
            <Clock size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Class1TwoHour;
