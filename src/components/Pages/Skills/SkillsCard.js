import React from "react";
import { motion } from "framer-motion";
import BlurImageLoader from "react-blur-image-loader";

function SkillsCard({ code, logo, scrollShowAnimation }) {

  const skillScrollAnimation = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true },
    transition: { delay: 0.1, duration: 0.6 },
    variants: {
      hidden: { opacity: 0, scale: 0, y: -150 },
      visible: { opacity: 1, scale: 1, y: 0 },
      ease: "easeIn",
    },
  };
  return (
    <motion.div
      className="skills-card"
      // whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
      // whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
      {...skillScrollAnimation}
    >
      <h4>{code}</h4>
      <div className="skills-logo-container">
        {/* <img src={logo} /> */}
        <BlurImageLoader
          src={logo}
          preview={""}
          maxBlurLevel={10}
          transitionTime={400}
        />
      </div>
    </motion.div>
  );
}

export default SkillsCard;
