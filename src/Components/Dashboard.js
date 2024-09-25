import React from "react";
import NavigationBar from "./Navbar";
import ImageSlider from "./Slider";
import Content from "./Content";
import Activities from "./Activities";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials"; // Import the new Testimonials component
import Footer from "./Footer";

const Dashboard = () => {
  return (
    <div>
      <NavigationBar />
      <div style={{ paddingTop: "10px" }}>
        <ImageSlider />
        <Activities />
        <Content />
        <Gallery />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
