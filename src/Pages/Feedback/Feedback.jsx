import React, { useEffect, useState, useRef } from "react";
import bgImage from "../../assets/pageherobg.png";
import "./style.css";
import Hero from "../../Components/Hero";

const FEEDBACK_STORAGE_KEY = "cartgo_feedback_entries";

const Star = ({ filled, label, onClick, onKeyDown, index }) => (
  <button
    type="button"
    className={`star ${filled ? "star--filled" : ""}`}
    aria-label={label}
    aria-pressed={filled}
    onClick={() => onClick(index)}
    onKeyDown={(e) => onKeyDown(e, index)}
  >
    ★
  </button>
);

const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("General");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(true);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);
  const formRef = useRef(null);

  useEffect(() => {
    // reset success message after a short delay
    if (success) {
      const t = setTimeout(() => setSuccess(null), 4500);
      return () => clearTimeout(t);
    }
  }, [success]);

  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = "Name is required.";
    if (!email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      e.email = "Enter a valid email.";
    if (rating < 1) e.rating = "Please provide a rating.";
    if (!message.trim() || message.trim().length < 10)
      e.message = "Please write at least 10 characters.";
    if (!consent)
      e.consent = "Please allow us to store and process this feedback.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setCategory("General");
    setRating(0);
    setHoverRating(0);
    setMessage("");
    setConsent(true);
    setErrors({});
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) {
      const firstError = formRef.current.querySelector(
        ".input-error, .star--error"
      );
      if (firstError)
        firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setSubmitting(true);
  };

  // keyboard handlers for stars (left/right arrows)
  const onStarKeyDown = (e, index) => {
    if (e.key === "ArrowRight") {
      const next = Math.min(5, (hoverRating || rating) + 1);
      setRating(next);
      setHoverRating(next);
    } else if (e.key === "ArrowLeft") {
      const prev = Math.max(1, (hoverRating || rating) - 1);
      setRating(prev);
      setHoverRating(prev);
    } else if (e.key === "Enter" || e.key === " ") {
      setRating(index);
      setHoverRating(index);
    }
  };

  const handleStarClick = (i) => {
    setRating(i);
  };

  return (
    <>
      <Hero title="Feedback" crumbCurrent="FEEDBACK" bgImage={bgImage} />

      <main
        className="ct feedback-page"
        id="feedback"
        aria-labelledby="feedback-title"
      >
        <div className="ct__wrap feedback-wrap">
          <header className="feedback-header">
            <div>
              <h1 id="feedback-title" className="ct__title feedback-title">
                We’d love your feedback
                <span className="ct__highlight"> — All About Cargo</span>
              </h1>
              <p className="feedback-lead">
                Tell us what you liked, what we can improve, or request help.
                Your feedback helps us build a better product.
              </p>
            </div>

            <div className="feedback-cta">
              <a className="btn" href="/contact">
                Contact Support
              </a>
            </div>
          </header>

          <div className="ct__grid feedback-grid">
            <form
              className="ct__card feedback-form"
              onSubmit={handleSubmit}
              ref={formRef}
              noValidate
            >
              <h2 className="form-title">Send us feedback</h2>

              <label className="field">
                <div className="field-label">Name</div>
                <input
                  className={`ct__input ${errors.name ? "input-error" : ""}`}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  type="text"
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <div className="field-error">{errors.name}</div>
                )}
              </label>

              <label className="field">
                <div className="field-label">Email</div>
                <input
                  className={`ct__input ${errors.email ? "input-error" : ""}`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@domain.com"
                  type="email"
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <div className="field-error">{errors.email}</div>
                )}
              </label>

              <label className="field">
                <div className="field-label">Category</div>
                <select
                  className="ct__input"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option>General</option>
                  <option>Bug Report</option>
                  <option>Feature Request</option>
                  <option>Course Content</option>
                  <option>Other</option>
                </select>
              </label>

              <label className="field">
                <div className="field-label">Rating</div>

                <div
                  className={`star-row ${
                    errors.rating ? "star-row--error" : ""
                  }`}
                  onMouseLeave={() => setHoverRating(0)}
                >
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      index={i}
                      filled={i <= (hoverRating || rating)}
                      label={`${i} star${i > 1 ? "s" : ""}`}
                      onClick={handleStarClick}
                      onKeyDown={onStarKeyDown}
                    />
                  ))}
                </div>
                {errors.rating && (
                  <div className="field-error">{errors.rating}</div>
                )}
              </label>

              <label className="field">
                <div className="field-label">Message</div>
                <textarea
                  className={`ct__textarea ${
                    errors.message ? "input-error" : ""
                  }`}
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share your experience, suggestions or issues..."
                  aria-invalid={errors.message ? "true" : "false"}
                />
                {errors.message && (
                  <div className="field-error">{errors.message}</div>
                )}
              </label>

              <label className="consent">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                />
                <span>
                  I consent to Cartgo storing and processing my feedback for
                  product improvements.
                </span>
              </label>
              {errors.consent && (
                <div className="field-error">{errors.consent}</div>
              )}

              <div className="form-actions">
                <button
                  className="ct__submit"
                  type="submit"
                  disabled={submitting}
                >
                  Submit feedback
                </button>

                <button
                  type="button"
                  className="btn-outline"
                  onClick={() => {
                    clearForm();
                    setSuccess(null);
                  }}
                >
                  Reset
                </button>
              </div>

              {success && <div className="form-success">{success}</div>}
            </form>

            <aside className="ct__card feedback-info">
              <div className="info-block">
                <h3 className="ct__cardTitle">Why your feedback matters</h3>
                <p className="ct__muted">
                  We read every submission. Feedback helps us fix bugs faster,
                  improve course content, and build features you actually need.
                </p>
              </div>

              <div className="info-block">
                <h4 className="ct__blockTitle">What happens next?</h4>
                <ol className="small-list">
                  <li>We review your feedback within 2 business days.</li>
                  <li>We may contact you for clarifications.</li>
                  <li>
                    Important fixes or requests are prioritized and tracked
                    publicly.
                  </li>
                </ol>
              </div>

              <div className="info-block">
                <h4 className="ct__blockTitle">Privacy</h4>
                <p className="ct__muted">
                  We will not share your email or personal information without
                  consent. See our
                  <a href="/privacy-policy" className="ct__link">
                    {" "}
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </aside>
          </div>
        </div>

        <style>
          {`
            /* Feedback page — plain CSS, modern, accessible */

/* wrapper tweaks */
.feedback-wrap { max-width: 1120px; margin: 0 auto; padding-bottom: 40px; }

/* header */
.feedback-header { display: flex; gap: 20px; align-items: center; justify-content: space-between; margin-bottom: 20px; }
.feedback-title { margin-bottom: 8px; }
.feedback-lead { color: #6b7280; font-size: 15px; max-width: 56ch; }

/* header CTAs */
.feedback-cta { display: flex; gap: 10px; align-items: center; }
.btn {
  display: inline-flex; gap: 8px; align-items: center; padding: 10px 14px;
  border-radius: 10px; background: linear-gradient(90deg,#d0173e,#961782);
  color: #fff; font-weight: 700; text-decoration: none; border: 0;
  box-shadow: 0 12px 30px rgba(120,20,80,0.12);
}
.btn-outline {
  background: transparent; border: 1px solid rgba(150,23,130,0.08);
  color: #62124a; font-weight: 700; padding: 10px 14px; border-radius: 10px;
}

/* grid */
.feedback-grid { grid-template-columns: 1fr 360px; gap: 28px; align-items: start; }

/* form card */
.feedback-form {
  padding: 22px; border-radius: 14px;
  box-shadow: 0 12px 30px rgba(12,18,24,0.04);
}
.form-title { margin: 0 0 6px 0; font-size: 20px; }

/* fields */
.field { display: block; margin-bottom: 12px; }
.field-label { font-size: 13px; font-weight: 700; margin-bottom: 6px; color: #111827; display: block; }
.ct__input, .ct__textarea, select { width: 100%; padding: 10px 8px; border: 1px solid #e6e6e9; border-radius: 8px; font-size: 14px; color: #111827; background: #fff; outline: none; }
.ct__textarea { resize: vertical; min-height: 130px; }
.ct__input:focus, .ct__textarea:focus, select:focus { border-color: #bf0e83; box-shadow: 0 6px 18px rgba(176,14,131,0.06); }

/* star rating */
.star-row { display: flex; gap: 8px; align-items: center; }
.star {
  font-size: 26px; line-height: 1; padding: 6px 8px; border-radius: 8px; border: 0;
  background: transparent; cursor: pointer; transition: transform 120ms ease, color 120ms ease;
  color: #cbd5e1; /* neutral */
}
.star:hover, .star:focus { transform: translateY(-4px); outline: none; color: #f59e0b; }
.star--filled { color: #ffb020; text-shadow: 0 1px 0 rgba(0,0,0,0.06); }
.star-row--error .star, .star--error { box-shadow: 0 0 0 3px rgba(208,23,62,0.08); border-radius: 8px; }

/* consent */
.consent { display: flex; gap: 10px; align-items: flex-start; margin-bottom: 12px; color: #374151; font-size: 14px; }
.consent input { margin-top: 4px; }

/* errors & success */
.field-error { color: #b91c1c; font-size: 13px; margin-top: 6px; }
.input-error { border-color: #fca5a5 !important; box-shadow: 0 6px 18px rgba(250, 100, 100, 0.06); }

/* form actions */
.form-actions { display: flex; gap: 10px; align-items: center; margin-top: 6px; margin-bottom: 8px; }
.ct__submit {
  align-self: start; display: inline-flex; gap: 8px; align-items: center; padding: 10px 14px; border-radius: 999px;
  border: 0; font-weight: 700; font-size: 13px; color: #fff; cursor: pointer;
  background: linear-gradient(to bottom, #d0173e, #961782); box-shadow: 0 6px 18px rgba(150, 23, 130, 0.28);
}
.ct__submit:disabled { opacity: 0.6; cursor: not-allowed; }

/* success */
.form-success { margin-top: 12px; padding: 10px 12px; border-radius: 10px; background: linear-gradient(90deg, rgba(34,197,94,0.09), rgba(16,185,129,0.04)); color: #065f46; font-weight: 700; }

/* info sidebar */
.feedback-info { padding: 18px; border-radius: 12px; box-shadow: 0 12px 30px rgba(12,18,24,0.04); display: flex; flex-direction: column; gap: 14px; }
.info-block { border-bottom: 1px solid rgba(12,18,24,0.04); padding-bottom: 12px; }
.info-block:last-child { border-bottom: none; }

/* small helper list */
.small-list { margin: 0; padding-left: 18px; color: #374151; line-height: 1.7; }

/* chips */
.ct__chip { display: inline-flex; gap: 8px; align-items: center; padding: 8px 12px; border-radius: 999px; background: #fff; box-shadow: 0 8px 24px rgba(12,18,24,0.04); text-decoration: none; color: #111827; font-weight: 700; }
.ct__chipIcon { display: inline-grid; place-items: center; width: 36px; height: 36px; font-size: 14px; }
.ct__chipIcon--mail, .ct__chipIcon--phone { background: linear-gradient(to bottom,#d0173e,#961782); color: #fff; border-radius: 999px; }

/* responsive */
@media (max-width: 980px) {
  .feedback-grid { grid-template-columns: 1fr; }
  .feedback-cta { flex-direction: column; gap: 8px; }
  .feedback-wrap { padding-left: 12px; padding-right: 12px; }
}

/* reduced motion */
@media (prefers-reduced-motion: reduce) {
  .star, .ct__submit, .btn, .ct__chip { transition: none !important; animation: none !important; transform: none !important; }
}
`}
        </style>
      </main>
    </>
  );
};

export default Feedback;
