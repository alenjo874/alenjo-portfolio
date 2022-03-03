import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";

function NavBarElements() {
  const fadeDownIn = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <>
      <Link
        activeClass="active"
        to="aboutme"
        spy={true}
        smooth={true}
        offset={-85}
        duration={500}
      >
        <motion.ul
          className="navbar-elements"
          {...fadeDownIn}
          transition={{ delay: 0.1, duration: 0.26, ease: "easeIn" }}
        >
          About
        </motion.ul>
      </Link>
      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={-85}
        duration={500}
      >
        <motion.ul className="navbar-elements"  {...fadeDownIn}
          transition={{ delay: 0.2, duration: 0.26, ease: "easeIn" }}>Projects</motion.ul>
      </Link>
      <Link
        activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        offset={-85}
        duration={500}
      >
        <motion.ul className="navbar-elements"  {...fadeDownIn}
          transition={{ delay: 0.3, duration: 0.26, ease: "easeIn" }}>Skills</motion.ul>
      </Link>
      <Link
        activeClass="active"
        to="resume"
        spy={true}
        smooth={true}
        offset={-85}
        duration={500}
      >
        <motion.ul className="navbar-elements"  {...fadeDownIn}
          transition={{ delay: 0.4, duration: 0.26, ease: "easeIn" }}>Resume</motion.ul>
      </Link>
    </>
  );
}

export default NavBarElements;
