import React from "react";
import { v4 as uuidv4 } from "uuid";
import { AnimatePresence, motion } from "framer-motion";

function ProjectsCard({
  name,
  github,
  description,
  image,
  codingStack,
  setIsCardClick,
}) {
  const displayStack = codingStack.map((code) => {
    return (
      <li className="stack-element" key={uuidv4()}>
        {code}
      </li>
    );
  });

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{
        y: "50%",
        opacity: 0,
        duration: 0.1,
        transition: { duration: 0.2 },
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="project-card-image">
        <img src={image} />
      </div>
      <div className="project-details">
        <div className="project-name">
          <h4>{name}</h4>
        </div>
        <div className="project-stack">{displayStack}</div>
        <div className="project-about">
          <p>{description}</p>
        </div>
        <div className="project-links">
          <p>Demo</p>
          <p>{github}</p>
        </div>
        <button className="hide-button" onClick={() => setIsCardClick(false)}>
          Hide
        </button>
      </div>
    </motion.div>
  );
}

export default ProjectsCard;
