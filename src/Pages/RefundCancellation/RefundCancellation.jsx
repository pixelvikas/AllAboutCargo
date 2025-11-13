import React, { useEffect, useState } from "react";
import bgImage from "../../assets/pageherobg.png";
import "./style.css";
import Hero from "../../Components/Hero";

const SECTIONS = [
  { id: "overview", title: "Overview" },
  { id: "eligibility", title: "Eligibility" },
  { id: "process", title: "Refund Process" },
  { id: "timeline", title: "Timeline" },
  { id: "nonrefundable", title: "Non-refundable Items" },
  { id: "cancellation", title: "Cancellation Policy" },
  { id: "contact", title: "Contact" },
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
        title="Refund & Cancellation Policy"
        crumbCurrent="REFUND & CANCELLATION POLICY"
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
                Refund &amp; Cancellation Policy
                <span className="ct__highlight"> — All About Cargo</span>
              </h1>
              <p className="refund-lead">
                We want you to be satisfied. This page explains our refund
                eligibility, timelines, and the process to request a refund or
                cancel an order.
              </p>
            </div>

            <div className="refund-actions">
              <a className="btn-outline" href="/terms-condition">
                Terms
              </a>
              <a className="btn" href="mailto:support@allaboutcargo.in">
                Contact Support
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
                  allaboutcargo strives to provide high-quality courses and
                  services. If you are not satisfied with a purchase, this
                  policy explains when refunds are possible and how
                  cancellations are handled.
                </p>
              </section>

              <section
                id="eligibility"
                className="ct__card ct__card--spaced refund-section"
              >
                <h3 className="ct__cardTitle">Eligibility</h3>
                <p className="ct__muted">
                  Refund eligibility depends on the product type and the timing
                  of the request. Typical cases:
                </p>
                <ul className="refund-list">
                  <li>
                    Full refund available if cancellation request is received
                    within 7 days of purchase and no course materials were
                    accessed.
                  </li>
                  <li>
                    Partial refunds may apply if a significant portion of
                    content has been consumed.
                  </li>
                  <li>
                    Refunds are not provided for subscription fees that have
                    completed the billing cycle; cancellations prevent future
                    billing.
                  </li>
                </ul>
              </section>

              <section
                id="process"
                className="ct__card ct__card--spaced refund-section"
              >
                <h3 className="ct__cardTitle">Refund Process</h3>
                <p className="ct__muted">To request a refund:</p>
                <ol className="refund-steps">
                  <li>
                    Contact support at{" "}
                    <a href="mailto:support@allaboutcargo.in">
                      support@allaboutcargo.in
                    </a>{" "}
                    with your order ID and reason.
                  </li>
                  <li>
                    Our team will review your request and may ask for additional
                    information.
                  </li>
                  <li>
                    If approved, the refund will be issued to the original
                    payment method.
                  </li>
                </ol>
              </section>

              <section
                id="timeline"
                className="ct__card ct__card--spaced refund-section"
              >
                <h3 className="ct__cardTitle">Timeline</h3>
                <p className="ct__muted">
                  Once a refund is approved, it typically appears in your
                  account within:
                </p>
                <ul className="refund-list">
                  <li>3–5 business days for most card payments</li>
                  <li>
                    Up to 10 business days for bank transfers, depending on the
                    bank
                  </li>
                </ul>
              </section>

              <section
                id="nonrefundable"
                className="ct__card ct__card--spaced refund-section"
              >
                <h3 className="ct__cardTitle">Non-Refundable Items</h3>
                <p className="ct__muted">
                  The following items are generally non-refundable:
                </p>
                <ul className="refund-list">
                  <li>Downloaded digital assets after purchase</li>
                  <li>
                    Courses or subscriptions where access has been fully granted
                    and used
                  </li>
                  <li>Third-party fees, transaction charges, and taxes</li>
                </ul>
              </section>

              <section
                id="cancellation"
                className="ct__card ct__card--spaced refund-section"
              >
                <h3 className="ct__cardTitle">Cancellation Policy</h3>
                <p className="ct__muted">
                  You can cancel orders before they are processed. For
                  subscriptions, cancellation prevents the next renewal but does
                  not typically refund the current billing period.
                </p>
                <p className="ct__muted">
                  To cancel, visit your account dashboard or contact support
                  with your order or subscription ID.
                </p>
              </section>

              <section id="contact" className="ct__card refund-section">
                <h3 className="ct__cardTitle">Contact</h3>
                <p className="ct__muted">
                  For refund or cancellation requests, contact our support team:
                </p>
                <div className="contact-row">
                  <a
                    className="ct__chip"
                    href="mailto:support@allaboutcargo.in"
                  >
                    <span className="ct__chipIcon ct__chipIcon--mail">✉️</span>{" "}
                    support@allaboutcargo.in
                  </a>
                  <a className="ct__chip" href="tel:+911234567890">
                    <span className="ct__chipIcon ct__chipIcon--phone">📞</span>{" "}
                    +91 12345 67890
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <style>
        {`
    /* Refund & Cancellation Policy — plain CSS, modern & rich UI */

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
