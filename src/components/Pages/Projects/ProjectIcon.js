import React, { useState } from "react";
import ProjectsCard from "./ProjectsCard";
import { v4 as uuidv4 } from "uuid";

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

  return (
    <>
      <div className="project-image">
        <img
          onClick={displayPopUp}
          src={image}
          onClick={() => setIsCardClick(true)}
        ></img>
      </div>
      {isCardClick ? (
        <div className="project-card-container">{displayProjects}</div>
      ) : null}
    </>
  );
}

export default ProjectIcon;
