import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Star, Home, Users, Wifi, Car, Waves, Dumbbell, Shield, Leaf, Menu, X, ArrowRight, Calendar, Bed, Bath, Maximize } from 'lucide-react';

// Animation Hook
const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return scrollY;
};

// Intersection Observer Hook
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [elementRef, setElementRef] = useState(null);

  useEffect(() => {
    if (!elementRef) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, { threshold: 0.1, ...options });

    observer.observe(elementRef);
    return () => observer.disconnect();
  }, [elementRef]);

  return [setElementRef, isIntersecting];
};

// Navigation Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Amenities', path: '/amenities' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 backdrop-blur-lg shadow-xl' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-amber-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className={`text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent ${
              scrolled ? '' : 'text-white'
            }`}>
              Luxe Living
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative font-medium transition-all duration-300 hover:text-amber-600 ${
                  location.pathname === link.path
                    ? 'text-amber-600'
                    : scrolled ? 'text-gray-700' : 'text-white'
                } group`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-2 rounded-full font-medium hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-gray-700' : 'text-white'}`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg rounded-2xl mt-2 p-6 shadow-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 font-medium transition-colors duration-300 hover:text-amber-600 ${
                  location.pathname === link.path ? 'text-amber-600' : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block mt-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-full font-medium text-center hover:from-amber-600 hover:to-amber-700 transition-all duration-300"
            >
              Book Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Component
const Hero = () => {
  const scrollY = useScrollAnimation();
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div ref={ref} className="relative h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900">
      {/* Background with Parallax */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          backgroundImage: 'url("https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 bg-clip-text text-transparent">
              Luxe
            </span>
            <br />
            Living
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience the pinnacle of modern luxury living with our premium 3-4 BHK apartments
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/amenities"
              className="group bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 flex items-center gap-2"
            >
              Explore Amenities
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Schedule Visit
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </div>
    </div>
  );
};

