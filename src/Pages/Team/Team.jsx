import React from "react";
import bgImage from "../../assets/pageherobg.png";
import Hero from "../../Components/Hero";

import t1 from "../../assets/t1.png";
import t2 from "../../assets/t2.png";
import t3 from "../../assets/t3.png";
import t4 from "../../assets/t4.png";

import "./style.css";

const TEAM = [
  { id: 1, img: t1, name: "ADITYA SHARMA", role: "Chief Technology Officer" },
  { id: 2, img: t2, name: "ADITYA SHARMA", role: "Chief Technology Officer" },
  { id: 3, img: t3, name: "ADITYA SHARMA", role: "Chief Technology Officer" },
  { id: 4, img: t4, name: "ADITYA SHARMA", role: "Chief Technology Officer" },
];

const Team = () => {
  return (
    <>
      <Hero title="Team" crumbCurrent="TEAM" bgImage={bgImage} />

      <section className="team">
        <div className="team__grid">
          {TEAM.map((m) => (
            <article className="team__card" key={m.id}>
              <div className="team__photo">
                <img src={m.img} alt={`${m.name}`} />
              </div>

              <footer className="team__caption">
                <h3 className="team__name">{m.name}</h3>
                <p className="team__role">{m.role}</p>
              </footer>
            </article>
          ))}
        </div>
      </section>

      <style>
        {`
        /* ---------- Container ---------- */
.team {
  padding: clamp(12px, 2.5vw, 24px) clamp(10px, 2vw, 16px)
    clamp(20px, 3vw, 36px);
}

.team__grid {
  max-width: 1200px;
  margin: 0 auto;

  /* Fluid grid: falls back to 4/3/2/1 automatically */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: clamp(12px, 2vw, 22px);
}

/* ---------- Card ---------- */
.team__card {
  background: #fff;
  border: 1px solid #e9e9e9;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 6px 14px rgba(16, 24, 40, 0.06);
  display: grid;
  grid-template-rows: auto auto;
  transition: transform 0.18s ease, box-shadow 0.2s ease;
}

/* lift on hover (disabled for reduced motion) */
.team__card:hover {
  box-shadow: 0 10px 20px rgba(16, 24, 40, 0.1);
  transform: translateY(-1px);
}

/* ---------- Image area ---------- */
.team__photo {
  background: #f3f3f3;
  aspect-ratio: 1 / 1; /* square like your design */
  overflow: hidden;
}

.team__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* fill without distortion */
  display: block;
}

/* ---------- Caption ---------- */
.team__caption {
  background: #fff;
  border-top: 1px solid #eee;
  padding: clamp(10px, 1.6vw, 16px);
  text-align: center;
}

.team__name {
  margin: 0 0 4px;
  font-size: clamp(12px, 1.2vw, 14px);
  letter-spacing: 0.7px;
  color: #111827;
  font-weight: 800;
  text-transform: uppercase;
}

.team__role {
  margin: 0;
  font-size: clamp(11px, 1.1vw, 13px);
  color: #6b7280;
}

/* ---------- Responsive refinements ---------- */
@media (min-width: 1400px) {
  .team__grid {
    max-width: 1320px;
  }
}

@media (max-width: 640px) {
  .team {
    padding: 14px 8px 26px;
  }
  .team__card {
    border-radius: 8px;
  }
}

/* Accessibility: respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .team__card {
    transition: none;
  }
  .team__card:hover {
    transform: none;
  }
}
`}
      </style>
    </>
  );
};

export default Team;
