import React from 'react';
import Hero from '../components/Hero';
import PropertyShowcase from '../components/PropertyShowcase';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <PropertyShowcase />
      <Testimonials />
    </div>
  );
};

export default HomePage;