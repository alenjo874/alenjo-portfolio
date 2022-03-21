import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Footer() {
  return (
    <div className="footer">
      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
      >
        <ul className="footer-element">Back to Top</ul>
      </Link>
    </div>
  );
}

export default Footer;
