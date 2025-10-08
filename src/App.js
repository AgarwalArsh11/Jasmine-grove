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

const App = () => {
  return (
    <div className="App">
      <NavBar />

      {/* Each section must have the SAME id as the "path" in your navbar */}
      <section id="home" className="pt-20">
        <HomePage />
      </section>

      <section id="about" className="pt-20">
        <AboutPage />
      </section>

      <section id="siteplan" className="pt-20">
        <SitePlan />
      </section>

      <section id="amenities" className="pt-20">
        <AmenitiesPage />
      </section>

      <section id="gallery" className="pt-20">
        <Gallery />
      </section>

      <section id="contact" className="pt-20">
        <ContactPage />
      </section>

      <Footer />
    </div>
  );
};

export default App;
