import React, { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "3bhk",
    message: "",
    visitDate: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      // Send to backend (left as TODO)
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          propertyType: "3bhk",
          message: "",
          visitDate: "",
        });
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen pt-20" id="contact">
      <section className="py-20 bg-gradient-to-br from-color-1/10 via-white to-color-1/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-color-4 to-color-3 bg-clip-text text-transparent mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to make Jasmine Grove your home? Contact our expert team to schedule a visit or get more information.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <h2 className="text-3xl font-bold text-color-3 mb-8">Schedule Your Visit</h2>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-8 h-8 bg-color-4 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-color-3 mb-2">Thank You!</h3>
                    <p className="text-gray-600">We'll contact you shortly to schedule your visit.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-color-4 transition-colors duration-300 ${errors.name ? "border-red-500" : "border-gray-200"}`}
                          placeholder="Your full name" />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-color-4 transition-colors duration-300 ${errors.email ? "border-red-500" : "border-gray-200"}`}
                          placeholder="your.email@example.com" />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-color-4 transition-colors duration-300 ${errors.phone ? "border-red-500" : "border-gray-200"}`}
                          placeholder="9876543210" />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Property Interest</label>
                        <select name="propertyType" value={formData.propertyType} onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-color-4 transition-colors duration-300">
                          <option value="3bhk">3 BHK Apartment</option>
                          <option value="4bhk">4 BHK Apartment</option>
                          <option value="both">Both Options</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Preferred Visit Date</label>
                      <input type="date" name="visitDate" value={formData.visitDate} onChange={handleInputChange}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-color-4 transition-colors duration-300" />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Message *</label>
                      <textarea name="message" value={formData.message} onChange={handleInputChange} rows="4"
                        className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-color-4 transition-colors duration-300 resize-none ${errors.message ? "border-red-500" : "border-gray-200"}`}
                        placeholder="Tell us about your requirements or any questions you have..." />
                      {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>

                    <button type="submit" className="w-full bg-gradient-to-r from-color-4 to-color-3 text-white py-4 rounded-xl font-semibold text-lg hover:from-color-3 hover:to-color-2 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl">
                      Submit Request
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-color-4 to-color-3 text-white rounded-3xl p-8">
                  <h3 className="text-2xl font-bold mb-6">Visit Our Sales Office</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-6 h-6 mt-1" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="opacity-90">Delhi Meerut Expressway, NH-24, Ghaziabad, Uttar Pradesh 201002</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-6 h-6" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="opacity-90">+91-9015750750</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-6 h-6" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="opacity-90">info@jasminegrove.co.in</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-color-3 mb-6">Office Hours</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-medium">10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-medium">11:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-color-3 to-color-2 text-white rounded-3xl p-8">
                  <h3 className="text-2xl font-bold mb-4">Why Choose Jasmine Grove?</h3>
                  <ul className="space-y-2 opacity-90">
                    <li>• Premium location in the heart of Ghaziabad</li>
                    <li>• World-class amenities and facilities</li>
                    <li>• Exceptional build quality and design</li>
                    <li>• Trusted developer with 25+ years experience</li>
                    <li>• Flexible payment plans available</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Call Button */}
          <a href="tel:+919015750750" className="fixed bottom-6 right-6 z-50 bg-color-4 text-white px-6 py-3 rounded-full shadow-2xl">
            📞 Call Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
