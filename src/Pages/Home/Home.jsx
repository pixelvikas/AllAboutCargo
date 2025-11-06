import React from "react";
import "./style.css";
import hero from "../../assets/hero.png"; // your image
import Navbar from "../../Components/Navbar";
const Home = () => {
  return (
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
  );
};

export default Home;
