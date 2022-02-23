import React from "react";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import ResumeCard from "./ResumeCard";

function Resume() {
  return (
    <div className="pages-container" id="resume">
      <h2>Resume</h2>
      <div className="resume">
        <ResumeCard />
        {/* <div className="resume-card">
          <Experience />
        </div> */}

        {/* <Education />
        <Skills />
        <Experience /> */}
      </div>
    </div>
  );
}

export default Resume;
