import React from "react";
import { NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect";
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
          {/* <motion.div className="typewriter">
            <Typewriter
              options={{
                strings: ["Full Stack Developer", "React Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </motion.div> */}
          <motion.span
            className="home-short-about"
            {...fadeDownRight}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeIn" }}
          >
            <p>
              I'm a full stack developer located in Fairview, New Jersey who is
              passionate about developing high quality applications. I enjoy
              collaborating in teams and thrive in fast paced environments. In
              my spare time I enjoy playing guitar and video games. -Highly
              organized and detail-oriented -riendly and professional
            </p>
          </motion.span>
          <motion.ul
            className="home-links"
            {...fadeDownRight}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeIn" }}
          >
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
          </motion.ul>
        </div>
        <NavLink
          to="/main"
          spy={true}
          smooth={true}
          offset={-85}
          duration={500}
        >
          <motion.button
            {...fadeDownRight}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeIn" }}
            className="see-more-button btn draw-border"
          >
            View My Work
          </motion.button>
        </NavLink>
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
