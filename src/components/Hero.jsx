import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { ArrowRight, Calendar, ChevronDown } from "lucide-react";
import { useScrollAnimation, useIntersectionObserver } from "../hooks/hooks";

const Hero = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const scrollY = useScrollAnimation();

  const heroImageStyle = {
    backgroundAttachment: "fixed",
    transform: `translateY(${scrollY * 0.4}px)`,
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-100 ease-out"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1579624248557-410a5629f5f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80")',
          ...heroImageStyle,
        }}
      >
        {/* BACKGROUND CHANGE 1: Using new dark blue #132440 */}
        <div className="absolute inset-0 bg-color-2/60 backdrop-blur-sm" />

        {/* BACKGROUND CHANGE 2: Using new dark blue #132440 */}
        <div className="absolute inset-0 bg-gradient-to-t from-color-2/90 via-color-2/60 to-transparent" />
      </div>

      {/* Hero Content (Uses #BF092F colors for contrast) */}
      <div
        className="relative z-10 text-center p-6 sm:p-8 max-w-4xl mx-auto"
        ref={ref}
      >
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-10"
          }`}
        >
          {/* Foreground Text: Soft Teal Accent */}
          <p className="text-xl sm:text-2xl font-semibold mb-4 tracking-widest uppercase text-color-4 drop-shadow-lg">
            Your Premium Home Awaits
          </p>
          {/* Foreground Text: Light Off-White Main Heading */}
          <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 leading-tight tracking-tight text-white drop-shadow-2xl">
            Experience Unmatched Luxury Living
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-10 leading-relaxed drop-shadow-md">
            Discover a collection of meticulously designed apartments that
            redefine comfort, elegance, and sophistication in the heart of the
            city.
          </p>
        </div>

        {/* Buttons (Using #BF092F) */}
        <div
          className={`flex flex-col sm:flex-row justify-center items-center gap-6 transition-all duration-1000 delay-300 ${
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-10"
          }`}
        >
          {/* Primary Button: Solid #BF092F Background */}
          <ScrollLink
            to="amenities"
            smooth={true}
            duration={700}
            offset={-70}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-lg sm:text-xl font-semibold rounded-full bg-color-1 text-color-2 shadow-xl hover:scale-105 transition-all duration-300 transform cursor-pointer"
          >
            Explore Amenities
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
          </ScrollLink>

          {/* Secondary Button: #BF092F Border/Text */}
          <ScrollLink
            to="contact"
            smooth={true}
            duration={700}
            offset={-70}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-lg sm:text-xl font-semibold rounded-full border-2 border-color-1 text-color-1 shadow-lg hover:bg-color-1 hover:text-white hover:scale-105 transition-all duration-300 transform cursor-pointer"
          >
            Schedule a Visit
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6 group-hover:text-white transition-colors" />
          </ScrollLink>
        </div>
      </div>

      {/* Scroll Down Icon (Using #BF092F) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 sm:w-10 sm:h-10 text-color-1 drop-shadow-xl" />
      </div>
    </section>
  );
};

export default Hero;
