import React from "react";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlay } from "@fortawesome/free-solid-svg-icons";

function ProjectsCard({
  name,
  github,
  story,
  image,
  link,
  setIsCardClick,
  demo,
}) {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,

        transition: {
          duration: 0.35,
          type: "show",
          ease: "easeIn",
        },
      }}
      exit={{
        y: "10%",
        opacity: 0,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      <div className="project-card-image">
        <img src={image} />
      </div>
      <div className="project-details">
        <div className="project-card-header">
          <div className="project-name">
            <h4>{name}</h4>
          </div>
          <button className="hide-button" onClick={() => setIsCardClick(false)}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <div className="project-about">
          <p>{story}</p>
        </div>
        <div className="project-links">
          <a href={demo} target="_blank" className="project-demo">
            Demo
            {/* <FontAwesomeIcon icon={faPlay} /> */}
          </a>
          <a href={github} target="_blank" className="github-link">
            {/* <img src="/images/GitHub.png" /> */}
            Github
          </a>
          <a href={link} target="_blank" className="deployment-link">
            Visit
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectsCard;
