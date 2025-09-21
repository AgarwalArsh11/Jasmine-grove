import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, ChevronDown } from 'lucide-react';
import { useScrollAnimation, useIntersectionObserver } from '../hooks/hooks'; // Assuming you'll create this file

const Hero = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const scrollY = useScrollAnimation();

  const heroImageStyle = {
    backgroundAttachment: 'fixed',
    transform: `translateY(${scrollY * 0.4}px)`,
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-100 ease-out"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1579624248557-410a5629f5f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80")',
          ...heroImageStyle,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
      </div>

      <div className="relative z-10 text-center p-8 max-w-4xl mx-auto" ref={ref}>
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}
        >
          <p className="text-xl font-medium text-amber-300 mb-4 tracking-widest uppercase">
            Your Premium Home Awaits
          </p>
          <h1 className="text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            Experience Unmatched Luxury Living
          </h1>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed drop-shadow-md">
            Discover a collection of meticulously designed apartments that redefine comfort, elegance, and sophistication in the heart of the city.
          </p>
        </div>

        <div
          className={`flex flex-col sm:flex-row justify-center items-center gap-6 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}
        >
          <Link
            to="/amenities"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold rounded-full bg-amber-500 text-white shadow-xl hover:bg-amber-600 transition-colors duration-300 transform hover:scale-105"
          >
            Explore Amenities
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold rounded-full border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-colors duration-300 transform hover:scale-105"
          >
            Schedule a Visit
            <Calendar className="w-5 h-5 group-hover:text-gray-900 transition-colors" />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    </section>
  );
};

export default Hero;