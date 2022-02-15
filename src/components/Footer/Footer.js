import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Footer() {
  return (
    <div className="footer">
      <Link
        activeClass="active"
        to="aboutme"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <ul>Back to Top</ul>
      </Link>
    </div>
  );
}

export default Footer;
