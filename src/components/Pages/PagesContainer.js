import React from "react";
import Resume from "./Resume/Resume";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import ContactMe from "./ContactMe/ContactMe";

function PagesContainer() {
  const scrollShowAnimation = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true },
    transition: { delay: 0.24, duration: 0.6 },
    variants: {
      hidden: { opacity: 0, y: -20 },
      visible: { opacity: 1, y: 0 },
      ease: "easeIn",
    },
  };

  return (
    <div>
      {/* <AboutMe /> */}
      <Projects scrollShowAnimation={scrollShowAnimation} />
      <Skills scrollShowAnimation={scrollShowAnimation} />
      <Resume scrollShowAnimation={scrollShowAnimation} />
      <ContactMe />
    </div>
  );
}

export default PagesContainer;
