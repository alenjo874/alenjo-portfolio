import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

function NavBarElements({ scrollNavShowAnimation }) {
  const linkAttributes = {
    spy: true,
    smooth: true,
    offset: -80,
    duration: 600,
  };

  return (
    <>
      {/* <Link activeClass="active" to="aboutme" {...linkAttributes}>
        <motion.ul
          className="navbar-elements"
          {...scrollNavShowAnimation}
          transition={{ delay: 0.15, duration: 0.26, ease: "easeIn" }}
        >
          About
        </motion.ul>
      </Link> */}
      <Link activeClass="active" to="projects" {...linkAttributes}>
        <motion.ul
          className="navbar-elements"
          {...scrollNavShowAnimation}
          transition={{ delay: 0.25, duration: 0.26, ease: "easeIn" }}
        >
          Projects
        </motion.ul>
      </Link>
      <Link activeClass="active" to="skills" {...linkAttributes}>
        <motion.ul
          className="navbar-elements"
          {...scrollNavShowAnimation}
          transition={{ delay: 0.35, duration: 0.26, ease: "easeIn" }}
        >
          Skills
        </motion.ul>
      </Link>
      <Link activeClass="active" to="resume" {...linkAttributes}>
        <motion.ul
          className="navbar-elements"
          {...scrollNavShowAnimation}
          transition={{ delay: 0.45, duration: 0.26, ease: "easeIn" }}
        >
          Resume
        </motion.ul>
      </Link>
      <Link activeClass="active" to="contact" {...linkAttributes}>
        <motion.ul
          className="navbar-elements"
          {...scrollNavShowAnimation}
          transition={{ delay: 0.45, duration: 0.26, ease: "easeIn" }}
        >
          Contact
        </motion.ul>
      </Link>
    </>
  );
}

export default NavBarElements;
