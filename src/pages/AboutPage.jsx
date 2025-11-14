import React from 'react';
import { MapPin, Building } from 'lucide-react';
import finalAboutUsImage from '../assets/about/jasmine-grove-about.png';
import PropertyShowcase from '../components/PropertyShowcase';

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-0">
      <section className="py-20 bg-gradient-to-br from-color-1/10 via-white to-color-1/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-color-4 to-color-3 bg-clip-text text-transparent mb-6">
              Jasmine Grove
            </h1>
            <h2 className="text-3xl font-semibold text-color-3 mb-8">
              2/3/4 BHK Apartments in Ghaziabad NH24
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The Project "Jasmine Grove" enjoys a strong presence in NCR and has made its position as one of the reliable names in the Real Estate Industry. We focus on luxury living at reasonable costs with excellent customer care and timely delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-full flex flex-col justify-center">
              <img
                src={finalAboutUsImage}
                alt="Jasmine Grove Apartments"
                className="w-full h-auto max-h-[100vh] rounded-2xl shadow-2xl transform transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-3xl"
                style={{ aspectRatio: '9/8' }}
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-color-3">SAVFAB Developers Pvt. Ltd.</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our group was established in 1998 and has delivered multiple residential and commercial projects with a focus on quality, timely delivery and after-sales service.
              </p>
              <p className="text-lg text-color-4 font-semibold leading-relaxed">
                SAVFAB has earned a trusted name in the Real Estate sector in fulfilling dreams of buyers. We are committed to "CREATING HOME TO HAPPINESS".
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reuse property showcase (optional in About) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PropertyShowcase />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
