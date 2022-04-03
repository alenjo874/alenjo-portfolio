import React, { useState } from "react";
import ProjectsCard from "./ProjectsCard";
import { v4 as uuidv4 } from "uuid";
import { AnimatePresence, motion } from "framer-motion";

function ProjectIcon({
  name,
  github,
  description,
  story,
  image,
  link,
  codingStack,
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
        {/* <img src={image} className="project-icon-element"></img> */}
        <a href={demo} target="_blank" rel="noreferrer">
          <img src={image} className="project-icon-element" alt="project thumbnail" ></img>
        </a>
        <div className="project-highlight">
          <div className="project-stack">{displayStack}</div>
          <div className="pro-icon-body">
            <span>
              <h4 className="project-highlight-element">{name}</h4>
              <p className="project-highlight-element">{description}</p>
            </span>
            <div>
              <div className="project-links">
                <a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  className="project-demo"
                >
                  Demo
                  {/* <FontAwesomeIcon icon={faPlay} /> */}
                </a>
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-link"
                >
                  {/* <img src="/images/GitHub.png" /> */}
                  Github
                </a>
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="deployment-link"
                >
                  Visit
                </a>
              </div>
              <button onClick={displayPopUp} className="view-work-btn">
                See More{" "}
              </button>
            </div>
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
