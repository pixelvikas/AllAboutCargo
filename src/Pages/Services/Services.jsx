import React from "react";
import { Link } from "react-router-dom";
import Hero from "../../Components/Hero";
import bgImage from "../../assets/pageherobg.png";
import servicesbannerbg from "../../assets/servicesbannerbg.png";
import { FiTruck, FiBriefcase } from "react-icons/fi";
import "./style.css";

const Services = () => {
  const COURSES = [
    {
      id: 1,
      title: "Freight Forwarding Training",
      desc: "Master global logistics fundamentals, documents, customs clearance, and multimodal transport with practical case studies.",
      icon: <FiTruck />,
    },
    {
      id: 2,
      title: "HAZ (Hazardous Goods) Training",
      desc: "Learn classification, packing, labeling, documentation, and compliance for handling and transporting dangerous goods.",
      icon: <FiBriefcase />,
    },
  ];

  return (
    <>
      <Hero title="Courses" crumbCurrent="COURSES" bgImage={bgImage} />

      <section className="cg" aria-labelledby="courses-heading">
        <div className="cg__grid">
          {COURSES.map((c) => (
            <article key={c.id} className="cg__card">
              {/* Make the whole card clickable */}
              <Link
                to={`/services/${c.id}`}
                className="cg__cardLink"
                aria-label={`Learn more about ${c.title}`}
              >
                <div className="cg__badge" aria-hidden="true">
                  <span className="cg__badgeIcon">{c.icon}</span>
                </div>

                <header className="cg__head">
                  <h3 className="cg__title">
                    <span className="cg__num">{c.id}.</span> {c.title}
                  </h3>
                </header>

                <p className="cg__desc">{c.desc}</p>

                <span className="cg__link">Learn More</span>
              </Link>
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

      <style>
        {`
        .cg {
  padding: 12px 12px 24px;
}

.cg__grid {
  max-width: 1140px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px 22px;
}

/* Card */
.cg__card {
  background: #ffffff;
  border: 1px solid #eee;
  border-radius: 18px;
  padding: 18px 18px 16px;
  box-shadow: 0 6px 18px rgba(17, 12, 24, 0.05);
  transition: transform 0.18s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.cg__card:hover {
  transform: translateY(-2px);
  border-color: #e9e9e9;
  box-shadow: 0 10px 24px rgba(17, 12, 24, 0.08);
}

/* Gradient icon badge */
.cg__badge {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: linear-gradient(to bottom, #d0173e, #961782);
  margin-bottom: 10px;
}
.cg__badgeIcon {
  color: #fff;
  font-size: 26px;
  margin-top: 5px;
}

/* Headline */
.cg__head {
  margin-bottom: 4px;
}

.cg__num {
  font-weight: 700;
  margin-right: 6px;
}

.cg__title {
  margin: 0;
  font-size: 15px;
  line-height: 1.4;
  color: #0f172a;
  font-weight: 700;
}

/* Body */
.cg__desc {
  margin: 6px 0 12px;
  color: #6b7280;
  font-size: 14px;
  line-height: 1.55;
}

/* Learn more */
.cg__link {
  display: inline-block;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  background: linear-gradient(180deg, #d0173e, #961782);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.cg__link:hover {
  opacity: 0.9;
}

/* Responsive */
@media (max-width: 1024px) {
  .cg__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .cg__grid {
    grid-template-columns: 1fr;
  }
  .cg__card {
    border-radius: 16px;
  }
}
.et {
  padding: 10px 12px 24px;
}

.et__card {
  max-width: 1100px; /* ✅ fluid container */
  width: 100%;
  margin: 0 auto;
  padding: 22px;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr; /* image : text */
  gap: 24px;
}

/* Image wrapper */
.et__media {
  border-radius: 26px;
  overflow: hidden;
  align-self: center;
}

/* ✅ Responsive image */
.et__media img {
  display: block;
  width: 100%;
  height: auto; /* let height follow width */
  aspect-ratio: 16 / 9; /* keeps a nice shape on wide screens */
  object-fit: cover;
  border-radius: 18px;
}

/* Text */
.et__content {
  align-self: center;
}

.et__title {
  margin: 0 0 10px;
  font-size: clamp(24px, 4.2vw, 36px);
  line-height: 1.2;
  color: #111827;
  font-weight: 700;
  letter-spacing: 0.2px;
}

.et__highlight {
  color: #bf0e83;
}

.et__desc {
  margin: 8px 0 16px;
  color: #6b7280;
  line-height: 1.7;
  max-width: 560px;
  font-size: 14.5px;
}

/* CTA button */
.et__cta {
  display: inline-block;
  padding: 10px 16px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
  font-size: 13.5px;
  color: #fff;
  background: linear-gradient(to bottom, #d0173e, #961782);
  background-size: 200% 200%;
  box-shadow: 0 6px 18px rgba(150, 23, 130, 0.28);
  transition: transform 0.2s ease, box-shadow 0.3s ease,
    background-position 0.3s ease;
}
.et__cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(150, 23, 130, 0.35);
  background-position: 0 20%;
}

/* ===== Responsive ===== */
@media (max-width: 920px) {
  .et__card {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 18px;
  }
  /* Taller image on tablets/phones */
  .et__media img {
    aspect-ratio: 21 / 12; /* slightly taller */
  }
}

@media (max-width: 520px) {
  .et {
    padding: 8px 8px 18px;
  }
  .et__card {
    border-radius: 18px;
    padding: 16px;
  }
  .et__media {
    border-radius: 18px;
  }
  .et__media img {
    aspect-ratio: 4 / 3; /* even taller on small screens */
    border-radius: 14px;
  }
  .et__title {
    font-size: clamp(22px, 7vw, 30px);
  }
}
`}
      </style>
    </>
  );
};

export default Services;
