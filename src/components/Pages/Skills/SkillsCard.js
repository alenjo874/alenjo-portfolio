import React from "react";
import { motion } from "framer-motion";

function SkillsCard({ code, logo, scrollShowAnimation }) {
  return (
    <motion.div
      className="skills-card"
      // whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
      // whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
      {...scrollShowAnimation}
    >
      <h4>{code}</h4>
      <div>
        <img src={logo} />
      </div>
    </motion.div>
  );
}

export default SkillsCard;
