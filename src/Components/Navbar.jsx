import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);
  const toggleMenu = () => setOpen((p) => !p);

  // Optional: lock page scroll while menu is open (better UX)
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <>
      <header className="nav">
        <div className="brand">
          <div className="logo">
            <img src={logo} alt="All About Cargo" />
          </div>
          <span className="brand-text">
            <strong>ALL ABOUT CARGO</strong>
          </span>
        </div>

        {/* Desktop links */}
        <nav className="links">
          <a href="/" className="active">
            Home
          </a>
          <a href="/about">About Us</a>
          <a href="/courses">Courses</a>
          <a href="/team">Our Team</a>
          <a href="/contact">Contact</a>
        </nav>

        <a href="/register" className="contact-btn">
          Register
        </a>

        {/* Hamburger */}
        <button
          className={`hamburger ${open ? "is-open" : ""}`}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={toggleMenu}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </header>

      {/* Mobile Menu — now FIXED & highest z-index */}
      <div
        className={`mobile-menu ${open ? "show" : ""}`}
        role="dialog"
        aria-modal="true"
      >
        <a href="/" onClick={closeMenu}>
          Home
        </a>
        <a href="/about" onClick={closeMenu}>
          About Us
        </a>
        <a href="/courses" onClick={closeMenu}>
          Courses
        </a>
        <a href="/team" onClick={closeMenu}>
          Our Team
        </a>
        <a href="/contact" onClick={closeMenu}>
          Contact
        </a>

        <a href="/register" className="mobile-register" onClick={closeMenu}>
          Register
        </a>
      </div>

      <style>{`
/* HEADER sits over hero but below fixed menu */
.nav {
  position: absolute;        /* stays inside hero visually */
  inset: 0 0 auto 0;
  height: 72px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  background: #fff;
  padding: 0 28px;
  z-index: 20;               /* lower than mobile-menu (which is 999) */
  transition: background 180ms ease, box-shadow 180ms ease;
}

.brand { display: flex; align-items: center; gap: 12px; }
.logo img { width: 36px; height: 36px; display: block; }
.brand-text {
  font-size: 20px;
  letter-spacing: 0.2px;
  background: linear-gradient(to right, #921329, #360735);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
.links { display: flex; gap: 28px; justify-content: center; }
.links a {
  text-decoration: none;
  font-size: 17px;
  font-weight: 600;
  padding: 8px 6px;
  opacity: 0.85;
  background: linear-gradient(to right, #921329, #360735);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  transition: opacity 0.3s ease;
}
.links a.active, .links a:hover { opacity: 1; }

.contact-btn {
  justify-self: end;
  background: linear-gradient(to bottom, #D0173E, #961782);
  color: #fff;
  text-decoration: none;
  padding: 10px 18px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 14px;
  box-shadow: 0 6px 18px rgba(150, 23, 130, 0.35);
  transition: transform 0.2s ease, box-shadow 0.3s ease;
}
.contact-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(208, 23, 62, 0.4); }

/* HAMBURGER */
.hamburger {
  display: none;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  justify-self: end;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: linear-gradient(to bottom, #D0173E, #961782);
  color: #fff;
  transition: transform 0.2s ease, box-shadow 0.3s ease;
}
.hamburger:hover { transform: scale(1.05); box-shadow: 0 0 10px rgba(208, 23, 62, 0.4); }
/* HEADER stays the same */

/* ✅ Compact overlay menu (not full screen) */
.mobile-menu {
  position: fixed;                 /* overlay */
  top: 75px;                       /* sits below header */
  left: 12px;
  right: 12px;
  /* Make it a smaller panel instead of full height */
  max-height: 70vh;                /* cap height */
  width: auto;                     /* use available width between 12px margins */
  margin: 0 auto;                  /* center horizontally if narrower than viewport */
  padding: 12px;
  display: none;
  flex-direction: column;
  gap: 6px;
  z-index: 999;

  /* Glass card look */
  background: linear-gradient(
    135deg,
    rgba(20, 20, 20, 0.92) 0%,
    rgba(10, 10, 10, 0.86) 100%
  );
  backdrop-filter: blur(14px) saturate(150%);
  -webkit-backdrop-filter: blur(14px) saturate(150%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.5);
  transition: opacity 0.25s ease, transform 0.25s ease;

  overflow-y: auto;                /* scroll internally if content taller */
}

/* Show animation */
.mobile-menu.show {
  display: flex;
  animation: slideDown 0.25s ease forwards;
}

/* Links */
/* Links (default menu items) */
.mobile-menu a {
  color: #ffffff;
  text-decoration: none;
  padding: 12px 14px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.05);
  transition: background 0.25s ease, transform 0.2s ease;
}

.mobile-menu a:hover {
  background: rgba(255, 255, 255, 0.12);
  transform: translateX(4px);
}

/* ✅ Register button override — strong specificity */
.mobile-menu a.mobile-register {
  background: linear-gradient(to bottom, #D0173E, #961782) !important;
  color: #fff !important;
  font-weight: 700;
  padding: 12px 0;
  border-radius: 999px;
  text-align: center;
  margin-top: 12px;
  box-shadow: 0 6px 18px rgba(150, 23, 130, 0.35);
  transition: transform 0.2s ease, box-shadow 0.3s ease;
}

/* Hover effect (lift + brighter) */
.mobile-menu a.mobile-register:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(208, 23, 62, 0.45);
  background: linear-gradient(to bottom, #E02040, #A21890) !important;
}

/* Slide animation */
@keyframes slideDown {
  from { opacity: 0; transform: translateY(-8px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* 📱 Make the panel even narrower on mid-size devices */
@media (max-width: 900px) {
  .links, .contact-btn { display: none; }
  .nav { grid-template-columns: 1fr auto; }
  .hamburger { display: inline-flex; }

  /* cap panel width so it feels compact */
  .mobile-menu {
    width: min(520px, calc(100% - 24px));
  }
}

/* Tighten padding on very small phones */
@media (max-width: 480px) {
  .mobile-menu {
    left: 10px;
    right: 10px;
    padding: 10px;
    border-radius: 14px;
    max-height: 65vh; /* slightly smaller on tiny screens */
  }
  .mobile-menu a { font-size: 14px; padding: 11px 12px; }
}

@media (max-width: 620px) {
  .nav { padding: 0 10px; }
}
      `}</style>
    </>
  );
};

export default Navbar;
