import React, { useState } from 'react';
import { Dumbbell, Waves, Car, Wifi, Users, Leaf } from 'lucide-react';
import amenity1 from "../assets/amenities/amenity1.avif";
import amenity2 from "../assets/amenities/amenity2.avif";
import amenity3 from "../assets/amenities/amenity3.avif";
import amenity4 from "../assets/amenities/amenity4.jpg";
import amenity5 from "../assets/amenities/amenity5.avif";
import amenity6 from "../assets/amenities/amenity6.avif";
import amenity7 from "../assets/amenities/amenity7.jpeg";
import amenity8 from "../assets/amenities/amenity8.jpg";
import amenity9 from "../assets/amenities/amenity9.webp";

const AmenitiesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const amenities = [
    { category: 'fitness', icon: <Dumbbell className="w-8 h-8" />, title: 'State-of-the-Art Gym', description: 'Fully equipped fitness center with modern equipment and personal training services', image: amenity1 },
    { category: 'recreation', icon: <Waves className="w-8 h-8" />, title: 'Infinity Swimming Pool', description: 'Rooftop infinity pool with panoramic city views and poolside lounge', image: amenity2 },
    { category: 'convenience', icon: <Car className="w-8 h-8" />, title: 'Premium Parking', description: 'Covered parking with EV charging stations and 24/7 security surveillance', image: amenity3 },
    { category: 'convenience', icon: <Wifi className="w-8 h-8" />, title: 'High-Speed Internet', description: 'Fiber-optic internet connectivity throughout the complex with Wi-Fi in common areas', image: amenity4 },
    { category: 'recreation', icon: <Users className="w-8 h-8" />, title: 'Community Clubhouse', description: 'Elegant clubhouse with event spaces, library, and recreational facilities', image: amenity5 },
    { category: 'fitness', icon: <Leaf className="w-8 h-8" />, title: 'Landscaped Gardens', description: 'Beautifully maintained gardens with walking paths and meditation areas', image: amenity6 },
    { category: 'convenience', icon: <Users className="w-8 h-8" />, title: 'Convenience Store', description: 'Retail shop offering everyday items and essentials in a convenient location', image: amenity7 },
    { category: 'fitness', icon: <Leaf className="w-8 h-8" />, title: 'Kids Play Area', description: 'Physical structures like swings, slides, and climbing elements', image: amenity8 },
    { category: 'fitness', icon: <Leaf className="w-8 h-8" />, title: 'Tennis Court', description: 'A well-built court including a properly constructed sub-base', image: amenity9 },
  ];

  const categories = [
    { id: 'all', name: 'All Amenities' },
    { id: 'fitness', name: 'Sports' },
    { id: 'recreation', name: 'Recreation' },
    { id: 'convenience', name: 'Convenience' }
  ];

  const filteredAmenities = selectedCategory === 'all' ? amenities : amenities.filter(a => a.category === selectedCategory);

  return (
    <div className="min-h-screen" id="amenities">
      <section className="py-20 bg-gradient-to-br from-color-2 via-color-3 to-color-2 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-color-1 to-color-4 bg-clip-text text-transparent">Premium</span>{' '}
            Amenities
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Discover a world of luxury amenities designed to enhance your lifestyle.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12 flex-wrap">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 m-1 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-color-4 to-color-3 text-white shadow-lg'
                    : 'text-color-3 hover:text-color-4'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAmenities.map((amenity, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                <div className="relative overflow-hidden h-64">
                  <img src={amenity.image} alt={amenity.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-color-4 rounded-full flex items-center justify-center text-white mb-2">
                      {amenity.icon}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-color-3 mb-3 hover:text-color-4 transition-colors duration-300">{amenity.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{amenity.description}</p>
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
