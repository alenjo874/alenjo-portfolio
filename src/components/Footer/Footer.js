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
      <div className="call-to-action">
        <p>
          If you <b>like</b> what you <b>see</b>, email me at{" "}
          <b>alenjo874@gmail.com</b>
        </p>
      </div>
    </div>
  );
}

export default Footer;
