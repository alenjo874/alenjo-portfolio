import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";

function NavBarHamburger({ setShowHamNav }) {
  const fadeLeftIn = {
    initial: { y: -30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const exitLeftOut = {
    exit: {
      y: -30,
      opacity: 0,
      transition: { duration: 0.24, ease: "easeOut" },
    },
  };

  const linkAttribute = {
    spy: true,
    smooth: true,
    offset: -85,
    duration: 500,
  };

  return (
    <motion.div className="ham-elements-container">
      {/* <Link activeClass="active" to="aboutme" {...linkAttribute}>
        <motion.ul
          className="navbar-ham-elements"
          {...fadeLeftIn}
          transition={{ duration: 0.26, ease: "easeIn" }}
          {...exitLeftOut}
          onClick={() => setShowHamNav(false)}
        >
          About
        </motion.ul>
      </Link> */}
      <Link activeClass="active" to="projects" {...linkAttribute}>
        <motion.ul
          className="navbar-ham-elements"
          {...fadeLeftIn}
          transition={{ delay: 0.1, duration: 0.26, ease: "easeIn" }}
          {...exitLeftOut}
          onClick={() => setShowHamNav(false)}
        >
          Projects
        </motion.ul>
      </Link>
      <Link activeClass="active" to="skills" {...linkAttribute}>
        <motion.ul
          className="navbar-ham-elements"
          {...fadeLeftIn}
          transition={{ delay: 0.2, duration: 0.26, ease: "easeIn" }}
          {...exitLeftOut}
          onClick={() => setShowHamNav(false)}
        >
          Skills
        </motion.ul>
      </Link>
      <Link activeClass="active" to="resume" {...linkAttribute}>
        <motion.ul
          className="navbar-ham-elements"
          {...fadeLeftIn}
          transition={{ delay: 0.3, duration: 0.26, ease: "easeIn" }}
          {...exitLeftOut}
          onClick={() => setShowHamNav(false)}
        >
          Resume
        </motion.ul>
      </Link>
    </motion.div>
  );
}

export default NavBarHamburger;
