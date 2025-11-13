import React, { useState, useEffect, useCallback } from "react";
import { Home, Menu, X } from "lucide-react";

const HEADER_OFFSET = 80;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Site Plan", path: "siteplan" },
    { name: "Amenities", path: "amenities" },
    { name: "Gallery", path: "gallery" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = (path) => {
    const el = document.getElementById(path);
    if (el) {
      const offsetTop = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const updateActive = useCallback(() => {
    let current = "home";
    const scrollPos = window.scrollY + HEADER_OFFSET + 1;
    const ids = [...navLinks.map((l) => l.path), "contact"];

    for (const id of ids) {
      const element = document.getElementById(id);
      if (element) {
        const top = element.offsetTop;
        const height = element.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          current = id;
          break;
        }
      }
    }

    setActiveSection(current);
  }, [navLinks]);

  useEffect(() => {
    window.addEventListener("scroll", updateActive);
    updateActive();
    return () => window.removeEventListener("scroll", updateActive);
  }, [updateActive]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("home");
            }}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <div className="w-10 h-10 bg-[#0A2342] rounded-lg flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="text-3xl font-bold text-[#0A2342]">
              Jasmine Grove
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScroll(link.path)}
                className={`text-lg font-medium relative group ${
                  activeSection === link.path ? "text-[#0A2342]" : "text-gray-600"
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 bottom-0 h-[3px] bg-[#0A2342] transition-all duration-300 ${
                    activeSection === link.path
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </button>
            ))}

            {/* Contact Button */}
            <button
              onClick={() => handleScroll("contact")}
              className="px-6 py-3 rounded-full bg-[#0A2342] text-white text-lg font-semibold shadow-lg hover:bg-[#10305A] transition"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-[#0A2342]"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-sm shadow-xl transition-all ${
          isOpen ? "max-h-[400px] py-4" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScroll(link.path)}
              className={`text-lg font-medium py-2 w-full text-center ${
                activeSection === link.path ? "text-[#0A2342] font-semibold" : "text-gray-700"
              }`}
            >
              {link.name}
            </button>
          ))}

          <button
            onClick={() => handleScroll("contact")}
            className="w-11/12 py-3 rounded-full bg-[#0A2342] text-white font-semibold shadow-md"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
