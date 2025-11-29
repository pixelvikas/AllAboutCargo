import React, { useEffect, useState } from "react";
import bgImage from "../../assets/pageherobg.png";
import "./style.css";
import Hero from "../../Components/Hero";

const SECTIONS = [
  { id: "overview", title: "Overview" },
  { id: "course-fee", title: "1. Course Fee" },
  { id: "no-refund", title: "2. No Refund Policy" },
  { id: "exceptional", title: "3. Exceptional Refund Cases" },
  { id: "transfer", title: "4. Course / Batch Transfer" },
  { id: "contact", title: "5. Contact for Refund Queries" },
];

const RefundCancellation = () => {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const onScroll = () => {
      const positions = SECTIONS.map((s) => {
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

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Hero
        title="Refund Policy"
        crumbCurrent="REFUND POLICY"
        bgImage={bgImage}
      />

      <main
        className="ct refund-page"
        id="refund-policy"
        aria-labelledby="refund-title"
      >
        <div className="ct__wrap refund-wrap">
          <header className="refund-header">
            <div>
              <h1 id="refund-title" className="ct__title refund-title">
                Refund Policy
                <span className="ct__highlight"> — AllAboutCargo</span>
              </h1>
              <p className="refund-lead">
                This Refund Policy explains the fee structure, strict no-refund
                terms, exceptional refund scenarios, and how to contact us for
                refund-related queries for the AllAboutCargo 8-week online
                logistics program.
              </p>
              <p className="refund-lead" style={{ fontSize: "13px" }}>
                <strong>Effective Date:</strong> 19/11/2025
              </p>
            </div>

            <div className="refund-actions">
              <a className="btn" href="/contact">
                Contact
              </a>
            </div>
          </header>

          <div className="ct__grid refund-grid">
            {/* main content */}
            <div className="refund-main">
              <section
                id="overview"
                className="ct__card ct__card--spaced refund-section"
              >
                <h3 className="ct__cardTitle">Overview</h3>
                <p className="ct__muted">
                  The AllAboutCargo 8-week online logistics course is a
                  digital-first program that provides immediate access to course
                  content, downloadable resources, and exam eligibility upon
                  successful payment. Due to the nature of digital education
                  products, AllAboutCargo follows a{" "}
                  <strong>strict No Refund Policy</strong>, with only a few
                  clearly defined exceptional cases.
                </p>
              </section>

              <section
                id="course-fee"
                className="ct__card ct__card--spaced refund-section"
              >
                <h3 className="ct__cardTitle">1. Course Fee</h3>
                <p className="ct__muted">
                  The course fee for the{" "}
                  <strong>AllAboutCargo 8-week online program</strong> is{" "}
                  <strong>₹25,000</strong> (inclusive of applicable taxes),
                  unless otherwise explicitly stated in an official offer or
                  communication.
                </p>
              </section>

              <section
                id="no-refund"
                className="ct__card ct__card--spaced refund-section"
              >
                <h3 className="ct__cardTitle">2. No Refund Policy</h3>
                <p className="ct__muted">
                  Because the course includes immediate digital access,
                  downloadable materials, intellectual content, and exam
                  eligibility, AllAboutCargo follows a{" "}
                  <strong>strict NO REFUND policy after purchase</strong>, under
                  any circumstances, including (but not limited to):
                </p>
                <ul className="refund-list">
                  <li>Change of mind</li>
                  <li>Lack of time or schedule constraints</li>
                  <li>Personal or health-related issues</li>
                  <li>Technical difficulties on the user&apos;s end</li>
                  <li>Failure to complete or pass the course and/or exam</li>
                </ul>
                <p className="ct__muted" style={{ marginTop: "10px" }}>
                  By completing the payment, you acknowledge and accept that
                  fees are non-refundable in all such scenarios.
                </p>
              </section>

              <section
                id="exceptional"
                className="ct__card ct__card--spaced refund-section"
              >
                <h3 className="ct__cardTitle">
                  3. Exceptional Refund Cases (If Any)
                </h3>
                <p className="ct__muted">
                  Refunds may be considered <strong>only</strong> in the
                  following exceptional scenarios:
                </p>
                <ul className="refund-list">
                  <li>Duplicate payment due to a technical error</li>
                  <li>
                    Payment was made, but access to the course was{" "}
                    <strong>never granted</strong>
                  </li>
                  <li>
                    Verified system failure on our side that prevents course
                    access or usage
                  </li>
                </ul>
                <p className="ct__muted" style={{ marginTop: "10px" }}>
                  All exceptional refunds (if approved) will be processed within{" "}
                  <strong>7–14 working days</strong> via the{" "}
                  <strong>same payment method</strong> used for the original
                  transaction.
                </p>
              </section>

              <section
                id="transfer"
                className="ct__card ct__card--spaced refund-section"
              >
                <h3 className="ct__cardTitle">
                  4. Course Transfer / Batch Transfer
                </h3>
                <p className="ct__muted">
                  Course or batch transfers are <strong>not guaranteed</strong>{" "}
                  and may be allowed only under specific circumstances:
                </p>
                <ul className="refund-list">
                  <li>
                    Batch transfer may be allowed <strong>only once</strong>.
                  </li>
                  <li>
                    Any transfer is subject to administrative approval and seat
                    availability.
                  </li>
                  <li>
                    A nominal <strong>re-registration fee</strong> may apply, as
                    decided by AllAboutCargo.
                  </li>
                </ul>
                <p className="ct__muted" style={{ marginTop: "10px" }}>
                  Batch transfer, if granted, does <strong>not</strong> imply
                  any refund or partial refund of the original course fee.
                </p>
              </section>

              <section id="contact" className="ct__card refund-section">
                <h3 className="ct__cardTitle">5. Contact for Refund Queries</h3>
                <p className="ct__muted">
                  For any questions or queries related to refunds, exceptional
                  cases, or batch transfers, you can reach us at:
                </p>
                <div className="contact-row">
                  <a className="ct__chip" href="mailto:coach@allaboutcargo.in">
                    <span className="ct__chipIcon ct__chipIcon--mail">✉️</span>
                    coach@allaboutcargo.in
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <style>
        {`
    /* Refund Policy — plain CSS, modern & rich UI */

/* wrapper */
.refund-wrap {
  max-width: 1180px;
  margin: 0 auto;
  padding-bottom: 36px;
}

/* header */
.refund-header {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}
.refund-title { margin-bottom: 8px; }
.refund-lead {
  color: #6b7280;
  font-size: 15px;
  max-width: 60ch;
}

/* actions */
.refund-actions { display: flex; gap: 12px; align-items: center; }
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

/* layout grid */
.refund-grid {
  grid-template-columns: 1fr 320px;
  gap: 28px;
  align-items: start;
}

/* main card hover */
.refund-main .ct__card {
  transition: transform 220ms ease, box-shadow 220ms ease;
}
.refund-main .ct__card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 50px rgba(16, 24, 40, 0.08);
}

/* section styling */
.refund-section { padding: 18px; border-radius: 14px; }
.refund-list, .refund-steps {
  margin-top: 8px;
  padding-left: 18px;
  line-height: 1.7;
  color: #374151;
}
.refund-steps { list-style: decimal; }

/* contact chips */
.contact-row {
  display: flex;
  gap: 12px;
  margin-top: 12px;
  flex-wrap: wrap;
}
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
.ct__chipIcon { display: inline-grid; place-items: center; width: 36px; height: 36px; font-size: 14px; }
.ct__chipIcon--mail, .ct__chipIcon--phone { background: linear-gradient(to bottom, #d0173e, #961782); color: #fff; border-radius: 999px; }

/* sidebar */
.refund-side { display: flex; flex-direction: column; gap: 16px; }
.refund-stick {
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

/* helpers */
.ct__spacer { height: 12px; }
.ct__card--spaced { margin-bottom: 16px; }

/* responsive */
@media (max-width: 980px) {
  .refund-header { flex-direction: column; align-items: flex-start; gap: 12px; }
  .refund-grid { grid-template-columns: 1fr; }
  .refund-stick { position: relative; top: 0; }
  .refund-wrap { padding-left: 12px; padding-right: 12px; }
}

/* reduce motion */
@media (prefers-reduced-motion: reduce) {
  .refund-main .ct__card, .loader-logo, .loader-title { transition: none !important; animation: none !important; }
}

/* print */
@media print {
  .refund-header, .refund-actions, .refund-stick { display: none; }
  .ct__card { box-shadow: none; border: none; }
  body { background: #fff; color: #111; }
}

`}
      </style>
    </>
  );
};

export default RefundCancellation;
