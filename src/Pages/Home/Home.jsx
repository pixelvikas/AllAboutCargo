import React, { useState, useRef, useEffect } from "react";
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
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FiPlus, FiMinus, FiPhoneCall } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

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

const testimonials = [
  {
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80&auto=format&fit=crop",
    quote:
      "As a fresher, this was very helpful in understanding the basics of freight forwarding and logistics.",
    name: "Sumit",
  },
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80&auto=format&fit=crop",
    quote:
      "A very informative and practical course, it helped me understand real-time freight forwarding processes and documentation. Perfect for professionals in logistics and supply chain management.",
    name: "Snehit",
  },
  {
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80&auto=format&fit=crop",
    quote:
      "Someone new to logistics, this course on Freight Forwarding and Air Cargo Logistics has been a great learning experience. Our instructor teaches in a very organic and detailed way, helping me understand everything from the legal side of shipments to the history and future of the industry. Every class gives me deeper insight and motivation to build a career in logistics.",
    name: "Omkar",
  },
  {
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80&auto=format&fit=crop",
    quote:
      "Coming from a non-logistics background, the course really helped me understand the knitty-gritty of freight forwarding and everything that is required to facilitate a global trade.",
    name: "Anu",
  },
];
const DATA = [
  {
    q: "Who can enrol in this course?",
    a: "Anyone looking to start or advance their career in logistics, freight forwarding, or hazardous goods handling.",
  },
  {
    q: "Are your certifications recognized?",
    a: "Yes, our certifications are industry-validated and trusted by logistics companies globally.",
  },
  {
    q: "Do you offer job placement assistance?",
    a: "Yes, we provide placement support through our hiring partners and alumni network.",
  },
  {
    q: "How long are the courses?",
    a: "Each course is designed to be completed in just 8 weeks.",
  },
  {
    q: "Is this an online or offline training?",
    a: "All our courses are conducted 100% online, with live sessions and LMS-based learning support.",
  },
];
/* ---------- component ---------- */
function Home() {
  // Accordion (kept from your snippet—if unused, you can remove)
  const [open, setOpen] = useState(1); // second open by default
  const bodyRefs = useRef([]);
  const getHeight = (i) => bodyRefs.current[i]?.scrollHeight ?? 0;
  const toggle = (i) => setOpen((prev) => (prev === i ? -1 : i));

  // Slider
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = () =>
    setIndex((prev) => (prev + 1) % (testimonials.length || 1));
  const prev = () =>
    setIndex(
      (prev) =>
        (prev - 1 + (testimonials.length || 1)) % (testimonials.length || 1)
    );

  // Auto-slide every 3s (pause on hover)
  useEffect(() => {
    if (!testimonials.length || isPaused) return;
    const id = setInterval(next, 3000);
    return () => clearInterval(id);
  }, [isPaused, testimonials.length]); // re-create timer if pause state or data changes

  if (!testimonials.length) return null;
  const t = testimonials[index];
  const navigate = useNavigate();

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
              <button className="cta" onClick={() => navigate("/register")}>
                Get Certified
              </button>
            </div>

            <div className="divider" />

            <div className="stats">
              <div className="stat">
                <div className="stat-number">2</div>
                <div className="stat-label">Industry-Focused Courses</div>
              </div>
              <div className="stat">
                <div className="stat-number">4</div>
                <div className="stat-label">Learners Already Onboard</div>
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
                25+ years of
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

          <a href="/about" className="about-cta">
            Learn More <FiArrowUpRight className="arrow-icon" />
          </a>
        </div>
      </section>
      {/* SERVICES */}
      <section className="services" id="services">
        <div className="services-inner">
          {/* LEFT: sticky + internal scroll */}
          <aside className="svc-left sticky-col">
            <div className="svc-scroll">
              <span className="svc-eyebrow">
                <span className="pink">#</span> SERVICES
              </span>
              <h2 className="svc-title">
                Comprehensive Logistics Training for <span>Career Growth</span>
              </h2>
              <a href="/courses" className="svc-cta">
                View all Courses
              </a>

              {/* If you have more left-side paragraphs, lists, etc., add here */}
              {/* <p>...</p> */}
            </div>
          </aside>

          {/* RIGHT: sticky + internal scroll */}
          <div className="svc-right sticky-col">
            <div className="svc-scroll">
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

            <a href="/team" className="who-cta">
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
          {/* Left: Flex cloud */}
          <div className="feature-bub">
            {/* Row 1 */}
            <div className="bub-row">
              <div className="bub bub-wide">
                <p className="bub-text">Hands-on Training</p>
                <img
                  className="bub-img"
                  src={chips[0].img}
                  alt={chips[0].label}
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="bub-row bub-row-split">
              <div className="bub bub-narrow">
                <p className="bub-text">Career</p>
                <img
                  className="bub-img"
                  src={chips[1].img}
                  alt={chips[1].label}
                />
              </div>
              <div className="bub bub-mid">
                <p className="bub-text">Global Network</p>
                <img
                  className="bub-img"
                  src={chips[2].img}
                  alt={chips[2].label}
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="bub-row bub-row-split">
              <div className="bub bub-mid">
                <p className="bub-text">Experience</p>
                <img
                  className="bub-img"
                  src={chips[3].img}
                  alt={chips[3].label}
                />
              </div>
              <div className="bub bub-wide">
                <p className="bub-text">Flexible Learning</p>
                <img
                  className="bub-img"
                  src={chips[4].img}
                  alt={chips[4].label}
                />
              </div>
            </div>

            {/* Row 4 */}
            <div className="bub-row bub-row-split">
              <div className="bub bub-mid">
                <p className="bub-text">Certifications</p>
                <img
                  className="bub-img"
                  src={chips[6].img}
                  alt={chips[6].label}
                />
              </div>
              <div className="bub bub-mid">
                <p className="bub-text">Growth</p>
                <img
                  className="bub-img"
                  src={chips[5].img}
                  alt={chips[5].label}
                />
              </div>
            </div>

            {/* Row 5 */}
            <div className="bub-row">
              <div className="bub bub-semi">
                <p className="bub-text">Latest Trends</p>
                <img
                  className="bub-img"
                  src={chips[7].img}
                  alt={chips[7].label}
                />
              </div>
            </div>
          </div>
          {/* Right: Copy */}
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
            <a href="/contact" className="exp-cta">
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
          <span data-text="ALL ABOUT CARGO * ALL ABOUT CARGO * ALL ABOUT CARGO * ALL ABOUT CARGO * ">
            ALL ABOUT CARGO * ALL ABOUT CARGO * ALL ABOUT CARGO * ALL ABOUT
            CARGO *
          </span>
          <span data-text="ALL ABOUT CARGO * ALL ABOUT CARGO * ALL ABOUT CARGO * ALL ABOUT CARGO * ">
            ALL ABOUT CARGO * ALL ABOUT CARGO * ALL ABOUT CARGO * ALL ABOUT
            CARGO *
          </span>
        </div>
      </section>
      <section className="t-wrap">
        <div className="t-card">
          {/* left headline */}
          <div className="t-left">
            <span className="t-eyebrow">
              <span className="pink">#</span> TESTIMONIALS
            </span>
            <h2 className="t-title">
              Real success
              <br />
              stories from our <span>students</span>
            </h2>
          </div>

          {/* right testimonial */}
          <div
            className="t-right"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="t-item fade">
              <div className="t-photo">
                <img src={t.img} alt={`${t.name} testimonial`} />
              </div>

              <div className="t-quote">
                <p className="t-text">"{t.quote}"</p>
                <p className="t-name">— {t.name}</p>
              </div>
            </div>

            <div className="t-arrows">
              <button className="t-btn" aria-label="Previous" onClick={prev}>
                <FiChevronLeft />
              </button>
              <button className="t-btn" aria-label="Next" onClick={next}>
                <FiChevronRight />
              </button>
            </div>
          </div>

          {/* full-width CTA */}
          <a href="/register" className="t-cta">
            Join thousands of successful students who have built rewarding
            careers in logistics.
          </a>
        </div>
      </section>
      <section className="faq">
        <div className="faq-inner">
          {/* LEFT */}
          <div className="faq-left">
            <span className="faq-eyebrow">
              <span className="pink">#</span> FAQ
            </span>

            <h2 className="faq-title">
              Your coaching questions
              <br />
              <span>answered simply here</span>
            </h2>

            <div className="faq-card">
              <div className="faq-card-title">
                Still have you any questions?
              </div>
              <p className="faq-card-desc">
                We’re ready to help you to answer any questions
              </p>
              <div className="faq-phone">
                <span className="phone-icon" aria-hidden>
                  <FiPhoneCall />
                </span>
                <span className="phone-num">+022 22334455</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Smooth Accordion */}
          <div className="faq-right">
            {DATA.map((item, i) => {
              const active = i === open;
              return (
                <div
                  key={item.q}
                  className={`acc ${active ? "acc--active" : ""}`}
                  role="button"
                  tabIndex={0}
                  aria-expanded={active}
                  onClick={() => toggle(i)}
                  onKeyDown={(e) =>
                    (e.key === "Enter" || e.key === " ") && toggle(i)
                  }
                >
                  <div className="acc-head">
                    <div className="acc-q">{item.q}</div>
                    <div className={`acc-cta ${active ? "is-open" : ""}`}>
                      {active ? <FiMinus /> : <FiPlus />}
                    </div>
                  </div>

                  <div
                    className="acc-wrapper"
                    style={{ maxHeight: active ? `${getHeight(i)}px` : "0px" }}
                  >
                    <div
                      className="acc-body"
                      ref={(el) => (bodyRefs.current[i] = el)}
                    >
                      <p>{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <style>
        {`
        .home-wrap * {
  box-sizing: border-box;
}

.home-wrap {
  background: #f2f2f2;
  padding: 16px;
  color: #fff;
}

/* Rounded main frame */
.frame {
  position: relative;
  border-radius: 18px;
  overflow: hidden;
}

/* HERO */
.hero {
  position: relative;
  height: 720px; /* reduced from 700px */
  display: grid;
  align-items: center;
}

.hero-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(1.05);
}
.hero-overlay {
  position: absolute;
  inset: 0;

  /* Soft pink glow on the left, fading smoothly to clear on the right */
  background: radial-gradient(
      900px 420px at 25% 50%,
      rgba(116, 2, 97, 0.45),
      rgba(0, 0, 0, 0.15)
    ),
    linear-gradient(
      90deg,
      /* left → right direction */ rgba(188, 13, 159, 0.45) 0%,
      /* gentle pink highlight on left edge */ rgba(155, 20, 130, 0.3) 20%,
      /* smooth soft magenta transition */ rgba(100, 0, 80, 0.15) 40%,
      /* gentle fade middle */ rgba(0, 0, 0, 0) 100%
        /* fully clear right side */
    );

  pointer-events: none;
}

/* HERO CONTENT */
.hero-content {
  position: absolute;
  top: 220px; /* lowered from 140px */
  left: 56px;
  z-index: 3;
  max-width: 640px;
}

.pink {
  color: #f22fbf;
}

.eyebrow {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2px;
  color: #ffff;
  margin-bottom: 12px;
}

.headline {
  font-size: clamp(32px, 5vw, 56px);
  line-height: 1.1;
  margin: 0 0 20px 0;
  font-weight: 700;

  color: #ffffff;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
}

.cta {
  justify-self: end;
  background: linear-gradient(to bottom, #d0173e, #961782); /* brand gradient */
  color: #fff;
  text-decoration: none;
  padding: 10px 18px;
  border-radius: 999px;
  font-weight: 600;
  border: none;
  font-size: 14px;
  box-shadow: 0 6px 18px rgba(150, 23, 130, 0.35);
  transition: transform 0.2s ease, box-shadow 0.3s ease;
}

.cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(208, 23, 62, 0.4);
}

.cta:active {
  transform: translateY(0);
  box-shadow: 0 4px 10px rgba(208, 23, 62, 0.3);
}

/* Divider line */
.divider {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 110px; /* moved up to close gap */
  height: 1.5px;
  background: rgba(255, 255, 255, 0.25);
  mix-blend-mode: screen;
}

/* STATS */
.stats {
  position: absolute;
  bottom: 20px; /* closer to bottom */
  left: 56px;
  right: 56px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  z-index: 3;
}

.stat {
  display: grid;
  justify-items: center;
  text-align: center;
}

.stat-number {
  font-size: clamp(24px, 3.5vw, 40px);
  font-weight: 500;
  margin-bottom: 6px;
}

.stat-label {
  font-size: 13px;
  color: #e9e9e9;
  opacity: 0.95;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .hero-content {
    left: 24px;
    right: 24px;
    top: 160px;
  }
  .stats {
    left: 24px;
    right: 24px;
  }
}

@media (max-width: 520px) {
  .headline {
    font-size: 32px;
  }
  .divider {
    bottom: 110px;
  }
}

/* Responsiveness tuning */
@media (max-width: 900px) {
  .hero {
    height: 95vh; /* slightly shorter on tablets */
    min-height: 420px;
  }
}

@media (max-width: 600px) {
  .hero {
    height: 95vh; /* mobile devices — more compact */
    min-height: 380px;
  }
}

@media (max-width: 420px) {
  .hero {
    height: 95vh; /* smallest devices */
    min-height: 340px;
  }
}
/* ===== Layout ===== */
.about {
  max-width: 1200px;
  margin: 0 auto;
  padding: 56px 16px;
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  align-items: center;
  gap: 48px;
  color: #0e0e0e;
}

/* ===== Media cluster (left) ===== */
.about-media {
  position: relative;
  display: inline-block; /* shrink-wrap around the main image */
  isolation: isolate; /* keeps shadows/overlaps clean */
}

/* Main image card */
.about-card--main {
  position: relative;
  width: 380px;
  height: 430px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  background: #e8e8e8;
}

.about-card--main img {
  width: 100%;
  height: 100%;

  border-radius: 24px;
  object-fit: cover;
  display: block;
}

/* Gradient badge */
.about-badge {
  position: absolute;
  top: 28px;
  left: -18px; /* slight outside pop */
  background: linear-gradient(to right, #d0173e, #961782); /* brand gradient */
  color: #fff;
  font-weight: 700;
  padding: 18px 24px;
  font-size: 18px;
  line-height: 1.28;
  border-radius: 16px;
  box-shadow: 0 6px 18px rgba(150, 23, 130, 0.35);
  z-index: 2;
}

/* Smaller overlapping image */
.about-card--thumb {
  position: absolute;
  bottom: -40px;
  right: 40px;
  width: 230px;
  height: 160px;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  background: #eee;
  z-index: 1;
}

.about-card--thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* ===== Copy (right) ===== */
.about-copy .about-eyebrow {
  display: inline-block;
  font-size: 12px;
  letter-spacing: 2px;
  font-weight: 700;
  color: #6f6f6f;
  margin-bottom: 12px;
}

.about-title {
  font-size: clamp(32px, 4.6vw, 56px);
  line-height: 1.08;
  margin: 0 0 12px 0;
  font-weight: 700;
  color: #0d0d0d;
}

.about-title span {
  background: linear-gradient(90deg, #d0173e, #961782);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

.about-desc {
  color: #5c5c5c;
  line-height: 1.7;
  font-size: 15.5px;
  margin: 14px 0 18px;
  max-width: 620px;
}

/* Bullets */
.about-bullets {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px 22px;
  margin: 8px 0 26px;
}

.bullet {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  color: #7a2369;
}

.bullet small {
  display: block;
  font-weight: 500;
  color: #8a8a8a;
  margin-left: 30px;
  margin-top: 4px;
  font-size: 12.5px;
}

.bullet-icon {
  display: inline-grid;
  place-items: center;
  width: 28px;
  height: 28px;
  border-radius: 999px;
  background: rgba(208, 23, 62, 0.12);
  color: #d0173e;
  font-size: 14px;
  font-weight: 900;
}

.bullet-icon.bulb {
  background: rgba(150, 23, 130, 0.12);
  color: #961782;
}

/* CTA button */
.about-cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(to bottom, #d0173e, #961782); /* brand gradient */
  padding: 14px 22px;
  border-radius: 999px;
  box-shadow: 0 10px 22px rgba(150, 23, 130, 0.28);
  transition: transform 0.2s ease, box-shadow 0.25s ease;
  width: fit-content;
}

.about-cta .arrow {
  display: inline-block;
  transform: translateY(1px);
}

.about-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 28px rgba(208, 23, 62, 0.35);
}

/* ===== Responsive ===== */
@media (max-width: 1140px) {
  .about {
    grid-template-columns: 1fr;
    gap: 56px;
    justify-items: center;
    text-align: left;
  }
}

@media (max-width: 768px) {
  .about-card--main {
    width: 86vw; /* scale with viewport */
    max-width: 420px;
    height: 380px;
  }
  .about-card--thumb {
    width: 50%;
    height: 150px;
    bottom: -28px;
    right: -24px;
  }
  .about-badge {
    left: -10px;
    padding: 16px 20px;
    font-size: 16px;
  }
  .about-bullets {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 520px) {
  .about {
    padding: 44px 14px;
  }
  .about-card--main {
    height: 320px;
  }
  .about-card--thumb {
    width: 58%;
    height: 140px;
    bottom: -22px;
    right: -18px;
  }
  .about-badge {
    border-radius: 14px;
  }
}/* Section shell */
.services {
  padding: 28px 16px 40px;
}

/* Two-column area */
.services-inner {
  background: #2b0024; /* deep plum */
  border-radius: 24px;
  padding: 40px 42px;
  color: #fff;
  display: grid;
  grid-template-columns: 1.05fr 1.4fr;
  gap: 28px 32px;
  align-items: start;   /* important for sticky inside grid */
  /* DO NOT set overflow here; sticky needs a non-overflow ancestor */
}

/* Shared sticky behavior for both columns */
.sticky-col {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: clamp(16px, 8vh, 96px); /* tweak for your fixed navbar height if any */
  align-self: start;
}

/* Scroll box inside each column */
.svc-scroll {
  /* The scrollable “box” */
  max-height: calc(100vh - clamp(16px, 8vh, 96px) - 40px); /* viewport minus sticky offset minus some padding */
  overflow: auto;
  overscroll-behavior: contain; /* keeps scroll confined and feels smooth */
  padding-right: 6px;           /* small breathing room for scrollbar */
}

/* Left column base spacing */
.svc-left {
  padding: 12px 8px 12px 4px;
}

/* Right column simply wraps the scroll area */
.svc-right {}

/* Eyebrow + title + CTA (left) */
.svc-eyebrow {
  display: inline-block;
  font-size: 12px;
  letter-spacing: 2px;
  color: #fff;
  opacity: 0.9;
  margin-bottom: 10px;
}

.svc-title {
  font-size: clamp(28px, 4.2vw, 42px);
  line-height: 1.18;
  margin: 6px 0 24px;
  font-weight: 800;
  color: #fff;
}
.svc-title span {
  background: linear-gradient(90deg, #d0173e, #961782);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

/* CTA */
.svc-cta {
  display: inline-block;
  margin-top: 8px;
  background: linear-gradient(to bottom, #d0173e, #961782);
  color: #fff;
  text-decoration: none;
  padding: 12px 18px;
  border-radius: 999px;
  font-weight: 700;
  box-shadow: 0 8px 20px rgba(150, 23, 130, 0.28);
  transition: transform 0.2s ease, box-shadow 0.25s ease;
}
.svc-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(208, 23, 62, 0.34);
}

/* Right grid of services */
.svc-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px 36px;
  align-content: start;
}

.svc-item {
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 14px;
  align-items: flex-start;
}

.svc-icon {
  width: 54px;
  height: 54px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  background: linear-gradient(to bottom, #d0173e, #961782);
  flex: 0 0 54px;
}
.svc-icon svg { font-size: 24px; color: #fff; }

.svc-name { margin: 0; font-size: 16px; font-weight: 800; color: #ffffff; }
.svc-desc { margin: .25rem 0 0; font-size: 13.5px; line-height: 1.55; color: #e6cfe0; opacity: .9; }

/* Scrollbar polish (optional) */
.svc-scroll::-webkit-scrollbar { width: 8px; }
.svc-scroll::-webkit-scrollbar-thumb {
  background: #ffffff22;
  border-radius: 8px;
}
.svc-scroll:hover::-webkit-scrollbar-thumb {
  background: #ffffff44;
}

/* Responsive */
@media (max-width: 1024px) {
  .services-inner {
    grid-template-columns: 1fr;  /* stack */
    gap: 28px;
  }
  .sticky-col {
    position: static;    /* turn off sticky when stacked */
  }
  .svc-scroll {
    max-height: none;
    overflow: visible;   /* normal flow on small screens */
    padding-right: 0;
  }
  .svc-grid {
    grid-template-columns: 1fr 1fr;
    gap: 40px 24px;
  }
}

@media (max-width: 640px) {
  .services-inner { padding: 28px 20px; }
  .svc-grid { grid-template-columns: 1fr; gap: 22px; }
  .svc-icon { width: 50px; height: 50px; }
}


/* Wrapper */
.who {
  padding: 56px 16px;
  color: #0e0e0e;
}

.who-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 40px 44px;
  align-items: center;
}

/* LEFT */
.who-left {
}

.who-eyebrow {
  display: inline-block;
  font-size: 12px;
  letter-spacing: 2px;
  font-weight: 700;
  color: #6f6f6f;
  margin-bottom: 10px;
}

.who-title {
  font-size: clamp(32px, 5.2vw, 56px);
  line-height: 1.1;
  margin: 2px 0 16px;
  font-weight: 800;
  color: #121212;
}
.who-title span {
  background: linear-gradient(90deg, #d0173e, #961782);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

.who-desc {
  color: #666;
  line-height: 1.7;
  font-size: 15.5px;
  max-width: 640px;
  margin: 12px 0 22px;
}

/* Stats row */
.who-stats {
  display: flex;
  gap: 40px;
  align-items: center;
  margin: 6px 0 24px;
  flex-wrap: wrap;
}

.who-stat {
  display: flex;
  align-items: center;
  gap: 14px;
}

.who-pill {
  width: 86px;
  height: 86px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  background: #fff;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  position: relative;
}
.who-pill::after {
  content: "";
  position: absolute;
  inset: -8px;
  border-radius: 999px;
  border: 2px solid rgba(208, 23, 62, 0.35); /* pink ring like mock */
}
.who-pill span {
  font-weight: 800;
  font-size: 20px;
  color: #121212;
}

.who-stat-text {
  font-weight: 700;
  color: #161616;
  line-height: 1.25;
}

/* CTA */
.who-cta {
  display: inline-block;
  margin-top: 6px;
  padding: 12px 18px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(to bottom, #d0173e, #961782); /* brand gradient */
  box-shadow: 0 10px 22px rgba(150, 23, 130, 0.28);
  transition: transform 0.2s ease, box-shadow 0.25s ease;
}
.who-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 28px rgba(208, 23, 62, 0.35);
}

.who-img {
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.18);
}
.who-img img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Responsive */
@media (max-width: 1024px) {
  .who-inner {
    grid-template-columns: 1fr;
    gap: 28px;
  }
  .who-img {
    height: 360px;
  }
}

@media (max-width: 560px) {
  .who {
    padding: 40px 14px;
  }
  .who-img {
    display: none;
  }
  .who-pill {
    width: 78px;
    height: 78px;
  }
  .who-pill span {
    font-size: 18px;
  }
}

/* Two-column shell (kept) */
.exp-inner{
  max-width:1160px;
  margin:0 auto;
  display:grid;
  padding:46px 16px;
  grid-template-columns:1.2fr 1fr;
  gap:24px 40px;
  grid-template-areas:"left right";
  align-items:center;
}
.feature-bub{ grid-area:left; }
.exp-copy   { grid-area:right; }

/* Cloud background like mock */
.feature-bub{
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:10px;               /* vertical gap between rows */
}

/* Rows */
.bub-row{
  width:100%;
  max-width:720px;
  display:flex;
  justify-content:center;  /* center single-pill rows */
  gap:12px;
}

/* Chip (pill) */
.bub{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:12px;
  background:#fff;
  border-radius:9999px;
  padding:12px 18px;
  box-shadow:0 10px 26px rgba(0,0,0,.08);
  white-space:nowrap;
  transition:transform .2s ease, box-shadow .25s ease;
}
.bub:hover,
.bub:focus-visible{
  transform:translateY(-2px);
  box-shadow:0 14px 30px rgba(0,0,0,.12);
}
.bub:focus-visible{ outline:2px solid #00000014; outline-offset:2px; }

/* Width presets to match the screenshot proportions */
.bub-narrow { min-width:160px; max-width:190px; padding-left:16px; }
.bub-mid    { min-width:145px; max-width:260px; padding-left:18px; }
.bub-wide   { min-width:210px; max-width:360px; padding-left:22px; }
.bub-semi   { min-width:185px; max-width:300px; padding-left:20px; }

/* Label text */
.bub-text{
  font-weight:600;
  font-size:16px;
  color:#222;
  line-height:1;
}

/* Circular image that peeks out on the right */
.bub-img{
  width:46px;
  height:46px;
  border-radius:50%;
  object-fit:cover;
  display:block;
  box-shadow:0 6px 16px rgba(0,0,0,.12);
  translate:6px 0; /* small overhang to the right */
}

/* Optional tiny size variety (like the mock) */
.bub-row-split:nth-of-type(1) .bub:last-child .bub-img{ width:44px; height:44px; }
.bub-row-split:nth-of-type(2) .bub:last-child .bub-img{ width:40px; height:40px; }

/* Responsive: keep same composition, only scale sizes */
@media (max-width:1024px){
  .exp-inner{
    grid-template-columns:1fr;
    grid-template-areas:
      "right"
      "left";
    gap:26px;
  }
}

@media (max-width:820px){
  .bub-row{ max-width:640px; gap:10px; }
  .bub{ padding:10px 16px; }
  .bub-text{ font-size:13.5px; }
  .bub-img{ width:42px; height:42px; translate:4px 0; }
  .bub-narrow { min-width:150px; max-width:180px; }
  .bub-mid    { min-width:200px; max-width:240px; }
  .bub-wide   { min-width:270px; max-width:330px; }
  .bub-semi   { min-width:220px; max-width:280px; }
}

@media (max-width:560px){
  .bub-row{ max-width:100%; gap:8px; }
  .bub{ padding:9px 14px; }
  .bub-text{ font-size:13px; }
  .bub-img{ width:38px; height:38px; translate:3px 0; }
  .bub-narrow { min-width:140px; max-width:170px; }
  .bub-mid    { min-width:120px; max-width:230px; }
  .bub-wide   { min-width:165px; max-width:310px; }
  .bub-semi   { min-width:150px; max-width:260px; }
}

@media (max-width:380px){
  .bub{ padding:8px 12px; }
  .bub-text{ font-size:12.5px; }
  .bub-img{ width:34px; height:34px; translate:2px 0; }
  .bub-row{ gap:6px; }
}

/* Right column styles (unchanged) */
.exp-copy{ color:#0e0e0e; }
.exp-eyebrow{
  display:inline-block; font-size:11px; letter-spacing:2px; font-weight:700;
  color:#6f6f6f; margin-bottom:10px;
}
.exp-title{ font-size:clamp(26px,4.2vw,38px); line-height:1.25; margin:2px 0 10px; font-weight:800; }
.exp-title span{
  background:linear-gradient(90deg,#d0173e,#961782);
  -webkit-background-clip:text; -webkit-text-fill-color:transparent;
  background-clip:text; text-fill-color:transparent;
}
.exp-desc{ color:#6b6b6b; line-height:1.6; font-size:14px; margin:10px 0 18px; max-width:520px; }
.exp-cta{
  display:inline-block; padding:10px 16px; border-radius:999px; text-decoration:none;
  font-weight:700; color:#fff; background:linear-gradient(to bottom,#d0173e,#961782);
  box-shadow:0 10px 22px rgba(150,23,130,.25);
  transition:transform .2s ease, box-shadow .25s ease;
}
.exp-cta:hover{ transform:translateY(-2px); box-shadow:0 14px 28px rgba(208,23,62,.35); }
@media (prefers-reduced-motion:reduce){ .bub,.exp-cta{ transition:none; } }




/* Shell */
.why {
  padding: clamp(32px, 5vw, 64px) 16px;
}

/* Card: responsive frame that preserves image while allowing content */
.why-card {
  position: relative;
  margin: 0 auto;
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.18);
  background: #000;

  /* Responsive sizing: ratio + min/max heights */
  aspect-ratio: 16 / 8;
  min-height: clamp(360px, 48vw, 560px);
  max-height: 680px;
}

/* Background image */
.why-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(1.05);
}

/* Overlay: readable left, clear right */
.why-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(
      900px 420px at 26% 50%,
      rgba(0, 0, 0, 0.28),
      rgba(0, 0, 0, 0.68)
    ),
    linear-gradient(
      90deg,
      rgba(208, 23, 62, 0.42) 0%,
      rgba(150, 23, 130, 0.22) 36%,
      rgba(0, 0, 0, 0.22) 64%,
      rgba(0, 0, 0, 0.06) 100%
    );
  pointer-events: none;
}

/* Content block pinned to left */
.why-content {
  position: relative;
  z-index: 2;
  color: #fff;
  padding: clamp(18px, 4vw, 32px) clamp(18px, 4.6vw, 42px);
  max-width: 760px;
  display: grid;
  align-content: start;
  gap: clamp(10px, 2vw, 16px);
}

/* Eyebrow */
.why-eyebrow {
  display: inline-block;
  font-size: 12px;
  letter-spacing: 2px;
  font-weight: 700;
  color: #fff;
  opacity: 0.95;
}

/* List */
.why-list {
  list-style: none;
  margin: 0;
  padding: 0;

  /* Two columns on wide screens for compactness */
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(10px, 1.8vw, 14px);
}
@media (min-width: 900px) {
  .why-list {
    column-gap: clamp(18px, 3vw, 28px);
    row-gap: clamp(10px, 1.8vw, 14px);
  }
}

/* WHY ITEM — responsive spacing and structure */
.why-item {
  min-width: 0; /* prevents text overflow in grid layouts */
  margin: clamp(0.75rem, 2vw, 1.5rem) 0; /* responsive vertical spacing */
  padding: clamp(0.25rem, 0.8vw, 0.5rem) 0; /* subtle internal breathing space */
  border-bottom: 1px solid rgba(255, 255, 255, 0.1); /* light divider for structure */
}

/* Remove the border for the last item in a column */
.why-item:last-child {
  border-bottom: none;
}

/* Larger screens: tighter spacing, better rhythm in 2-column layout */
@media (min-width: 900px) {
  .why-item {
    margin: clamp(0.5rem, 1.2vw, 1rem) 0;
    border-bottom: none; /* cleaner multi-column view */
  }
}

/* Smaller screens: more separation between items for readability */
@media (max-width: 600px) {
  .why-item {
    padding-bottom: 0.75rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  }
}

/* Row */
.why-line {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
  align-items: start;
}

/* Number + text */
.why-num {
  font-weight: 900;
  font-size: clamp(18px, 2.4vw, 22px);
  line-height: 1.1;
  flex: 0 0 auto;
}
.why-title {
  font-weight: 800;
  font-size: clamp(18px, 2.4vw, 22px);
  line-height: 1.15;
  color: #ffffff;
}
.why-desc {
  margin-top: 4px;
  color: #f0e6ee;
  opacity: 0.9;
  font-size: clamp(12.5px, 1.6vw, 14px);
  line-height: 1.55;
}

/* Tight mobile tuning */
@media (max-width: 900px) {
  .why-card {
    border-radius: 18px;
    aspect-ratio: auto;
    min-height: clamp(360px, 60vw, 520px);
  }

  /* overlay slightly stronger to protect white text */
  .why-overlay {
    background: radial-gradient(
        700px 360px at 24% 50%,
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.72)
      ),
      linear-gradient(
        90deg,
        rgba(208, 23, 62, 0.44) 0%,
        rgba(150, 23, 130, 0.24) 34%,
        rgba(0, 0, 0, 0.26) 62%,
        rgba(0, 0, 0, 0.08) 100%
      );
  }

  .why-content {
    max-width: 100%;
  }
}

/* Small phones */
@media (max-width: 560px) {
  .why-content {
    padding: 16px;
  }
  .why-num {
    font-size: 18px;
  }
  .why-title {
    font-size: 18px;
  }
  .why-desc {
    font-size: 13px;
  }
}

/* Prevent jumpy transitions for users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
    animation: none !important;
  }
}
/* Section shell */
.hww {
  padding: clamp(28px, 6vw, 56px) 16px;
}

.hww-inner {
  max-width: 1200px;
  margin: 0 auto;
}

/* Eyebrow + Title */
.hww-eyebrow {
  display: inline-block;
  font-size: 12px;
  letter-spacing: 2px;
  font-weight: 700;
  color: #6c6c6c;
  margin-bottom: 8px;
}

.hww-title {
  margin: 0 0 clamp(18px, 3vw, 30px);
  font-weight: 800;
  color: #171717;
  font-size: clamp(22px, 4.8vw, 40px);
  line-height: 1.2;
}
.hww-title span {
  background: linear-gradient(90deg, #d0173e, #961782);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

/* Steps grid */
.hww-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: clamp(12px, 2.4vw, 28px);
  align-items: start;
}

/* Item */
.hww-item {
  display: grid;
  justify-items: start;
  text-align: left;
}

/* Circular gradient icon badge */
.hww-icon {
  width: 64px;
  height: 64px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  background: linear-gradient(to right, #d0173e, #961782); /* brand gradient */
  box-shadow: 0 10px 20px rgba(150, 23, 130, 0.18);
  margin-bottom: 12px;
}
.hww-icon svg {
  color: #fff;
  font-size: 28px;
}

/* Copy */
.hww-copy {
  max-width: 260px;
}
.hww-name {
  margin: 0 0 6px;
  font-size: 15px;
  font-weight: 800;
  color: #161616;
}
.hww-desc {
  margin: 0;
  color: #6e6e6e;
  font-size: 13px;
  line-height: 1.55;
}

/* Responsiveness */
@media (max-width: 980px) {
  .hww-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .hww-item {
    justify-items: start;
  }
}

@media (max-width: 560px) {
  .hww-grid {
    grid-template-columns: 1fr;
  }
  .hww-copy {
    max-width: none;
  }
  .hww-icon {
    width: 58px;
    height: 58px;
  }
  .hww-icon svg {
    font-size: 26px;
  }
  .hww-name {
    font-size: 14.5px;
  }
  .hww-desc {
    font-size: 12.8px;
  }
}

/* ====== MARQUEE SECTION ====== */
.marquee {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  position: relative;
  padding: clamp(14px, 2vw, 24px) 0;
}

/* Inner scrolling container */
.marquee-inner {
  display: inline-block;
  white-space: nowrap;
  animation: marqueeScroll 25s linear infinite;
  will-change: transform;
}

/* Outlined white text with gradient border */
.marquee-inner span {
  font-size: clamp(48px, 8vw, 88px);
  font-weight: 800;
  letter-spacing: 5px;
  display: inline-block;
  padding-right: 3rem;
  text-transform: uppercase;
  position: relative;
  color: #f2f2f2; /* inner fill stays white */

  /* reserve border width for gradient outline */
  -webkit-text-stroke: 3px transparent;
}

/* Gradient outline (duplicate text layer) */
.marquee-inner span::before {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, #d0173e, #961782);
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 3px transparent;

  /* simulate gradient border visually */
  filter: drop-shadow(0 0 2px rgba(150, 23, 130, 0.6));
  z-index: -1;
}

/* Animation */
@keyframes marqueeScroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Hover pause (optional for UX) */
.marquee-inner:hover {
  animation-play-state: paused;
}

/* ====== Responsive ====== */
@media (max-width: 768px) {
  .marquee {
    padding: 10px 0;
  }

  .marquee-inner span {
    font-size: clamp(78px, 6vw, 48px);
    letter-spacing: 3px;
    padding-right: 1.8rem;
    -webkit-text-stroke: 2px transparent;
  }

  .marquee-inner span::before {
    -webkit-text-stroke: 2px transparent;
  }
}

/* Section spacing */
.t-wrap {
  padding: 32px 16px 48px;
}

/* Main rounded container */
.t-card {
  width: 100%;
  margin: 0 auto;
  background: #2b0024; /* deep plum */
  color: #ffffff;
  border-radius: 22px;
  padding: clamp(20px, 4vw, 34px);
  position: relative;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.25);

  display: grid;
  grid-template-columns: 1.05fr 1.15fr;
  gap: clamp(18px, 4vw, 40px);
}

/* Eyebrow */
.t-eyebrow {
  display: inline-block;
  font-size: 12px;
  letter-spacing: 2px;
  opacity: 0.9;
  color: #fff;
  margin-bottom: 8px;
}

/* Title (left) */
.t-title {
  margin: 0;
  font-weight: 800;
  font-size: clamp(28px, 5vw, 42px);
  line-height: 1.12;
  color: #ffffff;
}
.t-title span {
  background: linear-gradient(90deg, #d0173e, #961782);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
/* Right block */
.t-right {
  display: grid;
  gap: 14px;
  align-content: start;
  position: relative;
}

/* Smooth fade transition for testimonials */
.t-item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 18px;
  align-items: center;
  opacity: 1;
  transition: opacity 0.8s ease-in-out;
}

.fade {
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Photo card */
.t-photo {
  width: clamp(140px, 22vw, 210px);
  height: clamp(140px, 22vw, 210px);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35);
}
.t-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Quote + author */
.t-quote {
  min-width: 0;
}
.t-text {
  margin: 0 0 10px 0;
  font-size: clamp(13.5px, 1.6vw, 14.5px);
  line-height: 1.6;
  color: #f4e8f1;
  opacity: 0.95;
}
.t-name {
  margin: 0;
  font-weight: 700;
  color: #ffffff;
}

/* Arrows */
.t-arrows {
  display: flex;
  gap: 10px;
  margin-left: calc(clamp(140px, 22vw, 210px) + 8px);
}
.t-btn {
  width: 36px;
  height: 36px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.08),
    rgba(255, 255, 255, 0.02)
  );
  cursor: pointer;
  color: #ffffff;
  transition: transform 0.15s ease, box-shadow 0.2s ease, background 0.2s ease;
}
.t-btn:hover {
  transform: translateY(-1px);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.14),
    rgba(255, 255, 255, 0.06)
  );
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.35);
}
.t-btn svg {
  font-size: 18px;
}

/* CTA pill (full width inside card) */
.t-cta {
  grid-column: 1 / -1;
  margin-top: clamp(12px, 2.6vw, 22px);
  display: block;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  font-weight: 700;
  padding: 12px 18px;
  border-radius: 999px;
  background: linear-gradient(to bottom, #d0173e, #961782); /* brand gradient */
  box-shadow: 0 12px 26px rgba(150, 23, 130, 0.32);
  transition: transform 0.15s ease, box-shadow 0.2s ease;
}
.t-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 30px rgba(208, 23, 62, 0.34);
}

/* Responsiveness */
@media (max-width: 900px) {
  .t-card {
    grid-template-columns: 1fr;
    gap: 20px;
    border-radius: 18px;
  }
  .t-arrows {
    margin-left: 0;
  }
}

@media (max-width: 560px) {
  .t-item {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  .t-photo {
    width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
  }
  .t-quote {
    text-align: left;
  }
}
/* Shell unchanged from yours */
.faq {
  background: #f3f2f1;
  padding: clamp(28px, 6vw, 56px) 16px;
}
.faq-inner {
  max-width: 1140px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: clamp(18px, 4vw, 40px);
  align-items: start;
}

/* Eyebrow/heading/card same as before */
.faq-eyebrow {
  display: inline-block;
  font-size: 12px;
  letter-spacing: 2px;
  font-weight: 700;
  color: #6e6e6e;
  margin-bottom: 10px;
}

.faq-title {
  margin: 0 0 clamp(16px, 3vw, 26px);
  font-weight: 800;
  color: #151515;
  line-height: 1.15;
  font-size: clamp(24px, 4.8vw, 40px);
}
.faq-title span {
  background: linear-gradient(90deg, #d0173e, #961782);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
.faq-card {
  margin-top: clamp(12px, 2.4vw, 18px);
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  padding: 18px;
  max-width: 320px;
}
.faq-card-title {
  font-weight: 800;
  color: #171717;
  margin-bottom: 6px;
  font-size: 15px;
}
.faq-card-desc {
  margin: 0 0 12px;
  color: #6d6d6d;
  font-size: 13px;
  line-height: 1.5;
}
.faq-phone {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  color: #161616;
}
.phone-icon {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: linear-gradient(90deg, #d0173e, #961782);
  color: #fff;
}

/* Accordion list */
.faq-right {
  display: grid;
  gap: 10px;
}

/* Card */
.acc {
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  padding: 10px 12px;
  cursor: pointer;
  transition: box-shadow 0.2s ease, transform 0.15s ease, background 0.2s ease,
    border-color 0.2s ease;
}
.acc:hover {
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
}

/* Active gradient */
.acc--active {
  color: #fff;
  background: linear-gradient(135deg, #d0173e, #961782);
  border-color: transparent;
  box-shadow: 0 12px 24px rgba(150, 23, 130, 0.28);
}

/* Head row */
.acc-head {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 12px;
}
.acc-q {
  font-size: 14px;
  font-weight: 800;
  color: inherit;
}

/* Toggle button with rotation */
.acc-cta {
  width: 28px;
  height: 28px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(0, 0, 0, 0.12);
  color: #111;
  background: #fff;
  transition: transform 0.25s ease, background 0.2s ease, border-color 0.2s ease;
}
.acc--active .acc-cta {
  border-color: rgba(255, 255, 255, 0.35);
  background: rgba(255, 255, 255, 0.18);
  color: #fff;
}
.acc-cta.is-open {
  transform: rotate(180deg);
}
.acc-cta svg {
  font-size: 16px;
}

/* Smooth body reveal: wrap animates height; inner animates opacity/slide */
.acc-wrapper {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.32s ease;
}
.acc-body {
  padding-top: 6px;
  transform: translateY(-6px);
  opacity: 0;
  transition: opacity 0.28s ease, transform 0.28s ease;
}
.acc--active .acc-body {
  transform: translateY(0);
  opacity: 1;
}
.acc-body p {
  margin: 8px 2px 4px;
  font-size: 13px;
  line-height: 1.6;
  color: #6b6b6b;
}
.acc--active .acc-body p {
  color: #ffeef8;
  opacity: 0.95;
}

/* Responsive */
@media (max-width: 960px) {
  .faq-inner {
    grid-template-columns: 1fr;
  }
  .faq-card {
    max-width: 100%;
  }
}
`}
      </style>
    </>
  );
}

export default Home;
