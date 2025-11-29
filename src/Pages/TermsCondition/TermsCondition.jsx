import React, { useEffect, useState } from "react";
import bgImage from "../../assets/pageherobg.png";
import Hero from "../../Components/Hero";

const TOC = [
  { id: "intro", title: "1. Introduction" },
  { id: "eligibility", title: "2. Eligibility" },
  { id: "course-access", title: "3. Course Access" },
  { id: "payment", title: "4. Payment Terms" },
  { id: "conduct", title: "5. Student Conduct" },
  { id: "certification", title: "6. Certification" },
  { id: "ip", title: "7. Intellectual Property" },
  { id: "liability", title: "8. Limitation of Liability" },
  { id: "termination", title: "9. Termination" },
  { id: "governing", title: "10. Governing Law" },
  { id: "contact", title: "11. Contact Information" },
];

const TermsCondition = () => {
  const [active, setActive] = useState("intro");

  useEffect(() => {
    const onScroll = () => {
      const positions = TOC.map((s) => {
        const el = document.getElementById(s.id);
        return {
          id: s.id,
          top: el ? Math.abs(el.getBoundingClientRect().top) : Infinity,
        };
      });
      const nearest = positions.sort((a, b) => a.top - b.top)[0];
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
        title="Terms & Conditions"
        crumbCurrent="TERMS & CONDITIONS"
        bgImage={bgImage}
      />

      <main className="ct terms-page" id="terms" aria-labelledby="terms-title">
        <div className="ct__wrap terms-wrap">
          <header className="terms-header">
            <div>
              <h1 id="terms-title" className="ct__title terms-title">
                Terms &amp; Conditions
                <span className="ct__highlight"> — AllAboutCargo</span>
              </h1>
              <p className="terms-lead">
                Please read these Terms &amp; Conditions (&quot;Terms&quot;)
                carefully before enrolling in or using the AllAboutCargo online
                logistics course. By enrolling, accessing, or using our
                platform, you agree to be legally bound by these Terms.
              </p>
              <p className="terms-lead" style={{ fontSize: "13px" }}>
                <strong>Effective Date:</strong> 19/11/2025
              </p>
            </div>

            <div className="terms-actions">
              <a className="btn" href="/contact">
                Contact
              </a>
            </div>
          </header>

          <div className="ct__grid terms-grid">
            {/* main content */}
            <div className="terms-main">
              <section
                id="intro"
                className="ct__card ct__card--spaced term-section"
              >
                <h3 className="ct__cardTitle">1. Introduction</h3>
                <p className="ct__muted">
                  These Terms &amp; Conditions (&quot;Terms&quot;) govern your
                  access and use of the AllAboutCargo online logistics course.
                  By enrolling, using, or accessing our platform, you agree to
                  be legally bound by these Terms. If you do not agree with any
                  part of these Terms, you should not enroll in or use the
                  course.
                </p>
                <p className="ct__muted">
                  These Terms apply in addition to any other policies referenced
                  on our website, including our Privacy Policy and Refund
                  Policy.
                </p>
              </section>

              <section
                id="eligibility"
                className="ct__card ct__card--spaced term-section"
              >
                <h3 className="ct__cardTitle">2. Eligibility</h3>
                <p className="ct__muted">
                  To enroll in and use the AllAboutCargo online logistics
                  course, you must:
                </p>
                <ul className="terms-list">
                  <li>Be at least 16 years old</li>
                  <li>
                    Provide accurate and truthful information during
                    registration
                  </li>
                  <li>
                    Use the platform only for lawful, educational purposes and
                    in compliance with these Terms
                  </li>
                </ul>
              </section>

              <section
                id="course-access"
                className="ct__card ct__card--spaced term-section"
              >
                <h3 className="ct__cardTitle">3. Course Access</h3>
                <ul className="terms-list">
                  <li>
                    Access to the course is granted only to the{" "}
                    <strong>registered user</strong>. Accounts and access
                    credentials are strictly personal and non-transferable.
                  </li>
                  <li>
                    Sharing login details, downloading course content illegally,
                    screen-recording for distribution, or redistributing any
                    course materials is strictly prohibited.
                  </li>
                  <li>
                    The standard course duration is <strong>8 weeks</strong>,
                    which includes modules, assessments, and exams.
                  </li>
                  <li>
                    We may update, modify, or enhance course content, modules,
                    and assessments at any time to maintain quality and
                    relevance.
                  </li>
                </ul>
              </section>

              <section
                id="payment"
                className="ct__card ct__card--spaced term-section"
              >
                <h3 className="ct__cardTitle">4. Payment Terms</h3>
                <ul className="terms-list">
                  <li>
                    The course fee is <strong>₹25,000</strong>.
                  </li>
                  <li>
                    Payment must be fully completed and successfully processed
                    prior to gaining access to the course content, assessments,
                    and exams.
                  </li>
                  <li>
                    <strong>No refunds</strong> will be provided, except in
                    special cases as outlined in our official Refund Policy (if
                    applicable). Any approved refund will be processed as per
                    the timelines and conditions mentioned in that policy.
                  </li>
                </ul>
              </section>

              <section
                id="conduct"
                className="ct__card ct__card--spaced term-section"
              >
                <h3 className="ct__cardTitle">5. Student Conduct</h3>
                <p className="ct__muted">
                  By using the platform, you agree <strong>NOT</strong> to:
                </p>
                <ul className="terms-list">
                  <li>Share, copy, sell, or distribute course materials</li>
                  <li>
                    Reverse-engineer or attempt to extract platform content
                  </li>
                  <li>
                    Use scripts, bots, or automated tools to access course
                    content, assessments, or exams
                  </li>
                  <li>
                    Engage in cheating, impersonation, or any other unfair means
                    during exams or assessments
                  </li>
                  <li>
                    Abuse customer support, use offensive language, or violate
                    the integrity and security of the platform
                  </li>
                </ul>
                <p className="ct__muted" style={{ marginTop: "10px" }}>
                  <strong>
                    Any violation of these rules may result in immediate
                    termination of access to the course and platform without any
                    refund.
                  </strong>
                </p>
              </section>

              <section
                id="certification"
                className="ct__card ct__card--spaced term-section"
              >
                <h3 className="ct__cardTitle">6. Certification</h3>
                <p className="ct__muted">
                  Certification from AllAboutCargo is granted only upon
                  fulfilling all of the following:
                </p>
                <ul className="terms-list">
                  <li>Successful completion of all course modules</li>
                  <li>Passing all required exams and assessments</li>
                  <li>
                    Meeting academic and performance requirements as defined by
                    AllAboutCargo
                  </li>
                </ul>
                <p className="ct__muted" style={{ marginTop: "10px" }}>
                  AllAboutCargo reserves the right to{" "}
                  <strong>withhold or revoke certificates</strong> in cases of
                  misconduct, use of unfair means, fraud, or violation of these
                  Terms.
                </p>
              </section>

              <section
                id="ip"
                className="ct__card ct__card--spaced term-section"
              >
                <h3 className="ct__cardTitle">7. Intellectual Property</h3>
                <p className="ct__muted">
                  All course content, including but not limited to videos,
                  slides, notes, quizzes, assessments, branding, logos, and
                  platform design, is the exclusive property of{" "}
                  <strong>Namami Family Pvt. Ltd.</strong> and/or its licensors.
                </p>
                <p className="ct__muted">
                  By enrolling, you are granted a{" "}
                  <strong>
                    limited, non-transferable, non-exclusive, non-commercial
                    license
                  </strong>{" "}
                  to access and use the course content strictly for your
                  personal learning.
                </p>
                <p className="ct__muted">
                  You may not reproduce, distribute, modify, publicly display,
                  or create derivative works from any course content without
                  prior written consent from Namami Family Pvt. Ltd.
                </p>
              </section>

              <section
                id="liability"
                className="ct__card ct__card--spaced term-section"
              >
                <h3 className="ct__cardTitle">8. Limitation of Liability</h3>
                <p className="ct__muted">
                  To the fullest extent permitted by law, AllAboutCargo will not
                  be liable for:
                </p>
                <ul className="terms-list">
                  <li>Any personal, financial, or data loss</li>
                  <li>Job or career outcomes related to course completion</li>
                  <li>Business or commercial impacts</li>
                  <li>
                    Technical issues beyond our control (such as internet
                    outages, device failures, etc.)
                  </li>
                  <li>Any indirect, incidental, or consequential damages</li>
                </ul>
                <p className="ct__muted" style={{ marginTop: "10px" }}>
                  In any case, the maximum aggregate liability of AllAboutCargo
                  arising out of or in connection with the course shall be
                  limited to the total amount actually paid by you for the
                  course.
                </p>
              </section>

              <section
                id="termination"
                className="ct__card ct__card--spaced term-section"
              >
                <h3 className="ct__cardTitle">9. Termination</h3>
                <p className="ct__muted">
                  We may suspend or terminate your account and access to the
                  platform at our discretion if we determine that you have:
                </p>
                <ul className="terms-list">
                  <li>Violated these Terms or other platform policies</li>
                  <li>Engaged in misconduct or abusive behavior</li>
                  <li>Committed fraud or attempted to misuse the platform</li>
                  <li>Abused platform resources or security</li>
                </ul>
                <p className="ct__muted" style={{ marginTop: "10px" }}>
                  <strong>
                    No refunds will be provided in the event of termination due
                    to your violation of these Terms.
                  </strong>
                </p>
              </section>

              <section
                id="governing"
                className="ct__card ct__card--spaced term-section"
              >
                <h3 className="ct__cardTitle">10. Governing Law</h3>
                <p className="ct__muted">
                  These Terms are governed by and construed in accordance with
                  the laws of <strong>India</strong>. Any disputes arising out
                  of or relating to these Terms or your use of the course shall
                  be subject to the exclusive jurisdiction of the courts located
                  in <strong>Mumbai, Maharashtra</strong>.
                </p>
              </section>

              <section id="contact" className="ct__card term-section">
                <h3 className="ct__cardTitle">11. Contact Information</h3>
                <p className="ct__muted">
                  For any questions or concerns regarding these Terms &amp;
                  Conditions, you may contact:
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
                  hiranandani business park, powai, mumbai -400076
                </p>
              </section>
            </div>
          </div>
        </div>

        <style>
          {`
/* container tweaks */
.terms-wrap {
  max-width: 1180px;
  margin: 0 auto;
  padding-bottom: 40px;
}

/* header */
.terms-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 22px;
}
.terms-title { margin-bottom: 8px; }
.terms-lead {
  color: #6b7280;
  font-size: 15px;
  max-width: 60ch;
}

/* action buttons */
.terms-actions { display: flex; gap: 12px; align-items: center; }
.btn {
  display: inline-flex;
  gap: 10px;
  padding: 10px 16px;
  border-radius: 10px;
  color: #fff;
  background: linear-gradient(90deg,#d0173e,#961782);
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 12px 30px rgba(120,20,80,0.12);
}
.btn-outline {
  padding: 10px 16px;
  border-radius: 10px;
  background: transparent;
  border: 1px solid rgba(150,23,130,0.08);
  color: #62124a;
  font-weight: 700;
  text-decoration: none;
}

/* grid layout */
.terms-grid {
  grid-template-columns: 1fr 320px;
  gap: 28px;
  align-items: start;
}

/* main content */
.terms-main .ct__card {
  transition: transform 220ms ease, box-shadow 220ms ease;
}
.terms-main .ct__card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 50px rgba(16, 24, 40, 0.08);
}
.term-section { padding: 18px; border-radius: 14px; }

/* lists inside terms */
.terms-list {
  margin-top: 8px;
  padding-left: 18px;
  line-height: 1.7;
  color: #374151;
}

/* sidebar */
.terms-side { display: flex; flex-direction: column; gap: 16px; }
.terms-stick {
  position: sticky;
  top: 96px;
  padding: 18px;
  border-radius: 12px;
  background: linear-gradient(180deg, rgba(255,255,255,0.98), #fff);
  box-shadow: 0 12px 34px rgba(10,10,15,0.04);
}

/* TOC */
.toc-heading { font-weight: 800; margin-bottom: 8px; color: #111827; }
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
  transition: background 160ms ease, color 160ms ease;
}
.toc-link:hover { background: rgba(14,14,14,0.03); color: #111827; }
.toc-link--active {
  color: #7b113f;
  background: linear-gradient(90deg, rgba(150,23,130,0.08), rgba(208,23,62,0.04));
  box-shadow: inset 0 0 0 1px rgba(150,23,130,0.04);
}

/* chip tweaks */
.ct__chip {
  display: inline-flex;
  gap: 8px;
  align-items: center;
  padding: 8px 12px;
  border-radius: 999px;
  background: #fff;
  box-shadow: 0 6px 18px rgba(16,24,40,0.04);
  text-decoration: none;
  color: #111827;
  font-weight: 700;
}
.ct__chipIcon {
  display: inline-grid;
  place-items: center;
  width: 36px;
  height: 36px;
  font-size: 14px;
}
.ct__chipIcon--phone,
.ct__chipIcon--mail {
  background: linear-gradient(to bottom, #d0173e, #961782);
  color: #fff;
  border-radius: 999px;
}

/* small helpers */
.ct__spacer { height: 12px; }
.ct__card--spaced { margin-bottom: 16px; }

/* responsive */
@media (max-width: 980px) {
  .terms-header { flex-direction: column; align-items: flex-start; gap: 12px; }
  .terms-grid { grid-template-columns: 1fr; }
  .terms-stick { position: relative; top: 0; }
  .terms-wrap { padding-left: 12px; padding-right: 12px; }
}

/* reduce-motion */
@media (prefers-reduced-motion: reduce) {
  .terms-main .ct__card,
  .loader-logo,
  .loader-title {
    transition: none !important;
    animation: none !important;
  }
}

/* print friendly */
@media print {
  .terms-header,
  .terms-actions,
  .terms-stick {
    display: none;
  }
  .ct__card {
    box-shadow: none;
    border: none;
  }
  body {
    background: #fff;
    color: #111;
  }
}
`}
        </style>
      </main>
    </>
  );
};

export default TermsCondition;
