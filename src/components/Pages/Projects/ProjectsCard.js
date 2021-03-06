import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

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
        <a href={demo} target="_blank" rel="noreferrer">
          <img src={image} alt="project thumbnail"></img>
        </a>
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
      </div>
    </motion.div>
  );
}

export default ProjectsCard;
