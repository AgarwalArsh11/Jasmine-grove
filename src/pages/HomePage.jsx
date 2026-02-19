import React from "react";
import Hero from "../components/Hero";
import AboutPage from "./AboutPage";
import AmenitiesPage from "./AmenitiesPage";
// Testimonials removed from HomePage — keep global instances in other pages

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutPage />
      <AmenitiesPage />
      {/* Amenities at a Glance section removed per request */}

      {/* Testimonials removed from HomePage (first occurrence) */}
    </div>
  );
};

export default HomePage;
