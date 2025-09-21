import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Amenities', path: '/amenities' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Jasmine Grove
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg font-medium transition-colors duration-300 relative group
                  ${location.pathname === link.path ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'}
                `}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-[3px] bg-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300
                    ${location.pathname === link.path ? 'scale-x-100' : ''}
                  `}
                />
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-6 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg hover:from-amber-600 hover:to-amber-700 transition-colors duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="p-2 text-gray-700 hover:text-amber-600 focus:outline-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white/95 backdrop-blur-sm shadow-xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-2 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={toggleMenu}
              className={`block px-4 py-2 text-lg font-medium rounded-md
                ${location.pathname === link.path ? 'bg-amber-100 text-amber-600' : 'text-gray-700 hover:bg-gray-100'}
              `}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={toggleMenu}
            className="block px-4 py-3 text-lg font-semibold rounded-md bg-amber-500 text-white mt-4 mx-4"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;