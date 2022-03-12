import React from "react";
import SkillsCard from "./SkillsCard";
import { v4 as uuidv4 } from "uuid";
function Skills({ scrollShowAnimation }) {
  const skillsArray = [
    { code: "HTML", logo: "/images/HTML5Logo.png" },
    { code: "CSS", logo: "/images/CSS3Logo.png" },
    { code: "JavaScript", logo: "/images/JavaScriptLogo.png" },
    { code: "React", logo: "/images/ReactLogo.png" },
    { code: "Node.js", logo: "/images/NodeLogo.png" },
    { code: "Ruby", logo: "/images/RubyLogo.png" },
    { code: "Rails", logo: "/images/RailsLogo.png" },
    { code: "Sinatra", logo: "/images/SinatraLogo.png" },
    { code: "PostgreSQL", logo: "/images/PostgressLogo.png" },
    { code: "Git", logo: "/images/GitLogo.png" },
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
