import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { ArrowRight, Calendar, ChevronDown } from "lucide-react";
import { useIntersectionObserver } from "../hooks/hooks";

import heroImage from "../assets/hero/final-hero.png"; // <-- USE NEW WIDE IMAGE

const Hero = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden bg-black"
    >
      {/* FULL WIDTH CINEMATIC IMAGE */}
      <img
        src={heroImage}
        alt="Jasmine Grove"
        className="
          absolute inset-0 w-full h-full
          object-cover
          transition-all duration-700
        "
        style={{
          objectPosition: "center center",
        }}
      />

      {/* Premium dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/70"></div>

      {/* Content */}
      <div
        ref={ref}
        className={`relative z-10 text-center px-6 max-w-4xl transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 drop-shadow-xl">
          Find Your Dream Home
        </h1>

        <p className="text-lg sm:text-2xl text-gray-200 mb-10 drop-shadow-md">
          Explore our exclusive collection of luxury residences in the heart of the city.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <ScrollLink
            to="amenities"
            smooth={true}
            duration={700}
            offset={-60}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-lg 
            font-semibold rounded-full bg-white text-gray-900 hover:bg-gray-200 shadow-lg 
            hover:scale-105 transition cursor-pointer"
          >
            View Listings
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </ScrollLink>

          <ScrollLink
            to="contact"
            smooth={true}
            duration={700}
            offset={-60}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-lg 
            font-semibold rounded-full border-2 border-white text-white hover:bg-white 
            hover:text-gray-900 hover:scale-105 transition cursor-pointer"
          >
            Contact Us
            <Calendar className="w-5 h-5" />
          </ScrollLink>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-10 h-10 text-white" />
      </div>
    </section>
  );
};

export default Hero;
