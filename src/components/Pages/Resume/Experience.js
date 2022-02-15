import React, { useState } from "react";

function Experience() {
  const [info, setInfo] = useState(true);

  function handleEnter() {
    setInfo(false);
  }
  function handleLeave() {
    setInfo(true);
  }
  return (
    <div
      className="resume-education"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="resume-info">
        <h4>EDUCATION</h4>
        <div className="name-date">
          {info ? (
            <>
              <p>IMPERIAL DADE</p>
              <p>
                <em>Senior Contracts Specialist</em>
              </p>{" "}
            </>
          ) : (
            <>
              <li>
                Responsible for day to day supervision of five team members,
                including resolving performance issues, meeting project
                deadlines, and providing team guidance
              </li>
              <li>
                Ensure contract renewals, extensions, and amendments are
                uploaded into internal analytics cloud software
              </li>
              <li>
                Create complex Excel formulas to improve automation in previous
                data management systems
              </li>
              <li>
                Lead a team to successfully meet department goals and ensure
                that all large projects are completed in time
              </li>
              <li>
                Oversee the onboarding process for new team members with an
                established vision and plan
              </li>
              <li>
                Responsible for curating accurate monthly reports to send out to
                vendors for rebates of over $10 million dollars
              </li>
              <li>
                Manage over 30 vendors serving as the point of contact for all
                contractual communications and commitments
              </li>
            </>
          )}
        </div>
        <div className="name-date">
          {info ? (
            <>
              <p>Jersey City, NJ</p>{" "}
              <p>
                {" "}
                <em>Aug. 2021-Jan. 2022</em>{" "}
              </p>{" "}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Experience;
