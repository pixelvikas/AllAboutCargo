import React from "react";
import Hero from "../../Components/Hero";
import "./style.css";
import bgImage from "../../assets/pageherobg.png"; // ✅ Import image properly

const About = () => {
  return (
    <main className="about-page">
      <Hero
        title="About us"
        crumbCurrent="About Us"
        bgImage={bgImage} // ✅ Use the imported variable
      />
    </main>
  );
};

export default About;
