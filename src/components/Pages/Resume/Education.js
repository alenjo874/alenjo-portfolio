import React, { useState } from "react";

function Education() {
  const [info, setInfo] = useState(true);

  function handleEnter() {
    setInfo(false);
  }
  function handleLeave() {
    setInfo(true);
  }
  return (
    <div className="resume-education" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <div className="resume-info">
        <h4>EDUCATION</h4>
        <div className="name-date">
          {info ? (
            <>
              {" "}
              <p>RUTGERS UNIVERSITY – SCHOOL OF ARTS AND SCIENCES </p>
              <p>
                <em>Bachelor of Arts in Economics</em>
              </p>{" "}
            </>
          ) : (
            <>
              <li>Minor: Business Administration</li>
              <li>Trailhead profile: https://trailblazer.me/id/alenjo</li>{" "}
            </>
          )}
        </div>
        <div className="name-date">
          {info ? (
            <>
              {" "}
              <p>New Brunswick, NJ</p>
              <p>
                <em>Sept. 2014-Dec. 2018</em>
              </p>{" "}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Education;
