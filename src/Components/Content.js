import React, { useEffect, useRef, useState } from "react";
import "./Content.css";
import {
  FaBed,
  FaEye,
  FaTree,
  FaWifi,
  FaUtensils,
  FaSmile,
} from "react-icons/fa"; // Example icons

const Content = () => {
  const [isVisible, setIsVisible] = useState({
    facilities: false,
    contact: false,
  });

  const sectionsRef = {
    facilities: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: true,
          }));
          observer.unobserve(entry.target);
        }
      });
    }, options);

    Object.values(sectionsRef).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionsRef).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <div className="content">
      <section
        id="facilities"
        ref={sectionsRef.facilities}
        className={isVisible.facilities ? "animate" : ""}
      >
        <h2>Our Facilities</h2>
        <div className="facilities-grid">
          <div className="facility-item">
            <FaBed className="facility-icon" />
            <h3>Comfortable Rooms</h3>
          </div>
          <div className="facility-item">
            <FaEye className="facility-icon" />
            <h3>Scenic Views</h3>
          </div>
          <div className="facility-item">
            <FaTree className="facility-icon" />
            <h3>Outdoor Area</h3>
          </div>
          <div className="facility-item">
            <FaWifi className="facility-icon" />
            <h3>Free Wi-Fi</h3>
          </div>
          <div className="facility-item">
            <FaUtensils className="facility-icon" />
            <h3>Local Cuisine</h3>
          </div>
          <div className="facility-item">
            <FaSmile className="facility-icon" />
            <h3>Friendly Service</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
