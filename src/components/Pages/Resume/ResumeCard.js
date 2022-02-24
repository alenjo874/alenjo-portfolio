import React from "react";
import { v4 as uuidv4 } from "uuid";

function ResumeCard({
  company,
  logo,
  link,
  position,
  details,
  location,
  dates,
}) {
  const displayWorkDetails = details.map((detail) => {
    return (
      <li key={uuidv4()} className="detail-element">
        {detail}
      </li>
    );
  });

  return (
    <div className="resume-card">
      <div className="resume-header">
        <div className="company-logo">
          <a href={link} target="_blank">
            <img src={logo} alt={company} />
          </a>
        </div>
        <div className="company-details">
          <span>
            <a href={link} target="_blank" className="company-link">
              <h4 className="company-name">{company}</h4>
            </a>
            <p>{location}</p>
          </span>
          <span className="position-dates">
            <p>{position}</p>
            <em>{dates}</em>
          </span>
        </div>
      </div>
      <div className="resume-info">{displayWorkDetails}</div>
    </div>
  );
}

export default ResumeCard;
