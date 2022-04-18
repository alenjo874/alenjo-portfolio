import React, { useState } from "react";
import ProjectIcon from "./ProjectIcon";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

function Projects({ scrollShowAnimation }) {
  const projectsArray = [
    {
      name: "IT Systems",
      github: "https://github.com/alenjo874/IT-ticket-system",
      description:
        "An IT system management application where employees can submit tickets, IT admins can provide ticket support, and view ticket analytics.",
      story:
        "When building this project, I was switching back and forth from React (JavaScript) and Rails (Ruby) while also taking on learning Sass. Using Sass in this project, it helped keep my CSS code dynamic. I would love to explore more advanced ways to utilize Sass in my future projects. I used an external news api to fetch relevant articles which taught me important aspects of using different APIs. A challenge I faced during this project was setting up authentication and authorization for users. It was a great experience finally implementing cookies to persist the user information on the page.",
      image: "/images/itSystems.png",
      link: "https://it-service-management-system.herokuapp.com/",
      demo: "",
      codingStack: [
        "React",
        "JavaScript",
        "Rails",
        "Ruby",
        "PostgreSQL",
        "Sass",
      ],
    },
    {
      name: "Car Blogger",
      github: "https://github.com/alenjo874/car-travel-blog-app",
      description:
        "A blog app for users to connect through stories about cars, road trips, traveling and more.",
      story:
        "When building this project, I was switching back and forth from React (JavaScript) and Rails (Ruby) while also taking on learning Sass. Using Sass in this project, it helped keep my CSS code dynamic. I would love to explore more advanced ways to utilize Sass in my future projects. I used an external news api to fetch relevant articles which taught me important aspects of using different APIs. A challenge I faced during this project was setting up authentication and authorization for users. It was a great experience finally implementing cookies to persist the user information on the page.",
      image: "/images/BlogApp.png",
      link: "https://car-travel-blog-app.herokuapp.com/",
      demo: "https://www.youtube.com/watch?v=uAX3xBcdxbI",
      codingStack: [
        "React",
        "JavaScript",
        "Rails",
        "Ruby",
        "PostgreSQL",
        "Sass",
      ],
    },
    {
      name: "Studia",
      github: "https://github.com/alenjo874/study-app",
      description:
        "A study/focus app where users can time their study sessions while keeping track of notes and setting a to-do list.",
      story:
        "I believe a great way to study or focus on work is to hold yourself accountable. In my personal life when I need to study, I move away from any distractions and set aside a dedicated amount of time for it. That is where this app idea originated from, and I started with building the timer. Surprisingly, the timer was more challenging then I had first anticipated due the nature of React state and having to unmount and mount the component from the page, while also still keeping track of the time. I think my favorite part of this project was building out the back end and generating my own database. I thoroughly enjoyed how ruby was able to alleviate some of my front end logic by manipulating the data before it was sent out.",
      image: "/images/StudiaApp.png",
      link: "https://study-notes-app.herokuapp.com/",
      demo: "https://www.youtube.com/watch?v=hY2_wzJDENk",
      codingStack: [
        "React",
        "JavaScript",
        "Rails",
        "Ruby",
        "PostgreSQL",
        "CSS",
      ],
    },
    {
      name: "Cinema Reviews",
      github: "https://github.com/alenjo874/cinema-review-app",
      description:
        "A movie review app where users can search for their favorite movie or add a new movie to review",
      story:
        "I really enjoyed building this project because I was able to combine my passion for coding and films. During this project, I learned that building a visual representation of your React component tree can help avoid unnecessary prop drilling. I was able to utilize the key aspects of React through hooks, components, and props. It was a great way to learn how to implement React forms and how important the state life cycle is. One fun CSS challenge I had during this project was trying to get the hover overlay effect on the movie poster. It was a great reminder of how much base CSS can do without needing CSS libraries.  It was exciting to see the full utility of flexbox and how it simplifies styling.",
      image: "/images/CinemaReviewApp.png",
      link: "https://idyllic-cascaron-c027ed.netlify.app/",
      demo: "https://www.youtube.com/watch?v=FfSq2qg8z0c",
      codingStack: ["React", "JavaScript", "CSS"],
    },
  ];

  const displayProjectImage = projectsArray.map((project) => {
    return (
      <ProjectIcon
        {...project}
        key={uuidv4()}
        scrollShowAnimation={scrollShowAnimation}
      />
    );
  });

  return (
    <div className="pages-container" id="projects">
      <div className="pages-header-container">
        <h2 className="pages-name">Projects</h2>
        <div className="header-backdrop"></div>
      </div>
      <motion.span className="project-intro-container" {...scrollShowAnimation}>
        <h3> My Project Showcase</h3>
        <p className="page-intro">
          Please take a look at some of the projects I've built and the stories
          behind them.
        </p>
      </motion.span>
      <div className="project-icon">{displayProjectImage}</div>
    </div>
  );
}

export default Projects;