// Property Showcase Component
const PropertyShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [ref, isVisible] = useIntersectionObserver();

  const properties = [
    {
      id: 1,
      type: '3bhk',
      title: 'Elegant 3 BHK Suite',
      area: '1,450 sq ft',
      bedrooms: 3,
      bathrooms: 2,
      price: '₹1.2 Cr',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80',
      features: ['Master Bedroom', 'Modern Kitchen', 'Balcony', 'Study Room']
    },
    {
      id: 2,
      type: '4bhk',
      title: 'Luxury 4 BHK Penthouse',
      area: '1,850 sq ft',
      bedrooms: 4,
      bathrooms: 3,
      price: '₹1.8 Cr',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80',
      features: ['Terrace Garden', 'Premium Fixtures', 'Walk-in Closet', 'Home Theater']
    },
    {
      id: 3,
      type: '3bhk',
      title: 'Premium 3 BHK Vista',
      area: '1,350 sq ft',
      bedrooms: 3,
      bathrooms: 2,
      price: '₹1.1 Cr',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      features: ['City View', 'Modular Kitchen', 'Wooden Flooring', 'Smart Home']
    }
  ];

  const filters = [
    { id: 'all', name: 'All Units' },
    { id: '3bhk', name: '3 BHK' },
    { id: '4bhk', name: '4 BHK' }
  ];

  const filteredProperties = activeFilter === 'all' 
    ? properties 
    : properties.filter(p => p.type === activeFilter);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent mb-4">
            Exquisite Residences
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully curated collection of luxury apartments designed for the discerning homeowner
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white rounded-full p-2 shadow-lg">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-amber-600'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property, index) => (
            <div
              key={property.id}
              className={`bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-500 group cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedProperty(property)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-amber-600 font-bold">
                  {property.price}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                  {property.title}
                </h3>
                <div className="flex items-center gap-4 text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    <span>{property.bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    <span>{property.bathrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Maximize className="w-4 h-4" />
                    <span>{property.area}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {property.features.slice(0, 2).map((feature) => (
                    <span
                      key={feature}
                      className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                  {property.features.length > 2 && (
                    <span className="text-amber-600 text-sm font-medium">
                      +{property.features.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Property Modal */}
        {selectedProperty && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-auto">
              <div className="relative">
                <img
                  src={selectedProperty.image}
                  alt={selectedProperty.title}
                  className="w-full h-96 object-cover"
                />
                <button
                  onClick={() => setSelectedProperty(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-2xl font-bold text-amber-600">{selectedProperty.price}</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">{selectedProperty.title}</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Bed className="w-5 h-5 text-amber-600" />
                    <span>{selectedProperty.bedrooms} Bedrooms</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Bath className="w-5 h-5 text-amber-600" />
                    <span>{selectedProperty.bathrooms} Bathrooms</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Maximize className="w-5 h-5 text-amber-600" />
                    <span>{selectedProperty.area}</span>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Features & Amenities</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProperty.features.map((feature) => (
                      <span
                        key={feature}
                        className="bg-amber-50 text-amber-700 px-4 py-2 rounded-full font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white text-center py-4 rounded-full font-semibold text-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300"
                  onClick={() => setSelectedProperty(null)}
                >
                  Schedule a Visit
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Testimonials Component
const Testimonials = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Software Engineer',
      content: 'The attention to detail and luxury amenities at Luxe Living exceeded our expectations. Our family absolutely loves our new home.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Marketing Director',
      content: 'From the initial viewing to moving in, the entire experience was seamless. The build quality and amenities are truly world-class.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b4c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      name: 'Amit Patel',
      role: 'Business Owner',
      content: 'The location, amenities, and overall lifestyle at Luxe Living provide the perfect balance of luxury and convenience for our family.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent mb-4">
            What Our Residents Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover why families choose Luxe Living as their home
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-gradient-to-br from-amber-50 to-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic leading-relaxed">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Luxe Living
              </span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Experience unparalleled luxury living in the heart of the city. Our premium apartments redefine modern comfort and sophistication.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin className="w-5 h-5 text-amber-500" />
              <span>123 Premium Avenue, Mumbai, Maharashtra 400001</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-amber-400">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Amenities', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-amber-400">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-amber-500" />
                <span className="text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-amber-500" />
                <span className="text-gray-300">info@luxeliving.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Luxe Living. All rights reserved. | Crafted with excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

// Home Page
const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <PropertyShowcase />
      <Testimonials />
    </div>
  );
};

// About Page
const AboutPage = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent mb-6">
              About Luxe Living
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              For over two decades, we've been crafting exceptional living spaces that embody luxury, comfort, and innovation. Our commitment to excellence has made us a trusted name in premium real estate development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-10'
            }`}>
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Luxury Building"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-10'
            }`}>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                To create living spaces that inspire, comfort, and elevate the everyday experience. We believe that home is more than just a place—it's where life's most precious moments unfold.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-600">25+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-600">500+</div>
                  <div className="text-gray-600">Happy Families</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-600">50+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-600">100%</div>
                  <div className="text-gray-600">Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Trust & Transparency",
                description: "We believe in honest communication and transparent processes throughout your journey with us."
              },
              {
                icon: <Leaf className="w-8 h-8" />,
                title: "Sustainable Living",
                description: "Our developments incorporate eco-friendly practices and sustainable materials for a greener future."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Community Focus",
                description: "We create spaces that foster community connections and enhance the quality of life for residents."
              }
            ].map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Amenities Page
const AmenitiesPage = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const amenities = [
    {
      category: 'fitness',
      icon: <Dumbbell className="w-8 h-8" />,
      title: 'State-of-the-Art Gym',
      description: 'Fully equipped fitness center with modern equipment and personal training services',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      category: 'recreation',
      icon: <Waves className="w-8 h-8" />,
      title: 'Infinity Swimming Pool',
      description: 'Stunning rooftop infinity pool with panoramic city views and poolside lounge',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      category: 'convenience',
      icon: <Car className="w-8 h-8" />,
      title: 'Premium Parking',
      description: 'Covered parking with EV charging stations and 24/7 security surveillance',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      category: 'convenience',
      icon: <Wifi className="w-8 h-8" />,
      title: 'High-Speed Internet',
      description: 'Fiber-optic internet connectivity throughout the complex with Wi-Fi in common areas',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      category: 'recreation',
      icon: <Users className="w-8 h-8" />,
      title: 'Community Clubhouse',
      description: 'Elegant clubhouse with event spaces, library, and recreational facilities',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      category: 'fitness',
      icon: <Leaf className="w-8 h-8" />,
      title: 'Landscaped Gardens',
      description: 'Beautifully maintained gardens with walking paths and meditation areas',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Amenities' },
    { id: 'fitness', name: 'Fitness & Wellness' },
    { id: 'recreation', name: 'Recreation' },
    { id: 'convenience', name: 'Convenience' }
  ];

  const filteredAmenities = selectedCategory === 'all' 
    ? amenities 
    : amenities.filter(a => a.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              Premium
            </span>{' '}
            Amenities
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Discover a world of luxury amenities designed to enhance your lifestyle and create unforgettable experiences
          </p>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex justify-center mb-16">
            <div className="flex bg-white rounded-full p-2 shadow-lg flex-wrap justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 m-1 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-amber-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Amenities Grid */}
          <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAmenities.map((amenity, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-500 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white mb-2">
                      {amenity.icon}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                    {amenity.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Contact Page
const ContactPage = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '3bhk',
    message: '',
    visitDate: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      // Here you would typically send the data to your backend
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          propertyType: '3bhk',
          message: '',
          visitDate: ''
        });
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to make Luxe Living your home? Contact our expert team to schedule a visit or get more information about our premium apartments.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-10'
            }`}>
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Schedule Your Visit</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
                    <p className="text-gray-600">We'll contact you shortly to schedule your visit.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-amber-500 transition-colors duration-300 ${
                            errors.name ? 'border-red-500' : 'border-gray-200'
                          }`}
                          placeholder="Your full name"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-amber-500 transition-colors duration-300 ${
                            errors.email ? 'border-red-500' : 'border-gray-200'
                          }`}
                          placeholder="your.email@example.com"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-amber-500 transition-colors duration-300 ${
                            errors.phone ? 'border-red-500' : 'border-gray-200'
                          }`}
                          placeholder="9876543210"
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Property Interest</label>
                        <select
                          name="propertyType"
                          value={formData.propertyType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-amber-500 transition-colors duration-300"
                        >
                          <option value="3bhk">3 BHK Apartment</option>
                          <option value="4bhk">4 BHK Apartment</option>
                          <option value="both">Both Options</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Preferred Visit Date</label>
                      <input
                        type="date"
                        name="visitDate"
                        value={formData.visitDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-amber-500 transition-colors duration-300"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="4"
                        className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-amber-500 transition-colors duration-300 resize-none ${
                          errors.message ? 'border-red-500' : 'border-gray-200'
                        }`}
                        placeholder="Tell us about your requirements or any questions you have..."
                      />
                      {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-amber-600 hover:to-amber-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Submit Request
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className={`transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-10'
            }`}>
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-3xl p-8">
                  <h3 className="text-2xl font-bold mb-6">Visit Our Sales Office</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-6 h-6 mt-1" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="opacity-90">123 Premium Avenue, Bandra West, Mumbai, Maharashtra 400050</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-6 h-6" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="opacity-90">+91 98765 43210</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-6 h-6" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="opacity-90">sales@luxeliving.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Office Hours</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-medium">10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-medium">11:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-3xl p-8">
                  <h3 className="text-2xl font-bold mb-4">Why Choose Luxe Living?</h3>
                  <ul className="space-y-2 opacity-90">
                    <li>• Premium location in the heart of Mumbai</li>
                    <li>• World-class amenities and facilities</li>
                    <li>• Exceptional build quality and design</li>
                    <li>• Trusted developer with 25+ years experience</li>
                    <li>• Flexible payment plans available</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/amenities" element={<AmenitiesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;