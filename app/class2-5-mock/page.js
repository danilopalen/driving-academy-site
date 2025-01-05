"use client";
import React, { useState } from "react";
import AreaModal from "../_components/areaModal";
import {
  Clock,
  CheckCircle,
  AlertCircle,
  Truck,
  ClipboardCheck,
} from "lucide-react";

const Class2To5MockTest = () => {
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

          .pricing-option {
            border: 1px solid #e5e7eb;
            border-radius: 0.75rem;
            padding: 1.5rem;
            margin-bottom: 1rem;
          }

          .option-header {
            font-size: 1.25rem;
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid #e5e7eb;
          }

          .price-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.75rem;
            background: white;
            border-radius: 0.5rem;
          }

          .price-range {
            font-size: 1.25rem;
            font-weight: bold;
            color: #2563eb;
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

          .test-stages {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }

          .stage-card {
            background: #f8fafc;
            border-radius: 0.75rem;
            padding: 1.5rem;
          }

          .stage-header {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: #1f2937;
          }

          .stage-icon {
            color: #2563eb;
          }

          .stage-description {
            color: #4b5563;
            line-height: 1.6;
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
            <ClipboardCheck className="title-icon" size={32} />
            Class 2-5 Mock Driving Test
          </h1>
          <p className="description">
            Our 1-hour Class 2 to Class 5 mock tests are designed for those
            preparing for their full license test. During the mock driving test,
            our instructor will carry the driving assessment grid and assess
            your driving skills exactly like how a driving testing officer
            conducts a driving test at the testing station.
          </p>
        </header>

        <div className="content-grid">
          <div className="card">
            <div className="pricing-card">
              <h3 className="stage-header">
                <Truck className="stage-icon" size={20} />
                Pricing Options
              </h3>
              <div className="pricing-option">
                <h4 className="option-header">
                  Standard Price (We arrange truck)
                </h4>
                <div className="price-info">
                  <span>Mock Test (1 hour)</span>
                  <span className="price-range">$120 - $140</span>
                </div>
              </div>
              <div className="pricing-option">
                <h4 className="option-header">With Your Own Truck</h4>
                <div className="price-info">
                  <span>Mock Test (1 hour)</span>
                  <span className="price-range">$90 - $110</span>
                </div>
              </div>
              <div className="info-notice">
                Door-to-door service included to meet your needs.
              </div>
            </div>

            <div className="warning-notice">
              <p>
                Our driving school does not have any class 2 to class 5
                vehicles.
              </p>
              <p style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}>
                We can organise a truck hire at an additional cost, or you can
                supply your truck for the lesson.
              </p>
            </div>

            <div style={{ marginTop: "2rem" }}>
              <h3 className="stage-header">
                <CheckCircle className="stage-icon" size={20} />
                Prerequisites
              </h3>
              <p style={{ color: "#4b5563" }}>
                The person who is taking this lesson must have an appropriate
                Class 2 to Class 5 learner licence or above.
              </p>
            </div>
          </div>

          <div className="card">
            <h2 className="stage-header">Test Structure</h2>
            <div className="test-stages">
              <div className="stage-card">
                <h3 className="stage-header">
                  <Clock className="stage-icon" size={20} />
                  Briefing (5 minutes)
                </h3>
                <p className="stage-description">
                  Overview of what the practice test covers and how this drive
                  assists with preparing to take the real full licence test
                </p>
              </div>

              <div className="stage-card">
                <h3 className="stage-header">
                  <Truck className="stage-icon" size={20} />
                  Test Stage One (30 minutes)
                </h3>
                <p className="stage-description">
                  Speed zones up to 90km/h and a range of assessable tasks
                </p>
              </div>

              <div className="stage-card">
                <h3 className="stage-header">
                  <AlertCircle className="stage-icon" size={20} />
                  Test Stage Two (15 minutes)
                </h3>
                <p className="stage-description">
                  Verbal hazard commentary to fine-tune your skills with the
                  help of your driving instructor
                </p>
              </div>

              <div className="stage-card">
                <h3 className="stage-header">
                  <CheckCircle className="stage-icon" size={20} />
                  Debrief (10 minutes)
                </h3>
                <p className="stage-description">
                  Student centred feedback on how the practice test went, areas
                  to work on, and recommendations of future lessons if required
                  as you prepare for your full licence test
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <button className="book-button" onClick={handleBookNow}>
            Book Now
            <ClipboardCheck size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Class2To5MockTest;
