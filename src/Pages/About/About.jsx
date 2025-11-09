import React from "react";
import Hero from "../../Components/Hero";
import "./style.css";
import bgImage from "../../assets/pageherobg.png";
import { FiPlus, FiMinus, FiPhoneCall } from "react-icons/fi";
import { FiTarget, FiAward, FiSmile, FiCheckCircle } from "react-icons/fi";
import aboutpageimg from "../../assets/aboutpageimg.png";

const About = () => {
  const [open, setOpen] = React.useState(1); // second open by default
  const bodyRefs = React.useRef([]);

  const getHeight = (i) => {
    const el = bodyRefs.current[i];
    return el ? el.scrollHeight : 0;
  };

  const toggle = (i) => setOpen((prev) => (prev === i ? -1 : i));

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
  return (
    <>
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

      <section className="coach">
        <div className="coach__card">
          {/* Left copy */}
          <div className="coach__left">
            <h2 className="coach__title">
              Certified and <br />
              experienced <span className="coach__highlight">coaching</span>
            </h2>
            <p className="coach__subtitle">
              Choosing us means partnering with experienced coaches who are
              dedicated to unlocking your potential.
            </p>
          </div>

          {/* Right stats (2x2) */}
          <div className="coach__stats">
            <div className="coach__stat">
              <div className="coach__value">2</div>
              <div className="coach__label">Industry-Focused Courses</div>
            </div>

            <div className="coach__stat">
              <div className="coach__value">4</div>
              <div className="coach__label">Learners Already Onboard</div>
            </div>

            <div className="coach__stat">
              <div className="coach__value">10%</div>
              <div className="coach__label">Job Placement Target</div>
            </div>
          </div>
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
  /* container */
.alc {
  padding: 28px 16px 40px;
}

.alc__grid {
  max-width: 1140px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr; /* left bigger than right */
  gap: 32px;
}

/* headline */
.alc__title {
  font-size: clamp(28px, 4.4vw, 44px);
  line-height: 1.15;
  margin: 0 0 14px;
  color: #0f172a;
  letter-spacing: 0.2px;
}

.alc__highlight {
  color: #bf0e83; /* magenta accent */
}

/* intro paragraph */
.alc__intro {
  margin: 0 0 18px;
  color: #4b5563;
  line-height: 1.7;
  max-width: 720px;
}

/* mission / vision cards row */
.alc__cards {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: start;
  gap: 18px;
  margin: 18px 0 20px;
}

.alc__divider {
  width: 1px;
  background: #e5e7eb;
  height: 100%;
  align-self: stretch;
}

/* card */
.alc__card {
  display: grid;
  grid-template-columns: 52px 1fr;
  gap: 12px;
}

.alc__iconwrap {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 24px;
  color: #fff;
  background: linear-gradient(to bottom, #d0173e, #961782);
}

.alc__cardtitle {
  margin: 0 0 6px;
  font-size: 18px;
  color: #0f172a;
  font-weight: 700;
}

.alc__cardtext {
  margin: 0;
  color: #6b7280;
  line-height: 1.6;
}

/* What you'll learn */
.alc__learn {
  margin-top: 16px;
}

.alc__learnhead {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.alc__learnhead h4 {
  margin: 0;
  font-size: 18px;
  color: #0f172a;
}

.alc__list {
  list-style: none;
  padding: 0;
  margin: 8px 0 0;
  color: #4b5563;
}

.alc__list li {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin: 6px 0;
  line-height: 1.55;
}

.alc__check {
  min-width: 18px;
  margin-top: 2px;
  color: #9b1c86;
}

/* CTA */
.alc__cta {
  display: inline-block;
  margin-top: 18px;
  padding: 12px 18px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  color: #fff;
  background: linear-gradient(to bottom, #d0173e, #961782);
  background-size: 200% 200%;
  box-shadow: 0 6px 18px rgba(150, 23, 130, 0.3);
  transition: transform 0.2s ease, box-shadow 0.3s ease,
    background-position 0.3s ease;
}
.alc__cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(150, 23, 130, 0.35);
  background-position: 0 20%;
}

/* RIGHT image panel */
.alc__right {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.alc__photo {
  width: 100%;
  background: #fff;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 10px 24px rgba(16, 24, 40, 0.08);
  border: 1px solid #f1f5f9;
}

.alc__photo img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}

/* Responsive */
@media (max-width: 1024px) {
  .alc__grid {
    grid-template-columns: 1.2fr 0.8fr;
    gap: 24px;
  }
}

@media (max-width: 820px) {
  .alc__grid {
    grid-template-columns: 1fr;
  }
  .alc__right {
    order: -1; /* put image on top for narrow screens (optional) */
    margin-bottom: 14px;
  }
  .alc__cards {
    grid-template-columns: 1fr; /* stack mission & vision */
    gap: 14px;
  }
  .alc__divider {
    display: none;
  }
}

/* Components/coaching-stats.css */

.coach {
  padding: 10px 12px 0;
}

.coach__card {
  background: #3c0734; /* deep plum */
  color: #fff;
  border-radius: 22px;
  padding: 28px 28px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 1fr; /* left bigger */
  gap: 24px;
}

/* Left copy */
.coach__title {
  margin: 0 0 10px;
  font-size: clamp(26px, 3.8vw, 40px);
  line-height: 1.15;
  font-weight: 700;
  letter-spacing: 0.2px;
}

.coach__highlight {
  color: #bf0e83; /* magenta highlight */
}

.coach__subtitle {
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
  font-size: 14px;
  line-height: 1.7;
  max-width: 520px;
}

/* Right stats grid */
.coach__stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 115px 36px;
  align-content: start;
}

.coach__stat {
  display: grid;
  gap: 6px;
}

.coach__value {
  font-size: clamp(26px, 3.2vw, 34px);
  font-weight: 700;
}

.coach__label {
  color: rgba(255, 255, 255, 0.78);
  font-size: 14px;
}

/* Responsive */
@media (max-width: 900px) {
  .coach__card {
    grid-template-columns: 1fr;
    gap: 18px;
    padding: 24px 18px;
  }
  .coach__subtitle {
    max-width: none;
  }

  .coach__stats {
    gap: 28px 36px;
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
};

export default About;
