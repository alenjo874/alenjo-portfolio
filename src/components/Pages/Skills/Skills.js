import React from "react";
import SkillsCard from "./SkillsCard";
import { v4 as uuidv4 } from "uuid";
function Skills({ scrollShowAnimation }) {

  const skillsArray = [
    { code: "HTML", logo: "/images/HTML5Logo.png" },
    { code: "CSS", logo: "/images/HTML5Logo.png" },
    { code: "JavaScript", logo: "/images/HTML5Logo.png" },
    { code: "React", logo: "/images/HTML5Logo.png" },
    { code: "Node.js", logo: "/images/HTML5Logo.png" },
    { code: "Ruby", logo: "/images/HTML5Logo.png" },
    { code: "Rails", logo: "/images/HTML5Logo.png" },
    { code: "Sinatra", logo: "/images/HTML5Logo.png" },
    { code: "SQL", logo: "/images/HTML5Logo.png" },
    { code: "PostgreSQL", logo: "/images/HTML5Logo.png" },
    { code: "Git", logo: "/images/HTML5Logo.png" },
  ];

  const displaySkillsCard = skillsArray.map((skill) => {
    return (
      <SkillsCard
        key={uuidv4()}
        {...skill}
        scrollShowAnimation={scrollShowAnimation}
      />
    );
  });

  return (
    <div className="pages-container skills-page" id="skills">
      <h2>Skills</h2>

      <div key="box" className="skills-card-container">
        {displaySkillsCard}
      </div>
    </div>
  );
}

export default Skills;
