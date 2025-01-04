import React from "react";
import {
  Clock,
  CheckCircle,
  AlertCircle,
  Truck,
  Package,
  DollarSign,
} from "lucide-react";

const Class2Package = () => {
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

          .package-highlight {
            background: #f0f7ff;
            border-radius: 1rem;
            padding: 2rem;
            margin: 2rem 0;
            border: 1px solid #bfdbfe;
          }

          .highlight-title {
            color: #1e40af;
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 0.75rem;
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

          .pricing-breakdown {
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

          .price-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.75rem 0;
          }

          .price-label {
            color: #4b5563;
            font-weight: 500;
          }

          .price-value {
            color: #2563eb;
            font-weight: bold;
            font-size: 1.25rem;
          }

          .total-savings {
            background: #ecfdf5;
            color: #047857;
            padding: 1rem;
            border-radius: 0.5rem;
            margin-top: 1rem;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 0.5rem;
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

          .info-list {
            list-style: none;
            padding: 0;
            margin: 1rem 0;
          }

          .info-item {
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
            margin-bottom: 1rem;
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
        <header className="header">
          <h1 className="title">
            <Package className="title-icon" size={32} />
            Class 2 Five Lesson Package
          </h1>
          <p className="description">
            Our comprehensive Class 2 lesson package includes 5 hours of
            professional instruction, designed to help you master heavy vehicle
            operation and prepare for your license test.
          </p>
        </header>

        <div className="package-highlight">
          <h2 className="highlight-title">
            <DollarSign size={24} />
            Package Deal Benefits
          </h2>
          <ul className="info-list">
            <li className="info-item">
              <CheckCircle size={20} />
              <span>
                Pay as you go - no need to pay for all lessons upfront
              </span>
            </li>
            <li className="info-item">
              <CheckCircle size={20} />
              <span>
                Flexible scheduling - book lessons at your convenience
              </span>
            </li>
            <li className="info-item">
              <CheckCircle size={20} />
              <span>No time limit to complete your 5 lessons</span>
            </li>
            <li className="info-item">
              <CheckCircle size={20} />
              <span>Substantial savings on your fifth lesson</span>
            </li>
          </ul>
        </div>

        <div className="content-grid">
          <div className="card">
            <div className="pricing-breakdown">
              <h3 className="lesson-header">
                <DollarSign className="lesson-icon" size={20} />
                Package Options
              </h3>

              <div className="pricing-option">
                <h4 className="option-header">
                  Standard Package (We provide truck)
                </h4>
                <div className="price-item">
                  <span className="price-label">First 4 Lessons</span>
                  <span className="price-value">$120 each</span>
                </div>
                <div className="price-item">
                  <span className="price-label">Fifth Lesson</span>
                  <span className="price-value">$20</span>
                </div>
                <div className="price-item">
                  <span className="price-label">Total Package</span>
                  <span className="price-value">$500</span>
                </div>
              </div>

              <div className="pricing-option">
                <h4 className="option-header">With Your Own Truck</h4>
                <div className="price-item">
                  <span className="price-label">First 4 Lessons</span>
                  <span className="price-value">$90 each</span>
                </div>
                <div className="price-item">
                  <span className="price-label">Fifth Lesson</span>
                  <span className="price-value">$30</span>
                </div>
                <div className="price-item">
                  <span className="price-label">Total Package</span>
                  <span className="price-value">$420</span>
                </div>
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

            <div style={{ marginTop: "2rem" }}>
              <h3 className="lesson-header">
                <CheckCircle className="lesson-icon" size={20} />
                Prerequisites
              </h3>
              <p style={{ color: "#4b5563" }}>
                The person who is taking this lesson must have an appropriate
                Class 2 to Class 5 learner licence.
              </p>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <button className="book-button">
            Book Now
            <Package size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Class2Package;
