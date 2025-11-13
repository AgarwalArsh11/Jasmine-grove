import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Home, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-color-2 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* Logo + Description */}
          <div className="md:col-span-2">
            <ScrollLink
              to="home"
              smooth={true}
              duration={600}
              className="flex items-center space-x-2 mb-6 cursor-pointer"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-color-4 to-color-3 rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-color-4 to-color-3 bg-clip-text text-transparent">
                Jasmine Grove
              </span>
            </ScrollLink>

            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Experience unparalleled luxury living in the heart of the city. Our premium apartments redefine modern comfort and sophistication.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin className="w-5 h-5 text-color-4" />
              <span>
                Delhi Meerut Expressway, NH-24, Ghaziabad, Uttar Pradesh 201002
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-color-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", id: "home" },
                { name: "About", id: "about" },
                { name: "Amenities", id: "amenities" },
                { name: "Contact", id: "contact" },
              ].map((link) => (
                <li key={link.id}>
                  <ScrollLink
                    to={link.id}
                    smooth={true}
                    duration={600}
                    offset={-80}
                    className="cursor-pointer text-gray-300 hover:text-color-4 transition-colors duration-300"
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-color-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-color-4" />
                <span className="text-gray-300">+91-9015750750</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-color-4" />
                <span className="text-gray-300">info@jasminegrove.co.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-color-3 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Jasmine Grove. All rights reserved. | Crafted with excellence 💛
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
