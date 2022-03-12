import React, { useState } from "react";
import ProjectIcon from "./ProjectIcon";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

function Projects({ scrollShowAnimation }) {
  const projectsArray = [
    {
      name: "Cinema Reviews",
      github: "https://github.com/alenjo874/cinema-review-app",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      image: "/images/CinemaReviewApp.png",
      codingStack: ["React", "JavaScript", "HTML/CSS"],
    },
    {
      name: "Studia",
      github: "https://github.com/alenjo874/study-focus-app",
      description:
        "Skyline ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      image: "/images/StudiaApp.png",
      codingStack: ["React", "JavaScript", "Ruby", "Sinatra"],
    },
    {
      name: "Bridge",
      github: "https://github.com/alenjo874/cinema-review-app",
      description:
        "Bridge ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Wjd-Cak78mooEfHTx64D7xhFtgBMZRFiiQ&usqp=CAU",
      codingStack: ["Bridge", "React", "CSS", "HTML"],
    },
    {
      name: "Sunflower",
      github: "https://github.com/alenjo874/cinema-review-app",
      description:
        "SunflowerLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhdEzcMvlpZHwQ6mTIx3bqqPGOJXX6cTvmwg&usqp=CAU",
      codingStack: ["Sunflower", "React", "CSS", "HTML"],
    },
  ];

  const displayProjectImage = projectsArray.map((project) => {
    return (
      <ProjectIcon
        {...project}
        key={uuidv4()}
        scrollShowAnimation={scrollShowAnimation}
      />
    );
  });

  return (
    <div className="pages-container" id="projects">
      <div className="pages-header-container">
        <h2 className="pages-name">Projects</h2>
        <div className="header-backdrop"></div>
      </div>
      <motion.span className="project-intro-container" {...scrollShowAnimation}>
        <h3> Projects showcase</h3>
        <p className="page-intro">
          Please take a look at some of the projects I've recently finished and find
          the full story on how I built them, and stack that I utilized. 
        </p>
      </motion.span>
      <div className="project-icon">{displayProjectImage}</div>
    </div>
  );
}

export default Projects;
