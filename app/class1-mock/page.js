"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import AreaModal from "../_components/AreaModal";
import {
  Clock,
  CheckCircle,
  AlertCircle,
  Car,
  ClipboardCheck,
} from "lucide-react";

const MockTestClass1 = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const handleContinue = (region) => {
    setIsOpen(false);
    router.push(`/book?service=class-1-mock&region=${region}`);
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
            onContinue={(region) => handleContinue(region)}
          />
        )}
        <header className="header">
          <h1 className="title">
            <ClipboardCheck className="title-icon" size={32} />
            Class 1 Mock Driving Test
          </h1>
          <p className="description">
            Our 1-hour Class 1 mock tests are for someone who is preparing for
            their Class 1 restricted, full or overseas conversion licence test.
            During the mock driving test, our instructor will carry the driving
            assessment grid and assess your driving skills exactly like how a
            driving testing officer conducts a driving test at the testing
            station.
          </p>
        </header>

        <div className="content-grid">
          <div className="card">
            <div className="pricing-card">
              <h3 className="stage-header">
                <Car className="stage-icon" size={20} />
                Pricing
              </h3>
              <div className="price-info">
                <span>Mock Test (1 hour)</span>
                <span className="price">$75</span>
              </div>
              <p className="info-notice">
                Door-to-door service included to meet your needs.
              </p>
            </div>

            <div className="warning-notice">
              <p>WE DO NOT HAVE A MANUAL DRIVING SCHOOL VEHICLE</p>
              <p style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}>
                Manual lessons can only be conducted in students' vehicles.
              </p>
            </div>

            <div style={{ marginTop: "2rem" }}>
              <h3 className="stage-header">
                <CheckCircle className="stage-icon" size={20} />
                Prerequisites
              </h3>
              <p style={{ color: "#4b5563" }}>
                The person who is taking this lesson must have a Class 1 learner
                licence or above.
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
                  <Car className="stage-icon" size={20} />
                  Test Stage One (35 minutes)
                </h3>
                <p className="stage-description">
                  Speed zones up to 100km/h and a range of assessable tasks
                </p>
              </div>

              <div className="stage-card">
                <h3 className="stage-header">
                  <AlertCircle className="stage-icon" size={20} />
                  Test Stage Two (10 minutes)
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

export default MockTestClass1;
