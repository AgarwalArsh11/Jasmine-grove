import React from 'react';
import { Shield, Leaf, Users, MapPin, Building } from 'lucide-react';
import finalAboutUsImage from '../assets/about/jasmine-grove-about.png';
import PropertyShowcase from '../components/PropertyShowcase';



const AboutPage = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero and Company Details Section */}
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
              The Project "Jasmine Grove", Today, the company enjoys a strong presence in NCR and has made its position as one of the largest companies in the Real Estate Industry. The company is one of the fastest growing entities in the realty sector with a difference that offers luxury for reasonable costs, excellent customer care levels with highest customer satisfaction index and the highest imaginable standards for the welfare of its staff, society as well as for the environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-full flex flex-col justify-center">
              <img
                src={finalAboutUsImage}
                alt="Jasmine Grove Apartments"
                className="w-full h-auto max-h-[100vh] rounded-2xl shadow-2xl
                               transform transition-transform duration-500 ease-in-out
                               hover:scale-105 hover:shadow-3xl"
                style={{ aspectRatio: '9/8' }}
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-color-3">SAVFAB Developers Pvt. Ltd.</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our group was Estd in the year 1998. We are engaged in fulfilling and presenting your dream home which is economically budgeted yet zero compromise with quality thus meeting all the requirement of a good and healthy living lush green surrounding and pollution free environment. The core objective is to cater the need of quality housing and timely delivery as in Saviour Park at Mohan Nagar Ghaziabad, Doodheshwar Apartment at Shalimar Garden Ghaziabad, Krishna Vihar at Pratap Vihar Ghaziabad, Krishna Kunj at Nehru Nagar Ghaziabad, Krishna Apartment at Patel Nagar Ghaziabad, Krishna Villa at Model Town Ghaziabad and Shopper Square Mall at Raj Nagar Ghaziabad.
              </p>
              <p className="text-lg text-color-4 font-semibold leading-relaxed">
                SAVFAB has earned a trusted name in the Real Estate sector in fulfilling dream of their buyers. The group strives to achieve overall betterment of the society by "CREATING HOME TO HAPPINESS"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location and Features Section with Buttons & Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Column: Buttons & Features List */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-color-3 mb-6">Key Location & Features</h2>
              <ul className="space-y-4 text-lg text-gray-600">
                <li className="flex items-center">
                  <MapPin className="text-color-4 mr-3 w-6 h-6" /> Situated at NH-24, Ghaziabad.
                </li>
                <li className="flex items-center">
                  <Building className="text-color-4 mr-3 w-6 h-6" /> Proposed 14 Lane NH-24 Express Way
                </li>
                <li className="flex items-center">
                  <MapPin className="text-color-4 mr-3 w-6 h-6" /> 02 min. drive from Columbia Asia Hospital
                </li>
                <li className="flex items-center">
                  <MapPin className="text-color-4 mr-3 w-6 h-6" /> 05 min. drive from Lal Kaun
                </li>
                <li className="flex items-center">
                  <MapPin className="text-color-4 mr-3 w-6 h-6" /> 10 min. drive from Noida
                </li>
                <li className="flex items-center">
                  <MapPin className="text-color-4 mr-3 w-6 h-6" /> 15 min. drive from Old Railway Station.
                </li>
              </ul>
              <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#" className="flex-1 text-center py-4 px-6 rounded-xl bg-color-3 text-white font-semibold shadow-lg hover:bg-color-2 transition-colors">
                  <span className="inline-block mr-2">Download Brochure</span>
                </a>
                <a href="tel:+919015750750" className="flex-1 text-center py-4 px-6 rounded-xl bg-color-1 text-white font-semibold shadow-lg hover:bg-color-3 transition-colors">
                  <span className="inline-block mr-2">Contact Us</span>
                </a>
              </div>
              <a href="tel:+919015750750" className="flex items-center justify-center mt-6 py-4 px-6 rounded-xl bg-color-4 text-white font-bold shadow-lg hover:bg-color-3 transition-colors">
                <span className="mr-2">FEEL FREE TO Enquiry Now Call</span>
                +91-9015750750
              </a>
            </div>

            {/* Right Column: Map */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg h-full">
              <iframe
                src="https://maps.google.com/maps?q=Jasmine%20Grove%2C%20Ghaziabad%20NH24&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Jasmine Grove Apartments Location Map"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <PropertyShowcase />



    </div>
  );
};

export default AboutPage;
