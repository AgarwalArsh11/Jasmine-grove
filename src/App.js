import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Import your section/page components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AmenitiesPage from './pages/AmenitiesPage';
import ContactPage from './pages/ContactPage';
import Gallery from './pages/Gallery';
import SitePlan from './pages/SitePlan';
import WhyChoose from './components/WhyChoose';

const App = () => {
  return (
    <div className="App">
      <NavBar />

      {/* Each section must have the SAME id as the "path" in your navbar */}
      <section id="home" >
        <HomePage />
      </section>

      <section id="about" >
        <AboutPage />
      </section>

      <section id="siteplan" >
        <SitePlan />
      </section>

      <section id="amenities" >
        <AmenitiesPage />
      </section>

      <section id="gallery" >
        <Gallery />
      </section>

      <section id="contact" >
        <ContactPage />
      </section>

      {/* Global trust/metrics strip before footer */}
      <WhyChoose />

      <Footer />
    </div>
  );
};

export default App;
