// src/Components/Loading.jsx
import React from "react";
import logo from "../assets/logo.svg";

const Loading = ({ title = "ALL ABOUT CARTGO", fullscreen = true }) => {
  return (
    <div className={fullscreen ? "loader-overlay" : "loader-inline"}>
      <div
        className="loader-box"
        role="status"
        aria-live="polite"
        aria-label={`${title} loading`}
      >
        <img src={logo} alt="Cartgo logo" className="loader-logo" />

        <div className="loader-title" aria-hidden="true">
          {title}
        </div>
      </div>

      <style>
        {`
        .loader-overlay {
          position: fixed;
          inset: 0; /* top:0; right:0; bottom:0; left:0 */
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.96);
          z-index: 9999;
        }

        .loader-inline {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .loader-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          padding: 1.25rem 1.75rem;
          border-radius: 12px;
          box-shadow: 0 8px 30px rgba(10,10,10,0.06);
          backdrop-filter: blur(4px);
        }

        /* Logo scaling animation: scales in and out smoothly */
        .loader-logo {
          width: 96px;
          height: 96px;
          object-fit: contain;
          transform-origin: center;
          animation: scalePulse 1.8s cubic-bezier(.2,.9,.3,.95) infinite;
          will-change: transform, opacity;
        }

        @keyframes scalePulse {
          0%   { transform: scale(0.85); opacity: 0.85; }
          25%  { transform: scale(1.05); opacity: 1; }
          50%  { transform: scale(0.9);  opacity: 0.95; }
          75%  { transform: scale(1.02); opacity: 1; }
          100% { transform: scale(0.85); opacity: 0.85; }
        }

        /* Title styling with gradient text as requested */
        .loader-title {
          margin-top: 6px;
          font-size: 20px;
          font-weight: 700;
          letter-spacing: 0.2px;
          text-transform: uppercase;
          background: linear-gradient(to right, #921329, #360735);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          /* fallback for non-supporting browsers */
          color: transparent;
          text-fill-color: transparent;
          /* small subtle float animation so it feels alive with the logo */
          animation: titleFloat 1.8s ease-in-out infinite;
          will-change: transform, opacity;
        }

        @keyframes titleFloat {
          0%   { transform: translateY(0px); opacity: 0.92; }
          50%  { transform: translateY(-4px); opacity: 1; }
          100% { transform: translateY(0px); opacity: 0.92; }
        }

        /* Accessibility: reduce motion if user prefers reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .loader-logo,
          .loader-title {
            animation: none;
            transform: none;
            opacity: 1;
          }
        }

        /* Small-screen tweaks */
        @media (max-width: 480px) {
          .loader-box { padding: 1rem; }
          .loader-logo { width: 72px; height: 72px; }
          .loader-title { font-size: 18px; }
        }
      `}
      </style>
    </div>
  );
};

export default Loading;
