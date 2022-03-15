import React, { useState } from "react";
import NavBarElements from "./NavBarElements";
import { Link, animateScroll as scroll } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import NavBarHamburger from "./NavBarHamburger";

function NavBarContainer() {
  const [showHamNav, setShowHamNav] = useState(false);

  const scrollNavShowAnimation = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true },
    transition: { delay: 0.2, duration: 0.6 },
    variants: {
      hidden: { opacity: 0, y: 10 },
      visible: { opacity: 1, y: 0 },
      ease: "easeIn",
    },
  };

  function handleShowHamNav() {
    setShowHamNav((prev) => !prev);
  }

  return (
    <>
      <div className="nav-back"></div>

      <motion.div className="navbar">
        <div className="nav-mylogo">
          <Link to="home" spy={true} smooth={true} offset={-85} duration={500}>
            <motion.li {...scrollNavShowAnimation} className="my-logo">
              alen jo
            </motion.li>
          </Link>
        </div>

        <button className="nav-hamburger-btn" onClick={handleShowHamNav}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <NavBarElements scrollNavShowAnimation={scrollNavShowAnimation} />
      </motion.div>
      <div className="nav-hamburger-container">
        <AnimatePresence>
          {showHamNav ? (
            <NavBarHamburger setShowHamNav={setShowHamNav} />
          ) : null}
        </AnimatePresence>
      </div>
    </>
  );
}

export default NavBarContainer;
