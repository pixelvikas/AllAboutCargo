import React from "react";
import { Link } from "react-router-dom";

import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaLocationDot,
  FaPhone,
  FaRegEnvelope,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mol-footer" role="contentinfo">
      <div className="mol-footer__inner">
        {/* Brand / tagline / socials */}
        <div className="mol-footer__brand">
          <h2 className="mol-footer__title">Learn. Build. Ship. Succeed.</h2>
          <p className="mol-footer__tag">
            The world runs on cargo , it’s time you run
            <br /> the world of cargo
          </p>

          <div className="mol-footer__socials" aria-label="social links">
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="X / Twitter">
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* NEW: Quick Links */}
        <nav className="mol-footer__quick" aria-label="Quick links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/courses">Courses</a>
            </li>
            <li>
              <a href="/team">Team</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
          </ul>
        </nav>

        {/* Services */}
        <div className="mol-footer__courses">
          <h4>Courses</h4>
          <ol>
            <li>Freight Forwarding Training</li>
            <li>Dangerous Goods (HAZ) Handling</li>
          </ol>
          <a
            href="/courses"
            className="mol-footer__explore"
            aria-label="Explore all courses"
          >
            Explore All
          </a>
        </div>

        {/* Contact */}
        <div className="mol-footer__contact">
          <h4>Say Hello</h4>

          <div className="mol-footer__contactRow">
            <FaLocationDot className="mol-footer__icon" />
            <div>
              <div>
                Powai plaza, office #304, 3rd floor, central avenue, hiranandani
                business park, powai, mumbai -400076
              </div>
            </div>
          </div>

          <div className="mol-footer__contactRow">
            <FaPhone className="mol-footer__icon" />
            <a href="tel:02245158999">02245158999</a>
          </div>

          <div className="mol-footer__contactRow">
            <FaRegEnvelope className="mol-footer__icon" />
            <a href="mailto:info@mol.com">coach@allaboutcargo.in</a>
          </div>
        </div>
      </div>

      <hr className="mol-footer__rule" />

      <div className="mol-footer__bottom">
        <nav className="mol-footer__links" aria-label="Footer links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/team">Team</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/register">Register</Link>
          <Link to="/privacy-policy">Privacy</Link>
          <Link to="/terms-condition">Terms</Link>
          <Link to="/refund-cancellation-policy">Refunds</Link>
          <Link to="/feedback-form">Feedback</Link>
        </nav>

        <div className="mol-footer__cpy">
          <span>Copyright</span>
          <span>2025, All Rights Reserved.</span>
        </div>
      </div>

      <style>{`
/* Base colors */
:root {
  --bg: #3a0834;
  --text: #f5e9f3;
  --muted: #caa6c6;
  --accent: #ff48b5;
  --rule: rgba(255, 255, 255, 0.25);
}

/* Layout helper so footer sits at bottom */
html, body, #root { height: 100%; }
#root { display: flex; flex-direction: column; }
.site-main { flex: 1; min-height: 0; }
body { padding-bottom: 24px; }

.mol-footer {
  background: var(--bg);
  color: var(--text);
  border-radius: 22px;
  padding: 28px 28px 18px;
  margin: 16px;
  margin-bottom: 32px;
}

.mol-footer__inner {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr 1fr 1fr; /* Brand, Quick, Services, Contact */
  gap: 36px;
  align-items: start;
}

.mol-footer__title {
  margin: 0 0 14px;
  font-size: 28px;
  letter-spacing: 0.2px;
  font-weight: 700;
}
.mol-footer__tag { margin: 0 0 18px; color: var(--muted); line-height: 1.5; font-size: 15px; }

.mol-footer__socials { display: flex; gap: 16px; margin-top: 6px; }
.mol-footer__socials a {
  display: inline-grid; place-items: center;
  width: 28px; height: 28px; border-radius: 6px;
  color: var(--text); text-decoration: none;
  transition: transform .15s ease, opacity .15s ease;
}
.mol-footer__socials a:hover { transform: translateY(-2px); opacity: .9; }

/* Quick links */
.mol-footer__quick h4,
.mol-footer__services h4,
.mol-footer__contact h4 { margin: 0 0 10px; font-size: 18px; }

.mol-footer__quick ul {
  list-style: none; padding: 0; margin: 0;
  display: grid; gap: 10px;
}
.mol-footer__quick a {
  color: var(--text);
  text-decoration: none;
  font-size: 14px;
  opacity: .95;
}
.mol-footer__quick a:hover { text-decoration: underline; }

.mol-footer__services ol {
  margin: 0 0 8px 18px; padding: 0; color: var(--text);
  line-height: 1.8; font-size: 14px;
}
.mol-footer__explore { display: inline-block; margin-top: 6px; font-size: 12.5px; color: var(--accent); text-decoration: none; }
.mol-footer__explore:hover { text-decoration: underline; }

.mol-footer__contactRow { display: flex; align-items: start; gap: 10px; margin: 10px 0; font-size: 14px; }
.mol-footer__icon { flex: 0 0 18px; font-size: 18px; margin-top: 2px; opacity: .9; }
.mol-footer__contact a { color: var(--text); text-decoration: none; }
.mol-footer__contact a:hover { text-decoration: underline; }

.mol-footer__rule { border: none; border-top: 1px solid var(--rule); margin: 18px 0 14px; }

.mol-footer__bottom { display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
.mol-footer__links { display: flex; gap: 26px; flex-wrap: wrap; }
.mol-footer__links a { color: var(--text); opacity: .9; text-decoration: none; font-size: 14px; }
.mol-footer__links a:hover { text-decoration: underline; }

.mol-footer__cpy { display: flex; gap: 14px; font-size: 12.5px; color: var(--muted); }

/* Responsive */
@media (max-width: 1080px) {
  .mol-footer__inner { grid-template-columns: 1fr 1fr 1fr; }
  .mol-footer__brand { grid-column: 1 / -1; }
}
@media (max-width: 760px) {
  .mol-footer__inner { grid-template-columns: 1fr; gap: 24px; }
}
@media (max-width: 520px) {
  .mol-footer { padding: 22px 18px 16px; border-radius: 18px; }
}


.mol-footer__courses {
  /* keep spacing consistent with other footer blocks */
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.mol-footer__courses h4 {
  margin: 0;
  font-size: 16px;
  font-weight: 800;
  color: inherit;
}

/* remove default numbering/indent and align the list */
.mol-footer__courses ol,
.mol-footer__courses ul {
  list-style: none;        /* remove numbers */
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;                /* vertical spacing between items */
}

/* each list item: small custom bullet + aligned text */
.mol-footer__courses li {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--muted, #caa6c6); /* uses existing var if available, fallback provided */
  font-size: 14px;
  line-height: 1.5;
  margin-left: 0;          /* ensure perfectly left-aligned under the heading */
}

/* custom bullet using a pseudo-element for a refined look */
.mol-footer__courses li::before {
  content: "";
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  /* subtle gradient dot matching the brand accent */
  background: linear-gradient(180deg, rgba(208,23,62,1), rgba(150,23,130,1));
  flex: 0 0 8px;
  transform: translateY(0.5px);
  box-shadow: 0 2px 6px rgba(16, 24, 40, 0.12);
}

/* make the Explore All link stand out and consistent */
.mol-footer__courses .mol-footer__explore {
  display: inline-block;
  margin-top: 2px;
  font-size: 13px;
  color: var(--accent, #ff48b5);
  text-decoration: none;
  font-weight: 700;
}

.mol-footer__courses .mol-footer__explore:hover {
  text-decoration: underline;
  opacity: 0.95;
}

/* Responsive tweak: ensure good spacing on small screens */
@media (max-width: 520px) {
  .mol-footer__courses { gap: 8px; }
  .mol-footer__courses li { font-size: 13.5px; gap: 8px; }
  .mol-footer__courses li::before { width: 7px; height: 7px; }
}
      `}</style>
    </footer>
  );
};

export default Footer;
