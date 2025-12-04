import React from "react";

const WhyChoose = () => {
  return (
    <section className="py-10 bg-gradient-to-r from-[#5A4F3A] to-[#CDB879] text-white shadow-inner">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8 text-center">
        <div>
          <h3 className="text-3xl font-bold">25+</h3>
          <p className="opacity-90">Years of Excellence</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">5000+</h3>
          <p className="opacity-90">Happy Families</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">Prime Location</h3>
          <p className="opacity-90">NH-24, Ghaziabad</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">RERA Approved</h3>
          <p className="opacity-90">Reliable & Secure</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
