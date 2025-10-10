import React, { useState, useEffect, useCallback } from 'react';
import { Home, Menu, X } from 'lucide-react';

// Define the fixed header height to be used as a scroll offset
const HEADER_OFFSET = 80;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Removed the 'Contact' link from the standard array
  const navLinks = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Site Plan', path: 'siteplan' },
    { name: 'Amenities', path: 'amenities' },
    { name: 'Gallery', path: 'gallery' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  /**
   * Handles smooth scrolling to a target element ID, accounting for the fixed header offset.
   * @param {string} path The ID of the target element.
   */
  const handleScroll = (path) => {
    const targetElement = document.getElementById(path);
    if (targetElement) {
      // Calculate the position to scroll to
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - HEADER_OFFSET;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      // Close mobile menu after clicking a link
      setIsOpen(false);
    }
  };

  /**
   * Determines the currently active section by observing scroll position.
   * Uses useCallback to memoize the function for useEffect dependencies.
   */
  const handleScrollPosition = useCallback(() => {
    let currentActive = 'home';
    // Add 1px to scrollY to ensure the element registers as active when exactly at the top
    const scrollPosition = window.scrollY + HEADER_OFFSET + 1;

    // Combine nav links with the separate contact link for scroll detection
    const allPaths = [...navLinks.map(l => l.path), 'contact'];
    
    for (const path of allPaths) {
      const element = document.getElementById(path);
      if (element) {
        const top = element.offsetTop;
        const height = element.offsetHeight;
        
        // If scroll position is past the start of the element but before the end
        if (scrollPosition >= top && scrollPosition < top + height) {
          currentActive = path;
          break;
        }
      }
    }
    setActiveSection(currentActive);
  }, [navLinks]); // navLinks dependency is fine even if 'contact' is hardcoded in allPaths

  // Set up the scroll listener for active link detection
  useEffect(() => {
    window.addEventListener('scroll', handleScrollPosition);
    handleScrollPosition(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScrollPosition);
    };
  }, [handleScrollPosition]);


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {e.preventDefault(); handleScroll('home');}}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Jasmine Grove
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => {
              const isActive = activeSection === link.path;
              return (
                <a
                  key={link.name}
                  href={`#${link.path}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(link.path);
                  }}
                  // Apply active classes manually
                  className={`text-lg font-medium hover:text-amber-600 cursor-pointer transition-colors duration-300 relative group ${
                    isActive ? 'text-amber-600' : 'text-gray-700'
                  }`}
                >
                  {link.name}
                  {/* Active/Hover underline effect */}
                  <span className={`absolute bottom-0 left-0 w-full h-[3px] bg-amber-600 transform transition-transform duration-300 ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </a>
              );
            })}
            
            {/* Contact Button (Desktop) - Now the only contact entry */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleScroll('contact');
              }}
              // Check active state for the button as well
              className={`px-6 py-3 text-lg font-semibold rounded-full text-white shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer
                ${activeSection === 'contact' 
                    ? 'bg-amber-700 shadow-xl' 
                    : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700'
                }`}
            >
              Contact Us
            </a>
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
          {navLinks.map((link) => {
            const isActive = activeSection === link.path;
            return (
              <a
                key={link.name}
                href={`#${link.path}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(link.path);
                }}
                // Apply active classes for mobile links
                className={`block px-4 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors duration-300 ${
                  isActive ? 'bg-amber-100 text-amber-700 font-semibold' : ''
                }`}
              >
                {link.name}
              </a>
            );
          })}
          
          {/* Contact Button (Mobile) - Now the only contact entry */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleScroll('contact');
            }}
            className={`block px-4 py-3 text-lg font-semibold rounded-md mt-4 mx-4 cursor-pointer transition-colors duration-300
              ${activeSection === 'contact' 
                ? 'bg-amber-700 text-white' 
                : 'bg-amber-500 hover:bg-amber-600 text-white'
              }`}
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
