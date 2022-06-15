import React from "react";
import SkillsCard from "./SkillsCard";
import { v4 as uuidv4 } from "uuid";
function Skills({ scrollShowAnimation }) {
  const skillsArray = [
    { code: "Angular", logo: "/images/Angular.png" },
    { code: "TypeSgit adcript", logo: "/images/Typescript.png" },
    { code: "JavaScript", logo: "/images/JavaScriptLogo.png" },
    { code: "Sass", logo: "/images/SassLogo.png" },
    { code: "React", logo: "/images/ReactLogo.png" },
    { code: "Node.js", logo: "/images/NodeLogo.png" },
    { code: "Ruby", logo: "/images/RubyLogo.png" },
    { code: "Rails", logo: "/images/RailsLogo.png" },
    { code: "Sinatra", logo: "/images/SinatraLogo.png" },
    { code: "PostgreSQL", logo: "/images/PostgressLogo.png" },
    { code: "Git", logo: "/images/GitLogo.png" },
    { code: "CSS", logo: "/images/CSS3Logo.png" },
    { code: "HTML", logo: "/images/HTML5Logo.png" },
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
      <div className="pages-header-container">
        <h2 className="pages-name">Skills</h2>
        <div className="header-backdrop"></div>
      </div>
      {/* <span className="project-intro-container">
        <h3>Programming Languanges, Frameworks, & Databases</h3>
        <p className="page-intro">
          Please take a look at some projects I've recently finished and find
          the full story on how I built our clients achieve success in the
          digital world.
        </p>
      </span> */}
      <div key="box" className="skills-card-container">
        {displaySkillsCard}
      </div>
    </div>
  );
}

export default Skills;
