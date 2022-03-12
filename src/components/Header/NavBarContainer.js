import React, { useState } from "react";
import NavBarElements from "./NavBarElements";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import NavBarHamburger from "./NavBarHamburger";

function NavBarContainer() {
  const [showHamNav, setShowHamNav] = useState(false);

  function handleShowHamNav() {
    setShowHamNav((prev) => !prev);
  }

  return (
    <>
      <div className="nav-back"></div>

      <motion.div
        className="navbar"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.45, ease: "easeIn" }}
      >
        <div className="nav-mylogo">
          <NavLink
            to="/"
            spy={true}
            smooth={true}
            offset={-85}
            duration={500}
            style={{ textDecoration: "none" }}
          >
            <motion.li
              initial={{ y: -15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.26, ease: "easeIn" }}
              className="my-logo"
            >
              alen jo
            </motion.li>
          </NavLink>
        </div>
        <button className="nav-hamburger-btn" onClick={handleShowHamNav}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <NavBarElements />
      </motion.div>
      <div className="nav-hamburger-container">
        <AnimatePresence>
        {showHamNav ? <NavBarHamburger setShowHamNav={setShowHamNav} /> : null}
        </AnimatePresence>
      </div>
    </>
  );
}

export default NavBarContainer;
