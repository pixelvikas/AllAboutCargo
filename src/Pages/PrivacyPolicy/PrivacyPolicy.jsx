import React, { useEffect, useState } from "react";
import bgImage from "../../assets/pageherobg.png";
import Hero from "../../Components/Hero";

const SECTIONS = [
  { id: "overview", title: "Overview" },
  { id: "collect", title: "Information we collect" },
  { id: "use", title: "How we use your data" },
  { id: "share", title: "Sharing & disclosure" },
  { id: "cookies", title: "Cookies & tracking" },
  { id: "rights", title: "Your rights" },
  { id: "changes", title: "Changes to this policy" },
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
                Our commitment to your privacy
                <span className="ct__highlight"> — All About Cargo</span>
              </h1>
              <p className="privacy-lead">
                We value your trust. This policy explains what we collect, why,
                and how you can manage your information.
              </p>
            </div>

            <div className="privacy-cta">
              <a className="btn-outline" href="/contact">
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
                  We respect your privacy. This Privacy Policy explains what
                  information we collect, how we use it, with whom we share it,
                  and your rights regarding your personal information when you
                  use All About Cargo.
                </p>
              </section>

              <section
                id="collect"
                className="ct__card ct__card--spaced privacy-section"
              >
                <h3 className="ct__cardTitle">Information we collect</h3>
                <p className="ct__muted">
                  We may collect account details (name, email, phone),
                  transactional information (orders, invoices), device & usage
                  data (IP, browser, pages visited), and cookie/analytics data
                  to improve the experience.
                </p>

                <h4 className="ct__subTitle">How we collect it</h4>
                <ul className="ct__list">
                  <li>When you create or update an account</li>
                  <li>When you place orders or contact support</li>
                  <li>Automatically via cookies and analytics tools</li>
                </ul>
              </section>

              <section
                id="use"
                className="ct__card ct__card--spaced privacy-section"
              >
                <h3 className="ct__cardTitle">How we use your data</h3>
                <p className="ct__muted">
                  We use your data to provide and personalize our services,
                  process transactions, communicate (order updates, support),
                  detect fraud, and to improve the Site and product offerings.
                </p>

                <h4 className="ct__subTitle">Legal basis</h4>
                <p className="ct__muted">
                  Where required, we rely on consent, performance of contract,
                  legitimate interests, and compliance with legal obligations.
                </p>
              </section>

              <section
                id="share"
                className="ct__card ct__card--spaced privacy-section"
              >
                <h3 className="ct__cardTitle">Sharing & disclosure</h3>
                <p className="ct__muted">
                  We share information only with trusted partners: payment
                  processors, delivery providers, analytics vendors, and legal
                  authorities when required.
                </p>
              </section>

              <section
                id="cookies"
                className="ct__card ct__card--spaced privacy-section"
              >
                <h3 className="ct__cardTitle">Cookies & tracking</h3>
                <p className="ct__muted">
                  We use cookies and similar technologies for session
                  functionality, preferences, performance analytics, and
                  marketing. You can control cookies through your browser
                  settings; however, some features may not work without them.
                </p>
              </section>

              <section
                id="rights"
                className="ct__card ct__card--spaced privacy-section"
              >
                <h3 className="ct__cardTitle">Your rights</h3>
                <p className="ct__muted">
                  Depending on your jurisdiction, you may have rights to access,
                  correct, delete, or export your personal information, and to
                  object to or restrict processing. To exercise these rights,
                  contact us using the details below.
                </p>
              </section>

              <section id="changes" className="ct__card privacy-section">
                <h3 className="ct__cardTitle">Changes to this policy</h3>
                <p className="ct__muted">
                  We may update this policy to reflect changes in our practices
                  or legal requirements. We will post the effective date on this
                  page. Significant changes will be communicated directly where
                  appropriate.
                </p>
              </section>
            </div>

            {/* Right column - TOC + contact */}
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
