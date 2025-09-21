import React, { useState } from 'react';
import { Dumbbell, Waves, Car, Wifi, Users, Leaf } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/hooks'; // Assuming you'll create this file

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

export default AmenitiesPage;