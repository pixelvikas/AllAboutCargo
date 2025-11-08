import React from "react";
import Header from "./Navbar";

const Hero = ({ title, crumbCurrent, bgImage }) => {
  return (
    <section className="page-hero" aria-label={`${title} hero`}>
      <Header />

      <div
        className="page-hero__bg"
        style={{ backgroundImage: `url(${bgImage})` }}
        role="img"
        aria-label={title}
      />
      <div className="page-hero__overlay" />

      <div className="page-hero__content">
        <h1 className="page-hero__title">{title}</h1>

        <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
          <a href="/" className="crumb">
            Home
          </a>
          <span className="crumb-sep" aria-hidden="true">
            /
          </span>
          <span className="crumb current">{crumbCurrent}</span>
        </nav>
      </div>

      <style>{`
.page-hero {
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  margin: 16px;
  min-height: 450px;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: max(12px, env(safe-area-inset-left));
  padding-right: max(12px, env(safe-area-inset-right));
}

.page-hero__bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  z-index: -2;
}
.page-hero__overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(120% 100% at 70% 10%, rgba(0,0,0,.1) 0%, rgba(0,0,0,.55) 55%, rgba(0,0,0,.7) 100%),
    linear-gradient(to bottom, rgba(0,0,0,.2) 0%, rgba(0,0,0,.62) 100%);
  z-index: -1;
}
.page-hero__content {
  position: relative;
  max-width: 1200px;
  width: 100%;
  margin: auto;
  padding: 70px 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: flex-start;
  z-index: 5;
}
.page-hero__title {
  margin: 0;
  font-weight: 800;
  line-height: 1.1;
  color: #ffffff;
  text-shadow: 0 2px 14px rgba(0,0,0,0.35);
  font-size: clamp(32px, 5vw, 52px);
}
.page-hero__breadcrumb {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  letter-spacing: 0.2px;
}
.page-hero__breadcrumb .crumb { color: #e5e7eb; text-decoration: none; transition: opacity .2s ease; }
.page-hero__breadcrumb .crumb:hover { opacity: .85; }
.page-hero__breadcrumb .crumb.current { color: #fff; font-weight: 700; text-transform: uppercase; }
.crumb-sep { color: #f22fbf; opacity: .85; }

@media (max-width: 1024px) {
  .page-hero { min-height: 460px; }
  .page-hero__content { padding: 56px 20px; }
}
@media (max-width: 768px) {
  .page-hero { min-height: 400px; }
  .page-hero__content { padding: 48px 18px; gap: 10px; }
  .page-hero__breadcrumb { font-size: 13px; }
}
@media (max-width: 480px) {
  .page-hero { min-height: 360px; margin: 8px 8px 22px; border-radius: 16px; }
  .page-hero__title { font-size: clamp(26px, 8vw, 38px); }
  .page-hero__breadcrumb { gap: 6px; }
}
      `}</style>
    </section>
  );
};

export default Hero;
