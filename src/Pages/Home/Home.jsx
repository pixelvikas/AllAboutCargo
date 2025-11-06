import React from "react";
import "./style.css";

import hero from "../../assets/hero.png";
import Navbar from "../../Components/Navbar"; // <- ensure folder case matches

import About1 from "../../assets/about1.png";
import About2 from "../../assets/about2.png";
import Whoarewe from "../../assets/whoarewe.png";
import whychoose from "../../assets/whychoose.png";
import exp1 from "../../assets/exp1.png";
import exp2 from "../../assets/exp2.png";
import exp3 from "../../assets/exp3.png";
import exp4 from "../../assets/exp4.png";
import exp5 from "../../assets/exp5.png";
import exp6 from "../../assets/exp6.png";
import exp7 from "../../assets/exp7.png";
import exp8 from "../../assets/exp8.png";

import { FiArrowUpRight } from "react-icons/fi";
import {
  FaTruckLoading,
  FaBoxes,
  FaIdCard,
  FaCogs,
  FaBuilding,
} from "react-icons/fa";

import {
  FaBookOpen,
  FaChalkboardTeacher,
  FaCertificate,
  FaUserTie,
} from "react-icons/fa";

/* ---------- static data outside component ---------- */
const services = [
  {
    id: 1,
    icon: <FaTruckLoading />,
    title: "Freight Forwarding Fundamentals",
    desc: "Learn how the global logistics ecosystem works...",
  },
  {
    id: 2,
    icon: <FaBoxes />,
    title: "Business Setup & Growth Coaching",
    desc: "Get step-by-step guidance on how to start, scale, and sustain...",
  },
  {
    id: 3,
    icon: <FaIdCard />,
    title: "International Trade Masterclass",
    desc: "Understand export–import processes, government regulations...",
  },
  {
    id: 4,
    icon: <FaCogs />,
    title: "Digital Freight Operations",
    desc: "Master tools of logistics automation, CRM systems, AI-based pricing...",
  },
  {
    id: 5,
    icon: <FaUserTie />,
    title: "Mentorship & Consulting",
    desc: "Work one-on-one with industry experts to identify bottlenecks...",
  },
  {
    id: 6,
    icon: <FaBuilding />,
    title: "Placement Assistance",
    desc: "Connect with top employers and kickstart your career.",
  },
];

