import React from "react";
import bgImage from "../../assets/pageherobg.png";
import Hero from "../../Components/Hero";

import t1 from "../../assets/team1.png";
import t2 from "../../assets/team2.png";

import "./style.css";

const TEAM = [
  { id: 1, img: t1, name: "Amruta Surve", role: "Founder" },
  { id: 2, img: t2, name: "Avinash Palekar", role: "Co-Founder" },
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
                <img src={m.img} alt={m.name} />
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
  padding: clamp(14px, 2.5vw, 28px)
           clamp(12px, 2vw, 20px)
           clamp(24px, 3vw, 40px);
}

.team__grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: clamp(14px, 2vw, 24px);
}

/* ---------- Card ---------- */
.team__card {
  background: #fff;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 10px 26px rgba(16, 24, 40, 0.12);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.25s ease;
}

.team__card:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 36px rgba(16, 24, 40, 0.18);
}

/* ---------- FULL COVER IMAGE ---------- */
.team__photo {
  position: relative;
  width: 100%;
  aspect-ratio: 2 / 2;   /* 🔥 portrait card */
  overflow: hidden;
}

.team__photo img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;     /* ✅ FULL COVER */
  object-position: center top; /* better faces */
}

/* ---------- Caption ---------- */
.team__caption {
  padding: 16px 14px 18px;
  text-align: center;
  background: #ffffff;
}

.team__name {
  margin: 0 0 6px;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.8px;
  color: #111827;
  text-transform: uppercase;
}

.team__role {
  margin: 0;
  font-size: 13px;
  color: #6b7280;
}

/* ---------- Responsive ---------- */
@media (max-width: 640px) {
  .team__photo {
    aspect-ratio: 4 / 5;
  }
}

/* ---------- Accessibility ---------- */
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
