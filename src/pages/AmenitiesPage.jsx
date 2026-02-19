import React from "react";
import { Dumbbell, Waves, Car, Wifi, Users, Leaf } from "lucide-react";
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
  const amenities = [
    {
      category: "fitness",
      icon: <Dumbbell className="w-8 h-8" />,
      title: "State-of-the-Art Gym",
      description:
        "Fully equipped fitness center with modern equipment and personal training services",
      image: amenity1,
    },
    {
      category: "recreation",
      icon: <Waves className="w-8 h-8" />,
      title: "Infinity Swimming Pool",
      description:
        "Rooftop infinity pool with panoramic city views and poolside lounge",
      image: amenity2,
    },
    {
      category: "convenience",
      icon: <Car className="w-8 h-8" />,
      title: "Premium Parking",
      description:
        "Covered parking with EV charging stations and 24/7 security surveillance",
      image: amenity3,
    },
    {
      category: "convenience",
      icon: <Wifi className="w-8 h-8" />,
      title: "High-Speed Internet",
      description:
        "Fiber-optic internet connectivity throughout the complex with Wi-Fi in common areas",
      image: amenity4,
    },
    {
      category: "recreation",
      icon: <Users className="w-8 h-8" />,
      title: "Community Clubhouse",
      description:
        "Elegant clubhouse with event spaces, library, and recreational facilities",
      image: amenity5,
    },
    {
      category: "fitness",
      icon: <Leaf className="w-8 h-8" />,
      title: "Landscaped Gardens",
      description:
        "Beautifully maintained gardens with walking paths and meditation areas",
      image: amenity6,
    },
    {
      category: "convenience",
      icon: <Users className="w-8 h-8" />,
      title: "Convenience Store",
      description:
        "Retail shop offering everyday items and essentials in a convenient location",
      image: amenity7,
    },
    {
      category: "fitness",
      icon: <Leaf className="w-8 h-8" />,
      title: "Kids Play Area",
      description:
        "Physical structures like swings, slides, and climbing elements",
      image: amenity8,
    },
    {
      category: "fitness",
      icon: <Leaf className="w-8 h-8" />,
      title: "Tennis Court",
      description:
        "A well-built court including a properly constructed sub-base",
      image: amenity9,
    },
  ];

  return (
    <div className="min-h-screen" id="amenities">
      <section className="py-10 bg-gradient-to-br from-color-2 via-color-3 to-color-2 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-color-1 to-color-4 bg-clip-text text-transparent">
              Premium
            </span>{" "}
            Amenities
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Discover a world of luxury amenities designed to enhance your
            lifestyle.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category buttons removed per request */}

          <div className="overflow-hidden">
            <div className="animate-scroll-logos py-6">
              <div className="inline-flex">
                {[...Array(2)].map((_, listIndex) => (
                  <React.Fragment key={listIndex}>
                    {amenities.map((amenity, i) => (
                      <div
                        key={i}
                        className="flex-shrink-0 w-80 h-64 rounded-3xl bg-white shadow-xl overflow-hidden mx-4 group relative"
                      >
                        <img
                          src={amenity.image}
                          alt={amenity.title}
                          className="w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-80 transition-opacity" />

                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="w-12 h-12 bg-color-4/90 rounded-full flex items-center justify-center mb-2">
                            {amenity.icon}
                          </div>
                          <h3 className="text-lg font-bold drop-shadow-md">
                            {amenity.title}
                          </h3>
                          <p className="text-sm text-white/80 max-w-[14rem] truncate">
                            {amenity.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AmenitiesPage;
