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
        rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo elit at imperdiet dui accumsan sit amet nulla facilisi. Et ultrices neque ornare aenean euismod elementum. Erat velit scelerisque in dictum. Convallis convallis tellus id interdum velit laoreet id. Porttitor eget dolor morbi non. Ut porttitor leo a diam sollicitudin tempor id. Elementum sagittis vitae et leo.
        </p>
        <p>Blog Posts</p>
      </div>
      <ul className="contact-info">
        <li>alenjo874@gmail.com</li>
      </ul>
    </div>
  );
}

export default AboutMeContainer;
