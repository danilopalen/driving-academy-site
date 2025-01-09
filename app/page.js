"use client";

import React from "react";
import { Shield, Clock, Award, Car } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import class1 from "../public/images/Class1pic.jpg";
import class2 from "../public/images/class2pic.jpg";
import class3 from "../public/images/Untitled.jpeg";
import busPic from "../public/images/Class4truck.jpg";
import class5 from "../public/images/class5bus.jpg";
import class6 from "../public/images/class6.png";
import Link from "next/link";

const LandingPage = () => {
  const router = useRouter();
  const courses = [
    {
      title: "Class 1",
      description: "Driving lesson",
      price: "$75",
      duration: "1 hour",
      imageUrl: class1,
      url: "/class1",
    },
    {
      title: "Class 2",
      description: "Driving lesson",
      price: "$120",
      duration: "1 hour",
      imageUrl: class2,
      url: "/class2",
    },
    {
      title: "Class 3",
      description: "Driving lesson",
      price: "$125",
      duration: "1 hour",
      imageUrl: class3,
      url: "/class3",
    },
    {
      title: "Class 4",
      description: "Driving lesson",
      price: "$130",
      duration: "1 hour",
      imageUrl: busPic,
      url: "/class4",
    },
    {
      title: "Class 5",
      description: "Driving lesson",
      price: "$140",
      duration: "1 hour",
      imageUrl: class5,
      url: "/class5",
    },
    {
      title: "Class 6",
      description: "Driving lesson",
      price: "Coming Soon",
      duration: "",
      imageUrl: class6,
      url: "",
    },
  ];

  const packages = [
    {
      title: "Class 1 Restricted/Full License Mock Test",
      price: "$75",
      duration: "1 hour",
    },
    {
      title: "Class 1 - 2 Hours Lesson",
      price: "$140",
    },
    {
      title: "5 Lesson Package (Class 1)",
      description: "Total of 5 hours",
      price: "$340",
    },
    {
      title: "Class 2-5 Full License Mock Test",
      price: "$120 - $140",
    },
    {
      title: "5 Lesson Package (Class 2)",
      description: "Total of 5 hours",
      price: "$500",
    },
  ];

  return (
    <div className="landing-page">
      <style>{`
        .landing-page {
          background-color: #f8fafc;
          min-height: 100vh;
        }

        .header {
          background: linear-gradient(135deg, #ffffff, #f3f4f6);
          padding: 2rem 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .social-links {
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .social-icon {
          color: #2563eb;
          transition: color 0.3s;
        }

        .social-icon:hover {
          color: #1d4ed8;
        }

        .hero {
          text-align: center;
          padding: 4rem 0;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 1.5rem;
        }

        .hero-text {
          font-size: 1.25rem;
          color: #4b5563;
          max-width: 600px;
          margin: 0 auto 2rem;
        }

        .button-group {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        .button {
          padding: 0.875rem 2rem;
          border-radius: 0.5rem;
          font-weight: 600;
          font-size: 1.125rem;
          transition: all 0.3s;
          cursor: pointer;
        }

        .button-primary {
          background: #2563eb;
          color: white;
          border: none;
          box-shadow: 0 2px 4px rgba(37, 99, 235, 0.2);
        }

        .button-primary:hover {
          background: #1d4ed8;
          transform: translateY(-1px);
          box-shadow: 0 4px 6px rgba(37, 99, 235, 0.3);
        }

        .button-secondary {
          background: white;
          color: #2563eb;
          border: 2px solid #2563eb;
        }

        .button-secondary:hover {
          background: #f8fafc;
        }

        .section {
          padding: 5rem 0;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          background: white;
          padding: 2rem;
          border-radius: 1rem;
          text-align: center;
          transition: all 0.3s;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
        }

        .feature-icon {
          color: #2563eb;
          margin-bottom: 1rem;
        }

        .feature-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 0.5rem;
        }

        .feature-text {
          color: #4b5563;
        }

        .courses-section {
          background: white;
          padding: 5rem 0;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: bold;
          text-align: center;
          color: #1f2937;
          margin-bottom: 3rem;
        }

        .courses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .course-card {
          background: white;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: all 0.3s;
          cursor: pointer;
        }

        .course-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
        }

        .course-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .course-content {
          padding: 1.5rem;
        }

        .course-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1rem;
        }

        .course-price {
          font-size: 1.5rem;
          font-weight: bold;
          color: #2563eb;
        }

        .course-duration {
          color: #6b7280;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .button-group {
            flex-direction: column;
          }
        }
      `}</style>

      <header className="header">
        <div className="container">
          <div className="social-links">
            <a
              href="https://www.facebook.com/share/7dZyr71zUU2RztCu"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Visit our Facebook page"
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/jdm_driving_academy"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Visit our Instagram page"
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
              </svg>
            </a>
          </div>
          <div className="hero">
            <h1 className="hero-title">JDM Driving Academy</h1>
            <p className="hero-text">
              Your safety is our top priority. Learn to drive safely with
              professional instructors who care about your success.
            </p>
            <div className="button-group">
              <button
                className="button button-primary"
                onClick={() => router.push("/book")}
              >
                Book a Lesson
              </button>
              {/* <button className="button button-secondary">Learn More</button> */}
            </div>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <Shield className="feature-icon" size={32} />
              <h3 className="feature-title">Safety First</h3>
              <p className="feature-text">
                Comprehensive safety training and modern vehicles
              </p>
            </div>
            <div className="feature-card">
              <Car className="feature-icon" size={32} />
              <h3 className="feature-title">All Classes</h3>
              <p className="feature-text">
                Training for Class 1 to Class 5 licenses
              </p>
            </div>
            <div className="feature-card">
              <Clock className="feature-icon" size={32} />
              <h3 className="feature-title">Flexible Hours</h3>
              <p className="feature-text">
                Convenient scheduling to fit your needs
              </p>
            </div>
            <div className="feature-card">
              <Award className="feature-icon" size={32} />
              <h3 className="feature-title">Experienced</h3>
              <p className="feature-text">
                Professional and certified instructors
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="courses-section">
        <div className="container">
          <h2 className="section-title">Our Courses</h2>
          <div className="courses-grid">
            {courses.map((course, index) => (
              <div
                key={index}
                className="course-card"
                onClick={() => router.push(course.url)}
              >
                <Image
                  src={course.imageUrl}
                  alt={course.title}
                  className="course-image"
                  width="500"
                  height="500"
                />
                <div className="course-content">
                  <h3 className="feature-title">{course.title}</h3>
                  <p className="feature-text">{course.description}</p>
                  <div className="course-info">
                    <span className="course-price">{course.price}</span>
                    <span className="course-duration">{course.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
