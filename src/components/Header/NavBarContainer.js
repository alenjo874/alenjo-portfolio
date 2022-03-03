import React from "react";
import NavBarElements from "./NavBarElements";
import { motion } from "framer-motion";

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
        <NavBarElements />
      </motion.div>
    </>
  );
}

export default NavBarContainer;
