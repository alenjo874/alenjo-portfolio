import React from "react";
import { v4 as uuidv4 } from "uuid";

function ProjectsCard({
  name,
  github,
  description,
  image,
  codingStack,
  setIsCardClick,
}) {
  const displayStack = codingStack.map((code) => {
    return <li className="stack-element" key={uuidv4()}>{code}</li>;
  });

  return (
    <div className="project-card">
      <div className="project-card-image">
        <img src={image}/>
      </div>
      <div className="project-details">
        <div className="project-name">
          <h4>{name}</h4>
        </div>
        <div className="project-stack">
           {displayStack}
        </div>
        <div className="project-about">
          <p>{description}</p>
        </div>
        <div className="project-links">
          <p>Demo</p>
          <p>{github}</p>
        </div>
        <button className="hide-button" onClick={() => setIsCardClick(false)}>
          Hide
        </button>
      </div>
    </div>
  );
}

export default ProjectsCard;
