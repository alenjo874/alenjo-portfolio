import React from "react";
import AboutMe from "./AboutMe/AboutMe";
import Resume from "./Resume/Resume";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Home from "./Home/Home";

function PagesContainer() {
  return (
    <div>
      <AboutMe />
      <Resume />
      <Skills />
      <Projects />
    </div>
  );
}

export default PagesContainer;
