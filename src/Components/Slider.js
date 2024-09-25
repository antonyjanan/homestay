// src/components/Slider.js

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Slider.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    "https://www.holidify.com/images/bgImages/ALLEPPEY.jpg",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flp-cms-production.imgix.net%2F2019-06%2FGettyImages-477678650_high.jpg%3Ffit%3Dcrop%26q%3D40%26sharp%3D10%26vib%3D20%26auto%3Dformat%26ixlib%3Dreact-8.6.4&f=1&nofb=1&ipt=bb7f8323c547530a270d09fae85da6749ab0989ff60fd24917173145d871ea7b&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ekeralatourism.net%2Fwp-content%2Fuploads%2F2018%2F10%2Fkumarakom-2.jpg&f=1&nofb=1&ipt=15521c901c03eb3cb111a9e8326202b74e06cd09b06a2e051f312afbd65ac6cd&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F61%2F7d%2F9c%2F617d9c68f8562e1bc394cebda2eca630.jpg&f=1&nofb=1&ipt=7d510b335bfc2a6095a947a3dbe82a01fc8c441a75484972aa1ab18a6981da1c&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.thomascook.in%2Fwp-content%2Fuploads%2F2018%2F05%2Fhouseboat-2031055_960_720.jpg&f=1&nofb=1&ipt=bd9543869061c7c377967d1da26388281f19b53c803e6d0274420ea5f3471625&ipo=images",
  ];

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="slider-image"
            />
          </div>
        ))}
      </Slider>
      <div className="booking-form">
        <h3>Book Your Stay</h3>
        <div className="date-picker">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="Check-in Date"
            className="date-input"
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            placeholderText="Check-out Date"
            className="date-input"
          />
        </div>
        <div className="guest-selection">
          <div className="guest-item">
            <label>Adults</label>
            <select value={adults} onChange={(e) => setAdults(e.target.value)}>
              {[...Array(10).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
          </div>
          <div className="guest-item">
            <label>Children</label>
            <select
              value={children}
              onChange={(e) => setChildren(e.target.value)}
            >
              {[...Array(10).keys()].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button className="book-button">Check Availability</button>
      </div>
    </div>
  );
};

export default ImageSlider;
