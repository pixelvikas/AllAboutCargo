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
      q: "Who can enroll in your courses?",
      a: "Anyone interested in logistics, freight forwarding, or global trade—students, freshers, working professionals, and entrepreneurs.",
    },
    {
      q: "Are your certifications recognized?",
      a: "Yes, we offer IATA, FIATA, and industry-recognized certifications to boost your career prospects.",
    },
    {
      q: "Do you offer job placement assistance?",
      a: "Yes, we provide placement support through our hiring partners and alumni network.",
    },
    {
      q: "How long are the courses?",
      a: "Programs range from short bootcamps (2–4 weeks) to comprehensive masterclasses (8–12 weeks).",
    },
    {
      q: "Do you offer online training?",
      a: "We offer online, hybrid, and in-person options to suit your schedule.",
    },
  ];
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
              <div className="coach__value">100%</div>
              <div className="coach__label">Certification</div>
            </div>

            <div className="coach__stat">
              <div className="coach__value">20+</div>
              <div className="coach__label">Hiring Partners</div>
            </div>

            <div className="coach__stat">
              <div className="coach__value">95%</div>
              <div className="coach__label">Placement Rate</div>
            </div>

            <div className="coach__stat">
              <div className="coach__value">20+</div>
              <div className="coach__label">Courses</div>
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
    </main>
  );
};

export default About;
