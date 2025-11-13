import React from 'react';
import { Star } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/hooks';

const Testimonials = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Software Engineer',
      content: 'The attention to detail and luxury amenities at Jasmine Grove exceeded our expectations. Our family absolutely loves our new home.',
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
      content: 'The location, amenities, and overall lifestyle at Jasmine Grove provide the perfect balance of luxury and convenience for our family.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-color-4 to-color-3 bg-clip-text text-transparent mb-4">
            What Our Residents Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover why families choose Jasmine Grove as their home
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-gradient-to-br from-color-1/10 to-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover mr-4" />
                <div>
                  <h4 className="text-lg font-semibold text-color-3">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-color-4" />
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

export default Testimonials;
