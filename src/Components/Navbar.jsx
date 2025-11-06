import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

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
          <a href="#home" className="active">
            Home
          </a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#team">Our Team</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#register" className="contact-btn">
          Register
        </a>

        {/* Hamburger (react-icons) */}
        <button
          className={`hamburger ${open ? "is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((p) => !p)}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <a href="#home" onClick={closeMenu}>
          Home
        </a>
        <a href="#about" onClick={closeMenu}>
          About Us
        </a>
        <a href="#services" onClick={closeMenu}>
          Services
        </a>
        <a href="#team" onClick={closeMenu}>
          Our Team
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

        {/* Gradient Register Button */}
        <a href="#register" className="mobile-register" onClick={closeMenu}>
          Register
        </a>
      </div>

      <style>
        {`
/* header base (sits over the hero) */
.nav {
  position: absolute;
  inset: 0 0 auto 0;
  height: 72px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  background: #fff;
  padding: 0 28px;
  z-index: 10;
  transition: background 180ms ease, box-shadow 180ms ease;
}

/* slight solid feel on scroll for readability */
.nav.nav-solid {
  background: rgba(10,10,10,0.35);
  backdrop-filter: saturate(120%) blur(6px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.2);
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

.links a.active,
.links a:hover {
  opacity: 1;
  background: linear-gradient(to right, #921329, #360735);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

.contact-btn {
  justify-self: end;
  background: linear-gradient(to bottom, #D0173E, #961782); /* brand gradient */
  color: #fff;
  text-decoration: none;
  padding: 10px 18px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 14px;
  box-shadow: 0 6px 18px rgba(150, 23, 130, 0.35);
  transition: transform 0.2s ease, box-shadow 0.3s ease;
}

.contact-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(208, 23, 62, 0.4);
}

.contact-btn:active {
  transform: translateY(0);
  box-shadow: 0 4px 10px rgba(208, 23, 62, 0.3);
}


/* HAMBURGER (hidden on desktop) — now using react-icons */
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

  /* Updated brand gradient background */
  background: linear-gradient(to bottom, #D0173E, #961782);
  color: #fff; /* icon color */
  transition: transform 0.2s ease, box-shadow 0.3s ease;
}

.hamburger:hover {
  transform: scale(1.05);
  box-shadow: 0 0 10px rgba(208, 23, 62, 0.4);
}

/* 🌙 MOBILE MENU PANEL */
.mobile-menu {
  position: absolute;
  top: 80px;
  left: 12px;
  right: 12px;
  padding: 14px;
  display: none;
  flex-direction: column;
  gap: 6px;
  z-index: 9;

  /* 🧊 Dark Glassmorphism */
  background: linear-gradient(
    135deg,
    rgba(20, 20, 20, 0.85) 0%,
    rgba(10, 10, 10, 0.75) 100%
  );
  backdrop-filter: blur(18px) saturate(160%);
  -webkit-backdrop-filter: blur(18px) saturate(160%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.55);
  transition: all 0.3s ease;
}

/* Show animation */
.mobile-menu.show {
  display: flex;
  animation: slideDown 0.25s ease forwards;
}

/* Links inside */
.mobile-menu a {
  color: #ffffff;
  text-decoration: none;
  padding: 14px 16px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.04);
  transition: background 0.25s ease, transform 0.2s ease;
}

.mobile-menu a:hover {
  background: rgba(255, 255, 255, 0.12);
  transform: translateX(4px);
}
/* ✨ Gradient Register Button */
.mobile-register {
  margin-top: 10px;
  text-align: center;
  background: linear-gradient(to bottom, #D0173E, #961782);
  color: #fff;
  border-radius: 999px;
  font-weight: 600;
  padding: 12px 0;
  text-decoration: none;
  position: relative;
  z-index: 2; /* ensures it's above the blurred glass */
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(150, 23, 130, 0.3);
  transition: transform 0.2s ease, box-shadow 0.3s ease, background 0.3s ease;
}

/* Optional: Give the gradient more pop & contrast */
.mobile-register::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, #D0173E, #961782);
  z-index: -1;
  transition: opacity 0.3s ease;
}

/* Hover & active effects */
.mobile-register:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(208, 23, 62, 0.4);
}

.mobile-register:active {
  transform: translateY(0);
  box-shadow: 0 3px 8px rgba(208, 23, 62, 0.25);
}


/* Slide animation */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


/* RESPONSIVE BEHAVIOR */
@media (max-width: 900px) {
  .links, .contact-btn { display: none; }
  .nav { grid-template-columns: 1fr auto; }
  .hamburger { display: inline-flex; }
}
  
@media (max-width: 620px) {
  .nav {
    padding: 0 10px;
  }
}

        `}
      </style>
    </>
  );
};

export default Navbar;
