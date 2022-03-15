import React from "react";
import { motion } from "framer-motion";

function SkillsCard({ code, logo, scrollShowAnimation }) {
  const skillScrollAnimation = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true },
    transition: { delay: 0.24, duration: 0.6 },
    variants: {
      hidden: { opacity: 0, scale: 1, y: -20 },
      visible: { opacity: 1, scale: 1, y: 0 },
      ease: "easeIn",
    },
  };
  return (
    <motion.div className="skills-card" {...skillScrollAnimation}>
      <h4>{code}</h4>
      <div className="skills-logo-container">
        <img src={logo} />
      </div>
    </motion.div>
  );
}

export default SkillsCard;
