import React from "react";
import { motion } from "framer-motion";

function SkillsCard({ skill, scrollShowAnimation }) {

  return (
    <motion.div
      className="skills-card"
      // whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
      // whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
      {...scrollShowAnimation}
    >
      <h4>{skill}</h4>
    </motion.div>
  );
}

export default SkillsCard;
