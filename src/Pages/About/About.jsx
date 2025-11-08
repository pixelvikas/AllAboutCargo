import React from "react";
import Hero from "../../Components/Hero";
import "./style.css";
import bgImage from "../../assets/pageherobg.png";
import { FiTarget, FiAward, FiSmile, FiCheckCircle } from "react-icons/fi";
import aboutpageimg from "../../assets/aboutpageimg.png";

const About = () => {
  return (
    <main className="about-page">
      <Hero
        title="About us"
        crumbCurrent="About Us"
        bgImage={bgImage} // ✅ Use the imported variable
      />

      <section className="alc">
        <div className="alc__grid">
          {/* LEFT */}
          <div className="alc__left">
            <h1 className="alc__title">
              Empowering the Next
              <br />
              Generation of{" "}
              <span className="alc__highlight">Freight Leaders.</span>
            </h1>

            <p className="alc__intro">
              Welcome to All About Cargo, your trusted learning destination for
              mastering the global logistics and freight forwarding industry.
              Whether you’re an aspiring entrepreneur, a logistics student, or a
              growing freight professional, we help you build, scale, and
              succeed in the fast-evolving world of international trade.
            </p>

            {/* Mission + Vision cards */}
            <div className="alc__cards">
              <div className="alc__card">
                <div className="alc__iconwrap ">
                  <FiTarget />
                </div>
                <div className="alc__cardcontent">
                  <h3 className="alc__cardtitle">Our Mission</h3>
                  <p className="alc__cardtext">
                    Our mission is simple: make freight forwarding education
                    practical, profitable, and future-ready.
                  </p>
                </div>
              </div>

              <div className="alc__divider" />

              <div className="alc__card">
                <div className="alc__iconwrap ">
                  <FiAward />
                </div>
                <div className="alc__cardcontent">
                  <h3 className="alc__cardtitle">Our Vision</h3>
                  <p className="alc__cardtext">
                    To create 10,000 freight-forwarding workforce and
                    entrepreneurs across India who build profitable, ethical,
                    and globally recognized logistics businesses.
                  </p>
                </div>
              </div>
            </div>

            {/* What you'll learn */}
            <div className="alc__learn">
              <div className="alc__learnhead">
                <span className="alc__iconwrap ">
                  <FiSmile />
                </span>
                <h4>What You’ll Learn</h4>
              </div>

              <ul className="alc__list">
                <li>
                  <FiCheckCircle className="alc__check" /> How international
                  freight forwarding works
                </li>
                <li>
                  <FiCheckCircle className="alc__check" /> Getting clients for
                  LCL/FCL exports & imports
                </li>
                <li>
                  <FiCheckCircle className="alc__check" /> Customs,
                  documentation & regulatory frameworks
                </li>
                <li>
                  <FiCheckCircle className="alc__check" /> Freight pricing,
                  negotiation & vendor management
                </li>
                <li>
                  <FiCheckCircle className="alc__check" /> Digital tools for
                  shipment tracking & automation
                </li>
                <li>
                  <FiCheckCircle className="alc__check" /> Strategies to reach
                  ₹100 crore gross profit goals
                </li>
              </ul>
            </div>

            {/* CTA */}
            <a href="/register" className="alc__cta">
              JOIN US and start your journey in the logistics industry today!
            </a>
          </div>

          {/* RIGHT */}
          <div className="alc__right">
            <div className="alc__photo">
              <img src={aboutpageimg} alt="Mentor giving a thumbs up" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
