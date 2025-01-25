"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import AreaModal from "../_components/AreaModal";
import { Clock, CheckCircle, AlertCircle, Truck } from "lucide-react";

const Class5Page = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const handleContinue = (region) => {
    setIsOpen(false);
    router.push(`/book?service=class-5&region=${region}`);
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

          .notice {
            background: #f0f7ff;
            border-left: 4px solid #2563eb;
            padding: 1.5rem;
            margin-bottom: 2rem;
            border-radius: 0.5rem;
            display: flex;
            gap: 1rem;
            align-items: flex-start;
          }

          .notice-icon {
            color: #2563eb;
            flex-shrink: 0;
          }

          .notice-text {
            color: #1e40af;
            font-size: 1.1rem;
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

          .pricing-header {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: #1f2937;
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

          .price-note {
            background: #f0f7ff;
            padding: 1rem;
            border-radius: 0.5rem;
            margin-top: 1rem;
            color: #1e40af;
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

          .prerequisites {
            background: #f8fafc;
            padding: 1.5rem;
            border-radius: 0.75rem;
            margin-top: 2rem;
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

          .emphasis {
            font-weight: 500;
            color: #1e40af;
          }
        `}
      </style>

      <div className="container">
        {isOpen && (
          <AreaModal
            isOpen={isOpen}
            onClose={handleClose}
            onContinue={(region) => handleContinue(region)}
          />
        )}
        <header className="header">
          <h1 className="title">
            <Truck className="title-icon" size={32} />
            Class 5 License Training
          </h1>
          <p className="description">
            Our 1-hour Class 5 lessons are for Class 5 learner licence holders.
            The lessons are adapted to each driver's needs and are for
            developing skills, preparing for driver's licence tests and staying
            safe on the road.
          </p>
          <div className="notice">
            <AlertCircle className="notice-icon" size={24} />
            <p className="notice-text">
              We are unable to organise a truck hire for class 5 driving
              lessons. You can only conduct class 5 driving lessons in your own
              truck.
            </p>
          </div>
        </header>

        <div className="content-grid">
          <div className="card">
            <div className="pricing-card">
              <h3 className="pricing-header">Pricing Options</h3>
              <div className="price-info">
                <span>With Your Own Truck</span>
                <span className="price">$110</span>
              </div>
              <div className="price-note">
                <AlertCircle
                  size={20}
                  style={{ float: "left", marginRight: "10px" }}
                />
                <p>
                  Our driving school does not have any class 5 vehicles. Class 5
                  driving lessons can only be conducted in your own truck. There
                  is no additional charge for those who can supply their truck.
                  Please contact us to learn more.
                </p>
              </div>
            </div>

            <div className="prerequisites">
              <h3 className="lesson-header">
                <CheckCircle className="lesson-icon" size={20} />
                Prerequisites
              </h3>
              <p style={{ color: "#4b5563" }}>
                The person who is taking this lesson must have a Class 5 learner
                licence.
              </p>
            </div>
          </div>

          <div className="card">
            <h2 className="pricing-header">About the Driving Lesson</h2>
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
                  <Truck className="lesson-icon" size={20} />
                  Practical Driving (40 minutes)
                </h3>
                <ul className="lesson-list">
                  <li>Progressive skill improvement through practice</li>
                  <li>Steering, guiding, indicating, shoulder checks</li>
                  <li>Basic slow speed manoeuvres</li>
                  <li>Urban driving and lane changing</li>
                  <li>Roundabouts and higher speeds</li>
                  <li>Motorway driving and night driving</li>
                </ul>
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
            <Truck size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Class5Page;
