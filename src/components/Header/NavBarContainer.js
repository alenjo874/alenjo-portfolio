import React from "react";
import NavBarElements from "./NavBarElements";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function NavBarContainer() {
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
          <motion.p
            initial={{ y: -15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.26, ease: "easeIn" }}
          >
            alen jo
          </motion.p>
        </div>
        <button className="nav-hamburger">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <NavBarElements />
      </motion.div>
    </>
  );
}

export default NavBarContainer;
