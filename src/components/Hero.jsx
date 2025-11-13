import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2400&auto=format&fit=crop")',
        }}
      ></div>

      {/* Soft Luxury Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 backdrop-blur-[2px]" />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-snug drop-shadow-2xl mb-6">
          Find Your Dream Home
        </h1>

        <p className="text-lg sm:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow">
          Explore our exclusive collection of luxury residences crafted with
          elegance, comfort, and modern living in the heart of the city.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
          <ScrollLink
            to="properties"
            smooth={true}
            duration={700}
            offset={-80}
            className="px-10 py-4 rounded-full bg-[#0A2342] text-white font-semibold text-lg shadow-xl hover:bg-[#0d2d55] transition cursor-pointer"
          >
            View Listings
          </ScrollLink>

          <ScrollLink
            to="contact"
            smooth={true}
            duration={700}
            offset={-80}
            className="px-10 py-4 rounded-full bg-white text-[#0A2342] font-semibold text-lg shadow-lg hover:bg-gray-100 transition cursor-pointer"
          >
            Contact Us
          </ScrollLink>
        </div>
      </div>

      {/* Down Arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <ChevronDown className="w-10 h-10 text-white/90 drop-shadow-xl" />
      </div>
    </section>
  );
};

export default Hero;
