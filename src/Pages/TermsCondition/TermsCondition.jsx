import React, { useEffect, useState } from "react";
import bgImage from "../../assets/pageherobg.png";
import "./style.css";
import Hero from "../../Components/Hero";

const TOC = [
  { id: "intro", title: "Introduction" },
  { id: "use", title: "Acceptable Use" },
  { id: "accounts", title: "Accounts & Security" },
  { id: "orders", title: "Orders & Payments" },
  { id: "content", title: "User Content" },
  { id: "liability", title: "Limitation of Liability" },
  { id: "termination", title: "Termination" },
  { id: "governing", title: "Governing Law" },
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

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
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
              <span className="ct__eyebrow">LEGAL</span>
              <h1 id="terms-title" className="ct__title terms-title">
                Terms &amp; Conditions
                <span className="ct__highlight"> — Cartgo</span>
              </h1>
              <p className="terms-lead">
                Please read these Terms &amp; Conditions ("Terms") carefully
                before using the Cartgo website or services. By using our
                services, you agree to be bound by these Terms.
              </p>
            </div>

            <div className="terms-actions">
              <a className="btn" href="/contact">
                Contact
              </a>
            </div>
          </header>

          <div className="ct__grid terms-grid">
            {/* main */}
            <div className="terms-main">
              <section
                id="intro"
                className="ct__card ct__card--spaced term-section"
              >
                <h3 className="ct__cardTitle">Introduction</h3>
                <p className="ct__muted">
                  These Terms govern your access to and use of Cartgo’s website,
                  products and services. If you do not agree with these Terms,
                  please do not use our services.
                </p>
              </section>

              <section
                id="use"
                className="ct__card ct__card--spaced term-section"
              >
                <h3 className="ct__cardTitle">Acceptable Use</h3>
                <p className="ct__muted">
                  You agree not to misuse the Services. Prohibited activities
                  include, but are not limited to:
                </p>
                <ul className="terms-list">
                  <li>
                    Using the Service for unlawful activities or fraudulent
                    transactions.
                  </li>
                  <li>Attempting to access other users' accounts or data.</li>
                  <li>
                    Uploading malicious code, spam, or content that infringes
                    others' rights.
                  </li>
                </ul>
              </section>

              <section
                id="accounts"
                className="ct__card ct__card--spaced term-section"
              >
                <h3 className="ct__cardTitle">Accounts &amp; Security</h3>
                <p className="ct__muted">
                  You are responsible for maintaining the confidentiality of
                  your account credentials. Notify us immediately of any
                  unauthorized use.
                </p>
              </section>

              <section
                id="orders"
                className="ct__card ct__card--spaced term-section"
              >
                <h3 className="ct__cardTitle">Orders &amp; Payments</h3>
                <p className="ct__muted">
                  Orders are subject to acceptance and availability. Payment
                  terms and refunds are subject to our Refund &amp; Cancellation
                  Policy.
                </p>
              </section>

              <section
                id="content"
                className="ct__card ct__card--spaced term-section"
              >
                <h3 className="ct__cardTitle">User Content</h3>
                <p className="ct__muted">
                  By submitting content to Cartgo you grant us a license to use
                  it to provide and promote the service. You represent that you
                  have the right to submit that content and it does not violate
                  any law or third-party rights.
                </p>
              </section>

              <section
                id="liability"
                className="ct__card ct__card--spaced term-section"
              >
                <h3 className="ct__cardTitle">Limitation of Liability</h3>
                <p className="ct__muted">
                  To the maximum extent permitted by law, Cartgo and its
                  affiliates will not be liable for any indirect, incidental,
                  special or consequential damages arising out of your use of
                  the services.
                </p>
              </section>

              <section
                id="termination"
                className="ct__card ct__card--spaced term-section"
              >
                <h3 className="ct__cardTitle">Termination</h3>
                <p className="ct__muted">
                  We may suspend or terminate your access for breach of these
                  Terms or for legal reasons. Termination does not relieve you
                  of obligations incurred prior to termination.
                </p>
              </section>

              <section id="governing" className="ct__card term-section">
                <h3 className="ct__cardTitle">Governing Law</h3>
                <p className="ct__muted">
                  These Terms are governed by the laws of the jurisdiction where
                  Cartgo operates. Disputes will be resolved in the appropriate
                  courts of that jurisdiction.
                </p>
              </section>
            </div>
          </div>
        </div>

        <style>
          {`
            /* plain CSS, modern and rich UI for Terms & Conditions page */

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

/* grid */
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
.ct__chipIcon { display: inline-grid; place-items: center; width: 36px; height: 36px; font-size: 14px; }
.ct__chipIcon--phone, .ct__chipIcon--mail { background: linear-gradient(to bottom, #d0173e, #961782); color: #fff; border-radius: 999px; }

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
  .terms-main .ct__card, .loader-logo, .loader-title { transition: none !important; animation: none !important; }
}

/* print friendly */
@media print {
  .terms-header, .terms-actions, .terms-stick { display: none; }
  .ct__card { box-shadow: none; border: none; }
  body { background: #fff; color: #111; }
}
`}
        </style>
      </main>
    </>
  );
};

export default TermsCondition;
