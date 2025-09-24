import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Maximize,X } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/hooks'; // Assuming you'll create this file
import property1 from "../assets/property/property1.avif"
import property2 from "../assets/property/property2.avif"
import property3 from "../assets/property/property3.avif"
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
      image: property1,
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
      image: property2,
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
      image: property3,
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

export default PropertyShowcase;
