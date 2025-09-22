import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Gallery from './pages/Gallery';
import NavBar from './components/NavBar';
import AboutPage from './pages/AboutPage';
import AmenitiesPage from './pages/AmenitiesPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import SitePlan from './pages/SitePlan';

// Main App Component
const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/amenities" element={<AmenitiesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/siteplan" element={<SitePlan />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
