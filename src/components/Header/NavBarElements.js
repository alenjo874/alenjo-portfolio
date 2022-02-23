import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function NavBarElements() {
  return (
    <>
      <Link
        activeClass="active"
        to="aboutme"
        spy={true}
        smooth={true}
        offset={-85}
        duration={500}
      >
        <ul className="navbar-elements">About Me</ul>
      </Link>
      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={-85}
        duration={500}
      >
        <ul className="navbar-elements">Projects</ul>
      </Link>
      <Link
        activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        offset={-85}
        duration={500}
      >
        <ul className="navbar-elements">Skills</ul>
      </Link>
      <Link
        activeClass="active"
        to="resume"
        spy={true}
        smooth={true}
        offset={-85}
        duration={500}
      >
        <ul className="navbar-elements">Resume</ul>
      </Link>
    </>
  );
}

export default NavBarElements;
