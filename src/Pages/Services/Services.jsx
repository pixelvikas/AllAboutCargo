import React from "react";
import Hero from "../../Components/Hero";
import bgImage from "../../assets/pageherobg.png";
import {
  FiTruck,
  FiBriefcase,
  FiGlobe,
  FiCpu,
  FiUsers,
  FiGrid,
} from "react-icons/fi";
import servicesbannerbg from "../../assets/servicesbannerbg.png";
import "./style.css";
const Services = () => {
  const COURSES = [
    {
      n: 1,
      title: "Freight Forwarding Fundamentals",
      desc: "Learn how the global logistics ecosystem works...",
      icon: <FiTruck />,
    },
    {
      n: 2,
      title: "Business Setup & Growth Coaching",
      desc: "Get step-by-step guidance on how to start, scale, and sustain a freight forwarding company in India...",
      icon: <FiBriefcase />,
    },
    {
      n: 3,
      title: "International Trade Masterclass",
      desc: "Understand export–import processes, government regulations...",
      icon: <FiGlobe />,
    },
    {
      n: 4,
      title: "Digital Freight Operations",
      desc: "Master the modern tools of logistics automation, CRM systems, AI-based pricing...",
      icon: <FiCpu />,
    },
    {
      n: 5,
      title: "Mentorship & Consulting",
      desc: "Work one-on-one with industry experts to identify business bottlenecks...",
      icon: <FiUsers />,
    },
    {
      n: 6,
      title: "Placement Assistance",
      desc: "Connect with top employers and kickstart your career.",
      icon: <FiGrid />,
    },
  ];
  return (
    <>
      <Hero title="Services" crumbCurrent="SERVICES" bgImage={bgImage} />
      <section className="cg">
        <div className="cg__grid">
          {COURSES.map((c) => (
            <article key={c.n} className="cg__card">
              <div className="cg__badge">
                <span className="cg__badgeIcon">{c.icon}</span>
              </div>

              <header className="cg__head">
                <h3 className="cg__title">
                  <span className="cg__num">{c.n}.</span> {c.title}
                </h3>
              </header>

              <p className="cg__desc">{c.desc}</p>

              <a href="#" className="cg__link">
                Learn More
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="et">
        <div className="et__card">
          {/* Image */}
          <div className="et__media">
            <img
              src={servicesbannerbg}
              alt="Coach reviewing inventory in a warehouse"
            />
          </div>

          {/* Copy */}
          <div className="et__content">
            <h2 className="et__title">
              Unlock your potential
              <br />
              <span className="et__highlight">with our expertise</span>
            </h2>

            <p className="et__desc">
              We are a team of logistics professionals, industry experts, and
              certified trainers dedicated to shaping the next generation of
              freight specialists. With years of experience and deep industry
              ties, we provide top-tier coaching and hands-on training.
            </p>

            <a href="/experts" className="et__cta">
              Meet our experts
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
