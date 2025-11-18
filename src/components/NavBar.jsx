import React, { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";

import logo from "../assets/hero/jasmine-logo.png";

const HEADER_OFFSET = 80;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

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
      const offsetTop =
        el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

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
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
      updateActive();
    };

    window.addEventListener("scroll", onScroll);
    updateActive();
    return () => window.removeEventListener("scroll", onScroll);
  }, [updateActive]);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500 
        ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">

          {/* LOGO WITH IMAGE */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleScroll("home")}
          >
            <img
              src={logo}
              alt="Jasmine Grove Logo"
              className={`w-12 h-12 object-contain transition-all duration-300 
                ${isScrolled ? "" : "brightness-110"}
              `}
            />

            <span
              className={`text-3xl font-bold transition-all duration-300 
                ${isScrolled ? "text-[#0A2A4A]" : "text-white"}
              `}
            >
              Jasmine Grove
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleScroll(link.path)}
                className={`text-lg font-medium relative group transition-all duration-300
                  ${
                    isScrolled
                      ? activeSection === link.path
                        ? "text-[#0A2A4A]"
                        : "text-gray-600"
                      : activeSection === link.path
                      ? "text-white"
                      : "text-gray-200"
                  }
                `}
              >
                {link.name}

                <span
                  className={`absolute left-0 bottom-0 h-[2px] transition-all duration-300
                    ${isScrolled ? "bg-[#0A2A4A]" : "bg-white"}
                    ${
                      activeSection === link.path
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                />
              </button>
            ))}

            <button
              onClick={() => handleScroll("contact")}
              className={`
                px-6 py-3 rounded-full text-lg font-semibold shadow-md transition
                ${
                  isScrolled
                    ? "bg-[#0A2A4A] text-white hover:bg-[#123961]"
                    : "bg-white/20 text-white border border-white hover:bg-white/30"
                }
              `}
            >
              Contact Us
            </button>
          </div>

          <button
            className={`md:hidden p-2 transition-all duration-300 ${
              isScrolled ? "text-[#0A2A4A]" : "text-white"
            }`}
            onClick={toggleMenu}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-500 overflow-hidden
          ${isOpen ? "max-h-[400px] py-4 bg-white shadow-xl" : "max-h-0"}
        `}
      >
        <div className="flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => handleScroll(link.path)}
              className="text-lg py-2 w-full text-center text-[#0A2A4A] font-medium"
            >
              {link.name}
            </button>
          ))}

          <button
            onClick={() => handleScroll("contact")}
            className="w-11/12 py-3 rounded-full bg-[#0A2A4A] text-white font-semibold shadow-md"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