const chips = [
  { img: exp1, label: "Hands-on Training" },
  { img: exp8, label: "Career" },
  { img: exp2, label: "Global Network" },
  { img: exp7, label: "Experience" },
  { img: exp3, label: "Flexible Learning" },
  { img: exp4, label: "Growth" },
  { img: exp6, label: "Certifications" },
  { img: exp5, label: "Latest Trends" },
];
const points = [
  {
    title: "Industry-Backed Expertise",
    desc: "Learn from freight professionals with decades of hands-on experience.",
  },
  {
    title: "Action-Oriented Curriculum",
    desc: "Real-world templates, case studies, and business tools.",
  },
  {
    title: "Step-by-Step Business Guidance",
    desc: "From registration to revenue generation.",
  },
  {
    title: "Lifetime Community Access",
    desc: "Join India’s fastest-growing network of freight entrepreneurs.",
  },
  {
    title: "Affordable & Flexible Learning",
    desc: "Online, hybrid, and in-person options to suit your schedule.",
  },
];
const STEPS = [
  {
    id: 1,
    icon: <FaBookOpen />,
    title: "01. Choose a Course",
    desc: "Select from our specialized freight & logistics programs.",
  },
  {
    id: 2,
    icon: <FaChalkboardTeacher />,
    title: "02. Learn from Experts",
    desc: "Engage in live training sessions & hands-on exercises.",
  },
  {
    id: 3,
    icon: <FaCertificate />,
    title: "03. Get Certified",
    desc: "Earn industry-recognized credentials.",
  },
  {
    id: 4,
    icon: <FaUserTie />,
    title: "04. Land Your Dream Job",
    desc: "Leverage our placement support to secure top roles.",
  },
];
/* ---------- component ---------- */
function Home() {
  return (
    <>
      {/* HERO */}
      <div className="home-wrap">
        <div className="frame">
          <Navbar />

          <section className="hero">
            <img className="hero-bg" src={hero} alt="Class presentation" />
            <div className="hero-overlay" />

            <div className="hero-content">
              <span className="eyebrow">
                <span className="pink">#</span>WELCOME TO ALL ABOUT CARGO
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
                <div className="stat-label">Industry-Relevant Courses</div>
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

      {/* ABOUT */}
      <section className="about">
        <div className="about-media">
          <div className="about-card about-card--main">
            <img src={About1} alt="Team learning logistics" />
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
            Whether you're an aspiring entrepreneur, a logistics student, or a
            growing freight professional, we help you build, scale, and succeed
            in the fast-evolving world of international trade.
          </p>

          <div className="about-bullets">
            <div className="bullet">
              <span className="bullet-icon">✓</span>Trusted by industry leaders
            </div>
            <div className="bullet">
              <span className="bullet-icon">💡</span>Creative Results
            </div>
          </div>

          <a href="#learn" className="about-cta">
            Learn More <FiArrowUpRight className="arrow-icon" />
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <div className="services-inner">
          <div className="svc-left">
            <span className="svc-eyebrow">
              <span className="pink">#</span> SERVICES
            </span>
            <h2 className="svc-title">
              Comprehensive Logistics Training for <span>Career Growth</span>
            </h2>
            <a href="#all-services" className="svc-cta">
              View all services
            </a>
          </div>

          <div className="svc-grid" role="list">
            {services.map((s) => (
              <div className="svc-item" role="listitem" key={s.id}>
                <div className="svc-icon" aria-hidden>
                  {s.icon}
                </div>
                <div className="svc-copy">
                  <h3 className="svc-name">{s.title}</h3>
                  <p className="svc-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="who">
        <div className="who-inner">
          <div className="who-left">
            <span className="who-eyebrow">
              <span className="pink">#</span> WHO WE ARE
            </span>
            <h2 className="who-title">
              Unlock your potential <span>with our expertise</span>
            </h2>
            <p className="who-desc">
              All About Cargo is India's first dedicated freight forwarding
              coaching and business mentorship platform, designed by logistics
              experts with real-world experience in shipping, customs, and
              global trade. We believe freight forwarding is more than moving
              cargo—it's about connecting businesses, enabling exports, and
              driving global growth. Through structured learning, real case
              studies, and business strategies, we guide you from the basics of
              logistics to building a 100-crore freight enterprise.
            </p>

            <div className="who-stats">
              <div className="who-stat">
                <div className="who-pill">
                  <span>100%</span>
                </div>
                <div className="who-stat-text">
                  Hands-On
                  <br />
                  Training
                </div>
              </div>
              <div className="who-stat">
                <div className="who-pill">
                  <span>100+</span>
                </div>
                <div className="who-stat-text">
                  Hiring
                  <br />
                  Partners
                </div>
              </div>
            </div>

            <a href="#experts" className="who-cta">
              Meet our experts
            </a>
          </div>

          <div className="who-right">
            <div className="who-img">
              <img src={Whoarewe} alt="Team presenting freight analytics" />
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="exp">
        <div className="exp-inner">
          <div className="exp-cloud" style={{ "--n": String(chips.length) }}>
            {chips.map(({ img, label }, i) => (
              <div className="chip" key={label} style={{ "--i": i }}>
                <span>{label}</span>
                <img src={img} alt={label} />
              </div>
            ))}
          </div>

          <div className="exp-copy">
            <span className="exp-eyebrow">
              <span className="pink">#</span> OUR EXPERTISE
            </span>
            <h2 className="exp-title">
              Certified and experienced <span>coaching professionals</span>
            </h2>
            <p className="exp-desc">
              Enhance your skills with expert-led courses that bridge the gap
              between education and employment.
            </p>
            <a href="#contact" className="exp-cta">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <section className="why">
        <div className="why-card">
          <img
            className="why-bg"
            src={whychoose}
            alt="Why choose All About Cargo"
          />
          <div className="why-overlay" />

          <div className="why-content">
            <span className="why-eyebrow">
              <span className="pink">#</span> WHY CHOOSE ALL ABOUT CARGO
            </span>

            <ol className="why-list">
              {points.map((p, i) => (
                <li key={p.title} className="why-item">
                  <div className="why-line">
                    <span className="why-num">{i + 1}.</span>
                    <div className="why-text">
                      <div className="why-title">{p.title}</div>
                      <div className="why-desc">{p.desc}</div>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="hww">
        <div className="hww-inner">
          {/* Header */}
          <div className="hww-head">
            <span className="hww-eyebrow">
              <span className="pink">#</span> HOW WE WORK
            </span>
            <h2 className="hww-title">
              Step by step process for <span>achieving success</span>
            </h2>
          </div>

          {/* Steps */}
          <div className="hww-grid" role="list">
            {STEPS.map((s) => (
              <div className="hww-item" role="listitem" key={s.id}>
                <div className="hww-icon" aria-hidden>
                  {s.icon}
                </div>
                <div className="hww-copy">
                  <h3 className="hww-name">{s.title}</h3>
                  <p className="hww-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="marquee">
        <div className="marquee-inner">
          <span data-text="ALL ABOUT CARGO • ALL ABOUT CARGO • ALL ABOUT CARGO • ALL ABOUT CARGO • ">
            ALL ABOUT CARGO • ALL ABOUT CARGO • ALL ABOUT CARGO • ALL ABOUT
            CARGO •
          </span>
          <span data-text="ALL ABOUT CARGO • ALL ABOUT CARGO • ALL ABOUT CARGO • ALL ABOUT CARGO • ">
            ALL ABOUT CARGO • ALL ABOUT CARGO • ALL ABOUT CARGO • ALL ABOUT
            CARGO •
          </span>
        </div>
      </section>
    </>
  );
}

export default Home;
