import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../src/Components/Dashboard.js";
import About from "../src/Components/About.js"; // Import the About component
import NavigationBar from "../src/Components/Navbar.js"; // Import the Navbar component
import "bootstrap/dist/css/bootstrap.min.css";
import Services from "./Components/Services.js";
import Contact from "./Components/Contact.js";

const App = () => {
  return (
    <Router>
      {/* <NavigationBar /> Add the NavigationBar at the top */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add other routes here as needed */}
      </Routes>
    </Router>
  );
};

export default App;
