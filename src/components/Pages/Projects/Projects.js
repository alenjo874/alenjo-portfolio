import React, { useState } from "react";
import ProjectsCard from "./ProjectsCard";
import { v4 as uuidv4 } from "uuid";

function Projects() {
  const [isCardClick, setIsCardClick] = useState(false);

  const projectsArray = [
    {
      name: "CinemaReviews",
      github: "https://github.com/alenjo874/cinema-review-app",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      image: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
      codingStack: ["JavaScript", "React", "CSS", "HTML"],
    },
  ];

  const displayProjects = projectsArray.map((project) => {
    return <ProjectsCard key={uuidv4()} {...project} setIsCardClick={setIsCardClick}/>;
  });

  function displayPopUp() {
    setIsCardClick((prev) => !prev);
  }

  return (
    <div className="pages-container" id="projects">
      <h2>Projects</h2>
      <div className="project-image">
        <img
          onClick={displayPopUp}
          src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
        ></img>
      </div>
      {isCardClick ? (
        <div className="project-card-container">{displayProjects}</div>
      ) : null}
    </div>
  );
}

export default Projects;
