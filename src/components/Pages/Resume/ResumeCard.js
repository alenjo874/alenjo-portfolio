import React from "react";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

function ResumeCard({
  company,
  logo,
  link,
  position,
  details,
  location,
  dates,
  scrollShowAnimation,
}) {
  const displayWorkDetails = details.map((detail) => {
    return (
      <li key={uuidv4()} className="detail-element">
        {detail}
      </li>
    );
  });

  return (
    <motion.div className="resume-card" {...scrollShowAnimation}>
      <div className="resume-header">
        <div className="company-logo">
          <a href={link} target="_blank" rel="noreferrer">
            <img src={logo} alt={company} />
          </a>
        </div>
        <div className="company-details">
          <span className="company-loc">
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="company-link"
            >
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
    </motion.div>
  );
}

export default ResumeCard;
