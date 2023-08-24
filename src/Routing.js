import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import About from "./Components/about/About";
import Contact from "./Components/contact/Contact";
import Services from "./Components/Courses/Services";
import Products from "./Components/Products/Products";
import Career from "./Components/Carrer/Career";
import Testimonials from "./Components/Testimonials/Testimonials";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/product" element={<Products />} />
      <Route path="/career" element={<Career />} />
      <Route path="/testimonials" element={<Testimonials />} />
    </Routes>
  );
}

export default Routing;
