import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";

function Home() {
  const fadeDownIn = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  const fadeDownRight = {
    initial: { x: -30, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };
  const fadeDownLeft = {
    initial: { x: 30, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  function Text() {
    return (
      <div className="home-page">
        <div className="home-content">
          <motion.h1
            className="hollow-outline"
            {...fadeDownRight}
            transition={{ delay: 0.1, duration: 0.8, ease: "easeIn" }}
          >
            <span className="home-name">
              <li className="home-name-element">A</li>
              <li className="home-name-element">L</li>
              <li className="home-name-element">E</li>
              <li className="home-name-element">N</li>
              &nbsp;
              <li className="home-name-element">J</li>
              <li className="home-name-element">O</li>
            </span>
          </motion.h1>

          <motion.span
            className="home-short-about"
            {...fadeDownRight}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeIn" }}
          >
            <p>
              Hello, I'm a Full Stack Developer who is passionate about building
              quality applications. I have experience using frontend and backend
              technologies such as JavaScript, React, PostgreSQL, Ruby, and
              Rails. I enjoy collaborating in teams and can thrive in
              high-pressure environments. My love for problem solving and
              learning has led me to find my purpose as a developer. In my spare
              time I enjoy playing acoustic guitar and video games.
            </p>
          </motion.span>
          <motion.div
            className="home-links"
            {...fadeDownRight}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeIn" }}
          >
            <div className="home-links-elements">
              <a
                className="github-logo home-logos"
                href="https://github.com/alenjo874"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/GitHub.png"
                  title="Github"
                  alt="github link"
                />
              </a>
            </div>
            <div className="home-links-elements">
              <a
                className="github-logo home-logos"
                href="/documents/Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/ResumeLogo.png"
                  title="Resume"
                  alt="resume link"
                />
              </a>
            </div>
            <div className="home-links-elements">
              <a
                className="github-logo home-logos"
                href="https://medium.com/@alenjo874"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/Medium.png" title="Resume" alt="blog link" />
              </a>
            </div>
          </motion.div>
        </div>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          <motion.button
            {...fadeDownRight}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeIn" }}
            className="see-more-button btn draw-border"
          >
            View My Work
          </motion.button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pages-container home-page" id="home">
      <Text />
    </div>
  );
}

export default Home;
