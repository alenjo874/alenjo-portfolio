import React, { useRef } from "react";
import ProjectsCard from "./ProjectsCard";
import { v4 as uuidv4 } from "uuid";

function Projects({ projectReferene }) {
  const projectsArray = ["Project 1", "Project 2", "Project 3", "Project 4"];

  const projectsRef = useRef();

  const displayProjects = projectsArray.map((project) => {
    return <ProjectsCard key={uuidv4()} project={project} />;
  });

  return (
    <div className="pages-container" id="projects">
      <h2>Projects</h2>
      <div className="project-card-container">{displayProjects}</div>
    </div>
  );
}

export default Projects;
