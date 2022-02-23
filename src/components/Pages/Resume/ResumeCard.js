import React from "react";
import Experience from "./Experience";

function ResumeCard() {
  return (
    <div className="resume-card">
      <div className="resume-header">
        <div className="company-logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyvqXLkU2N4xNGit038L5r1lsv58rf5ekmcQ&usqp=CAU" />
        </div>
        <span className="company-position">
        <h4>Company Name</h4>
        <p>Position</p>
        </span>
      </div>
      <Experience />
    </div>
  );
}

export default ResumeCard;
