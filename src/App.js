import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// Import your section/page components
import HomePage from "./pages/HomePage";
// AmenitiesPage now rendered inside HomePage
import ContactPage from "./pages/ContactPage";
import Gallery from "./pages/Gallery";
import SitePlan from "./pages/SitePlan";
import WhyChoose from "./components/WhyChoose";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <section id="home">
        <HomePage />
      </section>
      {/* About page moved inside HomePage; standalone section removed */}

      <section id="siteplan">
        <SitePlan />
      </section>

      {/* Amenities moved into HomePage; top-level section removed */}

      <section id="gallery">
        <Gallery />
      </section>

      <section id="contact">
        <ContactPage />
      </section>

      {/* Global trust/metrics strip before footer */}
      <WhyChoose />

      <Footer />
    </div>
  );
};

export default App;
