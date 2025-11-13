import React from 'react';
import Hero from '../components/Hero';
import PropertyShowcase from '../components/PropertyShowcase';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <PropertyShowcase />
      {/* Quick Amenities Highlights */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-color-3 mb-4">Amenities at a Glance</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Pool · Gym · Clubhouse · Kids Play Area · Landscaped Gardens · EV Charging
          </p>
          <div className="flex justify-center gap-3">
            <a href="#amenities" className="px-6 py-3 rounded-lg bg-color-4 text-white font-semibold">Explore Amenities</a>
            <a href="#contact" className="px-6 py-3 rounded-lg border-2 border-color-4 text-color-4 font-semibold">Schedule a Visit</a>
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default HomePage;
