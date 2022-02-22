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
    return <li key={uuidv4()}>{code}</li>;
  });

  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image}></img>
      </div>
      <div>
        <h4>{name}</h4>
        <p>{description}</p>
        <ul>{displayStack}</ul>
      </div>
      <button onClick={() => setIsCardClick(false)}>Hide</button>
    </div>
  );
}

export default ProjectsCard;
