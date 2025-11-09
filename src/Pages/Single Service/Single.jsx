import React from "react";
import { useParams, Link } from "react-router-dom";
import { FiArrowUpRight, FiPhone, FiMail } from "react-icons/fi";

import bgImage from "../../assets/pageherobg.png";
import singleservicebg1 from "../../assets/singleservicebg1.png";
import singlectasection from "../../assets/singlectasection.png";

import Hero from "../../Components/Hero";
import "./style.css";

/**
 * Content JSON (extremely easy to extend later)
 */
const SERVICES_DATA = {
  1: {
    slug: "freight-forwarding",
    title: "Freight Forwarding Training",
    crumb: "COURSES / FREIGHT FORWARDING TRAINING",
    heroImg: bgImage,
    bannerImg: singleservicebg1,
    heading: (
      <>
        Master the fundamentals of
        <br />
        <span className="ss__titleHi">
          freight forwarding and global logistics.
        </span>
      </>
    ),
    intro:
      "This course covers cargo movement, documentation, customs clearance, and multimodal transport to help you navigate international trade.",
    bullets: [
      "Learn air, sea, and land freight operations",
      "Understand Incoterms, shipping regulations, and documentation",
      "Get hands-on experience in supply chain coordination and cargo handling",
    ],
    careers: [
      "Freight Coordinator",
      "Operations Manager",
      "Shipping Executive",
    ],
    cta: "Gain in-depth expertise in cargo transportation and logistics operations.",
  },

  2: {
    slug: "haz-hazardous-goods",
    title: "HAZ (Hazardous Goods) Training",
    crumb: "COURSES / HAZ (HAZARDOUS GOODS) TRAINING",
    heroImg: bgImage,
    bannerImg: singleservicebg1, // swap with a haz-specific image if you have one
    heading: (
      <>
        Become compliant & confident with
        <br />
        <span className="ss__titleHi">
          hazardous goods handling & transport.
        </span>
      </>
    ),
    intro:
      "Learn safe handling, packaging, classification, and transport rules for dangerous goods across air, sea, and road in line with global standards.",
    bullets: [
      "Understand UN classification, packing groups, and labels/placards",
      "Comply with IATA-DGR, IMDG, ADR, and local regulations",
      "Prepare correct Shipper’s Declarations and DG documentation",
    ],
    careers: [
      "DG Compliance Officer",
      "Warehouse & Safety Supervisor",
      "Logistics Safety Coordinator",
    ],
    cta: "Build a safety-first career with industry-recognized hazardous goods expertise.",
  },
};

const CATEGORIES = [
  { id: "1", label: "Freight Forwarding Training" },
  { id: "2", label: "HAZ (Hazardous Goods) Training" },
];

