import React from "react";
import "./style.css";
import hero from "../../assets/hero.png"; // your image
import Navbar from "../../Components/Navbar";
import About1 from "../../assets/about1.png";
import About2 from "../../assets/about2.png";
import { FiArrowUpRight } from "react-icons/fi"; // import from react-icons

const Home = () => {
  return (
    <>
      <div className="home-wrap">
        <div className="frame">
          <Navbar />

          <section className="hero">
            <img className="hero-bg" src={hero} alt="presentation" />
            <div className="hero-overlay" />

            <div className="hero-content">
              <span className="eyebrow">
                <span className="pink">#</span>
                WELCOME TO ALL ABOUT CARGO
              </span>
              <h1 className="headline">
                Building Brains
                <br />
                Behind Global Trade.
              </h1>
              <button className="cta">Get Certified</button>
            </div>

            <div className="divider" />

            <div className="stats">
              <div className="stat">
                <div className="stat-number">20+</div>
                <div className="stat-label">Industry Relevant Courses</div>
              </div>
              <div className="stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Successful Graduates</div>
              </div>
              <div className="stat">
                <div className="stat-number">95%</div>
                <div className="stat-label">Job Placement Rate</div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section className="about">
        {/* LEFT: imagery cluster */}
        <div className="about-media">
          <div className="about-card about-card--main">
            <img src={About1} alt="Team learning logistics" />
            {/* Gradient badge */}
            <div className="about-badge">
              <span>
                5+ years of
                <br />
                experience
              </span>
            </div>
          </div>

          <div className="about-card about-card--thumb">
            <img src={About2} alt="Freight terminals at sunset" />
          </div>
        </div>

        {/* RIGHT: copy */}
        <div className="about-copy">
          <span className="about-eyebrow">
            <span className="pink">#</span> ABOUT US
          </span>
          <h2 className="about-title">
            Empowering the Next Generation of <span>Freight Leaders</span>
          </h2>
          <p className="about-desc">
            Welcome to All About Cargo, your trusted learning destination for
            mastering the global logistics and freight forwarding industry.
            Whether you’re an aspiring entrepreneur, a logistics student, or a
            growing freight professional, we help you build, scale, and succeed
            in the fast-evolving world of international trade.
          </p>
          <div className="about-bullets">
            <div className="bullet">
              <span className="bullet-icon">✓</span>
              Trusted by industry leaders
            </div>
            <div className="bullet">
              <span className="bullet-icon">💡</span>
              Creative Results
            </div>
          </div>
          <a href="#learn" className="about-cta">
            Learn More <FiArrowUpRight className="arrow-icon" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
