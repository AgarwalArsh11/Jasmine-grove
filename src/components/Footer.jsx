import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Phone, Mail, MapPin } from 'lucide-react';

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
                Jasmine Grove
              </span> 
            </Link>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Experience unparalleled luxury living in the heart of the city. Our premium apartments redefine modern comfort and sophistication.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin className="w-5 h-5 text-amber-500" />
              <span> Delhi Meerut Expressway, NH-24, Ghaziabad, Uttar Pradesh 201002</span>
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
                <span className="text-gray-300">+91-9015750750</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-amber-500" />
                <span className="text-gray-300">info@jasminegrove.co.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Jasmine Grove. All rights reserved. | Crafted with excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;