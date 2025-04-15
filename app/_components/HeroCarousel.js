import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import student1 from "../../public/images/student1.jpeg";
import student2 from "../../public/images/student2.jpeg";
import Image from "next/image";

// Define styles with standard CSS
const styles = {
  container: {
    width: "100%",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    backgroundColor: "#1a5276",
    color: "white",
    textAlign: "center",
    padding: "3rem 1rem",
  },
  headerTitle: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  headerText: {
    fontSize: "1.2rem",
    maxWidth: "800px",
    margin: "0 auto",
  },
  carouselContainer: {
    position: "relative",
    maxWidth: "1024px",
    margin: "1rem auto",
    padding: "0 1rem",
  },
  carouselWrapper: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "8px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    backgroundColor: "white",
    height: "100%",
  },
  carouselSlider: {
    display: "flex",
    transition: "transform 500ms ease-in-out",
  },
  slide: {
    width: "100%",
    flexShrink: "0",
    display: "flex",
    flexDirection: "column",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: "400px",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    imageOrientation: "none",
  },
  badge: {
    position: "absolute",
    top: "1rem",
    right: "1rem",
    backgroundColor: "#27ae60",
    color: "white",
    padding: "0.25rem 0.75rem",
    borderRadius: "4px",
    fontWeight: "bold",
    fontSize: "0.875rem",
  },
  contentContainer: {
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  studentName: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#1a5276",
    marginBottom: "0.5rem",
  },
  licenseType: {
    color: "#7f8c8d",
    marginBottom: "1rem",
  },
  quote: {
    fontStyle: "italic",
    color: "#555",
    marginBottom: "1.5rem",
    lineHeight: "1.6",
  },
  navButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    color: "#1a5276",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
    transition: "background-color 300ms ease",
  },
  prevButton: {
    left: "1rem",
  },
  nextButton: {
    right: "1rem",
  },
  indicators: {
    position: "absolute",
    bottom: "1rem",
    left: "0",
    right: "0",
    display: "flex",
    justifyContent: "center",
    gap: "0.5rem",
  },
  indicator: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#ccc",
    border: "none",
    padding: "0",
    cursor: "pointer",
    transition: "background-color 300ms ease",
  },
  activeIndicator: {
    backgroundColor: "#1a5276",
  },
  ctaSection: {
    backgroundColor: "#1a5276",
    color: "white",
    textAlign: "center",
    padding: "3rem 1rem",
    maxWidth: "800px",
    margin: "3rem auto",
    borderRadius: "8px",
  },
  ctaTitle: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  ctaText: {
    fontSize: "1.1rem",
    marginBottom: "2rem",
  },
  ctaButton: {
    backgroundColor: "#e74c3c",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "0.75rem 1.5rem",
    fontSize: "1.1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 300ms ease",
  },
};

// Add media queries for responsive design
const mediaQueries = `
  @media (min-width: 768px) {
    .slide {
      flex-direction: row;
    }

    .image-container {
      width: 50%;
      height: 400px;
    }

    .content-container {
      width: 50%;
    }
  }
`;

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const students = [
    {
      id: 1,
      imageUrl: student1,
      name: "Sarah Johnson",
      licenseType: "Class D License | March 2025",
      quote:
        "The instructors were patient and thorough. I went from being terrified of driving to feeling completely confident on the road!",
      badge: "Our Successful students",
    },
    {
      id: 2,
      imageUrl: student2,
      name: "Michael Chen",
      licenseType: "Class D License | February 2025",
      quote:
        "The structured curriculum and hands-on practice made all the difference. I aced my driving test on the first attempt!",
      badge: "Our Successful students",
    },
  ];

  // Add style tag for media queries
  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = mediaQueries;
    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === students.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === 0 ? students.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  const goToSlide = (index) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <div style={styles.container}>
      {/* Hero Carousel */}
      <div style={styles.carouselContainer}>
        <div style={styles.carouselWrapper}>
          <div
            style={{
              ...styles.carouselSlider,
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {students.map((student) => (
              <div key={student.id} style={styles.slide} className="slide">
                <div style={styles.imageContainer} className="image-container">
                  <Image
                    src={student.imageUrl}
                    alt={student.name}
                    style={styles.image}
                  />
                  <div style={styles.badge}>{student.badge}</div>
                </div>
                {/* <div
                  style={styles.contentContainer}
                  className="content-container"
                >
                  <h3 style={styles.studentName}>{student.name}</h3>
                  <div style={styles.licenseType}>{student.licenseType}</div>
                  <p style={styles.quote}>&ldquo;{student.quote}&rdquo;</p>
                </div> */}
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            style={{ ...styles.navButton, ...styles.prevButton }}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            style={{ ...styles.navButton, ...styles.nextButton }}
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicator Dots */}
          <div style={styles.indicators}>
            {students.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                style={{
                  ...styles.indicator,
                  ...(currentSlide === index ? styles.activeIndicator : {}),
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
