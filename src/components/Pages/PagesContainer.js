import React from "react";
import AboutMe from "./AboutMe";
import Resume from "./Resume/Resume";
import Skills from "./Skills";
import Projects from "./Projects";
import Home from "./Home/Home";

function PagesContainer() {
  return (
    <div>
      {/* <Home /> */}
      <AboutMe />
      <Resume />
      <Skills />
      <Projects />
    </div>
  );
}

export default PagesContainer;
