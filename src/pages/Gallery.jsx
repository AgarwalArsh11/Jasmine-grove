import React, { useState } from "react";
import img1 from "../assets/gallery/img1.jpg";
import img2 from "../assets/gallery/img2.jpg";
import img3 from "../assets/gallery/img3.jpg";
import img4 from "../assets/gallery/img4.jpg";
import img5 from "../assets/gallery/img5.jpg";
import img6 from "../assets/gallery/img6.jpg";
import img7 from "../assets/gallery/img7.jpg";
import img8 from "../assets/gallery/img8.jpg";
import img9 from "../assets/gallery/img9.jpg";
import img10 from "../assets/gallery/img10.jpg";
import hdfcLogo from '../assets/about/logo-1.png';
import iciciLogo from '../assets/about/logo-2.png';
import pnbLogo from '../assets/about/logo-3.png';
import sbiLogo from '../assets/about/logo-4.png';
import centralBankLogo from '../assets/about/logo-5.png';
import Testimonials from '../components/Testimonials';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen pt-0">
      <section className="py-10 bg-gradient-to-br from-color-1/10 via-white to-color-1/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-color-4 to-color-3 bg-clip-text text-transparent mb-6">Our Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Take a closer look at our premium residences, interiors and lifestyle amenities.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[250px]">
            {images.map((src, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-3xl shadow-lg group cursor-pointer ${index % 5 === 0 ? "md:row-span-2" : ""}`}
                onClick={() => setSelectedImage(src)}
              >
                <img src={src} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" loading="lazy" />
                {/* Better overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 flex items-end p-6 text-white text-lg font-semibold transition">
                  View ↗
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-5xl w-full mx-4">
            <img src={selectedImage} alt="Enlarged" className="w-full h-auto max-h-[90vh] rounded-2xl shadow-2xl" />
            <button className="absolute top-4 right-4 text-white text-2xl font-bold bg-black bg-opacity-50 px-3 py-1 rounded-full" onClick={() => setSelectedImage(null)}>✕</button>
          </div>
        </div>
      )}

      {/* Banking Partners */}
      <section className="py-16 bg-gray-50">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-color-4 to-color-3 bg-clip-text text-transparent mb-6">Our Banking Partners</h2>
        </div>
        <div className="overflow-hidden">
          <div className="flex space-x-12 animate-scroll-logos">
            {[...Array(2)].map((_, listIndex) => (
              <React.Fragment key={listIndex}>
                <img src={hdfcLogo} alt="HDFC Bank" className="h-20 flex-shrink-0 object-contain transition-all duration-300" />
                <img src={iciciLogo} alt="ICICI Bank" className="h-20 flex-shrink-0 object-contain transition-all duration-300" />
                <img src={pnbLogo} alt="Punjab National Bank" className="h-20 flex-shrink-0 object-contain transition-all duration-300" />
                <img src={sbiLogo} alt="SBI Bank" className="h-20 flex-shrink-0 object-contain transition-all duration-300" />
                <img src={centralBankLogo} alt="Central Bank of India" className="h-20 flex-shrink-0 object-contain transition-all duration-300" />
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-color-4 to-color-3 bg-clip-text text-transparent mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Trust & Transparency", desc: "We believe in honest communication and transparent processes." },
              { title: "Sustainable Living", desc: "Our developments incorporate eco-friendly practices for a greener future." },
              { title: "Community Focus", desc: "We create spaces that foster community connections." }
            ].map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-color-1/10 to-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-color-4 to-color-3 rounded-full flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {/* icon placeholder */}
                </div>
                <h3 className="text-2xl font-bold text-color-3 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default Gallery;
