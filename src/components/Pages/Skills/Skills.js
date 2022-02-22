import React from "react";
import SkillsCard from "./SkillsCard";
import { v4 as uuidv4 } from "uuid";
// import HTML5 from "../images/HTML5_Logo.png";
// import CSS3 from "../images/CSS3_Logo.png";
// import JS from "../images/JavaScript_Logo.png";
// import REACT from "../images/React_Logo.png";

function Skills() {
  const skillsArray = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Ruby",
    "Rails",
    "SQL",
    "MySQL",
    "Git",
  ];

  const displaySkillsCard = skillsArray.map((skill) => {
    return <SkillsCard key={uuidv4()} skill={skill} />;
  });

  return (
    <div className="pages-container skills-page" id="skills">
      <h2>Skills</h2>
      <div className="skills-card-container">{displaySkillsCard}</div>
    </div>
  );
}

export default Skills;
