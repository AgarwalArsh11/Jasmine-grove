import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { ArrowRight, Calendar, ChevronDown } from "lucide-react";
import { useIntersectionObserver } from "../hooks/hooks";

import heroImage from "../assets/hero/final-hero.png";

const Hero = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden"
    >
      <img
        src={heroImage}
        alt="Jasmine Grove"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center top" }}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />

      {/* HERO CONTENT */}
      <div
        ref={ref}
        className={`relative z-10 text-center px-6 max-w-4xl transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 drop-shadow-lg leading-tight">
          Find Your Dream Home
        </h1>

        <p className="text-sm sm:text-lg md:text-2xl text-gray-200 mb-10 drop-shadow-md">
          Explore our exclusive collection of luxury residences in the heart of
          the city.
        </p>

        {/* Buttons removed as requested */}
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 md:w-10 md:h-10 text-white" />
      </div>
    </section>
  );
};

export default Hero;
