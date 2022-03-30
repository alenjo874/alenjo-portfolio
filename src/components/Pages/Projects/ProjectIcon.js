import React, { useState } from "react";
import ProjectsCard from "./ProjectsCard";
import { v4 as uuidv4 } from "uuid";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlay } from "@fortawesome/free-solid-svg-icons";

function ProjectIcon({
  name,
  github,
  description,
  story,
  image,
  link,
  codingStack,
  displayPopUp,
  scrollShowAnimation,
  demo,
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
      story={story}
      image={image}
      codingStack={codingStack}
      demo={demo}
      link={link}
    />
  );

  const displayStack = codingStack.map((code) => {
    return (
      <li className="stack-element" key={uuidv4()}>
        {code}
      </li>
    );
  });

  return (
    <>
      <motion.div className="project-image" {...scrollShowAnimation}>
        <img src={image} className="project-icon-element"></img>
        <div className="project-highlight">
          <div className="project-stack">{displayStack}</div>
          <div>
            <h4 className="project-highlight-element">{name}</h4>
            <p className="project-highlight-element">{description}</p>
            <div className="project-links">
              <a href={demo} target="_blank" className="project-demo">
                Demo
                {/* <FontAwesomeIcon icon={faPlay} /> */}
              </a>
              <a href={github} target="_blank" className="github-logo">
                <img src="/images/GitHub.png" />
              </a>
              <a href={link} target="_blank" className="deployment-link">
                Visit
              </a>
            </div>
            <button onClick={displayPopUp} className="view-work-btn">
              See More{" "}
            </button>
          </div>
        </div>
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
