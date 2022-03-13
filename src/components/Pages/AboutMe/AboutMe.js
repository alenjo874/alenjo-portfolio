import React from "react";
import { motion } from "framer-motion";

function AboutMeContainer() {
  return (
    <div className="pages-container" id="aboutme">
      <div className="pages-header-container">
        <h2 className="pages-name">About Me</h2>
        <div className="header-backdrop"></div>
      </div>
      <span className="project-intro-container">
        <h3>About Intro</h3>
        <p className="page-intro">
          Please take a look at some projects I've recently finished and find
          the full story on how I built our clients achieve success in the
          digital world.
        </p>
      </span>
      <div className="about-desc">
        <p>
          I'm a full stack developer from Fairview, New Jersey who is passionate
          about developing high quality applications. I enjoy collaborating in
          teams and thrive in fast paced environments. In my spare time I enjoy
          playing guitar, -Highly organized and detail-oriented -riendly and
          professional
        </p>
      </div>
      <ul className="contact-info">
        <li>alenjo874@gmail.com</li>
      </ul>
    </div>
  );
}

export default AboutMeContainer;