const Single = () => {
  const { id } = useParams(); // expects route path="/services/:id"
  const data = SERVICES_DATA[id];

  // If invalid id → show a friendly fallback
  if (!data) {
    return (
      <>
        <Hero
          title="Service Not Found"
          crumbCurrent="COURSES / NOT FOUND"
          bgImage={bgImage}
        />
        <section className="ss">
          <div className="ss__grid">
            <aside className="ss__left" aria-label="Services navigation">
              <div className="ss__cat">
                <div className="ss__catHead">
                  <h4 className="ss__catTitle">Services Category</h4>
                </div>
                <ul className="ss__catList" role="list">
                  {CATEGORIES.map((c) => (
                    <li key={c.id}>
                      <Link className="ss__catLink" to={`/services/${c.id}`}>
                        <span className="ss__catText">{c.label}</span>
                        <FiArrowUpRight
                          className="ss__catIcon"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="ss__right">
              <h2 className="ss__title">We couldn’t find that course.</h2>
              <p className="ss__intro">
                Please pick a service from the left to continue.
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Hero
        title={data.title}
        crumbCurrent={data.crumb}
        bgImage={data.heroImg}
      />

      <section className="ss">
        <div className="ss__grid">
          {/* LEFT SIDEBAR */}
          <aside className="ss__left" aria-label="Services navigation">
            {/* Services list */}
            <div className="ss__cat">
              <div className="ss__catHead">
                <h4 className="ss__catTitle">Services Category</h4>
              </div>

              <ul className="ss__catList" role="list">
                {CATEGORIES.map((c) => {
                  const isActive = c.id === id;
                  return (
                    <li key={c.id}>
                      <Link
                        to={`/services/${c.id}`}
                        className={`ss__catLink ${isActive ? "is-active" : ""}`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        <span className="ss__catText">{c.label}</span>
                        <FiArrowUpRight
                          className="ss__catIcon"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Help card */}
            <div className="ss__help">
              <div className="ss__helpMedia">
                <img src={singlectasection} alt="Support representative" />
              </div>

              <div className="ss__helpBody">
                <h5>How Can We Help</h5>
                <p>If you need any help, please feel free to contact us</p>

                <a className="ss__chip" href="tel:+02222334455">
                  <span className="ss__chipIcon" aria-hidden="true">
                    <FiPhone />
                  </span>
                  <span className="sr-only">Call: </span>
                  +022 22334455
                </a>

                <a className="ss__chip" href="mailto:info@gmail.com">
                  <span
                    className="ss__chipIcon ss__chipIcon--mail"
                    aria-hidden="true"
                  >
                    <FiMail />
                  </span>
                  <span className="sr-only">Email: </span>
                  info@gmail.com
                </a>
              </div>
            </div>
          </aside>

          {/* RIGHT CONTENT */}
          <div className="ss__right">
            <figure className="ss__hero">
              <img src={data.bannerImg} alt={data.title} />
            </figure>

            <h2 className="ss__title">{data.heading}</h2>

            <div className="ss__intro">
              <p>{data.intro}</p>

              <ol className="ss__list">
                {data.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ol>
            </div>

            <div className="ss__career">
              <h4>Career Opportunities:</h4>
              <ul>
                {data.careers.map((c, i) => (
                  <li key={i}>
                    <a href="#">{c}</a>
                  </li>
                ))}
              </ul>
            </div>

            <a href="#" className="ss__cta">
              {data.cta}
            </a>
          </div>
        </div>
      </section>

      <style>
        {`
        /* ===== Canvas ===== */
.ss {
  background: #f6f5f3;
  padding: clamp(12px, 2vw, 18px) clamp(10px, 2vw, 16px) clamp(22px, 3vw, 30px);
}

.ss__grid {
  max-width: 1160px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(260px, 300px) 1fr; /* sidebar + main */
  gap: clamp(16px, 2vw, 22px);
}

/* ===== LEFT: sticky column ===== */
.ss__left {
  display: grid;
  gap: 18px;
  align-content: start;
  position: sticky;
  top: 14px;
  height: fit-content;
}

/* Category list card */
.ss__cat {
  background: #ffffff;
  border: 1px solid #ececec;
  border-radius: 18px;
  padding: 14px;
  box-shadow: 0 6px 18px rgba(17, 12, 24, 0.06);
}

.ss__catHead {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 8px;
}

.ss__catTitle {
  margin: 0;
  font: 700 14px;
  color: #0f172a;
}

.ss__catHint {
  font-size: 12px;
  color: #a08aa0;
}

/* ✅ No scrollbar: remove max-height/overflow */
.ss__catList {
  list-style: none;
  margin: 0;
  padding: 4px 2px 2px;
  display: grid;
  gap: 8px;
  /* removed: max-height, overflow */
}

.ss__catLink {
  --ring: 0 0 0 0 rgba(191, 14, 131, 0);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid #efefef;
  background: linear-gradient(180deg, #fff, #fff);
  color: #111827;
  text-decoration: none;
  font-size: 14px;
  transition: transform 0.15s ease, border-color 0.2s ease, background 0.2s ease,
    box-shadow 0.2s ease;
  box-shadow: var(--ring);
}
.ss__catLink:hover {
  background: linear-gradient(180deg, #fff, #faf7fb);
  border-color: #ead7ea;
  transform: translateY(-1px);
}
.ss__catLink.is-active {
  border-color: #e6bde3;
  background: linear-gradient(180deg, #fff, #fbf5fb);
  box-shadow: 0 0 0 4px rgba(191, 14, 131, 0.1);
}

.ss__catText {
  flex: 1 1 auto;
}
.ss__catIcon {
  color: #a20f86;
  font-size: 18px;
}

/* Help card */
.ss__help {
  background: #ffffff;
  border: 1px solid #ececec;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(17, 12, 24, 0.06);
}
.ss__helpMedia img {
  display: block;
  width: 100%;
  height: 130px;
  object-fit: cover;
}
.ss__helpBody {
  padding: 12px;
}
.ss__helpBody h5 {
  margin: 0 0 6px;
  font: 700 14px;
  color: #0f172a;
}
.ss__helpBody p {
  margin: 0 0 10px;
  color: #6b7280;
  font-size: 13px;
  line-height: 1.5;
}

.ss__chip {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 12px;
  border-radius: 999px;
  border: 1px dashed rgba(17, 12, 24, 0.2);
  background: #fff;
  color: #0f172a;
  text-decoration: none;
  font-weight: 700;
  font-size: 13px;
  box-shadow: 0 2px 10px rgba(16, 24, 40, 0.06);
  margin-top: 8px;
  transition: transform 0.15s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}
.ss__chip:hover {
  transform: translateY(-1px);
  border-color: rgba(191, 14, 131, 0.45);
  box-shadow: 0 6px 18px rgba(191, 14, 131, 0.12);
}
.ss__chipIcon {
  display: grid;
  place-items: center;
  width: 26px;
  height: 26px;
  border-radius: 999px;
  color: #fff;
  font-size: 14px;
  background: linear-gradient(to bottom, #d0173e, #961782);
}
.ss__chipIcon--mail {
  background: linear-gradient(to bottom, #d0173e, #961782);
}

/* ===== RIGHT ===== */
.ss__hero {
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid #ececec;
  box-shadow: 0 10px 26px rgba(17, 12, 24, 0.08);
  background: #fff;
}
.ss__hero img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.ss__title {
  margin: 12px 0 6px;
  font-size: clamp(22px, 3.6vw, 28px);
  color: #111827;
  line-height: 1.28;
  font-weight: 800;
}
.ss__titleHi {
  background: linear-gradient(90deg, #d0173e, #961782);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

.ss__intro p {
  margin: 8px 0 8px;
  color: #6b7280;
  line-height: 1.7;
  font-size: 14px;
}
.ss__list {
  margin: 2px 0 12px 18px;
  color: #4b5563;
  font-size: 14px;
  line-height: 1.65;
}

.ss__career h4 {
  margin: 10px 0 6px;
  font-size: 16px;
  color: #7a0d6d;
}
.ss__career ul {
  margin: 0;
  padding-left: 18px;
  list-style: decimal;
}
.ss__career a {
  color: #a20f86;
  text-decoration: none;
}
.ss__career a:hover {
  text-decoration: underline;
}

/* CTA */
.ss__cta {
  display: inline-block;
  margin-top: 14px;
  padding: 11px 16px;
  border-radius: 999px;
  background: linear-gradient(to bottom, #d0173e, #961782);
  color: #fff;
  text-decoration: none;
  font-weight: 800;
  font-size: 13.5px;
  box-shadow: 0 10px 24px rgba(150, 23, 130, 0.26);
  transition: transform 0.2s ease, box-shadow 0.3s ease, filter 0.2s ease;
}
.ss__cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 28px rgba(150, 23, 130, 0.32);
  filter: saturate(1.08);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 1020px) {
  .ss__grid {
    grid-template-columns: 1fr; /* single column */
  }

  /* Reverse order: show right content first, sidebar below */
  .ss__right {
    order: -1;
  }
  .ss__left {
    order: 0;
  }

  /* (optional) if sticky was used on desktop, disable it on mobile */
  .ss__left {
    position: static;
  }
  .ss__left {
    position: static;
  }
  .ss__hero img {
    aspect-ratio: 21 / 12;
  }
}

@media (max-width: 620px) {
  .ss {
    padding: 10px 8px 18px;
  }
  .ss__cat {
    padding: 12px;
  }
  /* ✅ keep full height; don't cap or overflow on mobile either */
  .ss__hero img {
    aspect-ratio: 4 / 3;
  }
  .ss__cta {
    display: block;
    text-align: center;
    width: 100%;
  }
}

/* A11y */
.ss__catLink:focus-visible,
.ss__chip:focus-visible,
.ss__cta:focus-visible {
  outline: none;
  box-shadow: 0 0 0 4px rgba(191, 14, 131, 0.22);
}
@media (prefers-reduced-motion: reduce) {
  .ss__catLink,
  .ss__chip,
  .ss__cta {
    transition: none;
  }
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
`}
      </style>
    </>
  );
};

export default Single;
