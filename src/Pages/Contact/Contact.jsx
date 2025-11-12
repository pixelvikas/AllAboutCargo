import React from "react";
import bgImage from "../../assets/pageherobg.png";
import "./style.css";
import Hero from "../../Components/Hero";
import { FiPhone, FiMail, FiMapPin, FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <>
      <Hero title="Contact" crumbCurrent="CONTACT" bgImage={bgImage} />
      <section className="ct">
        <div className="ct__wrap">
          {/* Heading */}
          <header className="ct__head">
            <span className="ct__eyebrow">
              <span className="pink">#</span> GET IN TOUCH
            </span>
            <h2 className="ct__title">
              Let’s work together to create
              <br />
              <span className="ct__highlight">the life and business</span>
            </h2>
          </header>

          {/* Grid */}
          <div className="ct__grid">
            {/* Left: Form Card */}
            <div className="ct__card">
              <h3 className="ct__cardTitle">Send A Message</h3>

              <form className="ct__form" onSubmit={(e) => e.preventDefault()}>
                <div className="ct__row">
                  <input
                    className="ct__input"
                    type="text"
                    placeholder="First Name"
                  />
                  <input
                    className="ct__input"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>

                <div className="ct__row">
                  <input
                    className="ct__input"
                    type="email"
                    placeholder="Email Address"
                  />
                  <input
                    className="ct__input"
                    type="tel"
                    placeholder="Phone Number"
                  />
                </div>

                <div className="ct__row ct__row--full">
                  <textarea
                    className="ct__textarea"
                    rows="4"
                    placeholder="Message"
                  />
                </div>

                <button className="ct__submit" type="submit">
                  Send Message <FiSend />
                </button>
              </form>
            </div>

            {/* Right: Contact Info */}
            <div className="ct__info">
              {/* Phone */}
              <div className="ct__block">
                <h4 className="ct__blockTitle">Call Us</h4>
                <p className="ct__muted">
                  Call us today for personalized coaching and transformative
                  growth!
                </p>

                <a href="tel:02245158999" className="ct__chip">
                  <span className="ct__chipIcon ct__chipIcon--phone">
                    <FiPhone />
                  </span>
                  02245158999
                </a>
              </div>

              {/* Email */}
              <div className="ct__block">
                <h4 className="ct__blockTitle">Email Us</h4>
                <p className="ct__muted">
                  Email us now for expert coaching and tailored growth
                  solutions!
                </p>

                <a href="mailto:coach@allaboutcargo.in" className="ct__chip">
                  <span className="ct__chipIcon ct__chipIcon--mail">
                    <FiMail />
                  </span>
                  coach@allaboutcargo.in
                </a>
              </div>

              {/* Visit */}
              <div className="ct__block">
                <h4 className="ct__blockTitle">Visit Us</h4>
                <p className="ct__muted">
                  Visit us for personalized coaching and guidance toward lasting
                  success!
                </p>

                <div className="ct__chip">
                  <span className="ct__chipIcon ct__chipIcon--pin">
                    <FiMapPin />
                  </span>
                  Powai Plaza, office #304, 3rd floor, <br /> central avenue,
                  hiranandani business park, powai, mumbai -400076
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="map-container">
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.4700191195693!2d72.90816747961883!3d19.123545035913303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7e60c35a127%3A0x2637fcdb4b53fcbb!2sPowai%20Plaza!5e1!3m2!1sen!2sin!4v1762695813057!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <style>
        {`
        /* Canvas */
.ct {
  padding: 16px 12px 36px;
}
.ct__wrap {
  max-width: 1100px;
  margin: 0 auto;
}

/* Heading */

.pink {
  color: #f22fbf;
}

.ct__eyebrow {
  display: inline-block;
  font-size: 12px;
  letter-spacing: 2px;
  font-weight: 700;
  color: #6f6f6f;
  margin-bottom: 10px;
}

.ct__title {
  margin: 0 0 14px;
  font-size: clamp(26px, 4.2vw, 36px);
  line-height: 1.2;
  color: #111827;
  font-weight: 700;
}
.ct__highlight {
  background: linear-gradient(90deg, #d0173e, #961782);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

/* Grid */
.ct__grid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 24px;
}

/* Card (form) */
.ct__card {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(16, 24, 40, 0.06);
  padding: 18px;
}
.ct__cardTitle {
  margin: 0 0 12px;
  font-size: 16px;
  font-weight: 700;
  color: #111827;
}

/* Form */
.ct__form {
  display: grid;
  gap: 12px;
}

.ct__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.ct__row--full {
  grid-template-columns: 1fr;
}

.ct__input,
.ct__textarea {
  width: 100%;
  border: none;
  border-bottom: 1px solid #ddd;
  background: #fff;
  padding: 10px 2px;
  font-size: 14px;
  color: #111827;
  outline: none;
  border-radius: 0;
}
.ct__input::placeholder,
.ct__textarea::placeholder {
  color: #9ca3af;
}

.ct__input:focus,
.ct__textarea:focus {
  border-bottom-color: #bf0e83;
}

/* Submit CTA */
.ct__submit {
  align-self: start;
  width: fit-content;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  padding: 10px 14px;
  border-radius: 999px;
  border: 0;
  font-weight: 700;
  font-size: 13px;
  color: #fff;
  cursor: pointer;
  background: linear-gradient(to bottom, #d0173e, #961782); /* brand gradient */
  box-shadow: 0 6px 18px rgba(150, 23, 130, 0.28);
  transition: transform 0.2s ease, box-shadow 0.3s ease;
}
.ct__submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(150, 23, 130, 0.35);
}

/* Right column */
.ct__info {
  padding-top: 6px;
}

.ct__block + .ct__block {
  margin-top: 18px;
}

.ct__blockTitle {
  margin: 0 0 4px;
  font-size: 14px;
  font-weight: 700;
  color: #111827;
}

.ct__muted {
  margin: 0 0 10px;
  color: #6b7280;
  font-size: 13px;
  line-height: 1.55;
}

/* Chip (icon + text) */
.ct__chip {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px dashed rgba(0, 0, 0, 0.15);
  background: #fff;
  color: #111827;
  text-decoration: none;
  font-weight: 600;
  box-shadow: 0 2px 10px rgba(16, 24, 40, 0.05);
}

.ct__chipIcon {
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  border-radius: 999px;
  color: #fff;
  font-size: 14px;
}
.ct__chipIcon--phone,
.ct__chipIcon--mail,
.ct__chipIcon--pin {
  background: linear-gradient(to bottom, #d0173e, #961782);
}

/* Responsive */
@media (max-width: 980px) {
  .ct__grid {
    grid-template-columns: 1fr;
  }
  .ct__info {
    padding-top: 0;
  }
}

@media (max-width: 560px) {
  .ct {
    padding: 12px 10px 28px;
  }
  .ct__card {
    border-radius: 14px;
  }
  .ct__row {
    grid-template-columns: 1fr;
  }
  .ct__chip {
    width: 100%;
  } /* full width chips on small screens */
}

/* Map Container */
.map-container {
  width: 100%;
  max-width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Responsive Iframe */
.map-container iframe {
  width: 100%;
  height: 450px;
  border: 0;
}
`}
      </style>
    </>
  );
};

export default Contact;
