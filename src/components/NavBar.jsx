import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Home, Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Site Plan', path: 'siteplan' },
    { name: 'Amenities', path: 'amenities' },
    { name: 'Gallery', path: 'gallery' },
    { name: 'Contact', path: 'contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-color-4 to-color-3 rounded-lg flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-color-4 to-color-3 bg-clip-text text-transparent">
              Jasmine Grove
            </span>
          </ScrollLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.path}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass="text-color-4"
                className="text-lg font-medium text-color-3 hover:text-color-4 cursor-pointer transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-color-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </ScrollLink>
            ))}
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="px-6 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-color-4 to-color-3 text-white shadow-lg hover:from-color-3 hover:to-color-2 transition-colors duration-300 transform hover:scale-105 cursor-pointer"
            >
              Contact Us
            </ScrollLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="p-2 text-color-3 hover:text-color-4 focus:outline-none">
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
            <ScrollLink
              key={link.name}
              to={link.path}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={toggleMenu}
              className="block px-4 py-2 text-lg font-medium rounded-md text-color-3 hover:bg-gray-100 cursor-pointer"
            >
              {link.name}
            </ScrollLink>
          ))}

          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={toggleMenu}
            className="block px-4 py-3 text-lg font-semibold rounded-md bg-color-4 text-white mt-4 mx-4 cursor-pointer"
          >
            Contact Us
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
