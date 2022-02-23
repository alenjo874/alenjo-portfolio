import React from "react";
import AboutMe from "./AboutMe/AboutMe";
import Resume from "./Resume/Resume";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";

function PagesContainer() {
  return (
    <div>
      <AboutMe />
      <Projects />
      <Skills />
      <Resume />
    </div>
  );
}

export default PagesContainer;
