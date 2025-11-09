import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// UI Components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Utility
import ScrollToTop from "./Components/ScrollToTop";

// Lazy-loaded Pages
const Home = lazy(() => import("./Pages/Home/Home"));
const About = lazy(() => import("./Pages/About/About"));
const Courses = lazy(() => import("./Pages/Courses/Courses"));
const SingleCourse = lazy(() => import("./Pages/Single Course/Course"));
const Team = lazy(() => import("./Pages/Team/Team"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));

function App() {
  return (
    <Router>
      <ScrollToTop />

      {/* Flex column page shell */}
      <div className="app-shell">
        {/* Suspense fallback while lazy components load */}
        <Suspense fallback={<div className="page-loading">Loading...</div>}>
          {/* Main expands to push footer down */}
          <main className="site-main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:id" element={<SingleCourse />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<div>Page Not Found</div>} />
            </Routes>
          </main>

          <Footer />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
