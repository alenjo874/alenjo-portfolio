import React, { useState } from "react";
import NavBarElements from "./NavBarElements";
import { Link, animateScroll as scroll } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import NavBarHamburger from "./NavBarHamburger";

function NavBarContainer() {
  const [showHamNav, setShowHamNav] = useState(false);

  function handleShowHamNav() {
    setShowHamNav((prev) => !prev);
  }

  return (
    <>
      <div className="nav-back"></div>

      <motion.div className="navbar">
        <div className="nav-mylogo">
          <Link to="home" spy={true} smooth={true} offset={-85} duration={500}>
            <motion.li
              initial={{ y: -15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.26, ease: "easeIn" }}
              className="my-logo"
            >
              alen jo
            </motion.li>
          </Link>
        </div>

        <button className="nav-hamburger-btn" onClick={handleShowHamNav}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <NavBarElements />
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
