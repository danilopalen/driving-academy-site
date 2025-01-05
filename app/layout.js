"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import logo from "../public/images/logo2.png";
import Image from "next/image";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div>
          <style>
            {`
          .nav {
            background: white;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
            position: sticky;
            top: 0;
            z-index: 50;
          }

          .nav-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0.75rem 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .nav-brand {
            font-size: 1.5rem;
            font-weight: bold;
            color: #1f2937;
            text-decoration: none;
            white-space: nowrap;
          }

          .nav-menu {
            display: flex;
            gap: 2rem;
            align-items: center;
          }

          .nav-group {
            position: relative;
            padding: 0.5rem 0;
          }

          .nav-label {
            color: #4b5563;
            cursor: pointer;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .nav-label:hover {
            color: #2563eb;
          }

          .nav-dropdown {
            position: absolute;
            top: 100%;
            left: 0;
            background: white;
            border-radius: 0.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 0.5rem 0;
            min-width: 200px;
            opacity: 0;
            visibility: hidden;
            transform: translateY(-10px);
            transition: all 0.2s;
          }

          .nav-group:hover .nav-dropdown {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }

          .nav-item {
            display: block;
            padding: 0.5rem 1rem;
            color: #4b5563;
            text-decoration: none;
            transition: background 0.2s;
          }

          .nav-item:hover {
            background: #f3f4f6;
            color: #2563eb;
          }

          .mobile-toggle {
            display: none;
            background: none;
            border: none;
            padding: 0.5rem;
            cursor: pointer;
            color: #4b5563;
          }

          .mobile-menu {
            display: none;
            background: white;
            padding: 1rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .mobile-link {
            display: block;
            padding: 0.75rem 1rem;
            color: #4b5563;
            text-decoration: none;
            border-radius: 0.375rem;
          }

          .mobile-link:hover {
            background: #f3f4f6;
            color: #2563eb;
          }

          @media (max-width: 768px) {
            .nav-menu {
              display: none;
            }

            .mobile-toggle {
              display: block;
            }

            .mobile-menu {
              display: ${mobileMenuOpen ? "block" : "none"};
            }

            .mobile-menu .nav-group {
              margin: 0.5rem 0;
            }

            .mobile-menu .nav-label {
              padding: 0.75rem 1rem;
              display: block;
              font-weight: 600;
            }

            .mobile-menu .nav-dropdown {
              position: static;
              box-shadow: none;
              opacity: 1;
              visibility: visible;
              transform: none;
              padding-left: 1rem;
            }
          }

          .header {
            padding: 4rem 0;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
          }

          /* Rest of your existing styles... */
        `}
          </style>

          <nav className="nav">
            <div className="nav-content">
              <Link href="/">
                <Image src={logo} alt="JDM Logo" width="50" height="50" />
              </Link>
              {/* <a href="/" className="nav-brand">
                JDM Driving Academy
              </a> */}

              <div className="nav-menu">
                <div className="nav-group">
                  <span className="nav-label">License Classes</span>
                  <div className="nav-dropdown">
                    <a href="/class1" className="nav-item">
                      Class 1 License
                    </a>
                    <a href="/class2" className="nav-item">
                      Class 2 License
                    </a>
                    <a href="/class3" className="nav-item">
                      Class 3 License
                    </a>
                    <a href="/class4" className="nav-item">
                      Class 4 License
                    </a>
                    <a href="/class5" className="nav-item">
                      Class 5 License
                    </a>
                  </div>
                </div>

                <div className="nav-group">
                  <span className="nav-label">Mock Tests</span>
                  <div className="nav-dropdown">
                    <a href="/class1-mock" className="nav-item">
                      Class 1 Mock Test
                    </a>
                    <a href="/class2-5-mock" className="nav-item">
                      Class 2-5 Mock Test
                    </a>
                  </div>
                </div>

                <div className="nav-group">
                  <span className="nav-label">Packages</span>
                  <div className="nav-dropdown">
                    <a href="/class1-package" className="nav-item">
                      Class 1 - 5 Hours Package
                    </a>
                    <a href="/class1-2hour" className="nav-item">
                      Class 1 - 2 Hours Lesson
                    </a>
                    <a href="/class2-package" className="nav-item">
                      Class 2 - 5 Hours Package
                    </a>
                  </div>
                </div>

                <a href="/about" className="nav-label">
                  About Us
                </a>
                <a href="/book" className="nav-label">
                  Book Now
                </a>
              </div>

              <button
                className="mobile-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      mobileMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>

            <div className="mobile-menu">
              <div className="nav-group">
                <span className="nav-label">License Classes</span>
                <div className="nav-dropdown">
                  <a href="/class1" className="mobile-link">
                    Class 1 License
                  </a>
                  <a href="/class2" className="mobile-link">
                    Class 2 License
                  </a>
                  <a href="/class3" className="mobile-link">
                    Class 3 License
                  </a>
                  <a href="/class4" className="mobile-link">
                    Class 4 License
                  </a>
                  <a href="/class5" className="mobile-link">
                    Class 5 License
                  </a>
                </div>
              </div>

              <div className="nav-group">
                <span className="nav-label">Mock Tests</span>
                <div className="nav-dropdown">
                  <a href="/class1-mock" className="mobile-link">
                    Class 1 Mock Test
                  </a>
                  <a href="/class2-5-mock" className="mobile-link">
                    Class 2-5 Mock Test
                  </a>
                </div>
              </div>

              <div className="nav-group">
                <span className="nav-label">Packages</span>
                <div className="nav-dropdown">
                  <a href="/class1-package" className="mobile-link">
                    Class 1 - 5 Hour Package
                  </a>
                  <a href="/class1-2hour" className="mobile-link">
                    Class 1 - 2 Hour Lesson
                  </a>
                  <a href="/class2-package" className="mobile-link">
                    Class 2 - 5 Hour Package
                  </a>
                </div>
              </div>

              <a href="/about" className="mobile-link">
                About Us
              </a>
              <a href="/book" className="mobile-link">
                Book Now
              </a>
            </div>
          </nav>
        </div>
        {children}
      </body>
    </html>
  );
}
