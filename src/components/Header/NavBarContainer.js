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
          <p>alen jo</p>
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
