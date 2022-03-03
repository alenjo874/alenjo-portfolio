import React from "react";
import { NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

function Home() {
  function Text() {
    return (
      <h1>
        <div className="home-page">
          <div className="home-content">
            <motion.h1
              className="hollow-outline"
              initial={{ y: -250 }}
              animate={{ y: -10 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 120 }}
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
            <span className="home-short-about">
              <p>
                I'm a full stack developer from Fairview, New Jersey who is
                passionate about developing high quality applications. I enjoy
                collaborating in teams and thrive in fast paced environments. In
                my spare time I enjoy playing guitar, -Highly organized and
                detail-oriented -riendly and professional
              </p>
            </span>
            <ul className="home-links">
              <li>link</li>
              <li>link</li>
              <li>link</li>
              <li>link</li>
            </ul>
          </div>
          <NavLink
            to="/main"
            spy={true}
            smooth={true}
            offset={-85}
            duration={500}
          >
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="view-work-btn"
            >
              View My Work
            </motion.button>
          </NavLink>
        </div>
      </h1>
    );
  }

  return (
    <div className="pages-container home-page" id="home">
      <Text />
    </div>
  );
}

export default Home;
