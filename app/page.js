import React from "react";
import { Shield, Clock, Award, Car } from "lucide-react";
import Image from "next/image";
import sedanPic from "../public/images/is-sedan-range-2.png";
import class2truckPic from "../public/images/class-2-truck.jpg";
import class3truckPic from "../public/images/class-3-truck.jpg";
import busPic from "../public/images/Double-Decker-Bus.jpg";
import class5truckPic from "../public/images/class5truck.jpg";

const LandingPage = () => {
  const courses = [
    {
      title: "Class 1",
      description: "Driving lesson",
      price: "$75",
      duration: "1 hour",
      imageUrl: sedanPic,
    },
    {
      title: "Class 2",
      description: "Driving lesson",
      price: "$120",
      duration: "1 hour",
      imageUrl: class2truckPic,
    },
    {
      title: "Class 3",
      description: "Driving lesson",
      price: "$125",
      duration: "1 hour",
      imageUrl: class3truckPic,
    },
    {
      title: "Class 4",
      description: "Driving lesson",
      price: "$130",
      duration: "1 hour",
      imageUrl: busPic,
    },
    {
      title: "Class 5",
      description: "Driving lesson",
      price: "$140",
      duration: "1 hour",
      imageUrl: class5truckPic,
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
    <div style={{ position: "relative" }}>
      <style>
        {`
          .header {
            background: linear-gradient(to bottom, #1a1a1a, #2d2d2d);
            padding: 2rem;
            color: white;
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
            color: white;
            transition: color 0.3s;
          }

          .social-icon:hover {
            color: #3b82f6;
          }

          .hero {
            text-align: center;
            padding: 4rem 0;
          }

          .hero-title {
            font-size: 3rem;
            font-weight: bold;
            margin-bottom: 1.5rem;
          }

          .hero-text {
            font-size: 1.25rem;
            color: #d1d5db;
            max-width: 600px;
            margin: 0 auto 2rem;
          }

          .button-group {
            display: flex;
            gap: 1rem;
            justify-content: center;
          }

          .button {
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            font-weight: 600;
            transition: all 0.3s;
            cursor: pointer;
          }

          .button-primary {
            background: #3b82f6;
            color: white;
            border: none;
          }

          .button-primary:hover {
            background: #2563eb;
          }

          .button-secondary {
            background: transparent;
            color: white;
            border: 2px solid white;
          }

          .button-secondary:hover {
            background: white;
            color: #1a1a1a;
          }

          .features {
            padding: 4rem 0;
            background: rgba(17, 24, 39, 0.5);
          }

          .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
          }

          .feature-card {
            background: #1f2937;
            padding: 2rem;
            border-radius: 0.75rem;
            text-align: center;
            transition: background-color 0.3s;
          }

          .feature-card:hover {
            background: #374151;
          }

          .feature-icon {
            color: #3b82f6;
            margin-bottom: 1rem;
          }

          .feature-title {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: white;
          }

          .feature-text {
            color: #d1d5db;
          }

          .courses {
            padding: 4rem 0;
          }

          .section-title {
            font-size: 2rem;
            font-weight: bold;
            text-align: center;
            margin-bottom: 3rem;
            color: white;
          }

          .courses-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
          }

          .course-card {
            background: #1f2937;
            border-radius: 0.75rem;
            overflow: hidden;
            transition: transform 0.3s;
          }

          .course-card:hover {
            transform: scale(1.05);
          }

          .course-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
          }

          .course-content {
            padding: 1.5rem;
          }

          .course-title {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: white;
          }

          .course-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .course-price {
            font-size: 1.5rem;
            font-weight: bold;
            color: #3b82f6;
          }

          .course-duration {
            color: #d1d5db;
          }

          @media (max-width: 768px) {
            .hero-title {
              font-size: 2rem;
            }

            .hero-text {
              font-size: 1rem;
            }

            .button-group {
              flex-direction: column;
            }

            .features-grid {
              grid-template-columns: 1fr;
            }

            .courses-grid {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>

      <header className="header">
        <div className="container">
          <div className="social-links">
            <a
              href="https://www.instagram.com/jdm_driving_academy"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/share/7dZyr71zUU2RztCu"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
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
              <button className="button button-primary">Book a Lesson</button>
              <button className="button button-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </header>

      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <Shield size={48} className="feature-icon" />
              <h3 className="feature-title">Safety First</h3>
              <p className="feature-text">
                Comprehensive safety training and modern vehicles
              </p>
            </div>
            <div className="feature-card">
              <Car size={48} className="feature-icon" />
              <h3 className="feature-title">All Classes</h3>
              <p className="feature-text">
                Training for Class 1 to Class 5 licenses
              </p>
            </div>
            <div className="feature-card">
              <Clock size={48} className="feature-icon" />
              <h3 className="feature-title">Flexible Hours</h3>
              <p className="feature-text">
                Convenient scheduling to fit your needs
              </p>
            </div>
            <div className="feature-card">
              <Award size={48} className="feature-icon" />
              <h3 className="feature-title">Experienced</h3>
              <p className="feature-text">
                Professional and certified instructors
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="courses">
        <div className="container">
          <h2 className="section-title">Our Courses</h2>
          <div className="courses-grid">
            {courses.map((course, index) => (
              <div key={index} className="course-card">
                <Image
                  src={course.imageUrl}
                  alt={course.title}
                  className="course-image"
                  width="500"
                  height="500"
                />
                <div className="course-content">
                  <h3 className="course-title">{course.title}</h3>
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
