import React from "react";
import NavBarElements from "./NavBarElements";
import { motion } from "framer-motion";

function NavBarContainer() {
  return (
    <motion.div
      className="navbar"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <NavBarElements />
    </motion.div>
  );
}

export default NavBarContainer;
