import React from "react";
import { Shield, Leaf, Users, MapPin, Banknote, Building } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero and Company Details Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent mb-6">
              Jasmine Grove
            </h1>
            <h2 className="text-3xl font-semibold text-gray-700 mb-8">
              2/3/4 BHK Apartments in Ghaziabad NH24
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The Project "Jasmine Grove", Today, the company enjoys a strong
              presence in NCR and has made its position as one of the largest
              companies in the Real Estate Industry. The company is one of the
              fastest growing entities in the realty sector with a difference
              that offers luxury for reasonable costs, excellent customer care
              levels with highest customer satisfaction index and the highest
              imaginable standards for the welfare of its staff, society as well
              as for the environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1574345266838-8e658933b97b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Jasmine Grove Apartments"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-800">
                SAVFAB Developers Pvt. Ltd.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our group was Estd in the year 1998. We are engaged in
                fulfilling and presenting your dream home which is economically
                budgeted yet zero compromise with quality thus meeting all the
                requirement of a good and healthy living lush green surrounding
                and pollution free environment. The core objective is to cater
                the need of quality housing and timely delivery as in Saviour
                Park at Mohan Nagar Ghaziabad, Doodheshwar Apartment at Shalimar
                Garden Ghaziabad, Krishna Vihar at Pratap Vihar Ghaziabad,
                Krishna Kunj at Nehru Nagar Ghaziabad, Krishna Apartment at
                Patel Nagar Ghaziabad, Krishna Villa at Model Town Ghaziabad and
                Shopper Square Mall at Raj Nagar Ghaziabad.
              </p>
              <p className="text-lg text-amber-600 font-semibold leading-relaxed">
                SAVFAB has earned a trusted name in the Real Estate sector in
                fulfilling dream of their buyers. The group strives to achieve
                overall betterment of the society by "CREATING HOME TO
                HAPPINESS"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location and Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex space-x-4 mt-8">
                <a
                  href="#"
                  className="flex-1 text-center py-4 px-6 rounded-xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition-colors"
                >
                  <span className="inline-block mr-2">Download Brochure</span>
                </a>
                <a
                  href="tel:+919015750750"
                  className="flex-1 text-center py-4 px-6 rounded-xl bg-red-500 text-white font-semibold shadow-lg hover:bg-red-600 transition-colors"
                >
                  <span className="inline-block mr-2">Contact Us</span>
                </a>
              </div>
              <a
                href="tel:+919015750750"
                className="flex items-center justify-center mt-6 py-4 px-6 rounded-xl bg-amber-500 text-white font-bold shadow-lg hover:bg-amber-600 transition-colors"
              >
                <span className="mr-2">FEEL FREE TO Enquiry Now Call</span>
                +91-9015750750
              </a>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Key Location & Features
              </h2>
              <ul className="space-y-4 text-lg text-gray-600">
                <li className="flex items-center">
                  <MapPin className="text-amber-600 mr-3 w-6 h-6" /> Situated at
                  NH-24, Ghaziabad.
                </li>
                <li className="flex items-center">
                  <Building className="text-amber-600 mr-3 w-6 h-6" /> Proposed
                  14 Lane NH-24 Express Way
                </li>
                <li className="flex items-center">
                  <MapPin className="text-amber-600 mr-3 w-6 h-6" /> 02 min.
                  drive from Columbia Asia Hospital
                </li>
                <li className="flex items-center">
                  <MapPin className="text-amber-600 mr-3 w-6 h-6" /> 05 min.
                  drive from Lal Kaun
                </li>
                <li className="flex items-center">
                  <MapPin className="text-amber-600 mr-3 w-6 h-6" /> 10 min.
                  drive from Noida
                </li>
                <li className="flex items-center">
                  <MapPin className="text-amber-600 mr-3 w-6 h-6" /> 15 min.
                  drive from Old Railway Station.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Banking Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent mb-4">
              Our Banking Partners
            </h2>
          </div>
          <div className="flex flex-wrap justify-center items-center space-x-4 md:space-x-8">
            <img
              src="/path-to-your-hdfc-logo.png"
              alt="HDFC Bank"
              className="h-16 md:h-20 grayscale hover:grayscale-0 transition-all duration-300"
            />
            <img
              src="/path-to-your-icici-logo.png"
              alt="ICICI Bank"
              className="h-16 md:h-20 grayscale hover:grayscale-0 transition-all duration-300"
            />
            <img
              src="/path-to-your-pnb-logo.png"
              alt="Punjab National Bank"
              className="h-16 md:h-20 grayscale hover:grayscale-0 transition-all duration-300"
            />
            <img
              src="/path-to-your-central-bank-logo.png"
              alt="Central Bank of India"
              className="h-16 md:h-20 grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* Re-using the Core Values Section from your original code */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Trust & Transparency",
                description:
                  "We believe in honest communication and transparent processes throughout your journey with us.",
              },
              {
                icon: <Leaf className="w-8 h-8" />,
                title: "Sustainable Living",
                description:
                  "Our developments incorporate eco-friendly practices and sustainable materials for a greener future.",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Community Focus",
                description:
                  "We create spaces that foster community connections and enhance the quality of life for residents.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
