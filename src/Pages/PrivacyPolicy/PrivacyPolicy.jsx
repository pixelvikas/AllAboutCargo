import React, { useEffect, useState } from "react";
import bgImage from "../../assets/pageherobg.png";
import Hero from "../../Components/Hero";

const SECTIONS = [
  { id: "overview", title: "Overview" },
  { id: "introduction", title: "1. Introduction" },
  { id: "collect", title: "2. Information We Collect" },
  { id: "use", title: "3. How We Use Your Information" },
  { id: "share", title: "4. Sharing of Information" },
  { id: "security", title: "5. Data Security" },
  { id: "retention", title: "6. Data Retention" },
  { id: "rights", title: "7. Your Rights" },
  { id: "changes", title: "8. Updates to This Policy" },
  { id: "contact", title: "9. Contact Us" },
];

const PrivacyPolicy = () => {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    // simple scroll spy
    const onScroll = () => {
      const offsets = SECTIONS.map((s) => {
        const el = document.getElementById(s.id);
        return {
          id: s.id,
          top: el ? el.getBoundingClientRect().top : Infinity,
        };
      });
      const nearest = offsets.sort(
        (a, b) => Math.abs(a.top) - Math.abs(b.top)
      )[0];
      if (nearest && nearest.id !== active) setActive(nearest.id);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [active]);

  const handleTocClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Hero
        title="Privacy Policy"
        crumbCurrent="PRIVACY POLICY"
        bgImage={bgImage}
      />

      <main
        className="ct privacy-page"
        id="privacy-policy"
        aria-labelledby="privacy-title"
      >
        <div className="ct__wrap privacy-wrap">
          <div className="privacy-header">
            <div>
              <h1 id="privacy-title" className="ct__title privacy-title">
                Privacy Policy
                <span className="ct__highlight"> — AllAboutCargo</span>
              </h1>
              <p className="privacy-lead">
                This Privacy Policy explains how AllAboutCargo collects, uses,
                stores, and protects your personal information when you register
                for, purchase, and use our online logistics training courses and
                related services.
              </p>
            </div>

            <div className="privacy-cta">
              <a className="btn" href="/contact">
                Contact
              </a>
            </div>
          </div>

          <div className="ct__grid privacy-grid">
            {/* Left column */}
            <div className="privacy-main">
              <section
                id="overview"
                className="ct__card ct__card--spaced privacy-section"
              >
                <h3 className="ct__cardTitle">Overview</h3>
                <p className="ct__muted">
                  This Privacy Policy applies to the website and online course
                  platform operated under{" "}
                  <strong>
                    AllAboutCargo (a subsidiary of Namami Family Pvt. Ltd.)
                  </strong>
                  . By accessing or using our website or application, you agree
                  to the practices described in this Policy.
                </p>
                <ul className="ct__list" style={{ marginTop: "10px" }}>
                  <li>
                    <strong>Effective Date:</strong> 19/11/2025
                  </li>
                  <li>
                    <strong>Company:</strong> AllAboutCargo (a subsidiary of
                    Namami Family Pvt. Ltd.)
                  </li>
                  <li>
                    <strong>Website/App:</strong>{" "}
                    <a
                      href="https://www.allaboutcargo.in"
                      target="_blank"
                      rel="noreferrer"
                    >
                      www.allaboutcargo.in
                    </a>
                  </li>
                </ul>
              </section>

              <section
                id="introduction"
                className="ct__card ct__card--spaced privacy-section"
              >
                <h3 className="ct__cardTitle">1. Introduction</h3>
                <p className="ct__muted">
                  AllAboutCargo (“we”, “our”, “us”) operates as a logistics
                  education platform offering online training, assessments, and
                  certification programs.
                </p>
                <p className="ct__muted">
                  This Privacy Policy explains how we collect, use, store, and
                  protect your personal information when you register, purchase,
                  and use our online course.
                </p>
                <p className="ct__muted">
                  By accessing or using our platform, you agree to the practices
                  described in this Privacy Policy.
                </p>
              </section>

              <section
                id="collect"
                className="ct__card ct__card--spaced privacy-section"
              >
                <h3 className="ct__cardTitle">2. Information We Collect</h3>

                <h4 className="ct__subTitle">A. Personal Information</h4>
                <p className="ct__muted">
                  We may collect the following personal details when you
                  register on our platform, enroll in a course, or interact with
                  our services:
                </p>
                <ul className="ct__list">
                  <li>Full Name</li>
                  <li>Email Address</li>
                  <li>Phone Number</li>
                  <li>Address</li>
                  <li>Age or Date of Birth</li>
                  <li>Login credentials</li>
                  <li>
                    Payment-related details (processed via secure third-party
                    gateways)
                  </li>
                </ul>

                <h4 className="ct__subTitle">B. Usage Information</h4>
                <p className="ct__muted">
                  When you use our website or course platform, we may collect:
                </p>
                <ul className="ct__list">
                  <li>Course progress</li>
                  <li>Exam attempts and results</li>
                  <li>Interactions with course modules</li>
                  <li>Device information, IP address, browser type</li>
                </ul>

                <h4 className="ct__subTitle">C. Cookies &amp; Tracking</h4>
                <p className="ct__muted">
                  We use cookies and tracking tools to improve user experience,
                  analytics, and website performance. You may disable cookies
                  through your browser settings; however, some features of the
                  website or course platform may not function properly if
                  cookies are disabled.
                </p>
              </section>

              <section
                id="use"
                className="ct__card ct__card--spaced privacy-section"
              >
                <h3 className="ct__cardTitle">
                  3. How We Use Your Information
                </h3>
                <p className="ct__muted">
                  We use your information for the following purposes:
                </p>
                <ul className="ct__list">
                  <li>Course access, progress tracking, and certification</li>
                  <li>User account creation and authentication</li>
                  <li>Payment processing</li>
                  <li>Customer service and support</li>
                  <li>
                    Internal analytics to improve course quality and user
                    experience
                  </li>
                  <li>
                    Sending important notifications about exams, policy updates,
                    and new features
                  </li>
                </ul>
                <p className="ct__muted" style={{ marginTop: "10px" }}>
                  <strong>
                    We do not sell your personal information to any third party.
                  </strong>
                </p>
              </section>

              <section
                id="share"
                className="ct__card ct__card--spaced privacy-section"
              >
                <h3 className="ct__cardTitle">4. Sharing of Information</h3>
                <p className="ct__muted">
                  We may share your data with the following categories of
                  partners, only as necessary to operate and improve our
                  services:
                </p>
                <ul className="ct__list">
                  <li>Payment gateways for secure transactions</li>
                  <li>Learning management system (LMS) partners</li>
                  <li>Service providers (cloud hosting, email services)</li>
                  <li>
                    Government authorities, only if legally required or to
                    comply with applicable law
                  </li>
                </ul>
                <p className="ct__muted" style={{ marginTop: "10px" }}>
                  All partners and service providers operate under strict
                  confidentiality and data protection agreements.
                </p>
              </section>

              <section
                id="security"
                className="ct__card ct__card--spaced privacy-section"
              >
                <h3 className="ct__cardTitle">5. Data Security</h3>
                <p className="ct__muted">
                  We use industry-standard security measures such as encryption,
                  firewalls, access controls, and monitoring tools to protect
                  your information against unauthorized access, alteration,
                  disclosure, or destruction.
                </p>
                <p className="ct__muted">
                  However, while we strive to ensure the highest level of
                  security, no online platform can guarantee 100% security.
                </p>
              </section>

              <section
                id="retention"
                className="ct__card ct__card--spaced privacy-section"
              >
                <h3 className="ct__cardTitle">6. Data Retention</h3>
                <p className="ct__muted">
                  We retain your information in accordance with the following
                  principles:
                </p>
                <ul className="ct__list">
                  <li>As long as your account remains active</li>
                  <li>
                    As required for compliance, auditing, or other legal
                    obligations
                  </li>
                  <li>
                    For internal research and analytics in an aggregated,
                    non-identifiable form
                  </li>
                </ul>
              </section>

              <section
                id="rights"
                className="ct__card ct__card--spaced privacy-section"
              >
                <h3 className="ct__cardTitle">7. Your Rights</h3>
                <p className="ct__muted">
                  Depending on applicable laws, you may have the right to:
                </p>
                <ul className="ct__list">
                  <li>Request access to your personal data</li>
                  <li>Request corrections or updates to your information</li>
                  <li>
                    Request deletion of your data (subject to academic record
                    preservation and legal requirements)
                  </li>
                  <li>Withdraw consent where we rely on your consent</li>
                </ul>
                <p className="ct__muted" style={{ marginTop: "10px" }}>
                  To exercise any of these rights, please contact us at{" "}
                  <a href="mailto:coach@allaboutcargo.in">
                    coach@allaboutcargo.in
                  </a>
                  .
                </p>
              </section>

              <section
                id="changes"
                className="ct__card ct__card--spaced privacy-section"
              >
                <h3 className="ct__cardTitle">8. Updates to This Policy</h3>
                <p className="ct__muted">
                  We may update this Privacy Policy from time to time. Updated
                  versions will be posted on our platform with a revised{" "}
                  <strong>“Effective Date”</strong>.
                </p>
                <p className="ct__muted">
                  We encourage you to review this page periodically to stay
                  informed about how we protect your information.
                </p>
              </section>

              <section
                id="contact"
                className="ct__card ct__card--spaced privacy-section"
              >
                <h3 className="ct__cardTitle">9. Contact Us</h3>
                <p className="ct__muted">
                  If you have any questions, concerns, or requests related to
                  this Privacy Policy or your personal data, you can contact us
                  at:
                </p>
                <p className="ct__muted">
                  <strong>Namami Family Pvt. Ltd. / AllAboutCargo</strong>
                  <br />
                  Email:{" "}
                  <a href="mailto:coach@allaboutcargo.in">
                    coach@allaboutcargo.in
                  </a>
                  <br />
                  Powai plaza, office #304, 3rd floor, central avenue,
                  Hiranandani Business Park, Powai, Mumbai - 400076
                </p>
              </section>
            </div>
          </div>
        </div>
        <style>
          {`
            /* Core layout (re-uses .ct system from your styles) */
.privacy-wrap {
  max-width: 1180px;
  margin: 0 auto;
  padding-bottom: 36px;
}

.privacy-header {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}

.privacy-title { margin-bottom: 8px; }

/* lead paragraph */
.privacy-lead {
  color: #6b7280;
  max-width: 58ch;
  margin-top: 6px;
  font-size: 15px;
}

/* header CTAs */
.privacy-cta { display: flex; gap: 12px; align-items: center; }
.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  border-radius: 10px;
  background: linear-gradient(90deg,#d0173e,#961782);
  color: #fff;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 10px 30px rgba(96,18,70,0.12);
}
.btn-outline {
  padding: 10px 16px;
  border-radius: 10px;
  font-weight: 700;
  background: transparent;
  border: 1px solid rgba(150,23,130,0.08);
  color: #62124a;
  text-decoration: none;
}

/* grid */
.privacy-grid {
  grid-template-columns: 1fr 320px;
  gap: 28px;
  align-items: start;
}

/* main content improvements */
.privacy-main .ct__card {
  transition: transform 220ms ease, box-shadow 220ms ease;
}
.privacy-main .ct__card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 50px rgba(16, 24, 40, 0.08);
}

/* section spacing */
.privacy-section { padding: 18px; border-radius: 14px; }

/* right column */
.privacy-side { display: flex; flex-direction: column; gap: 16px; }

/* sticky sidebar */
.privacy-sticky {
  position: sticky;
  top: 96px;
  padding: 18px;
  border-radius: 12px;
  background: linear-gradient(180deg, rgba(255,255,255,0.98), #fff);
  box-shadow: 0 12px 34px rgba(10,10,15,0.04);
}

/* Table of contents */
.toc-title { font-weight: 800; margin-bottom: 8px; color: #111827; }
.toc { display: flex; flex-direction: column; gap: 8px; }
.toc-link {
  text-align: left;
  background: transparent;
  border: none;
  padding: 8px 10px;
  border-radius: 8px;
  font-weight: 600;
  color: #4b5563;
  cursor: pointer;
}
.toc-link:hover { background: rgba(14, 14, 14, 0.03); color: #111827; }
.toc-link--active {
  color: #7b113f;
  background: linear-gradient(90deg, rgba(150,23,130,0.08), rgba(208,23,62,0.04));
  box-shadow: inset 0 0 0 1px rgba(150,23,130,0.04);
}

/* map card */
.map-card .ct__cardTitle { margin-bottom: 6px; }
.map-container iframe { height: 220px; width: 100%; border: 0; }

/* small helpers */
.ct__spacer { height: 12px; }

/* mobile responsive */
@media (max-width: 980px) {
  .privacy-header { flex-direction: column; align-items: flex-start; gap: 12px; }
  .privacy-grid { grid-template-columns: 1fr; }
  .privacy-sticky { position: relative; top: 0; }
  .privacy-wrap { padding-left: 12px; padding-right: 12px; }
}

/* reduce motion accessibility */
@media (prefers-reduced-motion: reduce) {
  .privacy-main .ct__card,
  .loader-logo,
  .loader-title {
    transition: none !important;
    animation: none !important;
  }
}

/* print-friendly tweaks */
@media print {
  .privacy-header, .privacy-cta, .privacy-sticky, .map-card { display: none; }
  .ct__card { box-shadow: none; border: none; }
  body { color: #111; background: #fff; }
}
`}
        </style>
      </main>
    </>
  );
};

export default PrivacyPolicy;
