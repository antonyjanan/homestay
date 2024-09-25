import React from "react";
import "./Services.css"; // You can reuse the same CSS file or create a separate one if needed
import NavigationBar from "./Navbar";

const Services = () => {
  return (
    <>
      <NavigationBar />
      <div className="about-container">
        <div className="about-content">
          <h1>Our Services</h1>
          <p>
            At our homestay, we provide a range of services to ensure your stay
            is comfortable and enjoyable. From personalized room service to
            guided tours of the local area, we are here to cater to all your
            needs. Our services include:
          </p>
          <ul>
            <li>24/7 Room Service</li>
            <li>Complimentary Breakfast</li>
            <li>Guided Nature Walks</li>
            <li>Local Cuisine Cooking Classes</li>
            <li>Transportation to Nearby Attractions</li>
          </ul>
        </div>
        <div className="about-images">
          <img
            src="https://www.kumarakomhouseboatholidays.com/assets/images/image2(newhouseboatimage).JPG"
            alt="Room Service"
            className="image image1"
          />
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.lakedistrict.gov.uk%2F__data%2Fassets%2Fimage%2F0030%2F429186%2Fguided-walks-2022-1.jpg&f=1&nofb=1&ipt=58d2a35f2c3e918c8489a5fe7e44d903ee86e4e0efc1076e6a872de92e1c94f5&ipo=images"
            alt="Guided Walk"
            className="image image2"
          />
          <img
            src="https://www.visittnt.com/blog/wp-content/uploads/2019/06/cuisine-of-alleppey.jpg"
            alt="Local Cuisine"
            className="image image3"
          />
        </div>
      </div>
    </>
  );
};

export default Services;
