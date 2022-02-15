import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { useSpring, animated, config, easings } from "react-spring";
import { Link, animateScroll as scroll } from "react-scroll";

function Home() {
  function Text() {
    const props = useSpring({
      to: { opacity: 1 },
      from: { opacity: 0 },
      delay: 400,
      config: config.slow,
    });

    return (
      <animated.h1 style={props}>
        <div className="home-page">
          <h1 className="outline">WELCOME</h1>
          <div className="typewriter">
            <Typewriter
              options={{
                strings: ["Full Stack Developer", "React Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </animated.h1>
    );
  }

  function EasingComponent() {
    const { background, rotateZ } = useSpring({
      from: {
        background: "#4dd2ff",
        rotateZ: 0,
      },
      to: {
        background: "#1a1a1a",
        rotateZ: 720,
      },
      config: {
        duration: 2250,
        easing: easings.easeInOutQuart,
      },
      loop: { reverse: false },
    });

    return (
      <animated.div
        style={{
          background,
          width: 120,
          height: 120,
          borderRadius: 16,
          rotateZ,
        }}
      >
        <Link
          activeClass="active"
          to="aboutme"
          spy={true}
          smooth={true}
          offset={-85}
          duration={500}
        >
          <div className="view-work">View My Work</div>
        </Link>
      </animated.div>
    );
  }

  function enter() {}

  return (
    <div className="pages-container" id="home">
      <Text />
      <EasingComponent />
    </div>
  );
}

export default Home;
