import React, { useState } from "react";
import ProjectIcon from "./ProjectIcon";
import { v4 as uuidv4 } from "uuid";

function Projects({ scrollShowAnimation }) {
  const projectsArray = [
    {
      name: "CinemaReviews",
      github: "https://github.com/alenjo874/cinema-review-app",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      image: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
      codingStack: ["JavaScript", "React", "CSS", "HTML"],
    },
    {
      name: "Skyline",
      github: "https://github.com/alenjo874/cinema-review-app",
      description:
        "Skyline ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCosNE8U8r4l6IY0NHJ7icaHynM8gFLQimNg&usqp=CAU",
      codingStack: ["Skyline", "React", "CSS", "HTML"],
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
      <div className="project-icon">
        {/* <img
          onClick={displayPopUp}
          src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
        ></img> */}
        {displayProjectImage}
      </div>
    </div>
  );
}

export default Projects;
