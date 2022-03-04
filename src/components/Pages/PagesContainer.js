import React from "react";
import AboutMe from "./AboutMe/AboutMe";
import Resume from "./Resume/Resume";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";

function PagesContainer() {

  const scrollShowAnimation = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true },
    transition: { delay: 0.1, duration: 0.65 },
    variants: {
      hidden: { opacity: 0, scale: 0, y: -150 },
      visible: { opacity: 1, scale: 1, y: 0 },
      ease: "easeIn",
    },
  };

  return (
    <div>
      <AboutMe />
      <Projects scrollShowAnimation={scrollShowAnimation} />
      <Skills scrollShowAnimation={scrollShowAnimation}/>
      <Resume scrollShowAnimation={scrollShowAnimation}/>
    </div>
  );
}

export default PagesContainer;
