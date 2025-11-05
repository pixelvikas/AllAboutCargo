import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// UI Components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Utility
import ScrollToTop from "./Components/ScrollToTop";

// Lazy-loaded Pages (for faster initial load)
const Home = lazy(() => import("./Pages/Home/Home"));
const About = lazy(() => import("./Pages/About/About"));
const Services = lazy(() => import("./Pages/Services/Services"));
const SingleService = lazy(() => import("./Pages/Single Service/Single"));
const Team = lazy(() => import("./Pages/Team/Team"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      {/* Suspense fallback while lazy components load */}
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<SingleService />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            {/* 404 fallback route */}
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </main>
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;
