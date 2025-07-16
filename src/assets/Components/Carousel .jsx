import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft, FaMosque } from "react-icons/fa";

import S1 from "../data/socialMedia/S1.jpg";
import S2 from "../data/socialMedia/S2.jpg";
import S3 from "../data/socialMedia/S3.jpg";
import S4 from "../data/socialMedia/S4.jpg";
import S5 from "../data/socialMedia/S5.jpg";
import S6 from "../data/socialMedia/S6.jpg";
import S7 from "../data/socialMedia/S7.jpg";
import S8 from "../data/socialMedia/S8.jpg";
import S9 from "../data/socialMedia/S9.jpg";
import S10 from "../data/socialMedia/S10.jpg";
import S11 from "../data/socialMedia/S11.jpg";
import S12 from "../data/socialMedia/S12.jpg";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(goToNext, 3000); // auto-slide every 3 sec
  //   return () => clearInterval(interval);
  // }, [currentIndex]);

  const images = [S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? images.length - 1 : prev + 1
    );
  };

  return (
    <section className="carousel-container" id="Result">
      <div className="section-title">Let your results speak for you.</div>

      <div className="main-container">
        <div className="carousel-content">
          <div className="carousel">
            <div
              className="carousel-scroll"
              style={{ right: currentIndex * 100 + "%" }}
            >
              {images.map((src, index) => (
                <div key={index} className="carousel-item">
                  <img src={src} alt={`Slide ${index}`} />
                </div>
              ))}
            </div>

            <button className="carousel-control prev" onClick={goToPrevious}>
              <FaChevronLeft />{" "}
            </button>
            <button className="carousel-control next" onClick={goToNext}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Carousel };
