import React from "react";
import { motion } from "framer-motion";

function SkillsCard({ skill }) {
  const scrollShowAnimation = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true },
    transition: { delay: 0.1, duration: 0.5 },
    variants: {
      hidden: { opacity: 0, scale: 0, y: -150 },
      visible: { opacity: 1, scale: 1, y: 0 },
      ease: "easeIn",
    },
  };
  return (
    <motion.div
      className="skills-card"
      whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
      exit={{ transition: { duration: 0.2 } }}
      {...scrollShowAnimation}
    >
      <h4>{skill}</h4>
    </motion.div>
  );
}

export default SkillsCard;
