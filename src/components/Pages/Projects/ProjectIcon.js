import React, { useState } from "react";
import ProjectsCard from "./ProjectsCard";
import { v4 as uuidv4 } from "uuid";
import { AnimatePresence, motion } from "framer-motion";

function ProjectIcon({
  name,
  github,
  description,
  image,
  codingStack,
  displayPopUp,
}) {
  const [isCardClick, setIsCardClick] = useState(false);

  function displayPopUp() {
    setIsCardClick((prev) => !prev);
  }

  const displayProjects = (
    <ProjectsCard
      key={uuidv4()}
      setIsCardClick={setIsCardClick}
      name={name}
      github={github}
      description={description}
      image={image}
      codingStack={codingStack}
    />
  );

  const scrollShowAnimation = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true },
    transition: { duration: 0.5 },
    variants: {
      hidden: { opacity: 0, scale: 0, y: -150 },
      visible: { opacity: 1, scale: 1, y: 0 },
      ease: "easeOut",
    },
  };

  return (
    <>
      <motion.div className="project-image" {...scrollShowAnimation}>
        <img
          onClick={displayPopUp}
          src={image}
          onClick={() => setIsCardClick(true)}
        ></img>
      </motion.div>
      <AnimatePresence>
        {isCardClick ? (
          <div key="box" className="project-card-container">
            {displayProjects}
          </div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default ProjectIcon;
